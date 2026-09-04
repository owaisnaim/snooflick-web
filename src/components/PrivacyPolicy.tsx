import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, Lock, Globe, EyeOff, FileText, CheckCircle2 } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'introduction', label: '01 / Introduction' },
    { id: 'no-collection', label: '02 / Data Not Collected' },
    { id: 'ephemeral-oauth', label: '03 / Ephemeral Guest OAuth' },
    { id: 'local-storage', label: '04 / On-Device Storage' },
    { id: 'third-parties', label: '05 / Third-Party APIs' },
    { id: 'cookies', label: '06 / Cookies & Tracking' },
    { id: 'children', label: '07 / Age & Children Privacy' },
    { id: 'user-rights', label: '08 / User Rights (GDPR/CCPA)' },
    { id: 'contact', label: '09 / Contact & Attribution' },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white pb-24">
      
      {/* Top Sticky Minimalist Bar */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-900 py-3.5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to SnooFlick</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]"></span>
            <span>snooflick.com/privacy</span>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        
        {/* Header Title */}
        <header className="border-b border-zinc-900 pb-10 mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-zinc-800 bg-zinc-950 text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" />
            <span>Privacy by Design</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Privacy Policy
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500">
            <span>Last Updated: September 4, 2026</span>
            <span>•</span>
            <span>Effective Date: September 4, 2026</span>
            <span>•</span>
            <span>Version 2.0</span>
          </div>

          <p className="mt-6 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl font-normal">
            SnooFlick is built on a strict zero-knowledge architecture. We do not require accounts, we do not log personal identities, and we do not sell or monetize personal data.
          </p>
        </header>

        {/* Quick Jump Table of Contents */}
        <div className="mb-14 p-5 rounded-xl border border-zinc-900 bg-zinc-950/60">
          <div className="text-xs font-mono font-bold uppercase text-zinc-500 mb-3 flex items-center gap-2">
            <FileText className="w-3.5 h-3.5" />
            <span>Table of Contents</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="text-xs font-mono text-zinc-400 hover:text-white transition-colors py-1"
              >
                {sec.label}
              </a>
            ))}
          </div>
        </div>

        {/* Policy Content Sections */}
        <div className="space-y-16 text-sm text-zinc-300 leading-relaxed font-normal">
          
          {/* Section 1: Introduction */}
          <section id="introduction" className="space-y-4 scroll-mt-24 border-t border-zinc-900 pt-8">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">01 / Introduction</div>
            <h2 className="text-xl font-bold text-white">Introduction &amp; Scope</h2>
            <p className="text-zinc-400">
              This Privacy Policy applies to the SnooFlick ecosystem, encompassing the web application hosted at <strong className="text-white">snooflick.com</strong>, the Progressive Web App (PWA), and the native mobile applications for iOS and Android (collectively referred to as &quot;SnooFlick&quot; or &quot;the Service&quot;).
            </p>
            <p className="text-zinc-400">
              SnooFlick is an independent, open-source client designed to provide a fast, distraction-free vertical video stream for publicly available content hosted on Reddit and linked media platforms. SnooFlick is not affiliated with, endorsed by, or sponsored by Reddit Inc.
            </p>
          </section>

          {/* Section 2: Data Not Collected */}
          <section id="no-collection" className="space-y-4 scroll-mt-24 border-t border-zinc-900 pt-8">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">02 / Data Not Collected</div>
            <h2 className="text-xl font-bold text-white">Information We Do NOT Collect</h2>
            <p className="text-zinc-400">
              Unlike traditional social media applications, SnooFlick does not collect, store, sell, or profile your personal data:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-950 flex items-start gap-3">
                <EyeOff className="w-4 h-4 text-zinc-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white mb-1">No Personal Identifiers</div>
                  <div className="text-xs text-zinc-500">No real names, email addresses, phone numbers, or passwords.</div>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-950 flex items-start gap-3">
                <Lock className="w-4 h-4 text-zinc-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white mb-1">No Account Databases</div>
                  <div className="text-xs text-zinc-500">No centralized user accounts or credential vaults exist on our servers.</div>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-950 flex items-start gap-3">
                <Globe className="w-4 h-4 text-zinc-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white mb-1">No Precise Geolocation</div>
                  <div className="text-xs text-zinc-500">We do not access GPS, Wi-Fi triangulation, or precise device location.</div>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-950 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-zinc-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white mb-1">No Tracking Pixels</div>
                  <div className="text-xs text-zinc-500">Zero third-party advertising trackers (No Meta Pixel, Google Ads, or data brokers).</div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Ephemeral Guest OAuth */}
          <section id="ephemeral-oauth" className="space-y-4 scroll-mt-24 border-t border-zinc-900 pt-8">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">03 / Ephemeral Guest OAuth</div>
            <h2 className="text-xl font-bold text-white">Application-Only Guest Authentication</h2>
            <p className="text-zinc-400">
              To query public feeds from Reddit’s servers without requiring users to log into a Reddit account, SnooFlick implements Reddit’s official <code className="text-xs px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono">https://oauth.reddit.com/grants/installed_client</code> protocol.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400 list-disc pl-5">
              <li>
                <strong className="text-white">In-Memory Token Lifecycle:</strong> Guest tokens are held purely in transient server memory and automatically renewed every 23 hours. They are never written to disk or linked to personal users.
              </li>
              <li>
                <strong className="text-white">Ephemeral Device Hashing:</strong> A randomized pseudo-anonymous device hash is generated solely to satisfy Reddit’s official rate-limiting headers. This identifier cannot be reversed to uncover hardware identities or user identities.
              </li>
              <li>
                <strong className="text-white">Zero User Cookie Sharing:</strong> SnooFlick does not inspect, read, or forward your private Reddit browser cookies.
              </li>
            </ul>
          </section>

          {/* Section 4: On-Device Local Storage */}
          <section id="local-storage" className="space-y-4 scroll-mt-24 border-t border-zinc-900 pt-8">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">04 / On-Device Storage</div>
            <h2 className="text-xl font-bold text-white">Local On-Device Storage (Client Only)</h2>
            <p className="text-zinc-400">
              SnooFlick stores application preferences exclusively on your physical device using browser <code className="text-xs px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono">localStorage</code> or mobile <code className="text-xs px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono">AsyncStorage</code>. This data never touches our servers:
            </p>

            <div className="border border-zinc-800 rounded-xl overflow-hidden text-xs">
              <div className="grid grid-cols-12 bg-zinc-900/90 font-mono text-zinc-400 p-3 border-b border-zinc-800 font-semibold">
                <div className="col-span-4">Preference</div>
                <div className="col-span-4">Storage Location</div>
                <div className="col-span-4">Sync / Sharing</div>
              </div>
              <div className="divide-y divide-zinc-800/60 bg-zinc-950 font-mono text-zinc-300">
                <div className="grid grid-cols-12 p-3">
                  <div className="col-span-4 font-bold text-white">Audio Mute State</div>
                  <div className="col-span-4 text-zinc-400">Local Browser / Device</div>
                  <div className="col-span-4 text-emerald-400">Never transmitted</div>
                </div>
                <div className="grid grid-cols-12 p-3">
                  <div className="col-span-4 font-bold text-white">Liked Video IDs</div>
                  <div className="col-span-4 text-zinc-400">Local Device Database</div>
                  <div className="col-span-4 text-emerald-400">Never transmitted</div>
                </div>
                <div className="grid grid-cols-12 p-3">
                  <div className="col-span-4 font-bold text-white">Recent Subreddit Searches</div>
                  <div className="col-span-4 text-zinc-400">Local Device Cache</div>
                  <div className="col-span-4 text-emerald-400">Never transmitted</div>
                </div>
                <div className="grid grid-cols-12 p-3">
                  <div className="col-span-4 font-bold text-white">Adult (18+) Mode Toggle</div>
                  <div className="col-span-4 text-zinc-400">Local Browser Memory</div>
                  <div className="col-span-4 text-emerald-400">Never transmitted</div>
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-500 pt-1">
              You may wipe all local data at any time by clearing your browser cache, tapping &quot;Clear Data&quot; in Settings, or uninstalling the application.
            </p>
          </section>

          {/* Section 5: Third-Party APIs */}
          <section id="third-parties" className="space-y-4 scroll-mt-24 border-t border-zinc-900 pt-8">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">05 / Third-Party APIs</div>
            <h2 className="text-xl font-bold text-white">Third-Party Content &amp; Delivery Services</h2>
            <p className="text-zinc-400">
              When you browse videos in SnooFlick, media streams and public metadata are resolved from external platforms:
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-zinc-400">
              <li className="p-3.5 rounded-lg border border-zinc-800 bg-zinc-950">
                <div className="font-bold text-white mb-1">Reddit API &amp; Media Servers (v.redd.it)</div>
                <div>Public video streams, post titles, vote counts, and comment threads are retrieved from Reddit’s public content delivery infrastructure. Your interactions with Reddit-hosted content are subject to <a href="https://www.reddit.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-zinc-200 underline">Reddit&apos;s Privacy Policy</a>.</div>
              </li>
              <li className="p-3.5 rounded-lg border border-zinc-800 bg-zinc-950">
                <div className="font-bold text-white mb-1">RedGIFs Media Delivery</div>
                <div>For submissions originating from RedGIFs, direct video and synchronized audio streams are resolved via RedGIFs APIs. Interactions with RedGIFs streams are governed by <a href="https://www.redgifs.com/terms" target="_blank" rel="noopener noreferrer" className="text-zinc-200 underline">RedGIFs Terms of Service</a>.</div>
              </li>
              <li className="p-3.5 rounded-lg border border-zinc-800 bg-zinc-950">
                <div className="font-bold text-white mb-1">Hosting &amp; Edge Infrastructure (Vercel)</div>
                <div>The web deployment of SnooFlick is hosted on Vercel. Vercel automatically collects transient technical server logs (such as IP addresses and HTTP request headers) exclusively for network security, DDoS protection, and edge cache routing, as detailed in <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-zinc-200 underline">Vercel&apos;s Privacy Policy</a>.</div>
              </li>
            </ul>
          </section>

          {/* Section 6: Cookies & Tracking */}
          <section id="cookies" className="space-y-4 scroll-mt-24 border-t border-zinc-900 pt-8">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">06 / Cookies &amp; Tracking</div>
            <h2 className="text-xl font-bold text-white">Cookies and Tracking Technologies</h2>
            <p className="text-zinc-400">
              SnooFlick does not employ advertising cookies, behavioral tracking scripts, cross-site analytics identifiers, or user fingerprinting.
            </p>
            <p className="text-zinc-400">
              Any session data utilized within your browser is purely functional (such as remembering if sound was enabled or preserving your active position in the feed).
            </p>
          </section>

          {/* Section 7: Age & Children Privacy */}
          <section id="children" className="space-y-4 scroll-mt-24 border-t border-zinc-900 pt-8">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">07 / Age &amp; Children Privacy</div>
            <h2 className="text-xl font-bold text-white">Children&apos;s Privacy (COPPA) &amp; Age Gate</h2>
            <p className="text-zinc-400">
              SnooFlick is not intended for or directed toward children under the age of 13. We do not knowingly collect personal information from children under 13.
            </p>
            <p className="text-zinc-400">
              Certain public Reddit communities contain mature, Not-Safe-For-Work (NSFW) material. Users must be at least 18 years of age (or the legal age of majority in their jurisdiction) to search for or access adult feeds.
            </p>
          </section>

          {/* Section 8: User Rights (GDPR / CCPA) */}
          <section id="user-rights" className="space-y-4 scroll-mt-24 border-t border-zinc-900 pt-8">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">08 / User Rights</div>
            <h2 className="text-xl font-bold text-white">Your Data Rights (GDPR, CCPA &amp; Global Privacy)</h2>
            <p className="text-zinc-400">
              Under regulations like the European Union General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), individuals have rights regarding access, deletion, and portability of personal data.
            </p>
            <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-zinc-300 leading-relaxed">
                Because SnooFlick collects and retains <strong>zero personal records</strong>, there is no personal database from which to extract, export, or delete your identity. You maintain total self-sovereign control over your device storage.
              </div>
            </div>
          </section>

          {/* Section 9: Contact */}
          <section id="contact" className="space-y-4 scroll-mt-24 border-t border-zinc-900 pt-8">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">09 / Contact &amp; Attribution</div>
            <h2 className="text-xl font-bold text-white">Open Source Governance &amp; Contact</h2>
            <p className="text-zinc-400">
              SnooFlick is an open-source software project licensed under the MIT License and maintained on GitHub. If you have questions regarding this Privacy Policy or software architecture, you may inspect the public repository or open an issue:
            </p>

            <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950 text-xs font-mono space-y-2">
              <div className="text-white font-bold">SnooFlick Project Repository:</div>
              <div>
                <a
                  href="https://github.com/owaisnaim/snooflick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white underline"
                >
                  https://github.com/owaisnaim/snooflick
                </a>
              </div>
              <div className="text-zinc-500 pt-1">
                Maintainer: Owais Naim • snooflick.com
              </div>
            </div>
          </section>

        </div>

      </main>

      {/* Minimal Bottom Dock on Privacy Page */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-500 font-mono">
        <button
          onClick={onBack}
          className="hover:text-white transition-colors underline"
        >
          ← Return to Home
        </button>
        <span>© 2026 SnooFlick • MIT License</span>
      </div>

    </div>
  );
};
