'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }, 
  
  orderDelivery: function({time, address, mainIndex, starterIndex}) {
    console.log(`Order recieved! ${this.starterMenu[starterIndex]} and 
    ${this.mainMenu[mainIndex]} will be delivered ${address} at ${time} `);
  },

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, "Main Ingredient");
    console.log(otherIngredients, "Other Ingredients");
  }

};



// 1. DESTRUCTURING

// SPREAD OPERATOR
// const newMenu = [...restaurant.mainMenu, 'Dosa'];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy, 'Main menu copy');

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu, "Menu");

// // ITERABLES: Arrays, Strings, Maps, Sets. not Object
// const str = 'Joseph';
// const letters = [...str, '', 'S'];
// console.log(letters, 'letters');


// const arr = [1,2, ...[3,4]];
// console.log(arr, "Spread");

// const [j, k, ...others] = [5,8,9,2,1];
// console.log(j, k , others);

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// // OBJECTS
// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays, "Weekdays");


// // 2.FUNCTIONS
// const add = function(...numbers) {
//   let sum = 0;
//     for (let i =0; i<numbers.length; i++) {
//       sum += numbers[i];
//   }
//   console.log(sum);
// }

// add(1,5);
// add(9,7,2); 
// add(1,7,3,48,7,56,4);

// const someNumbers = [8, 5, 3];
// add(...someNumbers, 'Array Numbers');

// // REST ARGUMENTS
// restaurant.orderPizza('Mushroom', 'onion', 'olives'); 



// // ARRAY DESTRUCTURING

// const array = [5,8,6];

// const [a,b,c] = array;
// console.log(a, b, c);

// // const [one, two] = restaurant.categories; 
// // console.log(one, two, "Restaurant Categories");

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary, "Main", "Secondary");

// // SWITCHING VARIABLES 
// // const temperory = main;
// // main = secondary;
// // secondary = temperory;
// // console.log(main, secondary, "Main", "Secondary");

// // SWITCHING VARIABLES USING DESTRUCTURING
// [main, secondary] = [secondary, main];
// console.log(main, secondary, "Main", "Secondary", "Destructure");

// const[starter, mainDish] = restaurant.order(3,1);
// console.log(starter, mainDish, "Function Destructure");

// // NESTED DESTRUCTURING
// const nested = [2, 4, [8, 4]];
// console.log(nested[0], nested[2]);
// const [g, ,h] = nested;
// console.log(g, h, "Nested");

// const [i, , [j, k]] = nested;
// console.log(i, j, k, "Show elements continuously");

// // without knowing length of an array
// const [p,q,r] = [7,3];
// console.log(p,q,r, "r value undefined");

// const [s, t, u=1] = [4, 9];
// console.log(s,t,u, "u default value");




// // OBJECT DESTRUCTURING
// const {name, categories, openingHours} = restaurant;
// console.log(name, categories, openingHours);

// // Assigning variable to property name
// const { name: shopName, categories: dishType, openingHours: hours} = restaurant;
// console.log(shopName, dishType, hours, "Variables");

// // Assigning default values
// const {menu = [], starterMenu = []} = restaurant;
// console.log(menu, starterMenu);

// // MUTATING VARIABLES
// let a = 1;
// let b = 2;
// let obj = {a: 20, b: 30, c: 22};

// ({a, b} = obj); // Wrap 
// console.log(a, b);

// console.log(hours, 'hours');

// // NESTED OBJECTS
// // const {fri} = openingHours;
// // console.log(fri);

// const {fri: {open, close}} = openingHours;
// console.log(open, close);

// // Assigning Variables
// const {fri: {open: o, close: c}} = openingHours;
// console.log(o, c);

// restaurant.orderDelivery({
//   time: '10.30',
//   address: 'Goa',
//   mainIndex: 1,
//   starterIndex: 2,
// })


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

// //1. Create one player array for each team (variables 'players1' and 'players2')
// const [players1, players2] = game.players;
// console.log(players1, players2);

// /*2. The first player in any player array is the goalkeeper and the others are field players. 
// For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array
//  ('fieldPlayers') with all the remaining 10 field players */

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers, "All Players");

// /*
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array 
// ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// */

// const substitutePlayers = ['Thiago', 'Coutinho', 'Perisic'];
// console.log(substitutePlayers);
// const players1Final = [...players1, ...substitutePlayers];
// console.log(players1Final, 'Players 1 Final');


// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

// // const team1 = game.odds.team1;
// // console.log(team1);
// // const draw = game.odds.x;
// // console.log(draw, "Draw");
// // const team2 = game.odds.team2;
// // console.log(team2, "Team 2");

// // Nested Destructuring
// const {odds :
//   { team1, x: draw, team2}, 
// } = game;
// console.log(team1,draw,team2, "odds");

// /* 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array)
//  and prints each of them to the console, along with the number of goals that were scored in total 
//  (number of player names passed in)
// */
// // REST PARAMETERS

// const printGoals = function(...players) {
//   // console.log(players, "Players");
//   console.log(players.length);
//   console.log(game.scored);
// }

// printGoals(...game.scored);

// /* 7. The team with the lower odd is more likely to win. Print to the console which team is more likely
//  to win, WITHOUT using an if/else statement or the ternary operator.
// */

// console.log(team1); 
// console.log(team1 > team2 ? 'team 2 more likely to win' : 'team 1 more likely to win'); 


// // for Of 
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// for (const item of menu) {
//   console.log(item);
// }

// ///////////////////////////////////////
// // The for-of Loop
// // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// // console.log([...menu.entries()]);


// ///////////////////////////////////////
// // Logical Assignment Operators
// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// // OPTIONAL CHAINING START

// if(restaurant.openingHours.tue) {
// console.log(restaurant.openingHours.tue);
// }

// // if(restaurant.openingHours.fri.open) {
// //   console.log(restaurant.openingHours.fri.open);
// //   }

// // if(restaurant.openingHours && restaurant.openingHours.tue.open) {
// //   console.log(restaurant.openingHours.tue.open);
// // }

// // OPTIONAL CHAINING

// console.log(restaurant.openingHours.tue?.open); 

// // EXAMPLE
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for(const day of days) {
//   // console.log(day);
//   // const open = restaurant.openingHours[day]?.open || 'closed';

//   // Nullish coalescing operator
//   const open = restaurant.openingHours[day]?.open ?? 'closed';

//   console.log(`${day} open at ${open}`);
// }

// // METHODS
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');

// console.log(restaurant.orderPasta?.(0,1) ?? 'Method does not exist');

// // ARRAYS
// const array = [{name: 'ss', email: 'yuuoiedf'}];
// console.log(array[1]?.name ?? 'Array does not exist');

// // Property Names
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties, "Keys");

// let openString = `We are open at ${properties.length} days :`;

// for (const day of properties) {
//   console.log(day);
//   openString += `${day}, `;
// }
// console.log(openString);


// // Property values
// const values = Object.values(restaurant.openingHours);
// console.log(values, 'Values');

// const entries = Object.entries(restaurant.openingHours);
// // console.log(entries, "Entries");

// // Destructuring [Key, Value]
// for(const [key, {close, open}] of entries) {
//   // console.log(val, "Entries");
//   console.log(`On ${key} We open at ${open} and close at ${close}`);
// }


///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number
 (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console
 (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw").
 HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties,
 and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

*/

/*
 1. Loop over the game.scored array and print each player name to the console, along with the goal number
 (Example: "Goal 1: Lewandowski") 
*/

// const scoredGuys = Object.entries(game.scored);
// console.log(scoredGuys, 'Scored guys');

// // Destructuring [Key, Value]
// for(const [key, val] of scoredGuys) {
//   // console.log(val, "Entries");
//   console.log(`Goal ${key} : ${val}`);
// }

/*
2. Use a loop to calculate the average odd and log it to the console
 (We already studied how to calculate averages, you can go check if you don't remember)
*/

// console.log(games.odds.team1);
// console.log(games.odds.x);

// const odd = Object.entries(game.odds);
// console.log(odd.values);
// // Destructuring [Key, Value]
// for(const avg of odd) {
//   console.log(avg.values, "values");
//   // console.log(` ${key} : ${val}`);
// }

// Property values
// const oddValues = Object.values(game.odds);
// console.log(oddValues, 'Values');

// let average = 0;
// for (const odd of oddValues) 
//   // console.log(odd);
//   average += odd;
//   // console.log(average);
//   average /= oddValues.length;
//   console.log(average);




/*
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw").
 HINT: Note how the odds and the game objects have the same property names
*/

// const kkk = Object.entries(game.odds);
// console.log(kkk, 'kkk');
// // To learn
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }


// // SETS

// const orderSet = new Set([
//   'shami',
//   'kohli',
//   'rohit',
//   'kohli',
//   'shami'
// ]);

// console.log(orderSet, "OrderSet");

// console.log(new Set('james'));

// for (const order of orderSet) {
//   console.log(order);
// }

// const staff = ['chef', 'waiter', 'manager', 'cashier', 'chef', 'waiter'];
// // const Uniquestaff = new Set(staff);
// const Uniquestaff = [...new Set(staff)];
// console.log(Uniquestaff, 'Uniquestaff');

// MAPS
// const rest = new Map();
// console.log(rest, "Map");
// rest.set('name', 'Classico Italiano');
// console.log(rest);
// rest.set(1, 'Italy, Firenze');
// console.log(rest);

///////////////////////////////////////
// // Maps: Fundamentals
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));

// const time = 10;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('ser'));

// // MAPS ITERATION

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again']
// ]);

// console.log(question);

// // Convert Object to map
// console.log(Object.entries(restaurant.openingHours, 'object'));
// const mapObj = new Map(Object.entries(restaurant.openingHours));
// console.log(mapObj);

// // Convert Object to map using for of
// for (const [key, value] of question) 
// if(typeof key === 'number')
// console.log(`${key} : ${value}`);


///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events
that happened during the game. The values are the events themselves,
and the keys are the minutes in which each event happened 
(a football game has 90 minutes plus some extra time).

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

console.log(gameEvents, "Game Events");

// 1. Create an array 'events' of the different game events that happened (no duplicates)

const events = [...new Set(gameEvents.values())];
console.log(events, "events");

/*
2. After the game has finished, it was found that the yellow card from minute 64 was unfair. 
So remove this event from the game events log.
*/

const fairEvents = gameEvents.delete(64);
console.log(gameEvents, 'After delete');

/*
3. Print the following string to the console: "An event happened, on average, every 9 minutes"
 (keep in mind that a game has 90 minutes)
*/
console.log(gameEvents.size);
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);



/*
4. Loop over the events and log them to the console, marking whether it's in the first half or second half
 (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
*/

for (const [key, value] of gameEvents) {
  // console.log(key, value);
  let half = key < 45 ? 'FIRST' : 'SECOND';
  // console.log(half);
  console.log(`[${half} HALF] ${key}: ${value}`);
}

//////////////////////////
// STRINGS
const charName = "James Denrich";
const profession = "Teacher";

console.log(charName.slice(0, charName.indexOf(' ')));


const correctPassengerName = function (passengerName) {
  const lowerCase = passengerName.toLowerCase();
  console.log(lowerCase);
  console.log(lowerCase[0].toUpperCase() + lowerCase.slice(1));
}

correctPassengerName('kApil Dev');

const statement = 'All passengers assembled on gate 23 or gate 25';
console.log(statement.replaceAll('gate', 'door'));


///////////////////////////////////////
// Working With Strings - Part 2

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));


const maskCreditCard = function (number) {
  const str = number + '';
  console.log(str);
  const last = str.slice(-4);
  console.log(last);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(89542336));



///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert
 them to camelCase.

The input will come from a textarea inserted into the DOM (see code below),
 and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name 
conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function() {
  const text = document.querySelector('textarea').value;
  console.log(text);
  const newLine = text.split('\n');
  console.log(newLine);
  // const lowerCaseSplit = text.toLowerCase().split('_');
  // console.log(lowerCaseSplit);

  for(const requiredText of newLine){
    // console.log(requiredText);
    const [first, second] = requiredText.toLowerCase().trim().split('_');
    // console.log(first, second, 'First');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
    console.log(output);
  }
})

// underscore_case
//  first_name
// Some_Variable 
//   calculate_AGE
// delayed_departure
