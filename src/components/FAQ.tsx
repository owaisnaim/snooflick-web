import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS_LIST } from '../data/faqs';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS_LIST[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-glass-pill text-xs font-semibold text-amber-400 border border-amber-500/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-white/60">
            Everything you need to know about SnooFlick’s technology, privacy, sound engine, and installation.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS_LIST.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`apple-glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-white/25 bg-white/[0.04]' : 'border-white/10 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full apple-glass-pill flex items-center justify-center text-white/70 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 bg-white/20 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-white/70 leading-relaxed border-t border-white/5 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
