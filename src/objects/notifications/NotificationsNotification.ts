/**
 * This is auto-generated file, don't modify this file manually
 */

import { NotificationsFeedback } from './NotificationsFeedback';
import { NotificationsNotificationParent } from './NotificationsNotificationParent';
import { NotificationsReply } from './NotificationsReply';

// notifications_notification
export interface NotificationsNotification {
  /**
   * Date when the event has been occurred
   */
  date?: number;
  feedback?: NotificationsFeedback;
  parent?: NotificationsNotificationParent;
  reply?: NotificationsReply;
  /**
   * Notification type
   */
  type?: string;
}
