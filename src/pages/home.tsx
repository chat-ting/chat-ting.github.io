import { Link } from 'react-router';
import { titles } from '@/src/_lib/util/read-writings';

export default function Home() {
  return (
    <div>
      <h1>CHAT-TING</h1>
      <ul>
        <h2>레포지토리</h2>
        <li>
          <Link to="https://github.com/chat-ting/client.desktop" target="_blank">
            frontend application(Nextjs / Electron)
          </Link>
        </li>
        <li>
          <Link to="https://github.com/chat-ting/client.mobile" target="_blank">
            frontend application(RN)
          </Link>
        </li>
        <li>
          <Link to="https://github.com/chat-ting/member" target="_blank">
            backend (member)
          </Link>
        </li>
        <li>
          <Link to="https://github.com/chat-ting/member" target="_blank">
            Infra
          </Link>
        </li>
        <h2>기술 문서</h2>
        {titles.map(title => (
          <li key={title}>
            <Link to={`/${encodeURIComponent(title)}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
