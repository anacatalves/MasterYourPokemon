import pokemons from "./data.js";
import {renderItems, searchItem} from "./pokemonsList.js"
import {renderItemDetails, getItem} from "./pokemonDetail.js"


//TOGGLE BETWEEN BODY 1 AND BODY 2 - VARIABLES
let body1 = document.querySelector(".body1");
let body2 = document.querySelector(".body2");
let buttonExit = document.querySelector(".exit");
//SEARCH BAR - VARIABLES
const itemsE1 = document.querySelector(".items");
let searchButton = document.querySelector(".search-button img");
let searchedItem = document.querySelector(".search-bar");
//DETAILS VARIABLES
const selectedItemE1 = document.querySelector(".selected-item");

function init() {
    renderItems(pokemons, itemsE1);
}
init();

let buttonSelect = document.querySelectorAll(".button-select");

//TOGGLE BETWEEN BODY 1 AND BODY 2
function toggleDetailScreen(showDetailScreen) {
    if(showDetailScreen) {
        body2.style.display = "block"
        body1.style.display = "none"
        renderItemDetails(pokemons,selectedItemE1);

    } else {
        body1.style.display = "block"
        body2.style.display = "none"
    }
}

//Pass the same parameters here as in the functions
searchButton.addEventListener('click', function () {searchItem(pokemons,itemsE1,searchedItem)} );

buttonSelect.forEach( (element) => {
    element.addEventListener('click', function() { toggleDetailScreen(true) })
})

buttonExit.addEventListener('click', function () { toggleDetailScreen(false) })



/* //SEARCH BAR - Exit route
let exitSearch = document.querySelector(".undefined-btn");

// exitSearch.addEventListener('click', renderItems);
exitSearch.addEventListener('click', function () {renderItemDetails(pokemons,selectedItemE1)} ) */





// ANOTHER WAY TO DO IT:

/* function changeScreens() {
    if(body1.style.display == "block") {
        body1.style.display = "none"
    } 
    if (body2.style.display == "none") {
        body2.style.display = "block"
    }    
}
    
function backToMainScreen() {
    if (body2.style.display == "block") {
        body2.style.display = "none"
    }
    if (body1.style.display == "none") {
        body1.style.display = "block";
    }
}

//Since using querySelectorAll creates an array of 'buttons',
//we have to use forEach to apply the EventListeners to all butons.

function updateEventListeners() {
    buttonSelect.forEach( (element) => {
        element.addEventListener('click', changeScreens)
    })

    buttonExit.forEach((element) => {
        element.addEventListener('click', backToMainScreen)
    }) 
}

updateEventListeners(); */
