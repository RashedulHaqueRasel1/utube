'use client';

import React, { useState } from 'react';
import { Play, Download, Menu, X } from 'lucide-react';
import { t, LanguageType } from '@/utils/translations';

interface NavbarProps {
  lang: LanguageType;
  setLang: (lang: LanguageType) => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentT = t[lang];

  return (
    <>
      <header className="navbar">
        <div className="container nav-container">
          <a href="#" className="logo-wrapper">
            <span className="logo-icon">
              <Play size={18} fill="#ffffff" color="transparent" />
            </span>
            <span>uTube<span style={{ color: 'var(--accent-red)' }}>Premium</span></span>
          </a>
          
          <nav className="nav-links">
            <a href="#features" className="nav-link">{currentT.navFeatures}</a>
            <a href="#install" className="nav-link">{currentT.navInstall}</a>
            <a href="#versions" className="nav-link">{currentT.navVersions}</a>
            <a href="#faq" className="nav-link">{currentT.navFaq}</a>
          </nav>
          
          <div className="nav-actions">
            {/* Language Switcher */}
            <div className="lang-switch">
              <button 
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
              >
                EN
              </button>
              <button 
                className={`lang-btn ${lang === 'bn' ? 'active' : ''}`}
                onClick={() => setLang('bn')}
              >
                বাংলা
              </button>
            </div>
            
            <a 
              href="#versions" 
              className="btn btn-secondary" 
              style={{ padding: '8px 16px', fontSize: '0.85rem', borderRadius: '8px' }}
            >
              <Download size={14} />
              <span className="nav-download-text" style={{ display: 'inline' }}>{currentT.navDownload}</span>
            </a>
            
            <button 
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#features" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>{currentT.navFeatures}</a>
          <a href="#install" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>{currentT.navInstall}</a>
          <a href="#versions" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>{currentT.navVersions}</a>
          <a href="#faq" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>{currentT.navFaq}</a>
        </div>
      )}
    </>
  );
}
