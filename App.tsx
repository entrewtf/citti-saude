
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Pillars } from './components/Pillars';
import { Advisory } from './components/Advisory';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-neutral-800 selection:text-white">
      <Header isScrolled={scrolled} />
      <main>
        <Hero />
        <Services />
        <Pillars />
        <Advisory />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
