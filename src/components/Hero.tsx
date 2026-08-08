'use client';

import React from 'react';
import { Download, Cpu, Sparkles, Play } from 'lucide-react';
import { t, LanguageType } from '@/utils/translations';

interface HeroProps {
  lang: LanguageType;
  triggerDownload: (apkName: string) => void;
}

export default function Hero({ lang, triggerDownload }: HeroProps) {
  const currentT = t[lang];

  return (
    <section className="hero-section">
      <div className="container hero-layout">
        <div className="hero-info">
          <span className="badge badge-red" style={{ marginBottom: '18px' }}>
            <Sparkles size={12} />
            {currentT.heroBadge}
          </span>
          <h1 className="hero-title">
            <span className="gradient-text">{currentT.heroTitleMain}</span>
            <br />
            <span className="gradient-text-accent">{currentT.heroTitleSub}</span>
          </h1>
          <p className="hero-subtitle">
            {currentT.heroDesc}
          </p>
          
          <div className="hero-ctas">
            <button 
              className="btn btn-primary"
              onClick={() => triggerDownload("uTube_Premium_v19.26.35.apk")}
            >
              <Download size={18} />
              {currentT.btnDownloadApp}
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => triggerDownload("Vanced_MicroG_v0.3.1.apk")}
            >
              <Cpu size={18} />
              {currentT.btnDownloadMicrog}
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-val" style={{ color: 'var(--accent-red)' }}>{lang === 'en' ? '0' : '০'}</span>
              <span className="stat-lbl">{currentT.statAdBlock}</span>
            </div>
            <div className="stat-item">
              <span className="stat-val">{lang === 'en' ? '5M+' : '৫০ লাখ+'}</span>
              <span className="stat-lbl">{currentT.statUsers}</span>
            </div>
            <div className="stat-item">
              <span className="stat-val" style={{ color: 'var(--accent-blue)' }}>✓</span>
              <span className="stat-lbl">{currentT.statSafe}</span>
            </div>
          </div>
        </div>
        
        <div className="hero-media">
          {/* Optimized High-Fidelity Responsive SVG Phone Mockup */}
          <div className="mockup-wrapper float-anim">
            <svg viewBox="0 0 320 640" className="mockup-svg-container" style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.85))' }}>
              {/* Phone Outer Shell */}
              <rect x="6" y="6" width="308" height="628" rx="42" fill="#09090e" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
              <rect x="8" y="8" width="304" height="624" rx="40" fill="#12121c" stroke="rgba(255, 31, 67, 0.12)" strokeWidth="1" />
              
              {/* Screen Bezel Frame */}
              <rect x="14" y="14" width="292" height="612" rx="34" fill="#030305" />
              
              {/* Camera Punch Hole */}
              <circle cx="160" cy="28" r="4.5" fill="#12121c" />
              
              {/* Simulated App Header */}
              <g transform="translate(14, 42)">
                <rect width="292" height="42" fill="#07070a" />
                {/* Logo Icon */}
                <rect x="14" y="11" width="20" height="20" rx="6" fill="#ff1f43" />
                <path d="M21 17 L29 21 L21 25 Z" fill="#ffffff" transform="scale(0.7) translate(3, 4)" />
                <text x="40" y="25" fill="#ffffff" fontSize="12" fontWeight="900" fontFamily="sans-serif">uTube</text>
                
                {/* Account icon represent Gmail sync */}
                <circle cx="264" cy="21" r="9.5" fill="rgba(0, 242, 254, 0.15)" stroke="rgba(0, 242, 254, 0.4)" strokeWidth="0.5" />
                <text x="261" y="24" fill="#00f2fe" fontSize="9" fontWeight="900" fontFamily="sans-serif">G</text>
              </g>
              
              {/* High Fidelity Player Window Mockup */}
              <g transform="translate(14, 84)">
                <rect width="292" height="156" fill="#0b0b12" />
                
                {/* Dynamic Equalizer Visualizer */}
                <g transform="translate(24, 114)">
                  <rect x="0" y="0" width="3.5" height="12" fill="#ff1f43" rx="1">
                    <animate attributeName="height" values="12;24;8;16;12" dur="1.2s" repeatCount="indefinite" />
                  </rect>
                  <rect x="7" y="0" width="3.5" height="18" fill="#ff1f43" rx="1">
                    <animate attributeName="height" values="18;8;26;12;18" dur="1s" repeatCount="indefinite" />
                  </rect>
                  <rect x="14" y="0" width="3.5" height="24" fill="#ff1f43" rx="1">
                    <animate attributeName="height" values="24;14;18;8;24" dur="1.5s" repeatCount="indefinite" />
                  </rect>
                  <rect x="21" y="0" width="3.5" height="10" fill="#ff1f43" rx="1">
                    <animate attributeName="height" values="10;22;6;16;10" dur="0.9s" repeatCount="indefinite" />
                  </rect>
                </g>
                
                {/* Video title mockup */}
                <text x="60" y="124" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Lofi Study Music - No Ads</text>
                <text x="60" y="136" fill="var(--text-secondary)" fontSize="8" fontFamily="sans-serif">uTube Engine • Background Play</text>
                
                {/* Playback Controls */}
                <circle cx="146" cy="62" r="18" fill="rgba(255, 31, 67, 0.12)" stroke="rgba(255, 31, 67, 0.25)" strokeWidth="1" />
                <polygon points="143,56 143,68 153,62" fill="#ff1f43" />
                
                {/* Player Progress timeline */}
                <rect x="16" y="145" width="260" height="3" rx="1.5" fill="rgba(255,255,255,0.12)" />
                <rect x="16" y="145" width="170" height="3" rx="1.5" fill="#ff1f43" />
                <circle cx="186" cy="146.5" r="4" fill="#ff1f43" />
              </g>

              {/* Floating "Background Play Active" Overlay */}
              <g transform="translate(26, 252)">
                <rect width="268" height="58" rx="12" fill="rgba(10, 10, 16, 0.95)" stroke="rgba(0, 242, 254, 0.2)" strokeWidth="1" />
                
                <circle cx="28" cy="29" r="12" fill="rgba(0, 242, 254, 0.08)" />
                <path d="M25 24 L25 34 L30 29 Z" fill="#00f2fe" />
                
                <text x="50" y="25" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                  {lang === 'en' ? "Background Play Enabled" : "ব্যাকগ্রাউন্ড প্লে সক্রিয়"}
                </text>
                <text x="50" y="39" fill="var(--text-secondary)" fontSize="8" fontFamily="sans-serif">
                  {lang === 'en' ? "Audio continues with screen locked" : "স্ক্রিন বন্ধ থাকলেও অডিও সচল"}
                </text>
                
                <g transform="translate(235, 20)">
                  <circle cx="8" cy="8" r="6" fill="rgba(0, 242, 254, 0.12)">
                    <animate attributeName="r" values="6;9;6" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="8" cy="8" r="4" fill="#00f2fe" />
                </g>
              </g>

              {/* Shield Overlay (No Ads) */}
              <g transform="translate(26, 324)">
                <rect width="268" height="58" rx="12" fill="rgba(10, 10, 16, 0.95)" stroke="rgba(255, 31, 67, 0.2)" strokeWidth="1" />
                
                <circle cx="28" cy="29" r="12" fill="rgba(255, 31, 67, 0.08)" />
                <path d="M28 19 L34 22 L34 28 C34 32 31 35 28 37 C25 35 22 32 22 28 L22 22 Z" fill="#ff1f43" />
                
                <text x="50" y="25" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                  {lang === 'en' ? "SponsorBlock & Ads Guarded" : "বিজ্ঞাপন ও স্পন্সর ব্লক সক্রিয়"}
                </text>
                <text x="50" y="39" fill="var(--text-secondary)" fontSize="8" fontFamily="sans-serif">
                  {lang === 'en' ? "Total Ads Blocked: 4,892" : "মোট ব্লক করা বিজ্ঞাপন: ৪,৮৯২ টি"}
                </text>
              </g>

              {/* Subscriptions Feed List Mockup */}
              <g transform="translate(14, 396)">
                <rect width="292" height="186" fill="#050508" rx="8" />
                <text x="16" y="24" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                  {lang === 'en' ? "Synced Channels" : "সাবস্ক্রাইব করা চ্যানেল"}
                </text>
                
                {/* Channel item 1 */}
                <circle cx="28" cy="54" r="11" fill="#ff4b2b" />
                <text x="25" y="58" fill="#ffffff" fontSize="9" fontWeight="bold">T</text>
                <rect x="48" y="47" width="100" height="5" rx="2.5" fill="#ffffff" />
                <rect x="48" y="56" width="60" height="3" rx="1.5" fill="var(--text-secondary)" opacity="0.6" />
                <rect x="216" y="44" width="58" height="18" rx="9" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
                <text x="224" y="55" fill="var(--text-secondary)" fontSize="7" fontWeight="bold">Subscribed</text>

                {/* Channel item 2 */}
                <circle cx="28" cy="94" r="11" fill="#00f2fe" />
                <text x="25" y="98" fill="#050508" fontSize="9" fontWeight="bold">M</text>
                <rect x="48" y="87" width="110" height="5" rx="2.5" fill="#ffffff" />
                <rect x="48" y="96" width="70" height="3" rx="1.5" fill="var(--text-secondary)" opacity="0.6" />
                <rect x="216" y="84" width="58" height="18" rx="9" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
                <text x="224" y="95" fill="var(--text-secondary)" fontSize="7" fontWeight="bold">Subscribed</text>

                {/* Channel item 3 */}
                <circle cx="28" cy="134" r="11" fill="#9d4edd" />
                <text x="25" y="138" fill="#ffffff" fontSize="9" fontWeight="bold">A</text>
                <rect x="48" y="127" width="90" height="5" rx="2.5" fill="#ffffff" />
                <rect x="48" y="136" width="50" height="3" rx="1.5" fill="var(--text-secondary)" opacity="0.6" />
                <rect x="216" y="124" width="58" height="18" rx="9" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
                <text x="224" y="135" fill="var(--text-secondary)" fontSize="7" fontWeight="bold">Subscribed</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
