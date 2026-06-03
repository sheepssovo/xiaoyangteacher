// 今日单词索引
let idx = Math.floor(Math.random() * words.length);

// 小羊警告
const warnings = [
    "飞鸟，今天单词可别忘了！",
    "收藏了不要忘学习哦~",
    "检测到偷懒行为~",
    "打开生词本~",
    "连续学习要坚持啊！",
    "飞鸟，你已经2小时没学英语了~"
];

// 渲染函数
function render() {
    const w = words[idx];

    // 今日单词
    const wordBox = document.getElementById('word');
    wordBox.innerHTML = `
        <h3 style="font-size:20px;color:#333;">${w.word}</h3>
        <div style="font-size:22px;font-weight:600;margin-top:10px;">${w.phonetic}</div>
        <div style="margin-top:15px;">${w.translation}</div>
        <div style="color:#666;margin-top:8px;">${w.example}</div>
        <div style="color:#999;margin-top:5px;">${w.exampleTranslation}</div>
    `;

    // 美式读音按钮
    const speakBtn = document.getElementById('speak');
    speakBtn.onclick = () => {
        const utterance = new SpeechSynthesisUtterance(w.word);
        utterance.lang = 'en-US';
        speechSynthesis.speak(utterance);
    };

    // 随机小羊警告
    const warningDiv = document.getElementById('warning');
    warningDiv.innerText = warnings[Math.floor(Math.random() * warnings.length)];

    // 生词本
    const book = document.getElementById('book');
    let bookWords = JSON.parse(localStorage.getItem('bookWords') || '[]');
    book.innerHTML = bookWords
        .map(b => `<div style="padding:8px 0;border-bottom:1px solid #eee;"><b>${b.word}</b> - ${b.translation}</div>`)
        .join('');

    // 连续签到
    const streak = Number(localStorage.getItem('streak') || 0);
    document.getElementById('checkin').innerText = `已签到 ${streak} 天`;

    // 学习统计
    document.getElementById('stats').innerHTML = `
        总单词量: ${words.length} <br>
        已收藏: ${bookWords.length}
    `;
}

// 换一个
document.getElementById('next').onclick = () => {
    idx = Math.floor(Math.random() * words.length);
    render();
};

// 收藏
document.getElementById('collect').onclick = () => {
    let bookWords = JSON.parse(localStorage.getItem('bookWords') || '[]');
    const w = words[idx];
    if (!bookWords.some(b => b.word === w.word)) {
        bookWords.push({ word: w.word, translation: w.translation });
        localStorage.setItem('bookWords', JSON.stringify(bookWords));
        render();
    }
};

// 页面加载
window.onload = render;
