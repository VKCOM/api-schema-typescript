/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseLikes } from '../base/BaseLikes';
import { BaseLink } from '../base/BaseLink';
import { BaseRepostsInfo } from '../base/BaseRepostsInfo';
import { PhotosPhoto } from '../photos/PhotosPhoto';
import { MarketItemOwnerInfo } from './MarketItemOwnerInfo';
import { MarketItemPromotionInfo } from './MarketItemPromotionInfo';
import { MarketMarketCategory } from './MarketMarketCategory';
import { MarketMarketItemAvailability } from './MarketMarketItemAvailability';
import { MarketPrice } from './MarketPrice';

// market_market_item_full
export interface MarketMarketItemFull {
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
  albums_ids?: number[];
  photos?: PhotosPhoto[];
  /**
   * Information whether current use can comment the item
   */
  can_comment?: 0 | 1;
  /**
   * Information about whether to show the comments tab
   */
  show_comments?: 0 | 1;
  /**
   * Information whether current use can repost the item
   */
  can_repost?: 0 | 1;
  likes?: BaseLikes;
  reposts?: BaseRepostsInfo;
  /**
   * Views number
   */
  views_count?: number;
  /**
   * Object identifier in wishlist of viewer
   */
  wishlist_item_id?: number;
  /**
   * Rating of product
   */
  rating?: number;
  /**
   * Count of product orders
   */
  orders_count?: number;
  /**
   * Information for cancel and revert order
   */
  cancel_info?: BaseLink;
  /**
   * User agreement info
   */
  user_agreement_info?: string;
  /**
   * Contains ad ID if it has
   */
  ad_id?: number;
  /**
   * Information about the group where the item is placed
   */
  owner_info?: MarketItemOwnerInfo;
  /**
   * Can the item be updated by current user?
   */
  can_edit?: boolean;
  /**
   * Can item be deleted by current user?
   */
  can_delete?: boolean;
  /**
   * Can item be restored by current user?
   */
  can_recover?: boolean;
  /**
   * Can the item be converted from a product into a service?
   */
  can_show_convert_to_service?: boolean;
  /**
   * Information about promotion of the item
   */
  promotion?: MarketItemPromotionInfo;
  /**
   * The amount of the discount if VK Pay is used for payment
   */
  vk_pay_discount?: number;
}
