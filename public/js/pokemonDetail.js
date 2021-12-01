import pokemons from "./data.js";
const selectedItemE1 = document.querySelector(".selected-item");

//SELECT DESIRED POKEMON
function getItem (id, list) {
    let item = list.find((e) => e.id === id);
    return item
}

//RENDER POKEMONS
function renderItemDetails(pokemons,selectedItemE1){
    //let selectedPokemon = pokemons.results.find( item => item.id === selectedPokemon.id)
    /* const item = getItem(id, pokemons.results)
    if (getItem(id, pokemons.results) === item.id) { */
    pokemons.results.forEach( (selectedPokemon) => {
            selectedItemE1.innerHTML = `
                <figure class="item-img-container">
                    <img class ="item-img" src="${selectedPokemon.sprites.front_default}">
                </figure>
    
                <div class="item-characteristics">
                    <h1>${selectedPokemon.name}</h1>
                    
                    <div class="item-stats">
                        <p>STATS</p>
                        <img src="img/stats.png">
                    </div>
    
                    <div class="item-stats-strenghts">
                        <p>Attack</p>
                        <p>62</p>
                        <progress id="progressbar" value="62" max="100">62%</progress>
                    </div>
    
                </div>
                `
    });
}




renderItemDetails(pokemons,selectedItemE1);
export {renderItemDetails, getItem}