import React from 'react';
import { Globe, Apple, Download, Smartphone, ExternalLink, QrCode } from 'lucide-react';

export const InstallSimple: React.FC = () => {
  const siteUrl = 'https://snooflick.com';
  const apkReleaseUrl = 'https://github.com/owaisnaim/snooflick/releases';

  return (
    <section id="install" className="py-24 relative border-t border-white/10 bg-zinc-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full apple-glass-pill text-xs font-semibold text-cyan-400 border border-cyan-500/20">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Multi-Platform Access</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Install in seconds. <br />
            <span className="text-gradient-fiery">No App Store tax.</span>
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            Install SnooFlick directly to your home screen or download the native Android APK. Instant updates with zero gatekeepers.
          </p>
        </div>

        {/* 3 Clean Hardware Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
          
          {/* Card 1: Web App PWA */}
          <div className="p-7 rounded-3xl craft-card flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#FF4500] mb-5 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <div className="text-[10px] uppercase font-bold text-orange-400 tracking-wider mb-1">
                Zero Install
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Web App (PWA)</h3>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed mb-6">
                Stream immediately in Chrome, Safari, Edge, or Brave. Desktop keyboard shortcuts and zero disk space consumed.
              </p>
            </div>
            <a
              href={siteUrl}
              className="w-full py-3 px-4 rounded-xl apple-glass-button-primary text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
            >
              <span>Launch snooflick.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: iOS Safari */}
          <div className="p-7 rounded-3xl craft-card flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                <Apple className="w-6 h-6" />
              </div>
              <div className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider mb-1">
                iPhone &amp; iPad
              </div>
              <h3 className="text-xl font-bold text-white mb-2">iOS Home Screen</h3>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed mb-6">
                Open <strong>snooflick.com</strong> in Safari &rarr; Tap <strong>Share</strong> &rarr; Select <strong>Add to Home Screen</strong> for a full standalone PWA.
              </p>
            </div>
            <a
              href={siteUrl}
              className="w-full py-3 px-4 rounded-xl apple-glass-button-secondary text-white font-semibold text-xs flex items-center justify-center gap-2"
            >
              <span>Open in Safari</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Android Native APK */}
          <div className="p-7 rounded-3xl craft-card flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
                <Download className="w-6 h-6" />
              </div>
              <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider mb-1">
                Expo SDK 54 Native
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Android APK</h3>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed mb-6">
                Direct release APK with hardware video decoders, native haptic feedback engines, and true AMOLED dark styling.
              </p>
            </div>
            <a
              href={apkReleaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl apple-glass-pill hover:bg-white/15 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Download Release APK</span>
            </a>
          </div>

        </div>

        {/* Compact QR Code Strip for Mobile Scanning */}
        <div className="max-w-xl mx-auto p-5 rounded-3xl craft-card flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-orange-400">
              <QrCode className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Scan to open on phone</div>
              <div className="text-xs text-white/50">Point your camera to launch snooflick.com directly</div>
            </div>
          </div>
          
          <div className="relative w-16 h-16 bg-white p-1 rounded-2xl shadow-xl flex-shrink-0 flex items-center justify-center">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(
                siteUrl
              )}&color=000000&bgcolor=ffffff`}
              alt="Scan QR"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
