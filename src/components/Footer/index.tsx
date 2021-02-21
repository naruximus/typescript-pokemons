import React from 'react';

import style from './Footer.module.scss';

export const Footer = () => {
  console.log('footer :>> ');

  return (
    <div className={style.root}>
      <p>Make with ❤️</p>
      <p>Ours Team</p>
    </div>
  );
};
