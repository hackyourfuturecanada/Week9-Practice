// Sort questions
const pets = [{
    name: 'Cameron',
    species: 'cat',
    age: 8
}, {
    name: 'Lilly',
    species: 'dog',
    age: 13
}, {
    name: 'Casper',
    species: 'cat',
    age: 3
}, {
    name: 'Brownie',
    species: 'dog',
    age: 2
}, {
    name: 'Creme Puff',
    species: 'cat',
    age: 30
}];

// Q: sort by age ascending
// First copy the array (using the spread operator) to avoid mutating (changing) the original array
const sortedPetsByAgeAsc = [...pets];
// Using a ternary operator for the comparison function
sortedPetsByAgeAsc.sort((a, b) => a.age > b.age ? 1 : -1);
console.log(sortedPetsByAgeAsc);

// Q: sort by age descending
// Using an if statement for the comparison function
const sortedPetsByAgeDesc = [...pets];
sortedPetsByAgeDesc.sort((a, b) => {
    if (a.age > b.age) {
        return -1;
    } else {
        return 1;
    }
});
console.log(sortedPetsByAgeDesc);

// Q: sort by name ascending
const sortedPetsByNameAsc = [...pets];
sortedPetsByNameAsc.sort((a, b) => a.name > b.name ? 1 : -1);
console.log(sortedPetsByNameAsc);