import { readFileLines } from "../../lib/files.js";

let calories = readFileLines("adventofcode.com_2022_day_1_input.txt")

while (true) {
    if (isNumeric(calories)){
        calories = calories + calories
    }
}
console.log(calories)