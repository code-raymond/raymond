import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Counter from './components/Counter';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';
import Strengths from './components/Services';


const App: React.FC = () => {
  useEffect(() => {
    // Dynamically load the main.js script
    const script = document.createElement('script');
    script.src = "/assets/main.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Strengths />
        <Counter />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
