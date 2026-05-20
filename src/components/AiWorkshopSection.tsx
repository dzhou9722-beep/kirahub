/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  UploadCloud, 
  CheckCircle2, 
  RefreshCw
} from 'lucide-react';
import { KiraHubDevice } from './KiraHubDevice';
import { CHAR_PURPLE, CHAR_PINK, CHAR_DARK, CHAR_BLUE } from '../data/websiteData';
import { TRANSLATIONS } from '../data/translations';

type StyleType = '偶像' | '校园' | '国潮' | '温婉';

interface AiWorkshopSectionProps {
  lang: 'zh' | 'en';
}

export const AiWorkshopSection: React.FC<AiWorkshopSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  // Interactive state variables
  const [selectedStyle, setSelectedStyle] = useState<StyleType>('国潮');
  const [selectedCandidateIndex, setSelectedCandidateIndex] = useState(0);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'generating' | 'syncing' | 'completed'>('idle');
  const [syncProgress, setSyncProgress] = useState(0);

  // Simulated characters for grid generation
  const candidateCharacters = [
    CHAR_PURPLE, // Top-left
    CHAR_PINK,   // Top-right
    CHAR_DARK,   // Bottom-left
    CHAR_BLUE    // Bottom-right
  ];

  // Map chosen style to appropriate starting character preview
  const getCharacterByStyle = (style: StyleType) => {
    switch (style) {
      case '国潮': return CHAR_PURPLE;
      case '校园': return CHAR_BLUE;
      case '偶像': return CHAR_PINK;
      case '温婉': return CHAR_DARK;
      default: return CHAR_PURPLE;
    }
  };

  const activeInputCharacter = getCharacterByStyle(selectedStyle);
  const activeDeviceCharacter = candidateCharacters[selectedCandidateIndex];

  // Launch simulated pipeline
  const startAiPipeline = () => {
    setSyncStatus('generating');
    setSyncProgress(0);
    
    // Simulate generation leading to syncing
    const timer = setTimeout(() => {
      setSyncStatus('syncing');
    }, 1200);
    return () => clearTimeout(timer);
  };

  // Sync upload progress animation loop
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (syncStatus === 'syncing') {
      interval = setInterval(() => {
        setSyncProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setSyncStatus('completed');
            }, 600);
            return 100;
          }
          return prev + 20;
        });
      }, 120);
    }
    return () => clearInterval(interval);
  }, [syncStatus]);

  // Reset demo
  const resetAiPipeline = () => {
    setSyncStatus('idle');
    setSyncProgress(0);
  };

  const styleChips: StyleType[] = ['国潮', '校园', '偶像', '温婉'];

  const getStyleDisplayName = (style: StyleType) => {
    switch (style) {
      case '国潮': return t.styleGuochao;
      case '校园': return t.styleCampus;
      case '偶像': return t.styleIdol;
      case '温婉': return t.styleGentle;
      default: return style;
    }
  };

  return (
    <section id="ai_workshop" className="relative w-full py-24 bg-[#050111] overflow-hidden px-8">
      
      {/* Decorative ambient beams */}
      <div className="absolute top-[30%] left-[-15%] w-[50%] h-[50%] bg-[#9d53ff]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[45%] h-[45%] bg-[#06b6d4]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Title blocks heading */}
        <div className="w-full flex flex-col items-start mb-16 gap-3">
          <div className="flex items-center gap-2">
            <h2 className="text-4xl font-extrabold text-white tracking-tight">
              {t.workshopTitle}
            </h2>
            <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded-full bg-gradient-to-r from-[#9d53ff] to-blue-600 text-white tracking-widest leading-none">
              NEW
            </span>
          </div>
          <p className="text-gray-400 text-sm font-light max-w-xl">
            {t.workshopDesc}
          </p>
        </div>

        {/* 4-Step Process Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full relative">
          
          {/* Arrow visual connectors in back for grid */}
          <div className="hidden lg:block absolute inset-y-1/2 left-[24%] w-[3%] h-0.5 bg-gradient-to-r from-purple-500/30 to-purple-500/70 pointer-events-none" />
          <div className="hidden lg:block absolute inset-y-1/2 left-[49%] w-[3%] h-0.5 bg-gradient-to-r from-blue-500/30 to-blue-500/70 pointer-events-none" />
          <div className="hidden lg:block absolute inset-y-1/2 left-[74%] w-[3%] h-0.5 bg-gradient-to-r from-purple-500/30 to-purple-500/70 pointer-events-none" />

          {/* STEP 1: 选择风格 */}
          <div className="bg-[#0b0818]/60 border border-white/5 rounded-3xl p-5 flex flex-col items-center justify-between min-h-[380px] text-center hover:border-purple-500/15 transition-all">
            <div className="w-full flex flex-col items-center text-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-purple-500/20 text-[#b17efb] text-xs font-bold flex items-center justify-center">1</span>
                <span className="text-sm font-semibold text-gray-300">{t.workshopStep1}</span>
              </div>
              
              {/* Style Chip Selectors */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                {styleChips.map((style) => (
                  <button
                    key={style}
                    onClick={() => {
                      setSelectedStyle(style);
                      const targetChar = getCharacterByStyle(style);
                      const idx = candidateCharacters.findIndex(char => char.id === targetChar.id);
                      if (idx !== -1) {
                        setSelectedCandidateIndex(idx);
                      }
                      startAiPipeline();
                    }}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wider transition-all cursor-pointer ${
                      selectedStyle === style 
                        ? 'bg-[#9d53ff] text-white shadow-sm shadow-purple-500/30' 
                        : 'bg-gray-900/60 text-gray-500 hover:text-gray-300 hover:bg-gray-800/80'
                    }`}
                  >
                    {getStyleDisplayName(style)}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Character Frame Preview */}
            <div className="relative w-36 h-36 rounded-2xl overflow-hidden border border-white/5 bg-gray-950 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={selectedStyle}
                  src={activeInputCharacter.avatarUrl} 
                  alt={selectedStyle}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end justify-center pb-2">
                <span className="text-[10px] text-gray-400 tracking-wider">PRESET · {getStyleDisplayName(selectedStyle)}</span>
              </div>
            </div>
            
            <span className="text-[11px] text-gray-500 font-medium">{t.workshopStep1Sub}</span>
          </div>

          {/* STEP 2: AI 生成 */}
          <div className="bg-[#0b0818]/60 border border-white/5 rounded-3xl p-5 flex flex-col items-center justify-between min-h-[380px] text-center hover:border-purple-500/15 transition-all">
            <div className="w-full flex flex-col items-center text-center">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-full bg-purple-500/20 text-[#b17efb] text-xs font-bold flex items-center justify-center">2</span>
                <span className="text-sm font-semibold text-gray-300">{t.workshopStep2}</span>
              </div>
              <span className="text-[10px] text-gray-500 font-light mb-4">{t.workshopStep2Sub}</span>
            </div>

            {/* Generated results portfolio grid */}
            <div className="grid grid-cols-2 gap-2 w-full max-w-[170px]">
              {candidateCharacters.map((char, index) => (
                <button
                  key={char.id}
                  onClick={() => {
                    setSelectedCandidateIndex(index);
                    startAiPipeline();
                  }}
                  className={`relative aspect-square rounded-xl overflow-hidden border p-0.5 transition-all cursor-pointer ${
                    selectedCandidateIndex === index 
                      ? 'border-[#9d53ff] bg-purple-950/20 scale-102 shadow-md shadow-purple-500/10' 
                      : 'border-white/5 bg-gray-900/60 hover:border-white/20'
                  }`}
                >
                  <img src={char.avatarUrl} alt={char.name} className="w-full h-full object-cover rounded-lg" referrerPolicy="no-referrer" />
                  
                  {/* Small selected check indicator */}
                  {selectedCandidateIndex === index && (
                    <div className="absolute top-1 right-1 bg-[#9d53ff] text-white p-0.5 rounded-full">
                      <CheckCircle2 className="w-2.5 h-2.5" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            <span className="text-[11px] text-gray-500 font-medium">{t.workshopStep2Tip}</span>
          </div>

          {/* STEP 3: 上传到设备 */}
          <div className="bg-[#0b0818]/60 border border-white/5 rounded-3xl p-5 flex flex-col items-center justify-between min-h-[380px] text-center hover:border-purple-500/15 transition-all">
            <div className="w-full flex flex-col items-center text-center">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-full bg-purple-500/20 text-[#b17efb] text-xs font-bold flex items-center justify-center">3</span>
                <span className="text-sm font-semibold text-gray-300">{t.workshopStep3}</span>
              </div>
              <span className="text-[10px] text-gray-500 font-light mb-4">{t.workshopStep3Sub}</span>
            </div>

            {/* Badge visual syncing status rendering */}
            <div className="relative flex items-center justify-center w-full h-[160px]">
              <div className="transform scale-[0.8] opacity-80 z-10">
                <KiraHubDevice character={activeDeviceCharacter} size="md" glow={false} />
              </div>

              {/* Progress and status indicators overlays */}
              {syncStatus === 'generating' && (
                <div className="absolute inset-0 bg-[#050111]/85 backdrop-blur-xs flex flex-col items-center justify-center z-20 rounded-2xl gap-2">
                  <div className="animate-spin w-6 h-6 border-2 border-[#9d53ff] border-t-transparent rounded-full" />
                  <span className="text-[10px] text-purple-300 font-mono tracking-widest uppercase">{t.workshopStep3Generating}</span>
                </div>
              )}

              {syncStatus === 'syncing' && (
                <div className="absolute inset-0 bg-[#050111]/85 backdrop-blur-xs flex flex-col items-center justify-center z-20 rounded-2xl gap-2 px-4 text-center">
                  <UploadCloud className="w-6 h-6 text-[#9d53ff] animate-bounce" />
                  <div className="w-full bg-gray-900 rounded-full h-1">
                    <div className="bg-[#9d53ff] h-1 rounded-full transition-all duration-150" style={{ width: `${syncProgress}%` }} />
                  </div>
                  <span className="text-[9px] text-gray-400 font-mono">{syncProgress}% {t.workshopStep3Syncing}</span>
                </div>
              )}
            </div>

            <span className="text-[11px] text-gray-500 font-medium">{t.workshopStep3Tip}</span>
          </div>

          {/* STEP 4: 立即展示 */}
          <div className="bg-[#0b0818]/60 border border-white/5 rounded-3xl p-5 flex flex-col items-center justify-between min-h-[380px] text-center hover:border-purple-500/15 transition-all">
            <div className="w-full flex flex-col items-center text-center">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-full bg-purple-500/20 text-[#b17efb] text-xs font-bold flex items-center justify-center">4</span>
                <span className="text-sm font-semibold text-gray-300">{t.workshopStep4}</span>
              </div>
              <span className="text-[10px] text-gray-500 font-light mb-4">{t.workshopStep4Sub}</span>
            </div>

            {/* Live final active device badge */}
            <div className="relative flex items-center justify-center w-full h-[160px]">
              <div className={`transform scale-[0.85] transition-all duration-500 ${
                syncStatus === 'completed' ? 'scale-[0.9] opacity-100' : 'opacity-60 saturate-50'
              }`}>
                <KiraHubDevice character={activeDeviceCharacter} size="md" glow={syncStatus === 'completed'} />
              </div>

              {/* Sparkles / Confetti when completed */}
              {syncStatus === 'completed' && (
                <>
                  <div className="absolute -top-1 left-4 text-yellow-300 text-xs animate-bounce">✦</div>
                  <div className="absolute bottom-4 right-2 text-pink-400 text-sm animate-ping">★</div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-[60px] translate-y-6 text-green-300 text-xs">✦</div>
                </>
              )}
            </div>

            {
              syncStatus === 'completed' ? (
                <span className="text-[11px] text-emerald-400 font-bold tracking-wide animate-pulse flex items-center gap-1 justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {t.workshopStep4Completed}
                </span>
              ) : (
                <span className="text-[11px] text-gray-500 font-medium">{t.workshopStep4Waiting}</span>
              )
            }
          </div>

        </div>

      </div>
    </section>
  );
};
