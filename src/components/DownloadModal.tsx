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
    <div className="fixed top-0 left-0 w-full h-full bg-black/90 backdrop-blur-[10px] flex items-center justify-center z-[2000] p-4">
      <div className="bg-bg-secondary border border-border-hover rounded-[20px] w-full max-w-[480px] p-8 shadow-[0_0_40px_rgba(255,31,67,0.12)] text-center relative">
        <button className="absolute top-4 right-4 bg-transparent border-none text-text-secondary cursor-pointer transition-colors duration-200 hover:text-text-primary" onClick={onClose}>
          <X size={20} />
        </button>
        
        <h3 className="text-xl font-bold mb-2">
          {currentT.modalProgressTitle}
        </h3>
        <p className="text-[0.9rem] text-text-secondary">
          {currentT.modalProgressDesc}
        </p>
        
        {/* Step 1: Downloading App */}
        {downloadStep === 1 && (
          <div className="mt-5">
            <p className="font-semibold color-accent-red inline-flex items-center justify-center gap-2 text-accent-red">
              <History size={16} className="animate-spin" />
              {currentT.modalStatusApp} ({progress}%)
            </p>
            <div className="bg-white/5 rounded-full h-1.5 w-full overflow-hidden my-5 border border-border-custom">
              <div className="bg-gradient-to-r from-accent-red via-[#ff7300] to-accent-red bg-[length:200%_auto] h-full rounded-full transition-[width] duration-100 ease-out animate-progress-shimmer" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-[0.75rem] text-text-secondary opacity-70">
              File: {selectedApk}
            </span>
          </div>
        )}
        
        {/* Step 2: Downloading MicroG */}
        {downloadStep === 2 && (
          <div className="mt-5">
            <p className="font-semibold color-accent-blue inline-flex items-center justify-center gap-2 text-accent-blue">
              <History size={16} className="animate-spin" />
              {currentT.modalStatusMicrog} ({progress}%)
            </p>
            <div className="bg-white/5 rounded-full h-1.5 w-full overflow-hidden my-5 border border-border-custom">
              <div className="bg-gradient-to-r from-accent-blue via-[#4facfe] to-accent-blue bg-[length:200%_auto] h-full rounded-full transition-[width] duration-100 ease-out animate-progress-shimmer" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-[0.75rem] text-text-secondary opacity-70">
              File: Vanced_MicroG_v0.3.1.apk (12.4 MB)
            </span>
          </div>
        )}
        
        {/* Step 3: Finished */}
        {downloadStep === 3 && (
          <div className="mt-5">
            <div className="w-14 h-14 rounded-full bg-accent-blue/8 text-accent-blue flex items-center justify-center mx-auto mb-4">
              <ShieldCheck size={32} />
            </div>
            
            <p className="text-[0.92rem] font-medium leading-normal mb-4 text-white">
              {currentT.modalFinish}
            </p>
            
            <div className="bg-white/[0.01] border border-border-custom rounded-lg p-3.5 text-xs text-left mb-5">
              <p className="color-text-secondary flex gap-2 leading-relaxed text-text-secondary">
                <Info size={14} className="flex-shrink-0 text-accent-red mt-0.5" />
                <span>{currentT.modalInstallingTips}</span>
              </p>
            </div>
            
            <button 
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base cursor-pointer transition-all duration-200 bg-gradient-to-br from-accent-red to-[#ff4b2b] text-white border-none shadow-[0_6px_20px_rgba(255,31,67,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(255,31,67,0.55)] active:translate-y-0 w-full" 
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
