/*
 * Create a list that holds all of your cards
 * Use abstraction as much as possible.
 */

// let card = document.querySelectorAll('li.card');
const DECK_EL = $('ul.deck'); // Deck element.
// const CARD_EL = $('.card'); // Deck element.
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
let visibleCards = []; // An array is used to compare visible cards.
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
  // loop to add event listeners to each card
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', cardClick);
  };
  // cardClicked();
  // });
}
window.onload = function() {
  populateCards();
  initialize();
};


function incorrect() {
  console.log('incorrect');
  flippedCards[0].classList.remove('show', 'open', 'match');
  flippedCards[1].classList.remove('show', 'open', 'match');
  flippedCards = [];
}


function correct() {
  console.log('correct');
  console.log(flippedCards[0]);
  flippedCards[0].classList.add('show', 'open', 'match', 'animated', 'pulse');
  flippedCards[1].classList.add('show', 'open', 'match', 'animated', 'pulse');
  flippedCards = [];
}

function cardClick(event) {
  let selectedCardClass = this.firstChild.className;
  let length = flippedCards.length;
  flippedCards.push(this);
  this.classList.toggle('open');
  this.classList.toggle('show');
  if (length == 1) {
    console.log('length = 2');
    console.log(flippedCards[0].firstChild.className);
    if (flippedCards[0].firstChild.className == flippedCards[1].firstChild.className) {
      console.log('matchedSets');
      if (flippedCards[0].id === flippedCards[1].id) {

        correct();
      }
    } else {
      setTimeout(function() { // Card flips too quickly too see without timeout.
        incorrect();
      }, 400);
    }
  }
}



function cardClass(cardClass) {
  return firstChild.className;
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

function startGame() {
  DECK_EL.on('click', function() {

    alert('hello');
  });
}
// Check if game is running on click event, start if needed. Check visible cards.
function clickCard(e) {
  let cardClass = $(this).attr('class');
  console.log(classes);
}