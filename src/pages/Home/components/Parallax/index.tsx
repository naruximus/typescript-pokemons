import React, { useEffect, useState } from 'react';

import style from './Parallax.module.scss';

import { Pokeball, PokeballSmall, Cloud, CloudSmall, Pikachu } from './assets';

export const Parallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  const handleMouseMove = (event: MouseEvent) => {
    setScreenX(event.screenX);
    setScreenY(event.screenY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [screenX, screenY]);

  return (
    <div className={style.root}>
      <div
        className={style.pokeballSmall}
        style={{ transform: `translate(${screenX * 0.04}px, ${screenY * 0.04}px )` }}>
        <img src={PokeballSmall} alt="small pokeball" />
      </div>
      <div className={style.cloud} style={{ transform: `translate(${screenX * 0.05}px, ${screenY * 0.05}px )` }}>
        <img src={Cloud} alt="cloud" />
      </div>
      <div className={style.cloudSmall} style={{ transform: `translate(${screenX * 0.03}px, ${screenY * 0.03}px )` }}>
        <img src={CloudSmall} alt="small cloud" />
      </div>
      <div className={style.pokeball} style={{ transform: `translate(${screenX * 0.02}px, ${screenY * 0.02}px )` }}>
        <img src={Pokeball} alt="pokeball" />
      </div>
      <div className={style.pikachu} style={{ transform: `translate(${screenX * 0.01}px, ${screenY * 0.01}px )` }}>
        <img src={Pikachu} alt="pikachu" />
      </div>
    </div>
  );
};
