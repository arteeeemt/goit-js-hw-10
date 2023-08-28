const selectInput = document.querySelector('.breed-select');
const infoBlock = document.querySelector('.cat-info');

function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds')
    .then(response => response.json())
    .then(data => {
      data.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat.id;
        option.textContent = cat.name;
        selectInput.appendChild(option);
      });
    });
}

function fetchCatByBreed(breedId) {
  return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.json())
    .then(data => data[0]); // Assuming data is an array with a single cat object
}

function updateCatInfo(catData) {
  const breedInfo = catData.breeds && catData.breeds.length > 0 ? catData.breeds[0] : null;

  infoBlock.innerHTML = `
    <img src="${catData.url}" alt="Cat">
    <h2>${breedInfo ? breedInfo.name : 'Unknown Breed'}</h2>
    <p>Description: ${breedInfo ? breedInfo.description : 'No description available.'}</p>
    <p>Temperament: ${breedInfo ? breedInfo.temperament : 'Unknown temperament.'}</p>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  fetchBreeds();

  selectInput.addEventListener('change', () => {
    const selectedBreedId = selectInput.value;
    fetchCatByBreed(selectedBreedId)
      .then(catData => updateCatInfo(catData))
      .catch(error => console.error('Error fetching cat info:', error));
  });
});