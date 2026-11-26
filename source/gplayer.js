/* gplayer.js: the animated lesson player for the Watch step.
   Looks like the MathsStudio lesson films: a 16:9 stage, a title card for each question, progress dashes,
   and pictures that animate in as the teacher speaks. Uses the same episode format as story.js:
   { title, goal, scenes: [ { h, sub, steps: [ { say, html } ] } ] }.
   BT.lessons(n, label, episodes) puts the episodes in a first step called "Watch" at the front of a topic. */
(function () {
  'use strict';
  var S = Studio, H = S.h, BT = window.BT;
  if (!BT || !BT.sv) return;
  var W = 800, HH = 450, NW = 520, NH = 470;
  /* the question a lesson answers (qtitles.js), shown in place of an older lesson's topic name */
  function D(t) { return (window.BT && BT.QT && BT.QT[t]) || t; }

  var css = document.createElement('style');
  css.textContent = [
    '.gp{display:flex;flex-direction:column;gap:10px;margin:6px auto 14px;max-width:1000px;width:100%}',
    '.gp-frame{position:relative;width:100%;aspect-ratio:16/9;border-radius:16px;overflow:hidden;background:#f4f4f4;box-shadow:0 6px 24px rgba(34,26,58,.16)}',
    '.gp-stage{position:absolute;left:0;top:0;width:' + W + 'px;height:' + HH + 'px;transform-origin:0 0;overflow:hidden;background:#f4f4f4;color:#221a3a;',
    '  font-family:"DejaVu Sans",Verdana,"Segoe UI",system-ui,sans-serif;font-weight:700;',
    '  --accent:#881cd6;--accent-fg:#fff;--good:#1e9e60;--bad:#e2620f;--fg:#221a3a;--muted:#6b6480;--surface:#ffffff;--surface-2:#efe4f8;--line:#ddd0ea;--hl:#ecdcf8;--font-display:"DejaVu Sans",Verdana,"Segoe UI",system-ui,sans-serif}',
    '.gp-bar{position:absolute;left:0;top:0;width:100%;height:11px;background:#d8aaf0}',
    '.gp-bar:before{content:"";position:absolute;left:0;top:0;width:13px;height:11px;background:#881cd6}',
    '.gp-lab{position:absolute;left:22px;top:20px;right:22px;font-size:23px;font-weight:800;display:flex;align-items:center;gap:9px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '.gp-lab:before{content:"";flex:none;width:10px;height:10px;border-radius:2px;background:#881cd6}',
    '.gp-dash{position:absolute;left:0;right:0;bottom:15px;display:flex;justify-content:center;gap:4px}',
    '.gp-dash i{display:block;width:32px;height:3px;border-radius:2px;background:#e3cdf3}.gp-dash i.on{background:#881cd6}',
    '.gp-body{position:absolute;left:24px;right:24px;top:58px;bottom:44px;display:flex;align-items:center;justify-content:center}',
    '.gp-fit{width:100%;display:flex;flex-direction:column;align-items:center;gap:16px;transform-origin:50% 50%}',
    '.gp-h{font-size:28px;text-align:center;margin:0;line-height:1.25;text-wrap:balance}',
    '.gp-sub{font-size:18px;color:#6b6480;text-align:center;margin:-4px 0 2px}',
    '.gp-title{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;text-align:center;padding:0 50px}',
    '.gp-title .t1{font-size:19px;color:#6b6480}.gp-title .t2{font-size:28px;line-height:1.25;text-wrap:balance}.gp-title .t3{font-size:44px;color:#881cd6;line-height:1.1}',
    '.gp-title .gp-brand{position:absolute;left:22px;top:24px;font-size:19px;gap:8px}.gp-title .gp-ico{width:32px;height:32px}.gp-title .t2{white-space:nowrap;max-width:100%;overflow:hidden}',
    '.gp-ico{width:60px;height:60px;flex:none}.gp-brand{display:flex;align-items:center;gap:12px;font-family:var(--font-display,"Fredoka",sans-serif);font-weight:700;font-size:34px;color:#14213d}.gp-brand b{color:#2b5fd9;font-weight:700}',
    /* blocks build in */
    '.gp-stage [data-sb]{width:100%;display:flex;flex-direction:column;align-items:center;gap:8px;opacity:0;transform:translateY(14px);transition:opacity .5s ease,transform .5s ease}',
    '.gp-stage [data-sb].on{opacity:1;transform:none}',
    '.gp-swap{display:grid;width:100%;justify-items:center}.gp-swap>[data-sb]{grid-area:1/1}',
    '.gp-stage [data-sb].on .sv-card,.gp-stage [data-sb].on .sv-chip,.gp-stage [data-sb].on .lk-tag{animation:gppop .45s cubic-bezier(.3,1.5,.6,1) both}',
    '.gp-stage [data-sb].on svg rect,.gp-stage [data-sb].on svg polygon{animation:gpgrow .6s ease both;transform-box:fill-box;transform-origin:left center}',
    '.gp-stage [data-sb].on svg circle{animation:gppop .5s cubic-bezier(.3,1.5,.6,1) both;transform-box:fill-box;transform-origin:center}',
    '.gp-stage [data-sb].on .sv-list>div{animation:gpin .45s ease both}',
    '@keyframes gppop{from{opacity:0;transform:scale(.6)}to{opacity:1;transform:none}}',
    '@keyframes gpgrow{from{opacity:0;transform:scaleX(.2)}to{opacity:1;transform:none}}',
    '@keyframes gpin{from{opacity:0;transform:translateX(-16px)}to{opacity:1;transform:none}}',
    /* fixed sizes for the picture helpers inside the stage */
    '.gp-stage .sv-row{display:flex;flex-wrap:wrap;gap:8px 12px;justify-content:center;align-items:center;width:100%}',
    '.gp-stage svg text{paint-order:stroke fill;stroke:#f4f4f4;stroke-width:5px;stroke-linejoin:round}',
    '.gp-stage .sv-card{border:4px solid;border-radius:14px;min-width:58px;padding:2px 10px;text-align:center;font-weight:700;font-size:32px;line-height:1.25;background:#fff}',
    '.gp-stage .sv-card.sm{font-size:22px;min-width:0;padding:3px 10px;border-width:3px}',
    '.gp-stage .b{color:var(--accent);border-color:var(--accent)}.gp-stage .g{color:var(--good);border-color:var(--good)}.gp-stage .r{color:var(--bad);border-color:var(--bad)}.gp-stage .y{color:#2a7fb0;border-color:#2a7fb0}',
    '.gp-stage .sv-big{font-weight:700;font-size:50px;line-height:1.05;text-align:center}',
    '.gp-stage .sv-eq{font-weight:700;font-size:32px;text-align:center;line-height:1.3;text-wrap:balance}',
    /* stacked fractions are taller than a text line: give every line that holds one its own room above and below, so it never touches the line next to it */
    '.gp-stage .fr{margin:.32em .12em}',
    '.gp-stage .sv-eq:has(.fr),.gp-stage .sv-note:has(.fr),.gp-stage .gp-sub:has(.fr){padding:.2em 0;line-height:1.5}',
    '.gp-stage [data-sb]:has(.fr){padding:.25em 0}',
    '.gp-stage .sv-eq+.sv-eq,.gp-stage .sv-note+.sv-eq,.gp-stage .sv-eq+.sv-note{margin-top:6px}',
    '.gp-stage .sv-eq.g{color:var(--good)}.gp-stage .sv-eq.r{color:var(--bad)}.gp-stage .sv-eq.b{color:var(--accent)}',
    '.gp-stage .sv-rule{background:var(--hl);color:#221a3a;border:0;border-radius:10px;padding:10px 20px;font-size:19px;text-align:center;max-width:680px}',
    '.gp-stage .sv-note{color:#6b6480;font-size:17px;text-align:center}',
    '.gp-stage .sv-cols{display:grid;grid-template-columns:repeat(var(--n,4),minmax(0,1fr));gap:10px;width:100%;max-width:640px}',
    '.gp-stage .sv-cols>div{display:flex;flex-direction:column;align-items:center;gap:6px;min-width:0;text-align:center}',
    '.gp-stage .sv-chip{width:100%;text-align:center;border-radius:8px;padding:4px 3px;font-weight:700;color:#fff;font-size:16px}',
    '.gp-stage .sv-chip.b{background:var(--accent)}.gp-stage .sv-chip.g{background:var(--good)}.gp-stage .sv-chip.r{background:var(--bad)}.gp-stage .sv-chip.y{background:#2a7fb0}',
    '.gp-stage .sv-stick{display:inline-block;width:11px;height:50px;border-radius:6px;border:2px solid var(--fg)}',
    '.gp-stage .sv-list{display:flex;flex-direction:column;gap:9px;width:100%;max-width:640px}',
    '.gp-stage .sv-list div{display:flex;gap:12px;align-items:center;font-size:24px}',
    '.gp-stage .sv-work{gap:6px}.gp-stage .sv-work div{font-size:19px;line-height:1.25;text-align:left;align-items:flex-start}.gp-stage .sv-work i{font-style:normal;font-weight:800;flex:0 0 26px;width:26px;height:26px;border-radius:50%;background:#2b5fd9;color:#fff;overflow:visible;font-size:15px;display:inline-flex;align-items:center;justify-content:center}',
    '.gp-stage .sv-list b{flex:0 0 12px;height:12px;border-radius:50%;background:var(--accent);color:transparent;overflow:hidden;font-size:0}',
    '.gp-stage .tbl{border-collapse:collapse;font-size:19px;background:#fff;width:auto;margin:0 auto}.gp-stage .tbl th{background:#881cd6;color:#fff;padding:5px 12px}.gp-stage .tbl td{padding:5px 12px;border:1px solid #e3cdf3;text-align:center}',
    '.gp-stage .lk-col{grid-template-columns:repeat(var(--n),46px);font-size:34px;font-family:inherit}',
    '.gp-stage .lk-col .hd{font-size:14px}.gp-stage .lk-col .cy{font-size:16px}',
    '.gp-stage .lk-tag{font-size:14px;border-radius:8px}.gp-stage .lk-step{font-size:21px}',
    '.gp-stage .gp-fit svg{zoom:1.45;max-width:100%;height:auto}',
    '.gp-stage svg text{font-family:inherit}',
    /* controls */
    '.gp-list{margin:4px auto 12px;max-width:1000px;width:100%;background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:10px 12px}',
    '.gp-list-h{font-weight:800;font-size:14px;color:var(--muted);margin:0 0 6px 4px;cursor:pointer;min-height:32px;display:flex;align-items:center;gap:6px}',
    '.gp-list:not([open]) .gp-list-h{margin:0}',
    '.gp-list-h{list-style:none}.gp-list-h::-webkit-details-marker{display:none}.gp-list-h::after{content:"▾";margin-left:auto;font-size:16px;color:#881cd6}.gp-list[open] .gp-list-h::after{content:"▴"}',
    '.gp-list ul{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:4px 10px}',
    '.gp-q{display:flex;align-items:flex-start;gap:8px;width:100%;min-height:44px;text-align:left;border:0;border-radius:10px;background:transparent;color:var(--fg);font:inherit;font-weight:700;font-size:15px;line-height:1.3;padding:8px 10px;cursor:pointer}',
    '.gp-q:hover{background:var(--surface-2)}',
    '.gp-q.on{background:#ecdcf8;color:#5a1291}',
    '.gp-q:focus-visible{outline:3px solid #881cd6;outline-offset:1px}',
    '.gp-dot{flex:none;width:18px;height:18px;margin-top:1px;border-radius:50%;border:2px solid #b98be6;color:#881cd6;font-size:9px;display:flex;align-items:center;justify-content:center}',
    '.gp-q.on .gp-dot{border-color:#881cd6}',
    '.gp-q.seen .gp-dot{background:var(--good,#1f9d55);border-color:var(--good,#1f9d55);color:#fff;font-size:11px;font-weight:900}',
    '.gp-cap{display:none}',
    '.gp-ctl{display:flex;align-items:center;gap:8px;flex-wrap:wrap}',
    '.gp-ctl .btn{min-height:44px}.gp-ic,.gp-sh{display:none}',
    '@media (max-width:600px){.gp-ctl{display:grid;grid-template-columns:2fr 1fr 1fr 1fr 1fr;gap:6px}.gp-ctl .btn{min-height:42px;padding:6px 4px;font-size:16px}.gp-ctl [data-p] .gp-tx{display:none}.gp-ctl [data-p] .gp-ic,.gp-ctl [data-p] .gp-sh{display:inline}.gp-ctl .btn:not([data-p]) .gp-tx{display:none}.gp-ctl .btn:not([data-p]) .gp-ic{display:inline}.gp-ctl [data-p]{white-space:nowrap;display:inline-flex;align-items:center;justify-content:center;gap:6px}.gp-ctl [data-p] .gp-ic{font-size:13px}.gp-prog{grid-column:1/-1;flex:none}.gp-cnt{grid-column:1/-1}.gp [data-note]{font-size:12px}.gp-cap{font-size:17px;min-height:40px}}',
    '.gp-prog{flex:1 1 140px;min-width:0;height:8px;background:var(--line);border-radius:99px;overflow:hidden}.gp-prog i{display:block;height:100%;width:0;background:#881cd6;transition:width .3s}',
    '.gp-stage .tbl th,.gp-stage .tbl td{font-size:inherit;line-height:1.3;padding:6px 14px;overflow-wrap:normal;hyphens:none}.gp-stage .tbl{max-width:none}.gp-stage .sv-row>svg{flex:1 1 0;min-width:0}.gp.narrow .sv-cols .sv-eq{font-size:24px!important}',
    '.gp.narrow .gp-frame{aspect-ratio:520/470}.gp.narrow .gp-body{top:64px;bottom:44px;left:20px;right:20px}',
    '@media (max-width:600px){.card:has(.gp){padding-left:10px;padding-right:10px}.live:has(.gp){padding-left:0;padding-right:0}}',
    '.gp.full .gp-frame{position:fixed;inset:0;z-index:9999;border-radius:0;aspect-ratio:auto;background:#111}',
    '.gp.full .gp-close,.gp.full .gp-fpp{display:flex}.gp-fpp{display:none;position:absolute;right:calc(max(12px,env(safe-area-inset-right)) + 56px);top:max(12px,env(safe-area-inset-top));z-index:2;height:44px;min-width:44px;padding:0 16px;gap:8px;border-radius:22px;border:0;background:#fff;color:#221a3a;font:700 16px system-ui,sans-serif;align-items:center;justify-content:center;box-shadow:0 2px 10px rgba(0,0,0,.3);cursor:pointer}.gp-close{display:none;position:absolute;right:max(12px,env(safe-area-inset-right));top:max(12px,env(safe-area-inset-top));z-index:2;width:44px;height:44px;border-radius:50%;border:0;background:#fff;color:#221a3a;font-size:22px;align-items:center;justify-content:center;box-shadow:0 2px 10px rgba(0,0,0,.3)}',
    '.gp-vs{display:flex;flex-wrap:wrap;gap:8px 16px;align-items:center}.gp-vs label{display:flex;gap:6px;align-items:center;font-weight:700;font-size:15px}.gp-vs select{min-height:40px;max-width:min(260px,60vw);font:inherit;font-weight:600;border:2px solid var(--line);border-radius:10px;padding:4px 8px;background:var(--surface);color:var(--fg)}',
    '.gp-body.gp-turn{animation:gpTurn .7s ease both}@keyframes gpTurn{0%{opacity:0;transform:translateX(40px) rotate(1deg)}100%{opacity:1;transform:none}}',
    '.gp-cap .now{background:#fff2a8;border-radius:6px;box-shadow:0 0 0 3px #fff2a8}.gp-cap .think{display:inline-flex;gap:6px;align-items:center;font-weight:800;color:#881cd6}',
    '.fl-cloud{position:absolute;z-index:4;box-sizing:border-box;background:#fff;color:#221a3a;border:4px solid #221a3a;border-radius:26px;padding:16px 26px;font-family:"Comic Sans MS","Comic Neue","Chalkboard SE",system-ui,sans-serif;font-weight:800;font-size:26px;line-height:1.25;text-align:left;box-shadow:4px 6px 0 rgba(0,0,0,.22);pointer-events:none;visibility:hidden}' +
    '.fl-cloud::after{content:"";position:absolute;left:var(--tx,26px);bottom:-26px;width:0;height:0;border-left:14px solid transparent;border-right:14px solid transparent;border-top:28px solid #221a3a;transform:skewX(-25deg)}' +
    '.fl-cloud::before{content:"";position:absolute;left:calc(var(--tx,26px) + 4px);bottom:-17px;width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-top:20px solid #fff;transform:skewX(-25deg);z-index:1}' +
    '.fl-cloud.side::after{left:-28px;top:var(--ty,calc(50% - 14px));bottom:auto;border:14px solid transparent;border-right:28px solid #221a3a;border-left:0;transform:none}.fl-cloud.side::before{left:-18px;top:calc(var(--ty,calc(50% - 14px)) + 4px);bottom:auto;border:10px solid transparent;border-right:20px solid #fff;border-left:0;transform:none}' +
    '.fl-cloud.on{visibility:visible;animation:flFact .45s cubic-bezier(.3,1.6,.6,1) both;transform-origin:10% 100%}' +
    '.gp.narrow .fl-cloud{font-size:14px;border-width:2px;padding:7px 11px;border-radius:14px}.gp.narrow .fl-cloud::after{bottom:-15px;border-left-width:8px;border-right-width:8px;border-top-width:16px}.gp.narrow .fl-cloud::before{bottom:-11px;left:calc(var(--tx,26px) + 3px);border-left-width:6px;border-right-width:6px;border-top-width:12px}' +
    '.gp.narrow .fl-cloud.side::after{left:-16px;border-width:8px;border-right-width:16px;border-left-width:0}.gp.narrow .fl-cloud.side::before{left:-12px;border-width:6px;border-right-width:12px;border-left-width:0}' +
    '.gp-stage,.gp-stage *{-webkit-user-select:none;user-select:none;caret-color:transparent;cursor:default}.gp-stage button,.gp-stage .o{cursor:pointer}' +
    '.gp-end{position:absolute;top:14px;right:14px;z-index:6;font-family:var(--font-display),Nunito,Segoe UI,system-ui,sans-serif;font-weight:800;letter-spacing:.2px;font-size:20px;background:#2b5fd9;color:#fff;border:0;border-radius:14px;padding:10px 20px;cursor:pointer;box-shadow:0 6px 16px rgba(0,0,0,.25)}.gp.narrow .gp-end{top:6px;right:6px;font-size:13px;padding:6px 10px;border-radius:10px}' +
    '.fl-facts{position:absolute;left:12px;right:12px;top:10px;display:flex;flex-direction:column;align-items:center;gap:8px;pointer-events:none;z-index:3}'+
    '.fl-fact{background:#fff;color:#221a3a;border:4px solid #ffb703;border-radius:999px;padding:5px 22px;font-weight:900;font-size:26px;line-height:1.2;text-align:center;max-width:100%;box-shadow:0 8px 22px rgba(0,0,0,.25);visibility:hidden}'+
    '.fl-fact.on{visibility:visible;animation:flFact .5s cubic-bezier(.3,1.6,.6,1) both}@keyframes flFact{0%{opacity:0;transform:scale(.3)}100%{opacity:1;transform:none}}.flx-pic.flx-ask~.fl-facts{display:none}'+
    '.gp.narrow .fl-facts{top:6px;gap:4px}.gp.narrow .fl-fact{font-size:16px;border-width:2px;padding:2px 10px;box-shadow:0 4px 10px rgba(0,0,0,.25)}' +
    '.flx{position:absolute;inset:0;background:#1b1b4b}.flx-pic{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}',
    '.flx-pic.flx-in{animation:gpTurn .7s ease both}.flx-pic>.flb,.flx-pic .flb-w{width:100%;height:100%;max-width:none;display:flex;align-items:center;justify-content:center;margin:0}',
    '.flx-capwrap{display:flex;flex-direction:column;width:100%;height:100%}.flx-capwrap>.flp{flex:1 1 0;min-height:0;height:auto!important}.flx-pic .flb-stage{width:100%;height:100%;display:flex;align-items:center;justify-content:center;border:0;border-radius:0;background:none}.flx-pic .flb-stage>svg{width:100%!important;height:100%!important;max-width:none!important;display:block}',
    '.flx-pic .flp-pic{min-width:0;flex:1 1 0;max-height:100%;overflow:hidden}.flx-pic .flp-pic svg{max-width:100%!important}.gp.narrow .gp-stage .flx-pic .flp-ch svg{width:150px!important}.flx-pic .flp{width:100%;height:100%;box-sizing:border-box;flex-wrap:nowrap;font-size:24px;border-radius:0;border:0;margin:0}.gp-stage .flx-pic .flp-ch svg{width:210px!important}.flx-pic .flp-pic{height:100%;align-content:center}.flx-pic .flp-pic svg{max-height:100%}.gp-stage .flx-pic .flp-pic{flex-wrap:nowrap}.gp-stage .flx-pic .flp-pic>span[style*="font-size:3rem"]{font-size:7.5rem!important;line-height:1}.gp.narrow .flx-pic .flp-pic>span[style*="font-size:3rem"]{font-size:4.5rem!important}.gp-stage .flx-pic .flp-pic>svg{min-width:0!important;flex:1 1 0!important}',
    '.flx-pic.flx-ask{bottom:104px}.gp.narrow .flx-pic.flx-ask{bottom:96px}',
    '.flx-pic.flx-plain{overflow:hidden;align-items:center;inset:28px 40px;background:#fff8e6;color:#221a3a;border:4px solid #221a3a;border-radius:24px;padding:24px 34px;box-sizing:border-box}.flx-plain .sv-list{font-size:26px;gap:16px;max-width:none}.flx-plain .sv-list div{font-size:26px}',
    '.flx-top{position:absolute;left:0;right:0;top:8px;display:flex;justify-content:center;pointer-events:none}.flx-q{max-width:86%;background:rgba(255,255,255,.96);border:3px solid #221a3a;border-radius:18px;padding:8px 18px;font-weight:800;font-size:24px;line-height:1.3;text-align:center;box-shadow:0 6px 18px rgba(0,0,0,.2);animation:flxDrop .55s cubic-bezier(.3,1.5,.6,1) both}',
    '.flx-qcard{background:#fff;color:#2b2340;border:4px solid #2b2340;border-radius:20px;padding:12px 26px;font-weight:800;font-size:24px;line-height:1.25;text-align:center;max-width:92%;box-shadow:0 6px 18px rgba(0,0,0,.15)}.gp.narrow .flx-qcard{font-size:18px;padding:8px 14px;border-width:3px}',
    '.flx-tip{font-size:18px;font-weight:700;color:#7a5600;margin-top:4px}',
    '.flx-opts{position:absolute;left:0;right:0;bottom:12px;display:flex;justify-content:center}.flx-opts .flb-opts{margin:0;gap:14px;width:auto}.flx-opts .flb-show .o{min-width:96px;max-width:none;flex:0 0 auto;min-height:72px;font-size:34px;padding:4px 18px;box-shadow:0 6px 16px rgba(0,0,0,.22);animation:flxPop .5s cubic-bezier(.3,1.6,.6,1) both}',
    '.flx-opts .flb-show .o:nth-child(2){animation-delay:.12s}.flx-opts .flb-show .o:nth-child(3){animation-delay:.24s}.flx-opts .flb-show .o:nth-child(4){animation-delay:.36s}',
    '.flx-opts.flx-long .flb-opts{flex-wrap:wrap;max-width:94%;margin:0 auto;justify-content:center}.flx-opts.flx-long .flb-show .o{font-size:24px;min-height:58px;min-width:0;padding:4px 14px;white-space:nowrap}',
    '.flx-opts.flx-xl .flb-show .o{font-size:20px;white-space:normal;max-width:30%;line-height:1.15}',
    '.flx-opts .flb-show .o.tap{cursor:pointer}.flx-opts .flb-show .o.tap:hover{transform:scale(1.08)}.flx-opts .flb-show .o.no{background:#ffd0d0;animation:flxNo .5s ease both;opacity:.8}@keyframes flxNo{0%,100%{transform:translateX(0)}25%{transform:translateX(-8px)}75%{transform:translateX(8px)}}',
    '.flx-opts .flb-show .o.ok{animation:flxWin .9s ease both;box-shadow:0 0 0 6px #ffe14d,0 0 26px 8px rgba(255,225,77,.9)}',
    '.flx-think{position:absolute;right:10px;top:6px;font-size:46px;opacity:0;transform:scale(.4);transition:opacity .3s,transform .3s}.flx-think.on{opacity:1;transform:scale(1);animation:flxThink 1.2s ease-in-out infinite}',
    '@keyframes flxDrop{0%{opacity:0;transform:translateY(-30px)}100%{opacity:1;transform:none}}@keyframes flxPop{0%{opacity:0;transform:scale(.3)}100%{opacity:1;transform:none}}',
    '@keyframes flxWin{0%{transform:scale(1)}30%{transform:scale(1.35) rotate(-4deg)}60%{transform:scale(1.15) rotate(3deg)}100%{transform:scale(1.2)}}@keyframes flxThink{0%,100%{transform:translateY(0) rotate(-6deg)}50%{transform:translateY(-8px) rotate(6deg)}}',
    '.gp-fl.narrow .gp-frame{aspect-ratio:520/325}.gp-fl .gp-cap{display:none}.gp-fl .gp-snd{display:flex;gap:10px;align-items:center;background:#fff4d6;border:2px solid #e0a800;border-radius:14px;padding:10px 14px;font-weight:800;font-size:16px;color:#221a3a}.gp.narrow .flx{left:8px;right:8px}.gp.narrow .flx-q{font-size:24px}',
    '.gp-cnt{font-size:13px;color:var(--muted);font-variant-numeric:tabular-nums}',
    '@media(prefers-reduced-motion:reduce){.gp-stage *{animation:none!important;transition:none!important}.gp-stage [data-sb]{opacity:1;transform:none}}'
  ].join('\n');
  document.head.appendChild(css);

  var current = null, oldStop = H.storyStop;
  H.storyStop = function () { if (oldStop) oldStop(); if (current) current.stop(); };

  /* the MathsStudio logo, as in the site header, on each lesson's title slide */
  var ICON = '<div class="gp-brand" aria-label="MathsStudio"><svg class="gp-ico" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="16" fill="#2b5fd9"/><path d="M16 47V21L32 39L48 21V47" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="32" cy="15" r="4.5" fill="#ffd166"/></svg><span>Maths<b>Studio</b></span></div>';

  /* draw-on animation for lines and arcs when a block appears */
  function drawIn(block) {
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    block.querySelectorAll('svg path, svg line, svg polyline').forEach(function (p, i) {
      var len = 0; try { len = p.getTotalLength(); } catch (e) { return; }
      if (!len || len > 3000) return;
      p.style.strokeDasharray = len; p.style.strokeDashoffset = len;
      p.getBoundingClientRect();
      p.style.transition = 'stroke-dashoffset .9s ease ' + Math.min(i * 0.04, 0.6) + 's';
      p.style.strokeDashoffset = 0;
    });
  }

  H.gifPlayer = function (host, ep, meta) {
    meta = meta || { q: 0, of: 1 };
    /* a First level story with a film script plays as a cartoon (fl_film.js) */
    if (ep.film && H.flFilm) { var fs = H.flFilm(host, ep, meta); if (fs) { current = { stop: fs }; return; } }
    var TT = D(ep.title), FLM = !!ep.fl, slides = [{ title: true, steps: [{ say: FLM ? (ep.intro || ('Today we are going to learn: ' + TT)) : TT + ' In this lesson, we will learn ' + (ep.goal || '') }] }];
    ep.scenes.forEach(function (sc) { slides.push(sc); });
    var chunks = [];
    slides.forEach(function (sl, si) { sl.steps.forEach(function (st, k) { chunks.push({ si: si, k: k, say: st.say, think: !!st.think, answer: st.answer, facts: st.facts, last: k === sl.steps.length - 1, turnQ: sl.h === 'Your turn' && k === 0 && (sl.steps.length > 1 || !!sl.asks) }); }); });
    var dashes = ''; for (var d = 0; d < meta.of; d++) dashes += '<i class="' + (d <= meta.q ? 'on' : '') + '"></i>';
    var short = TT;   /* the lesson's question, with its question mark, stays in the purple label at the top */
    function same(a, b) { var n = function (x) { return String(x || '').replace(/<[^>]+>/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim(); }; return n(a) === n(b); }
    /* a lesson counts as watched once its last step has been shown; the tick is saved with the child's progress */
    function seen(j) { return meta.n && H.isDone ? H.isDone(meta.n, 'w' + j) : false; }
    function markSeen() {
      if (!meta.n || !H.markDone || seen(meta.q)) return;
      H.markDone(meta.n, 'w' + meta.q);
      var b = host.querySelector('.gp-q[data-q="' + meta.q + '"]'); if (b) { b.classList.add('seen'); var d = b.querySelector('.gp-dot'); if (d) d.textContent = '✓'; }
    }

    var list = (meta.titles && meta.titles.length > 1) ? '<details class="gp-list"' + (window.innerWidth > 700 ? ' open' : '') + '><summary class="gp-list-h">Questions in this Watch lesson</summary><ul>' +
      meta.titles.map(function (tt, j) { return '<li><button type="button" class="gp-q' + (j === meta.q ? ' on' : '') + (seen(j) ? ' seen' : '') + '" data-q="' + j + '"' + (j === meta.q ? ' aria-current="true"' : '') + '><span class="gp-dot" aria-hidden="true">' + (seen(j) ? '✓' : j === meta.q ? '▶' : '') + '</span>' + (seen(j) ? '<span class="sr-only">Watched: </span>' : '') + tt + '</button></li>'; }).join('') + '</ul></details>' : '';
    host.innerHTML = list + '<div class="gp"><div class="gp-frame"><div class="gp-stage"></div><button class="gp-fpp" type="button" aria-label="Pause"></button><button class="gp-close" type="button" aria-label="Close full screen">✕</button></div>' +
      '<div class="gp-cap" aria-live="polite"></div>' +
      '<div class="gp-ctl"><button class="btn" type="button" data-p></button>' +
      '<button class="btn ghost" type="button" data-b aria-label="Back one step"><span class="gp-ic" aria-hidden="true">◀</span><span class="gp-tx">◀ Back</span></button>' +
      '<button class="btn ghost" type="button" data-n aria-label="Next step"><span class="gp-ic" aria-hidden="true">▶</span><span class="gp-tx">Next ▶</span></button>' +
      '<button class="btn ghost" type="button" data-r aria-label="Start again"><span class="gp-ic" aria-hidden="true">↺</span><span class="gp-tx">Start again</span></button>' +
      '<button class="btn ghost" type="button" data-nl aria-label="Next lesson"><span class="gp-ic" aria-hidden="true">⏭</span><span class="gp-tx">Next lesson ⏭</span></button>' +
      '<button class="btn ghost" type="button" data-f aria-label="Full screen"><span class="gp-ic" aria-hidden="true">⛶</span><span class="gp-tx">Full screen</span></button>' +
      '<div class="gp-prog" aria-hidden="true"><i></i></div><span class="gp-cnt"></span></div>' +
      ('<div class="gp-vs"><label>Voice <select data-vv></select></label><label>Reading speed <select data-vr><option value="0.8">Slower</option><option value="1">Normal</option><option value="1.2">Faster</option></select></label></div>') +
      '<p class="note" style="margin:0" data-note></p></div>';
    var root = host.querySelector('.gp'), frame0 = FLM && root.classList.add('gp-fl'), frame = root.querySelector('.gp-frame'), stage = root.querySelector('.gp-stage'), cap = root.querySelector('.gp-cap');
    var pb = root.querySelector('[data-p]'), bar = root.querySelector('.gp-prog i'), cnt = root.querySelector('.gp-cnt'), note = root.querySelector('[data-note]');
    var idx = 0, playing = false, token = 0, timer = null, shown = -1;
    function setPb(t) { var fp = root.querySelector('.gp-fpp'); if (fp) { var on = t === 'Pause'; fp.setAttribute('aria-label', on ? 'Pause' : 'Play'); fp.innerHTML = '<span aria-hidden="true">' + (on ? '❚❚' : '▶') + '</span> ' + (on ? 'Pause' : 'Play'); } pb.setAttribute('aria-label', t); pb.innerHTML = '<span class="gp-ic" aria-hidden="true">' + (t === 'Pause' ? '❚❚' : '▶') + '</span><span class="gp-tx">' + t + '</span><span class="gp-sh">' + (t === 'Pause' ? ' Pause' : ' Play') + '</span>'; }
    setPb('Play the lesson');
    root.querySelector('.gp-fpp').addEventListener('click', function () { pb.click(); });
    var okVoice = H.voiceOk && H.voiceOk();
    note.textContent = okVoice ? (FLM ? '🔊 Turn the sound on: this story is read aloud. Choose a voice and a speed that suit your child.' : 'Your device reads this aloud. Choose the voice and reading speed above.') : 'The voice is not available here, so the lesson plays with words only.';
    /* First level stories are listened to, not read: without a voice, say so clearly */
    if (FLM && !okVoice) { note.className = 'gp-snd'; note.innerHTML = '🔇 This story needs to be heard. This browser cannot read aloud, so please open MathsStudio in Chrome, Safari or Edge and turn the sound on.'; }
    {
      var vv = root.querySelector('[data-vv]'), vr = root.querySelector('[data-vr]');
      /* the same choices as Settings (used in P5 to S3): Automatic (British English), then every English voice */
      var fillV = function () { var src = document.getElementById('setVoice'); if (src) { vv.innerHTML = src.innerHTML; vv.value = src.value; } };
      fillV(); setTimeout(fillV, 900); try { speechSynthesis.addEventListener('voiceschanged', fillV); } catch (e) { /* ignore */ }
      var r0 = H.rateCur ? H.rateCur() : 1; vr.value = r0 <= 0.85 ? '0.8' : r0 >= 1.15 ? '1.2' : '1';
      var again = function () { if (playing) { stop(); playing = true; setPb('Pause'); current = { stop: stop }; say(idx); } };
      vv.addEventListener('change', function () { if (H.setVoice) H.setVoice(vv.value); var src = document.getElementById('setVoice'); if (src) src.value = vv.value; again(); });
      vr.addEventListener('change', function () { if (H.setRate) H.setRate(Number(vr.value)); var src = document.getElementById('setRate'); if (src) src.value = vr.value; again(); });
    }

    document.addEventListener('fracsrendered', function () { try { if (stage.__refit) stage.__refit(); } catch (e) { /* ignore */ } });
    var narrow = null, lastI = 0;
    function fit() {
      var full = root.classList.contains('full');
      /* phones: a narrower, taller slide, so the words are bigger instead of the whole picture shrinking */
      var nw = !full && host.clientWidth < 560;
      if (nw !== narrow) {
        narrow = nw; root.classList.toggle('narrow', nw);
        stage.style.width = (nw ? NW : W) + 'px'; stage.style.height = (nw ? (FLM ? 325 : NH) : HH) + 'px';
        if (shown >= 0) { shown = -1; show(lastI); }
      }
      var w = nw ? NW : W, hh = nw ? (FLM ? 325 : NH) : HH, fw = frame.clientWidth, fh = frame.clientHeight;
      var s = full ? Math.min(fw / w, fh / hh) : fw / w;
      stage.style.transform = 'translate(' + (full ? (fw - w * s) / 2 : 0) + 'px,' + (full ? (fh - hh * s) / 2 : 0) + 'px) scale(' + s + ')';
    }
    function setFull(on) {
      root.classList.toggle('full', on);
      try {
        if (on && frame.requestFullscreen) frame.requestFullscreen().then(function () { if (screen.orientation && screen.orientation.lock) screen.orientation.lock('landscape').catch(function () {}); }).catch(function () {});
        if (!on && document.fullscreenElement) document.exitFullscreen().catch(function () {});
      } catch (e) { /* not supported: the fixed overlay still works */ }
      setTimeout(fit, 60); setTimeout(fit, 400);
    }
    root.querySelector('[data-f]').addEventListener('click', function () { setFull(true); });
    root.querySelector('.gp-close').addEventListener('click', function () { setFull(false); });
    document.addEventListener('fullscreenchange', function () { if (!document.fullscreenElement && root.classList.contains('full')) { root.classList.remove('full'); setTimeout(fit, 60); } });
    window.addEventListener('resize', fit);
    if (window.ResizeObserver) new ResizeObserver(fit).observe(frame); fit();

    function chrome(inner, isTitle) {
      return '<div class="gp-bar"></div>' + (isTitle ? '' : '<div class="gp-lab">' + (/^Let’s recap/.test(inner.h || '') ? 'Remember!' : short) + '</div>') +
        '<div class="gp-dash">' + dashes + '</div>';
    }
    function build(si) {
      var sl = slides[si], h;
      if (sl.title) {
        h = chrome({}, true) + '<div class="gp-title">' + ICON + '<div class="t2">' + TT + '</div></div>';
        stage.innerHTML = h;
        /* every title card uses the same size and wraps when it is long; it only shrinks if it would not fit the slide at all */
        var gt = stage.querySelector('.gp-title'), t2 = stage.querySelector('.t2'), fz = 28;
        t2.style.whiteSpace = 'normal'; t2.style.fontSize = fz + 'px'; t2.style.maxWidth = '90%'; t2.style.textAlign = 'center';
        function tall() { var h = 16 * (gt.children.length - 1); [].forEach.call(gt.children, function (c) { h += c.offsetHeight; }); return h > stage.offsetHeight - 100; }
        while (fz > 22 && tall()) { fz -= 2; t2.style.fontSize = fz + 'px'; }
        return;
      }
      if (FLM) { stage.innerHTML = '<div class="flx gp-turn"><div class="flx-pic"></div><div class="flx-top"></div><div class="flx-opts"></div><div class="flx-think" aria-hidden="true">🤔</div></div>'; flPic = ''; flTop = ''; flOpt = ''; return; }
      /* a heading that only repeats the question in the label is left out: the slide starts from its own heading */
      var rep = same(sl.h, TT), hh = rep ? (sl.sub || '') : sl.h, sb = rep ? '' : sl.sub;
      h = chrome(sl) + '<div class="gp-body"><div class="gp-fit">' + (hh ? '<h3 class="gp-h">' + hh + '</h3>' : '') + (sb ? '<p class="gp-sub">' + sb + '</p>' : '');
      /* a step whose html starts with <!--swap--> replaces the block before it, in the same place */
      var groups = [];
      sl.steps.forEach(function (st, k) {
        if (!st.html) return;
        var blk = '<div data-sb="' + k + '">' + st.html + '</div>';
        if (st.html.indexOf('<!--swap-->') === 0 && groups.length) groups[groups.length - 1].push(blk); else groups.push([blk]);
      });
      groups.forEach(function (g) { h += g.length > 1 ? '<div class="gp-swap">' + g.join('') + '</div>' : g[0]; });
      stage.innerHTML = h + '</div></div>';
      /* shrink to fit if the finished slide is taller than the stage */
      /* sizes written against the screen width (vw) would shrink twice inside the scaled slide: use their full size */
      stage.querySelectorAll('[style*="vw"]').forEach(function (e) { var m = /clamp\([^,]+,[^,]+,\s*([\d.]+px)\)/.exec(e.getAttribute('style')); if (m) e.style.fontSize = m[1]; });
      var body = stage.querySelector('.gp-body'), f = stage.querySelector('.gp-fit');
      /* keep each line of working on one line: shrink that line a little if it is too wide, wrap only if it would get too small */
      stage.querySelectorAll('.gp-stage .tbl').forEach(function (e) {
        var aw = body.clientWidth, w2 = e.offsetWidth;
        if (w2 > aw) { e.style.fontSize = (parseFloat(getComputedStyle(e).fontSize) * Math.max(0.5, aw / w2 * 0.95)).toFixed(1) + 'px'; [].forEach.call(e.querySelectorAll('th,td'), function (c) { c.style.paddingLeft = c.style.paddingRight = '6px'; }); }
      });
      stage.querySelectorAll('.sv-eq, .gp-lab').forEach(function (e) {
        var lab = e.classList.contains('gp-lab'); if (!lab) e.style.whiteSpace = 'nowrap';
        var aw = lab ? e.clientWidth : body.clientWidth, nw2 = e.scrollWidth;
        if (nw2 > aw) { var r = aw / nw2 * 0.97; if (r >= 0.6) e.style.fontSize = (parseFloat(getComputedStyle(e).fontSize) * r).toFixed(1) + 'px'; else if (lab) { e.style.fontSize = (parseFloat(getComputedStyle(e).fontSize) * 0.8).toFixed(1) + 'px'; e.style.whiteSpace = 'normal'; e.style.lineHeight = '1.2'; e.style.alignItems = 'flex-start'; body.style.top = (e.offsetTop + e.offsetHeight + 8) + 'px'; } else e.style.whiteSpace = ''; }
      });
      var shrinkFit = function () {
        if (!f || !f.isConnected) return; f.style.transform = '';
      var need = f.scrollHeight, room = body.clientHeight, needW = f.scrollWidth, roomW = body.clientWidth;
      var k2 = Math.min(1, room / need, roomW / needW);
      /* a crowded slide: shrink the pictures first (to 40% at most) so the words keep their size */
      if (k2 < 0.97) {
        var sc = stage.getBoundingClientRect().width / stage.offsetWidth || 1, pics = [], ph = 0;
        f.querySelectorAll('svg[viewBox]').forEach(function (g) { if (g.parentNode.closest('svg')) return; var hgt = g.getBoundingClientRect().height / sc; if (hgt > 40) { pics.push([g, hgt]); ph += hgt; } });
        if (pics.length) {
          var ks = Math.max(0.4, Math.min(1, (room - (need - ph)) / ph));
          if (ks < 0.98) pics.forEach(function (q) { var wNow = q[0].getBoundingClientRect().width / sc; q[0].style.maxWidth = (wNow * ks).toFixed(1) + 'px'; });
          need = f.scrollHeight; needW = f.scrollWidth; k2 = Math.min(1, room / need, roomW / needW);
        }
      }
      f.style.transform = k2 < 1 ? 'scale(' + k2.toFixed(3) + ')' : '';
      };
      stage.__refit = shrinkFit; shrinkFit();
    }
    var flPic = '', flTop = '', flOpt = '';
    function showFL(c) {
      var steps = slides[c.si].steps, html = '';
      for (var k = c.k; k >= 0 && !html; k--) html = String(steps[k].html || '').replace('<!--swap-->', '');
      var tmp = document.createElement('div'); tmp.innerHTML = html;
      var q = tmp.querySelector('.flb-q'), tip = tmp.querySelector('.flb-tip'), op = tmp.querySelector('.flb-opts');
      [q, tip, op].forEach(function (e) { if (e) e.parentNode.removeChild(e); });
      /* a question with no picture of its own: write the question beside the character, in a card like the sums */
      var qIn = false, fp = tmp.querySelector('.flp-pic');
      if (q && fp && !fp.querySelector('svg,img,table,.sv-card,.sv-big') && !fp.textContent.trim()) { fp.innerHTML = '<div class="flx-qcard">' + q.innerHTML.replace(/ ([+\u2212\u00d7\u00f7=]) /g, '\u00a0$1\u00a0') + '</div>'; qIn = true; }
      /* lessons added later mark their pictures: the question is always written for them; the first lessons show it in the picture */
      
      var ph = tmp.innerHTML.trim(); 
      /* older lessons without a themed picture: show the content on the topic's own scene beside its character, never a bare cream box */
      if (ph && ph.indexOf('flb-stage') < 0 && ph.indexOf('class="flp ') < 0 && window.FL && FL.panel && FL.THEME && FL.THEME[meta.n]) { var th0 = FL.THEME[meta.n], sy = FL.digitise(String((steps[c.k] || {}).say || '').replace(/<[^>]*>/g, '').trim()), tx0 = ph.replace(/<style[\s\S]*?<\/style>/g, '').replace(/<svg[\s\S]*?<\/svg>/g, 'S').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        if (/\d/.test(sy) && sy.length > 11 && sy.length < 200 && tx0.length < 30 && !/<table/.test(ph)) ph = ph + '<div style="width:100%;font-size:clamp(1.05rem,3.4vw,1.5rem);font-weight:800;text-align:center">' + sy + '</div>';
        ph = '<div class="flb flb-w"><div class="flb-stage" style="line-height:1.3;border:0;background:none">' + FL.panel(th0[1], th0[0], '<div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-items:center;font-weight:800;color:#2b2340;background:#fff;border:3px solid #2b2340;border-radius:16px;padding:10px 14px;max-width:96%">' + ph + '</div>') + '</div></div>'; }
      var P = stage.querySelector('.flx-pic'), T = stage.querySelector('.flx-top'), O = stage.querySelector('.flx-opts');
      if (ph !== flPic) { flPic = ph; P.innerHTML = ph; P.classList.toggle('flx-plain', !!ph && ph.indexOf('flb-stage') < 0); P.classList.remove('flx-in'); void P.offsetWidth; P.classList.add('flx-in'); fitPic(P); try { stackFracs(P); } catch (e) {} }
      /* the question is written at the top as well as told, so the child can read it and then tap an answer */
      var th = q && !qIn ? '<div class="flx-q">' + q.innerHTML + '</div>' : '';
      if (th !== flTop) { flTop = th; T.innerHTML = th; P.style.top = th ? (T.offsetHeight + 18) + 'px' : ''; fitPic(P); }
      /* answer choices get their own space under the picture, so they never cover it */
      if (P.classList.contains('flx-ask') !== !!op) { P.classList.toggle('flx-ask', !!op); fitPic(P); }
      fitBox(P);
      var oh = op ? op.outerHTML : '', base = oh.replace(/ ok"/g, '"');
      if (base !== flOpt) { flOpt = base; O.innerHTML = oh; } else if (oh !== O.innerHTML) { O.innerHTML = oh; }
      var ol = O.querySelectorAll('.o'), mx = 0; [].forEach.call(ol, function (e) { mx = Math.max(mx, e.textContent.length); });
      O.classList.toggle('flx-long', mx > 6); O.classList.toggle('flx-xl', mx > 14);
      /* when the choices wrap onto two rows (long answers, small screens), the picture moves up to give them all the room they need */
      if (op) { var need = O.offsetHeight + (O.offsetTop ? 0 : 0) + 20, base0 = stage.closest('.gp.narrow') ? 96 : 104; P.style.bottom = Math.max(base0, need) + 'px'; fitPic(P); fitBox(P); } else P.style.bottom = '';
      /* a question: the child taps their answer on the picture */
      tries = 0; answered = false;
      if (c.think) O.querySelectorAll('.o').forEach(function (el) {
        el.classList.add('tap'); el.setAttribute('role', 'button'); el.tabIndex = 0; el.setAttribute('aria-label', 'Answer ' + el.textContent);
        el.onclick = function () { pick(el); }; el.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(el); } };
      });
    }
    /* the picture fills the stage as far as it can without cropping or stretching */
    /* a picture or a tips card that is too big for its space is made smaller, never cut off */
    function fitBox(P) {
      var el = P.classList.contains('flx-plain') ? P.firstElementChild : P.querySelector('.flp-pic'); if (!el) return;
      el.style.zoom = ''; var room = P.classList.contains('flx-plain') ? P : el;
      var r = Math.min(1, (room.clientWidth - (room === P ? 40 : 0)) / Math.max(1, el.scrollWidth), (room.clientHeight - (room === P ? 40 : 0)) / Math.max(1, el.scrollHeight));
      if (r < 0.98) el.style.zoom = Math.max(0.35, r * 0.97).toFixed(3);
    }
    /* fractions written in a picture are shown big and stacked (top over bottom), like in a book */
    function stackFracs(root) { var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), nodes = [], n;
      while ((n = w.nextNode())) { if (/(^|[^\d\/.])[\d?]{1,3}\/[\d?]{1,3}(?![\d\/])/.test(n.nodeValue) && n.parentNode.closest('.flp-pic') && !n.parentNode.closest('[data-fr]') && !/^(SCRIPT|STYLE|text|tspan)$/i.test(n.parentNode.nodeName)) nodes.push(n); }
      nodes.forEach(function (t) { var sp = document.createElement('span'); sp.setAttribute('data-fr', '1');
        sp.innerHTML = t.nodeValue.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/(^|[^\d\/.])([\d?]{1,3})\/([\d?]{1,3})(?![\d\/])/g, function (m, a, nu, de) { return a + '<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.05;margin:0 .12em"><span style="padding:0 .2em">' + nu + '</span><span style="border-top:.1em solid currentColor;padding:0 .2em">' + de + '</span></span>'; });
        t.parentNode.replaceChild(sp, t); }); }
    function fitPic(P) { var g = P.querySelector('.flb-stage>svg[viewBox]'); if (g) g.setAttribute('preserveAspectRatio', P.classList.contains('flx-ask') ? 'xMidYMid meet' : 'xMidYMid slice'); }
    var tries = 0, answered = false, PRAISE = ['Yes! You are right!', 'Brilliant! Well done!', 'That’s right! Super thinking!', 'Yes! Clever you!'], NUDGE = ['Not quite. Have another go!', 'Ooh, nearly! Try again.'];
    function pick(el) {
      var c = chunks[lastI]; if (!c || !c.think || answered || el.classList.contains('no')) return;
      var ok = String(window.origText ? window.origText(el) : el.textContent).trim() === String(c.answer).trim();
      token++; clearTimeout(timer); try { speechSynthesis.cancel(); } catch (e) { /* ignore */ }
      var th = stage.querySelector('.flx-think'); if (th) th.classList.remove('on');
      if (ok) { answered = true; el.classList.add('ok'); } else { tries++; el.classList.add('no'); }
      var my = token, at = lastI; playing = true; setPb('Pause'); current = { stop: stop };
      var line = ok ? PRAISE[Math.floor(Math.random() * PRAISE.length)] : tries >= 2 ? 'Good try! Let’s find out together.' : NUDGE[(tries - 1) % NUDGE.length];
      cap.textContent = line; root.classList.add('gp-talk');
      H.flTell(line, { box: stage.querySelector('.flx-pic'), voice: okVoice, alive: function () { return my === token && root.isConnected; } }, function () {
        root.classList.remove('gp-talk'); if (my !== token || !root.isConnected) return;
        if (ok || tries >= 2) { idx = Math.min(chunks.length - 1, at + 1); timer = setTimeout(function () { if (my === token && playing) say(idx); }, 500); }
        else { if (th) th.classList.add('on'); cap.textContent = chunks[at].say; }
      });
    }
    function waitPick(c0, my) {
      var th = stage.querySelector('.flx-think'); if (th) th.classList.add('on');
      timer = setTimeout(function () { if (my !== token || !playing || answered) return; root.classList.add('gp-talk');
        H.flTell('Tap the answer you think is right.', { box: null, voice: okVoice, alive: function () { return my === token && playing; } }, function () { root.classList.remove('gp-talk'); }); }, 12000);
    }
    /* next lesson: the next question in this Watch lesson, or the next step after the last one */
    function nextLesson() {
      stop(); var ts = meta.titles || [];
      if (meta.q + 1 < ts.length) { H.__gpAutoplay = true; if (H.slideJump) H.slideJump(meta.q + 1); }
      else { var sn = document.getElementById('sNext'); if (sn) sn.click(); }
    }
    /* when a lesson ends: the last picture stays and a Next lesson button sits in the top right corner (no pop-up) */
    function endCard() {
      if (!stage || !root.isConnected) return;
      var old = stage.querySelector('.gp-end'); if (old) old.remove();
      var b = document.createElement('button'); b.type = 'button'; b.className = 'gp-end'; b.textContent = 'Next lesson →';
      b.addEventListener('click', nextLesson); stage.appendChild(b);
    }
    function show(i) {
      var oldEnd = stage && stage.querySelector('.gp-end'); if (oldEnd) oldEnd.remove();
      lastI = i;
      var c = chunks[i];
      if (shown !== c.si) { shown = c.si; build(c.si); }
      if (FLM && !slides[c.si].title) { showFL(c); cap.textContent = c.say; bar.style.width = ((i + 1) / chunks.length * 100) + '%'; cnt.textContent = 'Slide ' + (c.si + 1) + ' of ' + slides.length; if (i === chunks.length - 1) markSeen(); return; }
      stage.querySelectorAll('[data-sb]').forEach(function (e) {
        var k = Number(e.getAttribute('data-sb')), on = k <= c.k;
        if (on && e.parentNode.classList.contains('gp-swap')) {
          var later = [].some.call(e.parentNode.children, function (o) { var j = Number(o.getAttribute('data-sb')); return j > k && j <= c.k; });
          if (later) on = false;
        }
        if (on && !e.classList.contains('on')) { e.classList.add('on'); if (!FLM) drawIn(e); }
        else if (!on) e.classList.remove('on');
      });
      cap.textContent = c.say; bar.style.width = ((i + 1) / chunks.length * 100) + '%';
      cnt.textContent = 'Slide ' + (c.si + 1) + ' of ' + slides.length;
      if (i === chunks.length - 1) markSeen();
    }
    function say(i) {
      show(i); var my = ++token; clearTimeout(timer);
      function gapNext(ms) {
        if (my !== token || !playing || !root.isConnected) return;
        if (i + 1 < chunks.length) { idx = i + 1; timer = setTimeout(function () { if (my === token && playing && root.isConnected) say(idx); }, ms); }
        else { playing = false; idx = 0; setPb('Watch again'); markSeen(); endCard(); }
      }
      function next() {
        if (my !== token || !playing || !root.isConnected) return;
        if (i + 1 < chunks.length) { idx = i + 1; timer = setTimeout(function () { if (my === token && playing && root.isConnected) say(idx); }, chunks[i].turnQ ? (String(chunks[i].say).split(' ').length > 15 ? 4000 : 3000) : chunks[i + 1].si !== chunks[i].si ? 1800 : 900); }   /* silence in the narration, the video keeps playing: 3.5 seconds after a Your turn question so the child can think; about 2 seconds when a new slide comes up; a short breath between steps */
        else { playing = false; idx = 0; setPb('Watch again'); endCard(); }
      }
      if (FLM && H.flTell) {
        /* First level: told like a storyteller, sentence by sentence, counting things as they light up */
        var c0 = chunks[i], blk = stage.querySelector('.flx-pic') || stage, fx = stage.querySelector('.flx');
        /* the fact for what is being said: written at the top while that sentence is explained, then it goes; the next fact appears in the same place */
        var board = null, fs = c0.facts || [], shown = [];
        if (fx) { var old = fx.querySelector('.fl-facts'); if (old) old.remove(); }
        if (fx && fs.length) { board = document.createElement('div'); board.className = 'fl-facts'; board.innerHTML = '<div class="fl-fact"></div>'; fx.appendChild(board); }
        function factFor(t) { if (!board) return; var low = String(t).toLowerCase(); fs.some(function (f, j) { if (shown[j] || low.indexOf(String(f[0]).toLowerCase()) < 0) return false; shown[j] = 1; var row = board.firstChild; row.classList.remove('on'); void row.offsetWidth; row.textContent = f[1]; row.classList.add('on'); return true; }) || board.firstChild.classList.remove('on'); }   /* shown while its sentence is said, gone when the next sentence starts */
        /* a speech cloud from the character while their own words (in quotes) are spoken */
        var cloud = null;
        function quoteFor(t) {
          if (!fx) return;
          var pp = blk.querySelector('.flp-pic');
          if (!t) { if (cloud) { cloud.classList.remove('on'); } if (pp) pp.style.transform = ''; return; }
          var ch = blk.querySelector('.flp-ch'); if (!ch) return;
          if (!cloud) { cloud = document.createElement('div'); cloud.className = 'fl-cloud'; fx.appendChild(cloud); }
          var fr = fx.getBoundingClientRect(), cr = (ch.querySelector('svg') || ch).getBoundingClientRect(), k = fr.width / Math.max(1, fx.offsetWidth);   /* the stage may be scaled to fit the screen */
          /* written with numerals: the voice says "seven am", the cloud shows "7 am" */
          var NW = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90, hundred: 100 };
          var txt = String(t).replace(/[“”"]/g, '').trim().replace(/\b(twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)-(one|two|three|four|five|six|seven|eight|nine)\b/gi, function (m, a, b) { return NW[a.toLowerCase()] + NW[b.toLowerCase()]; })
            .replace(/\b(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred)\b/gi, function (m) { return NW[m.toLowerCase()]; });
          txt = txt.replace(/(\d)\s+(am|pm|o’clock|minutes?|hours?|cm|kg|m)\b/g, '$1\u00a0$2');   /* keep 7 and am on the same line */
          cloud.textContent = txt;
          var W = fx.offsetWidth, H = fx.offsetHeight, cl = (cr.left - fr.left) / k, cw = cr.width / k, cy = (cr.top - fr.top) / k, ch2 = cr.height / k;
          cloud.style.left = '0px'; cloud.style.top = '0px'; cloud.style.fontSize = ''; cloud.style.maxWidth = Math.min(460, W - cl - cw * 0.6 - 16) + 'px';
          var bw = cloud.offsetWidth, bh = cloud.offsetHeight, tl = fx.closest('.gp.narrow') ? 16 : 26;
          /* the tail's tip touches the speaker: above them, made wider (fewer lines) if needed to fit; beside them only as a last resort */
          var tipX = cl + cw * 0.62, tipY = cy + ch2 * 0.12, left = tipX - 34, top = tipY - tl - bh;
          if (top < 6) { cloud.style.maxWidth = (W - Math.max(6, left) - 8) + 'px'; bw = cloud.offsetWidth; bh = cloud.offsetHeight; top = tipY - tl - bh; }
          if (top < 6 && tipY - tl - 6 > 40) { cloud.style.fontSize = '0.82em'; bw = cloud.offsetWidth; bh = cloud.offsetHeight; top = tipY - tl - bh; }
          var side = top < 6; if (side) { cloud.style.fontSize = ''; cloud.style.maxWidth = Math.min(460, W - cl - cw * 0.6 - 16) + 'px'; bw = cloud.offsetWidth; bh = cloud.offsetHeight; }
          if (side) { tipX = cl + cw * 0.8; tipY = cy + ch2 * 0.35; left = tipX + tl; top = tipY - bh / 2; }
          left = Math.min(Math.max(6, left), W - bw - 6); top = Math.min(Math.max(6, top), H - bh - 6);
          cloud.classList.toggle('side', side);
          cloud.style.left = left + 'px'; cloud.style.top = top + 'px';
          /* keep the tail pointing at the speaker even when the cloud had to be nudged to stay inside */
          if (side) cloud.style.setProperty('--ty', Math.min(bh - 24, Math.max(6, tipY - top - 14)) + 'px'); else cloud.style.setProperty('--tx', Math.min(bw - 40, Math.max(8, tipX - left - 14)) + 'px');
          /* if the cloud would cover part of the picture, move the picture down a little while the cloud shows */
          if (pp) { pp.style.transform = ''; var kids = [].slice.call(pp.querySelectorAll('svg, .card, span, div')).map(function (e) { return e.getBoundingClientRect(); }).filter(function (r) { return r.width > 4 && r.height > 4; });
            if (kids.length) { var pt = Math.min.apply(null, kids.map(function (r) { return r.top; })), pb = Math.max.apply(null, kids.map(function (r) { return r.bottom; })), pl = Math.min.apply(null, kids.map(function (r) { return r.left; }));
              var cb = fr.top + (top + bh) * k, cR = fr.left + (left + bw) * k, over = cb + 6 * k - pt;
              if (over > 0 && cR > pl) { var space = fr.bottom - 4 * k - pb; pp.style.transition = 'transform .3s'; pp.style.transform = 'translateY(' + Math.max(0, Math.min(over, space)) / k + 'px)'; } } }
          cloud.classList.remove('on'); void cloud.offsetWidth; cloud.classList.add('on');
        }
        root.classList.add('gp-talk');
        H.flTell(c0.say, { box: blk, keys: fx, fact: factFor, quote: quoteFor, cap: null, voice: okVoice, alive: function () { return my === token && playing && root.isConnected; } }, function () {
          root.classList.remove('gp-talk'); if (board) board.firstChild.classList.remove('on'); quoteFor(null);
          if (my !== token || !playing || !root.isConnected) return;
          /* a question: give the child time to think before the answer */
          if (c0.think) { waitPick(c0, my); return; }
          gapNext(c0.last ? 1500 : 800);
        });
        return;
      }
      var ok = okVoice && H.speakStory(chunks[i].say, function () { next(); });
      if (!ok) timer = setTimeout(next, chunks[i].say.split(' ').length * 380 + 1200);
    }
    function stop() { token++; clearTimeout(timer); playing = false; root.classList.remove('gp-talk'); try { if (okVoice) speechSynthesis.cancel(); } catch (e) { /* ignore */ } setPb(idx > 0 ? 'Keep watching' : 'Play the lesson'); }
    function go(i) { var was = playing; stop(); idx = Math.max(0, Math.min(chunks.length - 1, i)); if (was) { playing = true; setPb('Pause'); current = { stop: stop }; say(idx); } else show(idx); }
    pb.addEventListener('click', function () { if (playing) { stop(); return; } current = { stop: stop }; playing = true; setPb('Pause'); say(idx); });
    root.querySelector('[data-b]').addEventListener('click', function () { go(idx - 1); });
    root.querySelector('[data-n]').addEventListener('click', function () { go(idx + 1); });
    root.querySelector('[data-nl]').addEventListener('click', nextLesson);
    root.querySelector('[data-r]').addEventListener('click', function () { stop(); idx = 0; shown = -1; current = { stop: stop }; playing = true; setPb('Pause'); say(0); });
    host.querySelectorAll('[data-q]').forEach(function (bt) { bt.addEventListener('click', function () {
      var j = Number(bt.getAttribute('data-q')); if (j === meta.q) { if (!playing) pb.click(); return; }
      stop(); H.__gpAutoplay = true; if (H.slideJump) H.slideJump(j);
    }); });
    current = { stop: stop }; show(0); host.__storyShow = show; host.__storyN = chunks.length;
    if (H.__gpAutoplay || (FLM && H.flAuto && H.flAuto())) { H.__gpAutoplay = false; setTimeout(function () { if (root.isConnected && !playing) pb.click(); }, 350); }
  };

  function toSlides(episodes, n) {
    return episodes.map(function (ep, i) {
      return { title: D(ep.title), say: ['Press play and your teacher will explain this step by step.'], goal: ep.goal || ep.title.toLowerCase(), noMore: true, kind: 'Watch lesson',
        live: function (host) { H.gifPlayer(host, ep, { n: n, q: i, of: episodes.length, titles: episodes.map(function (e) { return D(e.title); }) }); } };
    });
  }
  /* put the episodes in a Watch step at the front of a topic. Older Watch lessons are removed,
     except those whose titles are listed in keep: they stay, after the new ones, in the new style. */
  BT.lessons = function (n, label, episodes, keep) {
    var t = S.topics[n]; if (!t) { if (window.console) console.warn('lessons: no topic ' + n); return; }
    BT.EP = BT.EP || {}; episodes.forEach(function (e) { if (e && e.title) BT.EP[e.title] = e; });
    episodes = episodes.filter(function (e) { if (!e && window.console) console.warn('lessons: missing episode in topic ' + n); return !!e; });
    var old = t.steps.filter(function (s) { return s.id === 'watch'; })[0], kept = [];
    if (old && keep) (old.slides || []).forEach(function (sl) { if (sl.ep && keep.indexOf(sl.title) >= 0) kept.push(sl.ep); });
    t.steps = t.steps.filter(function (s) { return s.id !== 'watch'; });
    var m = H.slideMeta; if (m) { delete m.goals[n + '.watch']; delete m.more[n + '.watch']; }
    BT.add(n, 'watch', label || 'Watch lesson', toSlides(episodes.concat(kept), n));
    BT.EP_BY_TOPIC = BT.EP_BY_TOPIC || {}; BT.EP_BY_TOPIC[n] = episodes.concat(kept).map(function (e) { return e.title; });
    var st = t.steps.filter(function (s) { return s.id === 'watch'; })[0], i = t.steps.indexOf(st);
    if (i > 0) { t.steps.splice(i, 1); t.steps.unshift(st); }
    S.arrange(t);
  };
})();
