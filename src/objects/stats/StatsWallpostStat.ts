/**
 * This is auto-generated file, don't modify this file manually
 */

import { StatsSexAge } from './StatsSexAge';

// stats_wallpost_stat
export interface StatsWallpostStat {
  post_id?: number;
  /**
   * Hidings number
   */
  hide?: number;
  /**
   * People have joined the group
   */
  join_group?: number;
  /**
   * Link clickthrough
   */
  links?: number;
  /**
   * Subscribers reach
   */
  reach_subscribers?: number;
  reach_subscribers_count?: number;
  /**
   * Total reach
   */
  reach_total?: number;
  reach_total_count?: number;
  reach_viral?: number;
  reach_ads?: number;
  /**
   * Reports number
   */
  report?: number;
  /**
   * Clickthrough to community
   */
  to_group?: number;
  /**
   * Unsubscribed members
   */
  unsubscribe?: number;
  sex_age?: StatsSexAge[];
}
