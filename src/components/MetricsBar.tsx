import React from 'react';
import { KeyRound, Cpu, Layers, Sparkles, Code2 } from 'lucide-react';

export const MetricsBar: React.FC = () => {
  const metrics = [
    {
      value: '0',
      suffix: 'Logins',
      label: 'Zero-config guest access',
      subtext: 'Auto-refreshed OAuth tokens',
      icon: KeyRound,
      color: 'text-amber-400',
    },
    {
      value: '109',
      suffix: 'kB',
      label: 'Core Client Bundle',
      subtext: '-87% size via Vite chunking',
      icon: Cpu,
      color: 'text-emerald-400',
    },
    {
      value: '3',
      suffix: 'Slots',
      label: 'Fixed Virtual DOM Pool',
      subtext: 'Zero memory leaks forever',
      icon: Layers,
      color: 'text-cyan-400',
    },
    {
      value: '11',
      suffix: 'Sorts',
      label: 'Complete 11-Sort Matrix',
      subtext: 'Hot, Best, Top, Rising & more',
      icon: Sparkles,
      color: 'text-rose-400',
    },
    {
      value: '100%',
      suffix: 'MIT',
      label: 'Free & Open Source',
      subtext: 'Auditable on GitHub',
      icon: Code2,
      color: 'text-purple-400',
    },
  ];

  return (
    <section className="relative py-12 border-y border-white/10 bg-zinc-950/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-4 rounded-2xl apple-glass-card hover:border-white/20 transition-all group"
              >
                <div className={`p-2.5 rounded-xl bg-white/5 mb-3 group-hover:scale-110 transition-transform ${item.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    {item.value}
                  </span>
                  <span className={`text-base font-bold ${item.color}`}>
                    {item.suffix}
                  </span>
                </div>
                <div className="text-xs font-semibold text-white/90 mt-1">
                  {item.label}
                </div>
                <div className="text-[11px] text-white/50 mt-0.5">
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
