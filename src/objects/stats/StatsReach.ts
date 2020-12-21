/**
 * This is auto-generated file, don't modify this file manually
 */

import { StatsCity } from './StatsCity';
import { StatsCountry } from './StatsCountry';
import { StatsSexAge } from './StatsSexAge';

// stats_reach
export interface StatsReach {
  age?: StatsSexAge[];
  cities?: StatsCity[];
  countries?: StatsCountry[];
  /**
   * Reach count from mobile devices
   */
  mobile_reach?: number;
  /**
   * Reach count
   */
  reach?: number;
  /**
   * Subscribers reach count
   */
  reach_subscribers?: number;
  sex?: StatsSexAge[];
  sex_age?: StatsSexAge[];
}
