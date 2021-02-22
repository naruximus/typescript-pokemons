import React from 'react';
import { HomePage, PokedexPage } from './pages';

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}

interface IGeneralMenu {
  title: string;
  link: LinkEnum;
  component: () => JSX.Element;
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <PokedexPage />,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <>Legendaries</>,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
    component: () => <>Documentation</>,
  },
];

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

export const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});
