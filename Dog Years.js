// create age name variable to set my age.
const myAge = 20;
// Create the variable name to define erlyYears.
let earlyYears = 2;
// using multiple assigment operator calculate the early years in dog years.
earlyYears *= 10.5;
// Setting a number since we accounted for the early years.
let laterYears = myAge - 2;
//  using multiple assigment operator calculate the early years in dog years.
laterYears *= 4;
// create myAgeInDogYears variable to hold both var earlyYears and laterYears and both var concate.
let myAgeInDogYears = earlyYears + laterYears;
// create a myName var to pass anyone name and .toLowerCase() properties Assign.
let myName = "sheikh".toLowerCase();
// print the result in console.log object in a readable way and replace the some string
// value to Name with myName, HUMAN AGE with myAge and DOG AGE with myAgeInDogYears var.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);