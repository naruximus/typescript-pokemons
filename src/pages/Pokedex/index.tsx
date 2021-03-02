import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from './Pokedex.module.scss';
import { Heading, Loader, Layout } from '../../components';
import { PokemonCard } from './components';
import { IPokemon } from '../../interface/pokemons';
import { useDebounce } from '../../hooks/useDebounce';
import {
  getPokemonsAction,
  getPokemons,
  getPokemonsLoading,
  getPokemonsError,
  getPokemonsTotal,
  getTypesAction,
  getPokemonsTypes,
  getPokemonsTypesLoading,
} from '../../redux/pokemons/actions';

interface IQuery {
  name?: string;
  limit?: number;
}

export const Pokedex = () => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({ limit: 18 });
  const debouncedValue = useDebounce(searchValue, 500);

  const types = useSelector(getPokemonsTypes);
  const isTypesLoading = useSelector(getPokemonsTypesLoading);

  const pokemons = useSelector(getPokemons);
  const isPokemonsLoading = useSelector(getPokemonsLoading);
  const total = useSelector(getPokemonsTotal);
  const error = useSelector(getPokemonsError);

  const [scrollY, setScrollY] = useState(0);
  const debouncedScroll = useDebounce(scrollY, 500);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
      limit: 9,
    }));
  };

  const onScroll = () => {
    if (document.body.scrollHeight === window.innerHeight + window.pageYOffset) {
      setScrollY(window.scrollY);
      setQuery((state: IQuery) => ({
        ...state,
        limit: state.limit ? state.limit + 9 : 9,
      }));
    }
  };

  useEffect(() => {
    dispatch(getTypesAction());
    dispatch(getPokemonsAction(query));

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    dispatch(getPokemonsAction(query));
  }, [debouncedValue, debouncedScroll]);

  if (error) return <div>Error!</div>;

  return (
    <main className={style.root}>
      <Heading component="h2" className={style.title}>
        {total} <b>Pokemons</b> for you to choose your favorite
      </Heading>
      <Layout className={style.contentWrap}>
        <input
          className={style.search}
          type="text"
          value={searchValue}
          name="search"
          placeholder="Find your pokémon..."
          onChange={handleSearchChange}
        />
        <section className={style.cardsWrap}>
          {pokemons && pokemons.map((pokemon: IPokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
        </section>
        <div className={style.loader}>{isPokemonsLoading && <Loader />}</div>
      </Layout>
    </main>
  );
};
