import { Route, Routes } from 'react-router';
import Home from './pages/home';
import ApiTest from './pages/api-test/page';
import RootLayout from './pages/layout';
import Post from './pages/[title]/post';

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path=":title" element={<Post />} />
        <Route path="/api-test" element={<ApiTest />} />
      </Route>
    </Routes>
  );
}

export default App;
