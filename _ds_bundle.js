/* @ds-bundle: {"format":3,"namespace":"MorahDesignSystem_32f810","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ResultBand","sourcePath":"components/data/ResultBand.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"NavItem","sourcePath":"components/navigation/NavItem.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"10e18777f4ac","components/core/Badge.jsx":"220fa606929a","components/core/Card.jsx":"a2ce1c003064","components/core/Icon.jsx":"955a1ef427a4","components/core/Button.jsx":"f904c8948543","components/data/ResultBand.jsx":"88235f590028","components/data/StatCard.jsx":"9e5fadd8ca20","components/forms/Input.jsx":"653a2bccb753","components/forms/Select.jsx":"bfbc28280b47","components/navigation/NavItem.jsx":"97ce4771b586","components/navigation/Tabs.jsx":"0f32f5ad8b8e","ui_kits/tecnico/App.jsx":"c1ace4d7699b","ui_kits/tecnico/Header.jsx":"926c4dbf5030","ui_kits/tecnico/Screens.jsx":"66fbc722cd5d","ui_kits/tecnico/Sidebar.jsx":"dedd194e6675","ui_kits/tecnico/data.js":"e17f5bcd5d69"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MorahDesignSystem_32f810 = window.MorahDesignSystem_32f810 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Circular user/company avatar with initials fallback. */
function Avatar({
  name = '',
  src = null,
  size = 40,
  tone = 'berry',
  style = {},
  ...rest
}) {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase() || '?';
  const tones = {
    berry: 'var(--gradient-brand)',
    leaf: 'var(--gradient-leaf)',
    dark: 'var(--berry-950)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      background: src ? 'transparent' : tones[tone] || tones.berry,
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: size * 0.38,
      overflow: 'hidden',
      flexShrink: 0,
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.12)',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small label chip. Tones map to Morah's neutral + status palette.
 * Used for company classifications (SETOR, GHE, GES) and report bands.
 */
function Badge({
  children,
  tone = 'neutral',
  solid = false,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      soft: {
        bg: 'var(--gray-100)',
        fg: 'var(--gray-600)'
      },
      solid: {
        bg: 'var(--gray-900)',
        fg: '#fff'
      }
    },
    berry: {
      soft: {
        bg: 'var(--berry-50)',
        fg: 'var(--berry-700)'
      },
      solid: {
        bg: 'var(--berry-600)',
        fg: '#fff'
      }
    },
    leaf: {
      soft: {
        bg: 'var(--leaf-50)',
        fg: 'var(--leaf-700)'
      },
      solid: {
        bg: 'var(--leaf-600)',
        fg: '#fff'
      }
    },
    critical: {
      soft: {
        bg: 'var(--critical-50)',
        fg: 'var(--critical-700)'
      },
      solid: {
        bg: 'var(--critical-500)',
        fg: '#fff'
      }
    },
    warning: {
      soft: {
        bg: 'var(--warning-50)',
        fg: 'var(--warning-700)'
      },
      solid: {
        bg: 'var(--warning-500)',
        fg: '#fff'
      }
    },
    success: {
      soft: {
        bg: 'var(--success-50)',
        fg: 'var(--success-700)'
      },
      solid: {
        bg: 'var(--success-500)',
        fg: '#fff'
      }
    },
    info: {
      soft: {
        bg: 'var(--info-50)',
        fg: 'var(--info-700)'
      },
      solid: {
        bg: 'var(--info-500)',
        fg: '#fff'
      }
    }
  };
  const t = (tones[tone] || tones.neutral)[solid ? 'solid' : 'soft'];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      padding: '3px 8px',
      borderRadius: 'var(--radius-xs)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      lineHeight: 1.4,
      background: t.bg,
      color: t.fg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Base surface card — white, hairline border, near-flat shadow. */
function Card({
  children,
  padding = 'var(--space-6)',
  interactive = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      padding,
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      e.currentTarget.style.transform = 'translateY(-1px)';
      e.currentTarget.style.borderColor = 'var(--border-default)';
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-card)';
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * React-safe Lucide icon. Renders the icon imperatively into a span that
 * React owns but never reconciles children of — unlike lucide.createIcons(),
 * which replaces React-managed DOM nodes and crashes reconciliation.
 * Requires the lucide UMD script (window.lucide) to be loaded.
 */
function Icon({
  name,
  size = 16,
  strokeWidth = 2,
  color = 'currentColor',
  style = {},
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !name) return;
    let cancelled = false;
    const draw = () => {
      if (cancelled || !el) return true;
      const L = window.lucide;
      if (!L || !L.icons) return false;
      const pascal = String(name).split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
      const node = L.icons[pascal] || L.icons[name];
      el.innerHTML = '';
      if (!node) return true;
      let svg = null;
      if (typeof L.createElement === 'function') {
        try {
          svg = L.createElement(node);
        } catch (e) {
          svg = null;
        }
      }
      if (!svg) {
        // Fallback: build the SVG from the icon-node array directly.
        const NS = 'http://www.w3.org/2000/svg';
        svg = document.createElementNS(NS, 'svg');
        const defaults = {
          xmlns: NS,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': '2',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round'
        };
        Object.entries(defaults).forEach(([k, v]) => svg.setAttribute(k, v));
        const children = Array.isArray(node) ? node : [];
        children.forEach(child => {
          if (!Array.isArray(child)) return;
          const [tag, attrs] = child;
          const c = document.createElementNS(NS, tag);
          Object.entries(attrs || {}).forEach(([k, v]) => c.setAttribute(k, v));
          svg.appendChild(c);
        });
      }
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '100%');
      svg.setAttribute('stroke-width', String(strokeWidth));
      el.appendChild(svg);
      return true;
    };
    if (!draw()) {
      // lucide script may still be loading — retry briefly.
      const iv = setInterval(() => {
        if (draw()) clearInterval(iv);
      }, 120);
      setTimeout(() => clearInterval(iv), 4000);
      return () => {
        cancelled = true;
        clearInterval(iv);
      };
    }
    return () => {
      cancelled = true;
    };
  }, [name, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      color,
      flexShrink: 0,
      lineHeight: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Icon
} = __ds_scope;

/**
 * Morah action button. Flat, solid fills — the berry is an accent,
 * not a costume. Quiet secondary, ghost, dark and danger variants.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '7px 13px',
      fontSize: 'var(--text-sm)',
      radius: 'var(--radius-sm)',
      gap: '6px',
      icon: 15
    },
    md: {
      padding: '9px 16px',
      fontSize: 'var(--text-base)',
      radius: 'var(--radius-control)',
      gap: '8px',
      icon: 16
    },
    lg: {
      padding: '12px 22px',
      fontSize: 'var(--text-md)',
      radius: 'var(--radius-control)',
      gap: '9px',
      icon: 18
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--berry-600)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-xs)'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-xs)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    dark: {
      background: 'var(--gray-900)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-xs)'
    },
    danger: {
      background: 'var(--critical-500)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-xs)'
    },
    leaf: {
      background: 'var(--leaf-600)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-xs)'
    }
  };
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      padding: s.padding,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-snug)',
      borderRadius: s.radius,
      cursor: disabled ? 'not-allowed' : 'pointer',
      width: fullWidth ? '100%' : 'auto',
      opacity: disabled ? 0.5 : 1,
      transition: 'transform var(--dur-fast) var(--ease-out), filter var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.filter = 'none';
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(0.96)';
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement(Icon, {
    name: iconLeft,
    size: s.icon
  }), children, iconRight && /*#__PURE__*/React.createElement(Icon, {
    name: iconRight,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/data/ResultBand.jsx
try { (() => {
/**
 * NR1 result band indicator. Maps an average score (1–5) or an explicit
 * level to Morah's Crítico / Atenção / Adequado palette.
 */
function ResultBand({
  level = null,
  score = null,
  showRange = false,
  style = {}
}) {
  const resolve = () => {
    if (level) return level;
    if (score == null) return 'adequado';
    if (score <= 2.5) return 'critico';
    if (score <= 3.9) return 'atencao';
    return 'adequado';
  };
  const lv = resolve();
  const map = {
    critico: {
      label: 'Crítico',
      range: '1.0 – 2.5',
      bg: 'var(--critical-50)',
      dot: 'var(--critical-500)',
      fg: 'var(--critical-700)',
      bd: 'var(--critical-100)'
    },
    atencao: {
      label: 'Atenção',
      range: '2.6 – 3.9',
      bg: 'var(--warning-50)',
      dot: 'var(--warning-500)',
      fg: 'var(--warning-700)',
      bd: 'var(--warning-100)'
    },
    adequado: {
      label: 'Adequado',
      range: '4.0 – 5.0',
      bg: 'var(--success-50)',
      dot: 'var(--success-500)',
      fg: 'var(--success-700)',
      bd: 'var(--success-100)'
    }
  };
  const c = map[lv] || map.adequado;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '7px 12px',
      borderRadius: 'var(--radius-control)',
      background: c.bg,
      border: `1px solid ${c.bd}`,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-bold)',
      color: c.fg,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: c.dot,
      flexShrink: 0
    }
  }), c.label, score != null ? ` · ${Number(score).toFixed(1)}` : '', showRange && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      opacity: 0.75
    }
  }, c.range));
}
Object.assign(__ds_scope, { ResultBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ResultBand.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
const {
  Icon
} = __ds_scope;

/**
 * Dashboard metric tile — flat white card, hairline border, a tinted
 * icon chip and a quiet sparkline. The number is the hero.
 */
function StatCard({
  label,
  value,
  icon = 'bar-chart-3',
  tone = 'berry',
  data = [],
  style = {}
}) {
  const tones = {
    berry: {
      chip: 'var(--berry-50)',
      ink: 'var(--berry-600)',
      line: 'var(--berry-500)'
    },
    blue: {
      chip: 'var(--info-50)',
      ink: 'var(--info-500)',
      line: 'var(--info-500)'
    },
    green: {
      chip: 'var(--success-50)',
      ink: 'var(--success-500)',
      line: 'var(--success-500)'
    },
    amber: {
      chip: 'var(--warning-50)',
      ink: 'var(--warning-700)',
      line: 'var(--warning-500)'
    }
  };
  const t = tones[tone] || tones.berry;
  const pts = data.length ? data : [4, 6, 5, 8, 7, 11, 13];
  const max = Math.max(...pts),
    min = Math.min(...pts);
  const W = 220,
    H = 44,
    n = pts.length;
  const norm = v => H - 5 - (v - min) / (max - min || 1) * (H - 12);
  const coords = pts.map((v, i) => [i / (n - 1) * W, norm(v)]);
  const linePath = coords.map((c, i) => `${i ? 'L' : 'M'}${c[0].toFixed(1)},${c[1].toFixed(1)}`).join(' ');
  const areaPath = `${linePath} L${W},${H} L0,${H} Z`;
  const gid = `spark-${tone}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xs)',
      padding: 'var(--space-5)',
      minHeight: 148,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      paddingTop: 8,
      lineHeight: 1.45
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 'var(--radius-sm)',
      background: t.chip,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: t.ink,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 'var(--weight-extra)',
      color: 'var(--text-strong)',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-tight)'
    }
  }, value), /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    preserveAspectRatio: "none",
    style: {
      width: '100%',
      height: 36,
      marginTop: 'auto',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: gid,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: t.line,
    stopOpacity: "0.13"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: t.line,
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: areaPath,
    fill: `url(#${gid})`
  }), /*#__PURE__*/React.createElement("path", {
    d: linePath,
    fill: "none",
    stroke: t.line,
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Icon
} = __ds_scope;

/** Text input with optional leading Lucide icon. */
function Input({
  icon = null,
  label = null,
  hint = null,
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'var(--surface-card)',
      border: `1px solid ${focus ? 'var(--berry-500)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-control)',
      padding: '0 12px',
      boxShadow: focus ? 'var(--shadow-focus)' : 'var(--shadow-xs)',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16,
    color: "var(--text-faint)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      padding: '10px 0',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      ...style
    }
  }, rest))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Icon
} = __ds_scope;

/** Styled native select matching Morah inputs. `dark` renders glass on dark surfaces. */
function Select({
  options = [],
  label = null,
  dark = false,
  style = {},
  wrapStyle = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      padding: '9px 34px 9px 12px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-medium)',
      color: dark ? '#fff' : 'var(--text-strong)',
      background: dark ? 'rgba(255,255,255,0.06)' : 'var(--surface-card)',
      border: `1px solid ${dark ? 'var(--border-on-dark)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-control)',
      cursor: 'pointer',
      outline: 'none',
      boxShadow: dark ? 'none' : 'var(--shadow-xs)',
      ...style
    }
  }, rest), options.map((o, i) => {
    const val = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: i,
      value: val
    }, lbl);
  })), /*#__PURE__*/React.createElement(Icon, {
    name: "chevrons-up-down",
    size: 14,
    color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-faint)',
    style: {
      position: 'absolute',
      right: 11,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavItem.jsx
try { (() => {
const {
  Icon
} = __ds_scope;

/**
 * Sidebar navigation row for the Morah admin panel.
 * Colors come from the --nav-* shell tokens, so the same component
 * works on the light shell and on the plum sidebar (data-theme="plum").
 */
function NavItem({
  icon,
  label,
  active = false,
  dot = false,
  onClick = () => {},
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: '11px',
      width: '100%',
      padding: '9px 12px',
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--radius-control)',
      textAlign: 'left',
      background: active ? 'var(--nav-active-bg)' : hover ? 'var(--nav-hover-bg)' : 'transparent',
      color: active ? 'var(--nav-active-fg)' : hover ? 'var(--nav-hover-fg)' : 'var(--nav-fg)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      fontWeight: active ? 'var(--weight-bold)' : 'var(--weight-medium)',
      transition: 'background var(--dur-fast), color var(--dur-fast)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 17,
    strokeWidth: active ? 2.3 : 2,
    color: active ? 'var(--nav-active-icon)' : 'currentColor'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, label), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--nav-dot)',
      flexShrink: 0
    }
  }));
}
Object.assign(__ds_scope, { NavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Underline tab bar — quiet hairline rail, berry underline on the active tab. */
function Tabs({
  tabs = [],
  active = 0,
  onChange = () => {},
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '24px',
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, tabs.map((t, i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => onChange(i),
      style: {
        padding: '10px 2px 12px',
        border: 'none',
        cursor: 'pointer',
        background: 'transparent',
        color: on ? 'var(--berry-700)' : 'var(--text-muted)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-base)',
        fontWeight: on ? 'var(--weight-bold)' : 'var(--weight-medium)',
        boxShadow: on ? 'inset 0 -2px 0 var(--berry-600)' : 'none',
        transition: 'color var(--dur-fast), box-shadow var(--dur-fast)'
      }
    }, t);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tecnico/App.jsx
try { (() => {
// Morah técnico — app shell composition.
function App() {
  const [screen, setScreen] = React.useState('overview');
  const [company, setCompany] = React.useState('Todas as empresas');
  const [theme, setTheme] = React.useState(() => {
    try {
      return localStorage.getItem('morah-theme') || 'light';
    } catch (e) {
      return 'light';
    }
  });
  const D = window.MORAH;
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('morah-theme', theme);
    } catch (e) {}
  }, [theme]);
  const Screen = window.Screens[screen] || window.Screens.overview;
  const t = D.titles[screen] || D.titles.overview;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100vh',
      overflow: 'hidden',
      background: 'var(--bg-app)'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: screen,
    onNavigate: setScreen
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Header, {
    screen: screen,
    company: company,
    onCompany: setCompany,
    theme: theme,
    onToggleTheme: () => setTheme(tm => tm === 'plum' ? 'light' : 'plum')
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '28px 32px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-2xl)',
      fontWeight: 800,
      color: 'var(--text-strong)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, t.h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-muted)',
      margin: '6px 0 0'
    }
  }, t.sub)), /*#__PURE__*/React.createElement(Screen, null)))));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tecnico/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tecnico/Header.jsx
try { (() => {
// Morah técnico — slim top bar (light, hairline divider, soft blur).
const {
  Select: DsSelect,
  Icon: HdrIcon
} = window.MorahDesignSystem_32f810;
function Header({
  screen,
  company,
  onCompany,
  theme,
  onToggleTheme
}) {
  const D = window.MORAH;
  const iconBtn = {
    width: 38,
    height: 38,
    borderRadius: 'var(--radius-control)',
    cursor: 'pointer',
    background: 'var(--surface-card)',
    border: '1px solid var(--border-subtle)',
    color: 'var(--text-muted)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'var(--shadow-xs)'
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 'var(--topbar-height)',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '0 28px',
      background: 'rgba(255,255,255,0.82)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'relative',
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--leaf-500)',
      boxShadow: '0 0 0 3px var(--leaf-50)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, D.tenant.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 500,
      color: 'var(--text-faint)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xs)',
      padding: '2px 7px',
      letterSpacing: '0.06em',
      flexShrink: 0
    }
  }, "T\xC9CNICO")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 230
    }
  }, /*#__PURE__*/React.createElement(DsSelect, {
    value: company,
    onChange: e => onCompany(e.target.value),
    options: ['Todas as empresas', ...window.MORAH.companies.map(c => c.name)]
  })), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Alternar tema do painel",
    title: "Alternar tema",
    onClick: onToggleTheme,
    style: iconBtn
  }, /*#__PURE__*/React.createElement(HdrIcon, {
    name: theme === 'plum' ? 'sun' : 'moon',
    size: 17
  })), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Notifica\xE7\xF5es",
    style: iconBtn
  }, /*#__PURE__*/React.createElement(HdrIcon, {
    name: "bell",
    size: 17
  }))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tecnico/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tecnico/Screens.jsx
try { (() => {
// Morah técnico — screen content. Composes bundle primitives.
const M = window.MorahDesignSystem_32f810;
const {
  StatCard,
  Card,
  Button,
  Badge,
  Tabs,
  Input,
  Select,
  ResultBand,
  Icon
} = M;

/* ---------- shared bits ---------- */
function PanelCard({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      padding: 'var(--space-6)',
      ...style
    }
  }, children);
}
function EmptyState({
  icon = 'info',
  title,
  sub,
  tone = 'neutral'
}) {
  const tones = {
    neutral: {
      bg: 'var(--gray-100)',
      fg: 'var(--text-muted)'
    },
    info: {
      bg: 'var(--info-50)',
      fg: 'var(--info-500)'
    },
    berry: {
      bg: 'var(--berry-50)',
      fg: 'var(--berry-600)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '56px 24px',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-md)',
      background: t.bg,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: t.fg,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 21
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-lg)',
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      maxWidth: 380,
      lineHeight: 1.6
    }
  }, sub));
}
function PanelTitle({
  title,
  sub,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-md)',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      margin: '4px 0 0'
    }
  }, sub)), right);
}

/* ---------- Bar chart (Histórico de Avaliações) ---------- */
function BarChart({
  chart
}) {
  const W = 1040,
    H = 280,
    padL = 40,
    padB = 30,
    padT = 18;
  const innerH = H - padB - padT,
    innerW = W - padL - 12;
  const n = chart.values.length;
  const bw = 22;
  const yticks = [0, 4, 8, 12, 16];
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    style: {
      width: '100%',
      height: 300
    }
  }, yticks.map(v => {
    const y = padT + innerH - v / chart.max * innerH;
    return /*#__PURE__*/React.createElement("g", {
      key: v
    }, /*#__PURE__*/React.createElement("line", {
      x1: padL,
      y1: y,
      x2: W - 12,
      y2: y,
      stroke: "var(--gray-100)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("text", {
      x: padL - 12,
      y: y + 4,
      textAnchor: "end",
      fontFamily: "var(--font-mono)",
      fontSize: "11",
      fill: "var(--text-faint)"
    }, v));
  }), chart.values.map((v, i) => {
    const cx = padL + innerW / n * (i + 0.5);
    const bh = v / chart.max * innerH;
    const y = padT + innerH - bh;
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, v > 0 && /*#__PURE__*/React.createElement("rect", {
      x: cx - bw / 2,
      y: y,
      width: bw,
      height: bh,
      rx: "5",
      fill: "var(--berry-500)"
    }), v > 0 && /*#__PURE__*/React.createElement("text", {
      x: cx,
      y: y - 8,
      textAnchor: "middle",
      fontFamily: "var(--font-mono)",
      fontSize: "11",
      fill: "var(--text-muted)"
    }, v), v === 0 && /*#__PURE__*/React.createElement("line", {
      x1: cx - bw / 2,
      y1: padT + innerH,
      x2: cx + bw / 2,
      y2: padT + innerH,
      stroke: "var(--gray-300)",
      strokeWidth: "2",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("text", {
      x: cx,
      y: H - 8,
      textAnchor: "middle",
      fontFamily: "var(--font-body)",
      fontSize: "11.5",
      fill: "var(--text-muted)"
    }, chart.labels[i], "/2026"));
  }));
}

/* ---------- Overview ---------- */
function OverviewScreen() {
  const D = window.MORAH;
  const [range, setRange] = React.useState('Últimos 6 meses');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-4)'
    }
  }, D.kpis.map(k => /*#__PURE__*/React.createElement(StatCard, {
    key: k.id,
    label: k.label,
    value: k.value,
    icon: k.icon,
    tone: k.tone,
    data: k.data
  }))), /*#__PURE__*/React.createElement(PanelCard, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-md)',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "Hist\xF3rico de Avalia\xE7\xF5es"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: 'var(--berry-500)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "Avalia\xE7\xF5es Realizadas")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 168
    }
  }, /*#__PURE__*/React.createElement(Select, {
    value: range,
    onChange: e => setRange(e.target.value),
    options: ['Últimos 6 meses', 'Últimos 12 meses', 'Este ano']
  })))), /*#__PURE__*/React.createElement(BarChart, {
    chart: D.chart
  })));
}

/* ---------- Empresas ---------- */
function EmpresasScreen() {
  const D = window.MORAH;
  const [q, setQ] = React.useState('');
  const list = D.companies.filter(c => c.name.toLowerCase().includes(q.toLowerCase()) || c.cnpj.includes(q));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 240,
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Buscar por nome ou CNPJ",
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 86
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['10', '5', '25']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: "upload"
  }, "Importar em Lote"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: "plus"
  }, "Nova Empresa")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-4)'
    }
  }, list.map((c, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    interactive: true,
    padding: "var(--space-5)",
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--berry-50)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--berry-600)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "building-2",
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      lineHeight: 1.35
    }
  }, c.name), /*#__PURE__*/React.createElement(Badge, {
    tone: c.tone
  }, c.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      marginTop: 7
    }
  }, c.cnpj))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      marginTop: 'auto',
      paddingTop: 10,
      borderTop: '1px solid var(--gray-100)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    iconLeft: "pencil",
    style: {
      color: 'var(--text-body)'
    }
  }, "Editar"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    iconLeft: "trash-2",
    style: {
      color: 'var(--critical-500)'
    }
  }, "Excluir"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "Mostrando 1 a ", list.length, " de ", D.companies.length, " empresas"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    iconLeft: "chevron-left"
  }, "Anterior"), [1, 2, 3].map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    style: {
      width: 32,
      height: 32,
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      background: p === 1 ? 'var(--berry-600)' : 'var(--surface-card)',
      color: p === 1 ? '#fff' : 'var(--text-body)',
      border: p === 1 ? '1px solid transparent' : '1px solid var(--border-subtle)'
    }
  }, p)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    iconRight: "chevron-right"
  }, "Pr\xF3ximo"))));
}

/* ---------- Relatórios ---------- */
function RelatoriosScreen() {
  const [tab, setTab] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Relatórios Salvos', 'Filtros de Relatório', 'Individuais'],
    active: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement(PanelCard, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(EmptyState, {
    icon: "info",
    title: "Selecione uma empresa",
    sub: "Selecione uma empresa espec\xEDfica no seletor de empresas, no topo da p\xE1gina, para visualizar os relat\xF3rios salvos."
  })));
}

/* ---------- Comparar Relatórios ---------- */
function CompararScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(PanelCard, null, /*#__PURE__*/React.createElement(PanelTitle, {
    title: "Selecione os Relat\xF3rios para Compara\xE7\xE3o"
  }), /*#__PURE__*/React.createElement(EmptyState, {
    icon: "building-2",
    title: "Selecione uma empresa",
    sub: "Para comparar relat\xF3rios, selecione uma empresa espec\xEDfica no seletor de empresas, no topo da p\xE1gina."
  })), /*#__PURE__*/React.createElement(PanelCard, null, /*#__PURE__*/React.createElement(PanelTitle, {
    title: "Legenda de Interpreta\xE7\xE3o dos Resultados"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-4)'
    }
  }, [{
    lv: 'critico',
    desc: 'Necessita de intervenção imediata.'
  }, {
    lv: 'atencao',
    desc: 'Requer atenção e melhorias.'
  }, {
    lv: 'adequado',
    desc: 'Situação adequada.'
  }].map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(ResultBand, {
    level: b.lv,
    showRange: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      paddingLeft: 2
    }
  }, b.desc))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-faint)',
      lineHeight: 1.7
    }
  }, "Relat\xF3rio gerado pela plataforma Morah \xB7 Ferramenta de Indicador de Estresse", /*#__PURE__*/React.createElement("br", null), "Dados an\xF4nimos e agregados \u2014 11/06/2026 \xE0s 13:37:29"));
}

/* ---------- Modelos de Apresentação ---------- */
function ModelosScreen() {
  const D = window.MORAH;
  return /*#__PURE__*/React.createElement(PanelCard, null, /*#__PURE__*/React.createElement(PanelTitle, {
    title: "Biblioteca de Modelos",
    sub: `${D.models.length} itens`,
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("button", {
      "aria-label": "Ver em lista",
      style: {
        width: 34,
        height: 34,
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--border-subtle)',
        background: 'var(--surface-card)',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-faint)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "list",
      size: 15
    })), /*#__PURE__*/React.createElement("button", {
      "aria-label": "Ver em grade",
      style: {
        width: 34,
        height: 34,
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--berry-200)',
        background: 'var(--berry-50)',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--berry-600)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "layout-grid",
      size: 15
    })))
  }), /*#__PURE__*/React.createElement("div", null, D.models.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 2px',
      borderBottom: i < D.models.length - 1 ? '1px solid var(--gray-100)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--berry-50)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--berry-600)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: m.kind === 'Vídeo' ? 'play' : m.kind === 'Slides' ? 'presentation' : 'file-text',
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      lineHeight: 1.35
    }
  }, m.t), /*#__PURE__*/React.createElement(Badge, {
    tone: "info"
  }, m.kind)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-faint)',
      marginTop: 3
    }
  }, "Adicionado em ", m.d)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    iconLeft: m.kind === 'Vídeo' ? 'play' : 'download',
    style: {
      flexShrink: 0
    }
  }, m.kind === 'Vídeo' ? 'Assistir' : 'Baixar')))));
}

/* ---------- Termos ---------- */
function TermosScreen() {
  const D = window.MORAH;
  return /*#__PURE__*/React.createElement(PanelCard, {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-md)',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "Termos de Uso da Plataforma"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 1.8,
      marginTop: 6
    }
  }, "Usu\xE1rio: ", D.tenant.tech, " (", D.tenant.email, ") \xB7 Aceito em: ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-body)'
    }
  }, "06/05/2026, 18:14:13"))), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    style: {
      marginTop: 3
    }
  }, "Aceito")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gray-50)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-6) var(--space-8)',
      marginTop: 14,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      lineHeight: 1.75,
      height: 'calc(100vh - 440px)',
      minHeight: 320,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "TERMOS DE USO DA PLATAFORMA MORAH \u2014 LICENCIAMENTO PARA REVENDA E APLICA\xC7\xC3O"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "1. ACEITA\xC7\xC3O DOS TERMOS."), " Ao utilizar a plataforma \"Morah\" o USU\xC1RIO concorda integralmente com as condi\xE7\xF5es de uso, captura e tratamento de dados psicossociais conforme a NR-1, garantindo a anonimiza\xE7\xE3o e agrega\xE7\xE3o dos resultados."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "2. LICEN\xC7A DE USO."), " A licen\xE7a concede ao t\xE9cnico de seguran\xE7a do trabalho o direito de aplicar avalia\xE7\xF5es, gerar relat\xF3rios e gerenciar empresas vinculadas \xE0 sua conta, dentro do limite de avalia\xE7\xF5es contratado."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "3. PROTE\xC7\xC3O DE DADOS (LGPD)."), " O tratamento de dados pessoais observa a Lei n\xBA 13.709/2018. As respostas individuais s\xE3o anonimizadas na coleta e apresentadas exclusivamente de forma agregada; a plataforma n\xE3o permite a identifica\xE7\xE3o de respondentes nos relat\xF3rios, pain\xE9is ou exporta\xE7\xF5es."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "4. RESPONSABILIDADES DO USU\xC1RIO."), " O USU\xC1RIO compromete-se a aplicar os instrumentos de avalia\xE7\xE3o conforme as orienta\xE7\xF5es t\xE9cnicas da plataforma, a manter sigilo sobre suas credenciais de acesso e a utilizar os resultados unicamente para fins de gest\xE3o de riscos psicossociais no \xE2mbito do PGR."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "5. PROPRIEDADE INTELECTUAL."), " Os instrumentos, metodologias de interpreta\xE7\xE3o, marca e materiais de apoio disponibilizados s\xE3o de titularidade da Morah, sendo vedada a reprodu\xE7\xE3o ou redistribui\xE7\xE3o fora do escopo da licen\xE7a contratada."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "6. VIG\xCANCIA E RESCIS\xC3O."), " Estes termos vigoram enquanto durar a rela\xE7\xE3o contratual. O descumprimento das cl\xE1usulas acima autoriza a suspens\xE3o imediata do acesso, sem preju\xEDzo das demais medidas cab\xEDveis."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "7. DISPOSI\xC7\xD5ES GERAIS."), " D\xFAvidas sobre estes termos ou sobre o tratamento de dados podem ser encaminhadas ao encarregado de dados indicado no contrato de licenciamento.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: "file-text"
  }, "Visualizar PDF"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: "download"
  }, "Baixar PDF")));
}
function SelectCompanyScreen({
  what
}) {
  return /*#__PURE__*/React.createElement(PanelCard, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(EmptyState, {
    icon: "info",
    title: "Selecione uma empresa",
    sub: `Para gerenciar ${what}, selecione uma empresa no seletor de empresas, no topo da página.`
  }));
}
window.Screens = {
  overview: OverviewScreen,
  empresas: EmpresasScreen,
  relatorios: RelatoriosScreen,
  comparar: CompararScreen,
  modelos: ModelosScreen,
  termos: TermosScreen,
  setor: () => /*#__PURE__*/React.createElement(SelectCompanyScreen, {
    what: "setores"
  }),
  cargos: () => /*#__PURE__*/React.createElement(SelectCompanyScreen, {
    what: "cargos"
  }),
  campanhas: () => /*#__PURE__*/React.createElement(SelectCompanyScreen, {
    what: "campanhas"
  }),
  link: () => /*#__PURE__*/React.createElement(SelectCompanyScreen, {
    what: "o link de avalia\xE7\xE3o"
  })
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tecnico/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tecnico/Sidebar.jsx
try { (() => {
// Morah técnico — Sidebar. Theme-aware via the --sidebar-*/--nav-* tokens:
// light shell by default, deep plum when <html data-theme="plum">.
const {
  NavItem: DsNavItem,
  Avatar: DsAvatar,
  Icon: DsIcon
} = window.MorahDesignSystem_32f810;
function Sidebar({
  active,
  onNavigate
}) {
  const D = window.MORAH;
  const Section = ({
    label
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 12px',
      marginBottom: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 10.5,
      fontWeight: 800,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--sidebar-section-fg)'
    }
  }, label);
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 'var(--sidebar-width)',
      flexShrink: 0,
      height: '100%',
      background: 'var(--sidebar-bg)',
      display: 'flex',
      flexDirection: 'column',
      borderRight: '1px solid var(--sidebar-border)',
      transition: 'background var(--dur-slow) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '22px 20px 20px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "morah-logo-light",
    src: "../../assets/morah-mark.png",
    alt: "",
    style: {
      width: 30,
      height: 'auto'
    }
  }), /*#__PURE__*/React.createElement("img", {
    className: "morah-logo-light",
    src: "../../assets/morah-wordmark.png",
    alt: "Morah",
    style: {
      width: 86,
      height: 'auto'
    }
  }), /*#__PURE__*/React.createElement("img", {
    className: "morah-logo-dark",
    src: "../../assets/morah-mark-white.png",
    alt: "",
    style: {
      width: 30,
      height: 'auto'
    }
  }), /*#__PURE__*/React.createElement("img", {
    className: "morah-logo-dark",
    src: "../../assets/morah-wordmark-white.png",
    alt: "Morah",
    style: {
      width: 86,
      height: 'auto'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '4px 12px 12px'
    }
  }, /*#__PURE__*/React.createElement(Section, {
    label: "Navega\xE7\xE3o"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      marginBottom: 24
    }
  }, D.nav.navegacao.map(it => /*#__PURE__*/React.createElement(DsNavItem, {
    key: it.id,
    icon: it.icon,
    label: it.label,
    active: active === it.id,
    onClick: () => onNavigate(it.id)
  }))), /*#__PURE__*/React.createElement(Section, {
    label: "Ferramentas"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, D.nav.ferramentas.map(it => /*#__PURE__*/React.createElement(DsNavItem, {
    key: it.id,
    icon: it.icon,
    label: it.label,
    active: active === it.id,
    onClick: () => onNavigate(it.id)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      borderTop: '1px solid var(--sidebar-divider)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '9px 10px',
      background: 'var(--sidebar-user-bg)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--sidebar-user-border)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(DsAvatar, {
    name: D.tenant.tech,
    size: 32,
    tone: "berry"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      color: 'var(--sidebar-user-name)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, D.tenant.tech), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--sidebar-user-role)'
    }
  }, D.tenant.role)), /*#__PURE__*/React.createElement(DsIcon, {
    name: "chevrons-up-down",
    size: 15,
    color: "var(--sidebar-user-role)"
  }))));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tecnico/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tecnico/data.js
try { (() => {
// Morah técnico — demo data (plain JS, loaded before the JSX scripts)
window.MORAH = {
  tenant: { name: 'Clínica Pedrosa', tech: 'Lucas C. Pedrosa Marques', email: 'tec.pedrosa@gmail.com', role: 'Administrador' },

  nav: {
    navegacao: [
      { id: 'overview',   icon: 'layout-grid', label: 'Visão Geral' },
      { id: 'termos',     icon: 'file-text',   label: 'Termos de Aceite' },
      { id: 'empresas',   icon: 'building-2',  label: 'Empresas' },
      { id: 'setor',      icon: 'layers',      label: 'Setores' },
      { id: 'cargos',     icon: 'briefcase',   label: 'Cargos' },
      { id: 'campanhas',  icon: 'calendar-range', label: 'Campanhas' },
      { id: 'relatorios', icon: 'bar-chart-3', label: 'Relatórios' },
    ],
    ferramentas: [
      { id: 'link',     icon: 'link-2',         label: 'Link de Avaliação' },
      { id: 'comparar', icon: 'arrow-left-right',label: 'Comparar Relatórios' },
      { id: 'modelos',  icon: 'clipboard-list', label: 'Modelos de Apresentação' },
    ],
  },

  titles: {
    overview:   { h: 'Visão Geral',            sub: 'Acompanhe os indicadores das suas avaliações' },
    termos:     { h: 'Termos de Aceite',       sub: 'Status do aceite dos termos de uso da plataforma' },
    empresas:   { h: 'Empresas',               sub: 'Gerencie as empresas vinculadas à sua conta' },
    setor:      { h: 'Setores',                sub: 'Estruture as empresas por setor' },
    cargos:     { h: 'Cargos',                 sub: 'Gerencie os cargos de cada setor' },
    campanhas:  { h: 'Campanhas',              sub: 'Organize os períodos de avaliação' },
    relatorios: { h: 'Relatórios',             sub: 'Resultados e interpretações das avaliações' },
    link:       { h: 'Link de Avaliação',      sub: 'Compartilhe o link anônimo com os colaboradores' },
    comparar:   { h: 'Comparar Relatórios',    sub: 'Evolução dos resultados entre períodos' },
    modelos:    { h: 'Modelos de Apresentação',sub: 'Materiais de apoio para download' },
  },

  companies: [
    { name: 'AUTO POSTO NOVA AÇAILANDIA LTDA', cnpj: '12.811.039/0001-78', tag: 'SETOR', tone: 'neutral' },
    { name: 'DG SPORTS', cnpj: '29.956.077/0001-11', tag: 'SETOR', tone: 'neutral' },
    { name: 'ESCOLA ARCO ÍRIS', cnpj: '41.534.414/0001-88', tag: 'SETOR', tone: 'neutral' },
    { name: 'F&S ASSESSORIA E CONSULTORIA - UNF MA', cnpj: '16.568.488/0001-98', tag: 'GHE', tone: 'berry' },
    { name: 'F&S ASSESSORIA E CONSULTORIA - UNF MS', cnpj: '16.568.488/0001-98', tag: 'GES', tone: 'info' },
    { name: 'TRANSPORTES VALE VERDE', cnpj: '33.402.118/0001-04', tag: 'SETOR', tone: 'neutral' },
  ],

  models: [
    { t: 'Vídeo Aula: Implementação da Plataforma (Como colocar no PGR)', d: '03/06/2026', kind: 'Vídeo' },
    { t: 'Interpretação das Perguntas (Copsoq II Versão Curta)', d: '28/05/2026', kind: 'PDF' },
    { t: 'Formulário de avaliação manual para impressão', d: '21/05/2026', kind: 'PDF' },
    { t: 'Manual de interpretação e aplicação do capítulo 1.5 da NR-1', d: '14/05/2026', kind: 'PDF' },
    { t: 'Modelo de Contrato de Canal de Denúncias', d: '09/05/2026', kind: 'DOC' },
    { t: 'Apresentação para os clientes', d: '02/05/2026', kind: 'Slides' },
  ],

  chart: { labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'], values: [0, 0, 0, 2, 13, 1], max: 16 },

  kpis: [
    { id: 'emp',  label: 'Total de Empresas',       value: 6,     icon: 'building-2',     tone: 'blue',  data: [1,2,2,3,4,5,6] },
    { id: 'rest', label: 'Avaliações Restantes',    value: '11.864', icon: 'clipboard-list', tone: 'green', data: [14,13,13,12,12,12,11] },
    { id: 'rel',  label: 'Relatórios Salvos',       value: 0,     icon: 'file-text',      tone: 'amber', data: [0,0,0,0,0,0,0] },
    { id: 'enc',  label: 'Avaliações Realizadas',   value: 16,    icon: 'message-circle', tone: 'berry', data: [2,4,6,8,10,13,16] },
  ],
};

})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tecnico/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ResultBand = __ds_scope.ResultBand;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
