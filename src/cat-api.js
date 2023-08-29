
import errorBlock from "/src/index.js";

export default function fetchBreeds(){
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