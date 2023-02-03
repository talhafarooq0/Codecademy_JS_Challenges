/*
  Programmer Name: Talha Tallat
  Program Name: Race Day 
  Program Description: This program will register runners for the race and give them instructions on race day.
*/


// Race numbers are assigned randomly
// Math.random() returns a value between 0 (inclusive) and 1 (exclusive).

let raceNumber = Math.floor(Math.random() * 1000);

// Create a variable that indicates whether a runner registered early or not.
// and set it var equal to boolean value

const registeredEarly = true;

// Create a variable for the runner’s age and set it equal to a number

const runnerAge = 26;

// Create a control flow statement that checks whether the runner is an adult AND registered early.
// Add 1000 to their raceNumber if this is true.

if (runnerAge > 18 && registeredEarly === true) {
  console.log(`Race number: ${(raceNumber += 1000)}`);
}

//Created a separate control flow statement that checks age and registration time to determine race time.
// For runners over 18 who registered early, log a statement to the console telling them that they will race at 9:30 am. Include their raceNumber.

if (runnerAge > 18 && registeredEarly === true) {
  console.log(`Early adults run at 9:30 am.`);
} else if (runnerAge > 18 && registeredEarly === false) {

/*
“Late adults run at 11:00 am”
Since we already checked for early adults we can write a statement like this: else if runner is over 18 AND did not register early they will race at 11:00am
Write the corresponding else if statement.
Within that, log a string to the console telling them that they will race at 11:00 am. Include their raceNumber.
*/
  console.log(`Race number: ${raceNumber} \nLate adults run at 11:00 am`);
} else if ((runnerAge < 18 && registeredEarly === false) || true) {

/*
“Youth registrants run at 12:30 pm (regardless of registration)”
For people who are under 18, log a statement to the console telling them that they will race at 12:30 pm. 
Include their raceNumber.
*/
  console.log(`Race number: ${raceNumber} \nYouth registrants run at 12:30 pm`);
} else {
/*
Don’t forget about runners exactly 18 years old!
Add an else statement that logs a statement to the console telling the runner to see the registration desk.
*/
  console.log(`Runners who are 18 years old should see the registration desk`);
}
