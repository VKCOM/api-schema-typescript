/**
 * This is auto-generated file, don't modify this file manually
 */

import { AppsApp } from '../objects/apps/AppsApp';
import { GroupsGroup } from '../objects/groups/GroupsGroup';
import { NotificationsNotificationItem } from '../objects/notifications/NotificationsNotificationItem';
import { NotificationsSendMessageItem } from '../objects/notifications/NotificationsSendMessageItem';
import { PhotosPhoto } from '../objects/photos/PhotosPhoto';
import { UsersUser } from '../objects/users/UsersUser';
import { VideoVideoFull } from '../objects/video/VideoVideoFull';

/**
 * notifications.get
 *
 * Returns a list of notifications about other users' feedback to the current user's wall posts.
 */

export interface NotificationsGetParams {
  /**
   * Number of notifications to return.
   */
  count?: number;
  start_from?: string;
  /**
   * Type of notifications to return: 'wall' - wall posts, 'mentions' - mentions in wall posts, comments, or topics, 'comments' - comments to wall posts, photos, and videos, 'likes' - likes, 'reposted' - wall posts that are copied from the current user's wall, 'followers' - new followers, 'friends' - accepted friend requests
   */
  filters?: string;
  /**
   * Earliest timestamp (in Unix time) of a notification to return. By default, 24 hours ago.
   */
  start_time?: number;
  /**
   * Latest timestamp (in Unix time) of a notification to return. By default, the current time.
   */
  end_time?: number;
}

// notifications.get_response
export interface NotificationsGetResponse {
  /**
   * Total number
   */
  count?: number;
  items?: NotificationsNotificationItem[];
  profiles?: UsersUser[];
  groups?: GroupsGroup[];
  /**
   * Time when user has been checked notifications last time
   */
  last_viewed?: number;
  photos?: PhotosPhoto[];
  videos?: VideoVideoFull[];
  apps?: AppsApp[];
  next_from?: string;
  ttl?: number;
}

/**
 * notifications.markAsViewed
 *
 * Resets the counter of new notifications about other users' feedback to the current user's wall posts.
 */

export interface NotificationsMarkAsViewedParams {}

// notifications.markAsViewed_response
/**
 * Result
 */
export type NotificationsMarkAsViewedResponse = 0 | 1;

/**
 * notifications.sendMessage
 */

export interface NotificationsSendMessageParams {
  user_ids: string;
  message: string;
  fragment?: string;
  group_id?: number;
  random_id?: number;
  /**
   * Type of sending (delivering) notifications: 'immediately' - push and bell notifications will be delivered as soon as possible, 'delayed' - push and bell notifications will be delivered in the most comfortable time for the user, 'delayed_push' - only push notifications will be delivered in the most comfortable time, while the bell notifications will be delivered as soon as possible
   */
  sending_mode?: 'delayed' | 'delayed_push' | 'immediately' | 'without_push';
}

// notifications.sendMessage_response
export type NotificationsSendMessageResponse = NotificationsSendMessageItem[];
