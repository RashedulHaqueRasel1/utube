'use client';

import React from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { t, LanguageType } from '@/utils/translations';

interface FooterProps {
  lang: LanguageType;
}

export default function Footer({ lang }: FooterProps) {
  const currentT = t[lang];

  return (
    <footer className="py-[50px] bg-bg-secondary border-t border-border-custom text-center">
      <div className="max-w-[1200px] w-full mx-auto px-6 relative z-[1]">
        <div className="mb-5 inline-flex items-center gap-2.5 text-xl font-extrabold text-text-primary select-none">
          <span className="bg-gradient-to-br from-accent-red to-[#ff4b2b] w-[34px] h-[34px] rounded-[10px] flex items-center justify-center shadow-[0_0_12px_rgba(255,31,67,0.3)]">
            <Play size={18} fill="#ffffff" color="transparent" />
          </span>
          <span>uTube<span className="text-accent-red">Premium</span></span>
        </div>
        <p className="max-w-[460px] mx-auto mb-7 text-[0.9rem] text-text-secondary leading-relaxed">
          {currentT.footerDesc}
        </p>
        
        <div className="mb-6">
          <h4 className="mb-4 text-[0.85rem] tracking-wider text-text-secondary opacity-60 uppercase">
            {currentT.communityTitle}
          </h4>
          <div className="flex justify-center gap-6 mb-7 flex-wrap">
            <a href="#" className="text-text-secondary text-[0.95rem] font-medium transition-colors duration-200 hover:text-text-primary inline-flex items-center gap-1">
              {currentT.joinTelegram} <ExternalLink size={12} />
            </a>
            <a href="#" className="text-text-secondary text-[0.95rem] font-medium transition-colors duration-200 hover:text-text-primary inline-flex items-center gap-1">
              {currentT.joinDiscord} <ExternalLink size={12} />
            </a>
            <a href="#" className="text-text-secondary text-[0.95rem] font-medium transition-colors duration-200 hover:text-text-primary inline-flex items-center gap-1">
              {currentT.githubRepo} <ExternalLink size={12} />
            </a>
          </div>
        </div>
        
        <p className="max-w-[720px] mx-auto text-[0.72rem] text-text-secondary opacity-75 leading-[1.5]">
          {currentT.footerDisclaimer}
        </p>
      </div>
    </footer>
  );
}
