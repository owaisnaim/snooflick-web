import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CommunityMarquee } from './components/CommunityMarquee';
import { FeaturesSimple } from './components/FeaturesSimple';
import { InstallSimple } from './components/InstallSimple';
import { FooterSimple } from './components/FooterSimple';

export const App: React.FC = () => {
  const [externalTrigger, setExternalTrigger] = useState<{ action: string; timestamp: number } | null>(null);

  const triggerPhoneAction = useCallback((action: string) => {
    setExternalTrigger({ action, timestamp: Date.now() });
  }, []);

  // Global physical keyboard hotkeys listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        triggerPhoneAction('togglePlay');
      } else if (e.key === 'j' || e.key === 'J') {
        e.preventDefault();
        triggerPhoneAction('nextClip');
      } else if (e.key === 'k' || e.key === 'K') {
        e.preventDefault();
        triggerPhoneAction('prevClip');
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        triggerPhoneAction('toggleMute');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [triggerPhoneAction]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white">
      <Navbar />
      <main>
        <Hero onKeyboardAction={triggerPhoneAction} externalTrigger={externalTrigger} />
        <CommunityMarquee />
        <FeaturesSimple />
        <InstallSimple />
      </main>
      <FooterSimple />
    </div>
  );
};

export default App;
