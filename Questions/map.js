// Map questions
const pets = [{
    name: 'Cameron',
    species: 'cat'
}, {
    name: 'Lilly',
    species: 'dog'
}, {
    name: 'Casper',
    species: 'cat'
}, {
    name: 'Brownie',
    species: 'dog'
}, {
    name: 'Creme Puff',
    species: 'cat'
}, {
    name: 'Aleefa',
    species: 'rabbit'
}, {
    name: 'Medina',
    species: 'guinea pig'
}];

// Q: Return an array of just the names of the animals
// Using forEach
const nameOfPets = [];
pets.forEach(function(pet) {
    nameOfPets.push(pet.name);
})
console.log(nameOfPets);

// Using map
const nameOfPets2 = pets.map(pet => {
    return pet.name;
});
console.log(nameOfPets2);

// Q: Return an array of string with "<name> is a <species>", e.g. "Cameron is a cat"
//const names = ['Cameron', 'Lilly', 'Casper', ...]
const petsAndSpecies = pets.map(item => `${item.name} is a ${item.species}`);
console.log(petsAndSpecies);

// Q: Add a new property, "kitten: true" to these cats if their age is less than or equal to 1
const cats = [
    {name: 'Lucy', age: 0.3},
    {name: 'Katy', age: 0.3},
    {name: 'Pounce', age: 1},
    {name: 'Whiskers', age: 1.5},
    {name: 'Nip', age: 7},
    {name: 'Flip', age: 0.7},
    {name: 'Creme Puff', age: 30}
    ];

 // This answer uses the ES6 spread operator to create a copy 
 // with the same properties and values of the current item
 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
const kittens = cats.map(item => {
    if (item.age <= 1){
        return {...item, kitten: true};
    } else {
        return {...item, kitten: false};
    }
});

console.log(kittens);