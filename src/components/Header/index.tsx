import React from 'react';
import { A } from 'hookrouter';

import style from './Header.module.scss';
import { ReactComponent as Logo } from './assets/Logo.svg';

interface IMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 0,
    value: 'Home',
    link: '/',
  },
  {
    id: 1,
    value: 'Pokédex',
    link: '/pokedex',
  },
  {
    id: 2,
    value: 'Legendaries',
    link: '/legendaries',
  },
  {
    id: 3,
    value: 'Documentation',
    link: '/docs',
  },
];

export const Header = () => {
  console.log('header :>> ');
  return (
    <div className={style.root}>
      <div className={style.wrap}>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.menu}>
          {MENU.map(({ id, value, link }) => (
            <A key={id} className={style.menuLink} href={link}>
              {value}
            </A>
          ))}
        </div>
      </div>
    </div>
  );
};
