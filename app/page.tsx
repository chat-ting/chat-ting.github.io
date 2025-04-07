import Link from 'next/link'
import { titles } from '~/_lib/util/read-writings'

export default async function Page() {
  return (
    <div>
      <h1>CHAT-TING</h1>
      <ul>
        <h2>레포지토리</h2>
        <li>
          <Link href="https://github.com/chat-ting/client.app" target="_blank">
            frontend application
          </Link>
        </li>
        <li>
          <Link href="https://github.com/chat-ting/chat" target="_blank">
            backend (chat)
          </Link>
        </li>
        <li>
          <Link href="https://github.com/chat-ting/member" target="_blank">
            backend (member)
          </Link>
        </li>
        <li>
          <Link href="https://github.com/chat-ting/member" target="_blank">
            backend (member)
          </Link>
        </li>
        <h2>기술 문서</h2>
        {titles.map(title => (
          <li key={title}>
            <Link href={`/${title}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
