/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseMessageError } from '../base/BaseMessageError';

// messages_delete_full_response_item
export interface MessagesDeleteFullResponseItem {
  peer_id?: number;
  message_id?: number;
  conversation_message_id?: number;
  response?: 0 | 1;
  error?: BaseMessageError;
}
