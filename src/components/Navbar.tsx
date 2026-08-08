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
      <header className="fixed top-0 left-0 w-full h-[72px] bg-bg-primary/75 backdrop-blur-2xl border-b border-border-custom z-[1000] flex items-center">
        <div className="max-w-[1200px] w-full mx-auto px-6 relative z-[1] flex justify-between items-center">
          <a href="#" className="flex items-center gap-2.5 text-xl font-extrabold text-text-primary select-none">
            <span className="bg-gradient-to-br from-accent-red to-[#ff4b2b] w-[34px] h-[34px] rounded-n-[10px] flex items-center justify-center shadow-[0_0_12px_rgba(255,31,67,0.3)] rounded-[10px]">
              <Play size={18} fill="#ffffff" color="transparent" />
            </span>
            <span>UTube</span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            <a href="#features" className="text-text-secondary text-[0.95rem] font-medium transition-colors duration-200 hover:text-text-primary">{currentT.navFeatures}</a>
            <a href="#install" className="text-text-secondary text-[0.95rem] font-medium transition-colors duration-200 hover:text-text-primary">{currentT.navInstall}</a>
            <a href="#versions" className="text-text-secondary text-[0.95rem] font-medium transition-colors duration-200 hover:text-text-primary">{currentT.navVersions}</a>
            <a href="#faq" className="text-text-secondary text-[0.95rem] font-medium transition-colors duration-200 hover:text-text-primary">{currentT.navFaq}</a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex bg-white/[0.03] border border-border-custom p-[3px] rounded-lg">
              <button
                className={`bg-transparent border-none text-text-secondary px-2.5 py-1 text-xs font-semibold rounded-md cursor-pointer transition-all duration-200 ${lang === 'en' ? 'bg-white/[0.08] text-text-primary' : 'hover:text-text-primary'}`}
                onClick={() => setLang('en')}
              >
                EN
              </button>
              <button
                className={`bg-transparent border-none text-text-secondary px-2.5 py-1 text-xs font-semibold rounded-md cursor-pointer transition-all duration-200 ${lang === 'bn' ? 'bg-white/[0.08] text-text-primary' : 'hover:text-text-primary'}`}
                onClick={() => setLang('bn')}
              >
                বাংলা
              </button>
            </div>

            <a
              href="#versions"
              className="inline-flex items-center justify-center gap-2 bg-white/[0.03] text-text-primary border border-border-custom backdrop-blur-md cursor-pointer transition-all duration-200 hover:bg-white/[0.07] hover:border-white/15 hover:-translate-y-0.5 active:translate-y-0 px-4 py-2 text-[0.85rem] rounded-lg"
            >
              <Download size={14} />
              <span className="hidden sm:inline">{currentT.navDownload}</span>
            </a>

            <button
              className="md:hidden bg-transparent border-none text-text-primary cursor-pointer"
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
        <div className="fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-bg-primary/96 backdrop-blur-2xl z-[999] px-6 py-8 flex flex-col gap-5 border-t border-border-custom animate-slide-down">
          <a href="#features" className="text-xl font-semibold text-text-primary border-b border-border-custom pb-3" onClick={() => setMobileMenuOpen(false)}>{currentT.navFeatures}</a>
          <a href="#install" className="text-xl font-semibold text-text-primary border-b border-border-custom pb-3" onClick={() => setMobileMenuOpen(false)}>{currentT.navInstall}</a>
          <a href="#versions" className="text-xl font-semibold text-text-primary border-b border-border-custom pb-3" onClick={() => setMobileMenuOpen(false)}>{currentT.navVersions}</a>
          <a href="#faq" className="text-xl font-semibold text-text-primary border-b border-border-custom pb-3" onClick={() => setMobileMenuOpen(false)}>{currentT.navFaq}</a>
        </div>
      )}
    </>
  );
}
