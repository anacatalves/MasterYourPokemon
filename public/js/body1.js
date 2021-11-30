//SELECT POKEMONS
const itemsE1 = document.querySelector(".items");

//RENDER POKEMONS
function renderItems(){
    pokemons.results.forEach( (item) => {
        itemsE1.innerHTML += `
            <div class="item">
                        <div class="item-container">

                            <figure class="item-img">
                                <img src="${item.sprites.front_default}">
                            </figure> 

                            <div class="item-name">
                                <h1>${item.name}</h1>
                                <p>${item.types[0].type.name}</p>
                            </div>
                            
                            <button class="button-select">
                                <img class ="next" src="img/next-icon.png">
                            </button>

                        </div>
                    </div>
            `
    })
}

renderItems();

// SEARCH BAR FUNCTION

// DECLARE VARIABLES
let searchButton = document.querySelector(".search-button img");

let searchedItem = null;
let matchItem = null; 

function searchItem (){
    searchedItem = document.querySelector(".search-bar").value;

    matchItem = pokemons.results.find( item => item.name === searchedItem)
    
    if (matchItem === undefined) {
        itemsE1.innerHTML = `<div class ="undefined"> 💔 Pokémon not found in Pokédex 💔 </div>`
    }
    else {
        itemsE1.innerHTML = `
            <div class="item">
                        <div class="item-container">

                            <figure class="item-img">
                                <img src="${matchItem.sprites.front_default}">
                            </figure> 

                            <div class="item-name">
                                <h1>${matchItem.name}</h1>
                                <p>${matchItem.types[0].type.name}</p>
                            </div>
                            
                            <button class="button-select">
                                <img class ="next" src="img/next-icon.png">
                            </button>

                        </div>
                    </div>
            `
    }
}

searchButton.addEventListener('click', searchItem);