'use strict';
// let hasDriversLicense = false;
// const passTest = true;
//
// if(passTest) hasDriversLicense = true;
//
// if(hasDriversLicense) console.log('I can drive');

////////////////////
// functions

// function logger() {
//     console.log('My name is Jonas');
// }
//
// //calling / running / invoking function
// logger();
//
// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} and ${oranges} oranges.`
//     return juice;
// }
//
// console.log(fruitProcessor(5, 0));
//
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

////////////////////
// functions declaration and expression

//declaration

// function declarationFunction() {
//     return "";
// }
//
// //expression
//
// const expressionFunction = function() {
//     return "";
// }

////////////////////
// arrow function

// const arrowFunction = () => {
//     return "";
// }

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
//
// const checkWinner = (avgDolphins, avgKoalas) => {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log('Dolphins win the trophy 🏆')
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log('Koala win the trophy 🏆')
//     } else {
//         console.log('No teams win the trophy 🏆')
//     }
// }
//
// checkWinner(scoreDolphins, scoreKoalas)

////////////////////
// Arrays

// const friends = ['Michael', 'Steven', 'Peter'];
//
// const years = new Array(1991, 1984, 2008, 2020);
//
// console.log(friends[0]);
// //only primitive value is imutable, this is reason why we can muteted element in array
// friends[2] = 'Jana';
//
// //exercise
//  const calcAge = (year) => {
//      return 2037 - year;
//  }
//
//  const years = [1990, 1697, 2002, 2010, 2018]
//
// const age1 = calcAge(years[0]);
//  console.log(age1)
//
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years.length - 1)]
//
// console.log(ages)

////////////////////
// Array operation

//ads elements
// const friends = ['Michael', 'Steven', 'Peter'];
// friends.push('Jay');
//
// friends.unshift('John');
//
// //remove elements
// const popped = friends.pop();
// console.log(popped);
// friends.shift();
//
// console.log(friends.indexOf('Steven'));
// //return -1 because bob is not in array
// console.log(friends.indexOf('Bob'));
// //return true
// console.log(friends.includes('Steven'));
// //return false
// console.log(friends.includes('Bob'));

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills.length - 1)];
// console.log(bills, tips)
//
// const totals = [bills[0] + tips[0],  bills[1] + tips[1],  bills[2] + tips[2]];
//
// console.log(totals)

////////////////////
// object

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     // age: 2037 - 1991,
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
//     // calcAge: (birthYear) => {
//     //     return 2037 - birthYear
//     // }
//     // calcAge: () => {
//     //         return 2037 - this.birthYear
//     //     }
//     calcAge: () => {
//         this.age =  2037 - this.birthYear
//         return this.age
//     }
// }
//
// console.log(jonas.lastName)
// console.log(jonas['lastName'])
//
// jonas.location = 'Portugal'
// jonas['twitter'] = '@jonasschmedtman'
//
// console.log(jonas)
//
// // console.log(jonas.calcAge(1991))
// // console.log(jonas['calcAge'](1991))
//
// console.log(jonas.calcAge())













