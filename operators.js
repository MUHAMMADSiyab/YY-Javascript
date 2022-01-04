/**
 * Assignment Operators
 */
var name = "Brad";

var age = 20;

age += 2; // increment
age -= 2; // decrement
age *= 2; // multiplication
age /= 2; // division
age %= 3; // mudulus (2)
age **= 3; // power

/**
 * Arithmetic Operators
 */
console.log(2 + 3, "Add");
console.log(5 - 3, "Substract");
console.log(5 * 3, "Multiply");
console.log(10 / 3, "Division");
console.log(10 % 3, "Mudulus");
console.log(10 ** 3, "Power");

var scores = 0;

// scores++;
// scores--;

console.log(++scores, "Scores");

/**
 * Comparison Operators
 */
console.log(2 == 2, "Equal");
console.log(2 != 2, "Not Equal");

// check data type also
console.log(2 === "2", "Equal and Identical");
console.log(4 !== "4", "Not Equal and Not Identical");

console.log(3 > 2, "Greater than");
console.log(3 < 2, "Less than");
console.log(3 >= 2, "Greater than or equal to");
console.log(3 <= 2, "Less than or equal to");

/**
 * Logical Operators
 */
console.log(2 == 2 && 2 > 2, "AND");
console.log(2 == 2 || 2 > 2, "OR");
