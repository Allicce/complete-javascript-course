'use strict';

//Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
}

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //old way
  // openingHours: openingHours,
  // es6 literals
  openingHours,

  //old way
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  //es6
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
        `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
        `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function(mainIngredient, ...othersIngredient) {
    console.log(mainIngredient, othersIngredient);
  }
};



let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] =restaurant.order(2, 0)
console.log(starter, mainCourse);

const nested = [2,4,[5,6]];

// const [i,,j] = nested;
// console.log(i, j);

const [i, ,[j,k]] = nested;
console.log(i,j,k);

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const { menu = [], starterMenu: starters = []} = restaurant;

//mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b:7, c:14};

({a, b} = obj)

//nested objects

const {fri: {open: o, close: c}} = openingHours
console.log(o, c)

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2
})

//spread operator

// const arr = [7,8,9];
// const badNewArr = [1,2,arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// const newArr = [1,2, ...arr];
// console.log(newArr);
// console.log(...newArr);
//
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
//
// //copy array (shallow copy)
// const newMenuCopy = [...restaurant.mainMenu];
// // Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);
//
// //Iterables: arrays, strings, maps, sets, NOT objects
//
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
//
// const ingredients =[prompt('Lets make pasta Ingredient 1: '), prompt('Ingredient 2: '), prompt('Ingredient 3: ')];
// restaurant.orderPasta(...ingredients);
//
// //Objects
// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'}
// console.log(newRestaurant);
//
// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma';

// console.log(restaurantCopy.name);
// console.log(restaurant.name);

//Rest pattern and parameters


// //1. destructuring
// const arr = [1,2,...[3,4]];
//
// //Rest because on LEFT side of =
// const [a,b, ...others] = [1,2,3,4,5];
// console.log(a,b,others);
//
// const [pizza, , risotto, otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza,risotto,otherFood);
//
// //Objects
//
// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);
//
// //2.functions
// const add =  function(...numbers) {
//   let sum = 0;
//   for (let i = 0; i<numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// }
//
// add(2,3);
// add(5,3,7,2);
// add(8,2,5,8,7,4,1,3,6);
//
// const x = [23,58,7];
// add(...x);
//
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'tomato');
// restaurant.orderPizza('mushrooms')

//Circuiting

//use ANY data type, return ANY data type, short-circuiting
//results is 3
// console.log(3 || 'Jonas');
// //results Jonas
// console.log('' || 'Jonas');
// //return true
// console.log(true || 0);
// //return null
// console.log(undefined || null);
// // return Hello
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);
//
// const guest1 = restaurant.numGuests ? restaurant.numGuests: 10;
//
// console.log(guest1);
//
// const guest2 = restaurant.numGuests || 10;
//
// console.log('------------AND----------');
// //return 0
// console.log(0 && 'Jonas');
// //return Jonas
// console.log(7 && 'Jonas');
// //return null
// console.log('Hello' && 23 && null && 'Jonas')
//
// if(restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
//
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
//
// //Nullish coalescing operator
// restaurant.numGuests = 0;
// const guest = restaurant.numGuests || 10;
// console.log(guest);
//
// //Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);


///////////////////////////////////////
// Coding Challenge #1

/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// //1
// const [players1, players2] = game.players;
// console.log(players1, players2);
// //2
// const [goalKeeper, ...fieldPlayers] = players1;
// console.log(goalKeeper, fieldPlayers);
// //3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// //4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// //5
// const {odds: {team1, x: draw, team2}} = game
// console.log(team1, draw, team2);
// //6
// const printGoals = function(...players) {
//  console.log(`${players.length} goals were scored`)
// }
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);
//
// //7
// team1 < team2 && console.log('team 1 is more likely to win');
// team1 > team2 && console.log('team 2 is more likely to win');

// const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
//
// for(const item of menu2) console.log(item);
// //index
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`)
// };
//
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`)
// };
//
// //array iterators
// console.log(menu.entries());

//error
// console.log(restaurant.openingHours.mon.open)

//optional chaining
//if mont doesnt exist return immediately undefined
// console.log(restaurant.openingHours.mon?.open)
//
// console.log(restaurant.openingHours?.mon?.open)
//
//
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//
// for(const day of days ) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed'
//   console.log(`On ${day}, we open at ${open}`)
// }
//
// //Methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist')
// console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist')
//
// //Arrays
// const users = [{name: 'Jonas', email: 'hello@jonas.com'}]
//
// console.log(users[0]?.name ?? 'user array is empty')

// const properties = Object.keys(openingHours)
// console.log(properties)
//
// let openStr = `We are open on ${properties.length}`
//
// for( const day of Object.keys(openingHours)) {
//   openStr += ` ${day}`
// }
//
// const entries = Object.entries(openingHours)
// console.log(entries)
// // has object with [] with 0:key and 1:value
//
// for (const [key, {open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`)
// }

///////////////////////////////////////
// Coding Challenge #2

/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// for(const [i ,score] of game.scored.entries()) {
//   console.log(`Goal ${i+1}: ${score}`)
// }
//
// let average = 0;
// const odds = Object.values(game.odds)
// for(const odd of odds) {
//   average += odd
// }
// average /= odds.length
//
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5
// for(const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x'? 'draw' : `victory ${game[team]}`
//   console.log(`odd of ${teamStr} ${odd}`)
// }

// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'])
// //all duplicants are gone
// console.log(ordersSet)
// // all element is unique and order is irrelevant
//
// console.log(ordersSet.size)
// console.log(ordersSet.has('Pizza'))
// console.log(ordersSet.has('Bread'))
// ordersSet.add('Garlic Bread')
// ordersSet.add('Garlic Bread')
// ordersSet.delete('Risotto')
// console.log(ordersSet)
//
// //doesn't work because set doesn't have indexes
// console.log(ordersSet[0])
//
// for (const order of ordersSet) console.log(order)
//
// //Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']
//
// const staffUnique = [...new Set(staff)];
//
// //clear all elements
// ordersSet.clear()

// const rest = new Map();
// rest.set('name', 'Classico Italiano')
// rest.set(1, 'Firenze, Italy')
// rest.set(2, 'Lisbon Portugal')
//
// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//     .set('open', 11)
//     .set('close', 23)
//     .set(true, 'we are open')
//     .set(false, 'we are closed')
//
// console.log(rest.get('name'))
// console.log(rest.get(true))
//
// const time = 21;
//
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')))
//
// console.log(rest.has('categories'))
// rest.delete('2')
// console.log(rest)
//
// console.log(rest.size)
//
// rest.set([1,2], 'Test')
// console.log(rest)
//
// //not the same object as a key on rest
// console.log(rest.get([1,2]))
//
// //fix
// const arr = [1,2]
// rest.set(arr, 'Test')
// console.log(rest.get(arr))
//
// rest.set(document.querySelector('h1'), 'Heading')
//
// rest.clear()

// const question = new Map([
//     ['Question', 'What is the best programming language in the world'],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'Javascript'],
//     ['Correct', 3],
//     [true, 'Correct'],
//     [false, 'Try again']
//
// ])
//
// console.log(question)
//
// console.log(Object.entries(openingHours))
// const hoursMap = new Map(Object.entries(openingHours))
// console.log(hoursMap)
//
// for (const [key, value] of question) {
//   if(typeof key === 'number') console.log(`Answer ${key}: ${value}`)
// }
// const answer = Number(prompt('Your answer'))
// console.log(answer)
//
// console.log(question.get(question.get('correct') === answer))
//
// //Convert map to array
//
// console.log([...question])
// console.log(question.keys())
// console.log(question.entries())
// console.log(question.values())

///////////////////////////////////////
// Coding Challenge #3

/*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

console.log(gameEvents.values());
const events = new Set(gameEvents.values());
console.log(events);

gameEvents.delete(64);


const time = [...gameEvents.keys().pop()]
console.log(time)
console.log(`An event happend, on average, every ${time/ gameEvents.size} minutes`)

for( const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`)
}




