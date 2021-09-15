/**
 * This is auto-generated file, don't modify this file manually
 */

import { MarketCurrency } from '../market/MarketCurrency';
import { MarketPrice } from '../market/MarketPrice';

// groups_market_info
export interface GroupsMarketInfo {
  /**
   * Market type
   */
  type?: string;
  /**
   * Contact person ID
   */
  contact_id?: number;
  currency?: MarketCurrency;
  /**
   * Currency name
   */
  currency_text?: string;
  /**
   * Information whether the market is enabled
   */
  enabled?: 0 | 1;
  /**
   * Main market album ID
   */
  main_album_id?: number;
  /**
   * Maximum price
   */
  price_max?: string;
  /**
   * Minimum price
   */
  price_min?: string;
  min_order_price?: MarketPrice;
}
