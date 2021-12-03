let recipeName = document.querySelector("#recipe-name")
let recipeDisplay= document.querySelector("#recipe-display")
let recipeButton = document.querySelector("#recipe-button")
let displayRecipe = document.querySelector("#display-recipe")
let ol = document.querySelector("ol")
let recipeInfo = document.querySelector("#recipe-info")
let olHidden = document.querySelector("#hidden")

async function fetchRecipe() {

let randomIndex = Math.floor(Math.random()*20)
let foodInput = `${document.querySelector("#food-input").value}`

if (foodInput === "") {
    return
}

let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${foodInput}&app_id=fc126299&app_key=%209cb9978bbed610fab115b8d2385a98fe`
const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${foodInput}&app_id=fc126299&app_key=%209cb9978bbed610fab115b8d2385a98fe`);
const data = await response.json();
olHidden.id = "olHere"
let randomRecipe = data.hits[randomIndex].recipe
console.log(randomRecipe)
let recipeLabel= randomRecipe.label;
recipeName.innerText = recipeLabel
let recipeImage = randomRecipe.image;
recipeInfo.innerText = `Total time (mins): ${randomRecipe.totalTime}
Calories (kcals): ${randomRecipe.calories}`
recipeDisplay.src = recipeImage
ol.innerHTML= "Ingredients"
console.log(randomRecipe)
for(let i=0; i<randomRecipe.ingredients.length; i++) {
    let li = document.createElement("li")
    li.innerText = randomRecipe.ingredients[i].text
    ol.appendChild(li)
} 
}

recipeButton.addEventListener("click" , fetchRecipe)