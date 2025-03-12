// function singSong() {
//     console.log("DO");
//     console.log("RE");
//     console.log("MI");


// }
// function greet(idiotPerson, LastNamePerson) {

//     console.log(`Hey there, ${idiotPerson.toUpperCase()} ${LastNamePerson[0]}!`);
//     // console.log("Hi!")
// }


// function repeat(str, numTimes) {
//     let result = "";
//     for (let i = 0; i < numTimes; i++)
//         result += str;

//     console.log(result)
// }

// function isSnakeEyes(num1, num2) {

//     if (num1 === 1 && num2 === 1) {
//         console.log("Snake Eyes!")
//     }
//     else {
//         console.log("Not Snake Eyes!")
//     }

// }

// function add(x, y) {
//     if (typeof x !== "number" || typeof y !== "number") {
//         return false;
//     }

//     return x + y;


// }



// function sumArray(nums) {

//     let total = 0

//     for (let i = 0; i < nums.length; i++) {

//         total += nums[i];
//     }
// }

// return total;


//  FUNCTION SCOPE-------------------------------------------

// let totalEggs = 0;
// function collectEggs() {

//     totalEggs = 6;

// }

// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);

//  FUNCTION BLOCK SCOPE-------------------------------------


// let bird = "Scarlet Macaw";

// function birdWatch() {

//     let bird = "Great Blue Heron";
//     console.log(bird)
// }

// FUNCTION LEXICAL SCOPE-----------------------------------


// function bankRobbery() {
//     const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman'];

//     function cryForHelp() {

//         for (let i = 0; i < heroes.length; i++)

//             console.log(`Please Help me ${heroes[i]}`);
//     }
//     cryForHelp();
// }

// function bankRobbery() {
//     const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman'];

//     function cryForHelp() {

//         for (let hero of heroes)

//             console.log(`Please Help me ${hero.toUpperCase()}`);
//     }
//     cryForHelp();
// }


// let greet = function () {

//     console.log("HI!")
// }


// High ORDER FUNCTIONS ------------------------------

// function callTwice(func) {
//     func();
//     func();

// }

// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++)
//         f()
// }
// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll)
// }

// callTwice(rollDie)

// function makeMysteryFunc() {

//     const rand = Math.random();
//     if (rand > 0.5) {

//         return function () {
//             console.log("Congrats, I am a good Function");
//             console.log("You win a Million Dollars!!");

//         };

//     } else {
//         return function () {
//             alert("You have been infected by malware!")
//             alert("Stop trying to close this window!")
//             alert("Stop trying to close this window!")
//             alert("Stop trying to close this window!")
//             alert("Stop trying to close this window!")
//         };

//     }


// }

// function makeBetweenFunc(min, max) {
//     return function (num) {
//         return num >= min && num <= max;
//     }

// }

// makeBetweenFunc(5,10) =>

// function isBetween(num) {
//     return num >= 50 && num <= 100

// }
// function isBetween2(num) {
//     return num >= 1 && num <= 10

// }



// const myMath = {
//     pi: 3.14159,

//     square: function (num) {

//         return num * num;
//     },

//     cube: function (num) { return num ** 3 }


// }


// EXERCISE-----------------------------
// const square = {

//     area: function (num) {

//         return num * num;
//     },

//     perimeter: function (num) {

//         return num * 4;
//     },
// }




// keyword THIS----------------------------------------

// const cat = {

//     name: "Sanji",
//     color: "Cream",
//     Breed: "Scottish Fold",     //Keyword this is used to refer to the objects stored inside.
//     meow() {
//         console.log("Prrr,Prrr...");
//         console.log(this.name, this.color, this.Breed)
//     }

// }

// Exercise
// const hen = {

//     name: "Helen",
//     eggCount: 0,

//     layAnEgg() {
//         this.eggCount += 1; // Increment eggCount
//         return "EGG";
//     }

// }



// TRY CATCH-----------------------------------------

// try {

//     hello.toUpperCase();
// } catch {      // Serves to catch an error in a syntax,
//     //  while ensuring anything outside of this syntax to continue.
//     //  Therefore everything else will run, apart
//     // from what is inside the try/catch brackets - if an error is caught.
//     console.log("Error!!")
// }


// function yell(msg) {
//     try {
//         console.log(msg.toUpperCase().repeat(3));
//     } catch (e) {
//         console.log(e);
//         console.log("Please pass a string next time!")
//     }

// }




// ForEach ---------------------------------


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// numbers.forEach(function (element) {

//     if (element % 2 === 0) {
//         console.log(element)
//     }

// })
// // print(numbers[0])
// // print(numbers[1])

// // OR

// // for (let element of numbers) {

// //     console.log(element)
// // }




// MAP ----------------------------------


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];


// const doubles = numbers.map(function (num) {
//     return num * 2;
// })


// const movies = [
//     {
//         title: "Amadeus",
//         score: 99
//     },
//     {
//         title: "Stand By Me",
//         score: 85
//     },
//     {
//         title: "Parasite",
//         score: 95
//     },
//     {
//         title: "Alien",
//         score: 90
//     },

// ]

// const resultados = movies.map(function (blabla) {
//     return blabla.score;

// })

// // const record = movies.map(function (movie) {
// //     return `${movie.title} - ${movie.score / 10}`
// // })

// const record = movies.map(movie => (
//     `${movie.title} - ${movie.score / 10}`)   // arrow function
// )
// const resultados = movies.map(blabla => {

//     return blabla.score;   // arrow function: funciona da mesma forma que a de cima.
// })


// const rollDie = () => {   // desde que haja apenas 1 argument, não é necessário
//     //parêntesis, mas se o argumento for 0 ou mais do que um argumento
//     // como (x+y)  já é preciso parêntesis.

//     return Math.floor(Math.random() * 6) + 1
// }

// Exercise
// const greet = (hello) => {

//     return `Hey ${hello}!`
// }




// IMPLICIT RETURNS  - only works if you have only 1 statement in the body of the function.

// const rollDie = () => (  // substitui  {} por () para simplificar
//     // isto é possível em functions mais curtas

//     Math.floor(Math.random() * 6) + 1
// )

// const add = (a, b) => a + b  // neste caso nem é preciso parêntesis.

//outra forma

// const add = (a, b) => {

//     return a + b
// }

// // ou

// const add = (a, b) => (

//     a + b
// )


// Implict Return - a breakdown


// const isEven = function (num) {

//     return num % 2 === 0;   // regular

// }

// const isEven = (num) => {  // arrow function com parent no parametro
//     return num % 2 === 0;
// }

// const isEven = num => {
//     return num % 2 === 0; // no parents around param
// }

// const is Even = num => (

//     num % 2 === 0       // implicit return
// );

// const isEven = num => num % 2 === 0; // one-liner implicit return


// setTimeout() and setInterval ()

// console.log("hello?")
// setTimeout(() => {

//     console.log("are you still there?")
// }, 3000)

// console.log("Goodbye")


// const id = setInterval(() => {
//     console.log(Math.random())
// }, 2000);
// //  to stop, use  clearInterval()  - add the variable id in this case.



// FILTER

// const numberos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// const alo = numberos.filter(i => {
//     return i < 5
// })

// const movies = [
//     {
//         title: "Amadeus",
//         score: 99,
//         year: 1995
//     },
//     {
//         title: "Stand By Me",
//         score: 85,
//         year: 2005
//     },
//     {
//         title: "Parasite",
//         score: 95,
//         year: 2003
//     },
//     {
//         title: "Alien",
//         score: 90,
//         year: 1994
//     },

// ]

// // const recentMovies = movies.filter((n) => {
// //     return n.year > 1999
// // })
// //OR
// const recentMovies = movies.filter(n => n.year > 1999)
// // const goodMovies = movies.filter(n => score > 90)

// // OR

// // const goodMovies = movies.filter(function (n) {

// //     return n.score > 90
// // })

// const goodTitles = recentMovies.map(n => n.title) // vai buscar
// //apenas os títulos > a 1999  // OR





// movies.filter(n => n.year > 1999).map(n => n.title)
// // combining  both filter and map. recentMovies and goodTitles.


//SOME and EVERY


const exams = [80, 90, 92, 102, 86, 85, 99]

const barraca = exams.some(score => score > 90)



// const all = function (num) {

//     return num.every(num => num > 70);

// };
// console.log(all(exams)) // OR

const all = exams.every(num => num > 70)

// When Do You Need to Define a Parameter?
// You only need to define a parameter if you're wrapping it in a function:

//
// const all = num => num.every(score => score > 70);

// EXERCISE

// Some/Every Exercise
// Define a function called allEvens that accepts a single array of numbers.
//  If the array contains all even numbers, return true.
//  Otherwise, return false.
//   Use some or every to help you do this!
//    (only one of them is actually useful here)

// allEvens([2,4,6,8]) //true
// allEvens([1,4,6,8]) //false
// allEvens([1,2,3]) //false

// // Answer   - arrow function
//  const allEvens = allEvens =>  allEvens.every(real => real %2 === 0);

//  //Or - implicit return funciton

//  const allEvens = function (real){

//     return real.every(real => real %2 === 0);
//  }

//  //Or regular function

//  const allEvens = function (numbers) {
//     return numbers.every(function(real) {
//         return real % 2 === 0;
//     });
// }


// REDUCE



// const prices = [9.99, 1.50, 19.99, 30.50, 49.99];
// let total = 0;
// for (let price of prices) {

//     total += price
// }
// console.log(total)

// OR

// const total = prices.reduce((total, pric) => {

//     return total + pric
// })

// OR

// const total = prices.reduce((total, pric) => total + pric)

// const minPrice = prices.reduce((min, currPrice) => {

//     if (currPrice < min) {

//         return currPrice;
//     } else {
//         return min;
//     }
// })


// const evens = [2, 4, 6, 8];

// evens.reduce((sum, num) => sum + num, 100) // can also add a second argument .



// ARROW FUNCTIONS & THIS



// const person = {
//     firstName: "Viggo",
//     lastName: "Mortense",  // here we cannot use arrow function.
//     //because the keyword this refers to the window object.
//     fullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     },

//     shoutName: function () {
//         setTimeout(() => {

//             console.log(this.fullName())

//         }, 3000)
//     }
// }