/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Play, Smartphone, Tv, BatteryCharging, Feather, Wifi, Info, Globe, ChevronDown } from 'lucide-react';
import { KiraHubDevice } from './KiraHubDevice';
import { KiraHubLogo } from './KiraHubLogo';
import { CHARACTERS_LIST } from '../data/websiteData';
import { TRANSLATIONS } from '../data/translations';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  lang: 'zh' | 'en';
  onChangeLang: (lang: 'zh' | 'en') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, lang, onChangeLang }) => {
  const [activeCharIndex, setActiveCharIndex] = useState(0);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const handleNextChar = () => {
    setActiveCharIndex((prev) => (prev + 1) % CHARACTERS_LIST.length);
  };

  const currentCharacter = CHARACTERS_LIST[activeCharIndex];

  // Translated tag labels
  const getTagText = (idx: number) => {
    switch (idx) {
      case 0: return t.heroTagHd;
      case 1: return t.heroTagBattery;
      case 2: return t.heroTagLight;
      case 3: return t.heroTagWifi;
      default: return '';
    }
  };

  return (
    <div className="relative w-full min-h-[85vh] lg:min-h-[80vh] xl:min-h-[76vh] bg-[#04010d] overflow-hidden flex flex-col pt-3 pb-12 px-8">
      
      {/* Absolute ambient lights & blurred circles to replicate depth */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-[#9d53ff]/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[70%] rounded-full bg-blue-900/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[40%] h-[50%] rounded-full bg-[#ec4899]/5 blur-[140px] pointer-events-none" />

      {/* 1. Header/Navigation Bar */}
      <header className="relative w-full max-w-7xl mx-auto flex items-center justify-between py-2 z-40">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate('home')}>
          <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
            <KiraHubLogo size={48} />
          </div>
          <span className="text-2xl font-black font-display text-white tracking-tight group-hover:text-purple-300 transition-colors">KiraHub</span>
        </div>

        {/* Right download APP & Bilingual switch dropdown */}
        <div className="flex items-center gap-4 relative">
          
          {/* Custom Lang Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setLangDropdownOpen(true)}
            onMouseLeave={() => setLangDropdownOpen(false)}
          >
            <button 
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 hover:text-white hover:border-[#9d53ff]/30 transition-all duration-300 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              <span>{lang === 'zh' ? '简体中文' : 'English'}</span>
              <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180 text-purple-400' : ''}`} />
            </button>

            {/* Dropdown Items */}
            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-36 rounded-2xl bg-[#0d0a1b] border border-white/10 p-1.5 shadow-2xl shadow-black/80 z-50 overflow-hidden"
                >
                  {[
                    { code: 'zh', name: '简体中文', active: true },
                    { code: 'en', name: 'English', active: true },
                  ].map((item) => (
                    <button
                      key={item.code}
                      onClick={() => {
                        if (item.active) {
                          onChangeLang(item.code as 'zh' | 'en');
                          setLangDropdownOpen(false);
                        }
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all text-left ${
                        !item.active 
                          ? 'opacity-40 cursor-not-allowed text-gray-500' 
                          : lang === item.code 
                            ? 'bg-[#9d53ff]/20 text-purple-100 border border-[#9d53ff]/30' 
                            : 'text-gray-300 hover:text-white hover:bg-white/5 cursor-pointer'
                      }`}
                    >
                      <span>{item.name}</span>
                      {!item.active && (
                        <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-gray-900 text-gray-500 uppercase tracking-tighter scale-90">
                          Soon
                        </span>
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button 
            onClick={() => onNavigate('footer')}
            className="px-6 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#9d53ff] via-[#853eff] to-[#3b82f6] shadow-md shadow-purple-500/10 hover:shadow-purple-500/30 hover:scale-[1.03] transition-all duration-300 cursor-pointer"
          >
            {t.downloadApp}
          </button>
        </div>
      </header>

      {/* 2. Hero Body */}
      <div className="relative w-full max-w-7xl mx-auto flex-1 flex flex-col lg:flex-row items-center justify-between gap-8 mt-5 lg:mt-8 xl:mt-10 z-30">
        
        {/* Left side text column */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left lg:pr-6">
          
          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-5">
            {t.heroTitlePart1}
            <br />
            <span className="text-white">{t.heroTitleInReality}</span>
            <span className="relative inline-block ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[#b17efb] via-[#9d53ff] to-[#ec4899] drop-shadow-[0_4px_12px_rgba(157,83,255,0.4)] font-black">
              {t.heroTitleCompanion}
            </span>
          </h1>

          {/* Description list representation */}
          <div className="flex flex-col gap-2 text-base md:text-lg text-gray-200 mb-6 border-l-2 border-[#9d53ff]/60 pl-4">
            <p className="font-semibold text-purple-300">
              {t.heroSubChips}
            </p>
            <p className="text-gray-300 font-normal leading-relaxed">
              {t.heroDesc}
            </p>
          </div>

          {/* Buttons container */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button
              onClick={() => onNavigate('footer')}
              className="px-7 py-3.5 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#9d53ff] to-blue-600 shadow-lg shadow-[#9d53ff]/25 hover:shadow-purple-500/40 hover:scale-[1.02] flex items-center gap-2 transition-all duration-300 cursor-pointer"
            >
              <Smartphone className="w-5 h-5 text-white" />
              {t.heroBtnDownload}
            </button>
            <button
              onClick={() => onNavigate('hardware')}
              className="px-7 py-3.5 rounded-full text-base font-bold text-white border border-gray-600 bg-gray-900/50 hover:bg-gray-800 hover:text-white flex items-center gap-2 transition-all duration-300 cursor-pointer"
            >
              <Play className="w-4 h-4 text-[#9d53ff] fill-current" />
              {t.heroBtnLearn}
            </button>
          </div>

          {/* Bottom small tags features row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full bg-gray-900/20 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
            {[
              { icon: Tv, color: 'text-purple-300' },
              { icon: BatteryCharging, color: 'text-amber-300' },
              { icon: Feather, color: 'text-pink-300' },
              { icon: Wifi, color: 'text-blue-300' }
            ].map((tag, idx) => (
              <div key={idx} className="flex items-center gap-2 whitespace-nowrap">
                <div className={`p-1.5 rounded-lg bg-gray-800/80 ${tag.color}`}>
                  <tag.icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-gray-200">{getTagText(idx)}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Right side presentation mockup column */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center relative">
          
          {/* Subtle horizontal platform ellipse for 3D look */}
          <div className="absolute bottom-[35%] w-[80%] h-32 rounded-full bg-[#1b123a]/50 border border-purple-500/10 filter blur-xl scale-95 pointer-events-none" />

          {/* Main featured character with stand */}
          <div className="relative pt-6 cursor-pointer" onClick={handleNextChar}>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCharacter.id}
                initial={{ opacity: 0, scale: 0.95, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotateY: 15 }}
                transition={{ duration: 0.4 }}
              >
                <KiraHubDevice 
                  character={currentCharacter} 
                  size="xl" 
                  mode="desktop" 
                  glow={true} 
                  showStatusText={true}
                  showTranslatedStatus={lang === 'en' ? (currentCharacter.id === 'purple' ? 'Hi~ Nice meeting you in the real world!' : currentCharacter.id === 'pink' ? 'Be fully energetic today too, fighting!' : currentCharacter.id === 'dark' ? 'System security level normal, where to today?' : 'Listening to the wind, company is my deepest confession♥') : undefined}
                />
              </motion.div>
            </AnimatePresence>

            {/* Glowing active glow surrounding the base */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-1 z-0 filter blur-md bg-purple-500/50 opacity-40 animate-pulse" />
          </div>

          {/* Slide Indicator circles */}
          <div className="flex items-center gap-3 mt-6">
            {CHARACTERS_LIST.map((char, index) => (
              <button
                key={char.id}
                onClick={() => setActiveCharIndex(index)}
                className={`relative h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeCharIndex === index ? 'w-8 bg-[#9d53ff]' : 'w-2.5 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Show ${char.name}`}
              >
                {activeCharIndex === index && (
                  <span className="absolute inset-0 rounded-full bg-purple-400 blur-xs animate-ping opacity-75" />
                )}
              </button>
            ))}
          </div>

          {/* Quick instructions to prompt interaction */}
          <p className="text-xs text-gray-500 mt-3 font-mono tracking-wider animate-pulse flex items-center gap-1">
            <Info className="w-3 h-3 text-[#9d53ff]" />
            {t.heroSwitchTip}
          </p>

        </div>

      </div>

      {/* Recreating the elegant bottom edge curved connector in the mockup */}
      <div className="absolute bottom-0 left-0 right-0 h-10 w-full bg-gradient-to-t from-[#0e0024] to-transparent border-b border-[#1f0b4a]/40" />

    </div>
  );
};
