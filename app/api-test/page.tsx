import Link from 'next/link'
import { titles } from '~/_lib/util/read-writings'

export default async function Page() {
  return (
    <ul>
      <Link href="/api-test">API 테스트</Link>
      <div>글 리스트</div>
      {titles.map(title => (
        <li key={title}>
          <Link href={`/${title}`}>{title}</Link>
        </li>
      ))}
    </ul>
  )
}
