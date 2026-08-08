# uTube Premium - Next-Gen Android Client Landing Page

A premium, responsive, high-performance, and bilingual (English/Bengali) landing page built using **Next.js 16 (App Router)** and **TypeScript** for the official release, distribution, and feature showcase of the custom **uTube Premium Android App**.

---

## 🌟 Key Features of the App Shown

- **🚫 Zero Ads (বিজ্ঞাপন-মুক্ত)**: Complete ad-blocking capability for both videos and sponsor segments.
- **🎧 Background Play (ব্যাকগ্রাউন্ড প্লে)**: Keep audio/video running even when screen is locked or while using other apps.
- **🔄 Gmail Sync (জিমেইল কানেকশন)**: Official subscription and account synchronization via the Vanced MicroG companion app.
- **✨ Safe & Secure**: Validated build signatures with direct checksum integrity.

---

## 🚀 Key Landing Page Features

- **📱 Animated Interactive Mockups**: Features a custom-built, responsive SVG phone simulator showing real-time background play equalizer visualizers, subscriber feeds, and safe-ad shield indicators.
- **🌍 Centralized Bilingual Localization**: Complete support for both **English (EN)** and **Bengali (BN)**, controlled using client-side react states.
- **💾 Interactive Download Simulator**: High-fidelity download overlay showing active progress percentages for the main Client APK and Companion MicroG packages.
- **📊 Release Version Hub**: Sortable and filterable table displaying stable, beta, and legacy releases with built-in changelogs and download endpoints.
- **⚙️ Custom Glassmorphic Styling**: Developed entirely with CSS variables (HSL color spaces), custom responsive grid structures, and backdrop filters without any Tailwind dependency bloat.

---

## 📂 Project Architecture

```
src/
├── app/
│   ├── globals.css          # Design system tokens, variables, keyframe animations, and utilities
│   ├── layout.tsx           # Layout wrapper with SEO title tags, meta descriptions, and viewport details
│   └── page.tsx             # Main page container
├── components/
│   ├── Home.tsx             # Main orchestrator (keeps state for download timelines, active language, modals)
│   ├── Navbar.tsx           # Responsive header navbar with language-toggles and mobile drawer
│   ├── Hero.tsx             # Intro banners, badges, quick statistics, and SVG mockups
│   ├── FeatureMatrix.tsx    # Responsive grid exhibiting app features
│   ├── InstallGuide.tsx     # 3-Step interactive tabs demonstrating MicroG and client configurations
│   ├── VersionHub.tsx       # Releases logs table with filters (Stable/Beta/All)
│   ├── FaqAccordion.tsx     # Animated sliding FAQ accordion cards
│   ├── Footer.tsx           # Disclaimers, copyright details, and community telegram/discord targets
│   └── DownloadModal.tsx    # Overlay presenting download progress bars
└── utils/
    └── translations.ts      # Multi-lingual translations dictionary and releases data
```

---

## 🛠️ Local Development & Installation

Ensure you have **Node.js** and **PNPM** installed.

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Run the Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Production Build
To build and check TypeScript type safety and compile optimization:
```bash
pnpm build
```

---

## 📄 License & Disclaimer
This is an unofficial landing page demonstrating custom Android mod concepts. All trademarks of YouTube and Google are owned by their respective copyright holders.
