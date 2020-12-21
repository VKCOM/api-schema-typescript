/**
 * This is auto-generated file, don't modify this file manually
 */

import { StatsCity } from './StatsCity';
import { StatsCountry } from './StatsCountry';
import { StatsSexAge } from './StatsSexAge';

// stats_views
export interface StatsViews {
  age?: StatsSexAge[];
  cities?: StatsCity[];
  countries?: StatsCountry[];
  /**
   * Number of views from mobile devices
   */
  mobile_views?: number;
  sex?: StatsSexAge[];
  sex_age?: StatsSexAge[];
  /**
   * Views number
   */
  views?: number;
  /**
   * Visitors number
   */
  visitors?: number;
}
