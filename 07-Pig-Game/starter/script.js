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


//starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//rolling dice functionality
btnRoll.addEventListener('click', () => {
    // generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

   // display the dice
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;

   //check for rolled1: if true switch new player
    if(dice !== 1) {
        //add current score
        currentScore += dice;
        current0EL.textContent = currentScore;


    } else {
        //switch new player
    }
})


