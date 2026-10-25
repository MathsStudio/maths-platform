const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.cwd()+'/v18.html');await p.click('[data-level="medium"]');await p.click('[data-pickyear="P7"]');
await p.evaluate(()=>{const c=[...document.querySelectorAll('.card.topic')].find(c=>c.querySelector('.tn').textContent.trim()==='Topic 2');c.querySelector('button.btn').click()});
console.log('stepper:',await p.$$eval('.sp',x=>x.map(y=>y.textContent.trim()).join(' | ')));
await p.click('.sp:nth-last-child(2)');console.log(await p.$eval('#pane .step-tag',x=>x.textContent),'|',await p.$eval('#pane h2',x=>x.textContent));
console.log((await p.$eval('#quizHost',x=>x.textContent)).slice(0,260));await p.screenshot({path:'prac.png'});console.log(e);await b.close()})();
