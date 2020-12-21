/**
 * This is auto-generated file, don't modify this file manually
 */

import { AdsCampaignStatus } from './AdsCampaignStatus';
import { AdsCampaignType } from './AdsCampaignType';

// ads_campaign
export interface AdsCampaign {
  /**
   * Campaign's total limit, rubles
   */
  all_limit: string;
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
}
