import React from "react";

import DEFAULT_IMG from "../assets/pokeball-icon-27038.png";

// Renders a single pokemon CaughtCard.

function CaughtCard({pokemon}) {


    return (
        
        <div className="PokemonCard"> 
            <div className="PokemonCard-front">
                <img 
                    className="PokemonCard-img" 
                    src={pokemon.sprites.other["official-artwork"].front_default ? pokemon.sprites.other["official-artwork"].front_default : DEFAULT_IMG} 
                    alt={pokemon.name} 
                />
                <p className="PokemonCard-name">"{pokemon.pName}"</p>   
            </div> 

        </div>
    );
}

export default CaughtCard;
