/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseGeo } from '../base/BaseGeo';
import { MessagesForeignMessage } from './MessagesForeignMessage';
import { MessagesKeyboard } from './MessagesKeyboard';
import { MessagesMessageAttachment } from './MessagesMessageAttachment';

// messages_pinned_message
export interface MessagesPinnedMessage {
  attachments?: MessagesMessageAttachment[];
  /**
   * Unique auto-incremented number for all messages with this peer
   */
  conversation_message_id?: number;
  /**
   * Date when the message has been sent in Unixtime
   */
  date: number;
  /**
   * Message author's ID
   */
  from_id: number;
  /**
   * Forwarded messages
   */
  fwd_messages?: MessagesForeignMessage[];
  geo?: BaseGeo;
  /**
   * Message ID
   */
  id: number;
  /**
   * Peer ID
   */
  peer_id: number;
  reply_message?: MessagesForeignMessage;
  /**
   * Message text
   */
  text: string;
  keyboard?: MessagesKeyboard;
}
