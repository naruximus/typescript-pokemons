import React from 'react';
import { HomePage, PokedexPage } from './pages';

export const routes = {
  '/': () => <HomePage />,
  '/pokedex': () => <PokedexPage />,
};
