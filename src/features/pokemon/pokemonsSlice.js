import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: JSON.parse(localStorage.getItem("pokemons"))
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    }

  }
});

export const { setPokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;