import React from 'react';
import cn from 'classnames';

import style from './Footer.module.scss';
import { Layout } from '../Layout';

interface IFooterProps {
  yellowStyle?: boolean;
}

export const Footer: React.FC<IFooterProps> = ({ yellowStyle = false }) => (
  <footer
    className={cn(style.root, {
      [style.backgroundYellow]: yellowStyle,
    })}>
    <Layout className={style.wrap}>
      <h3 className={style.text}>Make with ❤️</h3>
      <h3 className={style.text}>Ours Team</h3>
    </Layout>
  </footer>
);
