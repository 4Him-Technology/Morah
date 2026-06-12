/**
 * Regenerates _ds_bundle.js from the component + ui_kit sources.
 *
 * Usage:
 *   node _build_bundle.cjs [path-to-node_modules-containing-@babel/standalone]
 *
 * If @babel/standalone is not resolvable normally, pass a node_modules dir,
 * e.g.:  npm install --prefix "%TEMP%\morah-build" @babel/standalone
 *        node _build_bundle.cjs "%TEMP%\morah-build\node_modules"
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

let Babel;
try {
  Babel = require('@babel/standalone');
} catch (e) {
  const extra = process.argv[2];
  if (!extra) { console.error('Pass the node_modules dir containing @babel/standalone'); process.exit(1); }
  Babel = require(path.join(extra, '@babel/standalone'));
}

const ROOT = __dirname;
const NAMESPACE = 'MorahDesignSystem_32f810';

// Dependency-sorted block order (leaf modules first, kit files last).
const FILES = [
  'components/core/Avatar.jsx',
  'components/core/Badge.jsx',
  'components/core/Card.jsx',
  'components/core/Icon.jsx',
  'components/core/Button.jsx',
  'components/data/ResultBand.jsx',
  'components/data/StatCard.jsx',
  'components/forms/Input.jsx',
  'components/forms/Select.jsx',
  'components/navigation/NavItem.jsx',
  'components/navigation/Tabs.jsx',
  'ui_kits/tecnico/App.jsx',
  'ui_kits/tecnico/Header.jsx',
  'ui_kits/tecnico/Screens.jsx',
  'ui_kits/tecnico/Sidebar.jsx',
  'ui_kits/tecnico/data.js',
];

// Manifest order for the header + namespace exports.
const COMPONENTS = [
  { name: 'Avatar', sourcePath: 'components/core/Avatar.jsx' },
  { name: 'Badge', sourcePath: 'components/core/Badge.jsx' },
  { name: 'Button', sourcePath: 'components/core/Button.jsx' },
  { name: 'Card', sourcePath: 'components/core/Card.jsx' },
  { name: 'Icon', sourcePath: 'components/core/Icon.jsx' },
  { name: 'ResultBand', sourcePath: 'components/data/ResultBand.jsx' },
  { name: 'StatCard', sourcePath: 'components/data/StatCard.jsx' },
  { name: 'Input', sourcePath: 'components/forms/Input.jsx' },
  { name: 'Select', sourcePath: 'components/forms/Select.jsx' },
  { name: 'NavItem', sourcePath: 'components/navigation/NavItem.jsx' },
  { name: 'Tabs', sourcePath: 'components/navigation/Tabs.jsx' },
];

const sha12 = (buf) => crypto.createHash('sha256').update(buf).digest('hex').slice(0, 12);

function transformComponent(src) {
  const internalImports = [];
  const lines = src.split('\n');
  const kept = [];
  for (const line of lines) {
    const m = line.match(/^import\s+(?:\{([^}]+)\}|(\w+))\s+from\s+['"]([^'"]+)['"];?\s*$/);
    if (m) {
      const from = m[3];
      if (from === 'react') continue; // React is a global (UMD)
      if (m[1]) internalImports.push(...m[1].split(',').map(s => s.trim().split(/\s+as\s+/).pop()));
      continue;
    }
    kept.push(line.replace(/^export\s+(function|const|class)\s/, '$1 '));
  }
  let body = kept.join('\n');
  if (internalImports.length) {
    body = `const { ${internalImports.join(', ')} } = __ds_scope;\n` + body;
  }
  return body;
}

function transpile(code, filename) {
  return Babel.transform(code, { presets: ['react'], filename }).code;
}

function exportedNames(src) {
  const names = [];
  const re = /^export\s+(?:function|const|class)\s+(\w+)/gm;
  let m;
  while ((m = re.exec(src))) names.push(m[1]);
  return names;
}

const sourceHashes = {};
const blocks = [];

for (const rel of FILES) {
  const abs = path.join(ROOT, rel);
  const raw = fs.readFileSync(abs);
  sourceHashes[rel] = sha12(raw);
  const src = raw.toString('utf8');

  let code;
  let exports = [];
  if (rel.startsWith('components/')) {
    exports = exportedNames(src);
    code = transpile(transformComponent(src), rel);
    code += `\nObject.assign(__ds_scope, { ${exports.join(', ')} });`;
  } else if (rel.endsWith('.jsx')) {
    code = transpile(src, rel);
  } else {
    code = src; // plain JS (data.js)
  }

  blocks.push(
    `// ${rel}\n` +
    `try { (() => {\n${code}\n})(); } catch (e) { __ds_ns.__errors.push({ path: ${JSON.stringify(rel)}, error: String((e && e.message) || e) }); }`
  );
}

const header = {
  format: 3,
  namespace: NAMESPACE,
  components: COMPONENTS,
  sourceHashes,
  inlinedExternals: [],
  unexposedExports: [],
};

const out =
  `/* @ds-bundle: ${JSON.stringify(header)} */\n\n` +
  `(() => {\n\n` +
  `const __ds_ns = (window.${NAMESPACE} = window.${NAMESPACE} || {});\n\n` +
  `const __ds_scope = {};\n\n` +
  `(__ds_ns.__errors = __ds_ns.__errors || []);\n\n` +
  blocks.join('\n\n') + '\n\n' +
  COMPONENTS.map(c => `__ds_ns.${c.name} = __ds_scope.${c.name};`).join('\n\n') + '\n\n' +
  `})();\n`;

fs.writeFileSync(path.join(ROOT, '_ds_bundle.js'), out, 'utf8');
console.log('OK _ds_bundle.js', out.length, 'bytes');
