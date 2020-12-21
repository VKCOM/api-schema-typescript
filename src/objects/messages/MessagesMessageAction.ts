/**
 * This is auto-generated file, don't modify this file manually
 */

import { MessagesMessageActionPhoto } from './MessagesMessageActionPhoto';
import { MessagesMessageActionStatus } from './MessagesMessageActionStatus';

// messages_message_action
export interface MessagesMessageAction {
  /**
   * Message ID
   */
  conversation_message_id?: number;
  /**
   * Email address for chat_invite_user or chat_kick_user actions
   */
  email?: string;
  /**
   * User or email peer ID
   */
  member_id?: number;
  /**
   * Message body of related message
   */
  message?: string;
  photo?: MessagesMessageActionPhoto;
  /**
   * New chat title for chat_create and chat_title_update actions
   */
  text?: string;
  type: MessagesMessageActionStatus;
}
