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

  const getIcon = (name: string, colorClass: string) => {
    switch (name) {
      case 'Image':
        return <ImageIcon className={`w-5 h-5 ${colorClass}`} />;
      case 'FileVideo':
        return <FileVideo className={`w-5 h-5 ${colorClass}`} />;
      case 'Clapperboard':
        return <Clapperboard className={`w-5 h-5 ${colorClass}`} />;
      case 'MessageSquareText':
        return <MessageSquareText className={`w-5 h-5 ${colorClass}`} />;
      case 'Sparkles':
        return <Sparkles className={`w-5 h-5 ${colorClass}`} />;
      case 'CloudLightning':
        return <CloudLightning className={`w-5 h-5 ${colorClass}`} />;
      default:
        return <Sparkles className={`w-5 h-5 ${colorClass}`} />;
    }
  };

  const getColorTheme = (id: string) => {
    switch (id) {
      case 'static_image': return { iconText: 'text-[#9d53ff]', bgGlow: 'from-[#9d53ff]/10 to-transparent' };
      case 'gif_dynamic': return { iconText: 'text-[#ec4899]', bgGlow: 'from-[#ec4899]/10 to-transparent' };
      case 'video_playback': return { iconText: 'text-[#3b82f6]', bgGlow: 'from-[#3b82f6]/10 to-transparent' };
      case 'danmaku_interaction': return { iconText: 'text-[#06b6d4]', bgGlow: 'from-[#06b6d4]/10 to-transparent' };
      case 'ai_generation': return { iconText: 'text-[#eab308]', bgGlow: 'from-[#eab308]/10 to-transparent' };
      case 'cloud_sync': return { iconText: 'text-[#6366f1]', bgGlow: 'from-[#6366f1]/10 to-transparent' };
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
    <section id="gameplay" className="relative w-full py-24 bg-[#050110] overflow-hidden px-8">
      
      {/* Grid structure backgrounds and lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(88,40,190,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Container */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Title area */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-3">
            {t.featuresTitle}
          </h2>
          <p className="text-gray-400 text-sm font-light uppercase tracking-widest max-w-lg">
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
                className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#0a0614]/80 p-6 flex flex-col items-center justify-between text-center min-h-[420px] transition-all duration-300 hover:border-[#9d53ff]/20 hover:bg-[#0c0819] hover:shadow-[0_10px_35px_-8px_rgba(157,83,255,0.15)] group"
              >
                {/* Background glow vignette */}
                <div className={`absolute top-0 inset-x-0 h-40 bg-gradient-to-b ${colors.bgGlow} opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />

                {/* Card Header Info */}
                <div className="relative w-full flex flex-col items-center z-10">
                  {/* Icon wrapper */}
                  <div className="p-3 bg-white/5 rounded-2xl mb-4 border border-white/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    {getIcon(card.iconName, colors.iconText)}
                  </div>
                  
                  {/* Title & Badge */}
                  <div className="flex items-center gap-2 mb-2 justify-center">
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {copy.title}
                    </h3>
                    {card.isNew && (
                      <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-md bg-gradient-to-r from-red-500 to-[#ec4899] text-white tracking-widest leading-none">
                        NEW
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-400 font-light max-w-[210px] leading-relaxed">
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
