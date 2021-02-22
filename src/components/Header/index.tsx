import React from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';

import style from './Header.module.scss';
import { ReactComponent as Logo } from './assets/Logo.svg';
import { GENERAL_MENU } from '../../routes';

export const Header = React.memo(() => {
  const path = usePath();

  return (
    <div className={style.root}>
      <div className={style.wrap}>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.menu}>
          {GENERAL_MENU.map(({ title, link }) => (
            <A
              key={link}
              className={cn(style.menuLink, {
                [style.activeLink]: link === path,
              })}
              href={link}>
              {title}
            </A>
          ))}
        </div>
      </div>
    </div>
  );
});
