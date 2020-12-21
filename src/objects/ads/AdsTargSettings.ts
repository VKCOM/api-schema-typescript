/**
 * This is auto-generated file, don't modify this file manually
 */

import { AdsCriteriaSex } from './AdsCriteriaSex';

// ads_targ_settings
export interface AdsTargSettings {
  /**
   * Ad ID
   */
  id?: number;
  /**
   * Campaign ID
   */
  campaign_id?: number;
  /**
   * Age from
   */
  age_from?: number;
  /**
   * Age to
   */
  age_to?: number;
  /**
   * Apps IDs
   */
  apps?: string;
  /**
   * Apps IDs to except
   */
  apps_not?: string;
  /**
   * Days to birthday
   */
  birthday?: number;
  /**
   * Cities IDs
   */
  cities?: string;
  /**
   * Cities IDs to except
   */
  cities_not?: string;
  /**
   * Country ID
   */
  country?: number;
  /**
   * Districts IDs
   */
  districts?: string;
  /**
   * Communities IDs
   */
  groups?: string;
  /**
   * Interests categories IDs
   */
  interest_categories?: string;
  /**
   * Interests
   */
  interests?: string;
  /**
   * Information whether the user has proceeded VK payments before
   */
  paying?: 0 | 1;
  /**
   * Positions IDs
   */
  positions?: string;
  /**
   * Religions IDs
   */
  religions?: string;
  /**
   * Retargeting groups IDs
   */
  retargeting_groups?: string;
  /**
   * Retargeting groups IDs to except
   */
  retargeting_groups_not?: string;
  /**
   * School graduation year from
   */
  school_from?: number;
  /**
   * School graduation year to
   */
  school_to?: number;
  /**
   * Schools IDs
   */
  schools?: string;
  sex?: AdsCriteriaSex;
  /**
   * Stations IDs
   */
  stations?: string;
  /**
   * Relationship statuses
   */
  statuses?: string;
  /**
   * Streets IDs
   */
  streets?: string;
  /**
   * Travellers only
   */
  travellers?: 1;
  /**
   * University graduation year from
   */
  uni_from?: number;
  /**
   * University graduation year to
   */
  uni_to?: number;
  /**
   * Browsers
   */
  user_browsers?: string;
  /**
   * Devices
   */
  user_devices?: string;
  /**
   * Operating systems
   */
  user_os?: string;
}
