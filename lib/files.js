/**
Reads a file into a string array

@example
let lines = readFileLines("test.txt")

let i = 0
while (i < lines.length) {
    let line = lines[i]
    console.log(line)
    i++
}

*/
export function readFileLines(filename) {
	const content = Deno.readTextFileSync("./files/" + filename)
	return content.split(/\r\n|\n/mg)
}
