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
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Pitch */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7">
            
            {/* Super Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-950 text-xs font-medium text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]"></span>
              <span className="text-zinc-300 font-semibold">SnooFlick</span>
              <span className="text-zinc-600">•</span>
              <span>Open Source Client</span>
            </div>

            {/* Stark Solid Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.04]">
              Reddit videos. <br />
              Without the noise.
            </h1>

            {/* Clean Subtitle */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A lightning-fast, 60fps vertical stream for live Reddit and RedGIFs content. Synchronized audio, hold-to-2X speed, zero ads, and zero account required.
            </p>

            {/* Minimalist Solid Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href="#install"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors group"
              >
                <span>Get SnooFlick</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="https://github.com/owaisnaim/snooflick"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-300 hover:text-white hover:bg-zinc-900 font-medium text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-zinc-400 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-zinc-300" />
                <span>No Login Needed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Volume2 className="w-4 h-4 text-zinc-300" />
                <span>Full Synced Audio</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-zinc-300" />
                <span>Hold for 2X Speed</span>
              </div>
            </div>

            {/* Desktop Keyboard HUD */}
            <div className="pt-2 flex justify-center lg:justify-start">
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
