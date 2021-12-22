//memory game

document.addEventListener('DOMContentLoaded', ()=>{

  //card options
  const cardArr = [
    {
      name: '1',
      img: 'img/1.png'
    },
    {
      name: '1',
      img: 'img/1.png'
    },
    {
      name: '2',
      img: 'img/2.png'
    },
    {
      name: '2',
      img: 'img/2.png'
    },
    {
      name: '3',
      img: 'img/3.png'
    },
    {
      name: '3',
      img: 'img/3.png'
    },
    {
      name: '4',
      img: 'img/4.png'
    },
    {
      name: '4',
      img: 'img/4.png'
    },
    {
      name: '5',
      img: 'img/5.png'
    },
    {
      name: '5',
      img: 'img/5.png'
    },
    {
      name: '6',
      img: 'img/6.png'
    },
    {
      name: '6',
      img: 'img/6.png'
    },
    {
      name: '7',
      img: 'img/7.png'
    },
    {
      name: '7',
      img: 'img/7.png'
    },
    {
      name: '8',
      img: 'img/8.png'
    },
    {
      name: '8',
      img: 'img/8.png'
    },
  ];

  cardArr.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const result = document.querySelector('#result');

  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  //create game board

  function createBoard() {
    for(let i = 0; i < cardArr.length; i++){
      var card = document.createElement('img');
      card.setAttribute('src', 'img/blank.jpg');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);

    }
  }
  //check for match
  function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if(optionOneId == optionTwoId){
      cards[optionOneId].setAttribute('src', 'img/blank.png')
      cards[optionTwoId].setAttribute('src', 'img/blank.png')
      // alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      // alert('You found a match');
      cards[optionOneId].setAttribute('src', 'img/black.jpg');
      cards[optionTwoId].setAttribute('src', 'img/black.jpg');
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen);
    }
    else {
      cards[optionOneId].setAttribute('src', 'img/blank.jpg');
      cards[optionTwoId].setAttribute('src', 'img/blank.jpg');
      // alert('Sorry, try again');
    }

    cardsChosen = [];
    cardsChosenId = [];
    result.textContent = cardsWon.length;

    if(cardsWon.lenght === cardArr.lenght /2){
      result.textContent = 'Congratulation! You found them all!';
    }

  }


  //flip your card
  
  function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArr[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArr[cardId].img);

    if(cardsChosen.length === 2){
      setTimeout(checkForMatch, 500);
    }

  }


  createBoard();


})