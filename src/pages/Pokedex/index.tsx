import React, { useState, useMemo } from 'react';

import style from './Pokedex.module.scss';
import { Heading, Footer } from '../../components';
import { PokemonCard } from './components';
import { useData } from '../../hooks/getData';

import { IPokemons } from './pokemons';

export const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({ limit: '9' });

  const { data, isLoading, isError } = useData('getPokemons', query, [searchValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state) => ({
      ...state,
      name: e.target.value,
    }));
  };

  // if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error!</div>;

  return (
    <div className={style.root}>
      <Heading component="h2" className={style.title}>
        {!isLoading && data.total} <b>Pokemons</b> for you to choose your favorite
      </Heading>
      <div className={style.contentWrap}>
        <input
          className={style.search}
          type="text"
          value={searchValue}
          name="search"
          placeholder="Encuentra tu pokémon..."
          onChange={handleSearchChange}
        />
        {!isLoading && data.pokemons.map((pokemon: IPokemons) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
      </div>
      <Footer />
    </div>
  );
};
