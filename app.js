const wordEl = document.getElementById('word');
const phoneticEl = document.getElementById('phonetic');
const meaningEl = document.getElementById('meaning');
const exampleEl = document.getElementById('example');
const playBtn = document.getElementById('play-pronounce');
const nextBtn = document.getElementById('next-word');
const saveBtn = document.getElementById('save-word');
const vocabListEl = document.getElementById('vocab-list');
const warningMsgEl = document.getElementById('warning-msg');
const checkinBtn = document.getElementById('checkin-btn');
const checkinCountEl = document.getElementById('checkin-count');
const totalWordsEl = document.getElementById('total-words');
const savedCountEl = document.getElementById('saved-count');

let currentWordIndex = 0;
let savedWords = JSON.parse(localStorage.getItem('savedWords')) || [];
let checkinCount = parseInt(localStorage.getItem('checkinCount')) || 0;

function showWord(index) {
    const wordObj = words[index];
    wordEl.textContent = wordObj.word;
    phoneticEl.textContent = wordObj.phonetic;
    meaningEl.textContent = wordObj.meaning;
    exampleEl.textContent = wordObj.example;
}

function nextWord() {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    showWord(currentWordIndex);
    showWarning();
}

function saveWord() {
    const wordObj = words[currentWordIndex];
    if (!savedWords.some(w => w.word === wordObj.word)) {
        savedWords.push(wordObj);
        localStorage.setItem('savedWords', JSON.stringify(savedWords));
        updateVocab();
    }
}

function updateVocab() {
    vocabListEl.innerHTML = '';
    savedWords.forEach(w => {
        const li = document.createElement('li');
        li.textContent = w.word + ' - ' + w.meaning;
        vocabListEl.appendChild(li);
    });
    savedCountEl.textContent = savedWords.length;
}

function showWarning() {
    const messages = [
        '不要偷懒，要坚持学习!',
        '记得复习昨天的单词哦!',
        '专心一点，小羊盯着你呢!',
        '再不学习就要发出警告啦!'
    ];
    const msg = messages[Math.floor(Math.random() * messages.length)];
    warningMsgEl.textContent = msg;
}

function playPronunciation() {
    const wordObj = words[currentWordIndex];
    const utter = new SpeechSynthesisUtterance(wordObj.word);
    utter.lang = 'en-US';
    speechSynthesis.speak(utter);
}

function checkin() {
    checkinCount += 1;
    localStorage.setItem('checkinCount', checkinCount);
    checkinCountEl.textContent = checkinCount;
}

nextBtn.addEventListener('click', nextWord);
saveBtn.addEventListener('click', saveWord);
playBtn.addEventListener('click', playPronunciation);
checkinBtn.addEventListener('click', checkin);

totalWordsEl.textContent = words.length;
checkinCountEl.textContent = checkinCount;

showWord(currentWordIndex);
updateVocab();
showWarning();
