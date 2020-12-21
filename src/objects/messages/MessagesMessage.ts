/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseGeo } from '../base/BaseGeo';
import { MessagesForeignMessage } from './MessagesForeignMessage';
import { MessagesKeyboard } from './MessagesKeyboard';
import { MessagesMessageAction } from './MessagesMessageAction';
import { MessagesMessageAttachment } from './MessagesMessageAttachment';

// messages_message
export interface MessagesMessage {
  action?: MessagesMessageAction;
  /**
   * Only for messages from community. Contains user ID of community admin, who sent this message.
   */
  admin_author_id?: number;
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
   * Is it an deleted message
   */
  deleted?: 0 | 1;
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
   * Is it an important message
   */
  important?: boolean;
  is_hidden?: boolean;
  /**
   * this message is cropped for bot
   */
  is_cropped?: boolean;
  keyboard?: MessagesKeyboard;
  /**
   * Members number
   */
  members_count?: number;
  /**
   * Information whether the message is outcoming
   */
  out: 0 | 1;
  payload?: string;
  /**
   * Peer ID
   */
  peer_id: number;
  /**
   * ID used for sending messages. It returned only for outgoing messages
   */
  random_id?: number;
  ref?: string;
  ref_source?: string;
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
   * Date when the message has been pinned in Unixtime
   */
  pinned_at?: number;
}
