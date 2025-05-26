/**
 * This is auto-generated file, don't modify this file manually
 */

import { FriendsFriendStatusStatus } from './FriendsFriendStatusStatus';

// friends_friend_extended_status
export interface FriendsFriendExtendedStatus {
  friend_status?: FriendsFriendStatusStatus;
  /**
   * MD5 hash for the result validation
   */
  sign?: string;
  /**
   * User ID
   */
  user_id?: number;
  /**
   * Is friend request from other user unread
   */
  is_request_unread?: boolean;
}
