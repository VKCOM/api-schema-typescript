/**
 * This is auto-generated file, don't modify this file manually
 */

import { AdsAdApproved } from './AdsAdApproved';
import { AdsAdCostType } from './AdsAdCostType';
import { AdsAdStatus } from './AdsAdStatus';
import { AdsEventsRetargetingGroup } from './AdsEventsRetargetingGroup';

// ads_ad
export interface AdsAd {
  /**
   * Ad format
   */
  ad_format?: number;
  /**
   * Ad platform
   */
  ad_platform?: number | string;
  /**
   * Total limit
   */
  all_limit?: string;
  approved?: AdsAdApproved;
  /**
   * Campaign ID
   */
  campaign_id?: number;
  /**
   * Category ID
   */
  category1_id?: number;
  /**
   * Additional category ID
   */
  category2_id?: number;
  cost_type?: AdsAdCostType;
  /**
   * Cost of a click, kopecks
   */
  cpc?: string;
  /**
   * Cost of 1000 impressions, kopecks
   */
  cpm?: string;
  /**
   * Cost of an action, kopecks
   */
  cpa?: string;
  /**
   * Cost of 1000 impressions optimized, kopecks
   */
  ocpm?: string;
  /**
   * Autobidding
   */
  autobidding?: 0 | 1;
  /**
   * Max cost of target actions for autobidding, kopecks
   */
  autobidding_max_cost?: string;
  /**
   * Information whether disclaimer is enabled
   */
  disclaimer_medical?: 0 | 1;
  /**
   * Information whether disclaimer is enabled
   */
  disclaimer_specialist?: 0 | 1;
  /**
   * Information whether disclaimer is enabled
   */
  disclaimer_supplements?: 0 | 1;
  /**
   * Information whether disclaimer is enabled
   */
  disclaimer_credits?: 0 | 1;
  /**
   * Ad ID
   */
  id?: number;
  /**
   * Impressions limit
   */
  impressions_limit?: number;
  /**
   * Impressions limit period
   */
  impressions_limit_period?: number;
  /**
   * Information whether impressions are limited
   */
  impressions_limited?: 0 | 1;
  /**
   * Ad title
   */
  name?: string;
  status?: AdsAdStatus;
  /**
   * Information whether the ad is a video
   */
  video?: 0 | 1;
  /**
   * Day limit
   */
  day_limit?: string;
  /**
   * Goal type
   */
  goal_type?: number;
  /**
   * User goal type
   */
  user_goal_type?: number;
  /**
   * Age restriction
   */
  age_restriction?: number;
  /**
   * Conversion pixel id
   */
  conversion_pixel_id?: number;
  /**
   * Conversion event id
   */
  conversion_event_id?: number;
  /**
   * Create time
   */
  create_time?: number;
  /**
   * Update time
   */
  update_time?: number;
  /**
   * Start time
   */
  start_time?: number;
  /**
   * Stop time
   */
  stop_time?: number;
  /**
   * Publisher platform auto
   */
  publisher_platforms_auto?: 0 | 1;
  /**
   * Publisher platforms
   */
  publisher_platforms?: string;
  /**
   * Link url
   */
  link_url?: string;
  /**
   * Link owner id
   */
  link_owner_id?: number;
  /**
   * Link id
   */
  link_id?: number;
  /**
   * Has campaign budget optimization
   */
  has_campaign_budget_optimization?: boolean;
  /**
   * Events retargeting groups
   */
  events_retargeting_groups?: AdsEventsRetargetingGroup[];
  /**
   * Weekly schedule hours
   */
  weekly_schedule_hours?: string[];
  /**
   * Weekly schedule use holidays
   */
  weekly_schedule_use_holidays?: number;
  /**
   * Ad platform no ad network
   */
  ad_platform_no_ad_network?: number;
  /**
   * Ad platform no wall
   */
  ad_platform_no_wall?: number;
  /**
   * Disclaimer finance
   */
  disclaimer_finance?: number;
  /**
   * Disclaimer finance name
   */
  disclaimer_finance_name?: string;
  /**
   * Disclaimer finance license no
   */
  disclaimer_finance_license_no?: string;
  /**
   * is promo
   */
  is_promo?: boolean;
  /**
   * Suggested criteria
   */
  suggested_criteria?: number;
  /**
   * Link type
   */
  link_type?: number;
}
