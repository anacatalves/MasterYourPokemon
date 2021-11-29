//SELECT POKEMONS
const itemsE1 = document.querySelector(".items");

//TURN POKEMONS OBJECT INTO ARRAY
let pokemonsList = pokemons.results
/* let pokemonType = pokemons.types.type.name */
/* 
console.log(pokemonType) */

console.log(pokemonsList)


//RENDER POKEMONS
function renderItems(){
    pokemonsList.forEach( (item) => {
        itemsE1.innerHTML += `
            <div class="item">
                        <div class="item-container">

                            <figure class="item-img">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png">
                            </figure> 

                            <div class="item-name">
                                <h1>${item.name}</h1>
                                <p>POWER</p>
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


