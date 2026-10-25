const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:430,height:1000}});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file:///tmp/claude-0/-home-claude/5b2cf499-68dc-5612-a68c-621fe7f22388/scratchpad/v3/p6-v5.html');
await p.click('[data-level="medium"]');await p.click('[data-year="P5"]');
console.log(await p.$$eval('#tabs .tab',e=>e.map(x=>x.textContent).join(',')));
await p.screenshot({path:'h5.png'});
await p.click('[data-open="501"]');
await p.click('[data-go="2"]');await p.waitForTimeout(300);
// lab1: build number
await p.screenshot({path:'lab1.png'});
for(let k=0;k<3;k++){const tgt=await p.$eval('.say.wq b',e=>e.textContent.replace(/,/g,'')).catch(()=>null);if(!tgt)break;const ds=tgt.padStart(5,'0').split('').map(Number);
 for(let i=0;i<5;i++)for(let j=0;j<ds[i];j++)await p.click('[data-up="'+i+'"]');
 await p.click('#bNext');}
console.log('lab1 done:',await p.$eval('.sp.cur',e=>e.className),await p.$$eval('.sp',e=>e.map(x=>x.className.includes('done')?'✓':'-').join('')));
await p.click('[data-go="3"]');await p.click('#sNext');await p.waitForTimeout(200);await p.screenshot({path:'sl2.png'});
await p.click('[data-go="4"]');await p.waitForTimeout(200);await p.screenshot({path:'lab2.png'});
for(const v of ['1500','3333','9000','2468','7777','5050']){await p.$eval('#rN',(e,v)=>{e.value=v;e.dispatchEvent(new Event('input'))},v);for(const pl of ['10','100','1000'])await p.click('[data-pl="'+pl+'"]');}
console.log('lab2',await p.$$eval('.sp',e=>e.map(x=>x.className.includes('done')?'✓':'-').join('')));
console.log('errs',errs);await b.close();})();
