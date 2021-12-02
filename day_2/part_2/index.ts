import * as fs from "fs"

// Read file
const input = fs.readFileSync("input.txt", "utf8")

// Convert each line into a parsable array
const array = input
	.split(/\r?\n/)
	.map(n => {
		const explodedString = n.split(" ")

		const motion = explodedString[0]
		const value = explodedString[1]

		return {
			type: motion,
			value: parseInt(value)
		}
	})

let horizontalPosition = 0
let aim = 0
let depth = 0

for (let measure of array) {
	if (measure.type === "forward") {
		
		horizontalPosition = horizontalPosition + measure.value
		
		if (aim) {
			depth = depth + (aim * measure.value)
		}

	} else if (measure.type === "down") {
		aim = aim + measure.value
	} else if (measure.type === "up") {
		aim = aim - measure.value
	}
}

console.log(depth * horizontalPosition)