/**
 * This is auto-generated file, don't modify this file manually
 */

import { AdsStatsAge } from './AdsStatsAge';
import { AdsStatsCities } from './AdsStatsCities';
import { AdsStatsSex } from './AdsStatsSex';
import { AdsStatsSexAge } from './AdsStatsSexAge';

// ads_demostats_format
export interface AdsDemostatsFormat {
  age?: AdsStatsAge[];
  cities?: AdsStatsCities[];
  /**
   * Day as YYYY-MM-DD
   */
  day?: string;
  day_from?: string;
  day_to?: string;
  /**
   * Month as YYYY-MM
   */
  month?: string;
  /**
   * 1 if period=overall
   */
  overall?: number;
  sex?: AdsStatsSex[];
  sex_age?: AdsStatsSexAge[];
}
