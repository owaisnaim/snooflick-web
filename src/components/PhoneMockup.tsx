import React, { useState, useEffect, useRef } from 'react';
import { 
  Heart, 
  MessageSquare, 
  Share2, 
  Volume2, 
  VolumeX, 
  Play, 
  Zap, 
  Flame, 
  X, 
  Sparkles,
  Sliders
} from 'lucide-react';

export const PhoneMockup: React.FC = () => {
  // State for interactive features
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [is2xSpeed, setIs2xSpeed] = useState(false);
  const [likeCount, setLikeCount] = useState(14280);
  const [isLiked, setIsLiked] = useState(false);
  const [showHeartBurst, setShowHeartBurst] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [progress, setProgress] = useState(38);
  const holdTimerRef = useRef<number | null>(null);

  // Simulated progress bar ticker
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + (is2xSpeed ? 2 : 0.8)));
    }, 150);
    return () => clearInterval(interval);
  }, [isPlaying, is2xSpeed]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2200);
  };

  // 2X Speed hold handlers
  const handleHoldStart = () => {
    holdTimerRef.current = window.setTimeout(() => {
      setIs2xSpeed(true);
      if (navigator.vibrate) navigator.vibrate(20);
    }, 180);
  };

  const handleHoldEnd = () => {
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;
    }
    if (is2xSpeed) {
      setIs2xSpeed(false);
    }
  };

  // Double tap to like
  const handleDoubleTap = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isLiked) {
      setIsLiked(true);
      setLikeCount((prev) => prev + 1);
    }
    setShowHeartBurst(true);
    setTimeout(() => setShowHeartBurst(false), 800);
    if (navigator.vibrate) navigator.vibrate(25);
  };

  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLiked) {
      setIsLiked(false);
      setLikeCount((prev) => prev - 1);
    } else {
      setIsLiked(true);
      setLikeCount((prev) => prev + 1);
      setShowHeartBurst(true);
      setTimeout(() => setShowHeartBurst(false), 800);
    }
  };

  const copyShareLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    showToast('Link copied to clipboard! 📋');
  };

  return (
    <div className="relative mx-auto flex items-center justify-center select-none">
      {/* Floating Holographic Highlight Badges (Desktop) */}
      <div className="hidden lg:block absolute -left-28 top-16 apple-glass-card p-3.5 rounded-2xl border border-white/15 animate-float shadow-xl z-20 max-w-[200px]">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-md">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Hold-to-2X Speed</div>
            <div className="text-[11px] text-white/60">Press & hold right screen</div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute -right-28 top-28 apple-glass-card p-3.5 rounded-2xl border border-white/15 animate-float [animation-delay:2s] shadow-xl z-20 max-w-[210px]">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-500 text-white shadow-md">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Fixed 3-Slot Pool</div>
            <div className="text-[11px] text-white/60">60 FPS • Zero Memory Leaks</div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute -left-32 bottom-28 apple-glass-card p-3.5 rounded-2xl border border-white/15 animate-float [animation-delay:3s] shadow-xl z-20 max-w-[220px]">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 text-white shadow-md">
            <Volume2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Synced RedGIFs Audio</div>
            <div className="text-[11px] text-white/60">Direct MP4 HD Audio Stream</div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute -right-32 bottom-16 apple-glass-card p-3.5 rounded-2xl border border-white/15 animate-float [animation-delay:4s] shadow-xl z-20 max-w-[200px]">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-purple-500 to-pink-500 text-white shadow-md">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Zero Login OAuth</div>
            <div className="text-[11px] text-white/60">No passwords or tracking</div>
          </div>
        </div>
      </div>

      {/* Titanium iPhone Frame */}
      <div className="relative w-[320px] sm:w-[350px] h-[670px] sm:h-[700px] rounded-[52px] bg-black p-3.5 phone-bezel z-10 overflow-hidden">
        {/* Dynamic Island / Camera Notch */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-40 flex items-center justify-between px-3 border border-white/10 shadow-lg">
          <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-white/20"></div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[9px] font-semibold text-white/70">60 FPS</span>
          </div>
        </div>

        {/* Screen Display Container */}
        <div 
          className="relative w-full h-full rounded-[42px] overflow-hidden bg-zinc-950 flex flex-col justify-between"
          onDoubleClick={handleDoubleTap}
        >
          {/* Simulated Vertical Video Dynamic Background */}
          <div 
            className="absolute inset-0 overflow-hidden bg-cover bg-center cursor-pointer transition-transform duration-300"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 40%, rgba(255, 69, 0, 0.4) 0%, rgba(20, 10, 30, 0.95) 75%), linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)`,
            }}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {/* Animated Background Graphic Elements */}
            <div className={`absolute inset-0 opacity-40 transition-all duration-300 ${is2xSpeed ? 'scale-110 blur-none' : 'scale-100'}`}>
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-tr from-[#FF4500]/30 to-[#FF1493]/20 blur-3xl animate-pulseGlow" />
              <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-[#00F2FE]/20 blur-2xl" />
            </div>

            {/* Hold for 2X Speed Active Interactive Zone (Right Half) */}
            <div
              className="absolute top-0 right-0 w-1/2 h-full z-20 cursor-pointer"
              onMouseDown={handleHoldStart}
              onMouseUp={handleHoldEnd}
              onMouseLeave={handleHoldEnd}
              onTouchStart={handleHoldStart}
              onTouchEnd={handleHoldEnd}
              title="Click and hold for 2.0X speed"
            />

            {/* Play/Pause Center Indicator */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-30 pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-2xl border border-white/25">
                  <Play className="w-8 h-8 fill-current translate-x-0.5" />
                </div>
              </div>
            )}

            {/* Double Tap Heart Burst Animation */}
            {showHeartBurst && (
              <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
                <div className="animate-heartBurst">
                  <Heart className="w-24 h-24 fill-[#FF3B5C] text-[#FF3B5C] drop-shadow-[0_0_25px_rgba(255,59,92,0.8)]" />
                </div>
              </div>
            )}
          </div>

          {/* Top Floating Glass Dock Inside Phone */}
          <div className="relative z-30 pt-10 px-4 pb-3 flex items-center justify-between apple-glass-dock bg-gradient-to-b from-black/80 via-black/40 to-transparent">
            <div className="flex items-center gap-2">
              <span className="font-black text-sm tracking-tight text-white">SnooFlick</span>
              <div className="flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white/10 text-white/90 border border-white/10">
                <Flame className="w-3 h-3 text-[#FF4500]" />
                <span>r/skateboarding</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button 
                onClick={(e) => { e.stopPropagation(); showToast('Quality: 💎 1080p HD (Forced)'); }}
                className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 border border-white/15"
              >
                💎 HD
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); showToast(isMuted ? 'Sound ON 🔊' : 'Muted 🔇'); }}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
              </button>
            </div>
          </div>

          {/* 2X Speed HUD Pill Overlay */}
          {is2xSpeed && (
            <div className="absolute top-20 left-1/2 -translate-x-1/2 z-40 apple-glass-card px-4 py-1.5 rounded-full border border-amber-500/40 bg-black/75 shadow-2xl flex items-center gap-2 animate-bounce">
              <Zap className="w-4 h-4 text-amber-400 fill-current" />
              <span className="text-xs font-black tracking-wider text-amber-300">2.0X SPEED</span>
              <div className="flex items-center gap-0.5">
                <span className="w-1 h-3 bg-amber-400 rounded-full animate-pulse"></span>
                <span className="w-1 h-4 bg-amber-400 rounded-full animate-pulse [animation-delay:0.1s]"></span>
                <span className="w-1 h-2 bg-amber-400 rounded-full animate-pulse [animation-delay:0.2s]"></span>
              </div>
            </div>
          )}

          {/* Interactive Right Floating Action Column */}
          <div className="absolute right-3 bottom-24 z-30 flex flex-col items-center gap-4">
            {/* Creator Profile Bubble */}
            <div className="relative group cursor-pointer" onClick={(e) => { e.stopPropagation(); showToast('Opening creator feed: @tony_slide'); }}>
              <div className="w-10 h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-[#FF4500] to-[#FF1493]">
                <div className="w-full h-full rounded-full bg-zinc-800 flex items-center justify-center font-bold text-xs text-white">
                  TS
                </div>
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FF4500] text-white flex items-center justify-center text-[10px] font-black shadow">
                +
              </div>
            </div>

            {/* Like Button */}
            <button 
              onClick={toggleLike}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full apple-glass-pill flex items-center justify-center group-hover:bg-white/20 transition-all">
                <Heart 
                  className={`w-5 h-5 transition-all ${
                    isLiked ? 'fill-[#FF3B5C] text-[#FF3B5C] scale-110' : 'text-white'
                  }`} 
                />
              </div>
              <span className="text-[11px] font-bold text-white/90 mt-1 shadow-sm">
                {(likeCount / 1000).toFixed(1)}k
              </span>
            </button>

            {/* Comments Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); setShowComments(!showComments); }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full apple-glass-pill flex items-center justify-center group-hover:bg-white/20 transition-all">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <span className="text-[11px] font-bold text-white/90 mt-1 shadow-sm">842</span>
            </button>

            {/* Share Button */}
            <button 
              onClick={copyShareLink}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full apple-glass-pill flex items-center justify-center group-hover:bg-white/20 transition-all">
                <Share2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-[11px] font-bold text-white/90 mt-1 shadow-sm">Share</span>
            </button>
          </div>

          {/* Bottom Video Metadata Info */}
          <div className="relative z-30 px-4 pb-5 pt-10 bg-gradient-to-t from-black via-black/70 to-transparent">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="font-extrabold text-xs text-white">@tony_slide</span>
              <span className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-[9px] text-white">✓</span>
              <span className="text-[10px] text-white/60">• 3h ago</span>
            </div>
            <p className="text-xs font-medium text-white/90 line-clamp-2 pr-12 leading-relaxed">
              Clean triple kickflip down 12 stairs at midnight 🔥 #skate #redditvideos
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-md border border-emerald-500/30">
                🔊 Synchronized Audio
              </span>
              <span className="text-[10px] font-semibold text-white/60">
                r/skateboarding
              </span>
            </div>
          </div>

          {/* Bottom Progress Scrubber */}
          <div className="relative z-40 w-full h-1 bg-white/20 overflow-hidden cursor-pointer group">
            <div 
              className="h-full bg-gradient-to-r from-[#FF4500] to-[#FF1493] transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Simulated Toast Notification */}
          {toastMessage && (
            <div className="absolute top-20 left-1/2 -translate-x-1/2 z-50 apple-glass-card px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-semibold text-white shadow-2xl animate-fade-in">
              {toastMessage}
            </div>
          )}

          {/* Simulated Instagram-Style Drag-to-Collapse Comments Drawer */}
          {showComments && (
            <div className="absolute inset-x-0 bottom-0 top-24 z-50 bg-zinc-900/95 backdrop-blur-2xl rounded-t-[32px] border-t border-white/15 p-4 flex flex-col justify-between shadow-2xl animate-slide-up">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="w-10 h-1 bg-white/30 rounded-full mx-auto -mt-1 cursor-grab" />
                  <button 
                    onClick={() => setShowComments(false)}
                    className="absolute right-4 top-3 text-white/60 hover:text-white p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-xs font-extrabold text-white mt-3 mb-3">842 Comments</div>
                
                {/* Simulated Comment Items */}
                <div className="space-y-3 pr-1 max-h-[360px] overflow-y-auto no-scrollbar text-xs">
                  <div className="flex gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                      KB
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-white/90">kickflip_king</span>
                        <span className="text-[10px] text-white/40">2h</span>
                      </div>
                      <p className="text-white/80 text-[11px] mt-0.5">That catch was unreal! Looked like skate 3 physics.</p>
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                      SD
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-white/90">snooflick_fan</span>
                        <span className="text-[10px] text-white/40">1h</span>
                      </div>
                      <p className="text-white/80 text-[11px] mt-0.5">Hold-to-2X lets me replay the slow-mo instantly haha 🔥</p>
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-orange-600 flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                      OX
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-white/90">ollie_master</span>
                        <span className="text-[10px] text-white/40">45m</span>
                      </div>
                      <p className="text-white/80 text-[11px] mt-0.5">Audio sync on this client is way better than the native app.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center gap-2">
                <input 
                  type="text" 
                  placeholder="Add a comment..." 
                  className="w-full bg-white/10 border border-white/15 rounded-full px-3 py-1.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#FF4500]"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
