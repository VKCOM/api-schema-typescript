/**
 * This is auto-generated file, don't modify this file manually
 */

import { GroupsGroupsArray } from '../objects/groups/GroupsGroupsArray';
import { UsersSubscriptionsItem } from '../objects/users/UsersSubscriptionsItem';
import { UsersUserFull } from '../objects/users/UsersUserFull';
import { UsersUsersArray } from '../objects/users/UsersUsersArray';
import { UsersUserXtrCounters } from '../objects/users/UsersUserXtrCounters';

/**
 * users.get
 *
 * Returns detailed information on users.
 */

export interface UsersGetParams {
  /**
   * User IDs or screen names ('screen_name'). By default, current user ID.
   */
  user_ids?: string;
  /**
   * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'contacts', 'education', 'online', 'counters', 'relation', 'last_seen', 'activity', 'can_write_private_message', 'can_see_all_posts', 'can_post', 'universities', 'can_invite_to_chats'
   *
   * objects.json#/definitions/users_fields
   */
  fields?: string;
  /**
   * Case for declension of user name and surname: 'nom' — nominative (default), 'gen' — genitive , 'dat' — dative, 'acc' — accusative , 'ins' — instrumental , 'abl' — prepositional
   */
  name_case?: 'nom' | 'gen' | 'dat' | 'acc' | 'ins' | 'abl';
}

// users.get_response
export type UsersGetResponse = UsersUserXtrCounters[];

/**
 * users.getFollowers
 *
 * Returns a list of IDs of followers of the user in question, sorted by date added, most recent first.
 */

export interface UsersGetFollowersParams {
  /**
   * User ID.
   */
  user_id?: number;
  /**
   * Offset needed to return a specific subset of followers.
   */
  offset?: number;
  /**
   * Number of followers to return.
   */
  count?: number;
  /**
   * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online'.
   *
   * objects.json#/definitions/users_fields
   */
  fields?: string;
  /**
   * Case for declension of user name and surname: 'nom' — nominative (default), 'gen' — genitive , 'dat' — dative, 'acc' — accusative , 'ins' — instrumental , 'abl' — prepositional
   */
  name_case?: 'nom' | 'gen' | 'dat' | 'acc' | 'ins' | 'abl';
}

// users.getFollowers_response
export interface UsersGetFollowersResponse {
  /**
   * Total friends number
   */
  count: number;
  items: number[];
}

// users.getFollowers_fieldsResponse
export interface UsersGetFollowersFieldsResponse {
  /**
   * Total number of available results
   */
  count: number;
  items: UsersUserFull[];
}

/**
 * users.getSubscriptions
 *
 * Returns a list of IDs of users and communities followed by the user.
 */

export interface UsersGetSubscriptionsParams {
  /**
   * User ID.
   */
  user_id?: number;
  /**
   * '1' — to return a combined list of users and communities, '0' — to return separate lists of users and communities (default)
   */
  extended?: 0 | 1;
  /**
   * Offset needed to return a specific subset of subscriptions.
   */
  offset?: number;
  /**
   * Number of users and communities to return.
   */
  count?: number;
  /**
   * objects.json#/definitions/users_fields
   */
  fields?: string;
}

// users.getSubscriptions_response
export interface UsersGetSubscriptionsResponse {
  users: UsersUsersArray;
  groups: GroupsGroupsArray;
}

// users.getSubscriptions_extendedResponse
export interface UsersGetSubscriptionsExtendedResponse {
  /**
   * Total number of available results
   */
  count: number;
  items: UsersSubscriptionsItem[];
}

/**
 * users.report
 *
 * Reports (submits a complain about) a user.
 */

export interface UsersReportParams {
  /**
   * ID of the user about whom a complaint is being made.
   */
  user_id: number;
  /**
   * Type of complaint: 'porn' - pornography, 'spam' - spamming, 'insult' - abusive behavior, 'advertisement' - disruptive advertisements
   */
  type: 'porn' | 'spam' | 'insult' | 'advertisement';
  /**
   * Comment describing the complaint.
   */
  comment?: string;
}

// users.report_response
export type UsersReportResponse = 1;

/**
 * users.search
 *
 * Returns a list of users matching the search criteria.
 */

export interface UsersSearchParams {
  /**
   * Search query string (e.g., 'Vasya Babich').
   */
  q?: string;
  /**
   * Sort order: '1' — by date registered, '0' — by rating
   */
  sort?: 0 | 1;
  /**
   * Offset needed to return a specific subset of users.
   */
  offset?: number;
  /**
   * Number of users to return.
   */
  count?: number;
  /**
   * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online',
   *
   * objects.json#/definitions/users_fields
   */
  fields?: string;
  /**
   * City ID.
   */
  city?: number;
  /**
   * Country ID.
   */
  country?: number;
  /**
   * City name in a string.
   */
  hometown?: string;
  /**
   * ID of the country where the user graduated.
   */
  university_country?: number;
  /**
   * ID of the institution of higher education.
   */
  university?: number;
  /**
   * Year of graduation from an institution of higher education.
   */
  university_year?: number;
  /**
   * Faculty ID.
   */
  university_faculty?: number;
  /**
   * Chair ID.
   */
  university_chair?: number;
  /**
   * '1' — female, '2' — male, '0' — any (default)
   */
  sex?: 0 | 1 | 2;
  /**
   * Relationship status: '1' — Not married, '2' — In a relationship, '3' — Engaged, '4' — Married, '5' — It's complicated, '6' — Actively searching, '7' — In love
   */
  status?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  /**
   * Minimum age.
   */
  age_from?: number;
  /**
   * Maximum age.
   */
  age_to?: number;
  /**
   * Day of birth.
   */
  birth_day?: number;
  /**
   * Month of birth.
   */
  birth_month?: number;
  /**
   * Year of birth.
   */
  birth_year?: number;
  /**
   * '1' — online only, '0' — all users
   */
  online?: 0 | 1;
  /**
   * '1' — with photo only, '0' — all users
   */
  has_photo?: 0 | 1;
  /**
   * ID of the country where users finished school.
   */
  school_country?: number;
  /**
   * ID of the city where users finished school.
   */
  school_city?: number;
  school_class?: number;
  /**
   * ID of the school.
   */
  school?: number;
  /**
   * School graduation year.
   */
  school_year?: number;
  /**
   * Users' religious affiliation.
   */
  religion?: string;
  /**
   * Name of the company where users work.
   */
  company?: string;
  /**
   * Job position.
   */
  position?: string;
  /**
   * ID of a community to search in communities.
   */
  group_id?: number;
  from_list?: string;
}

// users.search_response
export interface UsersSearchResponse {
  /**
   * Total number of available results
   */
  count?: number;
  items?: UsersUserFull[];
}
