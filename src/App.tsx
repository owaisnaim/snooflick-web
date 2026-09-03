import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesSimple } from './components/FeaturesSimple';
import { InstallSimple } from './components/InstallSimple';
import { FooterSimple } from './components/FooterSimple';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#FF4500]/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturesSimple />
        <InstallSimple />
      </main>
      <FooterSimple />
    </div>
  );
};

export default App;
