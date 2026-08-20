let name = "Vaibhav";
let repoCount = 20;

// console.log(name + " my repo count is " + repoCount+"Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Gta-6");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(1))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,3)
console.log(newString)

const anotherString = gameName.slice(-5,3)
console.log(anotherString)

const newStringOne = "     Vaibhav    "
console.log(newStringOne)
console.log(newStringOne.trim())