/* @ds-bundle: {"format":4,"namespace":"DesignSystemSEMBRA_f9fdf7","components":[{"name":"ICON_NAMES","sourcePath":"components/brand/Icon.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"FilterPill","sourcePath":"components/data/FilterPill.jsx"},{"name":"CropSelector","sourcePath":"components/domain/CropSelector.jsx"},{"name":"MetricCard","sourcePath":"components/domain/MetricCard.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Drawer","sourcePath":"components/navigation/Drawer.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Stepper","sourcePath":"components/navigation/Stepper.jsx"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"}],"sourceHashes":{"components/brand/Icon.jsx":"03ffd3b3928d","components/brand/Logo.jsx":"54e056683a31","components/brand/tweaks-panel.jsx":"d259e3a86f73","components/core/Badge.jsx":"7797c78ab49a","components/core/Button.jsx":"7380a3957177","components/core/Card.jsx":"ce9c2ec4c061","components/data/DataTable.jsx":"0819adef5520","components/data/FilterPill.jsx":"e9ecaa3db36a","components/domain/CropSelector.jsx":"1dcbd2cbb67a","components/domain/MetricCard.jsx":"a3a7b1dcf190","components/feedback/Modal.jsx":"bcbee0f789e4","components/forms/Input.jsx":"c616ef305339","components/forms/Select.jsx":"c6fd4dd8792f","components/navigation/BottomNav.jsx":"00879e99ce35","components/navigation/Breadcrumb.jsx":"0e0681735baa","components/navigation/Drawer.jsx":"e190b4ae5af6","components/navigation/Footer.jsx":"9a0b9bdd1fc3","components/navigation/Stepper.jsx":"7df676ebd1ca","components/navigation/TopBar.jsx":"ccfdd4a177fc","ui_kits/portal_productor/CompraHT.jsx":"0bcda1786aec","ui_kits/portal_productor/CuentaGranaria.jsx":"8b59cb8be7be","ui_kits/portal_productor/HomeMobile.jsx":"7fcaa78be646","ui_kits/portal_productor/Licencias.jsx":"649a1a6e97e3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystemSEMBRA_f9fdf7 = window.DesignSystemSEMBRA_f9fdf7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Icon.jsx
try { (() => {
// Named icons that map to the 8 domain icons defined in BRANDBOOK-SE.pdf (página 7).
// Each SVG lives at `assets/icons/<name>.svg`.
const ICON_NAMES = ['licencia', 'hectarea-tecnologica', 'semillas-certificadas', 'compra-ht', 'genetica', 'biotecnologia', 'entrega-semillas', 'precertificacion-pph'];
function Icon({
  name,
  size = 48,
  basePath = '.',
  title,
  style,
  ...rest
}) {
  const src = basePath.replace(/\/$/, '') + '/assets/icons/' + name + '.svg';
  return React.createElement('img', {
    src,
    alt: title || name,
    width: size,
    height: size,
    style: {
      display: 'inline-block',
      verticalAlign: 'middle',
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { ICON_NAMES, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
// Real brand PNGs (uploaded) for the color and dark-bg versions;
// SVG reconstructions for monocromo / vertical / favicon variants.
const SRC = {
  full: {
    file: 'assets/logo/logo-full.png',
    ratio: 1050 / 266
  },
  negativa: {
    file: 'assets/logo/logo-negativo.png',
    ratio: 1008 / 256
  },
  monocromo: {
    file: 'assets/logo/logo-monocromo.svg',
    ratio: 440 / 120
  },
  monocromoBlanco: {
    file: 'assets/logo/logo-monocromo-blanco.svg',
    ratio: 440 / 120
  },
  vertical: {
    file: 'assets/logo/logo-vertical.svg',
    ratio: 260 / 220
  },
  favicon: {
    file: 'assets/logo/favicon.png',
    ratio: 1
  }
};
function Logo({
  variant = 'full',
  height = 44,
  basePath = '.',
  ...rest
}) {
  const v = SRC[variant] || SRC.full;
  const base = basePath.replace(/\/$/, '');
  const src = base + '/' + v.file;
  const width = height * v.ratio;
  return React.createElement('img', {
    src,
    alt: 'Sembrá Evolución',
    height,
    width,
    style: {
      display: 'inline-block',
      verticalAlign: 'middle',
      objectFit: 'contain'
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  // data-om-starter: inert presence marker — Claude Design's starter-usage
  // probe reads it. The closed panel renders nothing, so the marker rides
  // the <html> element as an attribute instead of a rendered node — zero
  // elements added, so page CSS (even structural selectors like
  // :nth-child) can never observe it. It records that the page WIRES a
  // tweaks panel, whether or not the panel is open. Keep this effect.
  React.useEffect(() => {
    document.documentElement.setAttribute('data-om-starter', 'tweaks-panel');
    return () => document.documentElement.removeAttribute('data-om-starter');
  }, []);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = 'success',
  children,
  style,
  ...rest
}) {
  const tones = {
    success: {
      background: 'var(--se-success)',
      color: 'var(--se-success-fg)'
    },
    warning: {
      background: 'var(--se-warning)',
      color: 'var(--se-warning-fg)'
    },
    danger: {
      background: 'var(--se-danger)',
      color: 'var(--se-danger-fg)'
    },
    neutral: {
      background: 'var(--se-neutral)',
      color: 'var(--se-neutral-fg)'
    },
    muted: {
      background: 'var(--se-gray-100)',
      color: 'var(--se-black)'
    }
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.02em',
      lineHeight: 1.4,
      ...tones[tone],
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth,
  disabled,
  children,
  onClick,
  type = 'button',
  ...rest
}) {
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    borderRadius: 'var(--radius-pill)',
    border: '2px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'background .15s,color .15s,border-color .15s,transform .05s',
    width: fullWidth ? '100%' : 'auto',
    minHeight: 'var(--touch-target)',
    opacity: disabled ? 0.5 : 1,
    letterSpacing: '.01em',
    lineHeight: 1,
    textDecoration: 'none'
  };
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '14px',
      minHeight: '36px'
    },
    md: {
      padding: '12px 24px',
      fontSize: '15px'
    },
    lg: {
      padding: '16px 32px',
      fontSize: '17px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--se-lime)',
      color: 'var(--se-black)',
      borderColor: 'var(--se-lime)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--se-black)',
      borderColor: 'var(--se-black)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--se-black)',
      borderColor: 'transparent'
    },
    dark: {
      background: 'var(--se-black)',
      color: 'var(--se-lime)',
      borderColor: 'var(--se-lime)'
    },
    danger: {
      background: 'var(--se-danger)',
      color: '#fff',
      borderColor: 'var(--se-danger)'
    }
  };
  return React.createElement('button', {
    type,
    disabled,
    onClick,
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant]
    },
    ...rest
  }, iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  variant = 'light',
  padding = 24,
  children,
  style,
  ...rest
}) {
  const variants = {
    light: {
      background: 'var(--bg-surface)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)'
    },
    dark: {
      background: 'var(--se-black)',
      color: 'var(--text-inverse)',
      border: '1px solid var(--se-black)'
    },
    muted: {
      background: 'var(--bg-muted)',
      color: 'var(--text-primary)',
      border: '1px solid var(--bg-muted)'
    }
  };
  return React.createElement('div', {
    style: {
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: 'var(--shadow-card)',
      ...variants[variant],
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function DataTable({
  columns = [],
  rows = [],
  empty = 'No hay datos para mostrar'
}) {
  if (!rows.length) return React.createElement('div', {
    style: {
      padding: '48px 16px',
      textAlign: 'center',
      color: 'var(--text-muted)',
      border: '1px dashed var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--bg-muted)'
    }
  }, empty);
  return React.createElement('div', {
    style: {
      overflowX: 'auto',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)'
    }
  }, React.createElement('table', {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-body)',
      fontSize: 14
    }
  }, React.createElement('thead', null, React.createElement('tr', null, columns.map((c, i) => React.createElement('th', {
    key: i,
    style: {
      background: 'var(--se-gray-100)',
      color: 'var(--text-primary)',
      textAlign: 'left',
      padding: '12px 16px',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      borderBottom: '1px solid var(--border-default)'
    }
  }, c.label)))), React.createElement('tbody', null, rows.map((r, ri) => React.createElement('tr', {
    key: ri,
    style: {
      borderBottom: '1px solid var(--border-default)'
    }
  }, columns.map((c, ci) => React.createElement('td', {
    key: ci,
    style: {
      padding: '14px 16px',
      color: c.link ? 'var(--se-black)' : 'var(--text-primary)',
      textDecoration: c.link ? 'underline' : 'none',
      fontWeight: c.link ? 600 : 400
    }
  }, typeof c.render === 'function' ? c.render(r) : r[c.key])))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/FilterPill.jsx
try { (() => {
function FilterPill({
  label,
  value,
  onClick,
  active
}) {
  return React.createElement('button', {
    type: 'button',
    onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 14px',
      border: '1.5px solid ' + (active ? 'var(--se-lime)' : 'var(--se-black)'),
      borderRadius: 'var(--radius-pill)',
      background: active ? 'var(--se-lime)' : 'transparent',
      color: 'var(--se-black)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer',
      minHeight: 36
    }
  }, React.createElement('span', null, label), value && React.createElement('span', {
    style: {
      fontWeight: 400,
      color: 'var(--text-muted)'
    }
  }, value), React.createElement('svg', {
    width: 12,
    height: 12,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.5
  }, React.createElement('polyline', {
    points: '6 9 12 15 18 9'
  })));
}
Object.assign(__ds_scope, { FilterPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/FilterPill.jsx", error: String((e && e.message) || e) }); }

// components/domain/CropSelector.jsx
try { (() => {
const crops = {
  cebada: {
    label: 'Cebada'
  },
  soja: {
    label: 'Soja'
  },
  trigo: {
    label: 'Trigo'
  },
  maiz: {
    label: 'Maíz'
  }
};
function CropIcon({
  crop,
  active
}) {
  const c = active ? 'var(--se-lime)' : 'var(--text-primary)';
  const common = {
    width: 44,
    height: 44,
    fill: 'none',
    stroke: c,
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  if (crop === 'soja') return React.createElement('svg', {
    viewBox: '0 0 44 44',
    ...common
  }, React.createElement('path', {
    d: 'M8 30c6-2 10-6 12-14M22 16c2 8 6 12 14 14'
  }), React.createElement('circle', {
    cx: 14,
    cy: 26,
    r: 3.5
  }), React.createElement('circle', {
    cx: 22,
    cy: 22,
    r: 3.5
  }), React.createElement('circle', {
    cx: 30,
    cy: 26,
    r: 3.5
  }));
  if (crop === 'trigo') return React.createElement('svg', {
    viewBox: '0 0 44 44',
    ...common
  }, React.createElement('path', {
    d: 'M22 8v28'
  }), React.createElement('path', {
    d: 'M22 14c-4 0-6 2-6 5M22 14c4 0 6 2 6 5M22 20c-4 0-6 2-6 5M22 20c4 0 6 2 6 5M22 26c-4 0-6 2-6 5M22 26c4 0 6 2 6 5'
  }));
  // cebada / default: barley
  return React.createElement('svg', {
    viewBox: '0 0 44 44',
    ...common
  }, React.createElement('path', {
    d: 'M22 36V10'
  }), React.createElement('path', {
    d: 'M22 12l-5-3M22 18l-6-3M22 24l-6-3M22 30l-6-3M22 12l5-3M22 18l6-3M22 24l6-3M22 30l6-3'
  }));
}
function CropSelector({
  value,
  onChange,
  options = ['cebada', 'soja', 'trigo']
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, options.map(k => {
    const active = value === k;
    return React.createElement('button', {
      key: k,
      type: 'button',
      onClick: () => onChange && onChange(k),
      style: {
        flex: '1 1 96px',
        minWidth: 96,
        padding: '20px 12px 14px',
        background: 'var(--bg-surface)',
        border: '2px solid ' + (active ? 'var(--se-lime)' : 'var(--border-default)'),
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        cursor: 'pointer',
        color: active ? 'var(--se-lime)' : 'var(--text-primary)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 14,
        letterSpacing: '.05em',
        textTransform: 'uppercase'
      }
    }, React.createElement(CropIcon, {
      crop: k,
      active
    }), (crops[k] || {
      label: k
    }).label);
  }));
}
Object.assign(__ds_scope, { CropSelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/domain/CropSelector.jsx", error: String((e && e.message) || e) }); }

// components/domain/MetricCard.jsx
try { (() => {
function MetricCard({
  title,
  value,
  unit = 'HT Futuras',
  cta,
  onCta
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--se-black)',
      color: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: '28px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      textAlign: 'center',
      minHeight: 280
    }
  }, React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      letterSpacing: '.06em',
      color: '#fff',
      margin: 0,
      textTransform: 'uppercase'
    }
  }, title), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 72,
      lineHeight: 1,
      color: 'var(--se-lime)'
    }
  }, value), React.createElement('div', {
    style: {
      fontSize: 14,
      color: 'var(--se-lime)',
      fontWeight: 700
    }
  }, unit), cta && React.createElement('button', {
    onClick: onCta,
    style: {
      marginTop: 'auto',
      background: 'var(--se-lime)',
      color: 'var(--se-black)',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: '10px 24px',
      fontWeight: 700,
      fontSize: 14,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)'
    }
  }, cta));
}
Object.assign(__ds_scope, { MetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/domain/MetricCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function Modal({
  open,
  onClose,
  title,
  children,
  actions
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(28,28,28,.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
      zIndex: 1000
    },
    onClick: onClose
  }, React.createElement('div', {
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      width: '100%',
      maxWidth: 480,
      boxShadow: 'var(--shadow-modal)',
      overflow: 'hidden'
    }
  }, title && React.createElement('div', {
    style: {
      background: 'var(--se-black)',
      color: 'var(--se-lime)',
      padding: '20px 24px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20
    }
  }, title), React.createElement('div', {
    style: {
      padding: 24,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--text-primary)'
    }
  }, children), actions && React.createElement('div', {
    style: {
      padding: '0 24px 20px',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12
    }
  }, actions)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  hint,
  error,
  leftIcon,
  rightIcon,
  id,
  style,
  ...rest
}) {
  const inputId = id || 'inp-' + Math.random().toString(36).slice(2, 7);
  return React.createElement('label', {
    htmlFor: inputId,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  }, label && React.createElement('span', {
    style: {
      fontWeight: 500
    }
  }, label), React.createElement('span', {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, leftIcon && React.createElement('span', {
    style: {
      position: 'absolute',
      left: 12,
      color: 'var(--text-subtle)',
      display: 'flex'
    }
  }, leftIcon), React.createElement('input', {
    id: inputId,
    style: {
      width: '100%',
      minHeight: 44,
      padding: leftIcon ? '10px 12px 10px 40px' : rightIcon ? '10px 40px 10px 12px' : '10px 12px',
      borderRadius: 'var(--radius-md)',
      border: '1.5px solid ' + (error ? 'var(--se-danger)' : 'var(--border-default)'),
      outline: 'none',
      fontSize: 15,
      fontFamily: 'var(--font-body)',
      background: 'var(--bg-surface)',
      color: 'var(--text-primary)',
      ...style
    },
    onFocus: e => {
      if (!error) e.target.style.borderColor = 'var(--se-lime)';
      e.target.style.boxShadow = 'var(--shadow-focus)';
    },
    onBlur: e => {
      e.target.style.borderColor = error ? 'var(--se-danger)' : 'var(--border-default)';
      e.target.style.boxShadow = 'none';
    },
    ...rest
  }), rightIcon && React.createElement('span', {
    style: {
      position: 'absolute',
      right: 12,
      color: 'var(--text-subtle)',
      display: 'flex'
    }
  }, rightIcon)), (hint || error) && React.createElement('span', {
    style: {
      fontSize: 12,
      color: error ? 'var(--se-danger)' : 'var(--text-subtle)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  hint,
  error,
  children,
  id,
  ...rest
}) {
  const inputId = id || 'sel-' + Math.random().toString(36).slice(2, 7);
  return React.createElement('label', {
    htmlFor: inputId,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 14
    }
  }, label && React.createElement('span', {
    style: {
      fontWeight: 500
    }
  }, label), React.createElement('select', {
    id: inputId,
    style: {
      width: '100%',
      minHeight: 44,
      padding: '10px 12px',
      borderRadius: 'var(--radius-md)',
      border: '1.5px solid ' + (error ? 'var(--se-danger)' : 'var(--border-default)'),
      fontSize: 15,
      background: 'var(--bg-surface)',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      appearance: 'none',
      backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%231C1C1C%27 stroke-width=%272.5%27><polyline points=%276 9 12 15 18 9%27/></svg>")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 14px center',
      paddingRight: 36
    },
    ...rest
  }, children), (hint || error) && React.createElement('span', {
    style: {
      fontSize: 12,
      color: error ? 'var(--se-danger)' : 'var(--text-subtle)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
const ICONS = {
  home: 'M3 12l9-9 9 9M5 10v10h14V10',
  licencias: 'M6 3h10l4 4v14H6zM14 3v4h4M9 12h6M9 16h6',
  movimientos: 'M4 7h13l-3-3M20 17H7l3 3',
  cuenta: 'M4 6h16v12H4zM4 10h16M8 14h4',
  mas: 'M4 6h16M4 12h16M4 18h16'
};
function NavIcon({
  d,
  active
}) {
  return React.createElement('svg', {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: active ? 'var(--se-black)' : 'var(--text-muted)',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true
  }, React.createElement('path', {
    d
  }));
}
function BottomNav({
  active,
  onNav,
  onCompra
}) {
  const items = [{
    key: 'home',
    label: 'Inicio',
    icon: ICONS.home
  }, {
    key: 'lic',
    label: 'Licencias',
    icon: ICONS.licencias
  }, {
    key: 'fab'
  }, {
    key: 'cg',
    label: 'Granaria',
    icon: ICONS.cuenta
  }, {
    key: 'mas',
    label: 'Más',
    icon: ICONS.mas
  }];
  const cell = {
    flex: 1,
    minHeight: 56,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '6px 4px',
    fontFamily: 'var(--font-body)'
  };
  return React.createElement('nav', {
    style: {
      position: 'sticky',
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      alignItems: 'flex-end',
      background: '#fff',
      borderTop: '1px solid var(--border-default)',
      boxShadow: '0 -2px 12px rgba(28,28,28,.06)',
      paddingBottom: 'env(safe-area-inset-bottom, 4px)',
      zIndex: 40
    }
  }, items.map(it => {
    if (it.key === 'fab') {
      return React.createElement('div', {
        key: 'fab',
        style: {
          flex: '0 0 72px',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative'
        }
      }, React.createElement('button', {
        'aria-label': 'Comprar HT',
        onClick: onCompra,
        style: {
          position: 'absolute',
          top: -26,
          width: 64,
          height: 64,
          borderRadius: '999px',
          background: 'var(--se-lime)',
          border: '4px solid #fff',
          color: 'var(--se-black)',
          cursor: 'pointer',
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 16px rgba(28,28,28,.18)',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 11,
          letterSpacing: '.06em',
          gap: 2
        }
      }, React.createElement('svg', {
        width: 22,
        height: 22,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2.2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      }, React.createElement('path', {
        d: 'M4 7h3l2.5 11h8L20 10H7'
      }), React.createElement('circle', {
        cx: 10,
        cy: 20,
        r: 1.5
      }), React.createElement('circle', {
        cx: 17,
        cy: 20,
        r: 1.5
      })), 'HT'));
    }
    const isActive = active === it.key;
    return React.createElement('button', {
      key: it.key,
      onClick: () => onNav && onNav(it.key),
      style: {
        ...cell,
        minHeight: 64,
        color: isActive ? 'var(--se-black)' : 'var(--text-muted)',
        borderTop: isActive ? '3px solid var(--se-lime)' : '3px solid transparent'
      }
    }, React.createElement(NavIcon, {
      d: it.icon,
      active: isActive
    }), React.createElement('span', {
      style: {
        fontSize: 11,
        fontWeight: isActive ? 700 : 500,
        letterSpacing: '.02em'
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items = []
}) {
  return React.createElement('nav', {
    'aria-label': 'breadcrumb',
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, items.map((it, i) => React.createElement(React.Fragment, {
    key: i
  }, i > 0 && React.createElement('span', {
    style: {
      color: 'var(--text-subtle)'
    }
  }, '/'), it.href ? React.createElement('a', {
    href: it.href,
    style: {
      color: 'var(--text-muted)'
    }
  }, it.label) : React.createElement('span', {
    style: {
      color: 'var(--text-primary)'
    }
  }, it.label))));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Drawer.jsx
try { (() => {
const CHEV = 'M6 9l6 6 6-6';
const X = 'M6 6l12 12M18 6L6 18';
function Drawer({
  open,
  onClose,
  user,
  active,
  onNav,
  sections = []
}) {
  const [openKeys, setOpenKeys] = React.useState({});
  if (!open) return null;
  const toggle = k => setOpenKeys(s => ({
    ...s,
    [k]: !s[k]
  }));
  return React.createElement('div', {
    role: 'dialog',
    'aria-modal': true,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60
    }
  },
  // scrim
  React.createElement('div', {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(28,28,28,.55)'
    }
  }),
  // panel
  React.createElement('aside', {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: 'min(320px, 88vw)',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '-8px 0 24px rgba(28,28,28,.2)',
      animation: 'slidein .18s ease-out'
    }
  }, React.createElement('style', null, '@keyframes slidein{from{transform:translateX(100%)}to{transform:translateX(0)}}'),
  // header (black, user + close)
  React.createElement('header', {
    style: {
      background: 'var(--se-black)',
      color: '#fff',
      padding: '16px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, React.createElement('div', {
    style: {
      width: 40,
      height: 40,
      borderRadius: '999px',
      background: 'var(--se-lime)',
      color: 'var(--se-black)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 16
    }
  }, user?.initials || 'IV'), React.createElement('div', {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: '.02em',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, user?.name || 'IGNACIO VIDAL'), React.createElement('div', {
    style: {
      fontSize: 12,
      color: 'var(--se-lime)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, user?.company || 'LIAG ARGENTINA S.A.U.')), React.createElement('button', {
    onClick: onClose,
    'aria-label': 'Cerrar',
    'style': {
      width: 44,
      height: 44,
      minWidth: 44,
      borderRadius: '999px',
      background: 'transparent',
      border: '1.5px solid #fff',
      color: '#fff',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, React.createElement('svg', {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round'
  }, React.createElement('path', {
    d: X
  })))),
  // module list
  React.createElement('nav', {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 0'
    }
  }, sections.map(sec => {
    if (sec.children) {
      const isOpen = !!openKeys[sec.key];
      return React.createElement('div', {
        key: sec.key
      }, React.createElement('button', {
        onClick: () => toggle(sec.key),
        'aria-expanded': isOpen,
        style: {
          width: '100%',
          minHeight: 48,
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-body)',
          fontSize: 15,
          fontWeight: 600,
          textAlign: 'left'
        }
      }, React.createElement('span', {
        style: {
          flex: 1
        }
      }, sec.label), React.createElement('svg', {
        width: 18,
        height: 18,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2.2,
        style: {
          transition: 'transform .15s',
          transform: isOpen ? 'rotate(180deg)' : 'none'
        }
      }, React.createElement('path', {
        d: CHEV
      }))), isOpen && React.createElement('div', {
        style: {
          background: 'var(--bg-muted)'
        }
      }, sec.children.map(c => {
        const isActive = active === c.key;
        return React.createElement('button', {
          key: c.key,
          onClick: () => onNav && onNav(c.key),
          style: {
            width: '100%',
            minHeight: 44,
            padding: '10px 16px 10px 40px',
            display: 'block',
            textAlign: 'left',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: isActive ? 'var(--se-black)' : 'var(--text-muted)',
            fontFamily: 'var(--font-body)',
            fontSize: 14,
            fontWeight: isActive ? 700 : 500,
            borderLeft: isActive ? '3px solid var(--se-lime)' : '3px solid transparent'
          }
        }, c.label);
      })));
    }
    const isActive = active === sec.key;
    return React.createElement('button', {
      key: sec.key,
      onClick: () => onNav && onNav(sec.key),
      style: {
        width: '100%',
        minHeight: 48,
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        background: isActive ? 'var(--bg-muted)' : 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        fontWeight: isActive ? 700 : 600,
        textAlign: 'left',
        borderLeft: isActive ? '3px solid var(--se-lime)' : '3px solid transparent'
      }
    }, sec.label);
  })),
  // footer (logout)
  React.createElement('div', {
    style: {
      borderTop: '1px solid var(--border-default)',
      padding: 12
    }
  }, React.createElement('button', {
    onClick: () => onNav && onNav('logout'),
    style: {
      width: '100%',
      minHeight: 44,
      padding: '10px 16px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      background: 'transparent',
      border: '1.5px solid var(--se-black)',
      borderRadius: '999px',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--se-black)'
    }
  }, React.createElement('svg', {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2
  }, React.createElement('path', {
    d: 'M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3'
  })), 'Cerrar sesión'))));
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Drawer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  phone = '011 5077-9090',
  email = 'info@sembraevolucion.com.ar',
  onContact
}) {
  return React.createElement('footer', {
    style: {
      background: 'var(--se-black)',
      color: '#fff',
      padding: '20px 24px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16,
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontSize: 14
    }
  }, React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    }
  }, React.createElement('svg', {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    fill: 'var(--se-lime)'
  }, React.createElement('path', {
    d: 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .6 3a2 2 0 0 1-.5 2L8 10.1a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2-.5c1 .3 2 .5 3 .6a2 2 0 0 1 1.7 2z'
  })), phone), React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    }
  }, React.createElement('svg', {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'var(--se-lime)',
    strokeWidth: 2
  }, React.createElement('path', {
    d: 'M4 4h16v16H4z'
  }), React.createElement('path', {
    d: 'M22 6l-10 7L2 6'
  })), email)), React.createElement('button', {
    onClick: onContact,
    style: {
      background: 'var(--se-lime)',
      color: 'var(--se-black)',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: '12px 24px',
      fontWeight: 700,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    }
  }, React.createElement('svg', {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'currentColor'
  }, React.createElement('path', {
    d: 'M12 2a10 10 0 0 0-8.5 15.3L2 22l4.9-1.4A10 10 0 1 0 12 2z'
  })), 'Contáctenos'));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Stepper.jsx
try { (() => {
function Stepper({
  steps = [],
  activeIndex = 0,
  onStepClick
}) {
  return React.createElement('ol', {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, steps.map((s, i) => {
    const state = i < activeIndex ? 'complete' : i === activeIndex ? 'active' : 'idle';
    const isActive = state === 'active';
    const isComplete = state === 'complete';
    const bg = isActive ? 'var(--se-black)' : isComplete ? 'var(--se-gray-100)' : 'var(--bg-surface)';
    const color = isActive ? '#fff' : 'var(--text-primary)';
    const border = isActive ? 'var(--se-black)' : isComplete ? 'var(--se-gray-100)' : 'var(--border-default)';
    return React.createElement('li', {
      key: i,
      onClick: () => onStepClick && onStepClick(i),
      style: {
        background: bg,
        color,
        border: '2px solid ' + border,
        borderRadius: 'var(--radius-lg)',
        padding: '16px 20px',
        cursor: onStepClick ? 'pointer' : 'default',
        display: 'flex',
        gap: 16,
        alignItems: isActive ? 'flex-start' : 'center'
      }
    }, React.createElement('span', {
      style: {
        minWidth: 36,
        height: 36,
        borderRadius: '999px',
        border: '2px solid var(--se-lime)',
        color: isActive ? 'var(--se-lime)' : isComplete ? 'var(--se-black)' : 'var(--text-muted)',
        background: isComplete ? 'var(--se-lime)' : 'transparent',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16
      }
    }, isComplete ? '✓' : i + 1), React.createElement('div', {
      style: {
        flex: 1
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: isActive ? 20 : 16,
        lineHeight: 1.3
      }
    }, s.title), isActive && s.content && React.createElement('div', {
      style: {
        marginTop: 16
      }
    }, s.content), isComplete && s.summary && React.createElement('div', {
      style: {
        marginTop: 4,
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, s.summary)));
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
const CHEV = 'M6 9l6 6 6-6';
function TopBar({
  company,
  user,
  items = [],
  active,
  onNav,
  onLogout,
  onMenu,
  mobile,
  basePath = '../..'
}) {
  const [openMenu, setOpenMenu] = React.useState(null);
  const [userOpen, setUserOpen] = React.useState(false);
  const closeAll = () => {
    setOpenMenu(null);
    setUserOpen(false);
  };
  React.useEffect(() => {
    const h = () => closeAll();
    window.addEventListener('click', h);
    return () => window.removeEventListener('click', h);
  }, []);
  if (mobile) {
    return React.createElement('header', {
      style: {
        background: 'var(--se-black)',
        color: '#fff',
        padding: '0 12px 0 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 56,
        position: 'sticky',
        top: 0,
        zIndex: 30
      }
    }, React.createElement(__ds_scope.Logo, {
      variant: 'negativa',
      height: 30,
      basePath
    }), React.createElement('button', {
      onClick: onMenu,
      'aria-label': 'Abrir menú',
      'style': {
        width: 44,
        height: 44,
        minWidth: 44,
        borderRadius: '999px',
        background: 'transparent',
        border: '1.5px solid #fff',
        color: '#fff',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement('svg', {
      width: 22,
      height: 22,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 2,
      strokeLinecap: 'round'
    }, React.createElement('path', {
      d: 'M3 6h18M3 12h18M3 18h18'
    }))));
  }
  return React.createElement('header', {
    onClick: e => e.stopPropagation()
  },
  // white strip: company + user dropdown + logout
  React.createElement('div', {
    style: {
      background: '#fff',
      padding: '8px 24px',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 20,
      fontSize: 13,
      borderBottom: '1px solid var(--border-default)'
    }
  }, company && React.createElement('span', {
    style: {
      fontWeight: 700,
      letterSpacing: '.04em',
      color: 'var(--text-muted)'
    }
  }, company), React.createElement('div', {
    style: {
      position: 'relative'
    }
  }, React.createElement('button', {
    onClick: () => setUserOpen(o => !o),
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '.04em',
      color: 'var(--se-black)',
      minHeight: 36,
      padding: '0 8px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, user || 'USUARIO', React.createElement('svg', {
    width: 12,
    height: 12,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.5,
    style: {
      transform: userOpen ? 'rotate(180deg)' : 'none',
      transition: 'transform .15s'
    }
  }, React.createElement('path', {
    d: CHEV
  }))), userOpen && React.createElement('div', {
    style: {
      position: 'absolute',
      top: '100%',
      right: 0,
      marginTop: 6,
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 12,
      boxShadow: 'var(--shadow-modal)',
      minWidth: 200,
      padding: 6,
      zIndex: 20
    }
  }, ['Perfil', 'Empresas', 'Notificaciones', 'Ayuda'].map(l => React.createElement('button', {
    key: l,
    onClick: () => {
      setUserOpen(false);
      onNav && onNav('perfil-' + l.toLowerCase());
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      padding: '10px 12px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      borderRadius: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-primary)',
      minHeight: 40
    }
  }, l)))), React.createElement('button', {
    onClick: onLogout,
    'aria-label': 'Salir',
    style: {
      width: 36,
      height: 36,
      minWidth: 36,
      borderRadius: '999px',
      border: '1.5px solid var(--se-black)',
      background: 'transparent',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement('svg', {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2
  }, React.createElement('path', {
    d: 'M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3'
  })))),
  // black bar with primary items
  React.createElement('div', {
    style: {
      background: 'var(--se-black)',
      color: '#fff',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: 72,
      position: 'relative'
    }
  }, React.createElement(__ds_scope.Logo, {
    variant: 'negativa',
    height: 36,
    basePath
  }), React.createElement('nav', {
    style: {
      display: 'flex',
      gap: 2,
      alignItems: 'stretch',
      height: 72
    }
  }, items.map(it => {
    const isActive = active === it.key || it.children && it.children.some(c => c.key === active);
    const hasChildren = !!it.children;
    return React.createElement('div', {
      key: it.key,
      style: {
        position: 'relative',
        display: 'flex'
      }
    }, React.createElement('button', {
      onClick: e => {
        e.stopPropagation();
        hasChildren ? setOpenMenu(openMenu === it.key ? null : it.key) : onNav && onNav(it.key);
      },
      style: {
        background: 'transparent',
        border: 'none',
        color: isActive ? 'var(--se-lime)' : '#fff',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '.04em',
        textTransform: 'uppercase',
        padding: '0 14px',
        minHeight: 44,
        cursor: 'pointer',
        borderBottom: isActive ? '3px solid var(--se-lime)' : '3px solid transparent',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6
      }
    }, it.label, hasChildren && React.createElement('svg', {
      width: 12,
      height: 12,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 2.5
    }, React.createElement('path', {
      d: CHEV
    }))), hasChildren && openMenu === it.key && React.createElement('div', {
      style: {
        position: 'absolute',
        top: '100%',
        right: 0,
        background: '#fff',
        color: 'var(--se-black)',
        border: '1px solid var(--border-default)',
        borderTop: '3px solid var(--se-lime)',
        borderRadius: '0 0 12px 12px',
        minWidth: 240,
        boxShadow: 'var(--shadow-modal)',
        padding: 6,
        zIndex: 20
      }
    }, it.children.map(c => React.createElement('button', {
      key: c.key,
      onClick: () => {
        setOpenMenu(null);
        onNav && onNav(c.key);
      },
      style: {
        display: 'block',
        width: '100%',
        textAlign: 'left',
        padding: '12px 14px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 8,
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        fontWeight: active === c.key ? 700 : 500,
        color: 'var(--se-black)',
        minHeight: 44
      }
    }, c.label))));
  }))));
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal_productor/CompraHT.jsx
try { (() => {
function CompraHT({
  onNav
}) {
  const {
    TopBar,
    Footer,
    Breadcrumb,
    Stepper,
    CropSelector,
    Button,
    Card
  } = window.DesignSystemSEMBRA_f9fdf7;
  const [crop, setCrop] = React.useState('cebada');
  const [tech, setTech] = React.useState('E3');
  const [marca, setMarca] = React.useState('');
  const [step, setStep] = React.useState(1);
  const techOptions = [{
    id: 'E3',
    label: 'E3 CEBADA',
    desc: 'Incluye todas las variedades de cebada con tecnología Enlist.'
  }, {
    id: 'CL',
    label: 'CL CEBADA',
    desc: 'Clearfield — variedades tolerantes a imidazolinonas.'
  }];
  const nav = [{
    key: 'home',
    label: 'Inicio'
  }, {
    key: 'lic',
    label: 'Licencias'
  }, {
    key: 'ht',
    label: 'Movimientos de HT'
  }, {
    key: 'compras',
    label: 'Mis compras'
  }, {
    key: 'pph',
    label: 'Precertificación'
  }, {
    key: 'cg',
    label: 'Cuenta granaria'
  }, {
    key: 'ces',
    label: 'Cesiones'
  }];
  const steps = [{
    title: 'Seleccionar cultivo',
    summary: crop.charAt(0).toUpperCase() + crop.slice(1),
    content: /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement(CropSelector, {
      value: crop,
      onChange: v => {
        setCrop(v);
        setStep(1);
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        display: 'flex',
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => setStep(1)
    }, "Continuar")))
  }, {
    title: 'Seleccionar tecnología',
    summary: tech,
    content: /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, techOptions.map(o => /*#__PURE__*/React.createElement("button", {
      key: o.id,
      onClick: () => setTech(o.id),
      style: {
        textAlign: 'left',
        padding: 16,
        border: '2px solid ' + (tech === o.id ? '#BFFF00' : '#4A5261'),
        background: tech === o.id ? '#2E2E2E' : 'transparent',
        borderRadius: 12,
        color: '#fff',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 18,
        color: tech === o.id ? '#BFFF00' : '#fff'
      }
    }, o.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: '#DDE2EB',
        marginTop: 4
      }
    }, o.desc))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      style: {
        color: '#fff'
      },
      onClick: () => setStep(0)
    }, "Volver"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => setStep(2)
    }, "Continuar")))
  }, {
    title: 'Seleccionar marca'
  }, {
    title: 'Confirmar compra'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    mobile: true,
    items: nav,
    active: "compras",
    onNav: onNav
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 16px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Portal',
      href: '#'
    }, {
      label: 'Compra HT'
    }]
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 28,
      margin: 0
    }
  }, "Compra de HT"), /*#__PURE__*/React.createElement(Stepper, {
    steps: steps,
    activeIndex: step,
    onStepClick: i => i <= step && setStep(i)
  })), /*#__PURE__*/React.createElement(Footer, null));
}
window.CompraHT = CompraHT;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal_productor/CompraHT.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal_productor/CuentaGranaria.jsx
try { (() => {
function CuentaGranaria({
  onNav
}) {
  const {
    TopBar,
    Footer,
    Breadcrumb,
    CropSelector,
    Select,
    DataTable,
    Card
  } = window.DesignSystemSEMBRA_f9fdf7;
  const [crop, setCrop] = React.useState('cebada');
  const nav = [{
    key: 'home',
    label: 'Inicio'
  }, {
    key: 'lic',
    label: 'Licencias'
  }, {
    key: 'ht',
    label: 'Movimientos de HT'
  }, {
    key: 'compras',
    label: 'Mis compras'
  }, {
    key: 'pph',
    label: 'Precertificación'
  }, {
    key: 'cg',
    label: 'Cuenta granaria'
  }, {
    key: 'ces',
    label: 'Cesiones'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    mobile: true,
    items: nav,
    active: "cg",
    onNav: onNav
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 16px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Portal',
      href: '#'
    }, {
      label: 'Cuenta granaria'
    }]
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 28
    }
  }, "Cuenta granaria"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      fontWeight: 700,
      marginBottom: 8
    }
  }, "Cultivo"), /*#__PURE__*/React.createElement(CropSelector, {
    value: crop,
    onChange: setCrop
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Campa\xF1a"
  }, /*#__PURE__*/React.createElement("option", null, "2025/26"), /*#__PURE__*/React.createElement("option", null, "2024/25")), /*#__PURE__*/React.createElement(Select, {
    label: "Plataforma"
  }, /*#__PURE__*/React.createElement("option", null, "Corredor"), /*#__PURE__*/React.createElement("option", null, "Acopio"))), /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'fecha',
      label: 'Fecha'
    }, {
      key: 'concepto',
      label: 'Concepto'
    }, {
      key: 'kg',
      label: 'Kilos'
    }],
    rows: [],
    empty: 'Todavía no registrás movimientos para ' + crop + '.'
  })), /*#__PURE__*/React.createElement(Footer, null));
}
window.CuentaGranaria = CuentaGranaria;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal_productor/CuentaGranaria.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal_productor/HomeMobile.jsx
try { (() => {
function HomeMobile({
  onNav
}) {
  const {
    TopBar,
    Footer,
    MetricCard,
    Card,
    Button
  } = window.DesignSystemSEMBRA_f9fdf7;
  const nav = [{
    key: 'home',
    label: 'Inicio'
  }, {
    key: 'lic',
    label: 'Licencias'
  }, {
    key: 'ht',
    label: 'Movimientos de HT'
  }, {
    key: 'compras',
    label: 'Mis compras'
  }, {
    key: 'pph',
    label: 'Precertificación'
  }, {
    key: 'cg',
    label: 'Cuenta granaria'
  }, {
    key: 'ces',
    label: 'Cesiones'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#EEF1F7',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    mobile: true,
    company: "LIAG ARGENTINA S.A.U.",
    user: "IGNACIO VIDAL",
    items: nav,
    active: "home",
    onNav: onNav
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 220,
      background: 'linear-gradient(180deg,rgba(0,0,0,.35),rgba(0,0,0,.55)),url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800) center/cover',
      color: '#fff',
      padding: '32px 20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: 26,
      lineHeight: 1.15,
      margin: 0
    }
  }, "Sembr\xE1 Evoluci\xF3n,", /*#__PURE__*/React.createElement("br", null), "donde ten\xE9s que estar.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(MetricCard, {
    title: "CEBADA",
    value: "0",
    cta: "Adherite a PPH",
    onCta: () => onNav && onNav('pph')
  }), /*#__PURE__*/React.createElement(MetricCard, {
    title: "TRIGO",
    value: "268",
    cta: "Adherite a PPH",
    onCta: () => onNav && onNav('pph')
  }), /*#__PURE__*/React.createElement(MetricCard, {
    title: "SOJA",
    value: "0",
    cta: "Compra HT",
    onCta: () => onNav && onNav('compras')
  })), /*#__PURE__*/React.createElement(Footer, null));
}
window.HomeMobile = HomeMobile;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal_productor/HomeMobile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal_productor/Licencias.jsx
try { (() => {
function Licencias({
  onNav
}) {
  const {
    TopBar,
    Footer,
    Breadcrumb,
    DataTable,
    FilterPill,
    Badge,
    Input,
    Button
  } = window.DesignSystemSEMBRA_f9fdf7;
  const nav = [{
    key: 'home',
    label: 'Inicio'
  }, {
    key: 'lic',
    label: 'Licencias'
  }, {
    key: 'ht',
    label: 'Movimientos de HT'
  }, {
    key: 'compras',
    label: 'Mis compras'
  }, {
    key: 'pph',
    label: 'Precertificación'
  }, {
    key: 'cg',
    label: 'Cuenta granaria'
  }, {
    key: 'ces',
    label: 'Cesiones'
  }];
  const cols = [{
    key: 'id',
    label: 'Código',
    link: true
  }, {
    key: 'cultivo',
    label: 'Cultivo'
  }, {
    key: 'variedad',
    label: 'Variedad'
  }, {
    key: 'ht',
    label: 'HT'
  }, {
    key: 'estado',
    label: 'Estado',
    render: r => {
      const m = {
        Aprobada: 'success',
        Pagada: 'success',
        Vencida: 'warning',
        Cancelada: 'danger',
        Pendiente: 'warning'
      };
      return /*#__PURE__*/React.createElement(Badge, {
        tone: m[r.estado] || 'neutral'
      }, r.estado);
    }
  }];
  const rows = [{
    id: 'LC-00812',
    cultivo: 'Cebada',
    variedad: 'E3 CB-12',
    ht: '120',
    estado: 'Aprobada'
  }, {
    id: 'LC-00813',
    cultivo: 'Trigo',
    variedad: 'CL TR-04',
    ht: '268',
    estado: 'Pagada'
  }, {
    id: 'LC-00814',
    cultivo: 'Soja',
    variedad: 'RR2 SJ-08',
    ht: '54',
    estado: 'Vencida'
  }, {
    id: 'LC-00815',
    cultivo: 'Cebada',
    variedad: 'E3 CB-14',
    ht: '92',
    estado: 'Pendiente'
  }, {
    id: 'LC-00816',
    cultivo: 'Trigo',
    variedad: '—',
    ht: '12',
    estado: 'Cancelada'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    mobile: true,
    items: nav,
    active: "lic",
    onNav: onNav
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 16px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Portal',
      href: '#'
    }, {
      label: 'Licencias'
    }]
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 28
    }
  }, "Licencias"), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Buscar por c\xF3digo o variedad",
    leftIcon: /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 21l-4.3-4.3"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(FilterPill, {
    label: "Cultivo",
    value: "Todos"
  }), /*#__PURE__*/React.createElement(FilterPill, {
    label: "Estado",
    value: "Aprobada",
    active: true
  }), /*#__PURE__*/React.createElement(FilterPill, {
    label: "Campa\xF1a",
    value: "2025/26"
  })), /*#__PURE__*/React.createElement(DataTable, {
    columns: cols,
    rows: rows
  })), /*#__PURE__*/React.createElement(Footer, null));
}
window.Licencias = Licencias;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal_productor/Licencias.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.FilterPill = __ds_scope.FilterPill;

__ds_ns.CropSelector = __ds_scope.CropSelector;

__ds_ns.MetricCard = __ds_scope.MetricCard;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.TopBar = __ds_scope.TopBar;

})();
