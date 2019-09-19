// Rewrite as an arrow function
const doubler = (num) => num * 2;
const result = doubler(10);
console.log(result);

// Add 10 to every number
const numbers = [1, 3, 5, 6, 4, 3];
const numbersPlus10 = [];
numbers.forEach(num => {
   numbersPlus10.push(num + 10);
});
const plus10 = numbers.map(item => item + 10);
console.log(plus10);
console.log(numbers);
