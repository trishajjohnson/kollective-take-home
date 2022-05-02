import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import PokemonList from '../PokemonList/PokemonList';
import "./WildPokemon.css";


const WildPokemon = () => {
    const [infoLoaded, setInfoLoaded] = useState(false);
    const [pokemon, setPokemon] = useState(null);
    const totalPokemonInAPI = 1126;
    
    useEffect(function getPokemon() {
        async function fetchWildPokemon() {
            try {
                let result = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${totalPokemonInAPI}`);
                const randTenIdx = Array(12)
                                      .fill()
                                      .map(() => Math.floor(totalPokemonInAPI * Math.random()));
                const tenRandPokes = randTenIdx.map(i => result.data.results[i]); 
                const pokes = [];

                for(let poke of tenRandPokes) {
                    let p = await axios.get(poke.url);
                    pokes.push(p.data);
                }
                setPokemon(pokes);  
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
            <div className='WildPokemon-header'>
                <h1>Catch a Pokemon</h1>
                <Link className="back-btn catch" to={`/`}>Back</Link>
            </div>
            <PokemonList isCaught={false} pokes={pokemon} />
        </div>
    );
}

export default WildPokemon;