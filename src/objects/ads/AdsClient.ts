/**
 * This is auto-generated file, don't modify this file manually
 */

import { AdsOrdData } from './AdsOrdData';

// ads_client
export interface AdsClient {
  /**
   * Client's total limit, rubles
   */
  all_limit?: string;
  /**
   * Client's day limit, rubles
   */
  day_limit?: string;
  /**
   * Client ID
   */
  id?: number;
  /**
   * Client name
   */
  name?: string;
  /**
   * Ord data
   */
  ord_data?: AdsOrdData;
}
