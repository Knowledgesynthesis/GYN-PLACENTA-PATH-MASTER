import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useThemeStore } from './store/themeStore';
import Layout from './components/Layout';
import Home from './pages/Home';
import Cervix from './pages/modules/Cervix';
import Endometrium from './pages/modules/Endometrium';
import Ovary from './pages/modules/Ovary';
import VulvaVagina from './pages/modules/VulvaVagina';
import GTD from './pages/modules/GTD';
import Placenta from './pages/modules/Placenta';
import IHC from './pages/modules/IHC';
import Molecular from './pages/modules/Molecular';
import Pitfalls from './pages/modules/Pitfalls';
import Cases from './pages/Cases';
import Assessment from './pages/Assessment';
import Settings from './pages/Settings';

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cervix" element={<Cervix />} />
          <Route path="endometrium" element={<Endometrium />} />
          <Route path="ovary" element={<Ovary />} />
          <Route path="vulva-vagina" element={<VulvaVagina />} />
          <Route path="gtd" element={<GTD />} />
          <Route path="placenta" element={<Placenta />} />
          <Route path="ihc" element={<IHC />} />
          <Route path="molecular" element={<Molecular />} />
          <Route path="pitfalls" element={<Pitfalls />} />
          <Route path="cases" element={<Cases />} />
          <Route path="assessment" element={<Assessment />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
