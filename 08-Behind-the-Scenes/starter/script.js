'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    console.log(firstName);

    function printAge() {
        let output = `${firstName} you are ${age} born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var milenial = true;
            const firstName = 'Steven'
            const str = `Oh, you are a milenial, ${firstName}`
            console.log(str);

            function add(a, b) {
                return a + b;
            }

            output = 'NEW OUTPUT';
        }
        //console.log(str);
        console.log(milenial)
        // console.log(add(2,3));
        console.log(output);
    }

    printAge();
    return age
}

const firstName = 'Jonas';
calcAge(1991);

//not defined
// printAge();

//Hoisting
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;
//
// console.log(addDec);
// console.log(addExpr);
// console.log(addArrow);
//
// function addDec(a,b) {
//     return a + b;
// }
//
// const addExpr = function(a,b) {
//     return a + b;
// }
//
// const addArrow = (a,b) => {
//     return a + b;
// }
//
// //Example
// if(!numProducts) deleteShoppingCart()
// var numProducts = 10;
//
// function deleteShoppingCart() {
//     console.log('all products deleted');
// }
//
// var x = 1;
// let y = 2;
// const z = 3;
//
// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// const calcAge = function (birthYear) {
//     console.log(2037 - birthYear)
//     console.log(this)
// }
// calcAge(1991);
//
// const calcAge2 = (birthYear) => {
//     console.log(2037 - birthYear)
//     console.log(this)
// }
// calcAge2(1991);

const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this)
        console.log(2037 - this.year)
    }
}
jonas.calcAge();

const matilda = {
    year: 2017
}
//method borrowing
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
