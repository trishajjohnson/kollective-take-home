import React, { useEffect } from 'react';
import './App.css';
import Routes from './Routes';

function App() {

  useEffect(function getLocalStorage() {
    function setupLocalStorage() {
      if(!localStorage.getItem("pokemons")) {
        try {
          localStorage.setItem("pokemons", JSON.stringify([]));
        } catch(e) {
          console.log(e);
        }
      }
    }
    setupLocalStorage();
  }, []);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
