// 1. Declare and assign the variables here:
let shuttleName = 'Determination';
let shuttleSpeed = '17500';
let kilometerMars = 225000000;
let kilometerMoon = 384400;
const milesKilometer = 0.621;

// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
typeof shuttleName;
typeof shuttleSpeed;
typeof kilometerMars;
typeof kilometerMoon;
typeof milesKilometer;

// Code your solution to exercises 3 and 4 here:
let milesMars = kilometerMars * milesKilometer;
let hoursMars = milesMars / shuttleSpeed;
let daysMars = hoursMars / 24;


// Code your solution to exercise 5 here:
let milesMoon = kilometerMoon * milesKilometer;
let hoursMoon = milesMoon / shuttleSpeed;
let daysMoon = hoursMoon / 24;
console.log(shuttleName + " will take " + daysMoon + " days to reach the Moon.");