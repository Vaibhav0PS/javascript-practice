// Primitive

// 7 types : String, Number, Boolean, null, undefine, Symbol, BigInt
const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id===anotherId);

const bigNumber = 17835601325872877834232352435623234663432466324n

// reference (Non primitive)
// Array, Objects, Function

const heros = ["Ironman","Captain","Thor","Hulk"];

let myObj = {
    name: "Vaibhav",
    age:22
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof bigNumber)


///////////// Stack(Primitive) and heap(Non-primitive)  /////////////////////////////////

let myName = "Vaibhav";
let anotherName = myName;
anotherName = "VaibhavOPS"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@outlook.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "user@gmail.com";

console.log(userOne.email)
console.log(userTwo.email)