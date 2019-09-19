// Bonus: Reduce questions
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

// Q: Find the average age of all the pets
// Note: "acc" is short for accumulator 
const averageAge = pets.reduce((acc, item) => acc + item.age, 0)/pets.length;
console.log(averageAge);

// Q: Return an object that has a count of pets of each type with the species type as the key
// Should return: { cat: 3, dog: 2}
const petCount = pets.reduce((acc, item) => {
    if (acc[item.species]) {
        acc[item.species] += 1;
    } else {
        acc[item.species] = 1;
    }
    return acc;
}, {});
console.log(petCount);

// Another more complicated method using the spread operator
// If this doesn't make sense to you, don't worry about it for now!
const petCount2 = pets.reduce((acc, item) => ({
    ...acc, 
    [item.species]: acc[item.species] + 1 || 1 
}), {})
console.log(petCount2);

// Q: Categorize the pets based on species with keys being the species name, 
// and values being an array of pet names
// Should return something like: { cat: ['Cameron',...], dog: ['Lilly', ...]}
const petNamesByCategory = pets.reduce((acc, item) => {
    if (acc[item.species]) {
        acc[item.species].push(item.name);
    } else {
        acc[item.species] = [item.name]
    }
    return acc;
}, {});
console.log(petNamesByCategory);

// Another more complicated method using the spread operator
// If this doesn't make sense to you, don't worry about it for now!
const petNamesByCategory2 = pets.reduce((acc, item) => ({
    ...acc,
    [item.species]: acc[item.species] ? [...acc[item.species], item.name] : [item.name]
}), {});
console.log(petNamesByCategory2);