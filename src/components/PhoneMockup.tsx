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
  ChevronUp,
  ChevronDown
} from 'lucide-react';

interface PhoneMockupProps {
  externalTrigger?: { action: string; timestamp: number } | null;
}

interface VideoClip {
  id: number;
  url: string;
  subreddit: string;
  author: string;
  title: string;
  timeAgo: string;
  likes: number;
  comments: number;
}

const CLIPS: VideoClip[] = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/demo/video/upload/skate.mp4',
    subreddit: 'r/skateboarding',
    author: '@tony_slide',
    title: 'Triple kickflip down 12 stairs at midnight 🔥 #skate',
    timeAgo: '2h ago',
    likes: 18420,
    comments: 642,
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/demo/video/upload/dog.mp4',
    subreddit: 'r/funnyvideos',
    author: '@doggo_daily',
    title: 'Wait for his reaction at the very end 😭💀',
    timeAgo: '4h ago',
    likes: 34100,
    comments: 1205,
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/demo/video/upload/rafting.mp4',
    subreddit: 'r/Unexpected',
    author: '@river_rush',
    title: 'I expected anything except that ending 🌊🤣',
    timeAgo: '6h ago',
    likes: 29500,
    comments: 890,
  },
];

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ externalTrigger }) => {
  const [currentClipIndex, setCurrentClipIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true); // Default muted for browser autoplay compliance
  const [is2xSpeed, setIs2xSpeed] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(CLIPS[0].likes);
  const [showHeartBurst, setShowHeartBurst] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const holdTimerRef = useRef<number | null>(null);

  const currentClip = CLIPS[currentClipIndex];

  // Sync like count when clip changes
  useEffect(() => {
    setLikeCount(currentClip.likes);
    setIsLiked(false);
    setProgress(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [currentClipIndex]);

  // Handle external keyboard triggers (from desktop keyboard HUD)
  useEffect(() => {
    if (!externalTrigger) return;
    const { action } = externalTrigger;
    if (action === 'togglePlay') {
      togglePlay();
    } else if (action === 'nextClip') {
      nextClip();
    } else if (action === 'prevClip') {
      prevClip();
    } else if (action === 'toggleMute') {
      toggleMute();
    } else if (action === 'speedHold') {
      trigger2XSpeedBurst();
    }
  }, [externalTrigger]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2000);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      showToast('Paused');
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
      showToast('Playing');
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
    showToast(nextMuted ? 'Muted 🔇' : 'Sound ON 🔊');
  };

  const nextClip = () => {
    setCurrentClipIndex((prev) => (prev + 1) % CLIPS.length);
    showToast(`Next: ${CLIPS[(currentClipIndex + 1) % CLIPS.length].subreddit}`);
  };

  const prevClip = () => {
    setCurrentClipIndex((prev) => (prev - 1 + CLIPS.length) % CLIPS.length);
    showToast(`Prev: ${CLIPS[(currentClipIndex - 1 + CLIPS.length) % CLIPS.length].subreddit}`);
  };

  // Hold-to-2X Speed Logic
  const startHold2X = () => {
    holdTimerRef.current = window.setTimeout(() => {
      setIs2xSpeed(true);
      if (videoRef.current) videoRef.current.playbackRate = 2.0;
      if (navigator.vibrate) navigator.vibrate(20);
    }, 150);
  };

  const stopHold2X = () => {
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;
    }
    if (is2xSpeed) {
      setIs2xSpeed(false);
      if (videoRef.current) videoRef.current.playbackRate = 1.0;
    }
  };

  const trigger2XSpeedBurst = () => {
    setIs2xSpeed(true);
    if (videoRef.current) videoRef.current.playbackRate = 2.0;
    showToast('2.0X Fast Forward');
    setTimeout(() => {
      setIs2xSpeed(false);
      if (videoRef.current) videoRef.current.playbackRate = 1.0;
    }, 1500);
  };

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

  const handleTimeUpdate = () => {
    if (!videoRef.current || !videoRef.current.duration) return;
    const pct = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(pct);
  };

  return (
    <div className="relative mx-auto flex items-center justify-center select-none">
      
      {/* Titanium iPhone 16 Chassis */}
      <div className="relative w-[320px] sm:w-[350px] h-[670px] sm:h-[700px] rounded-[52px] bg-black p-3.5 phone-bezel z-10 overflow-hidden">
        
        {/* Dynamic Island with Sound Waveform & 60 FPS Badge */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-full z-40 flex items-center justify-between px-3 border border-white/10 shadow-lg">
          <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-white/20"></div>
          
          {/* Audio Visualizer Equalizer in Dynamic Island */}
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-0.5 h-3">
              <span className={`w-0.5 bg-emerald-400 rounded-full ${!isMuted && isPlaying ? 'eq-bar-1' : 'h-1'}`}></span>
              <span className={`w-0.5 bg-emerald-400 rounded-full ${!isMuted && isPlaying ? 'eq-bar-2' : 'h-2'}`}></span>
              <span className={`w-0.5 bg-emerald-400 rounded-full ${!isMuted && isPlaying ? 'eq-bar-3' : 'h-1'}`}></span>
              <span className={`w-0.5 bg-emerald-400 rounded-full ${!isMuted && isPlaying ? 'eq-bar-4' : 'h-1.5'}`}></span>
            </div>
            <span className="text-[9px] font-mono font-bold text-white/70 ml-1">60FPS</span>
          </div>
        </div>

        {/* Screen Display Container */}
        <div 
          className="relative w-full h-full rounded-[42px] overflow-hidden bg-black flex flex-col justify-between"
          onDoubleClick={handleDoubleTap}
        >
          {/* Real Looping HTML5 Video Element */}
          <video
            ref={videoRef}
            src={currentClip.url}
            className="absolute inset-0 w-full h-full object-cover cursor-pointer"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onClick={togglePlay}
          />

          {/* Real Touch/Click Hold Zone for 2X Speed (Right Half of Screen) */}
          <div
            className="absolute top-0 right-0 w-1/2 h-full z-20 cursor-pointer"
            onMouseDown={startHold2X}
            onMouseUp={stopHold2X}
            onMouseLeave={stopHold2X}
            onTouchStart={startHold2X}
            onTouchEnd={stopHold2X}
            title="Press and hold right half for 2.0X speed"
          />

          {/* Subreddit Clip Quick Nav Chevrons (Top Right Inside Screen) */}
          <div className="absolute right-3 top-20 z-30 flex flex-col gap-1.5">
            <button
              onClick={prevClip}
              className="p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white/70 hover:text-white border border-white/10 backdrop-blur-md transition-all"
              title="Previous Clip (K)"
            >
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={nextClip}
              className="p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white/70 hover:text-white border border-white/10 backdrop-blur-md transition-all"
              title="Next Clip (J)"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Play/Pause Overlay Indicator */}
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

          {/* Top Floating Glass Dock Inside Phone */}
          <div className="relative z-30 pt-10 px-4 pb-3 flex items-center justify-between bg-gradient-to-b from-black/85 via-black/40 to-transparent">
            <div className="flex items-center gap-2">
              <span className="font-black text-sm tracking-tight text-white">SnooFlick</span>
              <div className="flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white/15 text-white border border-white/15 backdrop-blur-md">
                <Flame className="w-3 h-3 text-[#FF4500]" />
                <span>{currentClip.subreddit}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5">
              <button 
                onClick={toggleMute}
                className="p-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/15 backdrop-blur-md transition-colors"
                title="Toggle Sound (M)"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5 text-white/70" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
              </button>
            </div>
          </div>

          {/* 2.0X Speed HUD Pill Overlay */}
          {is2xSpeed && (
            <div className="absolute top-20 left-1/2 -translate-x-1/2 z-40 px-4 py-1.5 rounded-full border border-amber-500/50 bg-black/80 backdrop-blur-xl shadow-2xl flex items-center gap-2 animate-bounce">
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
          <div className="absolute right-3 bottom-24 z-30 flex flex-col items-center gap-3.5">
            {/* Creator Profile */}
            <div className="relative group cursor-pointer" onClick={() => showToast(`Creator: ${currentClip.author}`)}>
              <div className="w-9 h-9 rounded-full p-[1.5px] bg-gradient-to-tr from-[#FF4500] to-[#FF1493]">
                <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center font-bold text-xs text-white">
                  {currentClip.author.substring(1, 3).toUpperCase()}
                </div>
              </div>
            </div>

            {/* Like Button */}
            <button 
              onClick={() => {
                if (isLiked) {
                  setIsLiked(false);
                  setLikeCount((prev) => prev - 1);
                } else {
                  setIsLiked(true);
                  setLikeCount((prev) => prev + 1);
                  setShowHeartBurst(true);
                  setTimeout(() => setShowHeartBurst(false), 800);
                }
              }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full apple-glass-pill flex items-center justify-center group-hover:bg-white/20 transition-all">
                <Heart 
                  className={`w-4 h-4 transition-all ${
                    isLiked ? 'fill-[#FF3B5C] text-[#FF3B5C] scale-110' : 'text-white'
                  }`} 
                />
              </div>
              <span className="text-[10px] font-bold text-white mt-1 shadow-sm">
                {(likeCount / 1000).toFixed(1)}k
              </span>
            </button>

            {/* Comments Button */}
            <button 
              onClick={() => setShowComments(!showComments)}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full apple-glass-pill flex items-center justify-center group-hover:bg-white/20 transition-all">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              <span className="text-[10px] font-bold text-white mt-1 shadow-sm">
                {currentClip.comments}
              </span>
            </button>

            {/* Share Button */}
            <button 
              onClick={() => showToast('Post link copied! 📋')}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full apple-glass-pill flex items-center justify-center group-hover:bg-white/20 transition-all">
                <Share2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-[10px] font-bold text-white mt-1 shadow-sm">Share</span>
            </button>
          </div>

          {/* Bottom Video Metadata Info */}
          <div className="relative z-30 px-4 pb-5 pt-10 bg-gradient-to-t from-black via-black/75 to-transparent">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="font-extrabold text-xs text-white">{currentClip.author}</span>
              <span className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center text-[8px] text-white">✓</span>
              <span className="text-[10px] text-white/60">• {currentClip.timeAgo}</span>
            </div>
            <p className="text-xs font-medium text-white/90 line-clamp-2 pr-12 leading-relaxed">
              {currentClip.title}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-md border border-emerald-500/30">
                🔊 DASH Audio Sync
              </span>
              <span className="text-[10px] font-semibold text-white/60">
                {currentClip.subreddit}
              </span>
            </div>
          </div>

          {/* Bottom Progress Scrubber */}
          <div className="relative z-40 w-full h-1 bg-white/20 overflow-hidden cursor-pointer group">
            <div 
              className="h-full bg-gradient-to-r from-[#FF4500] to-[#FF1493] transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* In-App Toast Notification */}
          {toastMessage && (
            <div className="absolute top-20 left-1/2 -translate-x-1/2 z-50 px-3.5 py-1.5 rounded-full border border-white/20 bg-black/85 backdrop-blur-xl text-xs font-semibold text-white shadow-2xl animate-fade-in">
              {toastMessage}
            </div>
          )}

          {/* Instagram-Style Comments Drawer */}
          {showComments && (
            <div className="absolute inset-x-0 bottom-0 top-24 z-50 bg-zinc-950/95 backdrop-blur-2xl rounded-t-[32px] border-t border-white/15 p-4 flex flex-col justify-between shadow-2xl animate-slide-up">
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
                <div className="text-xs font-extrabold text-white mt-3 mb-3">{currentClip.comments} Comments</div>
                
                <div className="space-y-3 pr-1 max-h-[360px] overflow-y-auto no-scrollbar text-xs">
                  <div className="flex gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                      RD
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-white/90">reddit_scroller</span>
                        <span className="text-[10px] text-white/40">1h</span>
                      </div>
                      <p className="text-white/80 text-[11px] mt-0.5">The synchronized audio on this is so crisp 🔥</p>
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                      FS
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-white/90">fast_streamer</span>
                        <span className="text-[10px] text-white/40">35m</span>
                      </div>
                      <p className="text-white/80 text-[11px] mt-0.5">Hold-to-2X is game changing for long clips!</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10">
                <input 
                  type="text" 
                  placeholder="Add a comment..." 
                  className="w-full bg-white/10 border border-white/15 rounded-full px-3 py-1.5 text-xs text-white placeholder-white/40 focus:outline-none"
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
