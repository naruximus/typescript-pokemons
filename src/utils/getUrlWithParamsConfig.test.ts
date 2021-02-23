import { getUrlWithParamsConfig } from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('Должна принимать 2 аргумента "getPokemons" и пустой объект, на выходе получить объект с полями pathname, protocol, host и пустым query ', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      pathname: '/api/v1/pokemons',
      protocol: 'http',
      host: 'zar.hosthot.ru',
      query: {},
    });
  });

  test('Должна принимать 2 аргумента "getPokemons" и query: { name: "Pikachu" }, на выходе получить объект с полями pathname, protocol, host и query: { name: "Pikachu" } ', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      pathname: '/api/v1/pokemons',
      protocol: 'http',
      host: 'zar.hosthot.ru',
      query: {
        name: 'Pikachu',
      },
    });
  });

  test('Должна принимать 2 аргумента "getPokemon" и query: { id: 1 }, на выходе получить объект с полями pathname, protocol, host и пустой объект query', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 1 });

    expect(url).toEqual({
      pathname: '/api/v1/pokemon/1',
      protocol: 'http',
      host: 'zar.hosthot.ru',
      query: {},
    });
  });
});
