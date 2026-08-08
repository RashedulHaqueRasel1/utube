'use client';

import React, { useState } from 'react';
import { Download, Cpu, ShieldCheck, Play } from 'lucide-react';
import { t, LanguageType } from '@/utils/translations';

interface InstallGuideProps {
  lang: LanguageType;
  triggerDownload: (apkName: string) => void;
}

export default function InstallGuide({ lang, triggerDownload }: InstallGuideProps) {
  const [activeTab, setActiveTab] = useState(0);
  const currentT = t[lang];

  return (
    <section id="install" className="py-20 border-t border-border-custom relative">
      <div className="max-w-[1200px] w-full mx-auto px-6 relative z-[1]">
        <div className="text-center mb-12">
          <span className="text-accent-red text-[0.85rem] font-bold uppercase tracking-[0.1em] mb-2.5 block">{currentT.installTag}</span>
          <h2 className="text-[1.8rem] sm:text-[2.2rem] lg:text-[2.5rem] font-bold mb-3.5 tracking-[-0.02em]">{currentT.installTitle}</h2>
          <p className="max-w-[600px] mx-auto text-base text-text-secondary leading-relaxed">{currentT.installDesc}</p>
        </div>
        
        <div className="flex justify-center gap-2 mb-8 border-b border-border-custom pb-3 overflow-x-auto whitespace-nowrap scrollbar-none">
          <button 
            className={`bg-transparent border-none text-text-secondary font-primary font-semibold text-[0.95rem] px-[18px] py-[10px] cursor-pointer relative transition-colors duration-200 hover:text-text-primary ${activeTab === 0 ? 'text-accent-red after:content-[""] after:absolute after:-bottom-[13px] after:left-0 after:w-full after:h-[2px] after:bg-accent-red after:shadow-[0_0_10px_#ff1f43]' : ''}`}
            onClick={() => setActiveTab(0)}
          >
            {currentT.step1Tab}
          </button>
          <button 
            className={`bg-transparent border-none text-text-secondary font-primary font-semibold text-[0.95rem] px-[18px] py-[10px] cursor-pointer relative transition-colors duration-200 hover:text-text-primary ${activeTab === 1 ? 'text-accent-red after:content-[""] after:absolute after:-bottom-[13px] after:left-0 after:w-full after:h-[2px] after:bg-accent-red after:shadow-[0_0_10px_#ff1f43]' : ''}`}
            onClick={() => setActiveTab(1)}
          >
            {currentT.step2Tab}
          </button>
          <button 
            className={`bg-transparent border-none text-text-secondary font-primary font-semibold text-[0.95rem] px-[18px] py-[10px] cursor-pointer relative transition-colors duration-200 hover:text-text-primary ${activeTab === 2 ? 'text-accent-red after:content-[""] after:absolute after:-bottom-[13px] after:left-0 after:w-full after:h-[2px] after:bg-accent-red after:shadow-[0_0_10px_#ff1f43]' : ''}`}
            onClick={() => setActiveTab(2)}
          >
            {currentT.step3Tab}
          </button>
        </div>
        
        <div className="bg-bg-card backdrop-blur-[20px] border border-border-custom rounded-2xl overflow-hidden">
          {activeTab === 0 && (
            <div className="flex flex-col md:flex-row items-center gap-10 p-6 md:p-9 text-center md:text-left">
              <div className="md:flex-[1.2] flex-1 w-full">
                <span className="text-xs font-bold text-accent-blue uppercase tracking-widest mb-2.5 block">Step 01 / Companion</span>
                <h3 className="text-xl sm:text-[1.75rem] lg:text-2xl font-bold mb-3.5">{currentT.step1Title}</h3>
                <p className="mb-6 text-text-secondary leading-relaxed">{currentT.step1Desc}</p>
                <button 
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base cursor-pointer transition-all duration-200 bg-gradient-to-br from-accent-red to-[#ff4b2b] text-white border-none shadow-[0_6px_20px_rgba(255,31,67,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(255,31,67,0.55)] active:translate-y-0"
                  onClick={() => triggerDownload("Vanced_MicroG_v0.3.1.apk")}
                >
                  <Download size={16} />
                  {lang === 'en' ? "Download MicroG APK" : "মাইক্রো-জি APK ডাউনলোড করুন"}
                </button>
              </div>
              <div className="md:flex-[0.8] flex-1 flex justify-center w-full order-first md:order-none">
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '24px',
                  background: 'rgba(0, 242, 254, 0.04)',
                  border: '1px solid rgba(0, 242, 254, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00f2fe',
                  boxShadow: '0 0 25px rgba(0, 242, 254, 0.08)'
                }}>
                  <Cpu size={48} />
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 1 && (
            <div className="flex flex-col md:flex-row items-center gap-10 p-6 md:p-9 text-center md:text-left">
              <div className="md:flex-[1.2] flex-1 w-full">
                <span className="text-xs font-bold text-accent-blue uppercase tracking-widest mb-2.5 block">Step 02 / Main Client</span>
                <h3 className="text-xl sm:text-[1.75rem] lg:text-2xl font-bold mb-3.5">{currentT.step2Title}</h3>
                <p className="mb-6 text-text-secondary leading-relaxed">{currentT.step2Desc}</p>
                <button 
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base cursor-pointer transition-all duration-200 bg-gradient-to-br from-accent-red to-[#ff4b2b] text-white border-none shadow-[0_6px_20px_rgba(255,31,67,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(255,31,67,0.55)] active:translate-y-0"
                  onClick={() => triggerDownload("uTube_Premium_v19.26.35.apk")}
                >
                  <Download size={16} />
                  {lang === 'en' ? "Download uTube APK" : "ইউটিউব APK ডাউনলোড করুন"}
                </button>
              </div>
              <div className="md:flex-[0.8] flex-1 flex justify-center w-full order-first md:order-none">
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '24px',
                  background: 'rgba(255, 31, 67, 0.04)',
                  border: '1px solid rgba(255, 31, 67, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ff1f43',
                  boxShadow: '0 0 25px rgba(255, 31, 67, 0.08)'
                }}>
                  <Play size={48} fill="#ff1f43" color="transparent" />
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 2 && (
            <div className="flex flex-col md:flex-row items-center gap-10 p-6 md:p-9 text-center md:text-left">
              <div className="md:flex-[1.2] flex-1 w-full">
                <span className="text-xs font-bold text-accent-blue uppercase tracking-widest mb-2.5 block">Step 03 / Activation</span>
                <h3 className="text-xl sm:text-[1.75rem] lg:text-2xl font-bold mb-3.5">{currentT.step3Title}</h3>
                <p className="mb-6 text-text-secondary leading-relaxed">{currentT.step3Desc}</p>
                <div className="flex gap-2 flex-wrap justify-center md:justify-start">
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent-red/8 text-accent-red border border-accent-red/15">
                    {lang === 'en' ? "No Root Required" : "রুট লাগবে না"}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent-blue/8 text-accent-blue border border-accent-blue/15">
                    {lang === 'en' ? "Gmail Compatible" : "জিমেইল কানেকশন সমর্থিত"}
                  </span>
                </div>
              </div>
              <div className="md:flex-[0.8] flex-1 flex justify-center w-full order-first md:order-none">
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '24px',
                  background: 'rgba(157, 78, 221, 0.04)',
                  border: '1px solid rgba(157, 78, 221, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#9d4edd',
                  boxShadow: '0 0 25px rgba(157, 78, 221, 0.08)'
                }}>
                  <ShieldCheck size={48} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
