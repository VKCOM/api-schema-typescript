/**
 * This is auto-generated file, don't modify this file manually
 */

import { UtilsStatsCity } from './UtilsStatsCity';
import { UtilsStatsCountry } from './UtilsStatsCountry';
import { UtilsStatsSexAge } from './UtilsStatsSexAge';

// utils_stats_extended
export interface UtilsStatsExtended {
  cities?: UtilsStatsCity[];
  countries?: UtilsStatsCountry[];
  sex_age?: UtilsStatsSexAge[];
  /**
   * Start time
   */
  timestamp?: number;
  /**
   * Total views number
   */
  views?: number;
}
