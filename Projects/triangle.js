main()

function main() {
	let size = prompt("How big of a Triangle do you want? (1-10)").trim()

	size = Number.parseInt(size)
	console.log(size)

	if (size > 10) {
		console.log("Put a number 1-10 please")
		return
	} else if (Number.isNaN(size)) {
		console.log("THIS IS NOT A NUMBER!! Please put a number 1-10")
		return
	} else if (size <= 0) {
		console.log("You dont get a fucking triangle")
		return
	}

	let x = 1

	while (x <= size) {
		console.log(createx(x))
		x = x + 1
	}
}

function createx(n) {
	//console.debug("generating " + n + "x's")
	let x = ""
	while (n > 0) {
		//console.log("i is " + i)
		x = x + "x"
		n = n - 1
	}
	return x
}
