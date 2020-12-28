/**
 * This is auto-generated file, don't modify this file manually
 */

import { StatsPeriod } from '../objects/stats/StatsPeriod';
import { StatsWallpostStat } from '../objects/stats/StatsWallpostStat';

/**
 * stats.get
 *
 * Returns statistics of a community or an application.
 */

export interface StatsGetParams {
  /**
   * Community ID.
   */
  group_id?: number;
  /**
   * Application ID.
   */
  app_id?: number;
  timestamp_from?: number;
  timestamp_to?: number;
  interval?: 'all' | 'day' | 'month' | 'week' | 'year';
  intervals_count?: number;
  filters?: string;
  stats_groups?: string;
  extended?: 0 | 1;
}

// stats.get_response
export type StatsGetResponse = StatsPeriod[];

/**
 * stats.getPostReach
 *
 * Returns stats for a wall post.
 */

export interface StatsGetPostReachParams {
  /**
   * post owner community id. Specify with "-" sign.
   */
  owner_id: string;
  /**
   * wall posts id
   */
  post_ids: string;
}

// stats.getPostReach_response
export type StatsGetPostReachResponse = StatsWallpostStat[];

/**
 * stats.trackVisitor
 */

export interface StatsTrackVisitorParams {
  id: string;
}

// stats.trackVisitor_response
export type StatsTrackVisitorResponse = 1;
