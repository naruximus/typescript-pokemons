import React, { useState } from 'react';

import style from './Pokedex.module.scss';
import { Heading, Footer } from '../../components';
import { PokemonCard } from './components';
import { useData } from '../../hooks/getData';

// import { IPokemons } from './pokemons';
import { IPokemons, IPokemon } from '../../interface/pokemons';

interface IQuery {
  name?: string;
  limit?: number;
}

export const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({ limit: 9 });

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [searchValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
    }));
  };

  // if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error!</div>;

  return (
    <div className={style.root}>
      <Heading component="h2" className={style.title}>
        {!isLoading && data && data.total} <b>Pokemons</b> for you to choose your favorite
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
        {!isLoading &&
          data &&
          data.pokemons.map((pokemon: IPokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
      </div>
      <Footer />
    </div>
  );
};
