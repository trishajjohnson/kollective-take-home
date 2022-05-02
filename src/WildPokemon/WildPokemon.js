import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import PokemonList from '../PokemonList/PokemonList';
import "./WildPokemon.css";

// Renders WildPokemon component at route /catch.  Pokeapi
// is called from this component in useEffect and passes 12
// random pokemon to the PokemonList component along with 
// isCaught=false.

const WildPokemon = () => {
    const [infoLoaded, setInfoLoaded] = useState(false);
    const [pokemons, setPokemons] = useState(null);
    // total # of pokemon in API to be randomly sampled from.
    const totalPokemonInAPI = 1126;
    // number of pokemon being sampled from total to display.
    const randomSampleNum = 12;

    useEffect(function getPokemon() {
        async function fetchWildPokemon() {
            try {
                let result = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${totalPokemonInAPI}`);
                const randTenIdx = Array(randomSampleNum)
                                      .fill()
                                      .map(() => Math.floor(totalPokemonInAPI * Math.random()));
                const tenRandPokes = randTenIdx.map(i => result.data.results[i]); 
                const pokes = [];

                for(let poke of tenRandPokes) {
                    let p = await axios.get(poke.url);
                    pokes.push(p.data);
                }
                setPokemons(pokes);  
            } catch(e) {
              console.log(e);
            }
            setInfoLoaded(true)
        }
        fetchWildPokemon();
    }, []);

    if(!infoLoaded) return <div className="loading">Loading...</div>;

    return (
        <div className='WildPokemon'>
            <h1>Catch a Pokemon</h1>
            <div className='WildPokemon-header'>
                <Link className="back-btn catch" to={`/`}>Back</Link>
            </div>
            <PokemonList isCaught={false} pokes={pokemons} />
        </div>
    );
}

export default WildPokemon;