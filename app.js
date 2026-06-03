let idx=Math.floor(Math.random()*words.length);
function render(){
const w=words[idx];
wordBox.innerHTML=`<h3>${w.word}</h3><div>${w.phonetic}</div><p><b>${w.meaning}</b></p><p>${w.example}</p><p>${w.translation}</p>`;
book.innerHTML=(JSON.parse(localStorage.getItem('book')||'[]')).map(x=>'<div>'+x.word+' - '+x.meaning+'</div>').join('');
}
function nextWord(){idx=Math.floor(Math.random()*words.length);render();}
function saveWord(){let b=JSON.parse(localStorage.getItem('book')||'[]');b.push(words[idx]);localStorage.setItem('book',JSON.stringify(b));render();}
render();