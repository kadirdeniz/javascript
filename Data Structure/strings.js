const name = "Kadir"

// return given index of string
console.log(name.charAt(1))

// Return between given indexes
console.log(name.substring(1,4))

// Delete given indexes and return rest of it
console.log(name.substring(2))

console.log("a">"b")

console.log(name.indexOf("Ka"))

const person="kadir,deniz,22"
const splittedPerson = person.split(",")
console.log(splittedPerson)

const newPerson = person.replace("kadir","Yunu Emre")
console.log(newPerson)

// // Regular Expressions
// ^: Indicates the start of a string/line
// \d: Finds any digit
// [abc]: Finds any character between the brackets
// [^abc]: Finds any character not between the brackets
// [0-9]: Finds any digit between the brackets
// [^0-9]: Finds any digit not between the brackets
// (x|y): Finds any of the alternatives specified

