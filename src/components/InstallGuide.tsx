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
    <section id="install" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">{currentT.installTag}</span>
          <h2 className="section-title">{currentT.installTitle}</h2>
          <p className="section-desc">{currentT.installDesc}</p>
        </div>
        
        <div className="install-tabs">
          <button 
            className={`tab-btn ${activeTab === 0 ? 'active' : ''}`}
            onClick={() => setActiveTab(0)}
          >
            {currentT.step1Tab}
          </button>
          <button 
            className={`tab-btn ${activeTab === 1 ? 'active' : ''}`}
            onClick={() => setActiveTab(1)}
          >
            {currentT.step2Tab}
          </button>
          <button 
            className={`tab-btn ${activeTab === 2 ? 'active' : ''}`}
            onClick={() => setActiveTab(2)}
          >
            {currentT.step3Tab}
          </button>
        </div>
        
        <div className="glass-panel" style={{ overflow: 'hidden' }}>
          {activeTab === 0 && (
            <div className="step-card">
              <div className="step-info">
                <span className="step-num">Step 01 / Companion</span>
                <h3 className="step-title">{currentT.step1Title}</h3>
                <p className="step-desc" style={{ marginBottom: '24px' }}>{currentT.step1Desc}</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => triggerDownload("Vanced_MicroG_v0.3.1.apk")}
                >
                  <Download size={16} />
                  {lang === 'en' ? "Download MicroG APK" : "মাইক্রো-জি APK ডাউনলোড করুন"}
                </button>
              </div>
              <div className="step-media">
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
            <div className="step-card">
              <div className="step-info">
                <span className="step-num">Step 02 / Main Client</span>
                <h3 className="step-title">{currentT.step2Title}</h3>
                <p className="step-desc" style={{ marginBottom: '24px' }}>{currentT.step2Desc}</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => triggerDownload("uTube_Premium_v19.26.35.apk")}
                >
                  <Download size={16} />
                  {lang === 'en' ? "Download uTube APK" : "ইউটিউব APK ডাউনলোড করুন"}
                </button>
              </div>
              <div className="step-media">
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
            <div className="step-card">
              <div className="step-info">
                <span className="step-num">Step 03 / Activation</span>
                <h3 className="step-title">{currentT.step3Title}</h3>
                <p className="step-desc" style={{ marginBottom: '20px' }}>{currentT.step3Desc}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'inherit' }}>
                  <span className="badge badge-red">
                    {lang === 'en' ? "No Root Required" : "রুট লাগবে না"}
                  </span>
                  <span className="badge badge-blue">
                    {lang === 'en' ? "Gmail Compatible" : "জিমেইল কানেকশন সমর্থিত"}
                  </span>
                </div>
              </div>
              <div className="step-media">
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
