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
    <section id="faq" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">{currentT.faqTag}</span>
          <h2 className="section-title">{currentT.faqTitle}</h2>
          <p className="section-desc">{currentT.faqDesc}</p>
        </div>
        
        <div className="faq-list">
          {/* FAQ 1 */}
          <div className={`faq-item glass-panel ${faqOpen === 0 ? 'open' : ''}`}>
            <button className="faq-question" onClick={() => toggleFaq(0)}>
              <span>{currentT.faq1Q}</span>
              {faqOpen === 0 ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
                <p>{currentT.faq1A}</p>
              </div>
            </div>
          </div>
          
          {/* FAQ 2 */}
          <div className={`faq-item glass-panel ${faqOpen === 1 ? 'open' : ''}`}>
            <button className="faq-question" onClick={() => toggleFaq(1)}>
              <span>{currentT.faq2Q}</span>
              {faqOpen === 1 ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
                <p>{currentT.faq2A}</p>
              </div>
            </div>
          </div>
          
          {/* FAQ 3 */}
          <div className={`faq-item glass-panel ${faqOpen === 2 ? 'open' : ''}`}>
            <button className="faq-question" onClick={() => toggleFaq(2)}>
              <span>{currentT.faq3Q}</span>
              {faqOpen === 2 ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
                <p>{currentT.faq3A}</p>
              </div>
            </div>
          </div>
          
          {/* FAQ 4 */}
          <div className={`faq-item glass-panel ${faqOpen === 3 ? 'open' : ''}`}>
            <button className="faq-question" onClick={() => toggleFaq(3)}>
              <span>{currentT.faq4Q}</span>
              {faqOpen === 3 ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
                <p>{currentT.faq4A}</p>
              </div>
            </div>
          </div>
          
          {/* FAQ 5 */}
          <div className={`faq-item glass-panel ${faqOpen === 4 ? 'open' : ''}`}>
            <button className="faq-question" onClick={() => toggleFaq(4)}>
              <span>{currentT.faq5Q}</span>
              {faqOpen === 4 ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
                <p>{currentT.faq5A}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
