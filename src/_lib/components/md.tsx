'use client';
import { Renderer } from '@frfla/react-md-renderer';
import { MARKDOWN_CSS } from './md.css';

export function MD({ markdownText }: { markdownText: string }) {
  return <Renderer markdown={markdownText} CSS={MARKDOWN_CSS} />;
}
