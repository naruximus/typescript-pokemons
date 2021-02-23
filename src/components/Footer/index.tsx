import React from 'react';
import { Layout } from '../Layout';

import style from './Footer.module.scss';

export const Footer = React.memo(() => (
  <div className={style.root}>
    <Layout className={style.wrap}>
      <h3 className={style.text}>Make with ❤️</h3>
      <h3 className={style.text}>Ours Team</h3>
    </Layout>
  </div>
));
