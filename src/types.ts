export interface MemoryPhoto {
  id: string;
  url: string;
  caption: string;
  date?: string;
  location?: string;
  alt?: string;
  aspectRatio?: 'portrait' | 'square' | 'landscape';
  customStory?: string;
}

export interface LoveReason {
  id: number;
  title: string;
  description: string;
  iconName: string;
  isCustom?: boolean;
}

export interface CoupleConfig {
  partnerName: string;
  yourName: string;
  romanticTitle: string;
  anniversaryDate: string; // ISO date string e.g. "2025-09-20"
  subheading: string;
  letterTitle: string;
  letterContent: string;
  letterSignature: string;
  photos: MemoryPhoto[];
  reasons: LoveReason[];
  themeStyle: 'gothic-silver' | 'crimson-noir' | 'moonlight-amethyst';
}
