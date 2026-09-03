import React from 'react';
import { Globe, Apple, Download, Smartphone, ExternalLink, QrCode } from 'lucide-react';

export const InstallSimple: React.FC = () => {
  const siteUrl = 'https://snooflick.com';
  const apkReleaseUrl = 'https://github.com/owaisnaim/snooflick/releases';

  return (
    <section id="install" className="py-20 relative border-t border-white/10 bg-zinc-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get SnooFlick
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            Choose your preferred platform. Zero account registration required.
          </p>
        </div>

        {/* 3 Clean Installation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          
          {/* Card 1: Web App PWA */}
          <div className="p-6 rounded-2xl apple-glass-card border border-white/10 flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#FF4500] mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Web App (PWA)</h3>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed mb-4">
                Runs instantly in Chrome, Safari, Edge, or Brave on desktop &amp; mobile with zero installation.
              </p>
            </div>
            <a
              href={siteUrl}
              className="w-full py-2.5 px-4 rounded-xl apple-glass-button-primary text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-orange-500/20"
            >
              <span>Launch snooflick.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: iOS Guide */}
          <div className="p-6 rounded-2xl apple-glass-card border border-white/10 flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-4">
                <Apple className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">iOS Home Screen</h3>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed mb-4">
                Open <strong>snooflick.com</strong> in Safari &rarr; Tap <strong>Share</strong> &rarr; Select <strong>Add to Home Screen</strong>.
              </p>
            </div>
            <a
              href={siteUrl}
              className="w-full py-2.5 px-4 rounded-xl apple-glass-button-secondary text-white font-semibold text-xs flex items-center justify-center gap-2"
            >
              <span>Open in Safari</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Android APK */}
          <div className="p-6 rounded-2xl apple-glass-card border border-white/10 flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Android APK</h3>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed mb-4">
                Native React Native build with hardware video decoders and native haptic feedback.
              </p>
            </div>
            <a
              href={apkReleaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl apple-glass-pill hover:bg-white/15 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Download APK</span>
            </a>
          </div>

        </div>

        {/* Compact QR Code Strip for Mobile Scanning */}
        <div className="max-w-xl mx-auto p-4 rounded-2xl apple-glass-card border border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-orange-400">
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Scan to open on phone</div>
              <div className="text-[11px] text-white/50">Point your camera to launch snooflick.com</div>
            </div>
          </div>
          
          <div className="relative w-14 h-14 bg-white p-1 rounded-xl shadow-md flex-shrink-0">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(
                siteUrl
              )}&color=000000&bgcolor=ffffff`}
              alt="Scan QR"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
