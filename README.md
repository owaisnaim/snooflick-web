<div align="center">

# 🌐 SnooFlick Web — Official App Landing Page

**The modern, high-converting app landing website for [SnooFlick](https://github.com/owaisnaim/snooflick) — The TikTok-style client for live Reddit & RedGIFs videos.**

[![React](https://img.shields.io/badge/React-18.3-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[📱 **Main App Repository: owaisnaim/snooflick**](https://github.com/owaisnaim/snooflick) • [🚀 **Live Website: snooflick.com**](https://snooflick.com)

</div>

---

## ✨ Features of the Landing Page

- **🍎 Apple Optical Liquid Glass Design System**: AMOLED Deep Black (`#000000`), specular glass highlights, blurred translucent docks (`backdrop-filter: blur(28px) saturate(190%)`), and GPU-accelerated hardware layers.
- **📱 Interactive Phone Simulator**:
  - Live animated simulated Reddit video card.
  - Interactive **Hold-for-2X Speed** gesture: Click and hold on the right side of the screen to fast-forward at 2.0X with HUD pill feedback.
  - Interactive **Sound Toggle**: Instant unmuting feedback.
  - Interactive **Double-Tap Upvote**: Animated neon heart burst.
  - Interactive **Comments Drawer**: Simulated Instagram-style slide-over comments sheet.
- **⚡ Interactive Bento Feature Grid**: Deep-dive cards explaining the Fixed 3-Slot Virtual DOM, Hold-to-2X Speed Engine, RedGIFs Synced Audio, Smart Quality Selector (Auto/HD/SD), Global Video Search, and Discreet Mode.
- **🖐️ Ergonomic Thumb Gesture Showcase**: Visual matrix illustrating vertical flick snap, hold to accelerate, double tap to like, left-edge swipe back, and progress scrubber seeking.
- **📊 Detailed Comparison Matrix**: Transparent side-by-side comparison between SnooFlick, the official Reddit mobile app, and TikTok/Reels.
- **📲 Multi-Platform Installation Hub**:
  - Web App (PWA) direct access on `snooflick.com`
  - iOS Safari "Add to Home Screen" 3-step visual guide
  - Android native APK download button
  - Desktop-to-mobile **Scan QR Code** generator (encodes `https://snooflick.com`)
- **🏗️ Architecture Whitepapers & Developer Specs**: Highlighting Vite vendor chunking (109 kB core bundle, -87% size reduction), range pre-buffering (512 KB chunks), and zero-login OAuth.
- **💬 Interactive FAQ Accordion**: Addresses common questions regarding Reddit guest OAuth tokens, audio synchronization, privacy, and data usage.

---

## 🛠️ Tech Stack

- **Framework**: React 18, TypeScript
- **Bundler**: Vite 5
- **Styling**: Tailwind CSS v3, Custom Apple Optical Liquid Glass tokens
- **Icons**: Lucide React
- **Deployment**: Vercel (`vercel.json`) on custom domain **`snooflick.com`**

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:5173/`.

### 3. Build for Production
```bash
npm run build
```

The static output is generated in the `dist/` directory, ready to be deployed to Vercel.

---

## ☁️ Deployment on Vercel

Deploy with 1-click on Vercel:
```bash
npx vercel
```
Or import the repository on the [Vercel Dashboard](https://vercel.com) and assign the domain **`snooflick.com`**. The included `vercel.json` ensures all routes, asset caching headers, and SPA pushState rewrites work automatically.

---

## 📄 License

MIT © [Owais Naim](https://github.com/owaisnaim).

*Disclaimer: SnooFlick is an independent open-source project and is not affiliated with, endorsed by, or sponsored by Reddit Inc. or RedGIFs.*
