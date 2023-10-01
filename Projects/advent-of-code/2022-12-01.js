import { readFileLines } from "../../lib/files.js"

main()


function main() {
    let calories = readFileLines("adventofcode.com_2022_day_1_input.txt")

    let lineNum = 0
    let biggest = [0,0,0]
    let current = 0
    while (lineNum < calories.length) {
        console.log(lineNum + ": calories[i]: (" + calories[lineNum] + ") " + "current: (" + current + ")")

        if (calories[lineNum] == "") {
            console.log("Done with bag.")
            let i = 0;
            //this technically will break if you have incrementing numbers because it will replace the first number its bigger than, 
            //even if that first number is bigger than others in the list.
            while (i < biggest.length) {
                if (biggest[i] < current) {
                    biggest[i] = current
                    break
                }
                i = i + 1
            }
            console.log(biggest)
            current = 0
        } else {
            let num = Number.parseInt(calories[lineNum])
            current = current + num
        }
        lineNum = lineNum + 1
    }

    let y = 0
    let total = 0
    while (y< biggest.length) {
        total = biggest[y] + total
        y++
    }
    console.log(total)
}



