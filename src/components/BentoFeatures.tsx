import React, { useState } from 'react';
import { 
  Zap, 
  Volume2, 
  Search, 
  ShieldAlert, 
  Sparkles, 
  Activity
} from 'lucide-react';

export const BentoFeatures: React.FC = () => {
  // Interactive mini-states for bento cards
  const [activeSpeed, setActiveSpeed] = useState<'1.0x' | '2.0x'>('2.0x');
  const [selectedQuality, setSelectedQuality] = useState<'Auto' | 'HD' | 'SD'>('Auto');
  const [searchQuery, setSearchQuery] = useState('skate trick');

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-glass-pill text-xs font-semibold text-orange-400 border border-orange-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineered for Maximum Fluidity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Not Just Another Client. <br />
            <span className="text-gradient-fiery">A High-Performance Media Engine.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60">
            Every layer of SnooFlick was re-architected from the ground up to conquer browser video bottlenecks, memory leaks, and Reddit streaming quirks.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Hold to 2X Speed (col-span-2) */}
          <div className="md:col-span-2 rounded-3xl p-8 apple-glass-card border border-white/10 relative overflow-hidden group flex flex-col justify-between">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  ⚡ Gesture Innovation
                </span>
                <span className="text-xs font-mono text-white/40">HUD Feedback</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Hold-to-2X Speed Engine</h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-xl">
                Press and hold anywhere on the right side of the video to accelerate playback to 2.0x with haptic feedback and HUD badge. Release finger to seamlessly resume 1.0x with zero synthetic click pausing.
              </p>
            </div>

            {/* Interactive Preview Widget */}
            <div className="mt-8 p-5 rounded-2xl bg-black/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <Zap className="w-6 h-6 fill-current animate-pulse" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span>Active Playback Rate:</span>
                    <span className="text-amber-400 font-black font-mono">{activeSpeed}</span>
                  </div>
                  <div className="text-xs text-white/50">Simulate pressing down on screen</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveSpeed('1.0x')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeSpeed === '1.0x'
                      ? 'bg-white text-black shadow-md'
                      : 'bg-white/10 text-white hover:bg-white/15'
                  }`}
                >
                  1.0x Normal
                </button>
                <button
                  onClick={() => setActiveSpeed('2.0x')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeSpeed === '2.0x'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30'
                      : 'bg-white/10 text-white hover:bg-white/15'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>2.0x Fast Forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Fixed 3-Slot DOM Virtualization (col-span-1) */}
          <div className="md:col-span-1 rounded-3xl p-8 apple-glass-card border border-white/10 relative overflow-hidden group flex flex-col justify-between">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  🚀 60 FPS Core
                </span>
                <span className="text-xs font-mono text-white/40">Zero Leaks</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Fixed 3-Slot DOM</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Recycles exactly 3 physical &lt;video&gt; DOM nodes using deterministic modulo indexing. Zero memory growth across 1,000+ videos.
              </p>
            </div>

            {/* DOM Slots Animation */}
            <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                <span className="font-mono text-white/60">Slot 0</span>
                <span className="text-blue-400 font-semibold text-[11px]">Previous Video (Cached)</span>
              </div>
              <div className="flex items-center justify-between text-xs px-3 py-2 rounded-xl bg-blue-500/20 border border-blue-500/40 font-bold text-white shadow-md">
                <span className="font-mono text-blue-300">Slot 1</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <Activity className="w-3 h-3" /> Active Stream (Playing)
                </span>
              </div>
              <div className="flex items-center justify-between text-xs px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                <span className="font-mono text-white/60">Slot 2</span>
                <span className="text-amber-400 font-semibold text-[11px]">Next Video (Pre-warmed)</span>
              </div>
            </div>
          </div>

          {/* Card 3: Synchronized Dual-Stream Audio (col-span-1) */}
          <div className="md:col-span-1 rounded-3xl p-8 apple-glass-card border border-white/10 relative overflow-hidden group flex flex-col justify-between">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  🔊 Sound Solved
                </span>
                <span className="text-xs font-mono text-white/40">API v2 Direct</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">RedGIFs Audio</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Reddit's official app frequently shows muted RedGIFs. SnooFlick resolves direct MP4 HD audio/video tracks with instant in-place unmuting.
              </p>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <Volume2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Full Synchronized Sound</div>
                <div className="text-[11px] text-emerald-300/80">No third-party audio extensions required</div>
              </div>
            </div>
          </div>

          {/* Card 4: Smart Quality Selector (col-span-2) */}
          <div className="md:col-span-2 rounded-3xl p-8 apple-glass-card border border-white/10 relative overflow-hidden group flex flex-col justify-between">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  💎 Network Adaptive
                </span>
                <span className="text-xs font-mono text-white/40">Save ~75% Data</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Smart Video Quality Engine</h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-xl">
                Automatically measure throughput with real-time Adaptive Bitrate Streaming (ABR), force 1080p Ultra-HD on Wi-Fi, or enable Data Saver 480p SD mode to conserve mobile data.
              </p>
            </div>

            {/* Interactive Quality Selector Pill Row */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-black/40 border border-white/10">
              <div className="text-xs font-semibold text-white/70">
                Selected Quality Mode:
              </div>
              <div className="flex items-center gap-2">
                {[
                  { id: 'Auto', label: '⚡ Auto (ABR)' },
                  { id: 'HD', label: '💎 1080p HD' },
                  { id: 'SD', label: '🍃 480p SD' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedQuality(item.id as any)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      selectedQuality === item.id
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                        : 'bg-white/5 text-white/70 hover:bg-white/15'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Card 5: Global Video Search (col-span-2) */}
          <div className="md:col-span-2 rounded-3xl p-8 apple-glass-card border border-white/10 relative overflow-hidden group flex flex-col justify-between">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  🔍 Live Search Graph
                </span>
                <span className="text-xs font-mono text-white/40">search:&lt;query&gt;</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Cross-Subreddit Global Video Search</h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-xl">
                Search millions of video posts across all of Reddit simultaneously. Dynamic recommendation pills adapt in real-time, with deep URL linking (?q=) and full 11-sort matrix mapping.
              </p>
            </div>

            {/* Interactive Search Mockup */}
            <div className="mt-8 p-3.5 rounded-2xl bg-black/50 border border-white/15 flex items-center gap-3">
              <Search className="w-5 h-5 text-rose-400 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search all videos across Reddit..."
                className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none font-medium"
              />
              <span className="text-[11px] font-bold px-3 py-1.5 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30 flex-shrink-0">
                11-Sort Matrix
              </span>
            </div>
          </div>

          {/* Card 6: Discreet Mode & Privacy (col-span-1) */}
          <div className="md:col-span-1 rounded-3xl p-8 apple-glass-card border border-white/10 relative overflow-hidden group flex flex-col justify-between">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-zinc-800 text-zinc-300 border border-white/10">
                  🛡️ Complete Discretion
                </span>
                <span className="text-xs font-mono text-white/40">Zero Traces</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Category Isolation</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                General feeds are strictly 100% SFW. Secret syntax (18:&lt;query&gt;) and header long-press gestures enable discreet adult exploration without algorithmic leakage.
              </p>
            </div>

            <div className="mt-6 p-3.5 rounded-2xl bg-zinc-900/60 border border-white/10 flex items-center gap-2.5 text-xs text-white/70">
              <ShieldAlert className="w-4 h-4 text-orange-400 flex-shrink-0" />
              <span>Zero cookies, zero user tracking, zero algorithmic profiling.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
