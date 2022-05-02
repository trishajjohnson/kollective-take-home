import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./PokemonDetail.css";


const PokemonDetail = () => {
    const name = useParams().name;
    const pName = useSelector(state => state.pokemons).pokemons.filter(p => p.name === name)[0].pName;
    const [pokemon, setPokemon] = useState(null);
    const [infoLoaded, setInfoLoaded] = useState(false);

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


    if(!infoLoaded) return <div className="loading">Loading...</div>;

    return (
        <div className="PokemonDetail">
            <h1>Your Caught Pokemon</h1>
            <div className="PokemonDetail-header">
                <Link className="back-btn" to={`/`}>Back</Link>
            </div>
            <div className="PokemonDetail-body">
                <p className="base-exp small">Base Exp {pokemon.base_experience}</p>
                <h2 className="PokemonDetail-name">"{pName}"</h2>
                <img className="PokemonDetail-img" src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
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
        </div>
    )
}

export default PokemonDetail;