import React from 'react';
import { Play, SkipForward, SkipBack, Volume2, Zap } from 'lucide-react';

interface KeyboardHUDProps {
  onTrigger: (action: string) => void;
}

export const KeyboardHUD: React.FC<KeyboardHUDProps> = ({ onTrigger }) => {
  const hotkeys = [
    { key: 'Space', label: 'Play', action: 'togglePlay', icon: Play },
    { key: 'J', label: 'Next', action: 'nextClip', icon: SkipForward },
    { key: 'K', label: 'Prev', action: 'prevClip', icon: SkipBack },
    { key: 'M', label: 'Mute', action: 'toggleMute', icon: Volume2 },
    { key: 'Hold', label: '2.0X', action: 'speedHold', icon: Zap },
  ];

  return (
    <div className="inline-flex items-center gap-2 p-1.5 rounded-xl border border-zinc-800 bg-zinc-950">
      <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
        <span>Hotkeys</span>
      </div>

      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        {hotkeys.map((hk) => {
          const Icon = hk.icon;
          return (
            <button
              key={hk.key}
              onClick={() => onTrigger(hk.action)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded tactile-keycap text-zinc-300 hover:text-white transition-colors"
              title={`Press ${hk.key} for ${hk.label}`}
            >
              <kbd className="text-[11px] text-zinc-400 font-mono font-bold">
                {hk.key}
              </kbd>
              <span className="hidden md:inline text-[11px] text-zinc-400">
                {hk.label}
              </span>
              <Icon className="w-3 h-3 text-zinc-500 hidden sm:inline" />
            </button>
          );
        })}
      </div>
    </div>
  );
};
