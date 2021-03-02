const isProd = process.env.NODE_ENV === 'production';

const serverProd = {
  protocol: 'https',
  host: 'secure-meadow-03435.herokuapp.com',
};

const serverDev = {
  protocol: 'http',
  host: 'zar.hosthot.ru',
};

export enum configEndPoints {
  getPokemons = 'getPokemons',
  getPokemon = 'getPokemon',
  getTypes = 'getTypes',

  createPokemon = 'createPokemon',
  updatePokemon = 'updatePokemon',
  deletePokemon = 'deletePokemon',
}

export const config = {
  client: {
    server: isProd ? { ...serverProd } : { ...serverDev },
    endpoint: {
      [configEndPoints.getPokemons]: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons',
        },
      },
      [configEndPoints.getPokemon]: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemon/{id}',
        },
      },
      [configEndPoints.getTypes]: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/types',
        },
      },
      // Fake API
      [configEndPoints.createPokemon]: {
        method: 'POST',
        uri: {
          pathname: '/api/v1/pokemon/create',
        },
      },
      [configEndPoints.updatePokemon]: {
        method: 'PATCH',
        uri: {
          pathname: '/api/v1/pokemon/{id}',
        },
      },
      [configEndPoints.deletePokemon]: {
        method: 'DELETE',
        uri: {
          pathname: '/api/v1/pokemon/{id}/delete',
        },
      },
    },
  },
};
