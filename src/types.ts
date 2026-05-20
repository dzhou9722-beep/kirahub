/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AnimeCharacter {
  id: string;
  name: string;
  avatarUrl: string;
  themeColor: string;
  description?: string;
  statusText?: string;
}

export interface GameplayCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  isNew?: boolean;
  character: AnimeCharacter;
  danmakuList?: string[];
}

export interface HardwareSpec {
  icon: string;
  label: string;
  sublabel: string;
}

export interface HardwareLifestyleCard {
  id: string;
  title: string;
  subtitle: string;
  bgImageUrl: string;
  character: AnimeCharacter;
}

export interface CommunityPost {
  id: string;
  title: string;
  imageUrl: string;
  authorName: string;
  authorAvatar: string;
  likes: string;
  character: AnimeCharacter;
}
