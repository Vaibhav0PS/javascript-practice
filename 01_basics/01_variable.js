const accountId = 12412538; //values cant be reassign 
let accountName = "Vaibhav Patole"; // can change
var accountEmail = "abc@gmail.com"; // old way, genrally avoid
let accountCity;

// dont use var for declaring variables is out of scope 
// "const" makes value constant of that variable means you cannot change the value of that particular variable 
// "let" keyword can make values change also the var but we didnt use that 

// accountId = 12412345; this will throw error


accountName = "Kiran Karjule";
accountEmail = "kiran@outlook.com"

console.table([accountId,accountName,accountEmail,accountCity])