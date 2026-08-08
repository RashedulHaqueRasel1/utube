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
    <section id="features" className="py-20 border-t border-border-custom relative">
      <div className="max-w-[1200px] w-full mx-auto px-6 relative z-[1]">
        <div className="text-center mb-12">
          <span className="text-accent-red text-[0.85rem] font-bold uppercase tracking-[0.1em] mb-2.5 block">{currentT.featureTag}</span>
          <h2 className="text-[1.8rem] sm:text-[2.2rem] lg:text-[2.5rem] font-bold mb-3.5 tracking-[-0.02em]">{currentT.featureTitle}</h2>
          <p className="max-w-[600px] mx-auto text-base text-text-secondary leading-relaxed">{currentT.featureDesc}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Feature 1 */}
          <div className="group bg-bg-card backdrop-blur-[20px] border border-border-custom rounded-2xl p-7 h-full transition-all duration-350 hover:border-border-hover hover:bg-bg-card-hover hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)] hover:-translate-y-0.5">
            <div className="w-[52px] h-[52px] rounded-xl bg-accent-red/4 border border-accent-red/10 flex items-center justify-center text-accent-red mb-5 transition-all duration-200 group-hover:bg-accent-red group-hover:text-white group-hover:shadow-[0_0_15px_rgba(255,31,67,0.35)] group-hover:scale-105">
              <ShieldCheck size={26} />
            </div>
            <h3 className="text-xl font-bold mb-2.5 text-text-primary">{currentT.feat1Title}</h3>
            <p className="text-[0.95rem] text-text-secondary leading-relaxed">{currentT.feat1Desc}</p>
          </div>
          
          {/* Feature 2 */}
          <div className="group bg-bg-card backdrop-blur-[20px] border border-border-custom rounded-2xl p-7 h-full transition-all duration-350 hover:border-border-hover hover:bg-bg-card-hover hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)] hover:-translate-y-0.5">
            <div className="w-[52px] h-[52px] rounded-xl bg-accent-red/4 border border-accent-red/10 flex items-center justify-center text-accent-red mb-5 transition-all duration-200 group-hover:bg-accent-red group-hover:text-white group-hover:shadow-[0_0_15px_rgba(255,31,67,0.35)] group-hover:scale-105">
              <Music size={26} />
            </div>
            <h3 className="text-xl font-bold mb-2.5 text-text-primary">{currentT.feat2Title}</h3>
            <p className="text-[0.95rem] text-text-secondary leading-relaxed">{currentT.feat2Desc}</p>
          </div>
          
          {/* Feature 3 */}
          <div className="group bg-bg-card backdrop-blur-[20px] border border-border-custom rounded-2xl p-7 h-full transition-all duration-350 hover:border-border-hover hover:bg-bg-card-hover hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)] hover:-translate-y-0.5">
            <div className="w-[52px] h-[52px] rounded-xl bg-accent-red/4 border border-accent-red/10 flex items-center justify-center text-accent-red mb-5 transition-all duration-200 group-hover:bg-accent-red group-hover:text-white group-hover:shadow-[0_0_15px_rgba(255,31,67,0.35)] group-hover:scale-105">
              <Users size={26} />
            </div>
            <h3 className="text-xl font-bold mb-2.5 text-text-primary">{currentT.feat3Title}</h3>
            <p className="text-[0.95rem] text-text-secondary leading-relaxed">{currentT.feat3Desc}</p>
          </div>
          
          {/* Feature 4 */}
          <div className="group bg-bg-card backdrop-blur-[20px] border border-border-custom rounded-2xl p-7 h-full transition-all duration-350 hover:border-border-hover hover:bg-bg-card-hover hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)] hover:-translate-y-0.5">
            <div className="w-[52px] h-[52px] rounded-xl bg-accent-red/4 border border-accent-red/10 flex items-center justify-center text-accent-red mb-5 transition-all duration-200 group-hover:bg-accent-red group-hover:text-white group-hover:shadow-[0_0_15px_rgba(255,31,67,0.35)] group-hover:scale-105">
              <Smartphone size={26} />
            </div>
            <h3 className="text-xl font-bold mb-2.5 text-text-primary">{currentT.feat4Title}</h3>
            <p className="text-[0.95rem] text-text-secondary leading-relaxed">{currentT.feat4Desc}</p>
          </div>
          
          {/* Feature 5 */}
          <div className="group bg-bg-card backdrop-blur-[20px] border border-border-custom rounded-2xl p-7 h-full transition-all duration-350 hover:border-border-hover hover:bg-bg-card-hover hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)] hover:-translate-y-0.5">
            <div className="w-[52px] h-[52px] rounded-xl bg-accent-red/4 border border-accent-red/10 flex items-center justify-center text-accent-red mb-5 transition-all duration-200 group-hover:bg-accent-red group-hover:text-white group-hover:shadow-[0_0_15px_rgba(255,31,67,0.35)] group-hover:scale-105">
              <Sparkles size={26} />
            </div>
            <h3 className="text-xl font-bold mb-2.5 text-text-primary">{currentT.feat5Title}</h3>
            <p className="text-[0.95rem] text-text-secondary leading-relaxed">{currentT.feat5Desc}</p>
          </div>
          
          {/* Feature 6 */}
          <div className="group bg-bg-card backdrop-blur-[20px] border border-border-custom rounded-2xl p-7 h-full transition-all duration-350 hover:border-border-hover hover:bg-bg-card-hover hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)] hover:-translate-y-0.5">
            <div className="w-[52px] h-[52px] rounded-xl bg-accent-red/4 border border-accent-red/10 flex items-center justify-center text-accent-red mb-5 transition-all duration-200 group-hover:bg-accent-red group-hover:text-white group-hover:shadow-[0_0_15px_rgba(255,31,67,0.35)] group-hover:scale-105">
              <Cpu size={26} />
            </div>
            <h3 className="text-xl font-bold mb-2.5 text-text-primary">{currentT.feat6Title}</h3>
            <p className="text-[0.95rem] text-text-secondary leading-relaxed">{currentT.feat6Desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
