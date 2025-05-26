/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseImage } from '../base/BaseImage';
import { MarketOwnerType } from './MarketOwnerType';

// market_item_owner_info
export interface MarketItemOwnerInfo {
  /**
   * Avatar of the group
   */
  avatar?: BaseImage[];
  /**
   * Name of the group
   */
  name?: string;
  /**
   * Category of the item or description of the group
   */
  category?: string;
  /**
   * Link to the section of the group
   */
  category_url?: string;
  /**
   * Is the group is VK corporated market
   */
  is_corporated_market?: boolean;
  /**
   * Type of the market group
   */
  market_type?: MarketOwnerType;
}
