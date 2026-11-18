/* ============================================================================
   creatzo – theme.js
   ONE FILE = poori website ka color + theme control.

   Ye file kya karti hai:
   - Light / Dark / Auto (device ke hisaab se) mode
   - 6 ready-made color themes (Mono, Ocean, Sunset, Forest, Rose, Violet)
   - Har ek color ko alag se badalne ka option (live color picker panel)
   - Visitor ki choice browser me save hoti hai
   - Saare pages (index, about, faq) par apne aap lagta hai

   Use kaise kare:
   1. Is file ko repo ke ROOT me rakho (index.html ke saath).
   2. Har page ke <head> me, <style> se PEHLE ye line daalo:
          <script src="theme.js"></script>
   3. Neeche CONFIG me apni default theme / colors set karo.

   Naya page banaye to bas wahi ek <script> line daalna, baaki sab automatic.
   ============================================================================ */
(function () {
  'use strict';

  /* =========================================================================
     1) CONFIG  –  yahan se poori site ka default control karo
     ========================================================================= */
  var CONFIG = {
  preset: 'mono',   // 'mono' | 'ocean' | 'sunset' | 'forest' | 'rose' | 'violet'
  mode: 'auto',     // 'auto' | 'light' | 'dark'
  light: {},        // optional custom colors, light mode ke liye
  dark: {}          // optional custom colors, dark mode ke liye
};
  /* =========================================================================
     2) COLOR TOKENS  –  site ke har color ka naam (CSS variable)
        bg          page background            --bg
        fg          main text                  --fg
        mute        halka / secondary text     --mute
        line        borders / lines            --line
        accent      highlights, focus, chips   --accent
        accentFg    accent ke upar ka text     --accent-fg
        heroBg      hero section background    --hero-bg
        heroFg      hero section text          --hero-fg
        btnBg       "Browse the gallery" btn   --btn-bg
        btnFg       button text                --btn-fg
        tipBg       image hover label          --tip-bg
        tipFg       hover label text           --tip-fg
        toastBg     "Prompt copied" popup      --toast-bg
        toastFg     popup text                 --toast-fg
        toastBorder popup border               --toast-border
     ========================================================================= */
  var TOKENS = ['bg', 'fg', 'mute', 'line', 'accent', 'accentFg', 'heroBg', 'heroFg',
                'btnBg', 'btnFg', 'tipBg', 'tipFg', 'toastBg', 'toastFg', 'toastBorder'];

  /* =========================================================================
     3) PRESETS  –  sirf 4 main colors do, baaki apne aap ban jaate hain
        (mono me sab explicitly diye hain taaki original look same rahe)
     ========================================================================= */
  var PRESETS = {
    mono: {
      name: 'Mono',
      light: { bg: '#ffffff', fg: '#000000', mute: '#5f5f5f', line: '#d9d9d9',
               accent: '#000000', accentFg: '#ffffff', heroBg: '#000000', heroFg: '#ffffff',
               btnBg: '#ffffff', btnFg: '#000000', tipBg: '#000000', tipFg: '#ffffff',
               toastBg: '#ffffff', toastFg: '#000000', toastBorder: '#000000' },
      dark:  { bg: '#000000', fg: '#ffffff', mute: '#a3a3a3', line: '#2b2b2b',
               accent: '#ffffff', accentFg: '#000000', heroBg: '#000000', heroFg: '#ffffff',
               btnBg: '#ffffff', btnFg: '#000000', tipBg: '#000000', tipFg: '#ffffff',
               toastBg: '#ffffff', toastFg: '#000000', toastBorder: '#ffffff' }
    },
    ocean: {
      name: 'Ocean',
      light: { bg: '#f4f8ff', fg: '#0b1530', accent: '#2457ff', heroBg: '#0b1530' },
      dark:  { bg: '#070d1f', fg: '#e8eeff', accent: '#5b8cff', heroBg: '#070d1f' }
    },
    sunset: {
      name: 'Sunset',
      light: { bg: '#fff7f0', fg: '#2a1208', accent: '#f2541b', heroBg: '#2a1208' },
      dark:  { bg: '#140a06', fg: '#ffeee3', accent: '#ff7a45', heroBg: '#140a06' }
    },
    forest: {
      name: 'Forest',
      light: { bg: '#f3faf5', fg: '#0d2417', accent: '#16a34a', heroBg: '#0d2417' },
      dark:  { bg: '#07130c', fg: '#e6f7ec', accent: '#34d27a', heroBg: '#07130c' }
    },
    rose: {
      name: 'Rose',
      light: { bg: '#fff5f8', fg: '#2b0c18', accent: '#e11d63', heroBg: '#2b0c18' },
      dark:  { bg: '#16060d', fg: '#ffe9f1', accent: '#ff5c93', heroBg: '#16060d' }
    },
    violet: {
      name: 'Violet',
      light: { bg: '#f8f5ff', fg: '#1a0f33', accent: '#7c3aed', heroBg: '#1a0f33' },
      dark:  { bg: '#0d0719', fg: '#f0e9ff', accent: '#a78bfa', heroBg: '#0d0719' }
    }
  };

  /* =========================================================================
     4) COLOR HELPERS
     ========================================================================= */
  function norm(h) {
    h = String(h == null ? '' : h).trim().toLowerCase();
    if (/^#[0-9a-f]{3}$/.test(h)) h = '#' + h[1] + h[1] + h[2] + h[2] + h[3] + h[3];
    return /^#[0-9a-f]{6}$/.test(h) ? h : null;
  }
  function rgb(h) {
    return [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  }
  // a se b ki taraf t (0..1) mix
  function mix(a, b, t) {
    var x = rgb(a), y = rgb(b), o = '#';
    for (var i = 0; i < 3; i++) {
      var v = Math.round(x[i] + (y[i] - x[i]) * t);
      o += (v < 16 ? '0' : '') + v.toString(16);
    }
    return o;
  }
  function lum(h) {
    var c = rgb(h).map(function (v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  }
  // kaun sa text (black/white) is color ke upar zyada readable hai
  function readable(h) {
    var L = lum(h);
    return (L + 0.05) / 0.05 > 1.05 / (L + 0.05) ? '#000000' : '#ffffff';
  }
  function clean(obj) {
    var out = {};
    if (!obj || typeof obj !== 'object') return out;
    TOKENS.forEach(function (k) {
      var v = norm(obj[k]);
      if (v) out[k] = v;
    });
    return out;
  }
  // Chhote preset se poore tokens banata hai
  function derive(src) {
    var c = clean(src);
    c.bg = c.bg || '#ffffff';
    c.fg = c.fg || '#000000';
    c.accent = c.accent || c.fg;
    c.mute = c.mute || mix(c.fg, c.bg, 0.38);
    c.line = c.line || mix(c.fg, c.bg, 0.84);
    c.accentFg = c.accentFg || readable(c.accent);
    c.heroBg = c.heroBg || '#000000';
    c.heroFg = c.heroFg || readable(c.heroBg);
    c.btnBg = c.btnBg || c.accent;
    c.btnFg = c.btnFg || readable(c.btnBg);
    c.tipBg = c.tipBg || c.heroBg;
    c.tipFg = c.tipFg || c.heroFg;
    c.toastBg = c.toastBg || c.fg;
    c.toastFg = c.toastFg || c.bg;
    c.toastBorder = c.toastBorder || c.fg;
    return c;
  }

  /* =========================================================================
     5) STATE  (mode + preset + visitor ke custom colors)
     ========================================================================= */
  var root = document.documentElement;
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function freshState() {
    return { mode: CONFIG.defaultMode, preset: CONFIG.defaultPreset, custom: { light: {}, dark: {} } };
  }
  function load() {
    var s = freshState();
    if (!CONFIG.showPanel) return s; // panel band = owner ki theme final
    try {
      var raw = JSON.parse(localStorage.getItem(CONFIG.storageKey) || 'null');
      if (raw && typeof raw === 'object') {
        if (['auto', 'light', 'dark'].indexOf(raw.mode) > -1) s.mode = raw.mode;
        if (PRESETS[raw.preset]) s.preset = raw.preset;
        if (raw.custom) s.custom = { light: clean(raw.custom.light), dark: clean(raw.custom.dark) };
      }
    } catch (e) {}
    if (['auto', 'light', 'dark'].indexOf(s.mode) < 0) s.mode = 'auto';
    if (!PRESETS[s.preset]) s.preset = 'mono';
    return s;
  }
  function save() {
    try { localStorage.setItem(CONFIG.storageKey, JSON.stringify(state)); } catch (e) {}
  }

  var state = load();

  function resolved() {
    if (state.mode === 'auto') return mq && mq.matches ? 'dark' : 'light';
    return state.mode;
  }
  function tokens(mode) {
    var p = PRESETS[state.preset] || PRESETS.mono;
    var merged = {};
    var layers = [p[mode], CONFIG.overrides && CONFIG.overrides[mode], state.custom[mode]];
    layers.forEach(function (l) {
      var c = clean(l);
      for (var k in c) merged[k] = c[k];
    });
    return derive(merged);
  }

  /* =========================================================================
     6) APPLY  –  CSS variables page par lagao
     ========================================================================= */
  var style = document.createElement('style');
  style.id = 'creatzo-theme';
  (document.head || root).appendChild(style);

  var onApply = null;

  function apply() {
    var m = resolved();
    var t = tokens(m);
    var css = 'html:root[data-creatzo]{color-scheme:' + m + ';';
    TOKENS.forEach(function (k) {
      css += '--' + k.replace(/[A-Z]/g, function (c) { return '-' + c.toLowerCase(); }) + ':' + t[k] + ';';
    });
    style.textContent = css + '}';
    root.setAttribute('data-creatzo', '');
    root.setAttribute('data-theme', m);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', t.bg);
    if (onApply) onApply(m, t);
  }

  apply(); // <head> me hi chal jata hai, isliye page flash nahi karta

  if (mq) {
    var onScheme = function () { if (state.mode === 'auto') apply(); };
    if (mq.addEventListener) mq.addEventListener('change', onScheme);
    else if (mq.addListener) mq.addListener(onScheme);
  }
  window.addEventListener('storage', function (e) {
    if (e.key === CONFIG.storageKey && CONFIG.showPanel) { state = load(); apply(); }
  });

  /* =========================================================================
     7) PUBLIC API  (console ya apni script se control karne ke liye)
        CreatzoTheme.setMode('dark')
        CreatzoTheme.setPreset('ocean')
        CreatzoTheme.setColor('accent', '#ff0055')
        CreatzoTheme.reset()
     ========================================================================= */
  var api = {
    setMode: function (m) {
      if (['auto', 'light', 'dark'].indexOf(m) < 0) return;
      state.mode = m; save(); apply();
    },
    setPreset: function (p) {
      if (!PRESETS[p]) return;
      state.preset = p; state.custom = { light: {}, dark: {} }; save(); apply();
    },
    setColor: function (token, value) {
      var v = norm(value);
      if (TOKENS.indexOf(token) < 0 || !v) return;
      state.custom[resolved()][token] = v; save(); apply();
    },
    reset: function () {
      state = freshState();
      try { localStorage.removeItem(CONFIG.storageKey); } catch (e) {}
      apply();
    },
    get: function () {
      var m = resolved();
      return { mode: state.mode, resolvedMode: m, preset: state.preset, colors: tokens(m) };
    },
    presets: function () { return Object.keys(PRESETS); }
  };
  window.CreatzoTheme = api;

  /* =========================================================================
     8) FLOATING PANEL  (Shadow DOM me, taaki site ki CSS isse na bigade)
     ========================================================================= */
  var GROUPS = [
    ['Page', [['bg', 'Background'], ['fg', 'Text'], ['mute', 'Muted text'], ['line', 'Borders']]],
    ['Accent', [['accent', 'Accent / highlights'], ['accentFg', 'Text on accent']]],
    ['Hero & button', [['heroBg', 'Hero background'], ['heroFg', 'Hero text'], ['btnBg', 'Button'], ['btnFg', 'Button text']]],
    ['Overlays', [['tipBg', 'Hover label'], ['tipFg', 'Hover label text'], ['toastBg', 'Popup'], ['toastFg', 'Popup text'], ['toastBorder', 'Popup border']]]
  ];

  var PANEL_CSS =
    ':host{all:initial}' +
    '*{box-sizing:border-box}' +
    '.fab{position:fixed;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:2147483000;width:46px;height:46px;border-radius:50%;border:1px solid #5a5a5a;background:#111;color:#fff;display:grid;place-items:center;cursor:pointer;box-shadow:0 4px 18px rgba(0,0,0,.35);padding:0}' +
    '.fab:focus-visible,button:focus-visible,input:focus-visible{outline:2px solid #8ab4ff;outline-offset:2px}' +
    '.panel{position:fixed;right:16px;bottom:calc(72px + env(safe-area-inset-bottom,0px));z-index:2147483000;width:min(340px,calc(100vw - 32px));max-height:min(72vh,580px);overflow:auto;background:#121212;color:#f2f2f2;border:1px solid #3a3a3a;border-radius:14px;padding:14px 14px 12px;font:14px/1.4 Roboto,system-ui,-apple-system,"Segoe UI",Arial,sans-serif;box-shadow:0 12px 40px rgba(0,0,0,.5)}' +
    '.panel[hidden]{display:none}' +
    'header{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}' +
    'h2{margin:0;font-size:16px;font-weight:700}' +
    'h3{margin:14px 0 8px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#9a9a9a}' +
    '.x{background:none;border:0;color:#fff;font-size:22px;line-height:1;cursor:pointer;padding:2px 8px}' +
    '.seg{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid #444;border-radius:10px;overflow:hidden}' +
    '.seg button{background:#121212;color:#f2f2f2;border:0;padding:9px 4px;font:inherit;cursor:pointer}' +
    '.seg button+button{border-left:1px solid #444}' +
    '.seg button[aria-pressed="true"]{background:#f2f2f2;color:#111;font-weight:700}' +
    '.pre{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}' +
    '.pre button{display:flex;align-items:center;gap:7px;background:#1b1b1b;color:#f2f2f2;border:1px solid #444;border-radius:10px;padding:8px;font:inherit;font-size:13px;cursor:pointer}' +
    '.pre button[aria-pressed="true"]{border-color:#f2f2f2;box-shadow:0 0 0 1px #f2f2f2}' +
    '.dot{flex:none;width:18px;height:18px;border-radius:50%;border:1px solid rgba(255,255,255,.35)}' +
    '.row{display:flex;align-items:center;gap:10px;padding:5px 0}' +
    '.row span{flex:1;min-width:0}' +
    '.row code{font:12px ui-monospace,Menlo,Consolas,monospace;color:#9a9a9a}' +
    '.row input{flex:none;width:38px;height:30px;padding:0;border:1px solid #555;border-radius:6px;background:none;cursor:pointer}' +
    '.note{margin:0 0 4px;color:#9a9a9a;font-size:12px}' +
    '.foot{display:flex;gap:8px;margin-top:14px}' +
    '.foot button{flex:1;background:#1b1b1b;color:#f2f2f2;border:1px solid #555;border-radius:10px;padding:9px;font:inherit;cursor:pointer}' +
    '.foot button:hover{background:#262626}' +
    '@media(prefers-reduced-motion:no-preference){.fab{transition:transform .15s}.fab:hover{transform:scale(1.06)}}';

  function buildPanel() {
    if (!CONFIG.showPanel || document.getElementById('creatzo-theme-root')) return;

    var host = document.createElement('div');
    host.id = 'creatzo-theme-root';
    var sr = host.attachShadow({ mode: 'open' });

    var presetBtns = Object.keys(PRESETS).map(function (k) {
      var p = PRESETS[k].light;
      var a = norm(p.accent) || '#000', b = norm(p.bg) || '#fff';
      return '<button type="button" data-preset="' + k + '" aria-pressed="false">' +
             '<span class="dot" style="background:linear-gradient(135deg,' + a + ' 50%,' + b + ' 50%)"></span>' +
             PRESETS[k].name + '</button>';
    }).join('');

    var groups = GROUPS.map(function (g) {
      return '<h3>' + g[0] + '</h3>' + g[1].map(function (r) {
        return '<label class="row"><span>' + r[1] + '</span><code data-v="' + r[0] + '"></code>' +
               '<input type="color" data-k="' + r[0] + '" aria-label="' + r[1] + ' color"></label>';
      }).join('');
    }).join('');

    sr.innerHTML =
      '<style>' + PANEL_CSS + '</style>' +
      '<button class="fab" type="button" aria-label="Theme settings" aria-expanded="false" aria-controls="p">' +
        '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' +
        '<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor"/></svg></button>' +
      '<section class="panel" id="p" role="dialog" aria-label="Theme settings" hidden>' +
        '<header><h2>Theme</h2><button class="x" type="button" data-act="close" aria-label="Close">&times;</button></header>' +
        '<h3 style="margin-top:0">Mode</h3>' +
        '<div class="seg" role="group" aria-label="Mode">' +
          '<button type="button" data-mode="auto" aria-pressed="false">Auto</button>' +
          '<button type="button" data-mode="light" aria-pressed="false">Light</button>' +
          '<button type="button" data-mode="dark" aria-pressed="false">Dark</button></div>' +
        '<h3>Color theme</h3><div class="pre" role="group" aria-label="Color theme">' + presetBtns + '</div>' +
        '<h3>Custom colors</h3><p class="note">Editing: <b id="ed"></b> mode</p>' + groups +
        '<div class="foot"><button type="button" data-act="reset">Reset</button>' +
        '<button type="button" data-act="copy">Copy settings</button></div>' +
      '</section>';

    document.body.appendChild(host);

    var fab = sr.querySelector('.fab');
    var panel = sr.getElementById('p');

    function setOpen(open) {
      panel.hidden = !open;
      fab.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    onApply = function (m, t) {
      sr.querySelectorAll('[data-mode]').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.dataset.mode === state.mode));
      });
      sr.querySelectorAll('[data-preset]').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.dataset.preset === state.preset));
      });
      sr.getElementById('ed').textContent = m;
      sr.querySelectorAll('input[data-k]').forEach(function (i) {
        var v = t[i.dataset.k];
        if (i.value !== v) i.value = v;
      });
      sr.querySelectorAll('code[data-v]').forEach(function (c) { c.textContent = t[c.dataset.v]; });
    };
    onApply(resolved(), tokens(resolved()));

    fab.addEventListener('click', function () { setOpen(panel.hidden); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.hidden) { setOpen(false); fab.focus(); }
    });

    sr.addEventListener('input', function (e) {
      var i = e.target.closest ? e.target.closest('input[data-k]') : null;
      if (i) api.setColor(i.dataset.k, i.value);
    });

    sr.addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('button') : null;
      if (!b) return;
      if (b.dataset.mode) api.setMode(b.dataset.mode);
      else if (b.dataset.preset) api.setPreset(b.dataset.preset);
      else if (b.dataset.act === 'close') { setOpen(false); fab.focus(); }
      else if (b.dataset.act === 'reset') api.reset();
      else if (b.dataset.act === 'copy') copySettings(b);
    });
  }

  function copySettings(btn) {
    var ov = { light: {}, dark: {} };
    ['light', 'dark'].forEach(function (m) {
      var a = clean(CONFIG.overrides && CONFIG.overrides[m]), c = state.custom[m];
      for (var k in a) ov[m][k] = a[k];
      for (var j in c) ov[m][j] = c[j];
    });
    var text = "defaultMode: '" + state.mode + "',\n" +
               "defaultPreset: '" + state.preset + "',\n" +
               'overrides: ' + JSON.stringify(ov, null, 2);
    var done = function (ok) {
      var old = btn.textContent;
      btn.textContent = ok ? 'Copied ✓' : 'Copy failed';
      setTimeout(function () { btn.textContent = old; }, 1400);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
    } else {
      try {
        var a = document.createElement('textarea');
        a.value = text; a.style.cssText = 'position:fixed;opacity:0;top:0';
        document.body.appendChild(a); a.select();
        var ok = document.execCommand('copy'); a.remove(); done(ok);
      } catch (e) { done(false); }
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', buildPanel);
  else buildPanel();
})();
