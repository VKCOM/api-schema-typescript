/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseImage } from '../base/BaseImage';
import { BaseStickersList } from '../base/BaseStickersList';
import { StoreProductIcon } from './StoreProductIcon';

// store_product type enumNames
export const StoreProductTypeEnumNames = {
  STICKERS: 'stickers',
} as const;

// store_product
export interface StoreProduct {
  /**
   * Id of the product
   */
  id: number;
  /**
   * Product type
   */
  type: 'stickers';
  /**
   * Information whether sticker product wasn't used after being purchased
   */
  is_new?: boolean;
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
  stickers?: BaseStickersList;
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
}
