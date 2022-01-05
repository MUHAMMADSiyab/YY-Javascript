var age = 50;

if (age < 20 && age > 10) {
  console.log("The user is teenager");
} else if (age >= 20 && age < 30) {
  console.log("The user is not a teenager");
} else if (age <= 10) {
  console.log("The user is a child");
} else {
  console.log("The user is old");
}

/**
 * Switch
 */
var color = "red";

switch (color) {
  case "green":
    console.log("The color is green");
    break;

  case "orange":
    console.log("The color is orange");
    break;

  case "blue":
    console.log("The color is blue");
    break;

  case "red":
    console.log("The color is red");
    break;

  default:
    console.log("The color does not match");
}

var score = 50;

switch (true) {
  case score === 50:
    console.log("The user is not a top scorer");
    break;

  case score > 50:
    console.log("The user is a top scorer");
    break;
}
