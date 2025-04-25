import { style } from '@vanilla-extract/css';

export const GRID = style({
  width: '100%',
  maxWidth: '42rem',
  padding: '1rem',
  height: '100%',
  minHeight: '100dvh',
  margin: '0 auto',
  backgroundColor: 'white',
  overflow: 'auto',
  '@media': {
    '(width <= 672px)': {
      borderRight: '1px solid black',
      borderLeft: '1px solid black',
    },
  },
});
