import React from 'react';

import style from './Home.module.scss';
import { Header, Footer, Layout, Button, Heading } from '../../components';
import { Parallax } from './components';

export const Home = () => {
  console.log('home :>> ');
  return (
    <div className={style.root}>
      <Header />
      <Layout className={style.contentWrap}>
        <div className={style.contentText}>
          <Heading level={1}>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <Heading level={2}>You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
          <Button onClick={() => console.log(123)}>See Pokemons</Button>
        </div>
        <div className={style.contentParallax}>
          <Parallax />
        </div>
      </Layout>
      <Footer />
    </div>
  );
};
