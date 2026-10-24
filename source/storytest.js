const fs=require('fs');global.window=global;
function mk(){return {innerHTML:'',textContent:'',value:'',style:{setProperty(){}},classList:{add(){},remove(){},toggle(){},contains(){return false}},dataset:{},addEventListener(){},querySelectorAll(){return []},appendChild(){},setAttribute(){},getAttribute(){return null}}}
global.document={getElementById(){return mk()},createElement(){return mk()},querySelectorAll(){return []},addEventListener(){},body:mk(),documentElement:mk()};
global.localStorage={getItem(){return null},setItem(){}};global.speechSynthesis=undefined;
const html=fs.readFileSync(process.argv[2],'utf8');
for(const m of html.matchAll(/<script>([\s\S]*?)<\/script>/g)){const s=m[1];if(/^Studio\.start\(\);\s*$/.test(s.trim()))continue;try{(0,eval)(s)}catch(e){console.log('ERR',e.message.slice(0,150))}}
const S=Studio;const ids=[];for(let i=1;i<=12;i++){if(i<=10)ids.push(i,500+i);ids.push(700+i)}
const bad={};let total=0,fams=0;
for(const n of ids){const st=S.storyFor(n);if(!st){console.log('no stories',n);continue}
 for(const kind of ['easy','hard'])for(const f of st[kind]){fams++;const seen=new Set();
  for(let r=0;r<300;r++){let q;try{q=f()}catch(e){bad[n+f.name]='THROW '+e.message;break}total++;
   const blob=JSON.stringify(q);const k=n+' '+f.name;
   if(/undefined|NaN|\[object|Infinity/.test(blob)){bad[k]='BAD '+blob.slice(0,160);break}
   if(!q.hints||q.hints.length<2||new Set(q.hints).size!==q.hints.length){bad[k]='hints '+q.text;break}
   if(q.type==='mc'){if(q.options.indexOf(q.answer)===-1||new Set(q.options).size!==q.options.length){bad[k]='MC '+blob.slice(0,200);break}}
   else if(!S.h.matches(q,q.answer)){bad[k]='mismatch '+q.answer;break}
   const ans=String(q.answer);if(q.type!=='mc'){for(const h of q.hints){const plain=h.replace(/<[^>]+>/g,'');const re=new RegExp('(^|[^0-9.])'+ans.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'([^0-9]|$)');if(re.test(plain)){bad[k]='LEAK '+ans+' | '+plain+' | '+q.text.replace(/<[^>]+>/g,'').slice(0,90);break}}}
   if(bad[k])break;
   if(q.type!=='mc'&&/^-/.test(ans)){bad[k]='NEG '+q.text;break}
   seen.add(q.text)}
  if(!bad[n+' '+f.name]&&seen.size<12)console.log('low variety',n,f.name,seen.size)}}
console.log('families',fams,'questions',total);console.log(Object.keys(bad).length?bad:'ALL CLEAN');
