
const msgs=[
'飞鸟，欢迎回来。',
'今天学一个单词就够了。',
'学习五分钟也是进步。',
'不要偷偷摸鱼哦。'
];

let current=null;

function getXP(){return Number(localStorage.getItem('xp')||0)}
function setXP(v){localStorage.setItem('xp',v)}
function levelName(xp){
 if(xp>=1500)return 'Lv5 英语牧羊人';
 if(xp>=700)return 'Lv4 监督羊';
 if(xp>=300)return 'Lv3 学徒羊';
 if(xp>=100)return 'Lv2 勤奋羊';
 return 'Lv1 小羊羔';
}
function renderTop(){
 const xp=getXP();
 document.getElementById('xp').innerText='XP: '+xp;
 document.getElementById('level').innerText=levelName(xp);
}
function nextWord(){
 current=words[Math.floor(Math.random()*words.length)];
 document.getElementById('word').innerText=current.word;
 document.getElementById('meaning').innerText=current.meaning;
}
function saveWord(){
 let arr=JSON.parse(localStorage.getItem('savedWords')||'[]');
 if(current && !arr.includes(current.word)){
   arr.push(current.word);
   localStorage.setItem('savedWords',JSON.stringify(arr));
   setXP(getXP()+5);
 }
 renderSaved();
 renderTop();
}
function renderSaved(){
 let arr=JSON.parse(localStorage.getItem('savedWords')||'[]');
 document.getElementById('saved').innerHTML=arr.map(x=>'<li>'+x+'</li>').join('');
}
function streak(){
 const today=new Date().toISOString().slice(0,10);
 const last=localStorage.getItem('lastDay');
 let s=Number(localStorage.getItem('streak')||1);
 if(last!==today){
   localStorage.setItem('lastDay',today);
 }
 localStorage.setItem('streak',s);
 document.getElementById('streak').innerText=s+' 天';
}
document.getElementById('msg').innerText=msgs[Math.floor(Math.random()*msgs.length)];
renderTop();renderSaved();streak();nextWord();
