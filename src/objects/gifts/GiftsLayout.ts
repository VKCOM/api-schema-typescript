/**
 * This is auto-generated file, don't modify this file manually
 */

// gifts_layout
export interface GiftsLayout {
  /**
   * Gift ID
   */
  id?: number;
  /**
   * URL of the preview image with 512 px in width
   */
  thumb_512?: string;
  /**
   * URL of the preview image with 256 px in width
   */
  thumb_256?: string;
  /**
   * URL of the preview image with 48 px in width
   */
  thumb_48?: string;
  /**
   * URL of the preview image with 96 px in width
   */
  thumb_96?: string;
  /**
   * ID of the sticker pack, if the gift is representing one
   */
  stickers_product_id?: number;
  /**
   * Information whether gift represents a stickers style
   */
  is_stickers_style?: boolean;
  /**
   * ID of the build of constructor gift
   */
  build_id?: string;
  /**
   * Keywords used for search
   */
  keywords?: string;
}
