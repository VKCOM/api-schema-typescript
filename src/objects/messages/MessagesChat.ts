/**
 * This is auto-generated file, don't modify this file manually
 */

import { MessagesChatPushSettings } from './MessagesChatPushSettings';

// messages_chat
export interface MessagesChat {
  /**
   * Chat creator ID
   */
  admin_id: number;
  /**
   * Chat ID
   */
  id: number;
  /**
   * Shows that user has been kicked from the chat
   */
  kicked?: 0 | 1;
  /**
   * Shows that user has been left the chat
   */
  left?: 0 | 1;
  /**
   * URL of the preview image with 100 px in width
   */
  photo_100?: string;
  /**
   * URL of the preview image with 200 px in width
   */
  photo_200?: string;
  /**
   * URL of the preview image with 50 px in width
   */
  photo_50?: string;
  push_settings?: MessagesChatPushSettings;
  /**
   * Chat title
   */
  title?: string;
  /**
   * Chat type
   */
  type: string;
  users: number[];
  /**
   * If provided photo is default
   */
  is_default_photo?: boolean;
}
