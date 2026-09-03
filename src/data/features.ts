export interface BentoFeature {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  gradient: string;
  colSpan?: string;
  tag: string;
}

export const BENTO_FEATURES: BentoFeature[] = [
  {
    id: 'hold-2x',
    title: 'Hold-to-2X Speed Engine',
    subtitle: 'Zero-latency fast forward on demand',
    badge: '⚡ Gesture Innovation',
    description: 'Press and hold anywhere on the right side of the screen to accelerate video playback to 2.0x with subtle haptic feedback. Release smoothly to resume 1.0x with zero synthetic click pausing or audio desync.',
    gradient: 'from-amber-500/15 via-orange-500/5 to-transparent',
    colSpan: 'md:col-span-2',
    tag: '2.0X Haptic HUD'
  },
  {
    id: 'fixed-dom',
    title: 'Fixed 3-Slot DOM Virtualization',
    subtitle: '60 FPS infinite scroll with 0 memory leaks',
    badge: '🚀 Core Performance',
    description: 'Unlike standard virtual lists that accumulate memory until the browser tab crashes, SnooFlick recycles exactly 3 physical <video> DOM slots deterministically via modulo arithmetic. Scroll 1,000+ videos without a single frame stutter.',
    gradient: 'from-blue-500/15 via-indigo-500/5 to-transparent',
    colSpan: 'md:col-span-1',
    tag: 'slotIndex = index % 3'
  },
  {
    id: 'synced-audio',
    title: 'Synchronized Dual-Stream Audio',
    subtitle: 'Reddit HLS & RedGIFs sound solved forever',
    badge: '🔊 Audio Continuity',
    description: 'Reddit separates video and DASH audio into distinct CDN streams. SnooFlick automatically bonds audio streams, integrates RedGIFs API v2 direct MP4 feeds, and decouples mute controls for instant toggle with zero video restarts.',
    gradient: 'from-emerald-500/15 via-teal-500/5 to-transparent',
    colSpan: 'md:col-span-1',
    tag: '100% Synced Sound'
  },
  {
    id: 'smart-quality',
    title: 'Smart Quality Selector (Auto / HD / SD)',
    subtitle: 'Adaptive Bitrate & 75% Data Saver',
    badge: '💎 Network Adaptive',
    description: 'Toggle on-the-fly between real-time Adaptive Bitrate Streaming (ABR), forced 1080p Ultra-HD on Wi-Fi, or Data Saver 480p SD mode to conserve up to 75% mobile bandwidth on cellular data plans.',
    gradient: 'from-purple-500/15 via-pink-500/5 to-transparent',
    colSpan: 'md:col-span-2',
    tag: 'Auto • HD • SD'
  },
  {
    id: 'global-search',
    title: 'Cross-Subreddit Global Video Search',
    subtitle: 'Discover any topic across all of Reddit',
    badge: '🔍 Live Search Graph',
    description: 'Type any keyword to query Reddit\'s vast video archive across every community simultaneously. Seamlessly map ReddiTok\'s 11-sort matrix with deep video backfilling, direct URL deep linking (?q=), and dynamic recommendation pills.',
    gradient: 'from-rose-500/15 via-red-500/5 to-transparent',
    colSpan: 'md:col-span-2',
    tag: 'search:<query>'
  },
  {
    id: 'discreet-mode',
    title: 'Discreet Adult Mode & Category Isolation',
    subtitle: 'Zero traces, secret gestures & strict boundaries',
    badge: '🕵️ Discretion',
    description: 'General searches strictly filter adult subreddits. For private discovery, subtle power syntax (18:<query>) or holding down headers (450ms) toggles adult graphs with zero algorithmic contamination and zero local history leakage.',
    gradient: 'from-amber-600/15 via-red-600/5 to-transparent',
    colSpan: 'md:col-span-1',
    tag: 'Category Isolated'
  },
];
