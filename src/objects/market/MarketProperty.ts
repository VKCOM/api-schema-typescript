/**
 * This is auto-generated file, don't modify this file manually
 */

import { MarketPropertyVariant } from './MarketPropertyVariant';

// market_property
export interface MarketProperty {
  id?: number;
  /**
   * Property name
   */
  title?: string;
  /**
   * Property type
   */
  type?: 'text' | 'color';
  variants?: MarketPropertyVariant[];
}
