function fetchPets(filters = []) {
  const petsJson = 'https://petfinding.glitch.me/data/cats.json';
  fetch(petsJson)
  .then(response => response.json())
  .then(response => {
    // Write your code here
    console.log(response);
  }).catch(error => console.log(error));
}

fetchPets();