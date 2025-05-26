/**
 * This is auto-generated file, don't modify this file manually
 */

import { GroupsGroupFull } from '../groups/GroupsGroupFull';
import { UsersUserFull } from '../users/UsersUserFull';
import { MessagesConversation } from './MessagesConversation';

// messages_getConversationById_extended
export interface MessagesGetConversationByIdExtended {
  /**
   * Total number
   */
  count?: number;
  items?: MessagesConversation[];
  profiles?: UsersUserFull[];
  groups?: GroupsGroupFull[];
}
