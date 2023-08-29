import axios from "axios";
import fetchBreeds from './cat-api.js';


 const errorBlock = document.querySelector('.error')
 const selectInput = document.querySelector('.breed-select')
const infoBlock = document.querySelector('.cat-info')
const loader = document.querySelector('.loader')
export default errorBlock 


axios.defaults.headers.common["x-api-key"] = "live_mkhQr4FHRFIVHQ0bJWYHd7zmtXfCmBCtCCScuFaYI5iKQOlZDc4EZSmh3QL2YcXJ"



loader.style.display = 'none'
errorBlock.style.display = 'none'

// function fetchBreeds(){
//     const BASE_URL = 'https://api.thecatapi.com/v1/breeds'
//     return fetch(BASE_URL)
//     .then((response) => {
//         if(!response.ok){
//             throw new Error
//         }
//       return response.json();
//     })
//     .then((data) => {
//       data.map((cat)=>{
//         const option = document.createElement('option')
//         option.value = cat.id;
//         option.textContent = cat.name;
//        selectInput.appendChild(option);
       
//       })
//     })
//     .catch(error => {
//         errorBlock.style.display = 'inline'
        
//     })
// }

fetchBreeds()

selectInput.addEventListener('change',function(){
    const selectedBreedId = selectInput.value
    
    fetchCatByBreed(selectedBreedId)
    console.log(selectedBreedId)
})
function fetchCatByBreed(breedId){
    loader.style.display = 'inline'
    fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=live_mkhQr4FHRFIVHQ0bJWYHd7zmtXfCmBCtCCScuFaYI5iKQOlZDc4EZSmh3QL2YcXJ`)
    .then((response) => {
       if(!response.ok){
        throw new Error
       }
      return response.json();
    })
    .then((data) => {
      createMarkup(data)
    })
    .catch(error => {
        errorBlock.style.display = 'inline'
        
      })
      .finally(() => {
        
        loader.style.display = 'none'
      });

    
    
}

function createMarkup(data){
    const { url } = data[0];
    const { name, description, temperament } = data[0].breeds[0]
    infoBlock.innerHTML = `<img class=cat-img src="${url}" alt="Картинка">
    <div><h1 class=header-title>${name}</h1>
    <p class=desc>${description}</p>
    <p class=temperament-desc>Temperament:${temperament}</p></div>`

}

