console.log("Hello World"); // Log to the  console

// alert("Hello World"); // Alert

document.write("Hello World"); // Write to document

document.getElementById("heading").innerText = "Welcome to JS"; // Write to an element with an ID

/**
 * String
 */
var name = "Sara Smith";

/**
 * Number
 */
var age = 24.4;

/**
 * Undefined
 */
var interests;

/**
 * Boolean
 */
var married = false;

/**
 * Null
 */
var drinking = null;

/**
 * Object
 */
var skills = ["PHP", "JavaScript", "React", "Nodejs", "Laravel"]; // array

var addresses = {
  home: "House no E-12, Street 4",
  office: "Building no G42, Road 5",
};

var users = [
  { id: 1, name: "John", skills },
  { id: 2, name: "Sara" },
  { id: 3, name: "Brad" },
  { id: 4, name: "Mike" },
  { id: 5, name: "Kim" },
]; // array of objects

console.table(users);
