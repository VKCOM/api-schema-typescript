/**
 * This is auto-generated file, don't modify this file manually
 */

// notifications_send_message_error code enum
export enum NotificationsSendMessageErrorCodeEnum {
  NOTIFICATIONS_DISABLED = 1,
  FLOOD_CONTROL_PER_HOUR = 2,
  FLOOD_CONTROL_PER_DAY = 3,
  APP_IS_NOT_INSTALLED = 4,
}

// notifications_send_message_error
export interface NotificationsSendMessageError {
  /**
   * Error code
   */
  code?: NotificationsSendMessageErrorCodeEnum;
  /**
   * Error description
   */
  description?: string;
}
