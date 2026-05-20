/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Smartphone, Apple, Play, Globe, Twitter, Instagram } from 'lucide-react';
import { KiraHubLogo } from './KiraHubLogo';
import { TRANSLATIONS } from '../data/translations';

interface FooterSectionProps {
  onNavigate: (sectionId: string) => void;
  lang: 'zh' | 'en';
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onNavigate, lang }) => {
  const t = TRANSLATIONS[lang];

  const handleLinkClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    onNavigate(target);
  };

  return (
    <footer id="footer" className="relative w-full pt-24 pb-12 bg-[#020008] border-t border-[#130729] overflow-hidden px-10">
      
      {/* Footer background sparkles and light halos */}
      <div className="absolute bottom-[10%] left-[-10%] w-[35%] h-[35%] bg-purple-900/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[45%] h-[40%] bg-blue-900/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Main container wrapper */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col gap-20">
        
        {/* UPPER CALL TO ACTION AREA */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 border-b border-white/5 pb-16">
          <div className="flex flex-col items-start text-left lg:max-w-xl">
            <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4 animate-pulse">
              {t.footerTitle}
            </h2>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              {t.footerDesc}
            </p>
          </div>

          {/* Download Action Links and Apps QR Column */}
          <div className="flex flex-wrap items-center gap-6">
            
            {/* Buttons stack */}
            <div className="flex flex-col gap-3">
              {/* Primary APP Download Link */}
              <button className="px-6 py-3.5 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-[#9d53ff] via-[#853eff] to-[#3b82f6] shadow-lg shadow-purple-950/50 hover:shadow-purple-500/30 flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-102 cursor-pointer w-[170px]">
                <Smartphone className="w-4 h-4" />
                {t.downloadApp}
              </button>

              {/* App Store Download Link */}
              <button className="px-6 py-3 rounded-2xl text-[11px] font-semibold text-gray-300 border border-gray-800 bg-gray-900/40 hover:bg-gray-800 hover:text-white flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer w-[170px]">
                <Apple className="w-4 h-4 text-white" />
                App Store
              </button>

              {/* Google Play Download Link */}
              <button className="px-6 py-3 rounded-2xl text-[11px] font-semibold text-gray-300 border border-gray-800 bg-gray-900/40 hover:bg-gray-800 hover:text-white flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer w-[170px]">
                <Play className="w-3.5 h-3.5 text-blue-400 fill-current" />
                Google Play
              </button>
            </div>

            {/* QR Code Container simulation based on exact screenshot element layout */}
            <div className="p-3 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center shadow-inner relative group select-none">
              <div className="w-28 h-28 bg-white p-2 rounded-2xl flex items-center justify-center relative">
                {/* Simulated high-fidelity QR Code blocks */}
                <div className="w-full h-full bg-gradient-to-tr from-gray-900 to-black rounded-lg p-1.5 flex flex-col justify-between">
                  <div className="flex justify-between w-full">
                    <div className="w-6 h-6 border-2 border-white rounded flex items-center justify-center"><div className="w-2.5 h-2.5 bg-white rounded-xs" /></div>
                    <div className="w-6 h-6 border-2 border-white rounded flex items-center justify-center"><div className="w-2.5 h-2.5 bg-white rounded-xs" /></div>
                  </div>
                  <div className="flex justify-center my-1">
                    <div className="w-2.5 h-2.5 bg-[#9d53ff] rounded-full animate-ping" />
                  </div>
                  <div className="flex justify-between w-full items-end">
                    <div className="w-6 h-6 border-2 border-white rounded flex items-center justify-center"><div className="w-2.5 h-2.5 bg-white rounded-xs" /></div>
                    <div className="w-6 h-6 flex flex-wrap gap-1 p-0.5 justify-end items-end">
                      <div className="w-1.5 h-1.5 bg-white rounded" />
                      <div className="w-1.5 h-1.5 bg-white rounded" />
                    </div>
                  </div>
                </div>
                {/* Central mini logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-black border border-purple-500/30 flex items-center justify-center overflow-hidden">
                  <KiraHubLogo size={18} glow={false} />
                </div>
              </div>
              {/* Outer floating sparkles */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#9d53ff]/20 rounded-3xl pointer-events-none transition-all duration-300" />
            </div>

          </div>
        </div>

        {/* MIDDLE LINKS DIRECTORY DIVISION */}
        <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-10 text-left">
          
          {/* Logo brand intro */}
          <div className="col-span-2 md:col-span-2 flex flex-col items-start gap-4 pr-6">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onNavigate('home')}>
              <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110">
                <KiraHubLogo size={32} />
              </div>
              <span className="text-lg font-bold font-display text-white tracking-tight group-hover:text-purple-300 transition-colors">KiraHub</span>
            </div>
            
            <p className="text-xs text-gray-500 leading-relaxed font-light">
              {t.footerIntro}
            </p>
          </div>

          {/* Columns menu */}
          {[
            {
              title: t.footerColProduct,
              links: [
                { label: t.footerLinkIntro, target: 'hardware' },
                { label: t.footerLinkAcc, target: 'hardware' },
                { label: t.footerLinkSpecs, target: 'product_spec' }
              ]
            },
            {
              title: t.footerColGameplay,
              links: [
                { label: t.footerLinkFormats, target: 'gameplay' },
                { label: t.footerLinkAi, target: 'ai_workshop' },
                { label: t.footerLinkFeed, target: 'community' }
              ]
            },
            {
              title: t.footerColSupport,
              links: [
                { label: t.footerLinkHelp, target: 'home' },
                { label: t.footerLinkTutorial, target: 'home' },
                { label: t.footerLinkService, target: 'home' }
              ]
            }
          ].map((column, idx) => (
            <div key={idx} className="flex flex-col items-start gap-4">
              <span className="text-xs font-bold text-gray-300 tracking-wider uppercase border-l-2 border-[#9d53ff] pl-2">
                {column.title}
              </span>
              <ul className="flex flex-col items-start gap-2.5">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a 
                      href={`#${link.target}`} 
                      onClick={(e) => handleLinkClick(e, link.target)}
                      className="text-xs text-gray-500 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* BOTTOM METADATA / LEGAL COPYRIGHTS BAR */}
        <div className="w-full border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-gray-600 font-light text-center md:text-left">
            <span>© 2024 KiraHub. All rights reserved.</span>
            <span className="hidden md:inline text-gray-800">|</span>
            <div className="flex items-center gap-3">
              <button onClick={() => onNavigate('home')} className="hover:text-gray-400 cursor-pointer">{t.footerPrivacy}</button>
              <span>·</span>
              <button onClick={() => onNavigate('home')} className="hover:text-gray-400 cursor-pointer">{t.footerTerms}</button>
            </div>
          </div>

          {/* Social connections */}
          <div className="flex items-center gap-4 text-gray-500">
            <span className="text-[11px] font-bold text-gray-600 uppercase tracking-widest hidden sm:inline">{t.footerFollow}:</span>
            {[
              { icon: Globe, label: 'Website' },
              { icon: Twitter, label: 'Twitter' },
              { icon: Instagram, label: 'Instagram' }
            ].map((social, index) => (
              <button 
                key={index} 
                className="p-2 bg-white/5 border border-white/5 rounded-xl text-gray-400 hover:text-white hover:border-purple-500/20 hover:bg-purple-950/10 cursor-pointer transition-all"
                title={social.label}
              >
                <social.icon className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
