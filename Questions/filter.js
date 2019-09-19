// Filter questions
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
// Q: Return all of the pets that are cats
// Using forEach
const onlyCats = [];
pets.forEach(pet => {
    if (pet.species === 'cat') {
        onlyCats.push(pet);
    }
});
console.log(onlyCats);

// Q: Return all of the pets that are not a dog or a cat
const noCatsAndDogs = pets.filter(item => !(item.species === 'cat') &&
    !(item.species === 'dog')
);
console.log(noCatsAndDogs);

// Q: Return all of the pets that have a name starting with the letter 'C'
const petsStartingWithC = pets.filter(pet => pet.name[0] === 'C');
console.log(petsStartingWithC);

// Q: Return a list of kittens who have an age equal to or less than the kittenCutOffAge
const cats = [
    {name: 'Lucy', age: 0.3},
    {name: 'Katy', age: 0.3},
    {name: 'Pounce', age: 1},
    {name: 'Whiskers', age: 1.5},
    {name: 'Nip', age: 7},
    {name: 'Flip', age: 0.7},
    {name: 'Creme Puff', age: 30}
    ];
  
const kittenCutOffAge = 1;
const kittens = cats.filter(cat => cat.age <= kittenCutOffAge);
console.log(kittens);