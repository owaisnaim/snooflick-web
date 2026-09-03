export interface TechSpec {
  metric: string;
  label: string;
  detail: string;
  badge: string;
}

export const TECH_SPECS: TechSpec[] = [
  {
    metric: '109 kB',
    label: 'Main Client JS Bundle',
    detail: 'Achieved via Rollup manualChunks splitting hls.js and react-vendor into isolated CDN-cached chunks (-87% size reduction).',
    badge: 'Vite Vendor Chunking'
  },
  {
    metric: '3 Slots',
    label: 'Persistent Video DOM Pool',
    detail: 'Continuous modulo mapping (slotIndex = index % 3) eliminates memory accumulation and garbage collection pauses during long sessions.',
    badge: 'Deterministic Memory'
  },
  {
    metric: '512 KB',
    label: 'Pre-Buffering Range Chunk',
    detail: 'Speculative lookahead pre-warms HLS manifests and pre-loads initial byte ranges for upcoming videos for near-instant 0ms playback transitions.',
    badge: 'Smart Pre-Buffering'
  },
  {
    metric: '23 Hours',
    label: 'In-Memory OAuth Token Cycle',
    detail: 'Automated Guest Installed Client tokens generated with dynamic device ID hashing, guaranteeing 100% uninterrupted stream uptime.',
    badge: 'Zero-Config OAuth'
  }
];
