/*
 * Create a list that holds all of your cards
 * Use abstraction as much as possible.
 */

const ALL_CARDS = ['fa-leaf', // Concatenating saves having to duplicate.
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
let visibleCards = [];
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

function populateCards() {
  shuffle(ALL_CARDS // Shuffle cards
      .concat(ALL_CARDS)) // Concat cards to duplicate.
    .forEach(populateCards); // Iterate through cards and append.
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