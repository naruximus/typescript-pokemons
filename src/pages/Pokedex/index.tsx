import React from 'react';

import style from './Pokedex.module.scss';
import { Footer } from '../../components';
import { PokemonCard } from './components';

import { pokemons, IPokemons } from './pokemons';

export const Pokedex = () => {
  console.log('pokemons :>> ', pokemons);
  return (
    <div className={style.root}>
      <div className={style.title}>
        800 <b>Pokemons</b> for you to choose your favorite
      </div>
      <div className={style.contentWrap}>
        {pokemons.map((pokemon: IPokemons) => (
          <PokemonCard pokemon={pokemon} />
        ))}
      </div>
      <Footer />
    </div>
  );
};
