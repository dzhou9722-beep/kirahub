/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Image as ImageIcon, 
  FileVideo, 
  Clapperboard, 
  MessageSquareText, 
  Sparkles, 
  CloudLightning,
  PlayCircle
} from 'lucide-react';
import { KiraHubDevice } from './KiraHubDevice';
import { GAMEPLAY_CARDS } from '../data/websiteData';
import { TRANSLATIONS } from '../data/translations';

interface FeaturesSectionProps {
  lang: 'zh' | 'en';
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const getIcon = (id: string, colorClass: string) => {
    switch (id) {
      case 'static_image':
        return (
          <svg className={`w-[18px] h-[18px] ${colorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        );
      case 'gif_dynamic':
        return (
          <svg className={`w-[18px] h-[18px] ${colorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M14 9C13.5 8.3 12.3 8 11.5 8C9.5 8 8 9.5 8 12C8 14.5 9.5 16 11.5 16C13.5 16 14.5 14.5 14.5 13H11.5" />
          </svg>
        );
      case 'video_playback':
        return (
          <svg className={`w-[18px] h-[18px] ${colorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 7l-7 5 7 5V7z" />
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
          </svg>
        );
      case 'danmaku_interaction':
        return (
          <svg className={`w-[18px] h-[18px] ${colorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M8 7h8M8 11h5" />
          </svg>
        );
      case 'ai_generation':
        return (
          <svg className={`w-[18px] h-[18px] ${colorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3Z" />
          </svg>
        );
      case 'cloud_sync':
        return (
          <svg className={`w-[18px] h-[18px] ${colorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-1.63-1.11-3.04-2.68-3.39L18 12V11a5 5 0 0 0-10 0v.1A4.5 4.5 0 1 0 9 20" />
            <path d="M12 11v6" />
            <polyline points="9 14 12 17 15 14" />
          </svg>
        );
      default:
        return (
          <svg className={`w-[18px] h-[18px] ${colorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10" />
          </svg>
        );
    }
  };

  const getIconContainerClass = (id: string) => {
    switch (id) {
      case 'static_image': 
        return 'w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#1d123a]/80 to-[#9d53ff]/40 border border-[#9d53ff]/60 shadow-[0_0_15px_rgba(157,83,255,0.4)]';
      case 'gif_dynamic': 
        return 'w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#0c2340]/80 to-blue-500/40 border border-blue-400/60 shadow-[0_0_15px_rgba(59,130,246,0.4)]';
      case 'video_playback': 
        return 'w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#101035]/80 to-indigo-500/40 border border-indigo-400/60 shadow-[0_0_15px_rgba(99,102,241,0.4)]';
      case 'danmaku_interaction': 
        return 'w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#2a0e28]/80 to-[#ec4899]/40 border border-[#ec4899]/60 shadow-[0_0_15px_rgba(236,72,153,0.4)]';
      case 'ai_generation': 
        return 'w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#221035]/80 to-[#a855f7]/40 border border-[#a855f7]/60 shadow-[0_0_15px_rgba(168,85,247,0.45)]';
      case 'cloud_sync': 
        return 'w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#110e28]/80 to-[#6366f1]/40 border border-[#6366f1]/60 shadow-[0_0_15px_rgba(99,102,241,0.4)]';
      default: 
        return 'w-9 h-9 rounded-xl flex items-center justify-center bg-white/5 border border-white/10';
    }
  };

  const getColorTheme = (id: string) => {
    switch (id) {
      case 'static_image': return { iconText: 'text-purple-300', bgGlow: 'from-[#9d53ff]/15 to-transparent' };
      case 'gif_dynamic': return { iconText: 'text-cyan-300', bgGlow: 'from-cyan-500/15 to-transparent' };
      case 'video_playback': return { iconText: 'text-indigo-300', bgGlow: 'from-indigo-500/15 to-transparent' };
      case 'danmaku_interaction': return { iconText: 'text-pink-300', bgGlow: 'from-pink-500/15 to-transparent' };
      case 'ai_generation': return { iconText: 'text-purple-200', bgGlow: 'from-purple-500/15 to-transparent' };
      case 'cloud_sync': return { iconText: 'text-indigo-300', bgGlow: 'from-indigo-500/15 to-transparent' };
      default: return { iconText: 'text-white', bgGlow: 'from-white/5 to-transparent' };
    }
  };

  // Safe translated keys
  const getCardTexts = (id: string) => {
    switch (id) {
      case 'static_image':
        return { title: t.featuresTagStatic, desc: t.featuresTagStaticDesc };
      case 'gif_dynamic':
        return { title: t.featuresTagGif, desc: t.featuresTagGifDesc };
      case 'video_playback':
        return { title: t.featuresTagVideo, desc: t.featuresTagVideoDesc };
      case 'danmaku_interaction':
        return { title: t.featuresTagDanmaku, desc: t.featuresTagDanmakuDesc };
      case 'ai_generation':
        return { title: t.featuresTagAi, desc: t.featuresTagAiDesc };
      case 'cloud_sync':
        return { title: t.featuresTagCloud, desc: t.featuresTagCloudDesc };
      default:
        return { title: '', desc: '' };
    }
  };

  return (
    <section id="gameplay" className="relative w-full pt-14 pb-20 bg-[#050110] overflow-hidden px-8">
      
      {/* Grid structure backgrounds and lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(88,40,190,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Container */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Title area */}
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-3">
            {t.featuresTitle}
          </h2>
          <p className="text-gray-200 text-sm font-semibold uppercase tracking-widest max-w-lg">
            {t.featuresSubtitle}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#9d53ff] to-[#ec4899] mt-4 rounded-full animate-pulse" />
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {GAMEPLAY_CARDS.map((card) => {
            const colors = getColorTheme(card.id);
            const copy = getCardTexts(card.id);
            const danmakus = lang === 'en' 
              ? ['Too Cute!', 'Love it!', 'Spectacular!', 'Hugs~'] 
              : (card.danmakuList || []);

            return (
              <div
                key={card.id}
                className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#0a0614]/80 p-8 pb-6 flex flex-col items-start justify-between text-left min-h-[460px] transition-all duration-300 hover:border-[#9d53ff]/20 hover:bg-[#0c0819] hover:shadow-[0_10px_35px_-8px_rgba(157,83,255,0.15)] group"
              >
                {/* Background glow vignette */}
                <div className={`absolute top-0 inset-x-0 h-40 bg-gradient-to-b ${colors.bgGlow} opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />

                {/* Card Header Info */}
                <div className="relative w-full flex flex-col items-start z-10">
                  {/* Icon & Title Horizontal Layout Row */}
                  <div className="flex items-center gap-3 mb-3">
                    {/* Glowing neon Icon Wrapper */}
                    <div className={`${getIconContainerClass(card.id)} flex-shrink-0 transition-all duration-300 group-hover:scale-110`}>
                      {getIcon(card.id, colors.iconText)}
                    </div>
                    
                    {/* Title & Badge */}
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                        {copy.title}
                      </h3>
                      {card.isNew && (
                        <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-md bg-gradient-to-r from-red-500 to-[#ec4899] text-white tracking-widest leading-none">
                          NEW
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description underneath */}
                  <p className="text-xs text-gray-400 font-normal leading-relaxed text-left max-w-xs pl-1">
                    {copy.desc}
                  </p>
                </div>

                {/* Card Device Visual Presentation Area (Bottom) */}
                <div className="relative w-full h-[220px] flex items-center justify-center pt-4 z-10">
                  {/* 1. Static Image View */}
                  {card.id === 'static_image' && (
                    <div className="transform scale-[1.05] transition-transform duration-500 group-hover:scale-[1.1]">
                      <KiraHubDevice character={card.character} size="md" glow={false} />
                    </div>
                  )}

                  {/* 2. GIF Dynamic View */}
                  {card.id === 'gif_dynamic' && (
                    <motion.div 
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="transform scale-[1.05] transition-transform duration-500 group-hover:scale-[1.1]"
                    >
                      <KiraHubDevice character={card.character} size="md" glow={false} />
                    </motion.div>
                  )}

                  {/* 3. Video Playback View */}
                  {card.id === 'video_playback' && (
                    <div className="relative transform scale-[1.05] transition-transform duration-500 group-hover:scale-[1.1] flex items-center justify-center">
                      <KiraHubDevice character={card.character} size="md" glow={false} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle className="w-10 h-10 text-[#dcf4ff]/30 backdrop-blur-xs rounded-full bg-black/40 hover:text-[#9d53ff] hover:scale-110 cursor-pointer transition-all duration-300" />
                      </div>
                    </div>
                  )}

                  {/* 4. Danmaku Chat Overlay view */}
                  {card.id === 'danmaku_interaction' && (
                    <div className="transform scale-[1.05]">
                      <KiraHubDevice 
                        character={card.character} 
                        size="md" 
                        glow={false} 
                        danmakuList={danmakus} 
                      />
                    </div>
                  )}

                  {/* 5. AI Generation view */}
                  {card.id === 'ai_generation' && (
                    <div className="relative transform scale-[1.05] flex items-center justify-center">
                      <KiraHubDevice character={card.character} size="md" glow={true} />
                      {/* Particles and sparkles decoration */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-[70px] -translate-y-8 text-yellow-300 opacity-60 animate-bounce">✦</div>
                        <div className="absolute top-1/2 left-1/2 translate-x-[60px] translate-y-12 text-blue-400 opacity-60 animate-pulse text-xs">★</div>
                        <div className="absolute top-1/2 left-1/2 translate-x-[45px] -translate-y-12 text-[#ec4899] opacity-70 animate-bounce">✦</div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-[60px] translate-y-10 text-purple-400 opacity-85 text-xs">✦</div>
                      </div>
                    </div>
                  )}

                  {/* 6. Cloud Sync split-view */}
                  {card.id === 'cloud_sync' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Main Device */}
                      <div className="absolute left-[20%] bottom-0 transform scale-[0.85] z-10">
                        <KiraHubDevice character={card.character} size="md" glow={false} />
                      </div>
                      {/* Secondary Smaller Device */}
                      <div className="absolute right-[15%] bottom-2 transform scale-[0.6] z-10 opacity-80 group-hover:opacity-100 group-hover:scale-[0.65] transition-all duration-300">
                        <KiraHubDevice character={card.character} size="md" glow={false} />
                      </div>
                      {/* Cloud icon floating in between */}
                      <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-indigo-950/90 border border-indigo-500/30 p-2 rounded-xl text-indigo-400 animate-pulse">
                        <CloudLightning className="w-5 h-5" />
                      </div>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
