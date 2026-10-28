/* pad.js: a small "Scribble pad" under questions that need working out.
   H.scribble(el, state) draws the pad into el; state keeps the drawing when the question card redraws.
   H.padWanted(text, isInput) says whether a question needs one (any typed answer, or a choice question with numbers). Nothing is saved or sent. */
(function () {
  'use strict';
  var S = Studio, H = S.h;
  var css = document.createElement('style');
  css.textContent = '.padbar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:10px 0 0}.padbar .btn{min-height:40px;padding:6px 14px;background:var(--surface);color:var(--fg);border:2px solid var(--accent);box-shadow:0 2px 0 var(--line)}' +
    '.padbox{margin-top:8px;border:2px solid var(--accent);border-radius:14px;background:#fff;overflow:hidden}.padbox canvas{display:block;width:100%;height:210px;touch-action:none;cursor:crosshair}' +
    '.padtools{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-top:8px}.padtools .btn{min-height:40px;padding:6px 14px;background:var(--surface);color:var(--fg);border:2px solid var(--accent);box-shadow:0 2px 0 var(--line)}' +
    '.padtools .btn[aria-pressed="true"]{background:var(--accent);color:var(--accent-fg)}.padcol{width:34px;height:34px;min-height:0!important;padding:0!important;border-radius:50%!important;border:3px solid #fff!important;box-shadow:0 0 0 2px var(--line)!important}.padcol[aria-pressed="true"]{box-shadow:0 0 0 3px var(--accent)!important}' +
    '@media (min-width:700px){.padbox canvas{height:260px}}';
  document.head.appendChild(css);
  var COLS = ['#17233F', '#2B62D9', '#E0682A'];
  H.padWanted = function (text, isInput) { return !!isInput || /\d/.test(String(text || '').replace(/<[^>]*>/g, '')); };
  H.scribble = function (el, st) {
    if (!el) return; st = st || {};
    var tool = 'pen', col = COLS[0];
    function render() {
      el.innerHTML = '<div class="padbar"><button class="btn" type="button" data-padt aria-expanded="' + (st.open ? 'true' : 'false') + '">✏️ ' + (st.open ? 'Hide scribble pad' : 'Scribble pad') + '</button>' + (st.open ? '' : '<span style="font-size:.9rem;opacity:.75">Work it out here</span>') + '</div>' +
        (st.open ? '<div class="padbox"><canvas aria-label="Scribble pad. Draw your working here."></canvas></div><div class="padtools"><button class="btn" type="button" data-pen aria-pressed="true">Pen</button><button class="btn" type="button" data-er aria-pressed="false">Eraser</button>' +
          COLS.map(function (c, i) { return '<button class="btn padcol" type="button" data-c="' + i + '" aria-label="Pen colour ' + (i + 1) + '" aria-pressed="' + (i === 0) + '" style="background:' + c + '"></button>'; }).join('') + '<button class="btn" type="button" data-clr style="margin-left:auto">Clear</button></div>' : '');
      el.querySelector("[data-padt]").addEventListener('click', function () { st.open = !st.open; render(); });
      if (!st.open) return;
      var cv = el.querySelector('canvas'), dpr = window.devicePixelRatio || 1, w = cv.clientWidth || 320, h = cv.clientHeight || 210;
      cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
      var cx = cv.getContext('2d'); cx.scale(dpr, dpr); cx.lineCap = 'round'; cx.lineJoin = 'round';
      if (st.url) { var im = new Image(); im.onload = function () { cx.drawImage(im, 0, 0, w, h); }; im.src = st.url; }
      var down = false, lx = 0, ly = 0;
      function pt(e) { var r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; }
      cv.addEventListener('pointerdown', function (e) { down = true; var p = pt(e); lx = p[0]; ly = p[1]; try { cv.setPointerCapture(e.pointerId); } catch (x) { } seg(lx, ly, lx + 0.1, ly); e.preventDefault(); });
      cv.addEventListener('pointermove', function (e) { if (!down) return; var p = pt(e); seg(lx, ly, p[0], p[1]); lx = p[0]; ly = p[1]; e.preventDefault(); });
      function up() { if (!down) return; down = false; try { st.url = cv.toDataURL(); } catch (x) { } }
      cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up); cv.addEventListener('pointerleave', up);
      function seg(a, b, c, d) {
        if (tool === 'eraser') { cx.globalCompositeOperation = 'destination-out'; cx.lineWidth = 22; } else { cx.globalCompositeOperation = 'source-over'; cx.strokeStyle = col; cx.lineWidth = 3.5; }
        cx.beginPath(); cx.moveTo(a, b); cx.lineTo(c, d); cx.stroke();
      }
      function press() { el.querySelector('[data-pen]').setAttribute('aria-pressed', tool === 'pen'); el.querySelector('[data-er]').setAttribute('aria-pressed', tool === 'eraser'); el.querySelectorAll('[data-c]').forEach(function (b) { b.setAttribute('aria-pressed', tool === 'pen' && COLS[Number(b.getAttribute('data-c'))] === col); }); }
      el.querySelector('[data-pen]').addEventListener('click', function () { tool = 'pen'; press(); });
      el.querySelector('[data-er]').addEventListener('click', function () { tool = 'eraser'; press(); });
      el.querySelectorAll('[data-c]').forEach(function (b) { b.addEventListener('click', function () { tool = 'pen'; col = COLS[Number(b.getAttribute('data-c'))]; press(); }); });
      el.querySelector('[data-clr]').addEventListener('click', function () { cx.globalCompositeOperation = 'source-over'; cx.clearRect(0, 0, w, h); st.url = ''; });
    }
    render();
  };
})();
