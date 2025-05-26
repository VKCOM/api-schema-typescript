/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseLinkButton } from '../base/BaseLinkButton';
import { MessagesChatSettingsPhoto } from './MessagesChatSettingsPhoto';

// messages_chat_preview
export interface MessagesChatPreview {
  admin_id?: number;
  joined?: boolean;
  local_id?: number;
  members?: number[];
  members_count?: number;
  title?: string;
  is_member?: boolean;
  photo?: MessagesChatSettingsPhoto;
  is_don?: boolean;
  is_nft?: boolean;
  is_group_channel?: boolean;
  button?: BaseLinkButton;
}
