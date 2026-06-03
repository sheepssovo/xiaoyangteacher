// 随机索引
let idx = Math.floor(Math.random() * words.length);

// 小羊警告
const warnings = [
  "🐑，今天学习单词了吗？",
  "收藏了不复习等于没收藏。",
  "检测到懒惰行为。",
  "打开生词本。",
  "连续学习要坚持哦！",
  "飞鸟，你已经2小时没学英语了。"
];

// 渲染函数
function render() {
  const w = words[idx];

  // 今日单词显示
  const wordBox = document.getElementById('wordBox');
  wordBox.innerHTML = `
    <div style="font-size:20px;font-weight:bold;">${w.word} 
      <button onclick="playAudio('${w.word}')">🔊</button>
    </div>
    <div style="font-size:18px;color:#555;margin-top:8px;">${w.phonetic}</div>
    <div style="margin-top:8px;">${w.meaning}</div>
    <div style="margin-top:10px;color:#666;">${w.example}<br>${w.exampleCn}</div>
  `;

  // 随机小羊警告
  const warningDiv = document.getElementById('warning');
  warningDiv.innerText = warnings[Math.floor(Math.random() * warnings.length)];

  // 生词本
  const book = document.getElementById('book');
  const bookWords = JSON.parse(localStorage.getItem('bookWords') || '[]');
  book.innerHTML = bookWords.map(b => `<div>${b.word} - ${b.meaning}</div>`).join('');

  // 签到统计
  const streak = Number(localStorage.getItem('streak') || 0);
  document.getElementById('checkin').innerText = `已签到 ${streak} 天`;

  // 学习统计
  const stats = document.getElementById('stats');
  stats.innerHTML = `
    总单词量: ${words.length}<br>
    已收藏: ${bookWords.length}
  `;
}

// 播放音标发音
function playAudio(word) {
  const audio = new Audio(`https://dict.youdao.com/dictvoice?audio=${word}&type=1`);
  audio.play();
}

// 换一个
document.getElementById('changeWord').onclick = () => {
  idx = Math.floor(Math.random() * words.length);
  render();
};

// 收藏
document.getElementById('collectWord').onclick = () => {
  const bookWords = JSON.parse(localStorage.getItem('bookWords') || '[]');
  const w = words[idx];
  if (!bookWords.find(b => b.word === w.word)) {
    bookWords.push(w);
    localStorage.setItem('bookWords', JSON.stringify(bookWords));
  }
  render();
};

// 连续签到
document.getElementById('checkinBtn').onclick = () => {
  let streak = Number(localStorage.getItem('streak') || 0);
  streak += 1;
  localStorage.setItem('streak', streak);
  render();
};

// 初次渲染
render();
