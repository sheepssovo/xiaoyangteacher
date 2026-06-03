// 当前单词索引
let idx = Math.floor(Math.random() * words.length);

// 小羊警告语
const warnings = [
  "飞鸟，今天背单词了吗？",
  "收藏了不复习等于没收藏。",
  "检测到摸鱼行为。",
  "打开生词本。",
  "连续学习要坚持啊！",
  "飞鸟，你已经2小时没学英语了。"
];

// 渲染函数
function render() {
  const w = words[idx];

  // 今日单词
  const wordBox = document.getElementById('wordBox');
  wordBox.innerHTML = `
    <h3>${w.word}</h3>
    <div style="font-size:20px;color:#666;margin:8px 0;">${w.phonetic}</div>
    <div style="font-size:22px;font-weight:bold;color:#333;margin:10px 0;">${w.meaning}</div>
    <div style="margin-top:15px;">${w.example}</div>
    <div style="color:#666;margin-top:8px;">${w.translation}</div>
  `;

  // 随机小羊警告
  const warningDiv = document.getElementById('warning');
  warningDiv.innerText = warnings[Math.floor(Math.random() * warnings.length)];

  // 生词本
  const book = document.getElementById('book');
  let bookWords = JSON.parse(localStorage.getItem("book") || "[]");
  book.innerHTML = bookWords
    .map(b => `<div style="padding:8px;border-bottom:1px solid #eee">
                 <b>${b.word}</b> - ${b.meaning}
               </div>`).join("");

  // 连续签到
  const streak = Number(localStorage.getItem("days") || 0);
  document.getElementById('checkin').innerText = `连续签到：${streak}天`;

  // 学习统计
  document.getElementById('stats').innerHTML = `
    已收藏单词：${bookWords.length}<br>
    今日学习：${words.length}
  `;
}

// 换一个单词
function nextWord() {
  idx = Math.floor(Math.random() * words.length);
  render();
}

// 收藏单词
function saveWord() {
  let bookWords = JSON.parse(localStorage.getItem("book") || "[]");
  if (!bookWords.find(x => x.word === words[idx].word)) {
    bookWords.push(words[idx]);
    localStorage.setItem("book", JSON.stringify(bookWords));
  }
  render();
}

// 签到
function checkIn() {
  let days = Number(localStorage.getItem("days") || 0);
  days++;
  localStorage.setItem("days", days);
  render();
}

// 初始化渲染
render();
