'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { t, LanguageType } from '@/utils/translations';

interface FaqAccordionProps {
  lang: LanguageType;
}

export default function FaqAccordion({ lang }: FaqAccordionProps) {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const currentT = t[lang];

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 border-t border-border-custom relative">
      <div className="max-w-[1200px] w-full mx-auto px-6 relative z-[1]">
        <div className="text-center mb-12">
          <span className="text-accent-red text-[0.85rem] font-bold uppercase tracking-[0.1em] mb-2.5 block">{currentT.faqTag}</span>
          <h2 className="text-[1.8rem] sm:text-[2.2rem] lg:text-[2.5rem] font-bold mb-3.5 tracking-[-0.02em]">{currentT.faqTitle}</h2>
          <p className="max-w-[600px] mx-auto text-base text-text-secondary leading-relaxed">{currentT.faqDesc}</p>
        </div>
        
        <div className="max-w-[760px] mx-auto flex flex-col gap-3">
          {/* FAQ 1 */}
          <div className={`bg-bg-card backdrop-blur-[20px] border rounded-xl overflow-hidden transition-all duration-200 ${faqOpen === 0 ? 'border-accent-red/20' : 'border-border-custom hover:border-white/10'}`}>
            <button className="w-full bg-white/[0.01] px-6 py-5 border-none text-left text-[0.95rem] sm:text-[1.1rem] font-semibold text-text-primary cursor-pointer flex justify-between items-center gap-4 transition-colors duration-200 hover:bg-white/[0.02]" onClick={() => toggleFaq(0)}>
              <span>{currentT.faq1Q}</span>
              {faqOpen === 0 ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <div className={`bg-black/15 border-t border-border-custom overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${faqOpen === 0 ? 'max-h-[500px]' : 'max-h-0'}`}>
              <div className="px-6 py-5 text-[0.95rem]">
                <p>{currentT.faq1A}</p>
              </div>
            </div>
          </div>
          
          {/* FAQ 2 */}
          <div className={`bg-bg-card backdrop-blur-[20px] border rounded-xl overflow-hidden transition-all duration-200 ${faqOpen === 1 ? 'border-accent-red/20' : 'border-border-custom hover:border-white/10'}`}>
            <button className="w-full bg-white/[0.01] px-6 py-5 border-none text-left text-[0.95rem] sm:text-[1.1rem] font-semibold text-text-primary cursor-pointer flex justify-between items-center gap-4 transition-colors duration-200 hover:bg-white/[0.02]" onClick={() => toggleFaq(1)}>
              <span>{currentT.faq2Q}</span>
              {faqOpen === 1 ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <div className={`bg-black/15 border-t border-border-custom overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${faqOpen === 1 ? 'max-h-[500px]' : 'max-h-0'}`}>
              <div className="px-6 py-5 text-[0.95rem]">
                <p>{currentT.faq2A}</p>
              </div>
            </div>
          </div>
          
          {/* FAQ 3 */}
          <div className={`bg-bg-card backdrop-blur-[20px] border rounded-xl overflow-hidden transition-all duration-200 ${faqOpen === 2 ? 'border-accent-red/20' : 'border-border-custom hover:border-white/10'}`}>
            <button className="w-full bg-white/[0.01] px-6 py-5 border-none text-left text-[0.95rem] sm:text-[1.1rem] font-semibold text-text-primary cursor-pointer flex justify-between items-center gap-4 transition-colors duration-200 hover:bg-white/[0.02]" onClick={() => toggleFaq(2)}>
              <span>{currentT.faq3Q}</span>
              {faqOpen === 2 ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <div className={`bg-black/15 border-t border-border-custom overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${faqOpen === 2 ? 'max-h-[500px]' : 'max-h-0'}`}>
              <div className="px-6 py-5 text-[0.95rem]">
                <p>{currentT.faq3A}</p>
              </div>
            </div>
          </div>
          
          {/* FAQ 4 */}
          <div className={`bg-bg-card backdrop-blur-[20px] border rounded-xl overflow-hidden transition-all duration-200 ${faqOpen === 3 ? 'border-accent-red/20' : 'border-border-custom hover:border-white/10'}`}>
            <button className="w-full bg-white/[0.01] px-6 py-5 border-none text-left text-[0.95rem] sm:text-[1.1rem] font-semibold text-text-primary cursor-pointer flex justify-between items-center gap-4 transition-colors duration-200 hover:bg-white/[0.02]" onClick={() => toggleFaq(3)}>
              <span>{currentT.faq4Q}</span>
              {faqOpen === 3 ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <div className={`bg-black/15 border-t border-border-custom overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${faqOpen === 3 ? 'max-h-[500px]' : 'max-h-0'}`}>
              <div className="px-6 py-5 text-[0.95rem]">
                <p>{currentT.faq4A}</p>
              </div>
            </div>
          </div>
          
          {/* FAQ 5 */}
          <div className={`bg-bg-card backdrop-blur-[20px] border rounded-xl overflow-hidden transition-all duration-200 ${faqOpen === 4 ? 'border-accent-red/20' : 'border-border-custom hover:border-white/10'}`}>
            <button className="w-full bg-white/[0.01] px-6 py-5 border-none text-left text-[0.95rem] sm:text-[1.1rem] font-semibold text-text-primary cursor-pointer flex justify-between items-center gap-4 transition-colors duration-200 hover:bg-white/[0.02]" onClick={() => toggleFaq(4)}>
              <span>{currentT.faq5Q}</span>
              {faqOpen === 4 ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <div className={`bg-black/15 border-t border-border-custom overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${faqOpen === 4 ? 'max-h-[500px]' : 'max-h-0'}`}>
              <div className="px-6 py-5 text-[0.95rem]">
                <p>{currentT.faq5A}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
