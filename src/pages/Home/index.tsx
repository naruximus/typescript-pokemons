import React, { useEffect, useState } from 'react';
import { navigate } from 'hookrouter';

import style from './Home.module.scss';
import { Footer, Layout, Button, Heading } from '../../components';
import { Parallax } from './components';
import { LinkEnum } from '../../routes';

export const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, [window.innerWidth]);

  return (
    <div className={style.root}>
      <Layout className={style.contentWrap}>
        <div className={style.contentText}>
          <Heading component="h1">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <Heading component="h2">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
          <Button onClick={() => navigate(LinkEnum.POKEDEX)}>See Pokemons</Button>
        </div>
        <div className={style.contentParallax}>
          <Parallax />
        </div>
      </Layout>
      <Footer />
    </div>
  );
};
