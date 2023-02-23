function func(first, second, ...restArgs) { //rest syntax

    console.log("length of rest args : ", restArgs.length)
    console.log("length of arguments : ", arguments.length) // rest dahil tümü

    for (const arg of restArgs) { // REST
        console.log("restArgs: ", arg)
    }
    for (const argumentsKey in arguments) { // ARGUMENTS
        console.log("Arguments: ", arguments[argumentsKey])
    }
    console.log()
}

let list = [7, 8, 9, 10]

// length of rest args : 1, length of arguments : 3
func(1, 2, list)

// length of rest args : 4, length of arguments : 6
func(1, 2, ...list)// Spread syntax

// length of rest args : 4, length of arguments : 6
func(1, 2, 3, 4, 5, 6)