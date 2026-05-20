/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Heart, ArrowUpRight } from 'lucide-react';
import { COMMUNITY_POSTS } from '../data/websiteData';
import { TRANSLATIONS } from '../data/translations';

interface CommunitySectionProps {
  lang: 'zh' | 'en';
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  // Let the user interactively click heart to increment likes
  const [likesState, setLikesState] = useState<{ [id: string]: { count: number; liked: boolean } }>({
    post1: { count: 1200, liked: false },
    post2: { count: 876, liked: false },
    post3: { count: 652, liked: false },
    post4: { count: 1000, liked: false },
    post5: { count: 990, liked: false },
  });

  const toggleLike = (postId: string) => {
    setLikesState((prev) => {
      const post = prev[postId];
      if (!post) return prev;
      return {
        ...prev,
        [postId]: {
          count: post.liked ? post.count - 1 : post.count + 1,
          liked: !post.liked,
        },
      };
    });
  };

  const formatLikes = (likedObj: { count: number; liked: boolean }) => {
    if (likedObj.count >= 1000) {
      return (likedObj.count / 1000).toFixed(1) + 'k';
    }
    return likedObj.count.toString();
  };

  // Border rings matching the screenshot colors
  const getAvatarBorderRing = (postId: string) => {
    switch (postId) {
      case 'post1': return 'border-amber-400/80';
      case 'post2': return 'border-emerald-400/80';
      case 'post3': return 'border-yellow-500/80';
      case 'post4': return 'border-emerald-400/80';
      default: return 'border-white/40';
    }
  };

  return (
    <section id="community" className="relative w-full py-24 bg-[#03010b] overflow-hidden px-10">
      
      {/* Background lights */}
      <div className="absolute top-[40%] right-[10%] w-[50%] h-[50%] bg-[#ec4899]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative w-full max-w-[1400px] mx-auto flex flex-col gap-12">
        
        {/* Header content and block */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
          <div className="flex flex-col items-start text-left">
            <h2 className="text-4xl font-extrabold text-white tracking-tight mb-3">
              {t.communityTitle}
            </h2>
            <p className="text-gray-400 text-sm font-light max-w-sm">
              {t.communityDesc}
            </p>
          </div>

          <div>
            <button className="px-6 py-3 bg-[#4c1d95] hover:bg-[#5b21b6] border border-purple-500/30 text-sm font-bold text-white rounded-full shadow-lg shadow-purple-950/40 hover:shadow-purple-500/30 flex items-center gap-2 group transition-all duration-300 pointer-events-auto cursor-pointer">
              {t.communityBtnJoin}
              <ArrowUpRight className="w-4 h-4 text-purple-200 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Reconstructed Row conforming exactly to portrait screenshot layout */}
        <div className="w-full overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {COMMUNITY_POSTS.map((post) => {
              const likeObj = likesState[post.id] || { count: 100, liked: false };
              const ringColorClass = getAvatarBorderRing(post.id);

              return (
                <div 
                  key={post.id}
                  className="relative overflow-hidden rounded-[24px] aspect-[4/5] bg-neutral-900 border border-white/5 shadow-xl transition-all duration-300 group hover:scale-[1.02] hover:border-purple-500/25"
                >
                  {/* Portrait Full-Cover Image */}
                  <img 
                    src={post.imageUrl} 
                    alt={post.authorName}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Top-to-Bottom ambient overlay to cover harsh highlights */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

                  {/* Translucent overlay footer bar matching screenshot exactly */}
                  <div className="absolute bottom-4 inset-x-4 h-12 bg-black/25 backdrop-blur-md rounded-2xl border border-white/5 flex items-center justify-between px-3.5 z-10">
                    
                    {/* Left: User Avatar & Name */}
                    <div className="flex items-center gap-2 max-w-[65%]">
                      <img 
                        src={post.authorAvatar} 
                        alt={post.authorName} 
                        className={`w-6 h-6 rounded-full object-cover border-2 ${ringColorClass}`}
                        referrerPolicy="no-referrer"
                      />
                      <span className="text-[11px] font-semibold text-gray-200 truncate">
                        {post.authorName}
                      </span>
                    </div>

                    {/* Right: Heart/Likes toggle */}
                    <button 
                      onClick={() => toggleLike(post.id)}
                      className={`flex items-center gap-1.5 cursor-pointer hover:scale-110 active:scale-95 transition-all ${
                        likeObj.liked ? 'text-pink-500' : 'text-gray-300/80 hover:text-pink-400'
                      }`}
                    >
                      <Heart 
                        className={`w-4 h-4 fill-current transition-all ${
                          likeObj.liked ? 'opacity-100 scale-110' : 'opacity-80 hover:opacity-100'
                        }`} 
                      />
                      <span className="text-[11px] font-mono font-bold leading-none">
                        {formatLikes(likeObj)}
                      </span>
                    </button>

                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
