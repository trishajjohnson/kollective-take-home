import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPokemons } from "../features/pokemon/pokemonsSlice";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import "./PokemonDetail.css";

import DEFAULT_IMG from "../assets/pokeball-icon-27038.png";


// Renders pokemon detail page component, accessed by clicking the caught pokemon
// cards found at route /.

// Additional feature to free individual pokemon added to each PokemonDetail page.

const PokemonDetail = () => {
    const pokemons = useSelector(state => state.pokemons).pokemons;
    // Name provided by Pokeapi.
    const name = useParams().name;
    // Name given to pokemon by user when caught and saved to Redux state.
    const pName = pokemons.filter(p => p.name === name)[0].pName;

    const dispatch = useDispatch();
    const history = useHistory();

    const [pokemon, setPokemon] = useState(null);
    const [infoLoaded, setInfoLoaded] = useState(false);
    const [isShowing, setIsShowing] = useState(false);

    useEffect(function getPokemonDetail() {
        async function fetchPokemonDetails() {
            try {
                let poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                setPokemon(poke.data);  
            } catch(e) {
              console.log(e);
            }
            setInfoLoaded(true)
        }
        fetchPokemonDetails();
      }, [name]);

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

        const filteredPokemons = pokemons.filter(p => p.pName !== pName);
        localStorage.setItem("pokemons", JSON.stringify(filteredPokemons));
        dispatch(setPokemons(filteredPokemons));
        setIsShowing(false);
        history.push("/");
    }

    if(!infoLoaded) return <div className="loading">Loading...</div>;

    return (
        <div className="PokemonDetail">
            <h1>Your Caught Pokemon</h1>
            <div className="PokemonDetail-header">
                <Link className="btn detail-btn" to={`/`}>Back</Link>
                <button className="detail-btn btn" onClick={handleClick}>Free {pName}</button>
            </div>
            <div className="PokemonDetail-body">
                <p className="base-exp small">Base Exp {pokemon.base_experience}</p>
                <h2 className="PokemonDetail-name">"{pName}"</h2>
                <img className="PokemonDetail-img" src={pokemon.sprites.other["official-artwork"].front_default || DEFAULT_IMG} alt={pokemon.name} />
                <p className="small">No. {pokemon.id}, Height: {pokemon.height}, Weight: {pokemon.weight}</p>
                <div>
                    <h3 className="details">Species:</h3>
                    <p className="details species">{pokemon.name}</p>  
                </div>
                <div>
                    <h3 className="details">Abilities:</h3>
                    <p className="details">{pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
                </div>
                <div>
                    <h3 className="details">Types:</h3>
                    <p className="details">{pokemon.types.map(t => t.type.name).join(', ')}</p>
                </div>

            </div>

            {isShowing ? (
                <div id="single-modal" className="modal">

                    
                    <div className="modal-content">
                        <p>Are you sure you want to let {pName} go?</p>
                        <form id="free-one" onSubmit={handleSubmit}>
                            <button id="cancel-all" className="btn" onClick={handleCancel}>Cancel</button>
                            <button  className="btn">Let {pName} Go</button>
                        </form>
                    </div>

                </div>   
            ) : (
                <></>
            )}   
        </div>
    )
}

export default PokemonDetail;