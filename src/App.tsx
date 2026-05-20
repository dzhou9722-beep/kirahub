/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HardwareSection } from './components/HardwareSection';
import { AiWorkshopSection } from './components/AiWorkshopSection';
import { CommunitySection } from './components/CommunitySection';
import { FooterSection } from './components/FooterSection';
import { AgreementViewer } from './components/AgreementViewer';

export default function App() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [view, setView] = useState<'landing' | 'privacy' | 'terms'>('landing');

  const handleChangeLanguage = (newLang: 'zh' | 'en') => {
    setLang(newLang);
  };
  
  // Smooth navigation handler to scroll to specific sections cleanly
  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'privacy') {
      setView('privacy');
      return;
    }
    if (sectionId === 'terms') {
      setView('terms');
      return;
    }
    if (sectionId === 'home') {
      setView('landing');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Switch to landing first if on another view
    if (view !== 'landing') {
      setView('landing');
      setTimeout(() => {
        let targetId = sectionId;
        if (sectionId === 'product_spec') {
          targetId = 'hardware';
        }
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return;
    }
    
    // Check if the navigational target is mapped to a specific hardware section anchors
    let targetId = sectionId;
    if (sectionId === 'product_spec') {
      targetId = 'hardware';
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (view === 'privacy' || view === 'terms') {
    return (
      <AgreementViewer
        type={view}
        lang={lang}
        onClose={() => setView('landing')}
        onChangeLang={handleChangeLanguage}
        onSwitchType={(newType) => setView(newType)}
      />
    );
  }

  return (
    <div className="relative min-h-screen bg-[#03010a] text-gray-200 selection:bg-purple-600/30 selection:text-white antialiased">
      
      {/* 1. Hero Presentational Header and Slider Area */}
      <HeroSection onNavigate={handleNavigate} lang={lang} onChangeLang={handleChangeLanguage} />

      {/* 2. Content Formats Gameplay Segment ("丰富的内容玩法") */}
      <FeaturesSection lang={lang} />

      {/* 3. Architectural Hardware specs Segment ("精致硬件，为表达而生") */}
      <HardwareSection lang={lang} />

      {/* 4. AI-driven creative studio sync Segment ("AI 角色生成工坊") */}
      <AiWorkshopSection lang={lang} />

      {/* 5. Photorealistic community feeds Segment ("记录热爱，分享美好") */}
      <CommunitySection lang={lang} />

      {/* 6. Footer, licensing details, external apps QR links */}
      <FooterSection onNavigate={handleNavigate} lang={lang} />

    </div>
  );
}
