//SELECT POKEMONS
const selectedItemE1 = document.querySelector(".selected-item");

//TURN POKEMONS OBJECT INTO ARRAY
let pokemonsList = pokemons.results

console.log(pokemonsList)


/* //RENDER POKEMONS
function renderSelectedItem(){
    pokemonsList.forEach( (item) => {
        selectedItemE1.innerHTML + `
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
 */