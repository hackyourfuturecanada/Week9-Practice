// Write a function addTwoNumbers(n1, n2) that takes two numbers as parameters
const addTwoNumbers = (n1, n2) => n1 + n2;
// Write a function subtractTwoNumbers(n1, n2) that takes two numbers as parameters
const subtractTwoNumbers = (n1, n2) => n1 - n2;
// Create a function called magicFunction(n1, n2, callback) 
// that takes two numbers and a callback function as parameters. 

// Call magicFunction twice
//  once with addTwoNumbers and again with subtractTwoNumbers.
function magicFunction(n1, n2, fn) {
    const result = fn(n1, n2);
    return result;
}
const res1 = magicFunction(5, 3, subtractTwoNumbers);
console.log(res1);
const res2 = magicFunction(5, 3, addTwoNumbers);
console.log(res2);
