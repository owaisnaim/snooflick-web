export interface ComparisonRow {
  feature: string;
  snooflick: string;
  snooflickStatus: 'positive' | 'neutral' | 'negative';
  reddit: string;
  redditStatus: 'positive' | 'neutral' | 'negative';
  tiktok: string;
  tiktokStatus: 'positive' | 'neutral' | 'negative';
}

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: 'In-Feed Video Advertisements',
    snooflick: 'Zero Ads (100% Clean)',
    snooflickStatus: 'positive',
    reddit: 'Heavy Promoted Posts & Ads',
    redditStatus: 'negative',
    tiktok: 'Aggressive Ads & E-Commerce',
    tiktokStatus: 'negative',
  },
  {
    feature: 'Account / Login Requirement',
    snooflick: 'None (Instant Auto OAuth)',
    snooflickStatus: 'positive',
    reddit: 'Required (Nag screens & app lock)',
    redditStatus: 'negative',
    tiktok: 'Required for full feed',
    tiktokStatus: 'neutral',
  },
  {
    feature: 'RedGIFs Synced Sound',
    snooflick: 'Full Direct MP4 Sound',
    snooflickStatus: 'positive',
    reddit: 'Broken / Muted by default',
    redditStatus: 'negative',
    tiktok: 'Not Supported',
    tiktokStatus: 'negative',
  },
  {
    feature: 'Hold-for-2X Speed Gesture',
    snooflick: 'Native 2.0X Haptic Hold',
    snooflickStatus: 'positive',
    reddit: 'Not Available',
    redditStatus: 'negative',
    tiktok: 'Hold Menu Required',
    tiktokStatus: 'neutral',
  },
  {
    feature: 'Memory / Virtualization Footprint',
    snooflick: 'Fixed 3-Slot Virtual DOM',
    snooflickStatus: 'positive',
    reddit: 'High Native RAM & Leaks',
    redditStatus: 'negative',
    tiktok: 'Several GBs Cache Bloat',
    tiktokStatus: 'negative',
  },
  {
    feature: 'Data Saver Control',
    snooflick: 'Smart Auto / 1080p / 480p SD',
    snooflickStatus: 'positive',
    reddit: 'Limited / Inconsistent',
    redditStatus: 'neutral',
    tiktok: 'Heavy Bandwidth Usage',
    tiktokStatus: 'negative',
  },
  {
    feature: 'Global Cross-Subreddit Search',
    snooflick: 'Live Multi-Community Search',
    snooflickStatus: 'positive',
    reddit: 'Fragmented Post Search',
    redditStatus: 'neutral',
    tiktok: 'Algorithmic Keyword Match',
    tiktokStatus: 'neutral',
  },
  {
    feature: 'Open Source & Privacy-First',
    snooflick: '100% Open Source (MIT)',
    snooflickStatus: 'positive',
    reddit: 'Proprietary & Tracked',
    redditStatus: 'negative',
    tiktok: 'Proprietary & Data Mining',
    tiktokStatus: 'negative',
  },
];
