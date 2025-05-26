/**
 * This is auto-generated file, don't modify this file manually
 */

import { MessagesChatSettingsAcl } from './MessagesChatSettingsAcl';
import { MessagesChatSettingsPermissions } from './MessagesChatSettingsPermissions';
import { MessagesChatSettingsPhoto } from './MessagesChatSettingsPhoto';
import { MessagesChatSettingsState } from './MessagesChatSettingsState';
import { MessagesPinnedMessage } from './MessagesPinnedMessage';

// messages_chat_settings
export interface MessagesChatSettings {
  members_count?: number;
  friends_count?: number;
  owner_id?: number;
  /**
   * Chat title
   */
  title?: string;
  pinned_messages_count?: number;
  pinned_message?: MessagesPinnedMessage;
  state?: MessagesChatSettingsState;
  photo?: MessagesChatSettingsPhoto;
  /**
   * Ids of chat admins
   */
  admin_ids?: number[];
  active_ids?: number[];
  is_group_channel?: boolean;
  acl?: MessagesChatSettingsAcl;
  permissions?: MessagesChatSettingsPermissions;
  is_disappearing?: boolean;
  theme?: string;
  disappearing_chat_link?: string;
  is_service?: boolean;
}
