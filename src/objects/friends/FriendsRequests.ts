/**
 * This is auto-generated file, don't modify this file manually
 */

import { FriendsRequestsMutual } from './FriendsRequestsMutual';

// friends_requests
export interface FriendsRequests {
  /**
   * ID of the user by whom friend has been suggested
   */
  from?: string;
  mutual?: FriendsRequestsMutual;
  /**
   * User ID
   */
  user_id?: number;
}
