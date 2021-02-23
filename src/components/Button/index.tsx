import React from 'react';
import cn from 'classnames';

import style from './Button.module.scss';

type colorType = 'yellow' | 'green';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  fullWidth?: boolean;
  color?: colorType;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, fullWidth = false, color = 'green' }) => (
  <button
    type="button"
    className={cn(style.root, style[color], { [style.fullWidth]: fullWidth })}
    onClick={onClick}
    // style={{ width: fullWidth ? '100%' : '231px' }}
  >
    {children}
  </button>
);
