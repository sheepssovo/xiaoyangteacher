
let idx = Math.floor(Math.random() * words.length);

function render() {
  const w = words[idx];

  const wordBox = document.getElementById('wordBox');
  wordBox.innerHTML = `
    <h3>${w.word}</h3>
    <div style="font-size:20px;color:#666;margin:8px 0;">${w.phonetic}</div>
    <div style="font-size:22px;font-weight:bold;color:#333;margin:10px 0;">${w.meaning}</div>
    <div style="margin-top:15px;">${w.example}</div>
    <div style="color:#666;margin-top:8px;">${w.translation}</div>
  `;

  const book = document.getElementById('book');
  let bookWords = JSON.parse(localStorage.getItem("wordsBook") || "[]");
  book.innerHTML = bookWords
    .map(b => `<div style="padding:10px;border-bottom:1px solid #eee">
                 <b>${b.word}</b><br>${b.meaning}
               </div>`).join("");
}

function nextWord() {
  idx = Math.floor(Math.random() * words.length);
  render();
}

function saveWord() {
  let bookWords = JSON.parse(localStorage.getItem("wordsBook") || "[]");
  if (!bookWords.find(x => x.word === words[idx].word)) {
    bookWords.push(words[idx]);
    localStorage.setItem("wordsBook", JSON.stringify(bookWords));
  }
  render();
}

render();
