'use strict';
// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = 'Correct number!'
//
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
//
// console.log(document.querySelector('.guess').value)
// document.querySelector('.guess').value = 23;

let secretNumber = Math.floor(Math.random() * 20) + 1
let score = 20
let highscore = 0

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message
}


document.querySelector('.check').addEventListener('click', () => {
    const guess =Number(document.querySelector('.guess').value)

    if(!guess) {
      displayMessage('No number')
    } else if (secretNumber === guess) {
        displayMessage('Correct number')
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = (guess > secretNumber) ?
            //     '📈 Too high!' :
            //     '📉 Too low!'
            guess > secretNumber ? displayMessage('📈 Too high!') : displayMessage('📉 Too low!')
            score--
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game!')
            document.querySelector('.score').textContent = 0;
        }
    }
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too low!'
    //         score--
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game!'
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
})

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = secretNumber = Math.floor(Math.random() * 20) + 1
    displayMessage('Start guessing...')
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = '?'
})

///////////////////////////////////////
// Coding Challenge #1

/*
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/