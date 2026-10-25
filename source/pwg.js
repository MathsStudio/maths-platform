const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.cwd()+'/v13.html');await p.click('[data-level="high"]');
const vis=async q=>p.$eval(q,x=>getComputedStyle(x).display!=='none');
console.log('gate: level',await vis('.level-switch'),'allTopics',await vis('#tbHome'),'mark',await vis('#brandMark'),'settings',await vis('#tbSettings'));
await p.click('[data-pickyear="P6"]');
console.log('after: level',await vis('.level-switch'),'allTopics',await vis('#tbHome'),'mark',await vis('#brandMark'),await p.$eval('#brandMark',x=>x.textContent));
await p.click('#tbHome');console.log('allTopics -> topics list?',!!(await p.$('.card.topic')));
console.log(e);await b.close()})();
