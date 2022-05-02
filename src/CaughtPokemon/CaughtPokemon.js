import React, { useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setPokemons } from "../features/pokemon/pokemonsSlice";
import "./CaughtPokemon.css";

// Renders container for your caught pokemon at route /. Your caught pokemon
//  are saved in localStorage and stored in Redux state.

// Added option to clear localStorage of caught pokemon.

const CaughtPokemon = () => {
    const pokemons = useSelector(state => state.pokemons);
    const dispatch = useDispatch();
    const [isShowing, setIsShowing] = useState(false);

    function handleCancel(e) {
        e.preventDefault();

        setIsShowing(false); 
    }

    function handleClick(e) {
        e.preventDefault();

        setIsShowing(true); 
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        localStorage.setItem("pokemons", JSON.stringify([]));
        dispatch(setPokemons([]));
        setIsShowing(false);
    }

    return (
        <div className="CaughtPokemon">
            <h1>Your Caught Pokemon</h1>
            <Link className="btn" to={`/catch`}>Catch Pokemon</Link>
            {pokemons.pokemons.length > 0 ? <button id="set-em-free" className="btn" onClick={handleClick}>Set Em Free</button> : <></>}
            
            {pokemons.pokemons.length > 0 ? (
                <PokemonList isCaught={true} pokes={pokemons.pokemons} />   
            ) : (
                <p>You haven't caught any pokemon yet!  If you want to catch pokemon, click the 
                    button below.
                </p>
            )}
            {isShowing ? (
                <div id="single-modal" className="modal">

                    
                    <div className="modal-content">
                        <p>Wow!  How humanitarian of you.  Are you sure you want to set them ALL free?</p>
                        <form onSubmit={handleSubmit}>
                            <button id="cancel-all" className="btn" onClick={handleCancel}>Cancel</button>
                            <button className="btn">Free the Pokemons</button>
                        </form>
                    </div>

                </div>   
            ) : (
                <></>
            )}
        </div>
    )
}

export default CaughtPokemon;