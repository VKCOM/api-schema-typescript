/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseUserGroupFields } from '../objects/base/BaseUserGroupFields';
import { GroupsGroup } from '../objects/groups/GroupsGroup';
import { GroupsGroupFull } from '../objects/groups/GroupsGroupFull';
import { MessagesChat } from '../objects/messages/MessagesChat';
import { MessagesChatPreview } from '../objects/messages/MessagesChatPreview';
import { MessagesChatRestrictions } from '../objects/messages/MessagesChatRestrictions';
import { MessagesConversation } from '../objects/messages/MessagesConversation';
import { MessagesConversationMember } from '../objects/messages/MessagesConversationMember';
import { MessagesConversationWithMessage } from '../objects/messages/MessagesConversationWithMessage';
import { MessagesHistoryAttachment } from '../objects/messages/MessagesHistoryAttachment';
import { MessagesLastActivity } from '../objects/messages/MessagesLastActivity';
import { MessagesLongpollMessages } from '../objects/messages/MessagesLongpollMessages';
import { MessagesLongpollParams } from '../objects/messages/MessagesLongpollParams';
import { MessagesMessage } from '../objects/messages/MessagesMessage';
import { MessagesMessagesArray } from '../objects/messages/MessagesMessagesArray';
import { MessagesPinnedMessage } from '../objects/messages/MessagesPinnedMessage';
import { UsersFields } from '../objects/users/UsersFields';
import { UsersUser } from '../objects/users/UsersUser';
import { UsersUserFull } from '../objects/users/UsersUserFull';

/**
 * messages.addChatUser
 *
 * Adds a new user to a chat.
 */

export interface MessagesAddChatUserParams {
  /**
   * Chat ID.
   */
  chat_id: number;
  /**
   * ID of the user to be added to the chat.
   */
  user_id?: number;
  visible_messages_count?: number;
}

// messages.addChatUser_response
export type MessagesAddChatUserResponse = 1;

/**
 * messages.allowMessagesFromGroup
 *
 * Allows sending messages from community to the current user.
 */

export interface MessagesAllowMessagesFromGroupParams {
  /**
   * Group ID.
   */
  group_id: number;
  key?: string;
}

// messages.allowMessagesFromGroup_response
export type MessagesAllowMessagesFromGroupResponse = 1;

/**
 * messages.createChat
 *
 * Creates a chat with several participants.
 */

export interface MessagesCreateChatParams {
  /**
   * IDs of the users to be added to the chat.
   */
  user_ids?: number[];
  /**
   * Chat title.
   */
  title?: string;
  group_id?: number;
}

// messages.createChat_response
export type MessagesCreateChatResponse = number;

/**
 * messages.delete
 *
 * Deletes one or more messages.
 */

export interface MessagesDeleteParams {
  /**
   * Message IDs.
   */
  message_ids?: number[];
  /**
   * '1' — to mark message as spam.
   */
  spam?: 0 | 1;
  /**
   * Group ID (for group messages with user access token)
   */
  group_id?: number;
  /**
   * '1' — delete message for for all.
   */
  delete_for_all?: 0 | 1;
}

// messages.delete_response
export interface MessagesDeleteResponse {
  [key: number]: 0 | 1;
}

/**
 * messages.deleteChatPhoto
 *
 * Deletes a chat's cover picture.
 */

export interface MessagesDeleteChatPhotoParams {
  /**
   * Chat ID.
   */
  chat_id: number;
  group_id?: number;
}

// messages.deleteChatPhoto_response
export interface MessagesDeleteChatPhotoResponse {
  /**
   * Service message ID
   */
  message_id?: number;
  chat?: MessagesChat;
}

/**
 * messages.deleteConversation
 *
 * Deletes all private messages in a conversation.
 */

export interface MessagesDeleteConversationParams {
  /**
   * User ID. To clear a chat history use 'chat_id'
   */
  user_id?: number;
  /**
   * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
   */
  peer_id?: number;
  /**
   * Group ID (for group messages with user access token)
   */
  group_id?: number;
}

// messages.deleteConversation_response
export interface MessagesDeleteConversationResponse {
  /**
   * Id of the last message, that was deleted
   */
  last_deleted_id: number;
}

/**
 * messages.denyMessagesFromGroup
 *
 * Denies sending message from community to the current user.
 */

export interface MessagesDenyMessagesFromGroupParams {
  /**
   * Group ID.
   */
  group_id: number;
}

// messages.denyMessagesFromGroup_response
export type MessagesDenyMessagesFromGroupResponse = 1;

/**
 * messages.edit
 *
 * Edits the message.
 */

export interface MessagesEditParams {
  /**
   * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
   */
  peer_id: number;
  /**
   * (Required if 'attachments' is not set.) Text of the message.
   */
  message?: string;
  /**
   * Geographical latitude of a check-in, in degrees (from -90 to 90).
   */
  lat?: number;
  /**
   * Geographical longitude of a check-in, in degrees (from -180 to 180).
   */
  long?: number;
  /**
   * (Required if 'message' is not set.) List of objects attached to the message, separated by commas, in the following format: "<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, 'wall' — wall post, '<owner_id>' — ID of the media attachment owner. '<media_id>' — media attachment ID. Example: "photo100172_166443618"
   */
  attachment?: string;
  /**
   * '1' — to keep forwarded, messages.
   */
  keep_forward_messages?: 0 | 1;
  /**
   * '1' — to keep attached snippets.
   */
  keep_snippets?: 0 | 1;
  /**
   * Group ID (for group messages with user access token)
   */
  group_id?: number;
  dont_parse_links?: 0 | 1;
  message_id?: number;
  conversation_message_id?: number;
  template?: string;
  keyboard?: string;
}

// messages.edit_response
export type MessagesEditResponse = 0 | 1;

/**
 * messages.editChat
 *
 * Edits the title of a chat.
 */

export interface MessagesEditChatParams {
  /**
   * Chat ID.
   */
  chat_id: number;
  /**
   * New title of the chat.
   */
  title?: string;
}

// messages.editChat_response
export type MessagesEditChatResponse = 1;

/**
 * messages.getByConversationMessageId
 *
 * Returns messages by their IDs within the conversation.
 */

export interface MessagesGetByConversationMessageIdParams {
  /**
   * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
   */
  peer_id: number;
  /**
   * Conversation message IDs.
   */
  conversation_message_ids: number[];
  /**
   * Information whether the response should be extended
   */
  extended?: 0 | 1;
  /**
   * Profile fields to return.
   */
  fields?: UsersFields[];
  /**
   * Group ID (for group messages with group access token)
   */
  group_id?: number;
}

// messages.getByConversationMessageId_response
export interface MessagesGetByConversationMessageIdResponse {
  /**
   * Total number
   */
  count: number;
  items: MessagesMessage[];
}

/**
 * messages.getById
 *
 * Returns messages by their IDs.
 */

export interface MessagesGetByIdParams {
  /**
   * Message IDs.
   */
  message_ids: number[];
  /**
   * Number of characters after which to truncate a previewed message. To preview the full message, specify '0'. "NOTE: Messages are not truncated by default. Messages are truncated by words."
   */
  preview_length?: number;
  /**
   * Information whether the response should be extended
   */
  extended?: 0 | 1;
  /**
   * Profile fields to return.
   */
  fields?: UsersFields[];
  /**
   * Group ID (for group messages with group access token)
   */
  group_id?: number;
}

// messages.getById_response
export interface MessagesGetByIdResponse {
  /**
   * Total number
   */
  count: number;
  items: MessagesMessage[];
}

// messages.getById_extendedResponse
export interface MessagesGetByIdExtendedResponse {
  /**
   * Total number
   */
  count: number;
  items: MessagesMessage[];
  profiles: UsersUserFull[];
  groups?: GroupsGroupFull[];
}

/**
 * messages.getChatPreview
 */

export interface MessagesGetChatPreviewParams {
  peer_id?: number;
  /**
   * Invitation link.
   */
  link?: string;
  /**
   * Profile fields to return.
   */
  fields?: UsersFields[];
}

// messages.getChatPreview_response
export interface MessagesGetChatPreviewResponse {
  preview?: MessagesChatPreview;
  profiles?: UsersUserFull[];
}

/**
 * messages.getConversationMembers
 *
 * Returns a list of IDs of users participating in a chat.
 */

export interface MessagesGetConversationMembersParams {
  /**
   * Peer ID.
   */
  peer_id: number;
  /**
   * Profile fields to return.
   */
  fields?: UsersFields[];
  /**
   * Group ID (for group messages with group access token)
   */
  group_id?: number;
}

// messages.getConversationMembers_response
export interface MessagesGetConversationMembersResponse {
  /**
   * Chat members count
   */
  count: number;
  items: MessagesConversationMember[];
  chat_restrictions?: MessagesChatRestrictions;
  profiles?: UsersUserFull[];
  groups?: GroupsGroupFull[];
}

/**
 * messages.getConversations
 *
 * Returns a list of the current user's conversations.
 */

export interface MessagesGetConversationsParams {
  /**
   * Offset needed to return a specific subset of conversations.
   */
  offset?: number;
  /**
   * Number of conversations to return.
   */
  count?: number;
  /**
   * Filter to apply: 'all' — all conversations, 'unread' — conversations with unread messages, 'important' — conversations, marked as important (only for community messages), 'unanswered' — conversations, marked as unanswered (only for community messages)
   */
  filter?: 'all' | 'important' | 'unanswered' | 'unread';
  /**
   * '1' — return extra information about users and communities
   */
  extended?: 0 | 1;
  /**
   * ID of the message from what to return dialogs.
   */
  start_message_id?: number;
  /**
   * Profile and communities fields to return.
   */
  fields?: BaseUserGroupFields[];
  /**
   * Group ID (for group messages with group access token)
   */
  group_id?: number;
}

// messages.getConversations_response
export interface MessagesGetConversationsResponse {
  /**
   * Total number
   */
  count: number;
  /**
   * Unread dialogs number
   */
  unread_count?: number;
  items: MessagesConversationWithMessage[];
  profiles?: UsersUserFull[];
  groups?: GroupsGroupFull[];
}

/**
 * messages.getConversationsById
 *
 * Returns conversations by their IDs
 */

export interface MessagesGetConversationsByIdParams {
  /**
   * Destination IDs. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
   */
  peer_ids: number[];
  /**
   * Return extended properties
   */
  extended?: 0 | 1;
  /**
   * Profile and communities fields to return.
   */
  fields?: BaseUserGroupFields[];
  /**
   * Group ID (for group messages with group access token)
   */
  group_id?: number;
}

// messages.getConversationsById_response
export interface MessagesGetConversationsByIdResponse {
  /**
   * Total number
   */
  count: number;
  items: MessagesConversation[];
}

// messages.getConversationsById_extendedResponse
export interface MessagesGetConversationsByIdExtendedResponse {
  /**
   * Total number
   */
  count: number;
  items: MessagesConversation[];
  profiles?: UsersUser[];
}

/**
 * messages.getHistory
 *
 * Returns message history for the specified user or group chat.
 */

export interface MessagesGetHistoryParams {
  /**
   * Offset needed to return a specific subset of messages.
   */
  offset?: number;
  /**
   * Number of messages to return.
   */
  count?: number;
  /**
   * ID of the user whose message history you want to return.
   */
  user_id?: number;
  peer_id?: number;
  /**
   * Starting message ID from which to return history.
   */
  start_message_id?: number;
  /**
   * Sort order: '1' — return messages in chronological order. '0' — return messages in reverse chronological order.
   */
  rev?: 1 | 0;
  /**
   * Information whether the response should be extended
   */
  extended?: 0 | 1;
  /**
   * Profile fields to return.
   */
  fields?: UsersFields[];
  /**
   * Group ID (for group messages with group access token)
   */
  group_id?: number;
}

// messages.getHistory_response
export interface MessagesGetHistoryResponse {
  /**
   * Total number
   */
  count: number;
  items: MessagesMessage[];
}

// messages.getHistory_extendedResponse
export interface MessagesGetHistoryExtendedResponse {
  /**
   * Total number
   */
  count: number;
  items: MessagesMessage[];
  profiles?: UsersUserFull[];
  groups?: GroupsGroupFull[];
  conversations?: MessagesConversation[];
}

/**
 * messages.getHistoryAttachments
 *
 * Returns media files from the dialog or group chat.
 */

export interface MessagesGetHistoryAttachmentsParams {
  /**
   * Peer ID. ", For group chat: '2000000000 + chat ID' , , For community: '-community ID'"
   */
  peer_id: number;
  /**
   * Type of media files to return: *'photo',, *'video',, *'audio',, *'doc',, *'link'.,*'market'.,*'wall'.,*'share'
   */
  media_type?: 'audio' | 'audio_message' | 'doc' | 'graffiti' | 'link' | 'market' | 'photo' | 'share' | 'video' | 'wall';
  /**
   * Message ID to start return results from.
   */
  start_from?: string;
  /**
   * Number of objects to return.
   */
  count?: number;
  /**
   * '1' — to return photo sizes in a
   */
  photo_sizes?: 0 | 1;
  /**
   * Additional profile [vk.com/dev/fields|fields] to return. 
   */
  fields?: UsersFields[];
  /**
   * Group ID (for group messages with group access token)
   */
  group_id?: number;
  preserve_order?: 0 | 1;
  max_forwards_level?: number;
}

// messages.getHistoryAttachments_response
export interface MessagesGetHistoryAttachmentsResponse {
  items?: MessagesHistoryAttachment[];
  /**
   * Value for pagination
   */
  next_from?: string;
}

/**
 * messages.getImportantMessages
 *
 * Returns a list of user's important messages.
 */

export interface MessagesGetImportantMessagesParams {
  /**
   * Amount of needed important messages.
   */
  count?: number;
  offset?: number;
  start_message_id?: number;
  /**
   * Maximum length of messages body.
   */
  preview_length?: number;
  /**
   * Actors fields to return.
   */
  fields?: BaseUserGroupFields[];
  /**
   * Return extended properties
   */
  extended?: 0 | 1;
  /**
   * Group ID (for group messages with group access token)
   */
  group_id?: number;
}

// messages.getImportantMessages_response
export interface MessagesGetImportantMessagesResponse {
  messages: MessagesMessagesArray;
  profiles?: UsersUser[];
  groups?: GroupsGroup[];
  conversations?: MessagesConversation[];
}

// messages.getImportantMessages_extendedResponse
export interface MessagesGetImportantMessagesExtendedResponse {
  messages: MessagesMessagesArray;
  profiles?: UsersUser[];
  groups?: GroupsGroup[];
  conversations?: MessagesConversation[];
}

/**
 * messages.getIntentUsers
 */

export interface MessagesGetIntentUsersParams {
  intent: 'confirmed_notification' | 'non_promo_newsletter' | 'promo_newsletter';
  subscribe_id?: number;
  offset?: number;
  count?: number;
  extended?: 0 | 1;
  name_case?: string[];
  fields?: string[];
}

// messages.getIntentUsers_response
export interface MessagesGetIntentUsersResponse {
  count: number;
  items: number[];
  profiles?: UsersUserFull[];
}

/**
 * messages.getInviteLink
 */

export interface MessagesGetInviteLinkParams {
  /**
   * Destination ID.
   */
  peer_id: number;
  /**
   * 1 — to generate new link (revoke previous), 0 — to return previous link.
   */
  reset?: 0 | 1;
  /**
   * Group ID
   */
  group_id?: number;
}

// messages.getInviteLink_response
export interface MessagesGetInviteLinkResponse {
  link?: string;
}

/**
 * messages.getLastActivity
 *
 * Returns a user's current status and date of last activity.
 */

export interface MessagesGetLastActivityParams {
  /**
   * User ID.
   */
  user_id: number;
}

// messages.getLastActivity_response
export type MessagesGetLastActivityResponse = MessagesLastActivity;

/**
 * messages.getLongPollHistory
 *
 * Returns updates in user's private messages.
 */

export interface MessagesGetLongPollHistoryParams {
  /**
   * Last value of the 'ts' parameter returned from the Long Poll server or by using [vk.com/dev/messages.getLongPollHistory|messages.getLongPollHistory] method.
   */
  ts?: number;
  /**
   * Lsat value of 'pts' parameter returned from the Long Poll server or by using [vk.com/dev/messages.getLongPollHistory|messages.getLongPollHistory] method.
   */
  pts?: number;
  /**
   * Number of characters after which to truncate a previewed message. To preview the full message, specify '0'. "NOTE: Messages are not truncated by default. Messages are truncated by words."
   */
  preview_length?: number;
  /**
   * '1' — to return history with online users only.
   */
  onlines?: 0 | 1;
  /**
   * Additional profile [vk.com/dev/fields|fields] to return.
   */
  fields?: UsersFields[];
  /**
   * Maximum number of events to return.
   */
  events_limit?: number;
  /**
   * Maximum number of messages to return.
   */
  msgs_limit?: number;
  /**
   * Maximum ID of the message among existing ones in the local copy. Both messages received with API methods (for example, , ), and data received from a Long Poll server (events with code 4) are taken into account.
   */
  max_msg_id?: number;
  /**
   * Group ID (for group messages with user access token)
   */
  group_id?: number;
  lp_version?: number;
  last_n?: number;
  credentials?: 0 | 1;
}

// messages.getLongPollHistory_response
export interface MessagesGetLongPollHistoryResponse {
  history?: number[][];
  messages?: MessagesLongpollMessages;
  credentials?: MessagesLongpollParams;
  profiles?: UsersUserFull[];
  groups?: GroupsGroup[];
  chats?: MessagesChat[];
  /**
   * Persistence timestamp
   */
  new_pts?: number;
  from_pts?: number;
  /**
   * Has more
   */
  more?: boolean;
  conversations?: MessagesConversation[];
}

/**
 * messages.getLongPollServer
 *
 * Returns data required for connection to a Long Poll server.
 */

export interface MessagesGetLongPollServerParams {
  /**
   * '1' — to return the 'pts' field, needed for the [vk.com/dev/messages.getLongPollHistory|messages.getLongPollHistory] method.
   */
  need_pts?: 0 | 1;
  /**
   * Group ID (for group messages with user access token)
   */
  group_id?: number;
  /**
   * Long poll version
   */
  lp_version?: number;
}

// messages.getLongPollServer_response
export type MessagesGetLongPollServerResponse = MessagesLongpollParams;

/**
 * messages.isMessagesFromGroupAllowed
 *
 * Returns information whether sending messages from the community to current user is allowed.
 */

export interface MessagesIsMessagesFromGroupAllowedParams {
  /**
   * Group ID.
   */
  group_id: number;
  /**
   * User ID.
   */
  user_id: number;
}

// messages.isMessagesFromGroupAllowed_response
export interface MessagesIsMessagesFromGroupAllowedResponse {
  is_allowed?: 0 | 1;
}

/**
 * messages.joinChatByInviteLink
 */

export interface MessagesJoinChatByInviteLinkParams {
  /**
   * Invitation link.
   */
  link: string;
}

// messages.joinChatByInviteLink_response
export interface MessagesJoinChatByInviteLinkResponse {
  chat_id?: number;
}

/**
 * messages.markAsAnsweredConversation
 *
 * Marks and unmarks conversations as unanswered.
 */

export interface MessagesMarkAsAnsweredConversationParams {
  /**
   * ID of conversation to mark as important.
   */
  peer_id: number;
  /**
   * '1' — to mark as answered, '0' — to remove the mark
   */
  answered?: 0 | 1;
  /**
   * Group ID (for group messages with group access token)
   */
  group_id?: number;
}

// messages.markAsAnsweredConversation_response
export type MessagesMarkAsAnsweredConversationResponse = 1;

/**
 * messages.markAsImportant
 *
 * Marks and unmarks messages as important (starred).
 */

export interface MessagesMarkAsImportantParams {
  /**
   * IDs of messages to mark as important.
   */
  message_ids?: number[];
  /**
   * '1' — to add a star (mark as important), '0' — to remove the star
   */
  important?: number;
}

// messages.markAsImportant_response
export type MessagesMarkAsImportantResponse = number[];

/**
 * messages.markAsImportantConversation
 *
 * Marks and unmarks conversations as important.
 */

export interface MessagesMarkAsImportantConversationParams {
  /**
   * ID of conversation to mark as important.
   */
  peer_id: number;
  /**
   * '1' — to add a star (mark as important), '0' — to remove the star
   */
  important?: 0 | 1;
  /**
   * Group ID (for group messages with group access token)
   */
  group_id?: number;
}

// messages.markAsImportantConversation_response
export type MessagesMarkAsImportantConversationResponse = 1;

/**
 * messages.markAsRead
 *
 * Marks messages as read.
 */

export interface MessagesMarkAsReadParams {
  /**
   * IDs of messages to mark as read.
   */
  message_ids?: number[];
  /**
   * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
   */
  peer_id?: number;
  /**
   * Message ID to start from.
   */
  start_message_id?: number;
  /**
   * Group ID (for group messages with user access token)
   */
  group_id?: number;
  mark_conversation_as_read?: 0 | 1;
}

// messages.markAsRead_response
export type MessagesMarkAsReadResponse = 1;

/**
 * messages.pin
 *
 * Pin a message.
 */

export interface MessagesPinParams {
  /**
   * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'Chat ID', e.g. '2000000001'. For community: '- Community ID', e.g. '-12345'. "
   */
  peer_id: number;
  /**
   * Message ID
   */
  message_id?: number;
  /**
   * Conversation message ID
   */
  conversation_message_id?: number;
}

// messages.pin_response
export type MessagesPinResponse = MessagesPinnedMessage;

/**
 * messages.removeChatUser
 *
 * Allows the current user to leave a chat or, if the current user started the chat, allows the user to remove another user from the chat.
 */

export interface MessagesRemoveChatUserParams {
  /**
   * Chat ID.
   */
  chat_id: number;
  /**
   * ID of the user to be removed from the chat.
   */
  user_id?: number;
  member_id?: number;
}

// messages.removeChatUser_response
export type MessagesRemoveChatUserResponse = 1;

/**
 * messages.restore
 *
 * Restores a deleted message.
 */

export interface MessagesRestoreParams {
  /**
   * ID of a previously-deleted message to restore.
   */
  message_id: number;
  /**
   * Group ID (for group messages with user access token)
   */
  group_id?: number;
}

// messages.restore_response
export type MessagesRestoreResponse = 1;

/**
 * messages.search
 *
 * Returns a list of the current user's private messages that match search criteria.
 */

export interface MessagesSearchParams {
  /**
   * Search query string.
   */
  q?: string;
  /**
   * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
   */
  peer_id?: number;
  /**
   * Date to search message before in Unixtime.
   */
  date?: number;
  /**
   * Number of characters after which to truncate a previewed message. To preview the full message, specify '0'. "NOTE: Messages are not truncated by default. Messages are truncated by words."
   */
  preview_length?: number;
  /**
   * Offset needed to return a specific subset of messages.
   */
  offset?: number;
  /**
   * Number of messages to return.
   */
  count?: number;
  extended?: 0 | 1;
  fields?: string[];
  /**
   * Group ID (for group messages with group access token)
   */
  group_id?: number;
}

// messages.search_response
export interface MessagesSearchResponse {
  /**
   * Total number
   */
  count: number;
  items: MessagesMessage[];
}

// messages.search_extendedResponse
export interface MessagesSearchExtendedResponse {
  /**
   * Total number
   */
  count: number;
  items: MessagesMessage[];
  profiles?: UsersUserFull[];
  groups?: GroupsGroupFull[];
  conversations?: MessagesConversation[];
}

/**
 * messages.searchConversations
 *
 * Returns a list of the current user's conversations that match search criteria.
 */

export interface MessagesSearchConversationsParams {
  /**
   * Search query string.
   */
  q?: string;
  /**
   * Maximum number of results.
   */
  count?: number;
  /**
   * '1' — return extra information about users and communities
   */
  extended?: 0 | 1;
  /**
   * Profile fields to return.
   */
  fields?: UsersFields[];
  /**
   * Group ID (for group messages with user access token)
   */
  group_id?: number;
}

// messages.searchConversations_response
export interface MessagesSearchConversationsResponse {
  /**
   * Total results number
   */
  count?: number;
  items?: MessagesConversation[];
  profiles?: UsersUserFull[];
  groups?: GroupsGroupFull[];
}

/**
 * messages.send
 *
 * Sends a message.
 */

export interface MessagesSendParams {
  /**
   * User ID (by default — current user).
   */
  user_id?: number;
  /**
   * Unique identifier to avoid resending the message.
   */
  random_id?: number;
  /**
   * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
   */
  peer_id?: number;
  /**
   * IDs of message recipients. (See peer_id)
   */
  peer_ids?: number[];
  /**
   * User's short address (for example, 'illarionov').
   */
  domain?: string;
  /**
   * ID of conversation the message will relate to.
   */
  chat_id?: number;
  /**
   * IDs of message recipients (if new conversation shall be started).
   */
  user_ids?: number[];
  /**
   * (Required if 'attachments' is not set.) Text of the message.
   */
  message?: string;
  /**
   * Geographical latitude of a check-in, in degrees (from -90 to 90).
   */
  lat?: number;
  /**
   * Geographical longitude of a check-in, in degrees (from -180 to 180).
   */
  long?: number;
  /**
   * (Required if 'message' is not set.) List of objects attached to the message, separated by commas, in the following format: "<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, 'wall' — wall post, '<owner_id>' — ID of the media attachment owner. '<media_id>' — media attachment ID. Example: "photo100172_166443618"
   */
  attachment?: string;
  reply_to?: number;
  /**
   * ID of forwarded messages, separated with a comma. Listed messages of the sender will be shown in the message body at the recipient's. Example: "123,431,544"
   */
  forward_messages?: number[];
  /**
   * JSON describing the forwarded message or reply
   */
  forward?: string;
  /**
   * Sticker id.
   */
  sticker_id?: number;
  /**
   * Group ID (for group messages with group access token)
   */
  group_id?: number;
  keyboard?: string;
  template?: string;
  payload?: string;
  /**
   * JSON describing the content source in the message
   */
  content_source?: string;
  dont_parse_links?: 0 | 1;
  disable_mentions?: 0 | 1;
  intent?: 'account_update' |
  'bot_ad_invite' |
  'bot_ad_promo' |
  'confirmed_notification' |
  'customer_support' |
  'default' |
  'game_notification' |
  'moderated_newsletter' |
  'non_promo_newsletter' |
  'promo_newsletter' |
  'purchase_update';
  subscribe_id?: number;
}

// messages.send_response
export type MessagesSendResponse = number;

// messages.send_userIdsResponse
export type MessagesSendUserIdsResponse = {}[];

/**
 * messages.sendMessageEventAnswer
 */

export interface MessagesSendMessageEventAnswerParams {
  event_id: string;
  user_id: number;
  peer_id: number;
  event_data?: string;
}

// messages.sendMessageEventAnswer_response
export type MessagesSendMessageEventAnswerResponse = 1;

/**
 * messages.setActivity
 *
 * Changes the status of a user as typing in a conversation.
 */

export interface MessagesSetActivityParams {
  /**
   * User ID.
   */
  user_id?: number;
  /**
   * 'typing' — user has started to type.
   */
  type?: string;
  /**
   * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
   */
  peer_id?: number;
  /**
   * Group ID (for group messages with group access token)
   */
  group_id?: number;
}

// messages.setActivity_response
export type MessagesSetActivityResponse = 1;

/**
 * messages.setChatPhoto
 *
 * Sets a previously-uploaded picture as the cover picture of a chat.
 */

export interface MessagesSetChatPhotoParams {
  /**
   * Upload URL from the 'response' field returned by the [vk.com/dev/photos.getChatUploadServer|photos.getChatUploadServer] method upon successfully uploading an image.
   */
  file: string;
}

// messages.setChatPhoto_response
export interface MessagesSetChatPhotoResponse {
  /**
   * Service message ID
   */
  message_id?: number;
  chat?: MessagesChat;
}

/**
 * messages.unpin
 */

export interface MessagesUnpinParams {
  peer_id: number;
  group_id?: number;
}

// messages.unpin_response
export type MessagesUnpinResponse = 1;
