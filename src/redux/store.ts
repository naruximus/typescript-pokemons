import { combineReducers } from 'redux';

import { pokemons } from './pokemons';
import { IPokemonsInitialState } from './pokemons/types';

export interface IRootInitialState {
  pokemons: IPokemonsInitialState;
}

export const createRootReducer = () =>
  combineReducers({
    pokemons,
  });
