import React, { useState } from 'react';
import { Zap, Volume2, Layers, KeyRound } from 'lucide-react';

export const FeaturesSimple: React.FC = () => {
  const [speedHeld, setSpeedHeld] = useState(false);
  const [soundActive, setSoundActive] = useState(true);

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full apple-glass-pill text-xs font-semibold text-orange-400 border border-orange-500/20">
            <span>Engineering Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Designed like modern software. <br />
            <span className="text-gradient-fiery">Not a web wrapper.</span>
          </h2>
          <p className="text-base text-white/60">
            Four core architectural pillars engineered specifically to fix Reddit’s notorious media streaming bottlenecks.
          </p>
        </div>

        {/* 4 Bespoke Interactive Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Module 1: Hold-to-2X Speed with Interactive Speedometer */}
          <div className="p-7 rounded-3xl craft-card flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 fill-current" /> Gesture Engine
                </span>
                <span className="text-xs font-mono text-white/40">2.0X Haptic</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Hold-to-2X Speed</h3>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                Press and hold anywhere on the right screen to fast-forward at 2.0x playback rate. Releasing smoothly resumes 1.0x with zero pause glitch.
              </p>
            </div>

            {/* Interactive Speedometer Card */}
            <div className="mt-8 p-4 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase font-bold text-white/40 mb-0.5">Active Rate</div>
                <div className="text-2xl font-black font-mono text-white flex items-baseline gap-1">
                  <span className={speedHeld ? 'text-amber-400' : 'text-white'}>
                    {speedHeld ? '2.0X' : '1.0X'}
                  </span>
                  <span className="text-xs text-white/50 font-normal">SPEED</span>
                </div>
              </div>

              <button
                onMouseDown={() => setSpeedHeld(true)}
                onMouseUp={() => setSpeedHeld(false)}
                onMouseLeave={() => setSpeedHeld(false)}
                onTouchStart={() => setSpeedHeld(true)}
                onTouchEnd={() => setSpeedHeld(false)}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all select-none ${
                  speedHeld 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white scale-95 shadow-lg shadow-amber-500/30'
                    : 'bg-white/10 text-white/80 hover:bg-white/15'
                }`}
              >
                {speedHeld ? 'Accelerating...' : 'Hold to Test 2X'}
              </button>
            </div>
          </div>

          {/* Module 2: Synchronized Audio Waveform */}
          <div className="p-7 rounded-3xl craft-card flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5" /> Audio Engine
                </span>
                <span className="text-xs font-mono text-white/40">DASH + RedGIFs</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Synchronized Audio</h3>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                Reddit separates video and DASH audio into distinct CDN streams. SnooFlick automatically recombines tracks and resolves direct RedGIFs sound.
              </p>
            </div>

            {/* Live Audio Visualizer Equalizer Bar */}
            <div className="mt-8 p-4 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 h-6">
                  <span className={`w-1 bg-emerald-400 rounded-full ${soundActive ? 'eq-bar-1' : 'h-2'}`}></span>
                  <span className={`w-1 bg-emerald-400 rounded-full ${soundActive ? 'eq-bar-2' : 'h-4'}`}></span>
                  <span className={`w-1 bg-emerald-400 rounded-full ${soundActive ? 'eq-bar-3' : 'h-2'}`}></span>
                  <span className={`w-1 bg-emerald-400 rounded-full ${soundActive ? 'eq-bar-4' : 'h-5'}`}></span>
                  <span className={`w-1 bg-emerald-400 rounded-full ${soundActive ? 'eq-bar-2' : 'h-3'}`}></span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Full Synced Sound</div>
                  <div className="text-[10px] text-emerald-400/80">Decoupled in-place mute control</div>
                </div>
              </div>

              <button
                onClick={() => setSoundActive(!soundActive)}
                className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-semibold text-white/80"
              >
                {soundActive ? 'Mute' : 'Unmute'}
              </button>
            </div>
          </div>

          {/* Module 3: Fixed 3-Slot Virtual DOM */}
          <div className="p-7 rounded-3xl craft-card flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" /> Virtualization
                </span>
                <span className="text-xs font-mono text-white/40">Zero Leaks</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fixed 3-Slot Virtual DOM</h3>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                Rather than mounting hundreds of video elements as you scroll, SnooFlick recycles exactly 3 physical DOM slots. Scroll 1,000+ clips without browser lag.
              </p>
            </div>

            {/* Visual 3 Slots Graphic */}
            <div className="mt-8 grid grid-cols-3 gap-2 p-3 rounded-2xl bg-black/60 border border-white/10 text-center text-[10px] font-mono">
              <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/60">
                <div className="font-bold text-white/80">Slot 0</div>
                <div className="text-[9px] text-white/40 mt-0.5">Previous</div>
              </div>
              <div className="p-2 rounded-xl bg-blue-500/20 border border-blue-500/40 text-blue-300 shadow-md">
                <div className="font-bold text-blue-200">Slot 1</div>
                <div className="text-[9px] text-blue-300 mt-0.5 font-sans">Active (60FPS)</div>
              </div>
              <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/60">
                <div className="font-bold text-white/80">Slot 2</div>
                <div className="text-[9px] text-white/40 mt-0.5">Pre-warmed</div>
              </div>
            </div>
          </div>

          {/* Module 4: Zero Login Guest Token */}
          <div className="p-7 rounded-3xl craft-card flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                  <KeyRound className="w-3.5 h-3.5" /> Privacy First
                </span>
                <span className="text-xs font-mono text-white/40">No Passwords</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Instant Guest Access</h3>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                Automated guest OAuth tokens rotate in-memory every 23 hours. Zero account registration, zero personal cookies, and zero algorithmic ad profiling.
              </p>
            </div>

            {/* Holographic Digital Pass */}
            <div className="mt-8 p-3.5 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <div>
                  <span className="font-mono font-bold text-white">OAuth: INSTALLED_CLIENT</span>
                  <div className="text-[10px] text-white/40">Session valid • Refreshes in-memory</div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-rose-400 bg-rose-500/10 px-2 py-1 rounded-lg border border-rose-500/20">
                100% Anonymous
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
