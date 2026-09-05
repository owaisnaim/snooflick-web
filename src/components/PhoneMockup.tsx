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
  X
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
  const [isMuted, setIsMuted] = useState(true);
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

  useEffect(() => {
    setLikeCount(currentClip.likes);
    setIsLiked(false);
    setProgress(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [currentClipIndex]);

  useEffect(() => {
    if (!externalTrigger) return;
    const { action } = externalTrigger;
    if (action === 'togglePlay') togglePlay();
    else if (action === 'nextClip') nextClip();
    else if (action === 'prevClip') prevClip();
    else if (action === 'toggleMute') toggleMute();
    else if (action === 'speedHold') trigger2XSpeedBurst();
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
  };

  const prevClip = () => {
    setCurrentClipIndex((prev) => (prev - 1 + CLIPS.length) % CLIPS.length);
  };

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
    showToast('2.0X Speed');
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
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current || !videoRef.current.duration) return;
    const pct = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(pct);
  };

  return (
    <div className="relative mx-auto flex items-center justify-center select-none">
      
      {/* Minimalist Phone Chassis (No Glow Shadows) */}
      <div className="relative w-[310px] sm:w-[340px] h-[640px] sm:h-[670px] rounded-[48px] bg-black p-3 phone-bezel z-10 overflow-hidden">
        
        {/* Dynamic Island */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-40 flex items-center justify-between px-3 border border-zinc-800">
          <div className="w-2 h-2 rounded-full bg-zinc-900 border border-zinc-800"></div>
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-0.5 h-2.5">
              <span className={`w-0.5 bg-white rounded-full ${!isMuted && isPlaying ? 'eq-bar-1' : 'h-1'}`}></span>
              <span className={`w-0.5 bg-white rounded-full ${!isMuted && isPlaying ? 'eq-bar-2' : 'h-2'}`}></span>
              <span className={`w-0.5 bg-white rounded-full ${!isMuted && isPlaying ? 'eq-bar-3' : 'h-1'}`}></span>
            </div>
            <span className="text-[9px] font-mono text-zinc-400 ml-1">60FPS</span>
          </div>
        </div>

        {/* Screen Display Container */}
        <div 
          className="relative w-full h-full rounded-[38px] overflow-hidden bg-black flex flex-col justify-between"
          onDoubleClick={handleDoubleTap}
        >
          {/* Looping HTML5 Video Element */}
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

          {/* Touch/Click Hold Zone for 2X Speed */}
          <div
            className="absolute top-0 right-0 w-1/2 h-full z-20 cursor-pointer"
            onMouseDown={startHold2X}
            onMouseUp={stopHold2X}
            onMouseLeave={stopHold2X}
            onTouchStart={startHold2X}
            onTouchEnd={stopHold2X}
            title="Hold right half for 2.0X speed"
          />

          {/* Play/Pause Overlay Indicator */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-30 pointer-events-none">
              <div className="w-14 h-14 rounded-full bg-black/70 border border-zinc-700 flex items-center justify-center text-white">
                <Play className="w-6 h-6 fill-current translate-x-0.5" />
              </div>
            </div>
          )}

          {/* Double Tap Heart */}
          {showHeartBurst && (
            <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
              <div className="animate-heartBurst">
                <Heart className="w-20 h-20 fill-white text-white" />
              </div>
            </div>
          )}

          {/* Top Dock Inside Phone (Solid Black Flat Translucent) */}
          <div className="relative z-30 pt-8 px-4 pb-2.5 flex items-center justify-between bg-black/80 border-b border-zinc-900/60">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs tracking-tight text-white">SnooFlick</span>
              <div className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                <Flame className="w-2.5 h-2.5 text-[#FF4500]" />
                <span>{currentClip.subreddit}</span>
              </div>
            </div>
            
            <button 
              onClick={toggleMute}
              className="p-1 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
              title="Toggle Sound (M)"
            >
              {isMuted ? <VolumeX className="w-3 h-3 text-zinc-500" /> : <Volume2 className="w-3 h-3 text-white" />}
            </button>
          </div>

          {/* 2.0X Speed HUD Pill Overlay (Solid Minimal) */}
          {is2xSpeed && (
            <div className="absolute top-16 left-1/2 -translate-x-1/2 z-40 px-3 py-1 rounded-full border border-zinc-700 bg-black text-white flex items-center gap-1.5 shadow-xl">
              <Zap className="w-3.5 h-3.5 fill-current text-[#FF4500]" />
              <span className="text-[11px] font-mono font-bold tracking-wider">2.0X SPEED</span>
            </div>
          )}

          {/* Right Action Column */}
          <div className="absolute right-3 bottom-20 z-30 flex flex-col items-center gap-3">
            {/* Creator Profile */}
            <div className="w-8 h-8 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center font-bold text-[10px] text-white cursor-pointer" onClick={() => showToast(`Creator: ${currentClip.author}`)}>
              {currentClip.author.substring(1, 3).toUpperCase()}
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
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-black/70 border border-zinc-800 flex items-center justify-center hover:bg-black transition-colors">
                <Heart 
                  className={`w-3.5 h-3.5 ${
                    isLiked ? 'fill-white text-white' : 'text-zinc-400'
                  }`} 
                />
              </div>
              <span className="text-[9px] font-mono text-zinc-400 mt-0.5">
                {(likeCount / 1000).toFixed(1)}k
              </span>
            </button>

            {/* Comments Button */}
            <button 
              onClick={() => setShowComments(!showComments)}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-black/70 border border-zinc-800 flex items-center justify-center hover:bg-black transition-colors">
                <MessageSquare className="w-3.5 h-3.5 text-zinc-400" />
              </div>
              <span className="text-[9px] font-mono text-zinc-400 mt-0.5">
                {currentClip.comments}
              </span>
            </button>

            {/* Share Button */}
            <button 
              onClick={() => showToast('Link copied 📋')}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-black/70 border border-zinc-800 flex items-center justify-center hover:bg-black transition-colors">
                <Share2 className="w-3.5 h-3.5 text-zinc-400" />
              </div>
            </button>
          </div>

          {/* Bottom Video Metadata Info (Solid Flat Translucent Black) */}
          <div className="relative z-30 px-3.5 pb-4 pt-3 bg-black/85 border-t border-zinc-900/60">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="font-bold text-[11px] text-white">{currentClip.author}</span>
              <span className="text-[9px] text-zinc-500">• {currentClip.timeAgo}</span>
            </div>
            <p className="text-[11px] text-zinc-300 line-clamp-2 pr-10 leading-snug">
              {currentClip.title}
            </p>
            <div className="flex items-center gap-1.5 mt-1.5">
              <span className="text-[9px] font-mono font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded">
                DASH Audio
              </span>
              <span className="text-[9px] text-zinc-500 font-mono">
                {currentClip.subreddit}
              </span>
            </div>
          </div>

          {/* Bottom Progress Scrubber (Solid White) */}
          <div className="relative z-40 w-full h-0.5 bg-zinc-800 cursor-pointer">
            <div 
              className="h-full bg-white transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Toast */}
          {toastMessage && (
            <div className="absolute top-16 left-1/2 -translate-x-1/2 z-50 px-3 py-1 rounded-md border border-zinc-700 bg-zinc-900 text-xs font-medium text-white shadow-xl">
              {toastMessage}
            </div>
          )}

          {/* Comments Drawer */}
          {showComments && (
            <div className="absolute inset-x-0 bottom-0 top-20 z-50 bg-zinc-950 border-t border-zinc-800 p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                  <div className="text-xs font-bold text-white">{currentClip.comments} Comments</div>
                  <button 
                    onClick={() => setShowComments(false)}
                    className="text-zinc-400 hover:text-white p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="space-y-2.5 pt-3 text-xs">
                  <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800">
                    <div className="font-semibold text-zinc-300 text-[10px]">reddit_user_42</div>
                    <p className="text-zinc-400 text-[11px] mt-0.5">The audio sync on this is flawless.</p>
                  </div>
                  <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800">
                    <div className="font-semibold text-zinc-300 text-[10px]">skate_enthusiast</div>
                    <p className="text-zinc-400 text-[11px] mt-0.5">Hold for 2X speed is so useful for long clips.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-900">
                <input 
                  type="text" 
                  placeholder="Add a comment..." 
                  className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-1.5 text-xs text-white placeholder-zinc-600 focus:outline-none"
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
