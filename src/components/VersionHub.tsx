'use client';

import React, { useState } from 'react';
import { Download, Info } from 'lucide-react';
import { t, releasesData, LanguageType } from '@/utils/translations';

interface VersionHubProps {
  lang: LanguageType;
  triggerDownload: (apkName: string) => void;
}

export default function VersionHub({ lang, triggerDownload }: VersionHubProps) {
  const [versionFilter, setVersionFilter] = useState<'all' | 'stable' | 'beta'>('all');
  const currentT = t[lang];

  const filteredReleases = releasesData.filter(rel => {
    if (versionFilter === 'all') return true;
    return rel.type === versionFilter;
  });

  return (
    <section id="versions" className="py-20 border-t border-border-custom relative">
      <div className="max-w-[1200px] w-full mx-auto px-6 relative z-[1]">
        <div className="text-center mb-12">
          <span className="text-accent-red text-[0.85rem] font-bold uppercase tracking-[0.1em] mb-2.5 block">{currentT.versionTag}</span>
          <h2 className="text-[1.8rem] sm:text-[2.2rem] lg:text-[2.5rem] font-bold mb-3.5 tracking-[-0.02em]">{currentT.versionTitle}</h2>
          <p className="max-w-[600px] mx-auto text-base text-text-secondary leading-relaxed">{currentT.versionDesc}</p>
        </div>

        {/* Version Filter buttons */}
        <div className="flex gap-2 justify-center mb-6">
          <button 
            className={`inline-flex items-center justify-center gap-2 px-4 py-2 text-[0.85rem] rounded-lg font-semibold cursor-pointer transition-all duration-200 ${versionFilter === 'all' ? 'bg-gradient-to-br from-accent-red to-[#ff4b2b] text-white border-none shadow-[0_6px_20px_rgba(255,31,67,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(255,31,67,0.55)] active:translate-y-0' : 'bg-white/[0.03] text-text-primary border border-border-custom backdrop-blur-md hover:bg-white/[0.07] hover:border-white/15 hover:-translate-y-0.5 active:translate-y-0'}`}
            onClick={() => setVersionFilter('all')}
          >
            {currentT.verFilterAll}
          </button>
          <button 
            className={`inline-flex items-center justify-center gap-2 px-4 py-2 text-[0.85rem] rounded-lg font-semibold cursor-pointer transition-all duration-200 ${versionFilter === 'stable' ? 'bg-gradient-to-br from-accent-red to-[#ff4b2b] text-white border-none shadow-[0_6px_20px_rgba(255,31,67,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(255,31,67,0.55)] active:translate-y-0' : 'bg-white/[0.03] text-text-primary border border-border-custom backdrop-blur-md hover:bg-white/[0.07] hover:border-white/15 hover:-translate-y-0.5 active:translate-y-0'}`}
            onClick={() => setVersionFilter('stable')}
          >
            {currentT.verFilterStable}
          </button>
          <button 
            className={`inline-flex items-center justify-center gap-2 px-4 py-2 text-[0.85rem] rounded-lg font-semibold cursor-pointer transition-all duration-200 ${versionFilter === 'beta' ? 'bg-gradient-to-br from-accent-red to-[#ff4b2b] text-white border-none shadow-[0_6px_20px_rgba(255,31,67,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(255,31,67,0.55)] active:translate-y-0' : 'bg-white/[0.03] text-text-primary border border-border-custom backdrop-blur-md hover:bg-white/[0.07] hover:border-white/15 hover:-translate-y-0.5 active:translate-y-0'}`}
            onClick={() => setVersionFilter('beta')}
          >
            {currentT.verFilterBeta}
          </button>
        </div>

        {/* Scroll Hint on Mobile */}
        <div className="flex md:hidden items-center justify-center gap-1 text-[0.75rem] text-text-secondary text-center mb-3">
          <Info size={12} className="text-accent-blue" />
          <span>{currentT.swipeHint}</span>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border-custom bg-bg-card backdrop-blur-md">
          <table className="w-full border-collapse text-left min-w-[680px]">
            <thead>
              <tr className="border-b border-border-custom">
                <th className="bg-white/[0.01] px-5 py-4 font-semibold text-[0.85rem] text-text-secondary uppercase tracking-wider">{currentT.verColName}</th>
                <th className="bg-white/[0.01] px-5 py-4 font-semibold text-[0.85rem] text-text-secondary uppercase tracking-wider">{currentT.verColType}</th>
                <th className="bg-white/[0.01] px-5 py-4 font-semibold text-[0.85rem] text-text-secondary uppercase tracking-wider">{currentT.verColDate}</th>
                <th className="bg-white/[0.01] px-5 py-4 font-semibold text-[0.85rem] text-text-secondary uppercase tracking-wider">{currentT.verColChanges}</th>
                <th className="bg-white/[0.01] px-5 py-4 font-semibold text-[0.85rem] text-text-secondary uppercase tracking-wider">{currentT.verColDownload}</th>
              </tr>
            </thead>
            <tbody>
              {filteredReleases.map((rel, idx) => (
                <tr key={idx} className="border-b border-border-custom last:border-b-0">
                  <td className="px-5 py-4.5">
                    <span className="font-bold text-text-primary">{rel.version}</span>
                    <div className="text-xs text-text-secondary opacity-60 mt-0.5">
                      Size: {rel.size}
                    </div>
                  </td>
                  <td className="px-5 py-4.5">
                    {rel.type === 'stable' && <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent-red/8 text-accent-red border border-accent-red/15">{currentT.typeStable}</span>}
                    {rel.type === 'beta' && <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent-blue/8 text-accent-blue border border-accent-blue/15">{currentT.typeBeta}</span>}
                    {rel.type === 'legacy' && <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/[0.05] text-text-secondary border border-border-custom">{currentT.typeLegacy}</span>}
                  </td>
                  <td className="px-5 py-4.5 font-mono text-text-secondary text-[0.9rem]">{rel.date}</td>
                  <td className="px-5 py-4.5">
                    <ul className="list-none flex flex-col gap-1">
                      {rel.changes[lang].map((change, cIdx) => (
                        <li key={cIdx} className="font-secondary text-[0.85rem] text-text-secondary relative pl-3 before:content-['•'] before:text-accent-red before:absolute before:left-0">{change}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-5 py-4.5">
                    <button 
                      className="inline-flex items-center justify-center gap-2 bg-transparent text-text-primary border border-accent-red shadow-[0_0_10px_rgba(255,31,67,0.08)] px-4 py-2 text-[0.85rem] rounded-lg cursor-pointer transition-all duration-200 hover:bg-accent-red/5 hover:shadow-[0_0_20px_rgba(255,31,67,0.2)] hover:-translate-y-0.5 active:translate-y-0" 
                      onClick={() => triggerDownload(`uTube_Premium_${rel.version}.apk`)}
                    >
                      <Download size={14} />
                      {currentT.getApkBtn}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
