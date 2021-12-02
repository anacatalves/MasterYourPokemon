
//RENDER POKEMONS
function renderItemDetails(selectedPokemon,selectedItemE1){
console.log(selectedPokemon)

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
};



export {renderItemDetails}