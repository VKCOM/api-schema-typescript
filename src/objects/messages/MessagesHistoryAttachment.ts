/**
 * This is auto-generated file, don't modify this file manually
 */

import { MessagesHistoryMessageAttachment } from './MessagesHistoryMessageAttachment';

// messages_history_attachment
export interface MessagesHistoryAttachment {
  attachment?: MessagesHistoryMessageAttachment;
  /**
   * Message sending time
   */
  date?: number;
  /**
   * Message ID
   */
  message_id?: number;
  /**
   * Message Exipire ttl
   */
  message_expire_ttl?: number;
  /**
   * Conversation Message ID
   */
  cmid?: number;
  /**
   * Message author's ID
   */
  from_id?: number;
  /**
   * Forward level (optional)
   */
  forward_level?: number;
  was_listened?: boolean;
  /**
   * Attachment position in the Message
   */
  position?: number;
}
