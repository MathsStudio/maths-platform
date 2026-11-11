/* tex.js: shows written fractions such as 3/4 as proper stacked fractions (KaTeX, loaded only when a fraction is on screen).
   The spoken text is kept exactly as written, so the voice still reads "three quarters". */
(function () {
  'use strict';
  var FRAC = /(?<![\d/.])(?:(\d+)\s)?(\d+|\?)\/(\d+)(?![\d/]|\.\d)/g;
  var SKIP = 'script,style,textarea,input,select,svg,.katex,.fr,.vh,[data-notex],canvas,code,pre';
  var state = 0, kx = null, pending = false, busy = false;   /* 0 idle, 1 loading, 2 ready, 3 failed */
  var css = document.createElement('style');
  css.textContent = '.fr{display:inline-block;white-space:nowrap;vertical-align:middle;margin:0 .08em}.fr .katex{font-size:1.1em;font-family:inherit}.fr .katex .mord,.fr .katex .mathnormal,.fr .katex .mathrm{font-family:inherit;font-style:normal;font-weight:800}.fr .katex .mfrac .frac-line{border-bottom-width:.07em}';
  document.head.appendChild(css);

  function load() {
    if (state) return; state = 1;
    var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = '/vendor/katex/katex.min.css'; document.head.appendChild(l);
    var s = document.createElement('script'); s.src = '/vendor/katex/katex.min.js';
    s.onload = function () { if (window.katex) { kx = window.katex; state = 2; schedule(); } else state = 3; };
    s.onerror = function () { state = 3; };
    document.head.appendChild(s);
  }
  function mk(whole, a, b) {
    var sp = document.createElement('span'); sp.className = 'fr'; sp.setAttribute('role', 'img'); sp.setAttribute('aria-label', (whole ? whole + ' and ' : '') + a + ' over ' + b);
    var tex = (whole ? whole + '\\,' : '') + '\\dfrac{' + a + '}{' + b + '}';
    try { sp.innerHTML = kx.renderToString(tex, { output: 'html', throwOnError: false, strict: false }); } catch (e) { return null; }
    return sp;
  }
  function pin(node) {   /* keep the original wording for the voice before the node is changed */
    for (var el = node.parentNode; el && el.nodeType === 1; el = el.parentNode) {
      if (el.classList && el.classList.contains('say') && !el.hasAttribute('data-say')) el.setAttribute('data-say', el.textContent);
      if (el.id === 'view') break;
    }
  }
  function pass() {
    var root = document.getElementById('view'); if (!root) return;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: function (n) { return n.nodeValue.indexOf('/') > -1 && n.parentNode && !n.parentNode.closest(SKIP) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } });
    var hits = [], n; while ((n = w.nextNode())) { FRAC.lastIndex = 0; if (FRAC.test(n.nodeValue)) hits.push(n); }
    if (!hits.length) return;
    if (state === 0) { load(); return; }
    if (state !== 2) return;
    busy = true;
    hits.forEach(function (node) {
      var txt = node.nodeValue, frag = document.createDocumentFragment(), last = 0, m; FRAC.lastIndex = 0; pin(node);
      while ((m = FRAC.exec(txt))) {
        var sp = mk(m[1], m[2], m[3]); if (!sp) continue;
        frag.appendChild(document.createTextNode(txt.slice(last, m.index))); frag.appendChild(sp); last = m.index + m[0].length;
      }
      if (last) { frag.appendChild(document.createTextNode(txt.slice(last))); node.parentNode.replaceChild(frag, node); }
    });
    busy = false;
  }
  function schedule() { if (pending || busy) return; pending = true; requestAnimationFrame(function () { pending = false; try { pass(); } catch (e) { busy = false; } }); }
  function start() {
    var root = document.getElementById('view'); if (!root || typeof MutationObserver === 'undefined') return;
    new MutationObserver(function () { if (!busy) schedule(); }).observe(root, { childList: true, subtree: true, characterData: true });
    schedule();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
