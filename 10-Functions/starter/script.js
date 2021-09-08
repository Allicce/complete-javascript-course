'use strict';
// const bookings = []
// //es6
// const createBooking = (flightNum, numPassengers = 1, price = 199 * numPassengers) => {
//     //before es6
//     // numPassengers = numPassengers || 1;
//     // price = price || 199
//     const booking = {
//         flightNum, numPassengers, price
//     }
//     console.log(booking)
//     bookings.push(booking)
// }
//
// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 5);
// createBooking('LH123', 6);
//
// createBooking('LH123', undefined, 1000);

// const flight = 'LH123';
// const jonas = {
//     name: 'Jonas Schedtmann',
//     passport: 12354866331
// }
//
// const checkIn = (flightNum, passenger) => {
//     flightNum = 'LH999'
//     passenger.name = 'Mr.' + passenger.name
//
//     if(passenger.passport === 12354866331) {
//         alert('Checked in')
//     } else {
//         alert('Wrong Passport')
//     }
// }
//
// // checkIn(flight, jonas);
// // console.log(flight);
// // //name is rewrite to Mr. Jonas...
// // console.log(jonas);
//
// //create issue
// const newPassport = (person) => {
//     person.passport = Math.trunc(Math.random() * 100000000000)
// }
//
// newPassport(jonas);
// checkIn(flight, jonas);

//passing with reference is not existing in js only passing with value and in the value is saved reference to object

// const oneWord = (str) => {
//     return str.replace(/ /g, '').toLowerCase();
// }
//
// const upperFirstWord = (str) => {
//     const [first, ...others] = str.split(' ')
//     return [first.toUpperCase(), ...others].join(' ')
// }
//
// //higher-order function
// const transformer = (str, fn) => {
//     console.log('original string: ', str);
//     console.log('transform by: ', fn.name);
//     console.log('transformer string: ', fn(str));
// }
//
// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);
//
// const high5 = () => {
//     console.log('high5')
// }
//
// document.body.addEventListener('click', high5);
//
// ['Jonas', 'Martina', 'Adam'].forEach(high5);


// const greet = (greeting) => {
//     return function(name) {
//         console.log(`${greeting} ${name}`)
//     }
// }

// //shorter
// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`)
//
// //Closures
// const greeterHey = greet('Hey');
// greeterHey('Jonas')
// greeterHey('Adam')
//
// greet('Hello')('Jonas');

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    booking: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
        this.booking.push({flight: `${this.iataCode}${flightNum}`, name})
    }
}

lufthansa.book(239, 'Jonas Schedtmann')
lufthansa.book(635, 'John Smith')

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    booking: [],
}

const book = lufthansa.book

// 1. option to call method this on function - 1 parameter in call is where is bind this keywords and then we added
// others parameters from originals function
book.call(eurowings, 23, 'Sarah Wiliams')
console.log(eurowings)

book.call(lufthansa, 235, 'Mary Cooper')
console.log(lufthansa)

const swiss = {
    airline: 'Swiss',
    iataCode: 'LX',
    booking: [],
}

book.call(swiss, 583, 'Marry Cooper')
console.log(swiss)

//2. apply method - is not used in modern javascript any more
const flightData = [583, 'George Cooper']
book.apply(swiss, flightData)
console.log(swiss)

//bind method - not call a book function - return new function
const bookEW = book.bind(eurowings)
const bookLH = book.bind(lufthansa)
const bookLX = book.bind(swiss)

bookEW(23, 'Steven Williams')
console.log(eurowings)

//we can preset other parameters from book function
const bookEW23 = book.bind(eurowings, 23)
bookEW23('Jonas Schedtmann')

//with event listeners
lufthansa.planes = 300
lufthansa.buyPlane = function() {
    console.log(this)

    this.planes ++
    console.log(this.planes)
}

//this keyword is point to button element
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane)

//fix with bind
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))
//
// //partial aplication
// const addTax = (rate, value) => value + value * rate
// console.log(addTax(0.1, 200))
//
// const addVat = addTax.bind(null, 0.23)
// console.log(addVat(100))
//
// const addTaxRate = function (rate) {
//     return function (value) {
//         return value + value * rate
//     }
// }
//
// const addVAT2 = addTaxRate(0.23)
// console.log(addVAT2(100))

///////////////////////////////////////
// Coding Challenge #1

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)

  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = Number (prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`))

        typeof answer === 'number' &&
        answer < this.answers.length &&
        this.answers[answer]++

        this.displayResults()
        this.displayResults('string')
    },
    displayResults(type = 'array') {
        if(type === 'array') {
            console.log(this.answers)
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`)
        }
    }
}

document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll));

//poll.registerNewAnswer()

// [5, 2, 3]

poll.displayResults.call({answers: [5, 2, 3]}, 'string')