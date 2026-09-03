import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { BentoFeatures } from './components/BentoFeatures';
import { GestureShowcase } from './components/GestureShowcase';
import { ComparisonTable } from './components/ComparisonTable';
import { InstallHub } from './components/InstallHub';
import { TechSpecs } from './components/TechSpecs';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  // Configurable live app URL with production fallback
  const appUrl = (import.meta as any).env?.VITE_APP_URL || 'https://snooflick.vercel.app';

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#FF4500]/30 selection:text-white">
      <Navbar appUrl={appUrl} />
      <main>
        <Hero appUrl={appUrl} />
        <MetricsBar />
        <BentoFeatures />
        <GestureShowcase />
        <ComparisonTable />
        <InstallHub appUrl={appUrl} />
        <TechSpecs />
        <FAQ />
      </main>
      <Footer appUrl={appUrl} />
    </div>
  );
};

export default App;
