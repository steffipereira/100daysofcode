const memoryCards = [
  {
    id:0,
    name: 'jack-spades',
    img: 'images/jack-spades.png'
  },
  {
    id:1,
    name: 'queen-spades',
    img: 'images/queen-spades.png'
  },
  {
    id:2,
    name: 'king-flower',
    img: 'images/king-flower.png'
  },
  {
    id:3,
    name: 'king-hearts',
    img: 'images/king-hearts.png'
  },
  {
    id:4,
    name: 'jack-spades',
    img: 'images/jack-spades.png'
  },
  {
    id:5,
    name: 'queen-spades',
    img: 'images/queen-spades.png'
  },
  {
    id:6,
    name: 'king-flower',
    img: 'images/king-flower.png'
  },
  { id:7,
    name: 'king-hearts',
    img: 'images/king-hearts.png'
  }
]

const grid = document.querySelector('#grid');
const score = document.querySelector('#score');
const final = document.querySelector('.final');
const body = document.querySelector('body');

let chosenCard = [];
let chosenCardId = [];
let cardsWon = 0;

//create your board

function createBoard() {
  memoryCards.forEach(i => {
    let div = document.createElement('div');
    div.classList.add('card','border-0')
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back-card.png');
    cardElement.className = 'card-img';
    cardElement.setAttribute('data-id', i.id);
    cardElement.addEventListener('click', flipCards);
    div.appendChild(cardElement);
    grid.appendChild(div);
  });
  memoryCards.sort(() => 0.5 - Math.random());
}

function checkForMatch() {
  let images = document.querySelectorAll('img');
  console.log(images);
  const firstSelection = chosenCardId[0];
  const secondSelection = chosenCardId[1];
  if (chosenCard[0] === chosenCard[1]){
    images[firstSelection].setAttribute('src', 'images/white.jpg');
    images[secondSelection].setAttribute('src', 'images/white.jpg');
    cardsWon++;
    score.textContent = cardsWon;
    if (cardsWon === 4){
      score.textContent += " Congratulations!!! You won";
     }
  }
  else{
    images[firstSelection].setAttribute('src', 'images/back-card.png');
    images[secondSelection].setAttribute('src', 'images/back-card.png');
  }
  chosenCard = [];
  chosenCardId = [];
}

function flipCards() {
  let cardId = this.getAttribute('data-id');
  chosenCard.push(memoryCards[cardId].name);
  chosenCardId.push(cardId);
  this.setAttribute('src', memoryCards[cardId].img)
  console.log(chosenCard, chosenCardId);
  if (chosenCard.length === 2){
    setTimeout(checkForMatch, 500)
  }
}

function reset() {
  while(body.firstChild) body.removeChild(body.firstChild)
  createBoard();
}

createBoard();
