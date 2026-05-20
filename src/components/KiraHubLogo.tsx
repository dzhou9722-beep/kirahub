/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface KiraHubLogoProps {
  className?: string;
  size?: number | string;
  glow?: boolean;
}

export const KiraHubLogo: React.FC<KiraHubLogoProps> = ({
  className = '',
  size = '100%',
  glow = true,
}) => {
  // Proportional five-pointed star generator
  const makeStarPath = (cx: number, cy: number, outerRadius: number, innerRadius: number, rotation = 0) => {
    let rot = (Math.PI / 2) * 3 + (rotation * Math.PI) / 180;
    const step = Math.PI / 5;
    let d = '';

    for (let i = 0; i < 5; i++) {
      let x = cx + Math.cos(rot) * outerRadius;
      let y = cy + Math.sin(rot) * outerRadius;
      d += (i === 0 ? 'M' : 'L') + ` ${x.toFixed(1)},${y.toFixed(1)}`;
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      d += ` ${x.toFixed(1)},${y.toFixed(1)}`;
      rot += step;
    }
    d += ' Z';
    return d;
  };

  // Generate vectors for 3 stars
  const star1 = makeStarPath(365, 145, 38, 16, 15);   // Large top-right main star
  const star2 = makeStarPath(270, 160, 16, 7, -15);   // Small center-top star
  const star3 = makeStarPath(380, 245, 23, 10, 8);    // Medium-small right star

  return (
    <svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      className={`select-none pointer-events-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Simple neon glow filter */}
        <filter id="logo-neon-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="28" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
          </feMerge>
        </filter>

        {/* Dynamic bright lavender-pink metallic gradient */}
        <linearGradient id="logo-body-grad" x1="100" y1="100" x2="400" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="30%" stopColor="#f7efff" />
          <stop offset="100%" stopColor="#e3ccff" />
        </linearGradient>

        {/* Deep background neon accent */}
        <radialGradient id="logo-ambient-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#9d53ff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#03010a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient Radial Gradient Background Backing (Optional subtle glow behind everything) */}
      {glow && (
        <circle cx="256" cy="256" r="220" fill="url(#logo-ambient-glow)" opacity="0.4" />
      )}

      {/* BACKGROUND NEON GLOW LAYER (Drawn in brand-purple, blurred heavily via filter) */}
      {glow && (
        <g filter="url(#logo-neon-blur)" className="opacity-90">
          {/* Stem of K */}
          <rect x="160" y="140" width="66" height="280" rx="33" fill="#b366ff" />
          
          {/* Diagonal bottom-right leg */}
          <rect x="230" y="270" width="195" height="66" rx="33" transform="rotate(40 230 270)" fill="#b366ff" />
          
          {/* Overlapping crescent swoosh */}
          <path
            d="M 148,240 C 90,260 90,345 180,345 C 270,345 340,280 410,185 C 310,270 240,305 180,305 C 130,305 135,255 148,240 Z"
            fill="#b366ff"
          />

          {/* Stars */}
          <path d={star1} fill="#ebd6ff" />
          <path d={star2} fill="#ebd6ff" />
          <path d={star3} fill="#ebd6ff" />
        </g>
      )}

      {/* SHARP FOREGROUND WHITE/LAVENDER LAYER */}
      <g>
        {/* Stem of K */}
        <rect x="160" y="140" width="66" height="280" rx="33" fill="url(#logo-body-grad)" />
        
        {/* Diagonal bottom-right leg */}
        <rect x="230" y="270" width="195" height="66" rx="33" transform="rotate(40 230 270)" fill="url(#logo-body-grad)" />
        
        {/* Overlapping crescent swoosh */}
        <path
          d="M 148,240 C 90,260 90,345 180,345 C 270,345 340,280 410,185 C 310,270 240,305 180,305 C 130,305 135,255 148,240 Z"
          fill="url(#logo-body-grad)"
        />

        {/* Stars */}
        <path d={star1} fill="url(#logo-body-grad)" />
        <path d={star2} fill="url(#logo-body-grad)" />
        <path d={star3} fill="url(#logo-body-grad)" />
      </g>
    </svg>
  );
};
