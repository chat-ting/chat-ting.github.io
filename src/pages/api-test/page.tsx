import { titles } from '@/src/_lib/util/read-writings';
import { Link } from 'react-router';

export default async function ApiTest() {
  return (
    <ul>
      <Link to="/api-test">API 테스트</Link>
      <div>글 리스트</div>
      {titles.map(title => (
        <li key={title}>
          <Link to={`/${encodeURIComponent(title)}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
