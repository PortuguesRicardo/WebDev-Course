// const subreddits = ["cringe", "books", "chickens", "funny", "pics", "soccer"]


// for (let i = 0; i < subreddits.length; i++) {


// }

// for (let sub of subreddits) {

//     console.log(`Visit reddit.com/r/${sub}`)

// } 


// for (let char of "hello world") {

//     console.log(char)

// }


// TODO LIST

let input = prompt("What would you like to do?");

const todo = ["Collect Chicken Eggs", "Clean Litter Box"];
while (input !== "quit" && input !== "q") {
    if (input === "list") {
        console.log("************")
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("************")

    } else if (input === "new") {

        const newTodo = prompt("Ok, what is new todoo?");
        todo.push(newTodo);
        console.log(`${newTodo} added to the list`)
    }


    else if (input === "delete") {

        const index = parseInt(prompt("what are you trying to delete?"));
        if (!Number.isNan(index)) {

            const deletedStuff = todo.splice(index, 1);
            console.log(`Ok, deleted ${deletedStuff[0]}`);
        } else {
            console.log("Unknown index")
        }
    }

    input = prompt("What would you like to do?")

}
console.log("ok, quit the app")
