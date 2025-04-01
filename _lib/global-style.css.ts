import { globalCss } from '~/stitches.config'

export const setGlobalStyle = globalCss({
  '@import': `url("https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/static/pretendard-dynamic-subset.min.css")`,
  'html, body, h1, h2, h3, h4, h5, h6, p, input, button, textarea, code, pre': {
    margin: 0,
    padding: 0,
    color: 'inherit',
    fontFamily: '"Pretendard", sans-serif',
  },
  '*, *:before, *:after': {
    boxSizing: 'border-box',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
})
