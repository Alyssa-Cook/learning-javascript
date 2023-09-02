import { readFileLines } from "../../lib/files.js"

main()

//Takes an array and a number, and finds if the number is bigger than any item in the array
function biggerThanAny(inputArray, value) {
    let i = 0
    while (i < inputArray.length) {
        
          
        i = i + 1
    }
}



function main() {
    let calories = readFileLines("adventofcode.com_2022_day_1_input.txt")

    let a = 0
    let biggest = 0
    let current = 0
    while (a < calories.length) {
        console.log(a + ": calories[i]: (" + calories[a] + ") " + "current: (" + current + ")")
    
        if (calories[a] == "") {
            console.log("Done with bag.")
            if (biggest < current) {
                console.log("Found new biggest.")
                biggest = current
            }
            current = 0
        } else {
            let num = Number.parseInt(calories[a])
            current = current + num
        }
        a = a + 1
    }
    console.log(biggest)
}





