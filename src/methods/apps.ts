/**
 * This is auto-generated file, don't modify this file manually
 */

import { AppsApp } from '../objects/apps/AppsApp';
import { AppsCatalogList } from '../objects/apps/AppsCatalogList';
import { AppsCustomSnippet } from '../objects/apps/AppsCustomSnippet';
import { AppsLeaderboard } from '../objects/apps/AppsLeaderboard';
import { AppsScope } from '../objects/apps/AppsScope';
import { AppsTestingGroup } from '../objects/apps/AppsTestingGroup';
import { GroupsGroupFull } from '../objects/groups/GroupsGroupFull';
import { UsersUser } from '../objects/users/UsersUser';
import { UsersUserFull } from '../objects/users/UsersUserFull';

/**
 * apps.addSnippet
 */

export interface AppsAddSnippetParams {
  vk_ref?: string;
  group_id?: string;
  hash?: string;
  snippet_id?: number;
  title?: string;
  description?: string;
  image_url?: string;
  small_image_url?: string;
  button?: 'buy' | 'buy_ticket' | 'contact' | 'create' | 'enroll' | 'fill' | 'go' | 'help' | 'open' | 'play';
}

// apps.addSnippet_response
export interface AppsAddSnippetResponse {
  snippet_id?: number;
}

/**
 * apps.addUsersToTestingGroup
 */

export interface AppsAddUsersToTestingGroupParams {
  user_ids: string;
  group_id: number;
}

// apps.addUsersToTestingGroup_response
export type AppsAddUsersToTestingGroupResponse = 0 | 1;

/**
 * apps.deleteAppRequests
 *
 * Deletes all request notifications from the current app.
 */

export interface AppsDeleteAppRequestsParams {}

// apps.deleteAppRequests_response
export type AppsDeleteAppRequestsResponse = 1;

/**
 * apps.deleteSnippet
 */

export interface AppsDeleteSnippetParams {
  id?: number;
}

// apps.deleteSnippet_response
export type AppsDeleteSnippetResponse = 1;

/**
 * apps.get
 *
 * Returns applications data.
 */

export interface AppsGetParams {
  /**
   * Application ID
   */
  app_id?: number;
  /**
   * List of application ID
   */
  app_ids?: string;
  /**
   * platform. Possible values: *'ios' - iOS,, *'android' - Android,, *'winphone' - Windows Phone,, *'web' - приложения на vk.com. By default: 'web'.
   */
  platform?: 'android' | 'ios' | 'web';
  extended?: 0 | 1;
  return_friends?: 0 | 1;
  /**
   * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'contacts', 'education', 'online', 'counters', 'relation', 'last_seen', 'activity', 'can_write_private_message', 'can_see_all_posts', 'can_post', 'universities', (only if return_friends - 1)
   *
   * objects.json#/definitions/users_fields
   */
  fields?: string;
  /**
   * Case for declension of user name and surname: 'nom' - nominative (default),, 'gen' - genitive,, 'dat' - dative,, 'acc' - accusative,, 'ins' - instrumental,, 'abl' - prepositional. (only if 'return_friends' = '1')
   */
  name_case?: string;
  /**
   * List of app fields to return. Fields 'id', 'type' and 'title' will always be in response. Leave this field empty to get all fields
   *
   * objects.json#/definitions/apps_app_fields
   */
  app_fields?: string;
}

// apps.get_response
export interface AppsGetResponse {
  /**
   * Total number of applications
   */
  count?: number;
  /**
   * List of applications
   */
  items?: AppsApp[];
  /**
   * List of friends profiles, used only when return_friends=true
   */
  profiles?: UsersUserFull[];
  /**
   * List of groups, used only when extended=true
   */
  groups?: GroupsGroupFull[];
}

/**
 * apps.getCatalog
 *
 * Returns a list of applications (apps) available to users in the App Catalog.
 */

export interface AppsGetCatalogParams {
  /**
   * Sort order: 'popular_today' - popular for one day (default), 'visitors' - by visitors number , 'create_date' - by creation date, 'growth_rate' - by growth rate, 'popular_week' - popular for one week
   */
  sort?: 'create_date' | 'growth_rate' | 'popular' | 'popular_today' | 'popular_week' | 'visitors';
  /**
   * Offset required to return a specific subset of apps.
   */
  offset?: number;
  /**
   * Number of apps to return.
   */
  count?: number;
  platform?: string;
  /**
   * '1' - to return additional fields 'screenshots', 'MAU', 'catalog_position', and 'international'. If set, 'count' must be less than or equal to '100'. '0' - not to return additional fields (default).
   */
  extended?: 0 | 1;
  return_friends?: 0 | 1;
  /**
   * objects.json#/definitions/users_fields
   */
  fields?: string;
  name_case?: string;
  /**
   * Search query string.
   */
  q?: string;
  genre_id?: number;
  /**
   * 'installed' - to return list of installed apps (only for mobile platform).
   */
  filter?: 'favorite' | 'featured' | 'installed' | 'new' | 'recommended';
}

// apps.getCatalog_response
export type AppsGetCatalogResponse = AppsCatalogList;

/**
 * apps.getFriendsList
 *
 * Creates friends list for requests and invites in current app.
 */

export interface AppsGetFriendsListParams {
  extended?: 0 | 1;
  /**
   * List size.
   */
  count?: number;
  offset?: number;
  /**
   * List type. Possible values: * 'invite' - available for invites (don't play the game),, * 'request' - available for request (play the game). By default: 'invite'.
   */
  type?: 'invite' | 'request';
  /**
   * Additional profile fields, see [vk.com/dev/fields|description].
   *
   * objects.json#/definitions/users_fields
   */
  fields?: string;
  /**
   * Search query string (e.g., 'Vasya Babich').
   */
  query?: string;
}

// apps.getFriendsList_response
export interface AppsGetFriendsListResponse {
  /**
   * Total number
   */
  count?: number;
  items?: number[];
}

// apps.getFriendsList_extendedResponse
export interface AppsGetFriendsListExtendedResponse {
  /**
   * Total number
   */
  count?: number;
  items?: UsersUserFull[];
}

/**
 * apps.getLeaderboard
 *
 * Returns players rating in the game.
 */

export interface AppsGetLeaderboardParams {
  /**
   * Leaderboard type. Possible values: *'level' - by level,, *'points' - by mission points,, *'score' - by score ().
   */
  type: 'level' | 'points' | 'score';
  /**
   * Rating type. Possible values: *'1' - global rating among all players,, *'0' - rating among user friends.
   */
  global?: 0 | 1;
  /**
   * 1 - to return additional info about users
   */
  extended?: 0 | 1;
}

// apps.getLeaderboard_response
export interface AppsGetLeaderboardResponse {
  /**
   * Total number
   */
  count?: number;
  items?: AppsLeaderboard[];
}

// apps.getLeaderboard_extendedResponse
export interface AppsGetLeaderboardExtendedResponse {
  /**
   * Total number
   */
  count?: number;
  items?: AppsLeaderboard[];
  profiles?: UsersUser[];
}

/**
 * apps.getMiniAppPolicies
 *
 * Returns policies and terms given to a mini app.
 */

export interface AppsGetMiniAppPoliciesParams {
  /**
   * Mini App ID
   */
  app_id: number;
}

// apps.getMiniAppPolicies_response
export interface AppsGetMiniAppPoliciesResponse {
  /**
   * URL of the app's privacy policy
   */
  privacy_policy?: string;
  /**
   * URL of the app's terms
   */
  terms?: string;
}

/**
 * apps.getScopes
 *
 * Returns scopes for auth
 */

export interface AppsGetScopesParams {
  type?: 'group' | 'user';
}

// apps.getScopes_response
export interface AppsGetScopesResponse {
  /**
   * Total number
   */
  count?: number;
  items?: AppsScope[];
}

/**
 * apps.getScore
 *
 * Returns user score in app
 */

export interface AppsGetScoreParams {
  user_id?: number;
}

// apps.getScore_response
export type AppsGetScoreResponse = number;

/**
 * apps.getSnippets
 */

export interface AppsGetSnippetsParams {}

// apps.getSnippets_response
export interface AppsGetSnippetsResponse {
  items?: AppsCustomSnippet[];
}

/**
 * apps.getTestingGroups
 */

export interface AppsGetTestingGroupsParams {
  group_id?: number;
}

// apps.getTestingGroups_response
export type AppsGetTestingGroupsResponse = AppsTestingGroup[];

/**
 * apps.isNotificationsAllowed
 */

export interface AppsIsNotificationsAllowedParams {
  user_id?: number;
}

// apps.isNotificationsAllowed_response
export interface AppsIsNotificationsAllowedResponse {
  /**
   * Whether notifications are allowed for current user from concrete app or not
   */
  is_allowed?: boolean;
}

/**
 * apps.promoHasActiveGift
 */

export interface AppsPromoHasActiveGiftParams {
  /**
   * Id of game promo action
   */
  promo_id: number;
  user_id?: number;
}

// apps.promoHasActiveGift_response
export type AppsPromoHasActiveGiftResponse = 0 | 1;

/**
 * apps.promoUseGift
 */

export interface AppsPromoUseGiftParams {
  /**
   * Id of game promo action
   */
  promo_id: number;
  user_id?: number;
}

// apps.promoUseGift_response
export type AppsPromoUseGiftResponse = 0 | 1;

/**
 * apps.removeTestingGroup
 */

export interface AppsRemoveTestingGroupParams {
  group_id: number;
}

// apps.removeTestingGroup_response
export type AppsRemoveTestingGroupResponse = 0 | 1;

/**
 * apps.removeUsersFromTestingGroups
 */

export interface AppsRemoveUsersFromTestingGroupsParams {
  user_ids: string;
}

// apps.removeUsersFromTestingGroups_response
export type AppsRemoveUsersFromTestingGroupsResponse = 0 | 1;

/**
 * apps.sendRequest
 *
 * Sends a request to another user in an app that uses VK authorization.
 */

export interface AppsSendRequestParams {
  /**
   * id of the user to send a request
   */
  user_id: number;
  /**
   * request text
   */
  text?: string;
  /**
   * request type. Values: 'invite' - if the request is sent to a user who does not have the app installed,, 'request' - if a user has already installed the app
   */
  type?: 'invite' | 'request';
  name?: string;
  /**
   * special string key to be sent with the request
   */
  key?: string;
  separate?: 0 | 1;
}

// apps.sendRequest_response
export type AppsSendRequestResponse = number;

/**
 * apps.updateMetaForTestingGroup
 */

export interface AppsUpdateMetaForTestingGroupParams {
  group_id?: number;
  webview: string;
  name: string;
  platforms: string;
  user_ids?: string;
}

// apps.updateMetaForTestingGroup_response
export interface AppsUpdateMetaForTestingGroupResponse {
  group_id?: number;
}
