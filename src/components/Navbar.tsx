import React, { useState, useEffect } from 'react';
import { Github, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'apple-glass-dock py-3'
          : 'bg-black/60 backdrop-blur-md border-b border-zinc-900/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 p-0.5 group-hover:border-zinc-700 transition-colors">
              <img
                src="/logo.png"
                alt="SnooFlick"
                className="w-full h-full object-cover rounded-[6px]"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base tracking-tight text-white group-hover:text-zinc-300 transition-colors">
                SnooFlick
              </span>
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                v2.0
              </span>
            </div>
          </a>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/owaisnaim/snooflick"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>

            <a
              href="#install"
              className="flex items-center gap-1.5 text-xs font-bold text-black bg-white hover:bg-zinc-200 px-3.5 py-1.5 rounded-lg transition-colors group"
            >
              <span>Get App</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};
