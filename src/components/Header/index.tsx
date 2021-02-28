/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react';
import { A, usePath, navigate } from 'hookrouter';
import cn from 'classnames';

import style from './Header.module.scss';
import { BurgerBtn, LogoDekstop, LogoTablet, LogoMobile, CloseIcon } from './assets';
import { GENERAL_MENU, LinkEnum } from '../../routes';
import { Layout } from '../Layout';

export const Header = React.memo(() => {
  const path = usePath();

  const [isMenuMobileShow, setIsMenuMobileShow] = useState(false);

  const hadleToggleMenuMobile = (e?: React.MouseEvent<HTMLDivElement>): void => {
    window.document.body.style.overflow = !isMenuMobileShow ? 'hidden' : '';
    setIsMenuMobileShow((state) => !state);
  };

  useEffect(() => {
    const handleEscapePressed = (e: KeyboardEvent): void => {
      if (e.keyCode === 27) setIsMenuMobileShow(false);
      window.document.body.style.overflow = '';
    };

    document.addEventListener('keydown', handleEscapePressed);

    return () => document.removeEventListener('keydown', handleEscapePressed);
  }, []);

  return (
    <header className={style.root}>
      <Layout className={style.wrap}>
        <div className={style.logo} onClick={() => navigate(LinkEnum.HOME)}>
          <LogoDekstop className={style.logoDekstop} />
          <LogoTablet className={style.logoTablet} />
          <LogoMobile className={style.logoMobile} />
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
        <div className={cn(style.mobileMenuWrap, { [style.active]: isMenuMobileShow })} onClick={hadleToggleMenuMobile}>
          <div className={cn(style.mobileMenu)}>
            <div className={style.mobileMenuLogo}>
              <LogoTablet />
            </div>
            <div className={style.closeIcon}>
              <CloseIcon />
            </div>
            {GENERAL_MENU.map(({ title, link }) => (
              <A
                key={link}
                className={cn(style.mobileMenuLink, {
                  [style.activeLink]: link === path,
                })}
                href={link}>
                {title}
              </A>
            ))}
          </div>
        </div>
        <div className={style.burgerBtn} onClick={hadleToggleMenuMobile}>
          <BurgerBtn />
        </div>
      </Layout>
    </header>
  );
});
