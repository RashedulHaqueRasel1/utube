'use client';

import React from 'react';
import { X, ShieldCheck, History, Info } from 'lucide-react';
import { t, LanguageType } from '@/utils/translations';

interface DownloadModalProps {
  lang: LanguageType;
  showModal: boolean;
  downloadStep: number;
  progress: number;
  selectedApk: string;
  onClose: () => void;
}

export default function DownloadModal({
  lang,
  showModal,
  downloadStep,
  progress,
  selectedApk,
  onClose
}: DownloadModalProps) {
  if (!showModal) return null;

  const currentT = t[lang];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>
        
        <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>
          {currentT.modalProgressTitle}
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          {currentT.modalProgressDesc}
        </p>
        
        {/* Step 1: Downloading App */}
        {downloadStep === 1 && (
          <div style={{ marginTop: '20px' }}>
            <p style={{ fontWeight: '600', color: 'var(--accent-red)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <History size={16} style={{ animation: 'rotate-bg 2s linear infinite' }} />
              {currentT.modalStatusApp} ({progress}%)
            </p>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', opacity: 0.7 }}>
              File: {selectedApk}
            </span>
          </div>
        )}
        
        {/* Step 2: Downloading MicroG */}
        {downloadStep === 2 && (
          <div style={{ marginTop: '20px' }}>
            <p style={{ fontWeight: '600', color: 'var(--accent-blue)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <History size={16} style={{ animation: 'rotate-bg 2s linear infinite' }} />
              {currentT.modalStatusMicrog} ({progress}%)
            </p>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #00f2fe, #4facfe, #00f2fe)' }}></div>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', opacity: 0.7 }}>
              File: Vanced_MicroG_v0.3.1.apk (12.4 MB)
            </span>
          </div>
        )}
        
        {/* Step 3: Finished */}
        {downloadStep === 3 && (
          <div style={{ marginTop: '20px' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'rgba(0, 242, 254, 0.08)',
              color: '#00f2fe',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto'
            }}>
              <ShieldCheck size={32} />
            </div>
            
            <p style={{ fontSize: '0.92rem', fontWeight: '500', lineHeight: '1.5', marginBottom: '16px', color: '#ffffff' }}>
              {currentT.modalFinish}
            </p>
            
            <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '14px', fontSize: '0.8rem', textAlign: 'left', marginBottom: '20px' }}>
              <p style={{ color: 'var(--text-secondary)', display: 'flex', gap: '8px', lineHeight: '1.4' }}>
                <Info size={14} style={{ flexShrink: 0, color: 'var(--accent-red)', marginTop: '1px' }} />
                <span>{currentT.modalInstallingTips}</span>
              </p>
            </div>
            
            <button 
              className="btn btn-primary" 
              style={{ width: '100%' }}
              onClick={onClose}
            >
              {currentT.modalCloseBtn}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
