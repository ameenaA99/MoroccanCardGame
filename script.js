// عناصر اللعبة الأساسية
const startGameBtn = document.getElementById('start-game');
const gameArea = document.getElementById('game-area');

// إنشاء مجموعة الكروت
const cards = [
    "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
];

// بدء اللعبة
startGameBtn.addEventListener('click', () => {
    gameArea.innerHTML = ''; // تنظيف المنطقة
    shuffleAndDisplayCards();
});

// خلط الكروت
function shuffleAndDisplayCards() {
    const shuffledCards = cards.sort(() => Math.random() - 0.5);
    shuffledCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.textContent = card;
        cardElement.addEventListener('click', () => selectCard(card));
        gameArea.appendChild(cardElement);
    });
}

// عند اختيار الكرت
function selectCard(card) {
    alert(`اخترت الكرت: ${card}`);
}
