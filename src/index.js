
 export const selectInput=document.querySelector('.breed-select')
  export const infoBlock =document.querySelector('.cat-info')
  export const errorBlock=document.querySelector('.error')
  export const loader=document.querySelector('.loader')


import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_mkhQr4FHRFIVHQ0bJWYHd7zmtXfCmBCtCCScuFaYI5iKQOlZDc4EZSmh3QL2YcXJ"

import { fetchBreeds,fetchCatByBreed } from "./cat-api";
 
// const selectInput = document.querySelector('.breed-select')
// const infoBlock = document.querySelector('.cat-info')
// const errorBlock = document.querySelector('.error')
// const loader = document.querySelector('.loader')

loader.style.display = 'none'
errorBlock.style.display = 'none'




window.addEventListener('DOMContentLoaded',fetchBreeds)

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


selectInput.addEventListener('change',function(){
    const selectedBreedId = selectInput.value
    
    fetchCatByBreed(selectedBreedId)
    console.log(selectedBreedId)
})

// function fetchCatByBreed(breedId){
//     loader.style.display = 'inline'
//     fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=live_mkhQr4FHRFIVHQ0bJWYHd7zmtXfCmBCtCCScuFaYI5iKQOlZDc4EZSmh3QL2YcXJ`)
//     .then((response) => {
//        if(!response.ok){
//         throw new Error
//        }
//        errorBlock.style.display = 'none'
//       return response.json();
//     })
//     .then((data) => {
//       createMarkup(data)
      
//     })
//     .catch(error => {
//         errorBlock.style.display = 'inline'
//         infoBlock.textContent = ''
//       })
//       .finally(() => {
        
//         loader.style.display = 'none'
//       });

    
    
// }

export function createMarkup(data){
    const { url } = data[0];
    const { name, description, temperament } = data[0].breeds[0]
    infoBlock.innerHTML = `<img class=cat-img src="${url}" alt="Картинка">
    <div><h1 class=header-title>${name}</h1>
    <p class=desc>${description} </p>
    <p class=temperament-desc>Temperament:${temperament}</p></div>`

}

