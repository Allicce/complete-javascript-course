'use strict';
// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = 'Correct number!'
//
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
//
// console.log(document.querySelector('.guess').value)
// document.querySelector('.guess').value = 23;

const secretNumber = Math.floor(Math.random() * 20) + 1
let score = 20
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', () => {
    const guess =Number(document.querySelector('.guess').value)

    if(!guess) {
        document.querySelector('.message').textContent = 'No number'
    } else if (secretNumber === guess) {
        document.querySelector('.message').textContent = 'Correct number'
    } else if (guess > secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Too high!'
            score--
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!'
            document.querySelector('.score').textContent = 0;
        }

    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low!'
            score--
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!'
            document.querySelector('.score').textContent = 0;
        }
    }


})