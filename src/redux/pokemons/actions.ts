import { Dispatch } from 'react';

import { req } from '../../utils/request';
import { PokemonsActionTypes, ActionsTypes } from './types';
import { configEndPoints } from '../../config';
import { IPokemons, ITypes } from '../../interface/pokemons';
import { IRootInitialState } from '../store';

export const getPokemonsAction = (query = {}, deps = []) => {
  return async (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(fetchPokemons());

    try {
      const response = await req<IPokemons>(configEndPoints.getPokemons, query);

      dispatch(fetchPokemonsResolve(response));
    } catch (error) {
      dispatch({ type: PokemonsActionTypes.FETCH_POKEMONS_REJECT, payload: error });
    }
  };
};

export const fetchPokemons = () => ({ type: PokemonsActionTypes.FETCH_POKEMONS });
export const fetchPokemonsResolve = (res: IPokemons) => ({
  type: PokemonsActionTypes.FETCH_POKEMONS_RESOLVE,
  payload: { ...res },
});

export const getPokemons = (state: IRootInitialState) => state.pokemons.data.pokemons;
export const getPokemonsTotal = (state: IRootInitialState) => state.pokemons.data.total;
export const getPokemonsLoading = (state: IRootInitialState) => state.pokemons.isLoading;
export const getPokemonsError = (state: IRootInitialState) => state.pokemons.error;

export const getTypesAction = () => {
  return async (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(fetchTypes());

    try {
      const response = await req<ITypes>(configEndPoints.getTypes, {});

      dispatch(fetchTypesResolve(response));
    } catch (error) {
      dispatch({ type: PokemonsActionTypes.FETCH_TYPES_REJECT, payload: error });
    }
  };
};

export const fetchTypes = () => ({ type: PokemonsActionTypes.FETCH_TYPES });
export const fetchTypesResolve = (res: ITypes) => ({ type: PokemonsActionTypes.FETCH_TYPES_RESOLVE, payload: res });

export const getPokemonsTypes = (state: IRootInitialState) => state.pokemons.types.data;
export const getPokemonsTypesLoading = (state: IRootInitialState) => state.pokemons.types.isLoading;
