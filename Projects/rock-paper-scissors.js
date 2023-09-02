// Get user choice
const PAPER = "paper"
const ROCK = "rock"
const SCISSORS = "scissors"

let userprompt = prompt("Type Rock, Paper, OR Scissors").toLowerCase().trim()

if (userprompt != PAPER && userprompt != ROCK && userprompt != SCISSORS) {
	console.log("stop fucking around do it right!!!")
}
//Create Computer Choice
//generate # (0-3)

let choicenumber = Math.random() * 3

//Convert number to choice

let answer

if (choicenumber < 1) {
	answer = PAPER
} else if (choicenumber < 2) {
	answer = SCISSORS
} else if (choicenumber < 3) {
	answer = ROCK
}

console.log(answer)

//Figuer out who wins

let win

if (userprompt == ROCK && answer == PAPER) {
	win = "AI"
} else if (userprompt == ROCK && answer == SCISSORS) {
	win = "Player"
} else if (userprompt == PAPER && answer == SCISSORS) {
	win = "AI"
} else if (userprompt == PAPER && answer == ROCK) {
	win = "Player"
} else if (userprompt == SCISSORS && answer == PAPER) {
	win = "Player"
} else if (userprompt == SCISSORS && answer == ROCK) {
	win = "AI"
} else if (userprompt == answer) {
	win = "Tie"
}

console.log(win)
