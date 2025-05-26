/**
 * This is auto-generated file, don't modify this file manually
 */

import { MarketPrice } from './MarketPrice';

// market_market_item_basic_with_group
export interface MarketMarketItemBasicWithGroup {
  /**
   * Item ID
   */
  id?: number;
  /**
   * Item owner's ID
   */
  owner_id?: number;
  /**
   * Item title
   */
  title?: string;
  price?: MarketPrice;
  /**
   * URL of the preview image
   */
  thumb_photo?: string;
  is_favorite?: boolean;
  is_group_verified?: boolean;
  group_name?: string;
  group_link?: string;
  is_owner?: boolean;
  is_adult?: boolean;
}
