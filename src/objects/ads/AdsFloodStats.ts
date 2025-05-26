/**
 * This is auto-generated file, don't modify this file manually
 */

import { AdsFloodStatsByUserItem } from './AdsFloodStatsByUserItem';

// ads_flood_stats
export interface AdsFloodStats {
  /**
   * Requests left
   */
  left?: number;
  /**
   * Time to refresh in seconds
   */
  refresh?: number;
  /**
   * Used requests per user
   */
  stats_by_user?: AdsFloodStatsByUserItem[];
}
