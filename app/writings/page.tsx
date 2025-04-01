import Link from 'next/link'
import { titles } from '~/_lib/util/read-writings'

export default async function Page() {
  return (
    <ul>
      {titles.map(title => (
        <li key={title}>
          <Link href={`/writings/${title}`}>{title}</Link>
        </li>
      ))}
    </ul>
  )
}
