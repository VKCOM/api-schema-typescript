/**
 * This is auto-generated file, don't modify this file manually
 */

import { AdsObjectType } from './AdsObjectType';
import { AdsStatsFormat } from './AdsStatsFormat';
import { AdsStatsViewsTimes } from './AdsStatsViewsTimes';

// ads_stats
export interface AdsStats {
  /**
   * Object ID
   */
  id?: number;
  stats?: AdsStatsFormat[];
  type?: AdsObjectType;
  views_times?: AdsStatsViewsTimes;
}
