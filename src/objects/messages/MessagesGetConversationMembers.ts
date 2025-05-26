/**
 * This is auto-generated file, don't modify this file manually
 */

import { GroupsGroupFull } from '../groups/GroupsGroupFull';
import { UsersUserFull } from '../users/UsersUserFull';
import { MessagesChatRestrictions } from './MessagesChatRestrictions';
import { MessagesConversationMember } from './MessagesConversationMember';

// messages_getConversationMembers
export interface MessagesGetConversationMembers {
  items?: MessagesConversationMember[];
  /**
   * Chat members count
   */
  count?: number;
  chat_restrictions?: MessagesChatRestrictions;
  profiles?: UsersUserFull[];
  groups?: GroupsGroupFull[];
}
