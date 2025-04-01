'use client'
import { Renderer } from '@frfla/react-md-renderer'

export function MD({ markdownText }: { markdownText: string }) {
  return <Renderer markdown={markdownText} />
}
