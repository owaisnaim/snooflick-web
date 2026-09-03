import React from 'react';
import { ArrowRight, Github, ShieldCheck, Volume2, Zap } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';
import { KeyboardHUD } from './KeyboardHUD';

interface HeroProps {
  onKeyboardAction: (action: string) => void;
  externalTrigger: { action: string; timestamp: number } | null;
}

export const Hero: React.FC<HeroProps> = ({ onKeyboardAction, externalTrigger }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Subtle ambient lighting cones */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-[#FF4500]/15 via-[#FF1493]/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Pitch */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            
            {/* Super Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full apple-glass-pill text-xs font-semibold text-white/90 border border-white/10 shadow-lg">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4500] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4500]"></span>
              </span>
              <span>SnooFlick v2.0</span>
              <span className="text-white/30">•</span>
              <span className="text-orange-400 font-bold">100% Free &amp; Open Source</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.04]">
              Reddit’s best videos. <br />
              <span className="text-gradient-fiery">Snapped to 60 FPS.</span>
            </h1>

            {/* Editorial Copy */}
            <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              The official Reddit video player is notoriously broken. SnooFlick rebuilds it as a pure, hyper-responsive vertical stream — with synchronized RedGIFs sound, hold-to-2X speed, and zero logins required.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              <a
                href="#install"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl apple-glass-button-primary text-white font-bold text-base flex items-center justify-center gap-2.5 shadow-xl shadow-orange-500/25 group"
              >
                <span>Get SnooFlick</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://github.com/owaisnaim/snooflick"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl apple-glass-button-secondary text-white font-semibold text-base flex items-center justify-center gap-2.5"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-white/60 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Account Needed</span>
              </div>
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-cyan-400" />
                <span>Full RedGIFs Audio</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Hold-to-2X Playback</span>
              </div>
            </div>

            {/* Interactive Desktop Keyboard HUD */}
            <div className="pt-4 flex justify-center lg:justify-start">
              <KeyboardHUD onTrigger={onKeyboardAction} />
            </div>

          </div>

          {/* Right Phone Showcase */}
          <div id="demo" className="lg:col-span-5 relative">
            <PhoneMockup externalTrigger={externalTrigger} />
          </div>

        </div>
      </div>
    </section>
  );
};
