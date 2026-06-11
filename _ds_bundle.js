/* @ds-bundle: {"format":3,"namespace":"MorahDesignSystem_32f810","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ResultBand","sourcePath":"components/data/ResultBand.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"NavItem","sourcePath":"components/navigation/NavItem.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"10e18777f4ac","components/core/Badge.jsx":"1cbf9ea8339e","components/core/Button.jsx":"15905c98ac5c","components/core/Card.jsx":"d79c75c3719f","components/core/Icon.jsx":"955a1ef427a4","components/data/ResultBand.jsx":"5601a3345edc","components/data/StatCard.jsx":"06fb98683179","components/forms/Input.jsx":"a824af8db946","components/forms/Select.jsx":"2d9419a4eade","components/navigation/NavItem.jsx":"f9c548265dc5","components/navigation/Tabs.jsx":"25ad2fd55055","ui_kits/tecnico/App.jsx":"468d7a482c18","ui_kits/tecnico/Header.jsx":"820df4b296ce","ui_kits/tecnico/Screens.jsx":"c19846b56804","ui_kits/tecnico/Sidebar.jsx":"c58dcfbd15af","ui_kits/tecnico/data.js":"ed1f08f10f32"},"inlinedExternals":[],"unexposedExports":[]} */

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
        bg: 'var(--berry-950)',
        fg: '#fff'
      }
    },
    berry: {
      soft: {
        bg: 'var(--berry-100)',
        fg: 'var(--berry-700)'
      },
      solid: {
        bg: 'var(--berry-600)',
        fg: '#fff'
      }
    },
    leaf: {
      soft: {
        bg: 'var(--leaf-100)',
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
      padding: '3px 9px',
      borderRadius: 'var(--radius-pill)',
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
/** Base surface card — white, soft plum shadow, rounded. */
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
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-card)';
      e.currentTarget.style.transform = 'none';
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
/**
 * Morah primary action button. Berry-forward, with quiet secondary,
 * ghost, dark and danger variants to match the admin panel.
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
      padding: '7px 14px',
      fontSize: 'var(--text-sm)',
      radius: 'var(--radius-sm)',
      gap: '6px',
      icon: 15
    },
    md: {
      padding: '10px 18px',
      fontSize: 'var(--text-base)',
      radius: 'var(--radius-md)',
      gap: '8px',
      icon: 17
    },
    lg: {
      padding: '13px 24px',
      fontSize: 'var(--text-md)',
      radius: 'var(--radius-md)',
      gap: '9px',
      icon: 19
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--gradient-brand)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--berry-700)',
      border: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-xs)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    dark: {
      background: 'var(--berry-950)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    danger: {
      background: 'var(--critical-500)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-xs)'
    },
    leaf: {
      background: 'var(--gradient-leaf)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
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
      if (!disabled) e.currentTarget.style.filter = 'brightness(1.06)';
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
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
      padding: '7px 14px',
      borderRadius: 'var(--radius-md)',
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
      width: 10,
      height: 10,
      borderRadius: 3,
      background: c.dot,
      flexShrink: 0
    }
  }), c.label, score != null ? ` · ${Number(score).toFixed(1)}` : '', showRange && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-medium)',
      opacity: 0.7
    }
  }, "(", c.range, ")"));
}
Object.assign(__ds_scope, { ResultBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ResultBand.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
/**
 * Dashboard metric tile — soft tint background, faded watermark icon,
 * and a sparkline. Mirrors the Morah "Visão Geral" cards.
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
      bg: 'var(--tint-berry)',
      line: 'var(--berry-500)',
      ink: 'var(--berry-800)'
    },
    blue: {
      bg: 'var(--tint-blue)',
      line: 'var(--info-500)',
      ink: 'var(--info-700)'
    },
    green: {
      bg: 'var(--tint-green)',
      line: 'var(--success-500)',
      ink: 'var(--success-700)'
    },
    amber: {
      bg: 'var(--tint-amber)',
      line: 'var(--warning-500)',
      ink: 'var(--warning-700)'
    }
  };
  const t = tones[tone] || tones.berry;
  const pts = data.length ? data : [4, 6, 5, 8, 7, 11, 13];
  const max = Math.max(...pts),
    min = Math.min(...pts);
  const W = 260,
    H = 64,
    n = pts.length;
  const norm = v => H - 8 - (v - min) / (max - min || 1) * (H - 20);
  const coords = pts.map((v, i) => [i / (n - 1) * W, norm(v)]);
  const linePath = coords.map((c, i) => `${i ? 'L' : 'M'}${c[0].toFixed(1)},${c[1].toFixed(1)}`).join(' ');
  const areaPath = `${linePath} L${W},${H} L0,${H} Z`;
  const gid = `spark-${tone}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: t.bg,
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-5) var(--space-5) 0',
      boxShadow: 'var(--shadow-card)',
      minHeight: 150,
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 76,
    strokeWidth: 1.4,
    color: t.ink,
    style: {
      position: 'absolute',
      right: 14,
      top: 14,
      opacity: 0.12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: t.ink,
      opacity: 0.85
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 'var(--weight-extra)',
      color: 'var(--text-strong)',
      lineHeight: 1.05,
      marginTop: 6
    }
  }, value), /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    preserveAspectRatio: "none",
    style: {
      width: '100%',
      height: 56,
      marginTop: 'auto'
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
    stopOpacity: "0.28"
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
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), coords.map((c, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: c[0],
    cy: c[1],
    r: "2.6",
    fill: "#fff",
    stroke: t.line,
    strokeWidth: "2"
  }))));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
      border: `1px solid ${focus ? 'var(--berry-500)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '0 12px',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 17,
    color: "var(--text-muted)"
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
/** Styled native select matching Morah inputs. */
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
      padding: '10px 36px 10px 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-medium)',
      color: dark ? '#fff' : 'var(--text-strong)',
      background: dark ? 'rgba(255,255,255,0.06)' : 'var(--surface-card)',
      border: `1px solid ${dark ? 'var(--border-on-dark)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      outline: 'none',
      ...style
    }
  }, rest), options.map((o, i) => {
    const val = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: i,
      value: val
    }, lbl);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevrons-up-down",
    size: 15,
    color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
    style: {
      position: 'absolute',
      right: 12,
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
/**
 * Sidebar navigation row for the Morah admin panel.
 * Active state uses a berry-tinted glass highlight + leading accent.
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
      gap: '12px',
      width: '100%',
      padding: '11px 14px',
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--radius-md)',
      textAlign: 'left',
      background: active ? 'linear-gradient(100deg, rgba(164,69,156,0.30), rgba(164,69,156,0.08))' : hover ? 'rgba(255,255,255,0.05)' : 'transparent',
      boxShadow: active ? 'inset 0 0 0 1px rgba(189,111,186,0.35)' : 'none',
      color: active ? '#fff' : 'var(--text-on-dark-muted)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      fontWeight: active ? 'var(--weight-bold)' : 'var(--weight-medium)',
      transition: 'background var(--dur-fast), color var(--dur-fast)'
    }
  }, active && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 3,
      height: 20,
      borderRadius: 3,
      background: 'var(--berry-400)'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    strokeWidth: active ? 2.4 : 2
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--berry-400)',
      boxShadow: '0 0 8px var(--berry-400)'
    }
  }));
}
Object.assign(__ds_scope, { NavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Segmented tab bar — the underline/pill style from Morah's Relatórios view. */
function Tabs({
  tabs = [],
  active = 0,
  onChange = () => {},
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '4px',
      padding: '5px',
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-subtle)',
      ...style
    }
  }, tabs.map((t, i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => onChange(i),
      style: {
        flex: 1,
        padding: '9px 16px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-sm)',
        background: on ? 'var(--surface-card)' : 'transparent',
        color: on ? 'var(--berry-700)' : 'var(--text-muted)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-base)',
        fontWeight: on ? 'var(--weight-bold)' : 'var(--weight-medium)',
        boxShadow: on ? 'var(--shadow-xs)' : 'none',
        transition: 'all var(--dur-fast) var(--ease-out)'
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
  const Screen = window.Screens[screen] || window.Screens.overview;
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 0 0 0'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    screen: screen,
    company: company,
    onCompany: setCompany
  })), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 'var(--space-6) var(--space-8) var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Screen, null)))));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tecnico/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tecnico/Header.jsx
try { (() => {
// Morah técnico — Header bar (deep plum gradient, rounded bottom).
const {
  Select: DsSelect,
  Icon: HdrIcon
} = window.MorahDesignSystem_32f810;
function Header({
  screen,
  company,
  onCompany
}) {
  const D = window.MORAH;
  const t = D.titles[screen] || D.titles.overview;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      background: 'var(--gradient-header)',
      borderRadius: '0 0 var(--radius-2xl) var(--radius-2xl)',
      padding: '22px 28px 26px',
      color: '#fff',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -120,
      right: -60,
      width: 320,
      height: 320,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(189,111,186,0.28), transparent 70%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-3xl)',
      fontWeight: 800,
      color: '#fff',
      letterSpacing: '-0.03em'
    }
  }, t.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--text-on-dark)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--leaf-400)',
      boxShadow: '0 0 8px var(--leaf-400)'
    }
  }), D.tenant.name), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-on-dark-faint)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-on-dark-muted)'
    }
  }, t.sub))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 230
    }
  }, /*#__PURE__*/React.createElement(DsSelect, {
    dark: true,
    value: company,
    onChange: e => onCompany(e.target.value),
    options: ['Todas as empresas', ...window.MORAH.companies.map(c => c.name)]
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid var(--border-on-dark)',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(HdrIcon, {
    name: "bell",
    size: 18
  })))));
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
  tone = 'info'
}) {
  const ring = {
    info: 'var(--info-500)',
    berry: 'var(--berry-500)'
  }[tone] || 'var(--info-500)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '64px 24px',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      border: `2px solid ${ring}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: ring
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-xl)',
      color: 'var(--text-strong)',
      marginTop: 6
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-muted)',
      maxWidth: 360
    }
  }, sub));
}
function SectionTitle({
  title,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-2xl)',
      fontWeight: 800,
      color: 'var(--text-strong)',
      letterSpacing: '-0.02em'
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, sub));
}

/* ---------- Bar chart (Histórico de Avaliações) ---------- */
function BarChart({
  chart
}) {
  const W = 1040,
    H = 300,
    padL = 44,
    padB = 34,
    padT = 14;
  const innerH = H - padB - padT,
    innerW = W - padL - 16;
  const n = chart.values.length;
  const bw = 26;
  const yticks = [0, 4, 8, 12, 16];
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    style: {
      width: '100%',
      height: 320
    }
  }, yticks.map(v => {
    const y = padT + innerH - v / chart.max * innerH;
    return /*#__PURE__*/React.createElement("g", {
      key: v
    }, /*#__PURE__*/React.createElement("line", {
      x1: padL,
      y1: y,
      x2: W - 16,
      y2: y,
      stroke: "var(--border-subtle)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("text", {
      x: padL - 12,
      y: y + 4,
      textAnchor: "end",
      fontFamily: "var(--font-mono)",
      fontSize: "12",
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
      rx: "6",
      fill: "url(#barg)"
    }), /*#__PURE__*/React.createElement("text", {
      x: cx,
      y: H - 12,
      textAnchor: "middle",
      fontFamily: "var(--font-body)",
      fontSize: "12",
      fill: "var(--text-muted)"
    }, chart.labels[i], "/2026"));
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "barg",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#BD6FBA"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#8A2F82"
  }))));
}

/* ---------- Overview ---------- */
function OverviewScreen() {
  const D = window.MORAH;
  const [range, setRange] = React.useState('Últimos 6 meses');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-5)'
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
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "Hist\xF3rico de Avalia\xE7\xF5es"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 168
    }
  }, /*#__PURE__*/React.createElement(Select, {
    value: range,
    onChange: e => setRange(e.target.value),
    options: ['Últimos 6 meses', 'Últimos 12 meses', 'Este ano']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 8,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--berry-500)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "Avalia\xE7\xF5es Realizadas")), /*#__PURE__*/React.createElement(BarChart, {
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
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "Empresas Cadastradas",
    sub: "Gerencie todas as empresas do sistema"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: "upload"
  }, "Importar em Lote"), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    iconLeft: "plus"
  }, "Nova Empresa"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 14,
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Buscar por nome, documento ou descri\xE7\xE3o",
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Itens por p\xE1gina",
    options: ['5', '10', '25']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-4)'
    }
  }, list.map((c, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    interactive: true,
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "building-2",
    size: 18,
    color: "var(--berry-500)",
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
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
      fontSize: 'var(--text-md)',
      color: 'var(--text-strong)',
      lineHeight: 1.3
    }
  }, c.name), /*#__PURE__*/React.createElement(Badge, {
    tone: c.tone
  }, c.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, "CNPJ: ", c.cnpj))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    iconLeft: "pencil"
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
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    iconLeft: "chevron-left"
  }, "Anterior"), [1, 2, 3].map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-default)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      background: p === 1 ? 'var(--gradient-brand)' : 'var(--surface-card)',
      color: p === 1 ? '#fff' : 'var(--text-body)',
      borderColor: p === 1 ? 'transparent' : 'var(--border-default)'
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
    icon: "alert-circle",
    title: "Selecione uma empresa",
    sub: "Selecione uma empresa espec\xEDfica no dropdown acima para visualizar os relat\xF3rios salvos."
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
  }, /*#__PURE__*/React.createElement(PanelCard, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      marginBottom: 8
    }
  }, "Selecione os Relat\xF3rios para Compara\xE7\xE3o"), /*#__PURE__*/React.createElement(EmptyState, {
    icon: "building-2",
    title: "Selecione uma empresa",
    sub: "Para comparar relat\xF3rios, voc\xEA precisa selecionar uma empresa espec\xEDfica no dashboard."
  })), /*#__PURE__*/React.createElement(PanelCard, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      marginBottom: 14
    }
  }, "Legenda de Interpreta\xE7\xE3o dos Resultados"), /*#__PURE__*/React.createElement("div", {
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
  return /*#__PURE__*/React.createElement(PanelCard, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "Modelos de apresenta\xE7\xE3o",
    sub: "Gerencie os modelos dispon\xEDveis para download"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "list",
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--berry-300)',
      background: 'var(--berry-50)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--berry-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "layout-grid",
    size: 16
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, D.models.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--info-50)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--info-500)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clipboard-list",
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-md)',
      color: 'var(--text-strong)'
    }
  }, m.t), /*#__PURE__*/React.createElement(Badge, {
    tone: "info"
  }, m.kind)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-faint)',
      marginTop: 4
    }
  }, m.d))), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    iconLeft: "download",
    fullWidth: true
  }, "Acessar Modelo")))));
}

/* ---------- Termos ---------- */
function TermosScreen() {
  const D = window.MORAH;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(PanelCard, {
    style: {
      maxWidth: 560,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      marginBottom: 12
    }
  }, "Termos de Aceite"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 1.7,
      marginBottom: 14
    }
  }, "Usu\xE1rio: ", D.tenant.tech, " (", D.tenant.email, ")", /*#__PURE__*/React.createElement("br", null), "Status: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--success-700)',
      fontWeight: 700
    }
  }, "Aceito"), /*#__PURE__*/React.createElement("br", null), "Aceito em: 06/05/2026, 18:14:13"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gray-50)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-4)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      lineHeight: 1.7,
      height: 220,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "TERMOS DE USO DA PLATAFORMA MORAH \u2014 LICENCIAMENTO PARA REVENDA E APLICA\xC7\xC3O"), /*#__PURE__*/React.createElement("p", null, "1. ACEITA\xC7\xC3O DOS TERMOS"), /*#__PURE__*/React.createElement("p", null, "Ao utilizar a plataforma \"Morah\" o USU\xC1RIO concorda integralmente com as condi\xE7\xF5es de uso, captura e tratamento de dados psicossociais conforme a NR-1, garantindo a anonimiza\xE7\xE3o e agrega\xE7\xE3o dos resultados."), /*#__PURE__*/React.createElement("p", null, "2. LICEN\xC7A DE USO. A licen\xE7a concede ao t\xE9cnico de seguran\xE7a do trabalho o direito de aplicar avalia\xE7\xF5es, gerar relat\xF3rios e gerenciar empresas vinculadas \xE0 sua conta.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: "file-text"
  }, "Visualizar PDF"))));
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
    sub: `Para gerenciar ${what}, selecione uma empresa no dropdown acima.`
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
// Morah técnico — Sidebar (dark plum). Composes NavItem from the bundle.
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
      padding: '0 14px',
      marginBottom: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 800,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-faint)'
    }
  }, label);
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 'var(--sidebar-width)',
      flexShrink: 0,
      height: '100%',
      background: 'var(--gradient-sidebar)',
      display: 'flex',
      flexDirection: 'column',
      borderRight: '1px solid rgba(255,255,255,0.05)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '20px 20px 18px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/morah-mark-white.png",
    alt: "",
    style: {
      width: 32,
      height: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/morah-wordmark-white.png",
    alt: "Morah",
    style: {
      width: 92,
      height: 'auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 9.5,
      fontWeight: 700,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-faint)'
    }
  }, "Seguran\xE7a \xB7 NR1"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(255,255,255,0.07)',
      margin: '0 20px 18px'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '0 12px'
    }
  }, /*#__PURE__*/React.createElement(Section, {
    label: "Navega\xE7\xE3o"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      marginBottom: 22
    }
  }, D.nav.navegacao.map(it => /*#__PURE__*/React.createElement(DsNavItem, {
    key: it.id,
    icon: it.icon,
    label: it.label,
    active: active === it.id,
    dot: active === it.id,
    onClick: () => onNavigate(it.id)
  }))), /*#__PURE__*/React.createElement(Section, {
    label: "Ferramentas"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, D.nav.ferramentas.map(it => /*#__PURE__*/React.createElement(DsNavItem, {
    key: it.id,
    icon: it.icon,
    label: it.label,
    active: active === it.id,
    dot: active === it.id,
    onClick: () => onNavigate(it.id)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 12px',
      background: 'rgba(255,255,255,0.05)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid rgba(255,255,255,0.06)'
    }
  }, /*#__PURE__*/React.createElement(DsAvatar, {
    name: D.tenant.tech,
    size: 34,
    tone: "berry"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      color: '#fff',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, D.tenant.tech), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-on-dark-muted)'
    }
  }, D.tenant.role)), /*#__PURE__*/React.createElement(DsIcon, {
    name: "chevron-up",
    size: 16,
    color: "var(--text-on-dark-muted)"
  }))));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tecnico/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tecnico/data.js
try { (() => {
// Morah técnico — demo data (plain JS, loaded before the JSX scripts)
window.MORAH = {
  tenant: {
    name: 'Clínica Pedrosa',
    tech: 'Lucas C. Pedrosa Marques',
    email: 'tec.pedrosa@gmail.com',
    role: 'Administrador'
  },
  nav: {
    navegacao: [{
      id: 'overview',
      icon: 'layout-grid',
      label: 'Visão Geral'
    }, {
      id: 'termos',
      icon: 'file-text',
      label: 'Termos Aceito'
    }, {
      id: 'empresas',
      icon: 'building-2',
      label: 'Empresas'
    }, {
      id: 'setor',
      icon: 'layers',
      label: 'Setor'
    }, {
      id: 'cargos',
      icon: 'briefcase',
      label: 'Cargos'
    }, {
      id: 'campanhas',
      icon: 'calendar-range',
      label: 'Campanhas'
    }, {
      id: 'relatorios',
      icon: 'bar-chart-3',
      label: 'Relatórios'
    }],
    ferramentas: [{
      id: 'link',
      icon: 'link-2',
      label: 'Link de Avaliação'
    }, {
      id: 'comparar',
      icon: 'arrow-left-right',
      label: 'Comparar Relatórios'
    }, {
      id: 'modelos',
      icon: 'clipboard-list',
      label: 'Modelos de Apresentação'
    }]
  },
  titles: {
    overview: {
      h: 'Painel Administrativo',
      sub: 'Visão geral dos dados'
    },
    termos: {
      h: 'Painel Administrativo',
      sub: 'Visão geral dos dados'
    },
    empresas: {
      h: 'Painel Administrativo',
      sub: 'Visão geral dos dados'
    },
    setor: {
      h: 'Painel Administrativo',
      sub: 'Visão geral dos dados'
    },
    cargos: {
      h: 'Painel Administrativo',
      sub: 'Visão geral dos dados'
    },
    campanhas: {
      h: 'Painel Administrativo',
      sub: 'Visão geral dos dados'
    },
    relatorios: {
      h: 'Painel Administrativo',
      sub: 'Visão geral dos dados'
    },
    link: {
      h: 'Painel Administrativo',
      sub: 'Visão geral dos dados'
    },
    comparar: {
      h: 'Painel Administrativo',
      sub: 'Visão geral dos dados'
    },
    modelos: {
      h: 'Painel Administrativo',
      sub: 'Visão geral dos dados'
    }
  },
  companies: [{
    name: 'AUTO POSTO NOVA AÇAILANDIA LTDA',
    cnpj: '12.811.039/0001-78',
    tag: 'SETOR',
    tone: 'neutral'
  }, {
    name: 'DG SPORTS',
    cnpj: '29.956.077/0001-11',
    tag: 'SETOR',
    tone: 'neutral'
  }, {
    name: 'ESCOLA ARCO ÍRIS',
    cnpj: '41.534.414/0001-88',
    tag: 'SETOR',
    tone: 'neutral'
  }, {
    name: 'F&S ASSESSORIA E CONSULTORIA - UNF MA',
    cnpj: '16.568.488/0001-98',
    tag: 'GHE',
    tone: 'berry'
  }, {
    name: 'F&S ASSESSORIA E CONSULTORIA - UNF MS',
    cnpj: '16.568.488/0001-98',
    tag: 'GES',
    tone: 'info'
  }, {
    name: 'TRANSPORTES VALE VERDE',
    cnpj: '33.402.118/0001-04',
    tag: 'SETOR',
    tone: 'neutral'
  }],
  models: [{
    t: 'Vídeo Aula: Implementação da Plataforma (Como colocar no PGR)',
    d: '03/06/2026',
    kind: 'Vídeo'
  }, {
    t: 'Interpretação das Perguntas (Copsoq II Versão Curta)',
    d: 'Guia',
    kind: 'PDF'
  }, {
    t: 'Formulário de avaliação manual para impressão',
    d: 'Modelo',
    kind: 'PDF'
  }, {
    t: 'Manual de interpretação e aplicação do capítulo 1.5 da NR-1',
    d: 'Guia',
    kind: 'PDF'
  }, {
    t: 'Modelo de Contrato de Canal de Denúncias',
    d: 'Documento',
    kind: 'DOC'
  }, {
    t: 'Apresentação para os clientes',
    d: 'Slides',
    kind: 'Slides'
  }],
  chart: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    values: [0, 0, 0, 2, 13, 1],
    max: 16
  },
  kpis: [{
    id: 'emp',
    label: 'Total de Empresas',
    value: 13,
    icon: 'building-2',
    tone: 'blue',
    data: [4, 6, 5, 8, 7, 10, 13]
  }, {
    id: 'rest',
    label: 'Avaliações Restantes',
    value: '11.864',
    icon: 'clipboard-list',
    tone: 'green',
    data: [3, 4, 5, 6, 7, 9, 11]
  }, {
    id: 'rel',
    label: 'Relatórios Salvos',
    value: 0,
    icon: 'file-text',
    tone: 'amber',
    data: [1, 2, 2, 3, 4, 5, 7]
  }, {
    id: 'enc',
    label: 'Avaliações Encontradas',
    value: 15,
    icon: 'message-circle',
    tone: 'berry',
    data: [2, 4, 5, 7, 9, 12, 15]
  }]
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
