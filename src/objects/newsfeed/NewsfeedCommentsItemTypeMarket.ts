/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseLikes } from '../base/BaseLikes';
import { MarketMarketCategory } from '../market/MarketMarketCategory';
import { MarketMarketItemAvailability } from '../market/MarketMarketItemAvailability';
import { MarketPrice } from '../market/MarketPrice';
import { NewsfeedCommentsBase } from './NewsfeedCommentsBase';
import { NewsfeedNewsfeedItemType } from './NewsfeedNewsfeedItemType';

// newsfeed_comments_item_type_market
export interface NewsfeedCommentsItemTypeMarket {
  /**
   * Access key for the market item
   */
  access_key?: string;
  availability?: MarketMarketItemAvailability;
  /**
   * Title for button for url
   */
  button_title?: string;
  category?: MarketMarketCategory;
  category_v2?: MarketMarketCategory;
  /**
   * Date when the item has been created in Unixtime
   */
  date?: number;
  /**
   * Item description
   */
  description?: string;
  external_id?: string;
  /**
   * Item ID
   */
  id?: number;
  is_favorite?: boolean;
  /**
   * Item owner's ID
   */
  owner_id?: number;
  is_owner?: boolean;
  is_adult?: boolean;
  price?: MarketPrice;
  /**
   * URL of the preview image
   */
  thumb_photo?: string;
  /**
   * Item title
   */
  title?: string;
  /**
   * URL to item
   */
  url?: string;
  variants_grouping_id?: number;
  is_main_variant?: boolean;
  sku?: string;
  /**
   * Inventory balances
   */
  stock_amount?: number;
  /**
   * Attach for post id
   */
  post_id?: number;
  /**
   * Attach for post owner id
   */
  post_owner_id?: number;
  type?: NewsfeedNewsfeedItemType;
  source_id?: number;
  comments?: NewsfeedCommentsBase;
  likes?: BaseLikes;
}
