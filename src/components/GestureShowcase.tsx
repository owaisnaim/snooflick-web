import React from 'react';
import { 
  ArrowDownUp, 
  Zap, 
  Heart, 
  CornerDownLeft, 
  MessageSquare, 
  SlidersHorizontal,
  HandMetal,
  Smartphone
} from 'lucide-react';
import { GESTURES_LIST } from '../data/gestures';

export const GestureShowcase: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ArrowDownUp':
        return <ArrowDownUp className="w-6 h-6 text-blue-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400 fill-current" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-rose-500 fill-current" />;
      case 'CornerDownLeft':
        return <CornerDownLeft className="w-6 h-6 text-emerald-400" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-purple-400" />;
      case 'SlidersHorizontal':
        return <SlidersHorizontal className="w-6 h-6 text-cyan-400" />;
      default:
        return <Smartphone className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="gestures" className="py-24 relative border-t border-white/10 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-glass-pill text-xs font-semibold text-emerald-400 border border-emerald-500/20">
            <HandMetal className="w-3.5 h-3.5" />
            <span>Ergonomic Fluidity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Designed for Your Thumbs. <br />
            <span className="text-gradient-fiery">Zero Complex Menus.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60">
            Every interaction in SnooFlick feels like a second nature extension of your hand. No hunting through nested settings or tiny button targets.
          </p>
        </div>

        {/* Gestures 6-Card Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GESTURES_LIST.map((gesture) => (
            <div
              key={gesture.id}
              className="p-6 rounded-3xl apple-glass-card border border-white/10 hover:border-white/20 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    {getIcon(gesture.icon)}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/5 text-white/70 border border-white/10">
                    {gesture.tag}
                  </span>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-1">
                  {gesture.action}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {gesture.title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed">
                  {gesture.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-white/40 group-hover:text-white/80 transition-colors">
                <span>Natural Haptic Feedback</span>
                <span>•</span>
                <span>60 FPS Snapping</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
