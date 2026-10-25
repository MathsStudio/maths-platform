const fs=require('fs');global.window=global;
function mk(){return {innerHTML:'',textContent:'',value:'',style:{setProperty(){}},classList:{add(){},remove(){},toggle(){},contains(){return false}},dataset:{},addEventListener(){},querySelectorAll(){return []},appendChild(){},setAttribute(){},getAttribute(){return null}}}
global.document={getElementById(){return mk()},createElement(){return mk()},querySelectorAll(){return []},addEventListener(){},body:mk(),documentElement:mk()};
global.localStorage={getItem(){return null},setItem(){}};global.speechSynthesis=undefined;
const html=fs.readFileSync(process.argv[2],'utf8');
for(const m of html.matchAll(/<script>([\s\S]*?)<\/script>/g)){const s=m[1];if(/^Studio\.start\(\);\s*$/.test(s.trim()))continue;try{(0,eval)(s)}catch(e){}}
const S=Studio;const strip=t=>t.replace(/<[^>]+>/g,'');
for(const [n,lab] of [[501,'P5.1'],[503,'P5.3'],[506,'P5.6'],[7,'P6.7'],[704,'P7.4'],[710,'P7.10'],[711,'P7.11'],[712,'P7.12']]){const st=S.storyFor(n);const f=st.easy.concat(st.hard);const seen=new Set();console.log('--',lab);for(const g of f.slice(0,4)){console.log('  ['+g.name.replace('story_','')+']',strip(g().text).slice(0,150))}}
