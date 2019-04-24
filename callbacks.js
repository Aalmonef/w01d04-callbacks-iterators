//////////////////////////////////////
// Callbacks 

function addTwo(number) {
  return number + 2;
}

function subtractTwo(number) {
  return number - 2;
}

function doToNumber(number, action) {
  return action(number);
}

doToNumber(4, addTwo);
doToNumber(4, subtractTwo);

//////////////////////////////////////
// Anonymous Function

function double(number) {
  return number * 2;
}

doToNumber(4, double);

doToNumber(4, function (number) {
  return number * 2;
});

//////////////////////////////////////
// Looped Callback

function doToEach(array, action) {
  for (var i = 0; i < array.length; i++) {
    array[i] = action(array[i]);
  }
}

var numbers = [4, 7, 1, 8];
doToEach(numbers, addTwo);
doToEach(numbers, subtractTwo);

///////////////////////////////////////
// Condition callback 

function isEven(number) {
  return number % 2 === 0;
}

function filterBy(array, condition) {
  var filteredItems = [];
  for (var i = 0; i < array.length; i++) {
    if (condition(array[i])){
      filteredItems.push(array[i])
    }
  }
  return filteredItems;
}

var numbers = [4, 7, 1, 8];
filterBy(numbers, isEven)