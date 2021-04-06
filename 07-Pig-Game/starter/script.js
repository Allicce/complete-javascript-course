'use strict';

//selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');

let scores;
let currentScore;
let activePlayer;
let playing;

//starting condition
const init = () => {
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    diceEl.classList.add('hidden');
    player0EL.classList.remove('player--winner');
    player1EL.classList.remove('player--winner');
    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active');
}

init();

const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
}

//rolling dice functionality
btnRoll.addEventListener('click', () => {
    if(playing) {
        // generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // display the dice
        diceEl.classList.remove('hidden');
        diceEl.src=`dice-${dice}.png`;

        //check for rolled1: if true switch new player
        if(dice !== 1) {
            //add current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            // current0EL.textContent = currentScore;


        } else {
            //switch new player
            switchPlayer();
        }

    }

})

btnHold.addEventListener('click', () => {
    if(playing) {
        //1. add current score to active player
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        //check if the score >=100
        if(scores[activePlayer] >= 20) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');

        } else {
            //switch to new player
            switchPlayer();
        }
    }
})

btnNew.addEventListener('click', init)


