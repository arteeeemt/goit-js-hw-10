import {selectInput,infoBlock,errorBlock,loader} from "./index"
import { createMarkup } from "./index"
export function fetchBreeds(){
  const BASE_URL = 'https://api.thecatapi.com/v1/breeds'
  return fetch(BASE_URL)
  .then((response) => {
      if(!response.ok){
          throw new Error
      }
    return response.json();
  })
  .then((data) => {
    data.map((cat)=>{
      
      const option = document.createElement('option')
      option.value = cat.id;
      option.textContent = cat.name;
     selectInput.appendChild(option);
     
    })
  })
  .catch(error => {
    
      errorBlock.style.display = 'inline'
      
  })
}

export function fetchCatByBreed(breedId){
  loader.style.display = 'inline'
  fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=live_mkhQr4FHRFIVHQ0bJWYHd7zmtXfCmBCtCCScuFaYI5iKQOlZDc4EZSmh3QL2YcXJ`)
  .then((response) => {
     if(!response.ok){
      throw new Error
      
     }
     errorBlock.style.display = 'none'
    return response.json();
  })
  .then((data) => {
    createMarkup(data)
  
  })
  .catch(error => {
      errorBlock.style.display = 'inline'
      infoBlock.textContent = ''
    })
    .finally(() => {
      loader.style.display = 'none'
    });

  
  
}
