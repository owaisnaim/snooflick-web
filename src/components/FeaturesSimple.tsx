import React, { useState } from 'react';
import { Zap, Volume2, Layers, KeyRound } from 'lucide-react';

export const FeaturesSimple: React.FC = () => {
  const [speedHeld, setSpeedHeld] = useState(false);
  const [soundActive, setSoundActive] = useState(true);

  const features = [
    {
      index: '01',
      title: 'Hold for 2X Speed',
      tag: 'FAST FORWARD',
      icon: Zap,
      description: 'Press and hold anywhere on the right screen to fast-forward at 2.0x playback rate. Releasing instantly resumes 1.0x with zero pause glitch or audio stutter.',
    },
    {
      index: '02',
      title: 'Synchronized Audio',
      tag: 'REDGIFS + DASH',
      icon: Volume2,
      description: 'Reddit separates video and DASH audio streams. SnooFlick automatically recombines tracks and resolves high-definition RedGIFs audio directly.',
    },
    {
      index: '03',
      title: '60 FPS Virtual Feed',
      tag: '60 FPS STREAM',
      icon: Layers,
      description: 'Hardware-accelerated vertical snap scrolling with intelligent feed virtualization. Stream thousands of continuous clips with zero memory leaks, stutter, or dropped frames.',
    },
    {
      index: '04',
      title: 'Guest Authentication',
      tag: 'INSTALLED CLIENT',
      icon: KeyRound,
      description: 'Automated Guest OAuth tokens rotate seamlessly in-memory every 23 hours. Browse public and NSFW video streams with complete privacy and automated token recovery.',
    },
  ];

  return (
    <section id="features" className="py-24 relative border-b border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Stark Minimal) */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
            Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Engineered for performance.
          </h2>
          <p className="text-base text-zinc-400">
            Four architectural pillars built to solve Reddit’s native video streaming bottlenecks.
          </p>
        </div>

        {/* 4 Clean Flat Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Module 1: Speed */}
          <div className="p-7 rounded-2xl craft-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-zinc-500 font-bold">{features[0].index} / SPEED</span>
                <span className="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                  {features[0].tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{features[0].title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{features[0].description}</p>
            </div>

            <div className="mt-8 p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase">Playback Rate</div>
                <div className="text-xl font-black font-mono text-white">
                  {speedHeld ? '2.0X' : '1.0X'}
                </div>
              </div>
              <button
                onMouseDown={() => setSpeedHeld(true)}
                onMouseUp={() => setSpeedHeld(false)}
                onMouseLeave={() => setSpeedHeld(false)}
                onTouchStart={() => setSpeedHeld(true)}
                onTouchEnd={() => setSpeedHeld(false)}
                className={`px-4 py-2 rounded font-mono text-xs font-bold transition-colors select-none ${
                  speedHeld
                    ? 'bg-white text-black'
                    : 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'
                }`}
              >
                {speedHeld ? 'Accelerating...' : 'Hold for 2X'}
              </button>
            </div>
          </div>

          {/* Module 2: Audio */}
          <div className="p-7 rounded-2xl craft-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-zinc-500 font-bold">{features[1].index} / AUDIO</span>
                <span className="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                  {features[1].tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{features[1].title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{features[1].description}</p>
            </div>

            <div className="mt-8 p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-0.5 h-5">
                  <span className={`w-0.5 bg-white rounded-full ${soundActive ? 'eq-bar-1' : 'h-1'}`}></span>
                  <span className={`w-0.5 bg-white rounded-full ${soundActive ? 'eq-bar-2' : 'h-3'}`}></span>
                  <span className={`w-0.5 bg-white rounded-full ${soundActive ? 'eq-bar-3' : 'h-2'}`}></span>
                  <span className={`w-0.5 bg-white rounded-full ${soundActive ? 'eq-bar-4' : 'h-4'}`}></span>
                  <span className={`w-0.5 bg-white rounded-full ${soundActive ? 'eq-bar-2' : 'h-2'}`}></span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Full Synced Sound</div>
                  <div className="text-[10px] text-zinc-500 font-mono">Reddit DASH + RedGIFs Direct</div>
                </div>
              </div>
              <button
                onClick={() => setSoundActive(!soundActive)}
                className="px-3 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-xs font-mono font-medium text-zinc-300 transition-colors"
              >
                {soundActive ? 'Mute' : 'Unmute'}
              </button>
            </div>
          </div>

          {/* Module 3: Virtualization */}
          <div className="p-7 rounded-2xl craft-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-zinc-500 font-bold">{features[2].index} / PERFORMANCE</span>
                <span className="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                  {features[2].tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{features[2].title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{features[2].description}</p>
            </div>

            <div className="mt-8 p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span className="font-mono text-zinc-300">GPU Hardware Layer</span>
              </div>
              <span className="font-mono text-[10px] text-zinc-500">60 FPS Smooth</span>
            </div>
          </div>

          {/* Module 4: Privacy */}
          <div className="p-7 rounded-2xl craft-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-zinc-500 font-bold">{features[3].index} / PRIVACY</span>
                <span className="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                  {features[3].tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{features[3].title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{features[3].description}</p>
            </div>

            <div className="mt-8 p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                <span className="font-mono text-zinc-300">Installed Client OAuth</span>
              </div>
              <span className="font-mono text-[10px] text-zinc-500">Auto Renewed</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
