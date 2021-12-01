//RENDER POKEMONS
function renderItems(pokemons, itemsE1){
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

// SEARCH BAR FUNCTION
// Import variables as parameters from the main file (app.js) 
function searchItem (pokemons, itemsE1, searchedItem){
    
    let matchItem = pokemons.results.find( item => item.name === searchedItem.value)
    
    if (matchItem === undefined) {
        itemsE1.innerHTML = `<div class ="undefined">
                            POKEMON NOT FOUND IN POKEDESK
                            <button class ="undefined-btn"> <img src="img/close-icon.png"> </button>
                            </div>`
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

export {renderItems, searchItem};

