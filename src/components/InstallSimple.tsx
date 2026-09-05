import React from 'react';
import { Globe, Smartphone, ExternalLink } from 'lucide-react';

export const InstallSimple: React.FC = () => {
  const siteUrl = 'https://snooflick.com';

  return (
    <section id="install" className="py-24 relative border-b border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
            Access Anywhere
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Universal PWA. No app store barriers.
          </h2>
          <p className="text-base text-zinc-400">
            SnooFlick runs instantly in your browser and installs as a standalone fullscreen app on any mobile device.
          </p>
        </div>

        {/* Clean 2-Card PWA Hub */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Card 1: Web App PWA */}
          <div className="p-7 rounded-2xl craft-card flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white mb-5">
                <Globe className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider mb-1">
                Instant Browser Access
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Web App</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Stream immediately in Chrome, Safari, Edge, or Brave on mobile and desktop. Keyboard shortcuts enabled with zero disk space consumed.
              </p>
            </div>
            <a
              href={siteUrl}
              className="w-full py-2.5 px-4 rounded-lg bg-white hover:bg-zinc-200 text-black font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <span>Launch snooflick.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Mobile Add to Home Screen */}
          <div className="p-7 rounded-2xl craft-card flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white mb-5">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider mb-1">
                iOS &amp; Android Standalone
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Add to Home Screen</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                <strong>iOS:</strong> In Safari, tap <em>Share &rarr; Add to Home Screen</em>. <br />
                <strong>Android:</strong> In Chrome, tap <em>Menu &rarr; Install app</em>. Runs full-screen without browser UI.
              </p>
            </div>
            <a
              href={siteUrl}
              className="w-full py-2.5 px-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <span>Open on Mobile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
