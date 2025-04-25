import { RendererCSSSet } from '@frfla/react-md-renderer';

export const MARKDOWN_CSS: Partial<RendererCSSSet> = {
  h1: {
    marginBottom: '2rem',
    textAlign: 'center',
    fontSize: '1.5rem',
    lineHeight: '1.3',
    fontWeight: '600',
  },
  h2: {
    marginBottom: '1.5rem',
    fontSize: '1.25rem',
    lineHeight: '1.3',
    fontWeight: '600',
  },
  h3: {
    marginBottom: '1rem',
    lineHeight: '1.3',
    fontSize: 'inherit',
    fontWeight: '600',
  },
  h4: { fontWeight: '600' },
  h5: { fontWeight: '600' },
  h6: {},
  hr: {},
  p: { marginBottom: '1rem', lineHeight: '1.66', fontSize: '1.15rem' },
  code: {
    lineHeight: '1.5',
    fontSize: '0.7rem',
  },
  inlinecode: {
    fontSize: '0.7rem',
  },
  a: {
    color: '#888',
    textDecoration: 'underline',
    textUnderlineOffset: '0.2rem',
    '&:hover': {
      color: 'black',
    },
  },
  blockquote: {
    marginBottom: '3rem',
  },
  checkbox: {},
  img: {
    display: 'block',
    marginBottom: '3rem',
  },
  ul: {
    paddingLeft: '1.21rem',
    marginBottom: '2rem',
    '& li::marker': {
      fontFeatureSettings: '"calt" "case"',
      fontFamily: '42dot sans',
    },
  },
  ol: {
    marginBottom: '2rem',
    paddingLeft: '1.4rem',
    '& li::marker': {
      fontFeatureSettings: '"calt" "case"',
      fontFamily: '"42dot sans"',
    },
  },
  li: {
    padding: 0,
    margin: 0,
    fontFamily: '"42dot sans"',
  },
  table: {
    marginBottom: '3rem',
  },
  typography: {
    strike: undefined,
    strong: {
      fontWeight: '600',
    },
    italic: undefined,
  },
};
