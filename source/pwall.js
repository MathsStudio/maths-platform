const {chromium}=require('playwright');
const file=process.argv[2], ids=process.argv[3].split(',').map(Number);
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:430,height:1000}});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file://'+process.cwd()+'/'+file);await p.click('[data-level="medium"]');
for(const id of ids){
 if(await p.$eval('#tabs',x=>!x.classList.contains('hide')))await p.click('[data-tab="home"]');
 {const y=(id>=700?'P7':'P5');if(!(await p.$('[data-pickyear]')))await p.click('#chgYear');await p.click('[data-pickyear="'+y+'"]');}
 await p.click('.topics [data-open="'+id+'"]');
 const eb=await p.$eval('.eyebrow',e=>e.textContent);
 // visit each step by stepper
 const n=(await p.$$('.sp')).length; let vis=0, bad=0;
 for(let i=0;i<n;i++){await p.click('[data-go="'+i+'"]');
  for(let k=0;k<12;k++){const t=await p.$eval('#pane',e=>e.innerHTML);if(/undefined|NaN|\[object/.test(t))bad++;vis+=(t.match(/<svg/g)||[]).length;const nx=await p.$('#sNext');if(!nx)break;await nx.click();}
  if(i===2){for(const s of await p.$$('input.slider')){await s.evaluate(e=>{e.value=e.min;e.dispatchEvent(new Event('input'))});await s.evaluate(e=>{e.value=e.max;e.dispatchEvent(new Event('input'))});await s.evaluate(e=>{e.value=Math.round((+e.min+ +e.max)/2);e.dispatchEvent(new Event('input'))});}
   const t=await p.$eval('#pane',e=>e.innerHTML);if(/undefined|NaN|\[object/.test(t))bad++;}
 }
 console.log(id,eb,'steps',n,'svgs',vis,'bad',bad);
}
if(await p.$eval('#tabs',x=>!x.classList.contains('hide')))await p.click('[data-tab="home"]');if(!(await p.$('[data-pickyear]')))await p.click('#chgYear');await p.click('[data-pickyear="P5"]');await p.click('.topics [data-open="505"]');await p.click('[data-go="0"]');await p.click('#sNext');await p.click('#sNext');await p.waitForTimeout(400);await p.screenshot({path:'s505.png'});
console.log('errs',errs);await b.close();})();
