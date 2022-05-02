import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPokemons } from "../features/pokemon/pokemonsSlice";
import "./PokemonCard.css";

import DEFAULT_IMG from "../assets/pokeball-icon-27038.png";

/* Renders a single pokemon card. */
function PokemonCard({isWild, pokemon}) {
    const caughtPokemon = useSelector(state => state.pokemons);
    const dispatch = useDispatch();    

    const [isSelected, setIsSelected] = useState(false);
    const [showNameForm, setShowNameForm] = useState(false);
    const [formData, setFormData] = useState({
        pName: "",
      });
    
    function handleChange(e) {
        const { name, value } = e.target;

        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const p = { 
            pName: formData.pName, 
            name: pokemon.name, 
            abilities: pokemon.abilities, 
            sprites: { other: { "official-artwork": { front_default: pokemon.sprites.other["official-artwork"].front_default } } }
        };

        dispatch(setPokemons([...caughtPokemon.pokemons, p]));
        localStorage.setItem("pokemons", JSON.stringify([...caughtPokemon.pokemons, p]));

        setIsSelected(false);
    }


    return (
        
        <div className="PokemonCard">
           
            {isSelected ? (
                <div className="PokemonCard-front">
                    <p className="flip" onClick={() => setIsSelected(false)}>x</p>
                    <div className="PokemonCard-details">
                        <h3>Type:</h3>
                        <p>{pokemon.types.map(t => t.type.name).join(', ')}</p>
                        <h3 className="PokemonCard-abilities">Abilities:</h3>
                        <p>{pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
                    </div>
                    {showNameForm ? (
                        <form className="catch-form" onSubmit={handleSubmit}>
                            <input 
                                className="pName-input"
                                onChange={handleChange}
                                type="text"
                                name="pName"
                                value={formData.pName}
                                id="pName"
                                placeholder="Name"
                                maxLength={15}
                            />
                            <button>Catch</button>
                        </form>
                    ) : (
                        <button className="catch-btn" onClick={() => setShowNameForm(true)}>Catch</button> 
                    )}
                </div>
            ) : (
                <div className="PokemonCard-front">
                    <p className="flip" onClick={() => setIsSelected(true)}>+</p>
                    <img className="PokemonCard-img" src={pokemon.sprites.other["official-artwork"].front_default ? pokemon.sprites.other["official-artwork"].front_default : DEFAULT_IMG} alt={pokemon.name} />
                    <p className="PokemonCard-name">{pokemon.name}</p>   
                </div>
            )}
            
        </div>
    );
}

export default PokemonCard;
