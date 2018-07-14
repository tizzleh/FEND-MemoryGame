/*
 * Create a list that holds all of your cards
 * Use abstraction as much as possible.
 */

// Define constants
const DECK_EL = $('ul.deck'); // Deck element.
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
let timer = new Timer();
let gameOn = false;
// let timex = timer.getTimeValues().toString()
let times;
let starLength = 3;
// $("#timer").html(currentTime);
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
// Remove cards
function removeCards() {
  DECK_EL.empty();
}

// Add event listener to each card and call 'cardClick' when clicked.
function initialize() {
  card = document.getElementsByClassName('card');
  let cards = [...card]; // We don't know length.
  // Iterate over cards and add event listener.
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', cardClick);
  };
}

window.onload = function() {
  startGame();
};

function startGame() {
  populateCards();
  initialize();
  initStars();
}

function removeShakeClass() {
  // flippedCards[0].classList.remove('shake');// Why won't this work?
  // flippedCards[1].classList.remove('shake');
  $('.shake').removeClass('shake');
}

function incorrect() {
  flippedCards[0].classList.add('animated', 'shake');
  flippedCards[1].classList.add('animated', 'shake');
  flippedCards[0].classList.remove('show', 'open', 'match', 'disableClick');
  flippedCards[1].classList.remove('show', 'open', 'match', 'disableClick');
  setTimeout(function() {
    removeShakeClass();
  }, 400);
  flippedCards = [];
  incrementMove();
  $('.moves').html(moves); // TODO: Create fix for singular/plural.
}

// Reset the game.
function resetGame() {
  removeCards();
  timer.reset();
  timer.stop();
  $(".stars").empty();
  moves = 0;
  $('.moves').html('0');
  $('#timer').html('00:00');
  startGame();
}

// Reset Game when reset button clicked.
$('.restart').on('click', function() {
  resetGame();
})

// If cards match run 'correct' function.
function correct() {
  flippedCards[0].classList.add('show', 'open', 'match', 'animated', 'pulse');
  flippedCards[1].classList.add('show', 'open', 'match', 'animated', 'pulse');
  flippedCards = [];
  numSolved++;
  incrementMove();
  $('.moves').html(moves);
  isGameWon();
}

function resetCard() {
  flippedCards[0].classList.remove('open');
  flippedCards[0].classList.remove('show');
  flippedCards = [];
}

// let timex = $('#timer').html();
// Called when 8 pairs of cards have been matched.
function isGameWon() {
  if (numSolved == 8) {
    let testTimer = $('#timer').html();
    // let stars = $('.stars').html();
    console.log(testTimer);
    console.log(starLength);
    setTimeout(function() {
      vex.dialog.confirm({
        message: `You won the game with a time of ${testTimer}! You did it in ${moves} moves and ${starLength} star(s) remaining. Do you want to play again?`,
        callback: function(value) {
          if (value) {
            resetGame();
          }
        }
      })
      timer.stop();
    }, 200)
  }
}

// Starts timer and begins the counting.
function cardClick(event) {
  let selectedCardClass = this.firstChild.className;
  // Add event listener to timer.
  timer.addEventListener('secondsUpdated', function(event) {
    $('#timer').html(timer.getTimeValues().toString(['minutes', 'seconds']));
  });
  timer.start();
  let length = flippedCards.length;
  flippedCards.push(this);

  // if (this.classList.contains('show')) {

  this.classList.toggle('open');
  this.classList.toggle('show');
  this.classList.add('disableClick');
  console.log('contiains open or show');
  // }
  // Allow user to reset card without penalty.
  if (this == flippedCards[0] && length == 1) {
    resetCard();
  }
  if (length == 1) {
    if (flippedCards[0].firstChild.className === flippedCards[1].firstChild.className) {
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

console.log(times);
// initialize stars display
function initStars() {
  for (let i = 0; i < 3; i++) {
    $(".stars").append(`<li><i class="fa fa-star"></i></li>`);
  }
}

// // reduce star rating
function decStar() {
  let stars = $(".fa-star");
  $(stars[stars.length - 1]).toggleClass("fa-star fa-star-o");
  starLength--;
}
// // create individual card element
function createCard(cardClass) {
  DECK_EL.append(`<li class="card"><i class="fa ${cardClass}"></i></li>`);
}

function populateCards() {
  shuffle(ALL_CARDS // Shuffle cards
      .concat(ALL_CARDS)) // Concat cards to duplicate.
    .forEach(createCard); // Iterate through cards and append.
}
//
// // increment move count
function incrementMove() {
  moves++;
  $("#moves").html(moves);
  if (moves === 12 || moves === 18 || moves === 24) {
    decStar();
  }
}
//