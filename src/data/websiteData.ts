/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnimeCharacter, GameplayCard, HardwareSpec, HardwareLifestyleCard, CommunityPost } from '../types';

// Characters data mapping to generated images
export const CHAR_PURPLE: AnimeCharacter = {
  id: 'purple',
  name: '星野奈奈',
  avatarUrl: '/assets/images/anime_purple_1779262530493.png',
  themeColor: '#9d53ff',
  description: '星空系虚拟歌姬',
  statusText: 'Hi~ 很高兴在真实世界与你相遇！'
};

export const CHAR_PINK: AnimeCharacter = {
  id: 'pink',
  name: '樱桃萌萌',
  avatarUrl: '/assets/images/anime_pink_1779262555636.png',
  themeColor: '#ec4899',
  description: '治愈系魔法少女',
  statusText: '今天也要元气满满哦，加油！'
};

export const CHAR_DARK: AnimeCharacter = {
  id: 'dark',
  name: '幽影小月',
  avatarUrl: '/assets/images/anime_dark_1779262576956.png',
  themeColor: '#3b82f6',
  description: '酷飒赛博机甲姬',
  statusText: '系统安全等级正常，今天准备去哪？'
};

export const CHAR_BLUE: AnimeCharacter = {
  id: 'blue',
  name: '千川澄子',
  avatarUrl: '/assets/images/anime_blue_1779262596431.png',
  themeColor: '#06b6d4',
  description: '温柔的听风少女',
  statusText: '聆听风的声音，陪伴是最长情的告白♥'
};

export const CHARACTERS_LIST = [CHAR_PURPLE, CHAR_PINK, CHAR_DARK, CHAR_BLUE];

// 1. "丰富的内容玩法" List (6 Gameplay Cards)
export const GAMEPLAY_CARDS: GameplayCard[] = [
  {
    id: 'static_image',
    title: '静态图片',
    description: '高清图片细腻呈现 你的精美收藏',
    iconName: 'Image',
    character: CHAR_PURPLE
  },
  {
    id: 'gif_dynamic',
    title: 'GIF 动态',
    description: '流畅播放 GIF 图像 让角色动起来',
    iconName: 'FileVideo',
    character: CHAR_PINK
  },
  {
    id: 'video_playback',
    title: '视频播放',
    description: '支持短视频循环播放 精彩瞬间不错过',
    iconName: 'Clapperboard',
    character: CHAR_DARK
  },
  {
    id: 'danmaku_interaction',
    title: '弹幕互动',
    description: '发送弹幕到设备 打造专属互动空间',
    iconName: 'MessageSquareText',
    character: CHAR_BLUE,
    danmakuList: ['好可爱！', '爱了爱了！', '太棒啦！', '求抱抱啦~']
  },
  {
    id: 'ai_generation',
    title: 'AI 生成',
    description: 'AI 一键生成专属角色 创意无限可能',
    iconName: 'Sparkles',
    isNew: true,
    character: CHAR_purple_or_mix()
  },
  {
    id: 'cloud_sync',
    title: '云端同步',
    description: '多设备同步管理 内容随心切换',
    iconName: 'CloudLightning',
    character: CHAR_blue_small()
  }
];

function CHAR_purple_or_mix(): AnimeCharacter {
  return CHAR_PURPLE;
}

function CHAR_blue_small(): AnimeCharacter {
  return CHAR_BLUE;
}

// 2. Hardware Specs
export const HARDWARE_SPECS: HardwareSpec[] = [
  { icon: 'CircleDot', label: '1.28\'\' 圆形屏幕', sublabel: '圆形高清显示屏，饱满细腻' },
  { icon: 'Grid', label: '240×240 分辨率', sublabel: '像素级显色，精美画质' },
  { icon: 'BatteryCharging', label: '超长续航 30天+', sublabel: '极低能耗，长时间陪伴不间断' },
  { icon: 'Magnet', label: '磁吸底座/挂绳', sublabel: '多样佩戴挂载方式，便携实用' }
];

// 3. Hardware Lifestyles
export const LIFESTYLE_CARDS: HardwareLifestyleCard[] = [
  {
    id: 'bag',
    title: '包包挂件',
    subtitle: '随身携带，时刻陪伴',
    bgImageUrl: '/assets/images/bag_badge_1779262620121.png',
    character: CHAR_DARK
  },
  {
    id: 'desktop',
    title: '桌面摆件',
    subtitle: '点亮你的桌面空间',
    bgImageUrl: '/assets/images/desktop_badge_1779262641284.png',
    character: CHAR_PURPLE
  },
  {
    id: 'portable',
    title: '轻巧便携',
    subtitle: '小巧轻便，握在手心',
    bgImageUrl: '/assets/images/hand_badge_1779262662198.png',
    character: CHAR_PINK
  }
];

// 4. Community Posts (5 Posts from different users)
export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 'post1',
    title: '今天带妮妮出门散步啦，回头率超高！大家也觉得好看吗？',
    imageUrl: '/assets/images/community_post_1_1779264668113.png',
    authorName: '星野奈奈子',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
    likes: '1.2k',
    character: CHAR_PURPLE
  },
  {
    id: 'post2',
    title: '我的赛博桌搭拼图终于齐了！KiraHub放在键盘旁边真是绝配',
    imageUrl: '/assets/images/community_post_2_1779264685847.png',
    authorName: 'Kira酱',
    authorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop',
    likes: '876',
    character: CHAR_DARK
  },
  {
    id: 'post3',
    title: '挂在背包上当守护挂件，粉粉的长头发每天看着都超开心~',
    imageUrl: '/assets/images/community_post_3_1779264706478.png',
    authorName: '小颜软糖',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    likes: '652',
    character: CHAR_PINK
  },
  {
    id: 'post4',
    title: '桌面上最可爱的听风少女澄子，和我的小多肉植物同框拍照',
    imageUrl: '/assets/images/community_post_4_1779264724645.png',
    authorName: '月下喵喵',
    authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
    likes: '1k',
    character: CHAR_BLUE
  },
  {
    id: 'post5',
    title: '带着小小的KiraHub出差，在高铁小桌板上它就是最懂我的伴侣',
    imageUrl: '/assets/images/community_post_5_1779264738892.png',
    authorName: '不吃鱼的猫',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
    likes: '990',
    character: CHAR_BLUE
  }
];
