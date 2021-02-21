import React from 'react';
import cn from 'classnames';

import style from './Paragraph.module.scss';

interface ParagraphProps {
  className?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ children, className = '' }) => (
  <p className={cn(style.root, className)}>{children}</p>
);
