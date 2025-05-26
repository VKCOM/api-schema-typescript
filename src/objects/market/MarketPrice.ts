/**
 * This is auto-generated file, don't modify this file manually
 */

import { MarketCurrency } from './MarketCurrency';

// market_price price_type enumNames
export const MarketPricePriceTypeEnumNames = {
  EXACT: 0,
  RANGE: 2,
  BY_AGREEMENT: 3,
} as const;

// market_price price_unit enumNames
export const MarketPricePriceUnitEnumNames = {
  ITEM: 0,
  HOUR: 2,
  M3: 3,
  M2: 4,
} as const;

// market_price
export interface MarketPrice {
  /**
   * Amount
   */
  amount?: string;
  /**
   * Amount to for price_type=2
   */
  amount_to?: string;
  /**
   * `0` — exact
   * `2` — range
   * `3` — by_agreement
   */
  price_type?: 0 | 2 | 3;
  /**
   * `0` — item
   * `2` — hour
   * `3` — m3
   * `4` — m2
   */
  price_unit?: 0 | 2 | 3 | 4;
  currency?: MarketCurrency;
  discount_rate?: number;
  old_amount?: string;
  /**
   * Text
   */
  text?: string;
  /**
   * Textual representation of old price
   */
  old_amount_text?: string;
}
