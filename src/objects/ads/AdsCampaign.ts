/**
 * This is auto-generated file, don't modify this file manually
 */

import { AdsCampaignStatus } from './AdsCampaignStatus';
import { AdsCampaignType } from './AdsCampaignType';

// ads_campaign
export interface AdsCampaign {
  /**
   * Amount of active ads in campaign
   */
  ads_count?: number;
  /**
   * Campaign's total limit, rubles
   */
  all_limit: string;
  /**
   * Campaign create time, as Unixtime
   */
  create_time?: number;
  /**
   * Campaign goal type
   */
  goal_type?: number;
  /**
   * Campaign user goal type
   */
  user_goal_type?: number;
  /**
   * Shows if Campaign Budget Optimization is on
   */
  is_cbo_enabled?: boolean;
  /**
   * Campaign's day limit, rubles
   */
  day_limit: string;
  /**
   * Campaign ID
   */
  id: number;
  /**
   * Campaign title
   */
  name: string;
  /**
   * Campaign start time, as Unixtime
   */
  start_time: number;
  status: AdsCampaignStatus;
  /**
   * Campaign stop time, as Unixtime
   */
  stop_time: number;
  type: AdsCampaignType;
  /**
   * Campaign update time, as Unixtime
   */
  update_time?: number;
  /**
   * Limit of views per user per campaign
   */
  views_limit?: number;
}
