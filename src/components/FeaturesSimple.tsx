import React from 'react';
import { Zap, Volume2, Layers, ShieldCheck } from 'lucide-react';

export const FeaturesSimple: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Hold for 2X Speed',
      description: 'Press and hold anywhere on the right screen to fast-forward at 2.0x speed with real-time HUD pill feedback.',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
    },
    {
      icon: Volume2,
      title: 'Full Synced Audio',
      description: 'Synchronized sound for Reddit native video (v.redd.it) and direct RedGIFs MP4 streams with instant in-place unmuting.',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
    },
    {
      icon: Layers,
      title: '60 FPS Fixed 3-Slot Pool',
      description: 'Recycles exactly 3 physical video DOM nodes deterministically. Infinite scroll with zero memory leaks or frame drops.',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
    },
    {
      icon: ShieldCheck,
      title: 'Zero Login Required',
      description: 'Automated Guest Installed Client OAuth token refreshed seamlessly in memory. Zero passwords, zero ads, zero tracking.',
      color: 'text-rose-400',
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/20',
    },
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built for Pure Flow.
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            Engineered to eliminate Reddit video playback bugs, memory bloat, and annoying login barriers.
          </p>
        </div>

        {/* 4 Clean Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl apple-glass-card border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${feature.bg} border ${feature.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
