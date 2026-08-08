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
    <section id="versions" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">{currentT.versionTag}</span>
          <h2 className="section-title">{currentT.versionTitle}</h2>
          <p className="section-desc">{currentT.versionDesc}</p>
        </div>

        {/* Version Filter buttons */}
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '24px' }}>
          <button 
            className={`btn ${versionFilter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '8px 16px', fontSize: '0.85rem', borderRadius: '8px' }}
            onClick={() => setVersionFilter('all')}
          >
            {currentT.verFilterAll}
          </button>
          <button 
            className={`btn ${versionFilter === 'stable' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '8px 16px', fontSize: '0.85rem', borderRadius: '8px' }}
            onClick={() => setVersionFilter('stable')}
          >
            {currentT.verFilterStable}
          </button>
          <button 
            className={`btn ${versionFilter === 'beta' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '8px 16px', fontSize: '0.85rem', borderRadius: '8px' }}
            onClick={() => setVersionFilter('beta')}
          >
            {currentT.verFilterBeta}
          </button>
        </div>

        {/* Scroll Hint on Mobile */}
        <div className="table-scroll-hint">
          <Info size={12} style={{ color: 'var(--accent-blue)' }} />
          <span>{currentT.swipeHint}</span>
        </div>

        <div className="table-container">
          <table className="ver-table">
            <thead>
              <tr>
                <th>{currentT.verColName}</th>
                <th>{currentT.verColType}</th>
                <th>{currentT.verColDate}</th>
                <th>{currentT.verColChanges}</th>
                <th>{currentT.verColDownload}</th>
              </tr>
            </thead>
            <tbody>
              {filteredReleases.map((rel, idx) => (
                <tr key={idx}>
                  <td>
                    <span className="ver-name">{rel.version}</span>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', opacity: 0.6, marginTop: '2px' }}>
                      Size: {rel.size}
                    </div>
                  </td>
                  <td>
                    {rel.type === 'stable' && <span className="badge badge-red">{currentT.typeStable}</span>}
                    {rel.type === 'beta' && <span className="badge badge-blue">{currentT.typeBeta}</span>}
                    {rel.type === 'legacy' && <span className="badge" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)' }}>{currentT.typeLegacy}</span>}
                  </td>
                  <td style={{ fontFamily: 'monospace', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{rel.date}</td>
                  <td>
                    <ul className="changelog-list">
                      {rel.changes[lang].map((change, cIdx) => (
                        <li key={cIdx}>{change}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <button 
                      className="btn btn-outline-glow" 
                      style={{ padding: '8px 16px', fontSize: '0.85rem', borderRadius: '8px' }}
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
