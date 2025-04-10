import type { Metadata } from 'next'
import { setGlobalStyle } from '~/_lib/global-style.css'
import { getCssText } from '~/stitches.config'

export const metadata: Metadata = {
  title: 'chat-ting',
  description: 'chat-ting 기술 문서',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  setGlobalStyle()
  return (
    <html lang="ko">
      <head>
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }}></style>
      </head>
      <body>{children}</body>
    </html>
  )
}
