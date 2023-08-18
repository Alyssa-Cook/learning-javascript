console.log("Variables")

//Declaring a variable with "let"
let a = 5

//Variables get substituted directly where used
console.log(a + 3)
console.log(1 + a)

//Varables can be reassigned to new values
a = 6
console.log(a)

//Right side is evaluated first, so this is legal.
a = a + 5
console.log(a)
