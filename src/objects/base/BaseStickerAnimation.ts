/**
 * This is auto-generated file, don't modify this file manually
 */

// base_sticker_animation type enumNames
export const BaseStickerAnimationTypeEnumNames = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

// base_sticker_animation
export interface BaseStickerAnimation {
  /**
   * Type of animation script
   */
  type?: 'light' | 'dark';
  /**
   * URL of animation script
   */
  url?: string;
}
