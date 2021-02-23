import React from 'react';

import { Loader, Footer, Layout } from '../../components';
import { useData } from '../../hooks/getData';
import { IPokemon } from '../../interface/pokemons';

import style from './Pokemon.module.scss';

export interface IPokemonProps {
  id: string | number;
}

export const Pokemon: React.FC<IPokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<IPokemon>('getPokemon', { id });

  console.log('data :>> ', data);

  if (isLoading) return <Loader className={style.loader} />;

  return (
    <div className={style.root}>
      {isLoading ? <Loader /> : <Layout className={style.contentWrap}>Pokemon id - {data?.name}</Layout>}
      <Footer />
    </div>
  );
};
