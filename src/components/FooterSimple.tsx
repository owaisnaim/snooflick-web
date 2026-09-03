import React from 'react';
import { Github, Heart } from 'lucide-react';

export const FooterSimple: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
        
        {/* Left: Brand & Attribution */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-lg overflow-hidden p-[1px] bg-gradient-to-tr from-[#FF4500] to-[#FF1493]">
            <img src="/logo.png" alt="SnooFlick" className="w-full h-full object-cover rounded-[5px] bg-black" />
          </div>
          <span className="font-bold text-white">SnooFlick</span>
          <span className="text-white/30">•</span>
          <span>
            Created with <Heart className="w-3 h-3 text-rose-500 inline fill-current" /> by{' '}
            <a href="https://github.com/owaisnaim" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white font-medium underline">
              Owais Naim
            </a>
          </span>
        </div>

        {/* Right: GitHub & License */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/owaisnaim/snooflick"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://github.com/owaisnaim/snooflick/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            MIT License
          </a>
          <span>snooflick.com</span>
        </div>

      </div>
    </footer>
  );
};
