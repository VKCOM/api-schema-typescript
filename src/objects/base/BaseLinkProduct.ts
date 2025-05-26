/**
 * This is auto-generated file, don't modify this file manually
 */

import { MarketMarketCategoryNested } from '../market/MarketMarketCategoryNested';
import { MarketPrice } from '../market/MarketPrice';
import { BaseGeoCoordinates } from './BaseGeoCoordinates';
import { BaseLinkProductStatus } from './BaseLinkProductStatus';

// base_link_product
export interface BaseLinkProduct {
  price?: MarketPrice;
  merchant?: string;
  category?: string | MarketMarketCategoryNested;
  geo?: BaseGeoCoordinates;
  distance?: number;
  city?: string;
  status?: BaseLinkProductStatus;
  orders_count?: number;
  type?: 'product';
}
