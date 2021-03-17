// console.log( 40 + 8);

/////////////////////////////////////////
//VALUES AND VARIABLES
let firstName = 'Jonas';
console.log(firstName);

// illegal variables name:
// let 3years = 3; variable can't start with number
// let jonas&matilda = "JM" & is not allowed
// let new = "new" new is reserved word

let $function = 27;

// constant write with uppercase
const PI = 3.1415;


/////////////////////////////////////////
//DATA TYPES

//PRIMITIVE DATA TYPES - number, string, boolean, undefined, null, symbol, BigInt
//dynamic typing - data types are determined automatically VALUE HAS TYPE NOT VARIABLE
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);

//typeof null return object
console.log(typeof null);

/////////////////////////////////////////
//let const var

//block scope
let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;

//must by declared with value
// const job;

//function scope
// var job = 'programmer';
// job = 'teacher';

/////////////////////////////////////////
//operators

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(2 ** 3);
// 2 ** 3 means 2 to the power of free = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Davis';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
 x += 10;
 console.log(x);
 x++;
 console.log(x);
 x--;

 //comparison operator
console.log( ageJonas > ageSarah);

/////////////////////////////////////////
//operator precedence


