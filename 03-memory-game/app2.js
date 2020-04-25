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

const grid = document.querySelector('.grid');

  memoryCards.sort(() => 0.5 - Math.random())

  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  const cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < memoryCards.length; i++) {
      var img = document.createElement('img')
      img.setAttribute('src', 'images/back-card.png')
      img.setAttribute('data-id', i)
      img.addEventListener('click', flipCard)
      grid.append(img)
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
      console.log(cardsChosen);
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.jpg')
      cards[optionTwoId].setAttribute('src', 'images/white.jpg')
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/back-card.png')
      cards[optionTwoId].setAttribute('src', 'images/back-card.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === memoryCards.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(memoryCards[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', memoryCards[cardId].img)
    console.log(cardsChosen, cardsChosenId);
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
