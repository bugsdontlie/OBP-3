/* Practice Question */
/* Cricket Team */
const team = {
  name: "Indian Cricket Team",
  /* this will store an object with two properties -> {id: 1, scores: [10, 34, 80]} */
  players: [{ id: 1, scores: [10, 34, 80] }],

  display: function () {
    // loop over players and display their id and scores
  },

  addPlayers: function (id) {
    /* assume always a new player is coming with unique id, this function should create 
    a new player with this id and empty scores array, then push this player to players array
    */
  },

  addScore: function (id, score) {
    /* find the player with this id, and push this score to its score array */
  },

  averageScore: function (id) {
    /* find the player with this id and calculate its avg score and return it*/
  },

  teamAverage: function () {
    //optional
    /* calculate the average of scores of all players combined */
  },
};

team.addPlayers(2);
team.addPlayers(3);

team.addScore(1, 29);
team.addScore(3, 80);
team.addScore(2, 40);
team.addScore(2, 100);
team.addScore(2, 120);
team.addScore(3, 20);

team.display();
console.log("average score of player 1 - " + team.averageScore(1)); // => 153/4 = 38.25
console.log("average score of player 2 - " + team.averageScore(2)); // => 260/3 = 86.67

console.log("average score of team - " + team.teamAverage()); // => 513/9 = 57

/* =========== Functions =========== */

//function declaration
//this function is hoisted
function sayHello() {
  console.log("Hello Students");
}

/* Types of functions */
/* =========== Arrow Functions =========== */
// arrow(3, 4); Note: gives error, as arrow functions are not hoisted, but the variable is
/* Method 1 --> 
const arrow = (a, b) => a - b; */

/* Method 2 --> */
const arrow = (a, b) => {
  return a - b;
};

console.log(arrow(5, 2));

/* write an arrow function to check if a number is divisible by 3 or not */

/* //doing it using more than 1 statement
const isDivisibleBy3 = (num) => {
  if (num % 3 == 0) return true;
  else return false;
}; */

//doing it using single statement
const isDivisibleBy3 = (num) => !(num % 3);
console.log(isDivisibleBy3(19));
console.log(isDivisibleBy3(9));
console.log(isDivisibleBy3(18));

/* Note: arrow functions do not have their own `this` keyword, they uses parent's `this` */
const student = {
  fullName: "Pratik Mane",
  age: 2,
  result1: function (resultStatus) {
    console.log(this.fullName + " has " + resultStatus + " the exam");
    console.log(this); //shows the object properties
  },
  result2: (resultStatus) => {
    //this.fullName gives undefined, as parent's this doesn't have `fullName` property
    console.log(this.fullName + " has " + resultStatus + " the exam");
    console.log(this); //doesn't shows the properties of object, instead shows window object(parent's this)
  },
};

student.result1("passed");
student.result2("failed");

/* =========== Anonymous Functions =========== */
/* basically a function with no name */

/* =========== Higher Order Functions (HOFs) =========== */
/* These functions are either functions that takes functions as arguments or returns a function */

/* Types of HOFs */
/* 1. forEach() 
  - applies the callback function on each element
  - iterates over each element and doesn't break like other for loops
  - doesn't change the original array
  - returns undefined
  - can be used to iterate and do some operations on array
*/
let arr = [2, 1, 6, 3, 9];

console.log(
  arr.forEach((value, index, array) => {
    value *= 2;
    array[index] = value;
    console.log(value, index, array);
  })
);
console.log({ arr });

let users = [
  { name: "Ramesh", age: 20 },
  { name: "Suresh", age: 10 },
  { name: "Rani", age: 40 },
];
//print name and age of users array using forEach
users.forEach((value) => {
  console.log(value.name + " " + value.age);
});

/* 2. map() 
  - transforms the array
  - returns an array
  - doesn't change the original array
*/

arr = [3, 2, 9, 0, 10];
let squaredArr = arr.map((value, index, array) => {
  return value * value;
});

console.log({ squaredArr });

users = [
  { name: "Ramesh", age: 20 },
  { name: "Suresh", age: 10 },
  { name: "Rani", age: 40 },
];
/* transform the name of each user to uppercase 
new array should be like this:

[
  { name: "RAMESH", age: 20 },
  { name: "SURESH", age: 10 },
  { name: "RANI", age: 40 },
];

*/
let capitalNamedUsers = users.map((value) => {
  /* this will change the original data (i.e., users array)
  value.name = value.name.toUpperCase();
  return value; */
  return { name: value.name.toUpperCase(), age: value.age };
});
console.log({ capitalNamedUsers });
console.log({ users });

/* 3. filter() 
  - keeps the elements that passes the condition
  - returns an array
  - doesn't change the original array
  - nums.filter((value, index, array) => condition)
*/

let nums = [2, 12, 9, 18, 27];
const oddNums = nums.filter((value, index, array) => value % 2);

console.log({ oddNums });

let names = ["Pranjal", "Bhavesh", "Uday", "Siddharth", "Neha"];
/* filter above `names` array in a way that names less than 5 characters are eleminated  
o/p -> ["Pranjal", "Bhavesh", "Siddharth"];
*/
