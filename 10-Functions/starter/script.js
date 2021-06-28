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

const oneWord = (str) => {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = (str) => {
    const [first, ...others] = str.split(' ')
    return [first.toUpperCase(), ...others].join(' ')
}

//higher-order function
const transformer = (str, fn) => {
    console.log('original string: ', str);
    console.log('transform by: ', fn.name);
    console.log('transformer string: ', fn(str));
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = () => {
    console.log('high5')
}

document.body.addEventListener('click', high5);

['Jonas', 'Martina', 'Adam'].forEach(high5);