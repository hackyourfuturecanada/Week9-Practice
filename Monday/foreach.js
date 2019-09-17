// How can we loop over this array?
// And print out the name of each colour
const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

// Method 1
for (let i = 0; i < colours.length; i++) {
    console.log(colours[i]);
}

// Method 2
for (colour of colours) {
    console.log(colour);
}

// Method 3 - Using .forEach!
// 1) You can use the callback function's name as the parameter
function print(item) {
    console.log(item);
}
colours.forEach(print);
// 2) Or you can write the callback function directly inside
colours.forEach(colour => console.log(colour));

/**********/

// Get the sum of this array
const listOfNumbers = [1, 2, 3, 4, 5];
let sum = 0;
listOfNumbers.forEach(number => sum += number);
console.log(sum);

/***********/
// Capitalize the first letter of each name
// print out the capitalized name
const names = ['rabia', 'syeda', 'pato', 'saad', 'jordanne'];

// 1) You can pass in the callback function's name
// a function that capitalizes the first letter
function capitalize(item) {
    console.log(item[0].toUpperCase() + item.slice(1, item.length));
}
names.forEach(capitalize);

// 2) Or you can write the callback function directly inside (anonymous function)
names.forEach(item => 
    console.log(item[0].toUpperCase() + item.substring(1))
);

/***********/

// Return a new array with the numbers less than 10
const numbers = [10, 2, 4, 5, 80, 20];

// Method 1 - Using forEach
// loop through the numbers
// check the value of the number 
// if less than 10, push to new array
const lessThanTen = [];
numbers.forEach((number) => {
    if (number < 10) {
        lessThanTen.push(number);
    }
});
console.log(lessThanTen);

// Method 2 - Using filter!!!
function isLessThanTen(item) {
    return item < 10;
}
const filteredNumbers = numbers.filter(isLessThanTen);
// Note that the numbers array is not changed
// filteredNumbers is a new array
console.log('filtered numbers', filteredNumbers);
console.log('numbers', numbers);

// We could also use an anonymous callback function 
const filteredNumbers2 = numbers.filter(number => number < 10);
console.log(filteredNumbers2);
