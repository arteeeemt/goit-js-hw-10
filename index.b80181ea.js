!function(){var n=document.querySelector(".breed-select"),e=document.querySelector(".cat-info");document.addEventListener("DOMContentLoaded",(function(){fetch("https://api.thecatapi.com/v1/breeds").then((function(n){return n.json()})).then((function(e){e.forEach((function(e){var t=document.createElement("option");t.value=e.id,t.textContent=e.name,n.appendChild(t)}))})),n.addEventListener("change",(function(){var t,c=n.value;(t=c,fetch("https://api.thecatapi.com/v1/images/search?breed_ids=".concat(t)).then((function(n){return n.json()})).then((function(n){return n[0]}))).then((function(n){return function(n){var t=n.breeds&&n.breeds.length>0?n.breeds[0]:null;e.innerHTML='\n    <img src="'.concat(n.url,'" alt="Cat">\n    <h2>').concat(t?t.name:"Unknown Breed","</h2>\n    <p>Description: ").concat(t?t.description:"No description available.","</p>\n    <p>Temperament: ").concat(t?t.temperament:"Unknown temperament.","</p>\n  ")}(n)})).catch((function(n){return console.error("Error fetching cat info:",n)}))}))}))}();
//# sourceMappingURL=index.b80181ea.js.map
