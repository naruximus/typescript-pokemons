import { PokemonsActionTypes, ActionsTypes } from './types';

const initialState = {
  isLoading: false,
  data: {
    total: 0,
    pokemons: null,
  },
  error: null,

  types: {
    isLoading: false,
    data: null,
    error: null,
  },
};

export const pokemons = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case PokemonsActionTypes.FETCH_POKEMONS:
      return {
        ...state,
        isLoading: true,
        data: {
          total: 0,
          pokemons: state.data.pokemons || null,
        },
        error: null,
      };
    case PokemonsActionTypes.FETCH_POKEMONS_RESOLVE:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
      };
    case PokemonsActionTypes.FETCH_POKEMONS_REJECT:
      return {
        ...state,
        isLoading: false,
        data: {
          total: 0,
          pokemons: null,
        },
        total: 0,
        error: action.payload,
      };

    case PokemonsActionTypes.FETCH_TYPES:
      return {
        ...state,
        types: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    case PokemonsActionTypes.FETCH_TYPES_RESOLVE:
      return {
        ...state,
        types: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case PokemonsActionTypes.FETCH_TYPES_REJECT:
      return {
        ...state,
        types: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };

    default:
      return state;
  }
};
