import React from 'react';
import cn from 'classnames';

import style from './Layout.module.scss';

interface LayoutProps {
  className?: string | null;
}

export const Layout: React.FC<LayoutProps> = ({ children, className = null }) => (
  <div className={cn(className, style.root)}>{children}</div>
);
