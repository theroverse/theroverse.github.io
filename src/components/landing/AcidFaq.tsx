import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { AcidFaqItem } from '../../types';
import { soundFx } from '../../utils/audio';

interface AcidFaqProps {
  items: AcidFaqItem[];
  accentColor: string;
}

export const AcidFaq: React.FC<AcidFaqProps> = ({ items, accentColor }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    soundFx.playClick();
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-xl border border-white/10 bg-slate-900/50 backdrop-blur-md overflow-hidden transition-all hover:border-white/20"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 transition-colors"
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="w-4 h-4 shrink-0 text-slate-400" style={{ color: isOpen ? accentColor : undefined }} />
                <span className="text-sm md:text-base font-semibold text-slate-200">
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                style={{ color: isOpen ? accentColor : undefined }}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 border-t border-white/5 space-y-3">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.answer}
                </p>
                {item.nerdFootnote && (
                  <div className="text-xs font-mono text-slate-400 bg-black/30 p-2.5 rounded-lg border border-white/5 flex items-start gap-2">
                    <span className="text-[10px] uppercase font-bold text-slate-400 shrink-0">Nota:</span>
                    <span className="italic">{item.nerdFootnote}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
