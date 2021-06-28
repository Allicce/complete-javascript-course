'use strict';
const bookings = []
//es6
const createBooking = (flightNum, numPassengers = 1, price = 199 * numPassengers) => {
    //before es6
    // numPassengers = numPassengers || 1;
    // price = price || 199
    const booking = {
        flightNum, numPassengers, price
    }
    console.log(booking)
    bookings.push(booking)
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
createBooking('LH123', 6);

createBooking('LH123', undefined, 1000);
