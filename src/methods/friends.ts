/**
 * This is auto-generated file, don't modify this file manually
 */

import { FriendsFriendExtendedStatus } from '../objects/friends/FriendsFriendExtendedStatus';
import { FriendsFriendsList } from '../objects/friends/FriendsFriendsList';
import { FriendsFriendStatus } from '../objects/friends/FriendsFriendStatus';
import { FriendsMutualFriend } from '../objects/friends/FriendsMutualFriend';
import { FriendsRequests } from '../objects/friends/FriendsRequests';
import { FriendsRequestsXtrMessage } from '../objects/friends/FriendsRequestsXtrMessage';
import { FriendsUserXtrLists } from '../objects/friends/FriendsUserXtrLists';
import { FriendsUserXtrPhone } from '../objects/friends/FriendsUserXtrPhone';
import { UsersUserFull } from '../objects/users/UsersUserFull';

/**
 * friends.add
 *
 * Approves or creates a friend request.
 */

export interface FriendsAddParams {
  /**
   * ID of the user whose friend request will be approved or to whom a friend request will be sent.
   */
  user_id?: number;
  /**
   * Text of the message (up to 500 characters) for the friend request, if any.
   */
  text?: string;
  /**
   * '1' to pass an incoming request to followers list.
   */
  follow?: 0 | 1;
}

// friends.add_response enumNames
export const FriendsAddResponseEnumNames = {
  SEND: 1,
  APPROVED: 2,
  RESEND: 4,
} as const;

// friends.add_response
/**
 * `1` — SEND
 * `2` — APPROVED
 * `4` — RESEND
 */
export type FriendsAddResponse = 1 | 2 | 4;

/**
 * friends.addList
 *
 * Creates a new friend list for the current user.
 */

export interface FriendsAddListParams {
  /**
   * Name of the friend list.
   */
  name: string;
  /**
   * IDs of users to be added to the friend list.
   */
  user_ids?: string;
}

// friends.addList_response
export interface FriendsAddListResponse {
  /**
   * List ID
   */
  list_id: number;
}

/**
 * friends.areFriends
 *
 * Checks the current user's friendship status with other specified users.
 */

export interface FriendsAreFriendsParams {
  /**
   * IDs of the users whose friendship status to check.
   */
  user_ids: string;
  /**
   * '1' — to return 'sign' field. 'sign' is md5("{id}_{user_id}_{friends_status}_{application_secret}"), where id is current user ID. This field allows to check that data has not been modified by the client. By default: '0'.
   */
  need_sign?: 0 | 1;
  /**
   * Return friend request read_state field
   */
  extended?: 0 | 1;
}

// friends.areFriends_response
export type FriendsAreFriendsResponse = FriendsFriendStatus[];

// friends.areFriends_extendedResponse
export type FriendsAreFriendsExtendedResponse = FriendsFriendExtendedStatus[];

/**
 * friends.delete
 *
 * Declines a friend request or deletes a user from the current user's friend list.
 */

export interface FriendsDeleteParams {
  /**
   * ID of the user whose friend request is to be declined or who is to be deleted from the current user's friend list.
   */
  user_id?: number;
}

// friends.delete_response friend_deleted enumNames
export const FriendsDeleteResponseFriendDeletedEnumNames = {
  OK: 1,
} as const;

// friends.delete_response out_request_deleted enumNames
export const FriendsDeleteResponseOutRequestDeletedEnumNames = {
  OK: 1,
} as const;

// friends.delete_response in_request_deleted enumNames
export const FriendsDeleteResponseInRequestDeletedEnumNames = {
  OK: 1,
} as const;

// friends.delete_response suggestion_deleted enumNames
export const FriendsDeleteResponseSuggestionDeletedEnumNames = {
  OK: 1,
} as const;

// friends.delete_response
export interface FriendsDeleteResponse {
  success: number;
  /**
   * Returns 1 if friend has been deleted
   *
   * `1` — ok
   */
  friend_deleted?: 1;
  /**
   * Returns 1 if out request has been canceled
   *
   * `1` — ok
   */
  out_request_deleted?: 1;
  /**
   * Returns 1 if incoming request has been declined
   *
   * `1` — ok
   */
  in_request_deleted?: 1;
  /**
   * Returns 1 if suggestion has been declined
   *
   * `1` — ok
   */
  suggestion_deleted?: 1;
}

/**
 * friends.deleteAllRequests
 *
 * Marks all incoming friend requests as viewed.
 */

export interface FriendsDeleteAllRequestsParams {}

// friends.deleteAllRequests_response
export type FriendsDeleteAllRequestsResponse = 1;

/**
 * friends.deleteList
 *
 * Deletes a friend list of the current user.
 */

export interface FriendsDeleteListParams {
  /**
   * ID of the friend list to delete.
   */
  list_id: number;
}

// friends.deleteList_response
export type FriendsDeleteListResponse = 1;

/**
 * friends.edit
 *
 * Edits the friend lists of the selected user.
 */

export interface FriendsEditParams {
  /**
   * ID of the user whose friend list is to be edited.
   */
  user_id: number;
  /**
   * IDs of the friend lists to which to add the user.
   */
  list_ids?: string;
}

// friends.edit_response
export type FriendsEditResponse = 1;

/**
 * friends.editList
 *
 * Edits a friend list of the current user.
 */

export interface FriendsEditListParams {
  /**
   * Name of the friend list.
   */
  name?: string;
  /**
   * Friend list ID.
   */
  list_id: number;
  /**
   * IDs of users in the friend list.
   */
  user_ids?: string;
  /**
   * (Applies if 'user_ids' parameter is not set.), User IDs to add to the friend list.
   */
  add_user_ids?: string;
  /**
   * (Applies if 'user_ids' parameter is not set.), User IDs to delete from the friend list.
   */
  delete_user_ids?: string;
}

// friends.editList_response
export type FriendsEditListResponse = 1;

/**
 * friends.get
 *
 * Returns a list of user IDs or detailed information about a user's friends.
 */

export interface FriendsGetParams {
  /**
   * User ID. By default, the current user ID.
   */
  user_id?: number;
  /**
   * Sort order: , 'name' — by name (enabled only if the 'fields' parameter is used), 'hints' — by rating, similar to how friends are sorted in My friends section, , This parameter is available only for [vk.com/dev/standalone|desktop applications].
   */
  order?: 'hints' | 'random' | 'mobile' | 'name' | 'smart';
  /**
   * ID of the friend list returned by the [vk.com/dev/friends.getLists|friends.getLists] method to be used as the source. This parameter is taken into account only when the uid parameter is set to the current user ID. This parameter is available only for [vk.com/dev/standalone|desktop applications].
   */
  list_id?: number;
  /**
   * Number of friends to return.
   */
  count?: number;
  /**
   * Offset needed to return a specific subset of friends.
   */
  offset?: number;
  /**
   * Profile fields to return. Sample values: 'uid', 'first_name', 'last_name', 'nickname', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'domain', 'has_mobile', 'rate', 'contacts', 'education'.
   *
   * objects.json#/definitions/users_fields
   */
  fields?: string;
  /**
   * Case for declension of user name and surname: , 'nom' — nominative (default) , 'gen' — genitive , 'dat' — dative , 'acc' — accusative , 'ins' — instrumental , 'abl' — prepositional
   */
  name_case?: 'nom' | 'gen' | 'dat' | 'acc' | 'ins' | 'abl';
  ref?: string;
}

// friends.get_response
export interface FriendsGetResponse {
  /**
   * Total friends number
   */
  count: number;
  items: number[];
}

// friends.get_fieldsResponse
export interface FriendsGetFieldsResponse {
  /**
   * Total friends number
   */
  count: number;
  items: FriendsUserXtrLists[];
}

/**
 * friends.getAppUsers
 *
 * Returns a list of IDs of the current user's friends who installed the application.
 */

export interface FriendsGetAppUsersParams {}

// friends.getAppUsers_response
export type FriendsGetAppUsersResponse = number[];

/**
 * friends.getByPhones
 *
 * Returns a list of the current user's friends whose phone numbers, validated or specified in a profile, are in a given list.
 */

export interface FriendsGetByPhonesParams {
  /**
   * List of phone numbers in MSISDN format (maximum 1000). Example: "+79219876543,+79111234567"
   */
  phones?: string;
  /**
   * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online, counters'.
   *
   * objects.json#/definitions/users_fields
   */
  fields?: string;
}

// friends.getByPhones_response
export type FriendsGetByPhonesResponse = FriendsUserXtrPhone[];

/**
 * friends.getLists
 *
 * Returns a list of the user's friend lists.
 */

export interface FriendsGetListsParams {
  /**
   * User ID.
   */
  user_id?: number;
  /**
   * '1' — to return system friend lists. By default: '0'.
   */
  return_system?: 0 | 1;
}

// friends.getLists_response
export interface FriendsGetListsResponse {
  /**
   * Total number of friends lists
   */
  count: number;
  items: FriendsFriendsList[];
}

/**
 * friends.getMutual
 *
 * Returns a list of user IDs of the mutual friends of two users.
 */

export interface FriendsGetMutualParams {
  /**
   * ID of the user whose friends will be checked against the friends of the user specified in 'target_uid'.
   */
  source_uid?: number;
  /**
   * ID of the user whose friends will be checked against the friends of the user specified in 'source_uid'.
   */
  target_uid?: number;
  /**
   * IDs of the users whose friends will be checked against the friends of the user specified in 'source_uid'.
   */
  target_uids?: string;
  /**
   * Sort order: 'random' — random order
   */
  order?: string;
  /**
   * Number of mutual friends to return.
   */
  count?: number;
  /**
   * Offset needed to return a specific subset of mutual friends.
   */
  offset?: number;
}

// friends.getMutual_response
export type FriendsGetMutualResponse = number[];

// friends.getMutual_targetUidsResponse
export type FriendsGetMutualTargetUidsResponse = FriendsMutualFriend[];

/**
 * friends.getOnline
 *
 * Returns a list of user IDs of a user's friends who are online.
 */

export interface FriendsGetOnlineParams {
  /**
   * User ID.
   */
  user_id?: number;
  /**
   * Friend list ID. If this parameter is not set, information about all online friends is returned.
   */
  list_id?: number;
  /**
   * '1' — to return an additional 'online_mobile' field, '0' — (default),
   */
  online_mobile?: 0 | 1;
  /**
   * Sort order: 'random' — random order
   */
  order?: string;
  /**
   * Number of friends to return.
   */
  count?: number;
  /**
   * Offset needed to return a specific subset of friends.
   */
  offset?: number;
}

// friends.getOnline_response
export type FriendsGetOnlineResponse = number[];

// friends.getOnline_onlineMobileResponse
export interface FriendsGetOnlineOnlineMobileResponse {
  online?: number[];
  online_mobile?: number[];
}

/**
 * friends.getRecent
 *
 * Returns a list of user IDs of the current user's recently added friends.
 */

export interface FriendsGetRecentParams {
  /**
   * Number of recently added friends to return.
   */
  count?: number;
}

// friends.getRecent_response
export type FriendsGetRecentResponse = number[];

/**
 * friends.getRequests
 *
 * Returns information about the current user's incoming and outgoing friend requests.
 */

export interface FriendsGetRequestsParams {
  /**
   * Offset needed to return a specific subset of friend requests.
   */
  offset?: number;
  /**
   * Number of friend requests to return (default 100, maximum 1000).
   */
  count?: number;
  /**
   * '1' — to return response messages from users who have sent a friend request or, if 'suggested' is set to '1', to return a list of suggested friends
   */
  extended?: 0 | 1;
  /**
   * '1' — to return a list of mutual friends (up to 20), if any
   */
  need_mutual?: 0 | 1;
  /**
   * '1' — to return outgoing requests, '0' — to return incoming requests (default)
   */
  out?: 0 | 1;
  /**
   * Sort order: '1' — by number of mutual friends, '0' — by date
   */
  sort?: 0 | 1 | 2;
  need_viewed?: 0 | 1;
  /**
   * '1' — to return a list of suggested friends, '0' — to return friend requests (default)
   */
  suggested?: 0 | 1;
  ref?: string;
  /**
   * objects.json#/definitions/users_fields
   */
  fields?: string;
}

// friends.getRequests_response
export interface FriendsGetRequestsResponse {
  /**
   * Total requests number
   */
  count?: number;
  items?: number[];
  /**
   * Total unread requests number
   */
  count_unread?: number;
}

// friends.getRequests_needMutualResponse
export interface FriendsGetRequestsNeedMutualResponse {
  /**
   * Total requests number
   */
  count?: number;
  items?: FriendsRequests[];
}

// friends.getRequests_extendedResponse
export interface FriendsGetRequestsExtendedResponse {
  /**
   * Total requests number
   */
  count?: number;
  items?: FriendsRequestsXtrMessage[];
}

/**
 * friends.getSuggestions
 *
 * Returns a list of profiles of users whom the current user may know.
 */

export interface FriendsGetSuggestionsParams {
  /**
   * Types of potential friends to return: 'mutual' — users with many mutual friends , 'contacts' — users found with the [vk.com/dev/account.importContacts|account.importContacts] method , 'mutual_contacts' — users who imported the same contacts as the current user with the [vk.com/dev/account.importContacts|account.importContacts] method
   */
  filter?: string;
  /**
   * Number of suggestions to return.
   */
  count?: number;
  /**
   * Offset needed to return a specific subset of suggestions.
   */
  offset?: number;
  /**
   * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online', 'counters'.
   *
   * objects.json#/definitions/users_fields
   */
  fields?: string;
  /**
   * Case for declension of user name and surname: , 'nom' — nominative (default) , 'gen' — genitive , 'dat' — dative , 'acc' — accusative , 'ins' — instrumental , 'abl' — prepositional
   */
  name_case?: 'nom' | 'gen' | 'dat' | 'acc' | 'ins' | 'abl';
}

// friends.getSuggestions_response
export interface FriendsGetSuggestionsResponse {
  /**
   * Total results number
   */
  count: number;
  items: UsersUserFull[];
}

/**
 * friends.search
 *
 * Returns a list of friends matching the search criteria.
 */

export interface FriendsSearchParams {
  /**
   * User ID.
   */
  user_id: number;
  /**
   * Search query string (e.g., 'Vasya Babich').
   */
  q?: string;
  /**
   * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online',
   *
   * objects.json#/definitions/users_fields
   */
  fields?: string;
  /**
   * Case for declension of user name and surname: 'nom' — nominative (default), 'gen' — genitive , 'dat' — dative, 'acc' — accusative , 'ins' — instrumental , 'abl' — prepositional
   */
  name_case?: 'Nom' | 'Gen' | 'Dat' | 'Acc' | 'Ins' | 'Abl';
  /**
   * Offset needed to return a specific subset of friends.
   */
  offset?: number;
  /**
   * Number of friends to return.
   */
  count?: number;
}

// friends.search_response
export interface FriendsSearchResponse {
  /**
   * Total number
   */
  count: number;
  items: UsersUserFull[];
}
