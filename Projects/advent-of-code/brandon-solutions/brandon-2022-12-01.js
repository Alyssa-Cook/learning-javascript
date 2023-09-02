import { readFileLines } from "../../../lib/files.js"

const calories = readFileLines("adventofcode.com_2022_day_1_input.txt")

const bags = splitArrayBy("", calories).map(bag => bag.map(safeParseInt))
const bagTotals = bags.map(bag => sum(bag))
const biggest = findBiggest(bagTotals)

// const biggest3 = bagTotals.sort().slice(-3)

console.log("biggest is: " + biggest)

/** adds all values in the array together */
function sum(inputArray) {
    let output = 0
    for (const val of inputArray) {
        output += val
    }
    return output
}

/** finds the biggest value in an array */
function findBiggest(inputArray) {
    let biggest = 0
    for (const val of inputArray) {
        if (val > biggest) {
            biggest = val
        }
    }
    return biggest
}

/** Split Array By iterates through input array, and splits it into smaller arrays on splitValue */
function splitArrayBy(splitValue, inputArray) {
    const output = []
    let current = []

    for (const val of inputArray) {
        if (val == splitValue) {
            output.push(current)
            current = []
        } else {
            current.push(val)
        }
    }

    return output
}

/** Safe parse int takes a value and parses into a number. Throw error if not possible. */
function safeParseInt(val) {
    const num = Number.parseInt(val)
    if (Number.isNaN(num)) {
        throw new Error("Value (" + val + ") is not a number.")
    }
    return num
}