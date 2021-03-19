// console.log( 40 + 8);

/////////////////////////////////////////
//VALUES AND VARIABLES
// let firstName = 'Jonas';
// console.log(firstName);

// illegal variables name:
// let 3years = 3; variable can't start with number
// let jonas&matilda = "JM" & is not allowed
// let new = "new" new is reserved word

// let $function = 27;

// constant write with uppercase
// const PI = 3.1415;


/////////////////////////////////////////
//DATA TYPES

//PRIMITIVE DATA TYPES - number, string, boolean, undefined, null, symbol, BigInt
//dynamic typing - data types are determined automatically VALUE HAS TYPE NOT VARIABLE
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);
//
// let year;
// console.log(year);
// console.log(typeof year);
// year = 1991;
// console.log(typeof year);

//typeof null return object
// console.log(typeof null);

/////////////////////////////////////////
//let const var

//block scope
// let age = 30;
// age = 31;
//
// const birthYear = 1991;
//birthYear = 1990;

//must by declared with value
// const job;

//function scope
// var job = 'programmer';
// job = 'teacher';

/////////////////////////////////////////
//operators

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
//
// console.log(2 ** 3);
// 2 ** 3 means 2 to the power of free = 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Davis';
// console.log(firstName + ' ' + lastName);
//
// let x = 10 + 5;
//  x += 10;
//  console.log(x);
//  x++;
//  console.log(x);
//  x--;
//
//  //comparison operator
// console.log( ageJonas > ageSarah);

/////////////////////////////////////////
//operator precedence

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

let markWeight = 78;
let johnWeight = 92;
let markHeight = 1.69;
let johnHeight =1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

console.log (markBMI, johnBMI);
let markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

/////////////////////////////////////////
//string and template literals

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

//better way template literals

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(jonasNew);

console.log('String \n\
multiple \n\
lines');

console.log(`Strings
multiple
lines`);

/////////////////////////////////////////
//if else statements

// const age = 19;
//
// if(age >= 18) {
//     console.log('Sarah can start driving license');
// } else {
//     const yearsLeft = 18 - age
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years`)
// }

///////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

if(markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`)
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`)
}












