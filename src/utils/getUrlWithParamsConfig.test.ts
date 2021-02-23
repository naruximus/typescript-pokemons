import { getUrlWithParamsConfig } from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('Должна принимать 2 аргумента "getPokemons" и пустой объект, на выходе получить объект с полями method, uri - объект с полями pathname, protocol, host и пустым query, body - пустой объект', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      method: 'GET',
      uri: {
        pathname: '/api/v1/pokemons',
        protocol: 'http',
        host: 'zar.hosthot.ru',
        query: {},
      },
      body: {},
    });
  });

  test('Должна принимать 2 аргумента "getPokemons" и query: { name: "Pikachu" }, на выходе получить объект с полями method, uri - объект с полями pathname, protocol, host и query:{ name: "Pikachu" },  body - пустой объект', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        pathname: '/api/v1/pokemons',
        protocol: 'http',
        host: 'zar.hosthot.ru',
        query: {
          name: 'Pikachu',
        },
      },
      body: {},
    });
  });

  test('Должна принимать 2 аргумента "getPokemon" и query: { id: 1 }, на выходе получить объект с полями method, uri - объект с полями pathname, protocol, host и query - пустой объект,  body - пустой объект', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 1 });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        pathname: '/api/v1/pokemon/1',
        protocol: 'http',
        host: 'zar.hosthot.ru',
        query: {},
      },
      body: {},
    });
  });

  test('Должна принимать 2 аргумента "createPokemon" и query: { name: "Pikachu" }, на выходе получить объект с полями method, uri - объект с полями pathname, protocol, host и query:{},  body - { name: "Pikachu" }', () => {
    const url = getUrlWithParamsConfig('createPokemon', { name: 'Pikachu' });

    expect(url).toEqual({
      method: 'POST',
      uri: {
        pathname: '/api/v1/pokemon/create',
        protocol: 'http',
        host: 'zar.hosthot.ru',
        query: {},
      },
      body: {
        name: 'Pikachu',
      },
    });
  });
  test('Должна принимать 2 аргумента "updatePokemon" и query: { id: 1 }, на выходе получить объект с полями method, uri - объект с полями pathname, protocol, host и query:{},  body - { id: 1 }', () => {
    const url = getUrlWithParamsConfig('updatePokemon', { id: 1 });

    expect(url).toEqual({
      method: 'PATCH',
      uri: {
        pathname: '/api/v1/pokemon/1',
        protocol: 'http',
        host: 'zar.hosthot.ru',
        query: {},
      },
      body: {},
    });
  });
  test('Должна принимать 2 аргумента "deletePokemon" и query: { id: 1 }, на выходе получить объект с полями method, uri - объект с полями pathname, protocol, host и query:{},  body - { id: 1 }', () => {
    const url = getUrlWithParamsConfig('deletePokemon', { id: 1 });

    expect(url).toEqual({
      method: 'DELETE',
      uri: {
        pathname: '/api/v1/pokemon/1/delete',
        protocol: 'http',
        host: 'zar.hosthot.ru',
        query: {},
      },
      body: {},
    });
  });
});
