/**
 * This is auto-generated file, don't modify this file manually
 */

// users_online_info
export interface UsersOnlineInfo {
  /**
   * Whether you can see real online status of user or not
   */
  visible: boolean;
  /**
   * Last time we saw user being active
   */
  last_seen?: number;
  /**
   * Whether user is currently online or not
   */
  is_online?: boolean;
  /**
   * Application id from which user is currently online or was last seen online
   */
  app_id?: number;
  /**
   * Is user online from desktop app or mobile app
   */
  is_mobile?: boolean;
  /**
   * In case user online is not visible, it indicates approximate timeframe of user online
   */
  status?: 'recently' | 'last_week' | 'last_month' | 'long_ago' | 'not_show';
}
