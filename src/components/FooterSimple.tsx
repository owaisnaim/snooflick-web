import React from 'react';
import { Github } from 'lucide-react';

export const FooterSimple: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
        
        {/* Left: Brand & Attribution */}
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded overflow-hidden border border-zinc-800 bg-zinc-900">
            <img src="/logo.png" alt="SnooFlick" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-zinc-300">SnooFlick</span>
          <span>•</span>
          <span>
            Created by{' '}
            <a href="https://github.com/owaisnaim" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white underline">
              Owais Naim
            </a>
          </span>
        </div>

        {/* Right: GitHub & License */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/owaisnaim/snooflick"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1 text-zinc-400"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://github.com/owaisnaim/snooflick/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors text-zinc-400"
          >
            MIT License
          </a>
          <span className="text-zinc-600">snooflick.com</span>
        </div>

      </div>
    </footer>
  );
};
