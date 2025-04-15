import type { Metadata } from 'next'
import '~/_lib/global-style.css'

export const metadata: Metadata = {
  title: 'chat-ting',
  description: 'chat-ting 기술 문서',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=42dot+Sans:wght@300..800&family=Space+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
