'use client';

import React from 'react';
import { ShieldCheck, Music, Users, Smartphone, Sparkles, Cpu } from 'lucide-react';
import { t, LanguageType } from '@/utils/translations';

interface FeatureMatrixProps {
  lang: LanguageType;
}

export default function FeatureMatrix({ lang }: FeatureMatrixProps) {
  const currentT = t[lang];

  return (
    <section id="features" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">{currentT.featureTag}</span>
          <h2 className="section-title">{currentT.featureTitle}</h2>
          <p className="section-desc">{currentT.featureDesc}</p>
        </div>
        
        <div className="grid-3">
          {/* Feature 1 */}
          <div className="glass-panel feature-card">
            <div className="feat-icon-box">
              <ShieldCheck size={26} />
            </div>
            <h3 className="feat-title">{currentT.feat1Title}</h3>
            <p className="feat-text">{currentT.feat1Desc}</p>
          </div>
          
          {/* Feature 2 */}
          <div className="glass-panel feature-card">
            <div className="feat-icon-box">
              <Music size={26} />
            </div>
            <h3 className="feat-title">{currentT.feat2Title}</h3>
            <p className="feat-text">{currentT.feat2Desc}</p>
          </div>
          
          {/* Feature 3 */}
          <div className="glass-panel feature-card">
            <div className="feat-icon-box">
              <Users size={26} />
            </div>
            <h3 className="feat-title">{currentT.feat3Title}</h3>
            <p className="feat-text">{currentT.feat3Desc}</p>
          </div>
          
          {/* Feature 4 */}
          <div className="glass-panel feature-card">
            <div className="feat-icon-box">
              <Smartphone size={26} />
            </div>
            <h3 className="feat-title">{currentT.feat4Title}</h3>
            <p className="feat-text">{currentT.feat4Desc}</p>
          </div>
          
          {/* Feature 5 */}
          <div className="glass-panel feature-card">
            <div className="feat-icon-box">
              <Sparkles size={26} />
            </div>
            <h3 className="feat-title">{currentT.feat5Title}</h3>
            <p className="feat-text">{currentT.feat5Desc}</p>
          </div>
          
          {/* Feature 6 */}
          <div className="glass-panel feature-card">
            <div className="feat-icon-box">
              <Cpu size={26} />
            </div>
            <h3 className="feat-title">{currentT.feat6Title}</h3>
            <p className="feat-text">{currentT.feat6Desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
