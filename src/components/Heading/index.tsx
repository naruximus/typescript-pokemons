import React from 'react';
import cn from 'classnames';

import style from './Heading.module.scss';

type levelType = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps {
  className?: string;
  level: levelType;
}

export const Heading: React.FC<HeadingProps> = ({ children, className = null, level }) =>
  React.createElement(
    `h${level}`,
    {
      className: cn(style.root, style[`h${level}`], className),
    },
    children,
  );
