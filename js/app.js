/*
 * Create a list that holds all of your cards
 * Use abstraction as much as possible.
 */

// let card = document.querySelectorAll('li.card');
const DECK_EL = $('ul.deck'); // Deck element.
// const CARD_EL = $('.card'); // Card element.
// const CARD = $('card').each(function(index) {
//   console.log(index + ": " + $(this).text());
// });
// CARD.on('click', function() {
//   alert('hello');
// });

const ALL_CARDS = ['fa-leaf',
  'fa-diamond',
  'fa-bolt',
  'fa-anchor',
  'fa-bomb',
  'fa-paper-plane-o',
  'fa-cube',
  'fa-bicycle'
];

// Set variables, use according to style-guide.
let moves = 0;
let flippedCards = [];
let currentTime = 0;
let numSolved = 0;
let begin = false;
let timer;
let gameOn = false;
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

function shuffle(arr) {
  return arr
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);
}

function initialize() {
  card = document.getElementsByClassName('card');
  let cards = [...card]; // We don't know length. ES6 allows this.
  // Iterate over cards and add event listener.
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', cardClick);
  };
}
window.onload = function() {
  populateCards();
  initialize();
};

function removeShakeClass() {
  // flippedCards[0].classList.remove('shake');
  // flippedCards[1].classList.remove('shake');
  $('.shake').removeClass('shake');
}

function incorrect() {
  console.log('incorrect');
  // if (flippedCards[0].classList.contains('card') {
  //     // console.log('Contains Class "card"');
  //   });
  // if (flippedCards[0].classList.contains('shake') || flippedCards[1].classList.contains('shake')) {
  //   console.log('Contains shake');
  //   removeShakeClass();
  //
  // }
  // setTimeout(function() {

  // flippedCards[0].classList.toggle('shake', 'animated');
  // flippedCards[1].classList.add('shake', 'animated');
  // }, 400);
  $('.shake').removeClass('shake');
  flippedCards[0].classList.remove('show', 'open', 'match');
  // flippedCards[0].classList.remove('animated', 'shake');
  flippedCards[0].classList.add('animated', 'shake');
  flippedCards[1].classList.add('animated', 'shake');
  flippedCards[1].classList.remove('show', 'open', 'match');
  setTimeout(function() {
    removeShakeClass();
  }, 400);
  flippedCards = [];
}


function correct() {
  console.log('correct');
  console.log(flippedCards[0]);
  flippedCards[0].classList.add('show', 'open', 'match', 'animated', 'pulse');
  flippedCards[1].classList.add('show', 'open', 'match', 'animated', 'pulse');
  flippedCards = [];
  numSolved++;
  console.log(numSolved);
  isGameWon();
}

function isGameWon() {

  if (numSolved == 8) {
    console.log('You won');
    alert('you wong')
  }
}

function cardClick(event) {
  let selectedCardClass = this.firstChild.className;
  let length = flippedCards.length;
  flippedCards.push(this);
  this.classList.toggle('open');
  this.classList.toggle('show');
  // this.removeEventListener('click', cardClick); // Crude way to keep user from selecting twice
  if (length == 1) {
    console.log('length = 2');
    console.log(flippedCards[0].firstChild.className);
    if (flippedCards[0].firstChild.className === flippedCards[1].firstChild.className) {
      console.log('matchedSets');
      if (flippedCards[0].id === flippedCards[1].id) {
        removeShakeClass();
        correct();
      }
    } else {
      setTimeout(function() { // Card flips too quickly to see without timeout.
        incorrect();
      }, 400);
    }
  }
}
// initialize stars display
function initStars() {
  for (let i = 0; i < 3; i++) {
    $(".stars").append(`<li><i class="fa fa-star"></i></li>`);
  }
}

// reduce star rating
function decStar() {
  let stars = $(".fa-star");
  $(stars[stars.length - 1]).toggleClass("fa-star fa-star-o");
}
// create individual card element
function createCard(cardClass) {
  DECK_EL.append(`<li class="card"><i class="fa ${cardClass}"></i></li>`);
}
// Add random classes to each card element.
function populateCards() {
  shuffle(ALL_CARDS // Shuffle cards
      .concat(ALL_CARDS)) // Concat cards to duplicate.
    .forEach(createCard); // Iterate through cards and append.
}

// starts the timer
function startTimer() {
  currentTime += 1;
  $("#timer").html(currentTime);
  seconds = setTimeout(startTimer, 1000);
  if (seconds > 60) {
    min = seconds / 60;
    console.log(min);
  }
}

// increment move count
function incrementMove() {
  moves += 1;
  $("#moves").html(moves);
  if (moves === 14 || moves === 20) {
    decStar();
  }
}