/**
 * This is auto-generated file, don't modify this file manually
 */

import { GroupsGroupFull } from '../objects/groups/GroupsGroupFull';
import { MessagesChat } from '../objects/messages/MessagesChat';
import { MessagesChatFull } from '../objects/messages/MessagesChatFull';
import { MessagesChatPreview } from '../objects/messages/MessagesChatPreview';
import { MessagesConversation } from '../objects/messages/MessagesConversation';
import { MessagesConversationWithMessage } from '../objects/messages/MessagesConversationWithMessage';
import { MessagesDeleteFullResponseItem } from '../objects/messages/MessagesDeleteFullResponseItem';
import { MessagesGetConversationById } from '../objects/messages/MessagesGetConversationById';
import { MessagesGetConversationByIdExtended } from '../objects/messages/MessagesGetConversationByIdExtended';
import { MessagesGetConversationMembers } from '../objects/messages/MessagesGetConversationMembers';
import { MessagesGetInviteLinkByOwnerResponseItem } from '../objects/messages/MessagesGetInviteLinkByOwnerResponseItem';
import { MessagesHistoryAttachment } from '../objects/messages/MessagesHistoryAttachment';
import { MessagesLastActivity } from '../objects/messages/MessagesLastActivity';
import { MessagesLongpollMessages } from '../objects/messages/MessagesLongpollMessages';
import { MessagesLongpollParams } from '../objects/messages/MessagesLongpollParams';
import { MessagesMessage } from '../objects/messages/MessagesMessage';
import { MessagesMessagesArray } from '../objects/messages/MessagesMessagesArray';
import { MessagesPinnedMessage } from '../objects/messages/MessagesPinnedMessage';
import { MessagesReactionAssetItem } from '../objects/messages/MessagesReactionAssetItem';
import { MessagesReactionCounterResponseItem } from '../objects/messages/MessagesReactionCounterResponseItem';
import { MessagesReactionCountersResponseItem } from '../objects/messages/MessagesReactionCountersResponseItem';
import { MessagesReactionResponseItem } from '../objects/messages/MessagesReactionResponseItem';
import { MessagesSendUserIdsResponseItem } from '../objects/messages/MessagesSendUserIdsResponseItem';
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
export type MessagesAddChatUserResponse = {};

/**
 * messages.addChatUsers
 *
 * Adds new users to a chat.
 */

export interface MessagesAddChatUsersParams {
  chat_id?: number;
  visible_messages_count?: number;
}

// messages.addChatUsers_response
export interface MessagesAddChatUsersResponse {
  failed_peer_ids?: number[];
  failed_phone_numbers?: string[];
  invitees?: number[];
}

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
  user_ids?: string;
  /**
   * Chat title.
   */
  title?: string;
  group_id?: number;
}

// messages.createChat_response
export interface MessagesCreateChatResponse {
  /**
   * Chat ID
   */
  chat_id?: number;
  /**
   * List of successfully added peer ids
   */
  peer_ids?: number[];
}

/**
 * messages.delete
 *
 * Deletes one or more messages.
 */

export interface MessagesDeleteParams {
  /**
   * Message IDs.
   */
  message_ids?: string;
  /**
   * '1' - to mark message as spam.
   */
  spam?: 0 | 1;
  /**
   * Reason for spam
   */
  reason?: number;
  /**
   * Group ID (for group messages with user access token)
   */
  group_id?: number;
  /**
   * '1' - delete message for for all.
   */
  delete_for_all?: 0 | 1;
  /**
   * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
   */
  peer_id?: number;
  /**
   * Conversation message IDs.
   */
  cmids?: string;
}

// messages.delete_response
export type MessagesDeleteResponse = MessagesDeleteFullResponseItem[];

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
  last_deleted_id?: number;
}

/**
 * messages.deleteReaction
 *
 * Delete message reaction
 */

export interface MessagesDeleteReactionParams {
  peer_id: number;
  cmid: number;
}

// messages.deleteReaction_response
export type MessagesDeleteReactionResponse = 0 | 1;

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
   * (Required if 'message' is not set.) List of objects attached to the message, separated by commas, in the following format: "<owner_id>_<media_id>", '' - Type of media attachment: 'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document, 'wall' - wall post, '<owner_id>' - ID of the media attachment owner. '<media_id>' - media attachment ID. Example: "photo100172_166443618"
   */
  attachment?: string;
  /**
   * '1' - to keep forwarded, messages.
   */
  keep_forward_messages?: 0 | 1;
  /**
   * '1' - to keep attached snippets.
   */
  keep_snippets?: 0 | 1;
  /**
   * Group ID (for group messages with user access token)
   */
  group_id?: number;
  dont_parse_links?: 0 | 1;
  disable_mentions?: 0 | 1;
  message_id?: number;
  cmid?: number;
  template?: string;
  keyboard?: string;
}

// messages.edit_response
/**
 * Result
 */
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
  conversation_message_ids: string;
  /**
   * Information whether the response should be extended
   */
  extended?: 0 | 1;
  /**
   * Profile fields to return.
   *
   * objects.json#/definitions/users_fields
   */
  fields?: string;
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
  count?: number;
  items?: MessagesMessage[];
}

// messages.getByConversationMessageId_extendedResponse
export interface MessagesGetByConversationMessageIdExtendedResponse {
  /**
   * Total number
   */
  count?: number;
  items?: MessagesMessage[];
  profiles?: UsersUserFull[];
  groups?: GroupsGroupFull[];
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
  message_ids?: string;
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
   *
   * objects.json#/definitions/users_fields
   */
  fields?: string;
  /**
   * Group ID (for group messages with group access token)
   */
  group_id?: number;
  cmids?: string;
  peer_id?: number;
}

// messages.getById_response
export interface MessagesGetByIdResponse {
  /**
   * Total number
   */
  count?: number;
  items?: MessagesMessage[];
}

// messages.getById_extendedResponse
export interface MessagesGetByIdExtendedResponse {
  /**
   * Total number
   */
  count?: number;
  items?: MessagesMessage[];
  profiles?: UsersUserFull[];
  groups?: GroupsGroupFull[];
}

/**
 * messages.getChat
 *
 * Returns information about a chat.
 */

export interface MessagesGetChatParams {
  /**
   * Chat ID.
   */
  chat_id?: number;
  /**
   * Chat IDs.
   */
  chat_ids?: string;
  /**
   * Profile fields to return.
   *
   * objects.json#/definitions/users_fields
   */
  fields?: string;
  /**
   * Case for declension of user name and surname: 'nom' - nominative (default), 'gen' - genitive , 'dat' - dative, 'acc' - accusative , 'ins' - instrumental , 'abl' - prepositional
   */
  name_case?: string;
}

// messages.getChat_response
export type MessagesGetChatResponse = MessagesChat;

// messages.getChat_fieldsResponse
export type MessagesGetChatFieldsResponse = MessagesChatFull;

// messages.getChat_chatIdsResponse
export type MessagesGetChatChatIdsResponse = MessagesChat[];

// messages.getChat_chatIds_Fields_Response
export type MessagesGetChatChatIdsFieldsResponse = MessagesChatFull[];

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
   *
   * objects.json#/definitions/users_fields
   */
  fields?: string;
}

// messages.getChatPreview_response
export interface MessagesGetChatPreviewResponse {
  preview?: MessagesChatPreview;
  profiles?: UsersUserFull[];
  groups?: GroupsGroupFull[];
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
  offset?: number;
  count?: number;
  /**
   * Extended flag
   */
  extended?: 0 | 1;
  /**
   * Profile fields to return.
   *
   * objects.json#/definitions/users_fields
   */
  fields?: string;
  /**
   * Group ID (for group messages with group access token)
   */
  group_id?: number;
  member_ids?: string;
}

// messages.getConversationMembers_response
export type MessagesGetConversationMembersResponse = MessagesGetConversationMembers;

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
   * Filter to apply: 'all' - all conversations, 'unread' - conversations with unread messages, 'important' - conversations, marked as important (only for community messages), 'unanswered' - conversations, marked as unanswered (only for community messages)
   */
  filter?: 'all' | 'archive' | 'important' | 'sorted_chats' | 'unanswered' | 'unread';
  /**
   * '1' - return extra information about users and communities
   */
  extended?: 0 | 1;
  /**
   * ID of the message from what to return dialogs.
   */
  start_message_id?: number;
  /**
   * Profile and communities fields to return.
   *
   * objects.json#/definitions/base_user_group_fields
   */
  fields?: string;
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
  count?: number;
  /**
   * Unread dialogs number
   */
  unread_count?: number;
  items?: MessagesConversationWithMessage[];
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
  peer_ids: string;
  /**
   * Return extended properties
   */
  extended?: 0 | 1;
  /**
   * Profile and communities fields to return.
   *
   * objects.json#/definitions/base_user_group_fields
   */
  fields?: string;
  /**
   * Group ID (for group messages with group access token)
   */
  group_id?: number;
}

// messages.getConversationsById_response
export type MessagesGetConversationsByIdResponse = MessagesGetConversationById;

// messages.getConversationsById_extendedResponse
export type MessagesGetConversationsByIdExtendedResponse = MessagesGetConversationByIdExtended;

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
   * Sort order: '1' - return messages in chronological order. '0' - return messages in reverse chronological order.
   */
  rev?: 1 | 0;
  /**
   * Information whether the response should be extended
   */
  extended?: 0 | 1;
  /**
   * Profile fields to return.
   *
   * objects.json#/definitions/users_fields
   */
  fields?: string;
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
  count?: number;
  items?: MessagesMessage[];
}

// messages.getHistory_extendedResponse
export interface MessagesGetHistoryExtendedResponse {
  /**
   * Total number
   */
  count?: number;
  items?: MessagesMessage[];
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
  attachment_types?: string;
  /**
   * Group ID (for group messages with group access token)
   */
  group_id?: number;
  /**
   * Peer ID. ", For group chat: '2000000000 + chat ID' , , For community: '-community ID'"
   */
  peer_id?: number;
  cmid?: number;
  attachment_position?: number;
  offset?: number;
  /**
   * Number of objects to return.
   */
  count?: number;
  extended?: 0 | 1;
  /**
   * Additional profile [vk.com/dev/fields|fields] to return.
   *
   * objects.json#/definitions/users_fields
   */
  fields?: string;
  max_forwards_level?: number;
  message_video?: 0 | 1;
  /**
   * Type of media files to return: *'photo',, *'video',, *'audio',, *'doc',, *'link'.,*'market'.,*'wall'.,*'share'
   */
  media_type?: 'app_action_games' |
  'app_action_mini_apps' |
  'audio' |
  'audio_message' |
  'clip' |
  'doc' |
  'graffiti' |
  'link' |
  'market' |
  'photo' |
  'share' |
  'video' |
  'wall';
  /**
   * Message ID to start return results from.
   */
  start_from?: string;
  preserve_order?: 0 | 1;
  /**
   * '1' - to return photo sizes in a
   */
  photo_sizes?: 0 | 1;
}

// messages.getHistoryAttachments_response
export interface MessagesGetHistoryAttachmentsResponse {
  items?: MessagesHistoryAttachment[];
  /**
   * Value for pagination
   */
  next_from?: string;
  profiles?: UsersUserFull[];
  groups?: GroupsGroupFull[];
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
   *
   * objects.json#/definitions/base_user_group_fields
   */
  fields?: string;
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
  messages?: MessagesMessagesArray;
  profiles?: UsersUser[];
  groups?: GroupsGroupFull[];
  conversations?: MessagesConversation[];
}

// messages.getImportantMessages_extendedResponse
export interface MessagesGetImportantMessagesExtendedResponse {
  messages?: MessagesMessagesArray;
  profiles?: UsersUserFull[];
  groups?: GroupsGroupFull[];
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
  name_case?: string;
  fields?: string;
}

// messages.getIntentUsers_response
export interface MessagesGetIntentUsersResponse {
  count?: number;
  items?: number[];
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
   * 1 - to generate new link (revoke previous), 0 - to return previous link.
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

// messages.getInviteLink_responseByOwner
export interface MessagesGetInviteLinkResponseByOwner {
  items?: MessagesGetInviteLinkByOwnerResponseItem[];
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
   * Last value of 'pts' parameter returned from the Long Poll server or by using [vk.com/dev/messages.getLongPollHistory|messages.getLongPollHistory] method.
   */
  pts?: number;
  /**
   * Number of characters after which to truncate a previewed message. To preview the full message, specify '0'. "NOTE: Messages are not truncated by default. Messages are truncated by words."
   */
  preview_length?: number;
  /**
   * '1' - to return history with online users only.
   */
  onlines?: 0 | 1;
  /**
   * Additional profile [vk.com/dev/fields|fields] to return.
   *
   * objects.json#/definitions/users_fields
   */
  fields?: string;
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
  extended?: 0 | 1;
}

// messages.getLongPollHistory_response
export interface MessagesGetLongPollHistoryResponse {
  history?: Array<string | number>[];
  messages?: MessagesLongpollMessages;
  credentials?: MessagesLongpollParams;
  profiles?: UsersUserFull[];
  groups?: GroupsGroupFull[];
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
   * '1' - to return the 'pts' field, needed for the [vk.com/dev/messages.getLongPollHistory|messages.getLongPollHistory] method.
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
 * messages.getMessagesReactions
 *
 * Get reaction counters for message
 */

export interface MessagesGetMessagesReactionsParams {
  peer_id: number;
  cmids: string;
}

// messages.getMessagesReactions_response
export interface MessagesGetMessagesReactionsResponse {
  items?: MessagesReactionCountersResponseItem[];
  profiles?: UsersUserFull[];
  groups?: GroupsGroupFull[];
}

/**
 * messages.getReactedPeers
 *
 * Get reacted users and counters for message
 */

export interface MessagesGetReactedPeersParams {
  peer_id: number;
  cmid: number;
  reaction_id?: number;
}

// messages.getReactedPeers_response
export interface MessagesGetReactedPeersResponse {
  /**
   * Total number
   */
  count?: number;
  reactions?: MessagesReactionResponseItem[];
  counters?: MessagesReactionCounterResponseItem[];
  profiles?: UsersUserFull[];
  groups?: GroupsGroupFull[];
}

/**
 * messages.getReactionsAssets
 *
 * Get assets to display message reactions
 */

export interface MessagesGetReactionsAssetsParams {
  client_version?: number;
}

// messages.getReactionsAssets_response
export interface MessagesGetReactionsAssetsResponse {
  /**
   * Current reactions assets version
   */
  version?: number;
  /**
   * Base reactions assets to display by default
   */
  assets?: MessagesReactionAssetItem[];
  /**
   * Extended reactions assets for special occasions, user allowed to switch to the base version
   */
  override_assets?: MessagesReactionAssetItem[];
  /**
   * Enabled reactions for current account. You can use reactions only from this array or already present on target message
   */
  reaction_ids?: number[];
}

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
   * '1' - to mark as answered, '0' - to remove the mark
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
  message_ids?: string;
  /**
   * '1' - to add a star (mark as important), '0' - to remove the star
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
   * '1' - to add a star (mark as important), '0' - to remove the star
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
  message_ids?: string;
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
  up_to_cmid?: number;
}

// messages.markAsRead_response
export type MessagesMarkAsReadResponse = 1;

/**
 * messages.markReactionsAsRead
 *
 * Mark messages reactions as read
 */

export interface MessagesMarkReactionsAsReadParams {
  peer_id: number;
  cmids?: string;
}

// messages.markReactionsAsRead_response
export type MessagesMarkReactionsAsReadResponse = 0 | 1;

/**
 * messages.muteChatMentions
 */

export interface MessagesMuteChatMentionsParams {
  /**
   * Chat id
   */
  peer_id: number;
  mention_status: 'all' | 'allOnline' | 'none';
}

// messages.muteChatMentions_response
export type MessagesMuteChatMentionsResponse = 1;

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
  cmid?: number;
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
  message_id?: number;
  /**
   * Group ID (for group messages with user access token)
   */
  group_id?: number;
  cmid?: number;
  /**
   * Destination ID.
   */
  peer_id?: number;
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
  fields?: string;
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
  count?: number;
  items?: MessagesMessage[];
}

// messages.search_extendedResponse
export interface MessagesSearchExtendedResponse {
  /**
   * Total number
   */
  count?: number;
  items?: MessagesMessage[];
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
   * '1' - return extra information about users and communities
   */
  extended?: 0 | 1;
  /**
   * Profile fields to return.
   *
   * objects.json#/definitions/users_fields
   */
  fields?: string;
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
}

// messages.searchConversations_extendedResponse
export interface MessagesSearchConversationsExtendedResponse {
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
   * User ID (by default - current user).
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
  peer_ids?: string;
  /**
   * User's short address (for example, 'illarionov').
   */
  domain?: string;
  /**
   * ID of conversation the message will relate to.
   */
  chat_id?: number;
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
   * (Required if 'message' is not set.) List of objects attached to the message, separated by commas, in the following format: "<owner_id>_<media_id>", '' - Type of media attachment: 'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document, 'wall' - wall post, '<owner_id>' - ID of the media attachment owner. '<media_id>' - media attachment ID. Example: "photo100172_166443618"
   */
  attachment?: string;
  reply_to?: number;
  /**
   * ID of forwarded messages, separated with a comma. Listed messages of the sender will be shown in the message body at the recipient's. Example: "123,431,544"
   */
  forward_messages?: string;
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
  'finance_notification' |
  'game_notification' |
  'moderated_newsletter' |
  'non_promo_newsletter' |
  'promo_newsletter' |
  'purchase_update';
  subscribe_id?: number;
}

// messages.send_deprecatedResponse
export type MessagesSendDeprecatedResponse = number;

// messages.send_userIdsResponse
export type MessagesSendUserIdsResponse = MessagesSendUserIdsResponseItem[];

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
 * messages.sendReaction
 *
 * Send message reaction
 */

export interface MessagesSendReactionParams {
  peer_id: number;
  cmid: number;
  reaction_id: number;
}

// messages.sendReaction_response
export type MessagesSendReactionResponse = 0 | 1;

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
   * 'typing' - user has started to type.
   */
  type?: 'audiomessage' | 'file' | 'photo' | 'typing' | 'video';
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
