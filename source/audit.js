const fs=require('fs');global.window=global;
function mk(){return {innerHTML:'',textContent:'',value:'',style:{setProperty(){}},classList:{add(){},remove(){},toggle(){},contains(){return false}},dataset:{},addEventListener(){},querySelectorAll(){return []},appendChild(){},setAttribute(){},getAttribute(){return null}}}
global.document={getElementById(){return mk()},createElement(){return mk()},querySelectorAll(){return []},addEventListener(){},body:mk(),documentElement:mk()};
global.localStorage={getItem(){return null},setItem(){}};global.speechSynthesis=undefined;
const html=fs.readFileSync(process.argv[2],'utf8');
for(const m of html.matchAll(/<script>([\s\S]*?)<\/script>/g)){const s=m[1];if(/^Studio\.start\(\);\s*$/.test(s.trim()))continue;try{(0,eval)(s)}catch(e){}}
const S=Studio;
const ids=[];for(let i=1;i<=10;i++){ids.push(i,500+i,700+i)}
for(const id of ids){const t=S.topics[id];if(!t){console.log(id,'missing');continue}
 let sl=0,ex=0,exs=0,say=0,more=0,eg=0,goal=0;
 for(const st of t.steps){if(st.type!=='slides')continue;
  const M=(window.SLIDE_MORE||{})[id+'.'+st.id]||[],G=(window.SLIDE_GOALS||{})[id+'.'+st.id]||[];
  st.slides.forEach((s,k)=>{sl++;say+=(s.say||[]).length;if(s.ex){ex++;exs+=s.ex.steps.length}const m=M[k];if(m){more+=(m.more||[]).length;eg+=(m.eg||[]).length}if(G[k])goal++;});}
 console.log(String(id).padEnd(4),'slides',sl,'say',say,'workedEx',ex,'exSteps',exs,'more',more,'eg',eg,'goal',goal);}
