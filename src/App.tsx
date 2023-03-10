import { useEffect, useLayoutEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App as KonstaApp } from 'konsta/react';

// Pages
import Initial from './Initial';
import { modeTypes, themeTypes } from './types/theme';

function App() {
  const [theme, setTheme] = useState<themeTypes>('ios');

  const [currentColorTheme, setCurrentColorTheme] = useState('');
  const setColorTheme = (color: string) => {
    const htmlEl = document.documentElement;
    htmlEl.classList.forEach((c) => {
      if (c.includes('k-color')) htmlEl.classList.remove(c);
    });
    if (color) htmlEl.classList.add(color);
    setCurrentColorTheme(color);
  };

  useEffect(() => {
    (window as any).setTheme = (t: themeTypes) => setTheme(t);
    (window as any).setMode = (mode: modeTypes) => {
      if (mode === 'dark') document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    };
  }, []);

  const inIFrame = window.parent !== window;
  useLayoutEffect(() => {
    if (window.location.href.includes('safe-areas')) {
      const html = document.documentElement;
      if (html) {
        html.style.setProperty(
          '--k-safe-area-top',
          theme === 'ios' ? '44px' : '24px'
        );
        html.style.setProperty('--k-safe-area-bottom', '34px');
      }
    }
  }, [theme]);

  return (
    <KonstaApp theme={theme} safeAreas={!inIFrame}>
      <Router>
        <Routes>
          <Route path="/" element={<Initial />} />
        </Routes>
      </Router>
    </KonstaApp>
  );
}

export default App;
