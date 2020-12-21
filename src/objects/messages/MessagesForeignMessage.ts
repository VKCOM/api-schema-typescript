/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseGeo } from '../base/BaseGeo';
import { MessagesMessageAttachment } from './MessagesMessageAttachment';

// messages_foreign_message
export interface MessagesForeignMessage {
  attachments?: MessagesMessageAttachment[];
  /**
   * Conversation message ID
   */
  conversation_message_id?: number;
  /**
   * Date when the message was created
   */
  date: number;
  /**
   * Message author's ID
   */
  from_id: number;
  fwd_messages?: MessagesForeignMessage[];
  geo?: BaseGeo;
  /**
   * Message ID
   */
  id?: number;
  /**
   * Peer ID
   */
  peer_id?: number;
  reply_message?: MessagesForeignMessage;
  /**
   * Message text
   */
  text: string;
  /**
   * Date when the message has been updated in Unixtime
   */
  update_time?: number;
  /**
   * Was the audio message inside already listened by you
   */
  was_listened?: boolean;
  /**
   * Additional data sent along with message for developer convenience
   */
  payload?: string;
}
