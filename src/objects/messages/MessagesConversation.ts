/**
 * This is auto-generated file, don't modify this file manually
 */

import { MessagesChatSettings } from './MessagesChatSettings';
import { MessagesConversationCanWrite } from './MessagesConversationCanWrite';
import { MessagesConversationPeer } from './MessagesConversationPeer';
import { MessagesConversationSortId } from './MessagesConversationSortId';
import { MessagesKeyboard } from './MessagesKeyboard';
import { MessagesMessageRequestData } from './MessagesMessageRequestData';
import { MessagesOutReadBy } from './MessagesOutReadBy';
import { MessagesPushSettings } from './MessagesPushSettings';

// messages_conversation special_service_type enum
export enum MessagesConversationSpecialServiceTypeEnum {
  BUSINESS_NOTIFY = 'business_notify',
}

// messages_conversation
export interface MessagesConversation {
  peer: MessagesConversationPeer;
  sort_id?: MessagesConversationSortId;
  /**
   * ID of the last message in conversation
   */
  last_message_id: number;
  /**
   * Last message user have read
   */
  in_read: number;
  /**
   * Last outcoming message have been read by the opponent
   */
  out_read: number;
  /**
   * Unread messages number
   */
  unread_count?: number;
  /**
   * Is this conversation uread
   */
  is_marked_unread?: boolean;
  out_read_by?: MessagesOutReadBy;
  important?: boolean;
  unanswered?: boolean;
  special_service_type?: MessagesConversationSpecialServiceTypeEnum;
  message_request_data?: MessagesMessageRequestData;
  /**
   * Ids of messages with mentions
   */
  mentions?: number[];
  current_keyboard?: MessagesKeyboard;
  push_settings?: MessagesPushSettings;
  can_write?: MessagesConversationCanWrite;
  chat_settings?: MessagesChatSettings;
}
