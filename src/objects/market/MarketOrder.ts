/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseLink } from '../base/BaseLink';
import { MarketOrderItem } from './MarketOrderItem';
import { MarketPrice } from './MarketPrice';

// market_order
export interface MarketOrder {
  id: number;
  group_id: number;
  user_id: number;
  display_order_id?: string;
  date: number;
  status: number;
  items_count: number;
  track_number?: string;
  track_link?: string;
  comment?: string;
  address?: string;
  merchant_comment?: string;
  weight?: number;
  total_price: MarketPrice;
  /**
   * Several order items for preview
   */
  preview_order_items?: MarketOrderItem[];
  /**
   * Information for cancel and revert order
   */
  cancel_info?: BaseLink;
}
