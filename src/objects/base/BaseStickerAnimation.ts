/**
 * This is auto-generated file, don't modify this file manually
 */

// base_sticker_animation type enum
export enum BaseStickerAnimationTypeEnum {
  LIGHT = 'light',
  DARK = 'dark',
}

// base_sticker_animation
export interface BaseStickerAnimation {
  /**
   * Type of animation script
   */
  type?: BaseStickerAnimationTypeEnum;
  /**
   * URL of animation script
   */
  url?: string;
}
