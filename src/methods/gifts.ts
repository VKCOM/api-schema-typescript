/**
 * This is auto-generated file, don't modify this file manually
 */

import { GiftsGift } from '../objects/gifts/GiftsGift';

/**
 * gifts.get
 *
 * Returns a list of user gifts.
 */

export interface GiftsGetParams {
  /**
   * User ID.
   */
  user_id?: number;
  /**
   * Number of gifts to return.
   */
  count?: number;
  /**
   * Offset needed to return a specific subset of results.
   */
  offset?: number;
}

// gifts.get_response
export interface GiftsGetResponse {
  /**
   * Total number
   */
  count?: number;
  items?: GiftsGift[];
}
