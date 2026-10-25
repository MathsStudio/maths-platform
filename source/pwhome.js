const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.cwd()+'/v12.html');await p.click('[data-level="medium"]');
console.log('gate: tabs hidden?',await p.$eval('#tabs',x=>getComputedStyle(x).display==='none'||x.classList.contains('hide')),await p.$$eval('[data-pickyear]',x=>x.length));
for(const y of ['P5','P6','P7']){await p.click('[data-pickyear="'+y+'"]');
 console.log(y,'tabs visible',await p.$eval('#tabs',x=>!x.classList.contains('hide')),'cards',await p.$$eval('.card.topic .tn',x=>x.map(y=>y.textContent.replace('Topic ','')).join(',')),'tabs',await p.$$eval('#tabs .tab b',x=>x.map(y=>y.textContent).join(',')));
 await p.click('#chgYear');}
await p.click('[data-pickyear="P7"]');await p.click('#tabs [data-tab="12"]');console.log(await p.$eval('#view .eyebrow',x=>x.textContent));
console.log('err',e);await b.close()})();
