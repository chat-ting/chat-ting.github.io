import { MD } from '@/src/_lib/components/md';
import { getUrl, writingsWithFileType } from '@/src/_lib/util/read-writings';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

export default function Post() {
  const { title } = useParams();
  const navigate = useNavigate();

  const [md, setMd] = useState('# 로딩 중...');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!title) {
      navigate('/');
      return;
    }

    setLoading(true);
    const matchFile = writingsWithFileType.find(v => v.includes(decodeURIComponent(title)));
    const url = getUrl(matchFile ?? '');

    fetch(url)
      .then(resp => resp.text())
      .then(text => setMd(text ?? '# 페이지가 없어요'))
      .catch(() => setMd('# 페이지가 없어요'))
      .finally(() => setLoading(false));
  }, [title]);

  if (loading) return <div>...</div>;

  return <MD markdownText={md} />;
}
