console.log(null == 0) // false
// == (loose equality)  
// For loose equality, null has special rules. It is only loosely equal to: 
//  null == undefined // true


console.log(null >= 0)
// >= (comparison)
// For comparisons like >=, JavaScript converts null to a number:
// Number(null) // 0

console.log("2" === 2) // false
// === is the strict equality comparison operator
// It checks both the value and the data type