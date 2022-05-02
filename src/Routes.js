import React from "react";
import { Route, Switch } from "react-router-dom";
import CaughtPokemon from "./CaughtPokemon/CaughtPokemon";
import WildPokemon from "./WildPokemon/WildPokemon";
import PokemonDetail from "./PokemonDetail/PokemonDetail";

const Routes = () => {

    return (
        <div>
           <Switch>
                <Route exact path="/catch">
                    <WildPokemon />
                </Route>
                <Route exact path="/pokemon/:name/details">
                    <PokemonDetail />
                </Route>
                <Route exact path="/">
                    <CaughtPokemon />
                </Route>
           </Switch>
          
        </div>
    );
}

export default Routes;