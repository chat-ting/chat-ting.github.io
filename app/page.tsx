import Link from 'next/link'
import { titles } from '~/_lib/util/read-writings'

export default async function Page() {
  return (
    <div>
      <h1>CHAT-TING</h1>
      <ul>
        <h2>레포지토리</h2>
        <li>
          <Link href="https://github.com/chat-ting/client.desktop" target="_blank">
            frontend application(Nextjs / Electron)
          </Link>
        </li>
        <li>
          <Link href="https://github.com/chat-ting/client.mobile" target="_blank">
            frontend application(RN)
          </Link>
        </li>
        <li>
          <Link href="https://github.com/chat-ting/member" target="_blank">
            backend (member)
          </Link>
        </li>
        <li>
          <Link href="https://github.com/chat-ting/member" target="_blank">
            Infra
          </Link>
        </li>
        <h2>기술 문서</h2>
        {titles.map(title => (
          <li key={title}>
            <Link href={`/${encodeURIComponent(title)}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
