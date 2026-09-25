const game = document.getElementById('game');
const resetButton = document.getElementById('reset-game');

const optionnalText = document.getElementById('opt');

const startButton = document.getElementById('start-button');

startButton.addEventListener('click', () => {
    game.classList.remove('disabled');
    startButton.classList.add('disabled');

    initGame();
})

let dimension = 150;

const filenames = [
    'Cruelty','Curiosity','Falsity',
    'Lovity','Moggity','MonsterVerity',
    'Obesity','Verity','VerityCreepyOpen',
    'VerityDispleased'
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
    cards = shuffle(cards);
    cards.forEach(card => {
        console.log(card);
        const cardElement = document.createElement('button');
        cardElement.className = 'card';
        cardElement.innerHTML = `<span class="card-face card-back"></span>
                                <span class="card-face card-front><img src=${card}></span>`
        cardElement.setAttribute('aria-label', 'Card face down');
        grid.appendChild(cardElement);
    });
}