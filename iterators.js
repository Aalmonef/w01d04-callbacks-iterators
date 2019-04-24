//////////////////////////////////////////////
// forEach

var friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function (friend) {
  console.log(`I have a friend named ` + friend);
});

// logs out "I have a friend named <friend's name>" for each friend

// ------------- YOU DO ----------------------
// Using forEach log out each of my friends but 
// with their name lower-cased.





//////////////////////////////////////////////
// map

var nums = [1, 2, 3];
var squared = nums.map(function (num) {
  return num * num;
});

// Object.keys 

var obj = {
  a: "A",
  b: "B",
  c: "C",
  one: 1,
  two: 2,
  three: 3
};

var types = Object.keys(obj).map(function (key) {
  return typeof obj[key];
});


// ------------- YOU DO ----------------------
// Given an array of instructors, use map to create a 
// new array that adds the string " is awesome" to each 
// element in the array.

var instructors = ['Jackie', 'Trevor', 'Rosco'];





//////////////////////////////////////////////
// filter

var nums = [100, 2, 5, 42, 99];

var odds = nums.filter(function (num) {
  return num % 2 !== 0;
});

// Filtering objects

var cars = [
  { color: 'red', make: 'BMW', year: 2001 },
  { color: 'white', make: 'Toyota', year: 2013 },
  { color: 'blue', make: 'Ford', year: 2014 },
  { color: 'white', make: 'Tesla', year: 2016 }
];

var whiteCars = cars.filter(function (car) {
  return car.color === 'white'
});


// ------------- YOU DO ----------------------
// Filter out all "jerks"!

var people = ["jerks", "nice people", "jerks", "nice people", "nice people"];





//////////////////////////////////////////////
// find

var cars = [
  { color: 'red', make: 'BMW', year: 2001 },
  { color: 'white', make: 'Toyota', year: 2013 },
  { color: 'blue', make: 'Ford', year: 2014 },
  { color: 'white', make: 'Tesla', year: 2016 }
];

var firstWhiteCar = cars.find(function (car) {
  return car.color === 'white';
});


// no result find 

var cars = [
  { color: 'red', make: 'BMW', year: 2001 },
  { color: 'white', make: 'Toyota', year: 2013 },
  { color: 'blue', make: 'Ford', year: 2014 },
  { color: 'white', make: 'Tesla', year: 2016 }
];

var missingCar = cars.find(function (car) {
  return car.color === 'black';
});

// missingCar = undefined


// ------------- YOU DO ----------------------
// Find the first car whose year is older than 2014 
// and assign it to a variable named notTooOldCar




