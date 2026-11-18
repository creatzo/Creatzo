/* ============================================================================
   creatzo – theme.js
   ONE FILE = poori website ka color + theme control (sirf ADMIN ke liye).

   Visitors ko koi button / panel nahi dikhta. Theme sirf is file ke CONFIG
   me code se select hoti hai. Badalne ke liye CONFIG edit karo, GitHub par
   commit karo, bas.

   Use kaise kare:
   1. Is file ko repo ke ROOT me rakho (index.html ke saath).
   2. Har page ke <head> me, <style> se PEHLE ye line daalo:
          <script src="theme.js"></script>
   3. Neeche CONFIG me theme / mode / colors choose karo.
   ============================================================================ */
(function () {
  'use strict';

  /* =========================================================================
     1) CONFIG  –  yahan se poori site ki theme select karo
     ========================================================================= */
  var CONFIG = {
    // THEME:
    //   'random' = har refresh / page load par alag random theme (DEFAULT)
    //   ya fix karo: 'mono' | 'ocean' | 'sunset' | 'forest' | 'rose' | 'violet' |
    //   'teal' | 'gold' | 'crimson' | 'coffee' | 'neon' | 'candy' | 'slate' | 'peach'
    preset: 'random',

    // Sirf in themes me se random chunna ho to naam likho, jaise ['ocean','neon','rose'].
    // Khaali [] = saari themes me se random.
    randomPool: [],

    // MODE:
    //   'auto'   = visitor ke device ki light/dark setting follow kare (DEFAULT)
    //   'random' = har refresh par random light ya dark
    //   'light' | 'dark' = hamesha fix
    mode: 'auto',

    // CUSTOM COLORS (optional) – theme ke upar lagte hain.
    // Example: light: { accent: '#ff3b30' }, dark: { accent: '#ff6b61' }
    // Khaali chhodo to theme ke original colors use honge.
    light: {},
    dark: {}
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
    },
    teal: {
      name: 'Teal',
      light: { bg: '#f0fbfb', fg: '#062425', accent: '#0d9488', heroBg: '#062425' },
      dark:  { bg: '#041416', fg: '#e0fafa', accent: '#2dd4bf', heroBg: '#041416' }
    },
    gold: {
      name: 'Gold',
      light: { bg: '#fffbeb', fg: '#2b1d03', accent: '#d99a00', heroBg: '#2b1d03' },
      dark:  { bg: '#141003', fg: '#fff6d6', accent: '#fbbf24', heroBg: '#141003' }
    },
    crimson: {
      name: 'Crimson',
      light: { bg: '#fff5f5', fg: '#230707', accent: '#dc2626', heroBg: '#230707' },
      dark:  { bg: '#150404', fg: '#ffe8e8', accent: '#f87171', heroBg: '#150404' }
    },
    coffee: {
      name: 'Coffee',
      light: { bg: '#faf5ef', fg: '#2a1c12', accent: '#8b5a2b', heroBg: '#2a1c12' },
      dark:  { bg: '#120c08', fg: '#f5e9dc', accent: '#c68b59', heroBg: '#120c08' }
    },
    neon: {
      name: 'Neon',
      light: { bg: '#f2fff8', fg: '#03140c', accent: '#00b36b', heroBg: '#03140c' },
      dark:  { bg: '#020a06', fg: '#d7ffe8', accent: '#00ff9c', heroBg: '#020a06' }
    },
    candy: {
      name: 'Candy',
      light: { bg: '#fff4fb', fg: '#2a0f3a', accent: '#ec4899', heroBg: '#2a0f3a' },
      dark:  { bg: '#12061a', fg: '#fde7f6', accent: '#22d3ee', heroBg: '#12061a' }
    },
    slate: {
      name: 'Slate',
      light: { bg: '#f4f6f8', fg: '#111827', accent: '#475569', heroBg: '#111827' },
      dark:  { bg: '#0b0f14', fg: '#e5e7eb', accent: '#94a3b8', heroBg: '#0b0f14' }
    },
    peach: {
      name: 'Peach',
      light: { bg: '#fff6f1', fg: '#2e1710', accent: '#ff8a5b', heroBg: '#2e1710' },
      dark:  { bg: '#150b07', fg: '#ffeee6', accent: '#ffab85', heroBg: '#150b07' }
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
     5) APPLY  –  CSS variables page par lagao
     ========================================================================= */
  var root = document.documentElement;
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  function pick(list) { return list[Math.floor(Math.random() * list.length)]; }

  // Theme chunno (random ho to har page load par naya)
  var names = Object.keys(PRESETS);
  var pool = (CONFIG.randomPool || []).filter(function (n) { return PRESETS[n]; });
  var presetName = CONFIG.preset === 'random' ? pick(pool.length ? pool : names) : CONFIG.preset;
  var preset = PRESETS[presetName] || PRESETS.mono;
  var fixedMode = CONFIG.mode === 'random' ? pick(['light', 'dark']) : CONFIG.mode;

  function resolved() {
    if (fixedMode === 'light' || fixedMode === 'dark') return fixedMode;
    return mq && mq.matches ? 'dark' : 'light';
  }
  function tokens(mode) {
    var merged = {};
    [preset[mode], CONFIG[mode]].forEach(function (layer) {
      var c = clean(layer);
      for (var k in c) merged[k] = c[k];
    });
    return derive(merged);
  }

  var style = document.createElement('style');
  style.id = 'creatzo-theme';
  (document.head || root).appendChild(style);

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
  }

  apply(); // <head> me hi chal jata hai, isliye page flash nahi karta

  // 'auto' mode me device ki setting badle to live update
  if (mq && fixedMode === 'auto') {
    if (mq.addEventListener) mq.addEventListener('change', apply);
    else if (mq.addListener) mq.addListener(apply);
  }
})();
