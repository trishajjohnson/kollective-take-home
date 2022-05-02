import { configureStore } from '@reduxjs/toolkit';
import pokemonsReducer from '../features/pokemon/pokemonsSlice';

export const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
  },
});
