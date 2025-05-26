/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseGeo } from '../base/BaseGeo';
import { MessagesActionOneOf } from './MessagesActionOneOf';
import { MessagesForeignMessage } from './MessagesForeignMessage';
import { MessagesFwdMessages } from './MessagesFwdMessages';
import { MessagesKeyboard } from './MessagesKeyboard';
import { MessagesMessageAttachment } from './MessagesMessageAttachment';
import { MessagesReactionCounterResponseItem } from './MessagesReactionCounterResponseItem';

// messages_message
export interface MessagesMessage {
  action?: MessagesActionOneOf;
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
  date?: number;
  /**
   * Is it an deleted message
   */
  deleted?: 0 | 1;
  /**
   * Message author's ID
   */
  from_id?: number;
  fwd_messages?: MessagesFwdMessages;
  geo?: BaseGeo;
  /**
   * Message ID
   */
  id?: number;
  /**
   * this message is cropped for bot
   */
  is_cropped?: boolean;
  keyboard?: MessagesKeyboard;
  payload?: string;
  /**
   * Message text
   */
  text?: string;
  /**
   * Date when the message has been updated in Unixtime
   */
  update_time?: number;
  /**
   * Is silent message, push without sound
   */
  is_silent?: boolean;
  /**
   * Is message unavailable for some reason, including its id equals 0
   */
  is_unavailable?: boolean;
  version?: number;
  /**
   * Information whether the message is outcoming
   */
  out?: 0 | 1;
  /**
   * Peer ID
   */
  peer_id?: number;
  /**
   * ID used for sending messages. It returned only for outgoing messages
   */
  random_id?: number;
  ref?: string;
  ref_source?: string;
  /**
   * Is it an important message
   */
  important?: boolean;
  is_hidden?: boolean;
  /**
   * Members number
   */
  members_count?: number;
  reply_message?: MessagesForeignMessage;
  /**
   * Reaction id set on message
   */
  reaction_id?: number;
  /**
   * Actual reactions counters on this message
   */
  reactions?: MessagesReactionCounterResponseItem[];
  /**
   * Last reaction id set on this message
   */
  last_reaction_id?: number;
  /**
   * Is message pinned in its conversation
   */
  is_pinned?: boolean;
  /**
   * Was the audio message inside already listened by you
   */
  was_listened?: boolean;
  /**
   * Date when the message has been pinned in Unixtime
   */
  pinned_at?: number;
}
