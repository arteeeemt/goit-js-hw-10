const selectInput = document.querySelector('.breed-select')
const infoBlock = document.querySelector('.cat-info')
function fetchBreeds(){
    return fetch('https://api.thecatapi.com/v1/breeds')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.map((cat)=>{
        const option = document.createElement('option')
        option.value = cat.id;
        option.textContent = cat.name;
       selectInput.appendChild(option);
       
      })
    });
}

fetchBreeds()

selectInput.addEventListener('change',function(){
    const selectedBreedId = selectInput.value
    console.log(selectedBreedId)
    fetchCatByBreed(selectedBreedId)
})
function fetchCatByBreed(breedId){
    
    fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
    });
}

function createMarkup(){}