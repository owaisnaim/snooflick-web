import React from 'react';
import { Flame } from 'lucide-react';

export const CommunityMarquee: React.FC = () => {
  const communities = [
    { name: 'r/Unexpected', members: '4.2M', tag: 'Twists' },
    { name: 'r/funnyvideos', members: '1.8M', tag: 'Comedy' },
    { name: 'r/nextfuckinglevel', members: '5.1M', tag: 'Talent' },
    { name: 'r/skateboarding', members: '850K', tag: 'Action' },
    { name: 'r/Damnthatsinteresting', members: '6.3M', tag: 'Curiosity' },
    { name: 'r/AnimalsBeingDerps', members: '2.9M', tag: 'Pets' },
    { name: 'r/oddlysatisfying', members: '4.5M', tag: 'Relax' },
    { name: 'r/holdmybeer', members: '1.6M', tag: 'Stunts' },
  ];

  // Duplicate for seamless infinite loop
  const displayList = [...communities, ...communities];

  return (
    <div className="w-full py-6 border-y border-white/5 bg-black/40 overflow-hidden relative select-none">
      {/* Edge gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee items-center gap-4">
        {displayList.map((comm, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-4 py-2 rounded-2xl apple-glass-pill border border-white/10 hover:border-white/20 transition-colors flex-shrink-0"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#FF4500] to-[#FF1493] flex items-center justify-center text-white flex-shrink-0">
              <Flame className="w-3.5 h-3.5 fill-current" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white tracking-tight">{comm.name}</span>
              <span className="text-[10px] font-semibold text-white/50">{comm.members}</span>
              <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded-full bg-white/10 text-orange-400 border border-white/10">
                {comm.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
