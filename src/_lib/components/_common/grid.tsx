import type { ComponentProps } from 'react';
import { GRID } from './grid.css';

export function Grid({ ...props }: ComponentProps<'article'>) {
  return <article className={GRID} {...props} />;
}
