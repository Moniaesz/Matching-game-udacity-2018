// array of all cards 
let cards = ['fa-diamond','fa-diamond', 'fa-paper-plane-o','fa-paper-plane-o', 
         'fa-anchor','fa-anchor', 'fa-bolt', 'fa-bolt','fa-cube', 'fa-cube', 'fa-leaf','fa-leaf', 
         'fa-bicycle', 'fa-bicycle','fa-bomb','fa-bomb'];

// needed variables
let openCards;
let matchedCards;
let moves;
let allowed;
let s;
let sEl = document.getElementById('s');
let play;

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
var currentIndex = array.length;
var temporaryValue;
var randomIndex;

while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; 
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
}
return array;
}

//creating new deck of cards
function startGame() {
//reset all variables
s = 0;
openCards = [];
matchedCards = 0;
moves = 0;
countedMoves = 0;
allowed = true;
updateMoves();
updateSeconds();
starRating(0, '.stars li');
play = false;

//remove children of deck
$('.deck').children().remove();
// shuffle cards with provided function
// loop through each card and ad it's HTML to page
shuffle(cards);
for(const card of cards) {
    $('.deck').append(`<li class="card"><i class="fa ${card} "></i></li>`);
}
}

// updating number of moves in text field
function updateMoves () {
$('.moves').text(moves);
}

// change star rating panel function
function starRating(lostLife, selector) {
let starArray = $(selector).children().toArray();
// console.log(selector);
$(starArray).attr('class', 'fa fa-star');
while (lostLife > 0) {
    $(starArray.pop()).attr('class', 'fa fa-star-o');
    lostLife--;
}
}

//check number of moves and call starRating function to set proper stars accordingly
function calculateLostLife() {

if (moves > 10) {
    return 3;
}  
if (moves > 7) {
    return 2;
}  
if (moves > 5) {
    return 1;
}
return 0;
}

// move counter
function counter() {
moves++;
updateMoves();
starRating(calculateLostLife(), '.stars li');
}

// set timer 
//timer from https://stackoverflow.com/questions/27836667/stopwatch-in-seconds-and-milliseconds
setInterval(function() {
if (!play) return; // (play === false)
s += 1;
updateSeconds();

}, 1000);

function updateSeconds() {
sEl.innerText = s;
}

// clicking card functionality
$(".deck").on('click','.card', function() {
if (!allowed) return false;
if (!play) play = true;

// disable clicking on more than 2 unmatched cards or cards with 'match' class
if ((openCards.length < 2) && (! $(this).hasClass('open show')) && (! $(this).hasClass('match'))) {
    // changing star panel due to number of moves    
    counter();

    // show card on click
    $(this).addClass('open show');
    openCards.push(this);
}

//matching card logic
if (openCards.length === 2) {
    if ($(openCards[0]).children().attr('class') === $(openCards[1]).children().attr('class')) 
    {
        $(openCards).addClass('match');
        matchedCards++;
    }
    allowed = false
    setTimeout(function() {
        $(openCards).removeClass('open show');
        openCards = [];
        if (play) {
            allowed = true;
        }   
    }, 500)  
}

// showing modal popup after completing game
if (matchedCards === 1) {
    play = false;
    allowed = false;
    modalPop();
}
});

// restart game by calling startGame function
$('.restart').on('click', function() {
startGame();
});

// modal source
// https://www.w3schools.com/howto/howto_css_modals.asp

var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// open the modal
function modalPop() {
$('.modalMoves').text(moves);
$('.modalSeconds').text(s);
starRating(calculateLostLife(), '.modal-stars li');
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// restart game with restart icon on modal 
$('.modal-restart').on('click', function() {
modal.style.display = "none";
startGame();
});


startGame();