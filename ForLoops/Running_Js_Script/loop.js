// console.log(1)
// console.log(1)
// console.log(1)
// console.log(1)
// console.log(1)
// console.log(1)
// console.log(1)
// console.log(1)
// console.log(1)
// console.log(1)

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// for (let i = 1; i <= 20; i += 2) {
//     console.log(i)
// }



// for (let i = 1; i <= 1000; i *= 10) {
//     console.log(i)
// }

// for (let i = 25; i >= 0; i -= 5) {
//     console.log(i)
// }

// const animals = ["Zorilla", "Alligator", "Alpaca"]

// for (let i = animals.length - 1; i >= 0; i -= 1) {
//     console.log(animals[i])
// }


//  NESTED LOOPS
// for (let i = 0; i <= 10; i++) {

//     console.log(`i is: ${i}`)
//     // console.log("i is", [i])

//     for (let j = 1; j < 4; j++) {
//         console.log(`     j is: ${j} `)
//     }
// }


const seatingChart = [
    ["Kristen", "Erik", "Namita"],
    ["Geoffrey", "Juanita", "Antonio", "Kevin"],
    ["Yuma", "Sakura", "Jack", "Erika"]
]
for (let i = 0; i < seatingChart.length; i++) {

    const row = seatingChart[i];
    console.log(`ROW# ${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}