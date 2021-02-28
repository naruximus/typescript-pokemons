import React, { useEffect, useState } from 'react';
import { navigate } from 'hookrouter';

import style from './Home.module.scss';
import { Layout, Button, Heading } from '../../components';
import { Parallax } from './components';
import { LinkEnum } from '../../routes';

export const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, [window.innerWidth]);

  return (
    <main className={style.root}>
      <Layout className={style.contentWrap}>
        <div className={style.contentText}>
          <Heading component="h1">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <p className={style.paragraph}>
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </p>
          <Button onClick={() => navigate(LinkEnum.POKEDEX)}>See Pokemons</Button>
        </div>
        <div className={style.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </main>
  );
};
