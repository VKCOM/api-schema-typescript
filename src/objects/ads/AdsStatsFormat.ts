/**
 * This is auto-generated file, don't modify this file manually
 */

import { AdsMobileStatItem } from './AdsMobileStatItem';

// ads_stats_format
export interface AdsStatsFormat {
  /**
   * Clicks number
   */
  clicks?: number;
  /**
   * External clicks number
   */
  link_external_clicks?: number;
  /**
   * Day as YYYY-MM-DD
   */
  day?: string;
  /**
   * Impressions number
   */
  impressions?: number;
  /**
   * Events number
   */
  join_rate?: number;
  /**
   * Month as YYYY-MM
   */
  month?: string;
  /**
   * Year as YYYY
   */
  year?: number;
  /**
   * 1 if period=overall
   */
  overall?: number;
  /**
   * Reach
   */
  reach?: number;
  /**
   * Spent funds
   */
  spent?: string;
  /**
   * Video plays unique started count
   */
  video_plays_unique_started?: number;
  /**
   * Video plays unique 3 seconds count
   */
  video_plays_unique_3_seconds?: number;
  /**
   * Video plays unique 10 seconds count
   */
  video_plays_unique_10_seconds?: number;
  /**
   * Video plays unique 25 percents count
   */
  video_plays_unique_25_percents?: number;
  /**
   * Video plays unique 50 percents count
   */
  video_plays_unique_50_percents?: number;
  /**
   * Video plays unique 75 percents count
   */
  video_plays_unique_75_percents?: number;
  /**
   * Video plays unique 100 percents count
   */
  video_plays_unique_100_percents?: number;
  /**
   * Effective cost per click
   */
  effective_cost_per_click?: string;
  /**
   * Effective cost per mille
   */
  effective_cost_per_mille?: string;
  /**
   * Effective cpf
   */
  effective_cpf?: string;
  /**
   * Effective cost per message
   */
  effective_cost_per_message?: string;
  /**
   * Message sends count
   */
  message_sends?: number;
  /**
   * Message sends by anu user
   */
  message_sends_by_any_user?: number;
  /**
   * Conversions external
   */
  conversions_external?: number;
  /**
   * Conversions count
   */
  conversion_count?: number;
  /**
   * Conversions CR
   */
  conversion_cr?: string;
  /**
   * Day from
   */
  day_from?: string;
  /**
   * Day to
   */
  day_to?: string;
  /**
   * Ctr
   */
  ctr?: string;
  /**
   * Unique views count
   */
  uniq_views_count?: number;
  /**
   * Mobile app stat
   */
  mobile_app_stat?: AdsMobileStatItem[];
}
