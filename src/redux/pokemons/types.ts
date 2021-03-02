import { IStateRequest } from '../../interface';
import { IPokemons } from '../../interface/pokemons';

export enum PokemonsActionTypes {
  FETCH_POKEMONS = 'pokemons/FETCH_POKEMONS',
  FETCH_POKEMONS_RESOLVE = 'pokemons/FETCH_POKEMONS_RESOLVE',
  FETCH_POKEMONS_REJECT = 'pokemons/FETCH_POKEMONS_REJECT',

  FETCH_TYPES = 'pokemons/FETCH_TYPES',
  FETCH_TYPES_RESOLVE = 'pokemons/FETCH_TYPES_RESOLVE',
  FETCH_TYPES_REJECT = 'pokemons/FETCH_TYPES_REJECT',
}

export interface TypesAction {
  type: PokemonsActionTypes;
  payload?: string[];
}

export interface PokemonsAction {
  type: PokemonsActionTypes;
  payload?: IPokemons;
}

export interface IPokemonsInitialState {
  isLoading: boolean;
  data: IPokemons;
  error: object | null;
  types: IStateRequest<string>;
}

export type ActionsTypes = PokemonsAction | TypesAction;
