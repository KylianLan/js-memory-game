const game = document.getElementById('game');
const resetButton = document.getElementById('reset-game');

const optionnalText = document.getElementById('opt');

const startButton = document.getElementById('start-button');

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matchedCount = 0;

startButton.addEventListener('click', () => {
    game.classList.remove('disabled');
    resetButton.classList.remove('disabled');
    startButton.classList.add('disabled');

    initGame();
});

resetButton.addEventListener('click', () => {
    game.classList.remove('disabled');
    resetButton.classList.remove('disabled');
    startButton.classList.add('disabled');

    initGame();
});

let dimension = 150;

const filenames = [
    'Cruelty','Curiosity','Falsity',
    'Lovity','Moggity',
    'Verity','VerityCreepyOpen', 'VerityDispleased'
];
const images = filenames.map(name => `./images/${name}.webp`);
let cards = [...images, ...images];


function shuffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
}

function initGame() {

    game.querySelectorAll('.card').forEach(el => el.remove());
    
    cards = shuffle(cards);

    cards.forEach(card => {
        // console.log(card.split('./images/')[1]);
        const cardElement = document.createElement('button');
        cardElement.className = 'card card-hidden';
        cardElement.type = 'button';

        cardElement.setAttribute('role', 'button');
        cardElement.setAttribute('tabindex','0');

        cardElement.innerHTML = `
            <span class="card-face card-front"><img src="${card}" alt="Carte"></span>
        `;

        cardElement.setAttribute('aria-label', 'Carte de jeu');
        cardElement.addEventListener('click', () => handleCardClick(cardElement));

        cardElement.dataset.value = card.split('./images/')[1];
        console.log(cardElement.dataset)
        game.appendChild(cardElement);
    });
}

function handleCardClick(card) {
    if (lockBoard || card === firstCard) return;
    if (!card.classList.contains('card-hidden')) return;

    card.classList.remove('card-hidden');

    if (!firstCard) {
        firstCard = card;
        return;
    }

    secondCard = card;
    lockBoard = true;
    moves++;

    checkMatch();
}

function checkMatch() {
    if (firstCard.dataset.value == secondCard.dataset.value) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        firstCard = null;
        secondCard = null;
        lockBoard = false;
        matchedCount += 2;
        
    } else {
        setTimeout(() => {
            firstCard.classList.add('card-hidden');
            secondCard.classList.add('card-hidden');
            firstCard = null;
            secondCard = null;
            lockBoard = false;
        },
        800);
        
    }
    
}