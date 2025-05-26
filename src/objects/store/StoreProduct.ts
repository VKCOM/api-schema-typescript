/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseImage } from '../base/BaseImage';
import { BaseStickerNew } from '../base/BaseStickerNew';
import { StoreProductIcon } from './StoreProductIcon';

// store_product
export interface StoreProduct {
  /**
   * Id of the product
   */
  id?: number;
  /**
   * Product type
   */
  type?: 'stickers';
  /**
   * Information whether sticker product wasn't used after being purchased
   */
  is_new?: boolean;
  /**
   * Product copyright information
   */
  copyright?: string;
  /**
   * Id of the base pack (for sticker pack styles)
   */
  base_id?: number;
  /**
   * Array of style ids available for the sticker pack
   */
  style_ids?: number[];
  /**
   * Information whether the product is purchased (1 - yes, 0 - no)
   */
  purchased?: 0 | 1;
  /**
   * Information whether the product is active (1 - yes, 0 - no)
   */
  active?: 0 | 1;
  /**
   * Information whether the product is promoted (1 - yes, 0 - no)
   */
  promoted?: 0 | 1;
  /**
   * Date (Unix time) when the product was purchased
   */
  purchase_date?: number;
  /**
   * Title of the product
   */
  title?: string;
  stickers?: BaseStickerNew[];
  /**
   * Array of style sticker ids (for sticker pack styles)
   */
  style_sticker_ids?: number[];
  /**
   * Array of icon images or icon set object of the product (for stickers product type)
   */
  icon?: StoreProductIcon;
  /**
   * Array of preview images of the product (for stickers product type)
   */
  previews?: BaseImage[];
  /**
   * Information whether the product is an animated sticker pack (for stickers product type)
   */
  has_animation?: boolean;
  /**
   * Subtitle of the product
   */
  subtitle?: string;
  payment_region?: string;
  /**
   * Information whether sticker pack is a vmoji pack
   */
  is_vmoji?: boolean;
  title_lang_key?: string;
  description_lang_key?: string;
  url?: string;
  /**
   * Information whether the product is a sticker pack with popup stickers (for stickers product type)
   */
  is_popup?: boolean;
}
