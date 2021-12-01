import * as fs from "fs"

// Read file
const input = fs.readFileSync("input.txt", "utf8")

// Convert each line to an array
const array = input
	.split(/\r?\n/)
	.map(n => parseInt(n))

// Count the measurements
let measures: number = 0

array.forEach((value, index, array) => {
	if (array[index - 1] < array[index]) { // Is previous smaller than the current
		measures++
	}
})

console.log(`There are ${measures} measurements that are larger than the previous measurement.`)


