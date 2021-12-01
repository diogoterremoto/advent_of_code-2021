import * as fs from "fs"

// Read file
const input = fs.readFileSync("input.txt", "utf8")

// Convert each line to an array
const array = input
	.split(/\r?\n/)
	.map(n => parseInt(n))

const windowArray = array
	.map((value: number, index: number, array) => {
		let window = 0

		const firstMeasure = array[index]
		const secondMeasure = array[index + 1]
		const thirdMeasure = array[index + 2]
		
		if (secondMeasure && thirdMeasure) {
			window = firstMeasure + secondMeasure + thirdMeasure
		}

		return window
	})
	.filter(n => n) // Clean empty values

// Count the measurements
let measures: number = 0

windowArray.forEach((value, index, array) => {
	if (array[index - 1] < array[index]) { // Is previous smaller than the current
		measures++
	}
})

console.log(`There are ${measures} measurements that are larger than the previous measurement.`)