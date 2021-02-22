import React from 'react';

import style from './Pokedex.module.scss';
import { Header, Footer, Layout } from '../../components';
import { PokemonCard } from './components';

import { pokemons, IPokemons } from './pokemons';

export const Pokedex = () => {
  console.log('pokemons :>> ', pokemons);
  return (
    <div className={style.root}>
      <Header />
      <div className={style.contentWrap}>
        {pokemons.map((pokemon: IPokemons) => (
          <PokemonCard pokemon={pokemon} />
        ))}
      </div>
      <Footer />
    </div>
  );
};
