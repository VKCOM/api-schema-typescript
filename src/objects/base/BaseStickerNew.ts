/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseImage } from './BaseImage';
import { BaseStickerAnimation } from './BaseStickerAnimation';

// base_sticker_new
export interface BaseStickerNew {
  inner_type?: 'base_sticker_new';
  /**
   * Sticker ID
   */
  sticker_id?: number;
  /**
   * Pack ID
   */
  product_id?: number;
  images?: BaseImage[];
  images_with_background?: BaseImage[];
  /**
   * URL of sticker animation script
   */
  animation_url?: string;
  /**
   * Array of sticker animation script objects
   */
  animations?: BaseStickerAnimation[];
  /**
   * Information whether the sticker is allowed
   */
  is_allowed?: boolean;
}
