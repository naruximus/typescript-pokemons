import React from 'react';

import style from './Home.module.scss';
import { Header, Footer } from '../../components';

export const Home = () => {
  console.log('home :>> ');
  return (
    <div className={style.root}>
      <Header />
      {/* <div className={style.content}>content</div> */}
      {/* <Footer /> */}
    </div>
  );
};
