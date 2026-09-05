import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CommunityMarquee } from './components/CommunityMarquee';
import { FeaturesSimple } from './components/FeaturesSimple';
import { InstallSimple } from './components/InstallSimple';
import { FooterSimple } from './components/FooterSimple';
import { PrivacyPolicy } from './components/PrivacyPolicy';

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<'home' | 'privacy'>(() => {
    return window.location.pathname.startsWith('/privacy') ? 'privacy' : 'home';
  });

  const [externalTrigger, setExternalTrigger] = useState<{ action: string; timestamp: number } | null>(null);

  const navigate = useCallback((path: string) => {
    if (path === '/privacy') {
      setCurrentRoute('privacy');
      window.history.pushState(null, '', '/privacy');
      document.title = 'SnooFlick — Privacy Policy';
      window.scrollTo(0, 0);
    } else {
      setCurrentRoute('home');
      window.history.pushState(null, '', '/');
      document.title = 'SnooFlick — Watch Reddit Like TikTok';
      window.scrollTo(0, 0);
    }
  }, []);

  // Listen to popstate (back / forward browser navigation)
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname.startsWith('/privacy')) {
        setCurrentRoute('privacy');
        document.title = 'SnooFlick — Privacy Policy';
      } else {
        setCurrentRoute('home');
        document.title = 'SnooFlick — Watch Reddit Like TikTok';
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const triggerPhoneAction = useCallback((action: string) => {
    setExternalTrigger({ action, timestamp: Date.now() });
  }, []);

  // Global physical keyboard hotkeys listener (runs silently on home view)
  useEffect(() => {
    if (currentRoute !== 'home') return;

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
  }, [triggerPhoneAction, currentRoute]);

  if (currentRoute === 'privacy') {
    return <PrivacyPolicy onBack={() => navigate('/')} />;
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white">
      <Navbar />
      <main>
        <Hero externalTrigger={externalTrigger} />
        <CommunityMarquee />
        <FeaturesSimple />
        <InstallSimple />
      </main>
      <FooterSimple onNavigatePrivacy={() => navigate('/privacy')} />
    </div>
  );
};

export default App;
