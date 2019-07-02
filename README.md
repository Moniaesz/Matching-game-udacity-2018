### MATCHING GAME

This game is a project made for Nanodegree Program by Udacity&Google in Front-end Path.
Game is based on HTML, CSS, Javascript and jQuery.

### HOW TO START

* clone the repository https://github.com/Moniaesz/Matching-game-udacity-2018.git

Open index.html and play!

* or go to live preview: https://moniaesz.github.io/matching-game/

### GAME FEATURES

Game consist of deck of cards and panel with star rating, move counter, timer and restart button.

* Stars inform You about the level of Your skills and are based on numbers of moves You made to complete game successfully. At the beginning there are 3 full- coloured stars. Inside colour disappears accordingly when You hit over 20 (first star), 30 (second star), 40 (third star). 

* Move counter shows You number of moves –  it’s incremented each time one card is flipped on click.   

* Timer shows time in seconds. It starts when first card is clicked and stopps while last pair is matched.

* Restart button enables You to start new game (with timer, stars and moves reset). After reset, cards are shuffled randomly.

### GAME RULES

You goal is to find all matching card within shortest time and less possible number of moves. 

Actions in each turn:

* You can flip only two cards at the time and memorize the card symbol. 

* If cards doesn't match, after 1 second after flipping second card – both cards are flipping back to the deck. 

* When card’s symbol are matched  (flipped together in one turn), card colour is changing and both card stays flipped on the deck. 

* When all cards are matched You will get the information that sums up Your time, number of moves and star rating.

### GAME DEPENDENCIES:

* Function for random cards shuffle: http://stackoverflow.com/a/2450976
* Modal pop-up based on // https://www.w3schools.com/howto/howto_css_modals.asp
* Timer based on https://stackoverflow.com/questions/27836667/stopwatch-in-seconds-and-milliseconds
