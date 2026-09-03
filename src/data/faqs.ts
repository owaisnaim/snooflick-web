export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQS_LIST: FAQItem[] = [
  {
    id: 'login-required',
    question: 'Do I need a Reddit account or API credentials to use SnooFlick?',
    answer: 'No! SnooFlick uses an automated guest token mechanism (Installed Client OAuth) that requires zero passwords, zero developer app creation, and zero personal cookies. You can jump straight in and start watching immediately on any device without logging in.',
    category: 'General'
  },
  {
    id: 'redgifs-sound',
    question: 'How does SnooFlick achieve synchronized audio on RedGIFs videos?',
    answer: 'While the official Reddit mobile app and desktop site frequently display RedGIFs without sound or as static GIFs, SnooFlick resolves RedGIFs direct MP4 streams via API v2 with high-definition synchronized audio tracks and handles dual SD/HD quality streaming automatically.',
    category: 'Audio & Streaming'
  },
  {
    id: 'ios-install',
    question: 'How do I install SnooFlick on iPhone or iPad?',
    answer: 'On iOS, open the SnooFlick web app in Safari, tap the "Share" button at the bottom of the screen, and select "Add to Home Screen". SnooFlick installs as a standalone PWA with custom app icons, gesture support, and fullscreen integration with the Dynamic Island and status bar.',
    category: 'Platforms'
  },
  {
    id: 'android-apk',
    question: 'Is there a native Android APK or mobile app?',
    answer: 'Yes! SnooFlick features a native mobile app built with React Native and Expo SDK 54. You can download the latest Android release APK directly from our GitHub Releases page, or install it as a lightweight PWA from Chrome with 1 tap.',
    category: 'Platforms'
  },
  {
    id: 'memory-leak',
    question: 'How does the Fixed 3-Slot DOM Pool prevent browser crashes?',
    answer: 'Traditional infinite-scroll applications mount dozens or hundreds of media elements to the DOM as you scroll, rapidly consuming gigabytes of RAM until the tab crashes. SnooFlick keeps exactly 3 physical <video> elements in the DOM at all times and re-indexes them dynamically using modulo arithmetic, keeping RAM usage ultra-lean even after hours of scrolling.',
    category: 'Performance'
  },
  {
    id: 'data-saver',
    question: 'How does the Smart Video Quality engine save cellular data?',
    answer: 'SnooFlick includes a 3-tier quality selector: "⚡ Auto" uses Adaptive Bitrate Streaming (ABR) to dynamically adjust resolution to your network speed. "💎 HD" forces 1080p for high-speed Wi-Fi, and "🍃 SD" caps streams to 480p/360p, saving up to 75% data on cellular networks.',
    category: 'Streaming'
  },
  {
    id: 'discreet-nsfw',
    question: 'How is adult (18+) content handled?',
    answer: 'SnooFlick maintains strict category isolation. By default, all feeds, autocomplete suggestions, and global searches strictly exclude adult content. Power users who wish to explore adult subreddits can use discreet power prefixes (such as 18:<query> or nsfw:<query>) or long-press discovery headers to unlock adult graphs without polluting general feeds.',
    category: 'Privacy'
  },
  {
    id: 'open-source',
    question: 'Is SnooFlick free and open source?',
    answer: 'Yes! SnooFlick is 100% open source under the permissive MIT license. Both the React client, Express streaming server, and React Native mobile app codebases are publicly auditable and hosted on GitHub at owaisnaim/snooflick.',
    category: 'General'
  }
];
