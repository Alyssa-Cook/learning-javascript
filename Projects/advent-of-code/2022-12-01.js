import { readFileLines } from "../../lib/files.js";

let calories = readFileLines("adventofcode.com_2022_day_1_input.txt")


let input = [""]

let i = 0

let current = 0
while(i<input.length){

    let num = Number.parseInt (calories [i])
    current = current + num 
    i = i + 1
    continue;
}
current 