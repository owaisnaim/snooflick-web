import React from 'react';

export const CommunityMarquee: React.FC = () => {
  const communities = [
    { name: 'r/Unexpected', members: '4.2M' },
    { name: 'r/funnyvideos', members: '1.8M' },
    { name: 'r/nextfuckinglevel', members: '5.1M' },
    { name: 'r/skateboarding', members: '850K' },
    { name: 'r/Damnthatsinteresting', members: '6.3M' },
    { name: 'r/AnimalsBeingDerps', members: '2.9M' },
    { name: 'r/oddlysatisfying', members: '4.5M' },
    { name: 'r/holdmybeer', members: '1.6M' },
  ];

  const displayList = [...communities, ...communities];

  return (
    <div className="w-full py-4 border-y border-zinc-900 bg-black overflow-hidden select-none">
      <div className="animate-marquee items-center gap-3">
        {displayList.map((comm, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-3 py-1.5 rounded border border-zinc-800 bg-zinc-950 text-xs text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors flex-shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
            <span className="font-semibold text-zinc-200">{comm.name}</span>
            <span className="font-mono text-[11px] text-zinc-500">{comm.members}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
