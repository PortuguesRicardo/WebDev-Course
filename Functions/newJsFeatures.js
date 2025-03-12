
//DEFAULT PARAMS

// function rollDie(numSides) {
//     if (numSides === undefined) {

//         numSides = 6   // OLD WAY
//     }
//     return Math.floor(Math.random() * numSides) + 1;

// }

// function rollDie(numSides = 6) {

//     // NEW WAY
//     return Math.floor(Math.random() * numSides) + 1;

// }

// function greet( person, msg = "Hey There") {
//     console.log(`${msg}, ${person}!`)
//     // default parameters must come first than any not default parameters.
// // otherwise it will return as undefined.
// //but if we pass something different than "Hey There",it will still
// //replace the Hey There
// }





// SPREAD
//Expands an iterable(array,string,etc.)
//into a list of arguments

///// Spread Function Calls

// const nums = [3, 4, 5, 21, 1, 2, 7, 65343]

// Math.max(...nums)

// console.log(nums)

// // (13) [3, 4, 5, 21, 1, 2, 7, 65343]
// // will log the whole array
// console.log(...nums)
// // 3 4 5 21 1 2 7 65343
// //is passed in as a separate argument to console .log
// //so they become separated by spaces.


// //can also be done with things that aren't arrays.

// console.log("hello")
// result - hello
// console.log(..."hello")
// result - h e l l o  // individual string was passed as saparate characters
// console.log("h","e","l","l","o")
// result h e l l o //passes separate arguments

///// Spread ARRAY LITERALS

// const cats = ["blue", "scout", "Rocket"];
// const dogs = ["Rusty", "Wyatt"];

// const allPets = [...cats, ...dogs]

///// Spread  OBJECTS

