import React from 'react';
import { Github, ArrowRight, Heart, Sparkles } from 'lucide-react';

interface FooterProps {
  appUrl: string;
}

export const Footer: React.FC<FooterProps> = ({ appUrl }) => {
  return (
    <footer className="relative border-t border-white/10 bg-black pt-20 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-gradient-to-t from-orange-600/10 via-pink-600/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pre-Footer Call to Action Banner */}
        <div className="p-8 sm:p-12 rounded-3xl apple-glass-card border border-white/15 text-center relative overflow-hidden mb-16 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full apple-glass-pill text-xs font-bold text-orange-400 border border-orange-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Guest Streaming</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Ready to Experience Reddit at 60 FPS?
            </h3>
            
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              No registration. No fees. No algorithmic tracking. Just pure vertical video flow.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl apple-glass-button-primary text-white font-bold text-base flex items-center justify-center gap-2 shadow-xl shadow-orange-500/30 group"
              >
                <span>Launch SnooFlick Web App</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://github.com/owaisnaim/snooflick"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl apple-glass-button-secondary text-white font-semibold text-base flex items-center justify-center gap-2.5"
              >
                <Github className="w-4 h-4" />
                <span>Star on GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Brand Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10 text-sm">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden shadow-md p-[1px] bg-gradient-to-tr from-[#FF4500] to-[#FF1493]">
                <img src="./logo.png" alt="SnooFlick Logo" className="w-full h-full object-cover rounded-[10px] bg-black" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Snoo<span className="text-[#FF4500]">Flick</span>
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/10">
                v2.0
              </span>
            </div>
            <p className="text-white/60 text-xs sm:text-sm max-w-sm leading-relaxed">
              The sleek, high-performance TikTok-style cross-platform vertical video client for live Reddit &amp; RedGIFs streams.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">Navigation</div>
            <ul className="space-y-2 text-xs text-white/60">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Interactive Demo</a></li>
              <li><a href="#gestures" className="hover:text-white transition-colors">Thumb Gestures</a></li>
              <li><a href="#comparison" className="hover:text-white transition-colors">Comparison Matrix</a></li>
              <li><a href="#install" className="hover:text-white transition-colors">Installation Hub</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Developer & Legal */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">Open Source</div>
            <ul className="space-y-2 text-xs text-white/60">
              <li>
                <a href="https://github.com/owaisnaim/snooflick" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5" />
                  <span>Main Repository</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/owaisnaim/snooflick-web" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5" />
                  <span>Landing Website Repo</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/owaisnaim/snooflick/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  MIT License
                </a>
              </li>
              <li>
                <a href="https://github.com/owaisnaim/snooflick/tree/main/docs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  System Whitepapers
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} SnooFlick. Created with <Heart className="w-3 h-3 text-rose-500 inline fill-current" /> by{' '}
            <a href="https://github.com/owaisnaim" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-semibold">
              Owais Naim
            </a>.
          </p>
          <p className="max-w-md text-[11px] text-white/40 leading-relaxed">
            Disclaimer: SnooFlick is an independent open-source project and is not affiliated with, endorsed by, or sponsored by Reddit Inc. or RedGIFs. All media belongs to their respective creators.
          </p>
        </div>

      </div>
    </footer>
  );
};
