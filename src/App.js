import { useEffect, useState } from 'react';
import './App.scss';
import Layout from './layout/layout';
import Navigation from './navigation/navigation';

function App() {
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setBrowserWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () =>
        setBrowserWidth(window.innerWidth)
      );
  }, []);
  return (
    <div className="container">
      <Navigation browserWidth={browserWidth} />
      <Layout browserWidth={browserWidth} />
    </div>
  );
}

export default App;
