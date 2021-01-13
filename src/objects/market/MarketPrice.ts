/**
 * This is auto-generated file, don't modify this file manually
 */

import { MarketCurrency } from './MarketCurrency';

// market_price
export interface MarketPrice {
  /**
   * Amount
   */
  amount: string;
  currency: MarketCurrency;
  discount_rate?: number;
  old_amount?: string;
  /**
   * Text
   */
  text: string;
  /**
   * Textual representation of old price
   */
  old_amount_text?: string;
}
