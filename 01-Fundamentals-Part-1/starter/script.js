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

// let markWeight = 78;
// let johnWeight = 92;
// let markHeight = 1.69;
// let johnHeight =1.95;
//
// let markBMI = markWeight / markHeight ** 2;
// let johnBMI = johnWeight / johnHeight ** 2;
//
// console.log (markBMI, johnBMI);
// let markHigherBMI = markBMI > johnBMI;
//
// console.log(markHigherBMI);

/////////////////////////////////////////
//string and template literals

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;
//
// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas);
//
// //better way template literals
//
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
// console.log(jonasNew);
//
// console.log('String \n\
// multiple \n\
// lines');
//
// console.log(`Strings
// multiple
// lines`);

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

// if(markBMI > johnBMI) {
//     console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`)
// } else {
//     console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`)
// }


/////////////////////////////////////////
//type conversion and coercion

//type conversion
// const inputYear = '1918'
// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);
// console.log(String(23));
//
// //type coercion
//
// console.log('I am ' + 23 + 'years old');
//
// //convert to number
// console.log('23' - '10' - 3);
// //convert to string
// console.log('23' + '10' + 3);
// //convert to number
// console.log('23' /'10');
// console.log('23' * '10');
//
// let n = '1' + 1;
// n = n - 1
// console.log(n)
//
// console.log('23' - '10' - '3' - 2 + '5');

/////////////////////////////////////////
//Truthy and Falsy values

// console.log(Boolean('Jonas'))
// console.log(Boolean(undefined))
// console.log(Boolean(0))
// console.log(Boolean({}))
// console.log(Boolean(''))
//
// const money = 0;
//
// if(money) {
//     console.log("Don't spend it all!");
// } else {
//     console.log("You should get a job");
// }
//
// let height;
// if(height) {
//     console.log("YaY height is defined")
// } else {
//     console.log('Height is undefined')
// }
//
// //this code return else because 0 is false value
// let height = 0;
// if(height) {
//     console.log("YaY height is defined")
// } else {
//     console.log('Height is undefined')
// }

/////////////////////////////////////////
//Equality operators

// const age = '18';
//
// if(age === 18) console.log('You just become and adult strict')
//
// if(age == 18) console.log('You just become and adult loose')
//
// prompt("What is your favorite number?")

/////////////////////////////////////////
//Logical operators

// const hasDriversLicense = true;
// const hasGoodVision = true;
//
// console.log(hasDriversLicense && hasGoodVision)
// console.log(hasDriversLicense || hasGoodVision)
// console.log(!hasDriversLicense && hasGoodVision)
//
// const shouldDrive = hasDriversLicense && hasGoodVision;
//
// if(shouldDrive) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Sarah is not able to drive')
// }

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// const scoreDolphins = (96+108+89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
//
// if(scoreDolphins >scoreKoalas) {
//     console.log('Dolphins win the trophy 🏆');
// } else if (scoreDolphins < scoreKoalas) {
//     console.log('Koalas win the trophy 🏆');
// } else {
//     console.log('Both win the trophy 🏆');
// }

// const scoreDolphins = (97 + 112 + 50) / 3;
// const scoreKoalas = (109 + 95 + 80) / 3;
//
// if(scoreDolphins >scoreKoalas && scoreDolphins >= 100) {
//     console.log('Dolphins win the trophy 🏆');
// } else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
//     console.log('Koalas win the trophy 🏆');
// } else if (scoreKoalas === scoreDolphins && scoreKoalas >= 100 && scoreDolphins >= 100) {
//     console.log('Both win the trophy 🏆');
// } else {
//     console.log('no one win the trophy 🏆');
// }








