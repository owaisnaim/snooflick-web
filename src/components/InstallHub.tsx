import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Apple, 
  Download, 
  ArrowRight, 
  QrCode, 
  Share, 
  PlusSquare, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export const InstallHub: React.FC = () => {
  const siteUrl = 'https://snooflick.com';
  const apkReleaseUrl = 'https://github.com/owaisnaim/snooflick/releases';

  return (
    <section id="install" className="py-24 relative overflow-hidden border-t border-white/10 bg-zinc-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-glass-pill text-xs font-semibold text-cyan-400 border border-cyan-500/20">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Install on Any Device</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Ready in Seconds. <br />
            <span className="text-gradient-fiery">Zero App Store Friction.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60">
            Install SnooFlick directly to your home screen or download the native Android APK. Instant updates, zero gatekeepers.
          </p>
        </div>

        {/* 3 Installation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Option 1: Web App PWA */}
          <div className="p-8 rounded-3xl apple-glass-card border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7 text-[#FF4500]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400">
                Instant • No Install Needed
              </span>
              <h3 className="text-2xl font-black text-white mt-1 mb-3">
                Web App (PWA)
              </h3>
              <p className="text-sm text-white/65 leading-relaxed">
                Stream immediately in any modern desktop or mobile browser. Offline caching, full keyboard shortcuts, and zero disk space consumed.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs text-white/70">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Works in Safari, Chrome, Edge, Brave</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Desktop keyboard shortcuts (J, K, Space, M)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>1-click launch from bookmarks</span>
                </li>
              </ul>
            </div>

            <a
              href={siteUrl}
              className="mt-8 w-full py-3.5 px-4 rounded-xl apple-glass-button-primary text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
            >
              <span>Open snooflick.com</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Option 2: iOS Safari Installation Guide */}
          <div className="p-8 rounded-3xl apple-glass-card border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <Apple className="w-7 h-7 text-white" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                iPhone &amp; iPad
              </span>
              <h3 className="text-2xl font-black text-white mt-1 mb-3">
                iOS Home Screen
              </h3>
              <p className="text-sm text-white/65 leading-relaxed">
                Installs as a standalone native-feeling application with Apple status bar and Dynamic Island safe area integration.
              </p>

              {/* Step by Step Guide */}
              <div className="mt-6 space-y-3 p-4 rounded-2xl bg-black/40 border border-white/5 text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-white/10 text-white font-bold flex items-center justify-center text-[10px]">
                    1
                  </span>
                  <span className="text-white/80">Open <strong>snooflick.com</strong> in Safari</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-white/10 text-white font-bold flex items-center justify-center text-[10px]">
                    2
                  </span>
                  <span className="text-white/80 flex items-center gap-1.5">
                    Tap the <strong>Share</strong> button <Share className="w-3.5 h-3.5 text-blue-400 inline" />
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-white/10 text-white font-bold flex items-center justify-center text-[10px]">
                    3
                  </span>
                  <span className="text-white/80 flex items-center gap-1.5">
                    Select <strong>Add to Home Screen</strong> <PlusSquare className="w-3.5 h-3.5 text-emerald-400 inline" />
                  </span>
                </div>
              </div>
            </div>

            <a
              href={siteUrl}
              className="mt-8 w-full py-3.5 px-4 rounded-xl apple-glass-button-secondary text-white font-semibold text-sm flex items-center justify-center gap-2"
            >
              <span>Open in Safari</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Option 3: Android Native APK & Expo */}
          <div className="p-8 rounded-3xl apple-glass-card border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <Download className="w-7 h-7 text-emerald-400" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                Native App • Expo SDK 54
              </span>
              <h3 className="text-2xl font-black text-white mt-1 mb-3">
                Android APK
              </h3>
              <p className="text-sm text-white/65 leading-relaxed">
                Full native React Native build with hardware video decoders, native haptic feedback engines, and multi-account support.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs text-white/70">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Hardware-accelerated Expo Video engine</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>AMOLED True Black styling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Zero Google Play services required</span>
                </li>
              </ul>
            </div>

            <a
              href={apkReleaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full py-3.5 px-4 rounded-xl apple-glass-pill text-white hover:bg-white/15 font-semibold text-sm flex items-center justify-center gap-2 transition-all"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Download Latest APK</span>
            </a>
          </div>

        </div>

        {/* Desktop Scan-to-Launch Mobile QR Banner */}
        <div className="mt-16 p-8 rounded-3xl apple-glass-card border border-white/15 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-orange-400">
              <QrCode className="w-3.5 h-3.5" />
              <span>Instant Mobile Handoff</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Browsing on Desktop? <br />
              <span className="text-gradient-fiery">Scan to Launch on Your Phone.</span>
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Point your iOS or Android camera at the QR code to open SnooFlick directly on your mobile device at snooflick.com.
            </p>
          </div>

          {/* QR Code Container with SnooFlick Logo in center */}
          <div className="p-4 rounded-2xl bg-white p-3 shadow-2xl flex flex-col items-center flex-shrink-0">
            <div className="relative w-36 h-36 flex items-center justify-center">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
                  siteUrl
                )}&color=000000&bgcolor=ffffff`}
                alt="Scan to open snooflick.com on mobile"
                className="w-36 h-36 object-contain rounded-lg"
              />
              <div className="absolute w-8 h-8 rounded-lg overflow-hidden p-0.5 bg-black shadow-md border border-white">
                <img src="/favicon.png" alt="Snoo" className="w-full h-full object-cover" />
              </div>
            </div>
            <span className="text-[10px] font-bold text-zinc-900 mt-2">
              Scan for snooflick.com
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
