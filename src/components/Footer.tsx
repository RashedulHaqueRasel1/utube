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
    <footer className="footer">
      <div className="container">
        <div className="footer-logo logo-wrapper">
          <span className="logo-icon">
            <Play size={18} fill="#ffffff" color="transparent" />
          </span>
          <span>uTube<span style={{ color: 'var(--accent-red)' }}>Premium</span></span>
        </div>
        <p className="footer-desc">
          {currentT.footerDesc}
        </p>
        
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ marginBottom: '16px', fontSize: '0.85rem', letterSpacing: '0.05em', color: 'var(--text-secondary)', opacity: 0.6, textTransform: 'uppercase' }}>
            {currentT.communityTitle}
          </h4>
          <div className="footer-links">
            <a href="#" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              {currentT.joinTelegram} <ExternalLink size={12} />
            </a>
            <a href="#" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              {currentT.joinDiscord} <ExternalLink size={12} />
            </a>
            <a href="#" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              {currentT.githubRepo} <ExternalLink size={12} />
            </a>
          </div>
        </div>
        
        <p className="footer-disclaimer">
          {currentT.footerDisclaimer}
        </p>
      </div>
    </footer>
  );
}
