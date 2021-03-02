import React from 'react';
import cn from 'classnames';

import { Heading } from '../../../../components';
import style from './PokemonCard.module.scss';
import { IPokemon } from '../../../../interface/pokemons';
import { toCapitalizeFirstLetter } from '../../../../utils/toCapitalizeFirstLetter';

interface IPokemonCardProps {
  pokemon: IPokemon;
}

export const PokemonCard: React.FC<IPokemonCardProps> = ({ pokemon }) => {
  const { id, name, img, stats, types } = pokemon;
  const mainType = types[0];

  return (
    <article className={style.root}>
      <div className={style.infoWrap}>
        <Heading component="h3" className={style.titleName}>
          {toCapitalizeFirstLetter(name)}
        </Heading>
        <section className={style.statsWrap}>
          <div className={style.statsItem}>
            <div className={style.statsValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={style.statsItem}>
            <div className={style.statsValue}>{stats.defense}</div>
            Defense
          </div>
        </section>
        <section className={style.labelWrap}>
          {types.map((type) => (
            <div key={`${id}-${type}`} className={cn(style.labelItem, style[type])}>
              {type}
            </div>
          ))}
        </section>
      </div>
      <div className={cn(style.pictureWrap, style[mainType])}>
        <img src={img} alt={name} />
      </div>
    </article>
  );
};
