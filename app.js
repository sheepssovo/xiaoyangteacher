
// ===== V6.1 增强功能 =====
const warnings = [
  "飞鸟，今天背单词了吗？",
  "收藏了不复习等于没收藏。",
  "检测到摸鱼行为。",
  "打开生词本。",
  "连续学习要坚持啊！"
];

function speak(word){
  speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(word);
  utter.lang = "en-US";
  utter.rate = 0.9;
  utter.pitch = 1;
  utter.volume = 1;
  speechSynthesis.speak(utter);
}

function checkIn(){
  let days = Number(localStorage.getItem("days") || 0);
  days++;
  localStorage.setItem("days", days);
  render();
}


let idx = Math.floor(Math.random() * words.length);

function render() {
  const w = words[idx];

  const wordBox = document.getElementById('wordBox');
  wordBox.innerHTML = `
    <h3 style="display:flex;align-items:center;gap:10px;">\${w.word} <button onclick="speak(\'\${w.word}\')" style="padding:4px 8px;border:none;border-radius:8px;cursor:pointer;background:#4CAF50;color:white;font-size:14px;">🔊</button></h3>
    <div style="font-size:20px;color:#666;margin:8px 0;">${w.phonetic}</div>
    <div style="font-size:22px;font-weight:bold;color:#333;margin:10px 0;">${w.meaning}</div>
    <div style="margin-top:15px;">${w.example}</div>
    <div style="color:#666;margin-top:8px;">${w.translation}</div>
  `;
  const warningDiv = document.getElementById('warning');
  warningDiv.innerText = warnings[Math.floor(Math.random()*warnings.length)];

  const streakDiv = document.getElementById('checkin');
  streakDiv.innerText = `连续签到：${localStorage.getItem("days") || 0}天`;

  const statsDiv = document.getElementById('stats');
  let bookWords = JSON.parse(localStorage.getItem("wordsBook") || "[]");
  statsDiv.innerHTML = `已收藏单词：${bookWords.length}<br>今日学习：${words.length}`;


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
