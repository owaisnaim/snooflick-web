import React from 'react';
import { Terminal, FileText, ExternalLink } from 'lucide-react';
import { TECH_SPECS } from '../data/techSpecs';

export const TechSpecs: React.FC = () => {
  const docLinks = [
    { title: 'Architecture & System Design', path: 'ARCHITECTURE.md' },
    { title: 'Media Engine & Streaming', path: 'MEDIA_ENGINE.md' },
    { title: 'Feed & 60fps Performance', path: 'FEED_AND_PERFORMANCE.md' },
    { title: 'Discovery & Recommendations', path: 'SUBREDDITS_AND_DISCOVERY.md' },
  ];

  return (
    <section className="py-24 relative border-t border-white/10 bg-black/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-glass-pill text-xs font-semibold text-blue-400 border border-blue-500/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>Architecture &amp; Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Built for Extreme Speed. <br />
            <span className="text-gradient-fiery">Auditable &amp; Open Source.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60">
            Deep dive into the architectural innovations that make SnooFlick deliver 60 FPS performance without memory bloat or streaming interruptions.
          </p>
        </div>

        {/* 4 Tech Spec Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TECH_SPECS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl apple-glass-card border border-white/10 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 inline-block mb-4">
                  {item.badge}
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-1">
                  {item.metric}
                </div>
                <div className="text-sm font-bold text-white/90 mb-3">
                  {item.label}
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Documentation Links Bar */}
        <div className="p-8 rounded-3xl apple-glass-card border border-white/15">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Explore Full Technical Documentation
              </h3>
              <p className="text-xs text-white/60">
                Detailed whitepapers covering media extraction pipelines, state machines, and OAuth lifecycles.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {docLinks.map((doc, idx) => (
                <a
                  key={idx}
                  href={`https://github.com/owaisnaim/snooflick/tree/main/docs/${doc.path}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl apple-glass-pill text-xs font-semibold text-white/80 hover:text-white hover:bg-white/15 transition-all"
                >
                  <FileText className="w-3.5 h-3.5 text-orange-400" />
                  <span>{doc.title}</span>
                  <ExternalLink className="w-3 h-3 text-white/40" />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
