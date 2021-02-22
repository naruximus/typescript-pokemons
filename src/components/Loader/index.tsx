import React from 'react';
import cn from 'classnames';

import style from './Loader.module.scss';
import { Pokeball } from './assets';

interface ILoaderProps {
  className?: string;
}

export const Loader: React.FC<ILoaderProps> = ({ className = '' }) => (
  <div className={cn(style.loaderWrap, className)}>
    <img src={Pokeball} alt="Loading..." />
  </div>
);
