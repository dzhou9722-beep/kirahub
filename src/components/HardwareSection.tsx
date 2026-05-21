/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  CircleDot, 
  Grid, 
  BatteryCharging, 
  Magnet, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { KiraHubDevice } from './KiraHubDevice';
import { HARDWARE_SPECS, LIFESTYLE_CARDS } from '../data/websiteData';
import { TRANSLATIONS } from '../data/translations';

interface HardwareSectionProps {
  lang: 'zh' | 'en';
}

export const HardwareSection: React.FC<HardwareSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const getSpecIcon = (iconName: string) => {
    switch (iconName) {
      case 'CircleDot':
        return <CircleDot className="w-5 h-5 text-purple-400" />;
      case 'Grid':
        return <Grid className="w-5 h-5 text-blue-400" />;
      case 'BatteryCharging':
        return <BatteryCharging className="w-5 h-5 text-amber-400" />;
      case 'Magnet':
        return <Magnet className="w-5 h-5 text-pink-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-purple-400" />;
    }
  };

  // Safe spec labels translation mapping
  const getTranslatedSpec = (iconName: string) => {
    switch (iconName) {
      case 'CircleDot':
        return { label: lang === 'en' ? "1.85'' Brilliant Screen" : "1.85' 精美屏幕", sub: lang === 'en' ? "Vibrant high-contrast premium panel" : "大屏视界更清晰，视野饱满绚丽" };
      case 'Grid':
        return { label: lang === 'en' ? "360×360 Resolution" : "360×360 分辨率", sub: lang === 'en' ? "High resolution, subpixel sharp focus" : "像素级显色，细节分毫毕现" };
      case 'BatteryCharging':
        return { label: lang === 'en' ? "24-Hour Active Battery" : "24小时 强劲续航", sub: lang === 'en' ? "Powerful endurance for all-day companionship" : "全天候不间断陪伴，强劲持久" };
      case 'Magnet':
        return { label: lang === 'en' ? "Modular Magnetic Base" : "磁吸底座/挂绳", sub: lang === 'en' ? "Multi-wearing setups, high flexibility" : "多样佩戴挂载方式，便携实用" };
      default:
        return { label: '', sub: '' };
    }
  };

  const getLifestyleText = (id: string) => {
    switch (id) {
      case 'bag':
        return { title: t.lifestyleBag, sub: t.lifestyleBagSub };
      case 'desktop':
        return { title: t.lifestyleDesktop, sub: t.lifestyleDesktopSub };
      case 'portable':
        return { title: t.lifestylePortable, sub: t.lifestylePortableSub };
      default:
        return { title: '', sub: '' };
    }
  };

  return (
    <section id="hardware" className="relative w-full py-24 bg-[#03010b] overflow-hidden px-8">
      
      {/* Dynamic light rays */}
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-[#b17efb]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Upper content structure */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left info panel */}
          <div className="w-full lg:w-2/5 flex flex-col items-start text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              {t.hardwareTitle}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#ec4899]">
                {t.hardwareTitleGrad}
              </span>
            </h2>

            <p className="text-gray-400 text-sm font-light leading-relaxed mb-10 max-w-md">
              {t.hardwareDesc}
            </p>

            {/* Hardware technical specification items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-10">
              {HARDWARE_SPECS.map((spec, idx) => {
                const trans = getTranslatedSpec(spec.icon);
                return (
                  <div 
                    key={idx} 
                    className="p-4 bg-[#0a0614]/75 border border-white/5 rounded-2xl flex flex-col gap-2 transition-all hover:border-purple-500/20"
                  >
                    <div className="w-9 h-9 rounded-xl bg-gray-900 flex items-center justify-center">
                      {getSpecIcon(spec.icon)}
                    </div>
                    <span className="text-sm font-bold text-white tracking-tight">{trans.label}</span>
                    <span className="text-[10px] text-gray-500 font-medium leading-normal">{trans.sub}</span>
                  </div>
                )
              })}
            </div>

            {/* Explore button */}
            <button className="px-6 py-3 border border-gray-800 bg-gray-900/40 text-sm font-semibold rounded-full group hover:text-white hover:border-[#9d53ff]/40 flex items-center gap-2 transition-all duration-300 pointer-events-auto cursor-pointer">
              {t.hardwareBtnExplore} 
              <ArrowRight className="w-4 h-4 text-[#9d53ff] group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

          {/* Right bento grid layout representing lifestyle images with devices overlaid */}
          <div className="w-full lg:w-[58%] grid grid-cols-1 sm:grid-cols-3 gap-5">
            {LIFESTYLE_CARDS.map((card) => {
              const info = getLifestyleText(card.id);
              return (
                <div 
                  key={card.id}
                  className="relative h-[480px] rounded-3xl overflow-hidden border border-white/5 flex flex-col justify-end p-5 group"
                >
                  
                  {/* Background lifestyle photo with premium generated paths */}
                  <img 
                    src={card.bgImageUrl} 
                    alt={info.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Ambient dark bottom overlay to make characters & text glow */}
                  <div className="absolute inset-[1px] rounded-[23px] bg-gradient-to-t from-black via-black/40 to-black/10 transition-opacity duration-300 pointer-events-none" />

                  {/* 3D Overlaid KiraHubDevice mimicking physical placement onto lifestyles */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-20 z-20 transform scale-[0.83] transition-all duration-500 group-hover:scale-[0.88]">
                    <KiraHubDevice 
                      character={card.character} 
                      size="md" 
                      glow={true} 
                      mode={card.id === 'desktop' ? 'desktop' : card.id === 'bag' ? 'hanging' : 'neutral'} 
                    />
                  </div>

                  {/* Card description details */}
                  <div className="relative z-30 flex flex-col text-left">
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {info.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-light mt-1">
                      {info.sub}
                    </p>
                  </div>

                  {/* Premium border highlights */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/15 rounded-3xl pointer-events-none transition-all duration-300" />

                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
