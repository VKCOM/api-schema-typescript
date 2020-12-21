/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseSex } from '../base/BaseSex';
import { FriendsFriendStatusStatus } from '../friends/FriendsFriendStatusStatus';
import { FriendsRequestsMutual } from '../friends/FriendsRequestsMutual';
import { UsersOnlineInfo } from './UsersOnlineInfo';

// users_user
export interface UsersUser {
  /**
   * Returns if a profile is deleted or blocked
   */
  deactivated?: string;
  /**
   * User first name
   */
  first_name: string;
  /**
   * Returns if a profile is hidden.
   */
  hidden?: number;
  /**
   * User ID
   */
  id: number;
  /**
   * User last name
   */
  last_name: string;
  can_access_closed?: boolean;
  is_closed?: boolean;
  /**
   * User sex
   */
  sex?: BaseSex;
  /**
   * Domain name of the user's page
   */
  screen_name?: string;
  /**
   * URL of square photo of the user with 50 pixels in width
   */
  photo_50?: string;
  /**
   * URL of square photo of the user with 100 pixels in width
   */
  photo_100?: string;
  online_info?: UsersOnlineInfo;
  /**
   * Information whether the user is online
   */
  online?: 0 | 1;
  /**
   * Information whether the user is online in mobile site or application
   */
  online_mobile?: 0 | 1;
  /**
   * Application ID
   */
  online_app?: number;
  /**
   * Information whether the user is verified
   */
  verified?: 0 | 1;
  /**
   * Information whether the user has a "fire" pictogram.
   */
  trending?: 0 | 1;
  friend_status?: FriendsFriendStatusStatus;
  mutual?: FriendsRequestsMutual;
}
