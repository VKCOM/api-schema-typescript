/**
 * This is auto-generated file, don't modify this file manually
 */

import { MarketMarketCategoryTreeView } from './MarketMarketCategoryTreeView';

// market_market_category_tree
export interface MarketMarketCategoryTree {
  /**
   * Category ID
   */
  id?: number;
  /**
   * Category name
   */
  name?: string;
  /**
   * Icon name
   */
  icon_name?: string;
  children?: MarketMarketCategoryTree[];
  view?: MarketMarketCategoryTreeView;
  /**
   * SEO-friendly URL to page with category's items
   */
  url?: string;
  /**
   * SEO-friendly variant of category's name
   */
  seo_name?: string;
  /**
   * Title for category's page. Used for SEO
   */
  page_title?: string;
  /**
   * Description for category's page. Used for SEO
   */
  page_description?: string;
}
