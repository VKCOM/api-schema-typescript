/**
 * This is auto-generated file, don't modify this file manually
 */

import { AdsAdApproved } from './AdsAdApproved';
import { AdsAdCostType } from './AdsAdCostType';
import { AdsAdStatus } from './AdsAdStatus';

// ads_ad
export interface AdsAd {
  /**
   * Ad format
   */
  ad_format: number;
  /**
   * Ad platform
   */
  ad_platform?: number | string;
  /**
   * Total limit
   */
  all_limit: number;
  approved: AdsAdApproved;
  /**
   * Campaign ID
   */
  campaign_id: number;
  /**
   * Category ID
   */
  category1_id?: number;
  /**
   * Additional category ID
   */
  category2_id?: number;
  cost_type: AdsAdCostType;
  /**
   * Cost of a click, kopecks
   */
  cpc?: number;
  /**
   * Cost of 1000 impressions, kopecks
   */
  cpm?: number;
  /**
   * Cost of an action, kopecks
   */
  cpa?: number;
  /**
   * Cost of 1000 impressions optimized, kopecks
   */
  ocpm?: number;
  /**
   * Max cost of target actions for autobidding, kopecks
   */
  autobidding_max_cost?: number;
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
   * Ad ID
   */
  id: number;
  /**
   * Impressions limit
   */
  impressions_limit?: number;
  /**
   * Information whether impressions are limited
   */
  impressions_limited?: 0 | 1;
  /**
   * Ad title
   */
  name: string;
  status: AdsAdStatus;
  /**
   * Information whether the ad is a video
   */
  video?: 0 | 1;
}
