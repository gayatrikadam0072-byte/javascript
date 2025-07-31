//ifstatement
let age1=20;

if ('age' >= 18) {
  console.log("You are an adult.");
}


//ifelsestatement
let age2=16;

if ('age' >= 18) {
  console.log("You can vote.");
} else {
  console.log("You are too young to vote.");
}


//ifelseifelsestatement
let marks = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 60); {
  console.log("Grade B");
}  {
  console.log("Grade C");
}


//switchstatement
let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Tuesday":
    console.log("Second day of the week");
    break;
  default:
    console.log("Some other day");
}


//ternaryoprator
let age = 18;

let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); 

logicaloperator

let isStudent = true;
let hasID = true;

if (isStudent && hasID) {
  console.log("You get a discount!");
}


//truthyflasyif
let name = "";

if (name) {
  console.log("Name is provided.");
} else {
  console.log("Name is missing."); 
}

