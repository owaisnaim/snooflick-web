import React from 'react';
import { Play, SkipForward, SkipBack, Volume2, Zap } from 'lucide-react';

interface KeyboardHUDProps {
  onTrigger: (action: string) => void;
}

export const KeyboardHUD: React.FC<KeyboardHUDProps> = ({ onTrigger }) => {
  const hotkeys = [
    { key: 'Space', label: 'Play / Pause', action: 'togglePlay', icon: Play },
    { key: 'J', label: 'Next Video', action: 'nextClip', icon: SkipForward },
    { key: 'K', label: 'Prev Video', action: 'prevClip', icon: SkipBack },
    { key: 'M', label: 'Mute / Sound', action: 'toggleMute', icon: Volume2 },
    { key: 'Hold', label: '2.0X Speed', action: 'speedHold', icon: Zap },
  ];

  return (
    <div className="inline-flex items-center gap-2 p-2 rounded-2xl apple-glass-card border border-white/10 shadow-2xl backdrop-blur-2xl">
      <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 border-r border-white/10 text-[11px] font-bold text-white/50 uppercase tracking-wider">
        <span>Desktop Keys</span>
      </div>

      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        {hotkeys.map((hk) => {
          const Icon = hk.icon;
          return (
            <button
              key={hk.key}
              onClick={() => onTrigger(hk.action)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl tactile-keycap text-white hover:text-white transition-all group"
              title={`Press ${hk.key} to ${hk.label}`}
            >
              <kbd className="text-[11px] text-orange-400 group-hover:text-amber-300 font-mono">
                {hk.key}
              </kbd>
              <span className="hidden md:inline text-[11px] font-medium text-white/70">
                {hk.label}
              </span>
              <Icon className="w-3 h-3 text-white/40 group-hover:text-white/80 hidden sm:inline" />
            </button>
          );
        })}
      </div>
    </div>
  );
};
