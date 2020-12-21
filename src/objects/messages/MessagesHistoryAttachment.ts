/**
 * This is auto-generated file, don't modify this file manually
 */

import { MessagesHistoryMessageAttachment } from './MessagesHistoryMessageAttachment';

// messages_history_attachment
export interface MessagesHistoryAttachment {
  attachment: MessagesHistoryMessageAttachment;
  /**
   * Message ID
   */
  message_id: number;
  /**
   * Message author's ID
   */
  from_id: number;
  /**
   * Forward level (optional)
   */
  forward_level?: number;
}
