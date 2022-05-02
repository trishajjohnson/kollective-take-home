import React, { useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setPokemons } from "../features/pokemon/pokemonsSlice";
import "./CaughtPokemon.css";


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

            {pokemons.pokemons.length > 0 ? (
                <div>
                    <Link className="btn" to={`/catch`}>Catch Pokemon</Link>
                    <button id="set-em-free" className="btn" onClick={handleClick}>Set Em Free</button>
                    <PokemonList isCaught={true} pokes={pokemons.pokemons} />
                </div>
            ) : (
                <div>
                    <Link className="btn" to={`/catch`}>Catch Pokemon</Link>
                    <p>You haven't caught any pokemon yet!  If you want to catch pokemon, click the 
                        button below.
                    </p>
                </div>
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