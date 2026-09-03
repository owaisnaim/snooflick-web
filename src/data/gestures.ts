export interface GestureItem {
  id: string;
  icon: string;
  title: string;
  action: string;
  description: string;
  tag: string;
}

export const GESTURES_LIST: GestureItem[] = [
  {
    id: 'snap-scroll',
    icon: 'ArrowDownUp',
    title: 'Vertical Swipe Snap',
    action: 'Flick Up / Down',
    description: 'Hardware-accelerated scroll snapping with instant stream pre-buffering. Next videos pre-warm manifest headers 500ms before you even finish scrolling.',
    tag: 'Butter Smooth'
  },
  {
    id: 'hold-2x',
    icon: 'Zap',
    title: 'Hold for 2X Speed',
    action: 'Long-press Right Screen',
    description: 'Fast-forwards long clips at 2.0x playback rate with a lightweight HUD pill indicator. Releasing smoothly resumes normal speed without stopping audio.',
    tag: 'Hold to Accelerate'
  },
  {
    id: 'double-tap',
    icon: 'Heart',
    title: 'Double-Tap Like',
    action: 'Double-Tap Anywhere',
    description: 'Instantly upvote and trigger a buoyant neon heart burst animation with subtle tactile haptic vibration.',
    tag: 'Instant Upvote'
  },
  {
    id: 'edge-back',
    icon: 'CornerDownLeft',
    title: 'Swipe Right from Edge',
    action: 'Drag from Left Margin',
    description: 'Swipe from the left 35px margin to smoothly navigate back through your subreddit and search history with an interactive frosted glass badge.',
    tag: 'Subreddit History'
  },
  {
    id: 'comments-collapse',
    icon: 'MessageSquare',
    title: 'Drag to Dismiss Comments',
    action: 'Pull Down when at Top',
    description: 'Instagram-inspired slide-over comments sheet. Drag downward past 100px to dismiss smoothly with native spring physics.',
    tag: 'Spring Physics'
  },
  {
    id: 'instant-scrub',
    icon: 'SlidersHorizontal',
    title: 'Instant-Collapse Scrubber',
    action: 'Drag Bottom Progress Line',
    description: 'Expand the razor-thin progress bar into a touch-target bead while dragging, with instant collapse on finger release.',
    tag: 'Precise Seeking'
  },
];
