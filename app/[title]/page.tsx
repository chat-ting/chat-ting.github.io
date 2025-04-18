import { MD } from '~/_lib/components/md'
import { getUrl, titles, writingsWithFileType } from '~/_lib/util/read-writings'
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: Promise<{ title: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateStaticParams() {
  return titles.map(t => {
    return {
      title: encodeURIComponent(t),
    }
  })
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const { title } = await params
  const previousImages = (await parent).openGraph?.images || []
  const decodedParam = decodeURIComponent(title).split('-').join(' ')
  const TITLE = `${decodedParam} - chat-ting`

  return {
    title: TITLE,
    openGraph: {
      images: [...previousImages],
    },
  }
}

export default async function Page({ params }: Props) {
  const { title } = await params
  const matchFile = writingsWithFileType.find(v => v.includes(decodeURIComponent(title)))
  const url = getUrl(matchFile ?? '')
  const resp = await fetch(url)
  const md = (await resp.text()) ?? '# 페이지가 없어요'

  return <MD markdownText={md} />
}
