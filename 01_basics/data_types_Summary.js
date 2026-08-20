// Primitive

// 7 types : String, Number, Boolean, null, undefine, Symbol, BigInt
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id===anotherId);

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

console.log(typeof bigNumber)