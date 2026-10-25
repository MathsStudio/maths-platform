const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:420,height:1000}});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file:///tmp/claude-0/-home-claude/5b2cf499-68dc-5612-a68c-621fe7f22388/scratchpad/v3/p6-v4.html');
await p.click('[data-level="medium"]');
const tabs=await p.$$('#tabs .tab');console.log('tabs',tabs.length);
await tabs[10].click();
const steps=async()=>await p.$$('.stepper .sp');
console.log('steps',(await steps()).length);
let slidesSeen=0,withMore=0;
for(let s=0;s<6;s++){ await (await steps())[s].click();
  let g=0; while(await p.$('#sNext') && g++<12){ slidesSeen++; if(await p.$('.more')) withMore++; const l=await p.textContent('#sNext'); if(/Continue/.test(l)) break; await p.click('#sNext'); }
  if(s===2){ // factor lab
    for(const v of ['7','12','16','18','24','30','36','13','20']){ await p.$eval('#fN',(e,v)=>{e.value=v;e.dispatchEvent(new Event('input'));},v); }
    console.log('lab1 out:',await p.textContent('#fOut'));
  }
  if(s===4){ for(const pr of [2,3,5,7]){ await p.click('[data-p="'+pr+'"]'); } console.log('lab2 out:',(await p.textContent('#sOut')).slice(0,60)); }
}
console.log('slides',slidesSeen,'with more',withMore,'errs',errs);
await (await steps())[2].click();await p.screenshot({path:'l1.png'});
await (await steps())[4].click();await p.screenshot({path:'l2.png'});
await (await steps())[1].click();await p.waitForTimeout(500);
await p.screenshot({path:'sl.png'});
await b.close();})();
