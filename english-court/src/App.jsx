import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';

const Contacts = lazy(() => import('./pages/Contacts.jsx'));

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Главная</Link>
        {' | '}
        <Link to="/contacts">Контакты</Link>
      </nav>
      <hr />
      <Suspense fallback={<p>Загрузка...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
