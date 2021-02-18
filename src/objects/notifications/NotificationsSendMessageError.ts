/**
 * This is auto-generated file, don't modify this file manually
 */

// notifications_send_message_error code enumNames
export const NotificationsSendMessageErrorCodeEnumNames = {
  NOTIFICATIONS_DISABLED: 1,
  FLOOD_CONTROL_PER_HOUR: 2,
  FLOOD_CONTROL_PER_DAY: 3,
  APP_IS_NOT_INSTALLED: 4,
} as const;

// notifications_send_message_error
export interface NotificationsSendMessageError {
  /**
   * Error code
   *
   * `1` — notifications disabled
   * `2` — flood control per hour
   * `3` — flood control per day
   * `4` — app is not installed
   */
  code?: 1 | 2 | 3 | 4;
  /**
   * Error description
   */
  description?: string;
}
