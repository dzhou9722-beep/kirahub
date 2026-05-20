/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { AnimeCharacter } from '../types';

interface KiraHubDeviceProps {
  character: AnimeCharacter;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  customSizeClass?: string;
  mode?: 'neutral' | 'hanging' | 'desktop';
  glow?: boolean;
  danmakuList?: string[];
  showStatusText?: boolean;
  showTranslatedStatus?: string;
  className?: string;
}

export const KiraHubDevice: React.FC<KiraHubDeviceProps> = ({
  character,
  size = 'md',
  customSizeClass = '',
  mode = 'neutral',
  glow = true,
  danmakuList,
  showStatusText = false,
  showTranslatedStatus,
  className = '',
}) => {
  // Sizing definitions
  const sizeClasses = {
    sm: 'w-24 h-24 text-[9px]',
    md: 'w-44 h-44 text-[11px]',
    lg: 'w-64 h-64 text-sm',
    xl: 'w-80 h-80 text-base',
    custom: customSizeClass,
  };

  const currentSizeClass = sizeClasses[size];

  // Base theme values matching character
  const primaryColor = character.themeColor;

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      
      {/* 1. Hanging cord style */}
      {mode === 'hanging' && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
          <div className="w-1.5 h-12 bg-gradient-to-b from-gray-700 to-amber-700/80 rounded-full" />
          <div className="w-4 h-4 rounded-full border-2 border-amber-600 bg-gray-900 -mt-1.5 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          </div>
        </div>
      )}

      {/* 2. Device body & shadow glow */}
      <div className="relative group">
        {glow && (
          <div 
            className="absolute inset-0 rounded-full blur-3xl opacity-40 transition-all duration-700 group-hover:opacity-60"
            style={{ 
              backgroundColor: primaryColor,
              transform: 'scale(1.05)'
            }} 
          />
        )}

        {/* Outer Circular shell */}
        <div 
          className={`relative rounded-full p-[3px] shadow-2xl transition-all duration-500 bg-gradient-to-b from-gray-700 via-gray-900 to-black ${currentSizeClass} flex items-center justify-center`}
          style={{
            boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.45), inset 0 2px 3px rgba(255,255,255,0.1), 0 0 15px ${primaryColor}20`
          }}
        >
          {/* Inner bezel with dark metallic finish and notch dots */}
          <div className="absolute inset-[3px] rounded-full bg-[#0d0a1b] flex items-center justify-center p-[8px]">
            
            {/* Glossy screen ring */}
            <div className="absolute inset-0 rounded-full border border-white/5 bg-gradient-to-tr from-transparent via-white/5 to-white/10" />

            {/* Simulated hardware details at the top/sides */}
            <div className="absolute top-1 w-1.5 h-1.5 rounded-full bg-gray-800 border border-gray-950 z-20" />
            <div className="absolute left-1.5 bottom-1/2 translate-y-1/2 w-0.5 h-3 bg-gray-950/70 rounded-full" />
            <div className="absolute right-1.5 bottom-1/2 translate-y-1/2 w-0.5 h-3 bg-gray-950/70 rounded-full" />

            {/* Screen mask */}
            <div className="relative w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">
              
              {/* Wallpaper / Anime character image */}
              <img 
                src={character.avatarUrl} 
                alt={character.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Status Message Overlay (Used when demoing interactive badges) */}
              {showStatusText && (showTranslatedStatus || character.statusText) && (
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black via-black/85 to-transparent flex items-end justify-center pb-3 px-3">
                  <p className="text-[10px] leading-snug font-medium text-purple-200 text-center animate-pulse drop-shadow-md">
                    {showTranslatedStatus || character.statusText}
                  </p>
                </div>
              )}

              {/* Screen gloss reflection layer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/12 pointer-events-none" />
              
              {/* Outer screen vignette */}
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] pointer-events-none" />
            </div>

            {/* Sleek branded label at the center bottom edge of bezel */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1 opacity-70 scale-90">
              <span className="text-[7px] font-mono tracking-widest text-[#9d53ff] font-bold">✕</span>
              <span className="text-[7px] font-sans font-semibold text-gray-400 tracking-wider">KiraHub</span>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Base/Stand for Desktop Mode */}
      {mode === 'desktop' && (
        <div className="w-32 h-4 -mt-1 bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-b-xl border-t border-gray-700 shadow-lg relative flex items-center justify-center">
          <div className="w-24 h-0.5 bg-purple-500/30 blur-xs rounded-full" />
          {/* Subtle desk contact glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-2 bg-[#9d53ff]/15 blur-md rounded-full pointer-events-none" />
        </div>
      )}

      {/* 4. Danmaku/Dialogue bubbles floating around (Used in Section 1 "弹幕互动") */}
      {danmakuList && danmakuList.length > 0 && (
        <div className="absolute inset-0 pointer-events-none z-30">
          {danmakuList.map((text, idx) => {
            // Position mapping to recreate floating speech pills like in the screenshot
            const coordinates = [
              { top: '10%', left: '-50px', bg: 'bg-[#9d53ff]', text: 'text-white' }, // top-left
              { top: '15%', right: '-45px', bg: 'bg-[#5b3eb2]', text: 'text-gray-100' }, // top-right
              { bottom: '15%', left: '-55px', bg: 'bg-[#ab1d7a]', text: 'text-white' }, // bottom-left
              { bottom: '20%', right: '-50px', bg: 'bg-[#1a5fb4]', text: 'text-gray-200' }, // bottom-right
            ];
            const coord = coordinates[idx % coordinates.length];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8, y: 5 }}
                animate={{ 
                  opacity: 0.9, 
                  scale: 1, 
                  y: [0, -4, 0] 
                }}
                transition={{ 
                  duration: 3 + idx, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className={`absolute px-2.5 py-1 rounded-full text-[10px] font-medium shadow-md shadow-black/40 flex items-center justify-center whitespace-nowrap border border-white/10 ${coord.bg} ${coord.text}`}
                style={{
                  top: coord.top,
                  left: coord.left,
                  right: coord.right,
                  bottom: coord.bottom,
                }}
              >
                {text}
              </motion.div>
            );
          })}
        </div>
      )}

    </div>
  );
};
