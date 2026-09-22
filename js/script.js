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
}