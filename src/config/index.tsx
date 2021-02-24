const isProd = process.env.NODE_ENV === 'production';

const serverProd = {
  protocol: 'https',
  host: 'secure-meadow-03435.herokuapp.com',
};
const serverDev = {
  protocol: 'http',
  host: 'zar.hosthot.ru',
};

export const config = {
  client: {
    server: isProd ? { ...serverProd } : { ...serverDev },
    endpoint: {
      getPokemons: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons',
        },
      },
      getPokemon: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemon/{id}',
        },
      },
      // Fake API
      createPokemon: {
        method: 'POST',
        uri: {
          pathname: '/api/v1/pokemon/create',
        },
      },
      updatePokemon: {
        method: 'PATCH',
        uri: {
          pathname: '/api/v1/pokemon/{id}',
        },
      },
      deletePokemon: {
        method: 'DELETE',
        uri: {
          pathname: '/api/v1/pokemon/{id}/delete',
        },
      },
    },
  },
};
