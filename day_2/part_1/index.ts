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

// Create object with motion
const motion = {
	forward: 0,
	up: 0
}

for (let measure of array) {
	if (measure.type === "down") {
		motion.up = motion.up + measure.value 
	} else if (measure.type === "up") {
		motion.up = motion.up - measure.value
	} else if (measure.type === "forward") {
		motion.forward = motion.forward + measure.value
	}
}


console.log(`${motion.forward * motion.up}`)


