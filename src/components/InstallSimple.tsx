import React from 'react';
import { Globe, Apple, Download, ExternalLink, QrCode } from 'lucide-react';

export const InstallSimple: React.FC = () => {
  const siteUrl = 'https://snooflick.com';
  const apkReleaseUrl = 'https://github.com/owaisnaim/snooflick/releases';

  return (
    <section id="install" className="py-24 relative border-b border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
            Platforms
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Install anywhere.
          </h2>
          <p className="text-base text-zinc-400">
            Open directly in any modern browser or install natively without App Store restrictions.
          </p>
        </div>

        {/* 3 Clean Flat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          
          {/* Card 1: Web App PWA */}
          <div className="p-7 rounded-2xl craft-card flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white mb-5">
                <Globe className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider mb-1">
                Zero Install
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Web PWA</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                Runs instantly in Chrome, Safari, Edge, or Brave. Desktop keyboard shortcuts and zero storage required.
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

          {/* Card 2: iOS Safari */}
          <div className="p-7 rounded-2xl craft-card flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white mb-5">
                <Apple className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider mb-1">
                iPhone &amp; iPad
              </div>
              <h3 className="text-xl font-bold text-white mb-2">iOS Home Screen</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                Open <strong>snooflick.com</strong> in Safari &rarr; Tap <strong>Share</strong> &rarr; Select <strong>Add to Home Screen</strong>.
              </p>
            </div>
            <a
              href={siteUrl}
              className="w-full py-2.5 px-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <span>Open in Safari</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Android APK */}
          <div className="p-7 rounded-2xl craft-card flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white mb-5">
                <Download className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider mb-1">
                React Native 0.76
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Android APK</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                Direct release APK with hardware video decoders, native haptic feedback, and pure black theme.
              </p>
            </div>
            <a
              href={apkReleaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download APK</span>
            </a>
          </div>

        </div>

        {/* Clean Minimalist QR Code Strip */}
        <div className="max-w-xl mx-auto p-4 rounded-2xl craft-card flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400">
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Scan to open on phone</div>
              <div className="text-[11px] text-zinc-500 font-mono">Camera scan directly launches snooflick.com</div>
            </div>
          </div>
          
          <div className="relative w-14 h-14 bg-white p-1 rounded-lg border border-zinc-800 flex-shrink-0 flex items-center justify-center">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(
                siteUrl
              )}&color=000000&bgcolor=ffffff`}
              alt="Scan QR"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
