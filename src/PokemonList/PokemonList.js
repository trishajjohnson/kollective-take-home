import React from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import { Link } from "react-router-dom";
import "./PokemonList.css";


const PokemonList = ({isCaught, pokes}) => {
    let renderedPokemon;
    
    if(isCaught) {
        renderedPokemon = pokes.map(p => (
            <Link to={`/pokemon/${p.name}/details`} key={p.name}>
                <PokemonCard isWild={false} key={p.name} pokemon={p} />  
            </Link>
        ));
    } else {
        renderedPokemon = pokes.map(p => (
            <PokemonCard isWild={true} key={p.name} pokemon={p} />
        ));
    }

    return (
        <div className="PokemonList">    
            {renderedPokemon}    
        </div>
    );
}

export default PokemonList;