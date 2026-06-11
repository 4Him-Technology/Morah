import React from 'react';

/**
 * React-safe Lucide icon. Renders the icon imperatively into a span that
 * React owns but never reconciles children of — unlike lucide.createIcons(),
 * which replaces React-managed DOM nodes and crashes reconciliation.
 * Requires the lucide UMD script (window.lucide) to be loaded.
 */
export function Icon({ name, size = 16, strokeWidth = 2, color = 'currentColor', style = {}, ...rest }) {
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
        try { svg = L.createElement(node); } catch (e) { svg = null; }
      }
      if (!svg) {
        // Fallback: build the SVG from the icon-node array directly.
        const NS = 'http://www.w3.org/2000/svg';
        svg = document.createElementNS(NS, 'svg');
        const defaults = { xmlns: NS, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' };
        Object.entries(defaults).forEach(([k, v]) => svg.setAttribute(k, v));
        const children = Array.isArray(node) ? node : [];
        children.forEach((child) => {
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
      const iv = setInterval(() => { if (draw()) clearInterval(iv); }, 120);
      setTimeout(() => clearInterval(iv), 4000);
      return () => { cancelled = true; clearInterval(iv); };
    }
    return () => { cancelled = true; };
  }, [name, strokeWidth]);

  return (
    <span
      ref={ref}
      aria-hidden="true"
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: size, height: size, color, flexShrink: 0, lineHeight: 0,
        ...style,
      }}
      {...rest}
    ></span>
  );
}
