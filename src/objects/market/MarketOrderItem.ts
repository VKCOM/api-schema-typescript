/**
 * This is auto-generated file, don't modify this file manually
 */

import { PhotosPhoto } from '../photos/PhotosPhoto';
import { MarketMarketItem } from './MarketMarketItem';
import { MarketPrice } from './MarketPrice';

// market_order_item
export interface MarketOrderItem {
  owner_id?: number;
  item_id?: number;
  price?: MarketPrice;
  quantity?: number;
  item?: MarketMarketItem;
  title?: string;
  photo?: PhotosPhoto;
  variants?: string[];
  /**
   * Extended field. Can current viewer add review for this ordered item
   */
  can_add_review?: boolean;
}
