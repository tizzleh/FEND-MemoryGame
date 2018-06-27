/*
 * Create a list that holds all of your cards
 * Use abstraction as much as possible.
 */

// let card = document.querySelectorAll('li.card');
const DECK_EL = $('ul.deck'); // Deck element.
const CARD_EL = $('.card'); // Deck element.
const CARD = $('card').each(function(index) {
  console.log(index + ": " + $(this).text());
});
CARD.on('click', function() {
  alert('hello');
});

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
// Event handler should be called after creation of card elements.
function cardClicked(e) {

}
// card.click();

// card.on('click', function() {
//   alert('clicked');
// });
// init game
function initialize() {
  // let card = document.querySelector('.card');
  // let allCards = card.querySelectorAll();
  // card.onclick = showAlert;
  // CARD_EL.on('click', function() {
  // cards array holds all cards
  let card = document.getElementsByClassName('card');
  let cards = [...card];
  // loop to add event listeners to each card
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', cardClick);
  };
  // cardClicked();
  // });
}

function cardClick() {
  this.classList.toggle("open");
  this.classList.toggle("show");
  this.classList.toggle("disabled");
}

function showAlert(event) {
  alert('clicked');
}
$('.card').on('click', function() {
  // showAlert();
  alert('hello');
  // clickCard();
  // return $(this).firstChild.className
});


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
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */