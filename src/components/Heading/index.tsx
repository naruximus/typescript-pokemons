import React from 'react';
import cn from 'classnames';

import style from './Heading.module.scss';

type componentType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  className?: string;
  component: componentType;
}

export const Heading: React.FC<HeadingProps> = ({ children, className = null, component }) =>
  React.createElement(
    component,
    {
      className: cn(style.root, style[component], className),
    },
    children,
  );
