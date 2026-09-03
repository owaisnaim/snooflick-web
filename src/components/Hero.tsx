import React from 'react';
import { Download, ArrowRight, ShieldCheck, Zap, Volume2 } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';

interface HeroProps {
  appUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ appUrl }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden radial-glow-cone">
      {/* Ambient background glow dots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-[#FF4500]/15 via-[#FF1493]/10 to-[#00F2FE]/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Pitch Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            {/* Super Header Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full apple-glass-pill border border-white/15 text-xs font-semibold text-white/90 shadow-lg">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4500] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4500]"></span>
              </span>
              <span className="text-white/80">Cross-Platform PWA + Native Mobile App</span>
              <span className="text-white/30">•</span>
              <span className="text-orange-400 font-bold">100% Open Source</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.08]">
              Reddit Videos. <br className="hidden sm:block" />
              Frictionless Flow. <br />
              <span className="text-gradient-fiery">Zero Distractions.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Experience millions of live Reddit &amp; RedGIFs videos in an ultra-smooth 60 FPS vertical feed with synchronized audio, hold-to-2X speed, zero ads, and zero login required.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl apple-glass-button-primary text-white font-bold text-base flex items-center justify-center gap-3 shadow-xl shadow-orange-500/30 group"
              >
                <span>Launch Web App</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#install"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl apple-glass-button-secondary text-white font-semibold text-base flex items-center justify-center gap-2.5"
              >
                <Download className="w-5 h-5 text-white/70" />
                <span>Get App (APK / iOS)</span>
              </a>
            </div>

            {/* Quick Feature Highlights / Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-white/60 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>No Reddit Login Needed</span>
              </div>
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-cyan-400" />
                <span>Full RedGIFs Sound</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Hold-for-2X Playback</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Phone Showcase Column */}
          <div id="demo" className="lg:col-span-5 relative">
            <PhoneMockup />
          </div>

        </div>
      </div>
    </section>
  );
};
