'use strict';
// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = 'Correct number!'
//
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
//
// console.log(document.querySelector('.guess').value)
// document.querySelector('.guess').value = 23;

document.querySelector('.check').addEventListener('click', () => {
    const guess =Number(document.querySelector('.guess').value)

    if(!guess) {
        document.querySelector('.message').textContent = 'No number'
    }
})