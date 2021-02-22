import React, { useEffect, useState } from 'react';

import style from './Pokedex.module.scss';
import { Footer } from '../../components';
import { PokemonCard } from './components';

import { IPokemons } from './pokemons';

const usePokemons = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons?limit=100');
        const json = await response.json();

        setData(json);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return { data, isLoading, isError };
};

export const Pokedex = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error!</div>;

  return (
    <div className={style.root}>
      <div className={style.title}>
        {data.total} <b>Pokemons</b> for you to choose your favorite
      </div>
      <div className={style.contentWrap}>
        {data.pokemons.map((pokemon: IPokemons) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <Footer />
    </div>
  );
};
