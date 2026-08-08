'use client';

import React, { useState, useEffect } from 'react';
import { LanguageType } from '@/utils/translations';
import Navbar from './Navbar';
import Hero from './Hero';
import FeatureMatrix from './FeatureMatrix';
import InstallGuide from './InstallGuide';
import VersionHub from './VersionHub';
import FaqAccordion from './FaqAccordion';
import Footer from './Footer';
import DownloadModal from './DownloadModal';

export default function Home() {
  const [lang, setLang] = useState<LanguageType>('en');
  
  // Download Simulation States
  const [showModal, setShowModal] = useState(false);
  const [downloadStep, setDownloadStep] = useState(0); // 0: idle, 1: app, 2: microg, 3: done
  const [progress, setProgress] = useState(0);
  const [selectedApk, setSelectedApk] = useState("uTube_Premium_Latest.apk");

  // Simulated Download Engine Hook
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (showModal) {
      if (downloadStep === 1) { // Downloading App
        setProgress(0);
        interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              clearInterval(interval);
              setTimeout(() => setDownloadStep(2), 850);
              return 100;
            }
            return prev + Math.floor(Math.random() * 8) + 4;
          });
        }, 100);
      } else if (downloadStep === 2) { // Downloading MicroG
        setProgress(0);
        interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              clearInterval(interval);
              setTimeout(() => setDownloadStep(3), 850);
              return 100;
            }
            return prev + Math.floor(Math.random() * 12) + 6;
          });
        }, 100);
      }
    }
    return () => clearInterval(interval);
  }, [showModal, downloadStep]);

  const triggerDownload = (apkName: string) => {
    setSelectedApk(apkName);
    setDownloadStep(1);
    setProgress(0);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setDownloadStep(0);
    setProgress(0);
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Premium Ambient Background Glow Blobs */}
      <div className="absolute rounded-full blur-[90px] pointer-events-none z-0 mix-blend-screen bg-[radial-gradient(circle,rgba(255,31,67,0.15)_0%,transparent_70%)] w-[400px] h-[400px] animate-pulse-blob top-[2%] left-[-12%]" />
      <div className="absolute rounded-full blur-[90px] pointer-events-none z-0 mix-blend-screen bg-[radial-gradient(circle,rgba(0,242,254,0.12)_0%,transparent_70%)] w-[350px] h-[350px] animate-pulse-blob-reverse top-[15%] right-[-15%]" />
      <div className="absolute rounded-full blur-[90px] pointer-events-none z-0 mix-blend-screen bg-[radial-gradient(circle,rgba(255,31,67,0.15)_0%,transparent_70%)] w-[400px] h-[400px] animate-pulse-blob top-[55%] left-[10%]" />
      <div className="absolute rounded-full blur-[90px] pointer-events-none z-0 mix-blend-screen bg-[radial-gradient(circle,rgba(0,242,254,0.12)_0%,transparent_70%)] w-[350px] h-[350px] animate-pulse-blob-reverse bottom-[5%] right-[5%]" />

      {/* Navigation Bar */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Hero Banner Section */}
      <Hero lang={lang} triggerDownload={triggerDownload} />

      {/* Premium Feature Grid */}
      <FeatureMatrix lang={lang} />

      {/* 3-Step Setup Instructions */}
      <InstallGuide lang={lang} triggerDownload={triggerDownload} />

      {/* Releases Hub & Download Tables */}
      <VersionHub lang={lang} triggerDownload={triggerDownload} />

      {/* FAQ Accordion Section */}
      <FaqAccordion lang={lang} />

      {/* Footer Details */}
      <Footer lang={lang} />

      {/* Simulated Downloads UI Overlay */}
      <DownloadModal 
        lang={lang} 
        showModal={showModal} 
        downloadStep={downloadStep} 
        progress={progress} 
        selectedApk={selectedApk} 
        onClose={handleCloseModal} 
      />
    </div>
  );
}
