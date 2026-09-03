import React from 'react';
import { Check, X, AlertTriangle, ShieldCheck } from 'lucide-react';
import { COMPARISON_DATA } from '../data/comparison';

export const ComparisonTable: React.FC = () => {
  return (
    <section id="comparison" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-glass-pill text-xs font-semibold text-rose-400 border border-rose-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The SnooFlick Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How SnooFlick Compares. <br />
            <span className="text-gradient-fiery">The Clear Choice.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60">
            See how SnooFlick outshines the heavy official Reddit app and privacy-invasive commercial short-form platforms.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="overflow-x-auto apple-glass-card rounded-3xl border border-white/10 p-2 sm:p-6 shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-5 px-4 text-sm font-bold text-white/60 w-1/3">
                  Feature / Capability
                </th>
                <th className="py-5 px-4 text-base font-extrabold text-white w-1/4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF4500]"></span>
                    <span>SnooFlick</span>
                  </div>
                </th>
                <th className="py-5 px-4 text-sm font-bold text-white/60 w-1/5">
                  Official Reddit App
                </th>
                <th className="py-5 px-4 text-sm font-bold text-white/60 w-1/5">
                  TikTok / Reels
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {COMPARISON_DATA.map((row, idx) => (
                <tr 
                  key={idx} 
                  className="hover:bg-white/[0.02] transition-colors"
                >
                  {/* Feature Name */}
                  <td className="py-4 px-4 font-semibold text-white/90">
                    {row.feature}
                  </td>

                  {/* SnooFlick Column */}
                  <td className="py-4 px-4">
                    <div className="inline-flex items-center gap-2 font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/20 text-xs sm:text-sm">
                      <Check className="w-4 h-4 flex-shrink-0" />
                      <span>{row.snooflick}</span>
                    </div>
                  </td>

                  {/* Reddit Column */}
                  <td className="py-4 px-4 text-white/60 text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5">
                      {row.redditStatus === 'negative' ? (
                        <X className="w-4 h-4 text-rose-500/80 flex-shrink-0" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-amber-500/80 flex-shrink-0" />
                      )}
                      <span>{row.reddit}</span>
                    </div>
                  </td>

                  {/* TikTok Column */}
                  <td className="py-4 px-4 text-white/60 text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5">
                      {row.tiktokStatus === 'negative' ? (
                        <X className="w-4 h-4 text-rose-500/80 flex-shrink-0" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-amber-500/80 flex-shrink-0" />
                      )}
                      <span>{row.tiktok}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
