/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseStickerNew } from '../objects/base/BaseStickerNew';
import { StoreProduct } from '../objects/store/StoreProduct';
import { StoreStickersKeyword } from '../objects/store/StoreStickersKeyword';

/**
 * store.addStickersToFavorite
 *
 * Adds given sticker IDs to the list of user's favorite stickers
 */

export interface StoreAddStickersToFavoriteParams {
  /**
   * Sticker IDs to be added
   */
  sticker_ids: string;
}

// store.addStickersToFavorite_response
export type StoreAddStickersToFavoriteResponse = 1;

/**
 * store.getFavoriteStickers
 */

export interface StoreGetFavoriteStickersParams {}

// store.getFavoriteStickers_response
export interface StoreGetFavoriteStickersResponse {
  /**
   * Count of favorite stickers
   */
  count?: number;
  /**
   * List of sticker objects
   */
  items?: BaseStickerNew[];
}

/**
 * store.getProducts
 */

export interface StoreGetProductsParams {
  type?: string;
  merchant?: string;
  section?: string;
  product_ids?: string;
  filters?: string;
  extended?: 0 | 1;
}

// store.getProducts_response
export interface StoreGetProductsResponse {
  items?: StoreProduct[];
  count?: number;
}

/**
 * store.getStickersKeywords
 */

export interface StoreGetStickersKeywordsParams {
  stickers_ids?: string;
  products_ids?: string;
  aliases?: 0 | 1;
  all_products?: 0 | 1;
  need_stickers?: 0 | 1;
  vmoji_promo?: 0 | 1;
}

// store.getStickersKeywords_response
export interface StoreGetStickersKeywordsResponse {
  count?: number;
  dictionary?: StoreStickersKeyword[];
  /**
   * Total count of chunks to load
   */
  chunks_count?: number;
  /**
   * Chunks version hash
   */
  chunks_hash?: string;
}

/**
 * store.removeStickersFromFavorite
 *
 * Removes given sticker IDs from the list of user's favorite stickers
 */

export interface StoreRemoveStickersFromFavoriteParams {
  /**
   * Sticker IDs to be removed
   */
  sticker_ids: string;
}

// store.removeStickersFromFavorite_response
export type StoreRemoveStickersFromFavoriteResponse = 1;
