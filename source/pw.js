const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:420,height:900}});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file:///tmp/claude-0/-home-claude/5b2cf499-68dc-5612-a68c-621fe7f22388/scratchpad/v3/p6-v3.html');
await p.click('[data-level="medium"]');
const tabs=await p.$$('#tabs .tab');console.log('tabs',tabs.length);
let tot=0,miss=0;
for(let i=1;i<tabs.length;i++){ await (await p.$$('#tabs .tab'))[i].click();
 // find slide steps via stepper
 const steps=await p.$$('#stepper button, .stepper button, [data-step]');
 for(let s=0;s<steps.length;s++){ const st=(await p.$$('#stepper button, .stepper button, [data-step]'))[s]; await st.click().catch(()=>{});
  let guard=0; while(await p.$('#sNext') && guard++<12){ const has=await p.$('.more'); tot++; if(!has) miss++; const lbl=await p.textContent('#sNext'); if(/Continue/.test(lbl)) break; await p.click('#sNext'); }
 }}
console.log('slides seen',tot,'without more',miss,'errs',errs);
await p.screenshot({path:'v3/shot.png',fullPage:false});
await b.close();})();
