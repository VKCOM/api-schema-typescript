/**
 * This is auto-generated file, don't modify this file manually
 */

import { GroupsGroupFull } from '../objects/groups/GroupsGroupFull';
import { NewsfeedList } from '../objects/newsfeed/NewsfeedList';
import { NewsfeedListFull } from '../objects/newsfeed/NewsfeedListFull';
import { NewsfeedNewsfeedItem } from '../objects/newsfeed/NewsfeedNewsfeedItem';
import { UsersSubscriptionsItem } from '../objects/users/UsersSubscriptionsItem';
import { UsersUserFull } from '../objects/users/UsersUserFull';
import { WallWallpostFull } from '../objects/wall/WallWallpostFull';
import { WallWallpostToId } from '../objects/wall/WallWallpostToId';

/**
 * newsfeed.addBan
 *
 * Prevents news from specified users and communities from appearing in the current user's newsfeed.
 */

export interface NewsfeedAddBanParams {
  user_ids?: string;
  group_ids?: string;
}

// newsfeed.addBan_response
export type NewsfeedAddBanResponse = 1;

/**
 * newsfeed.deleteBan
 *
 * Allows news from previously banned users and communities to be shown in the current user's newsfeed.
 */

export interface NewsfeedDeleteBanParams {
  user_ids?: string;
  group_ids?: string;
}

// newsfeed.deleteBan_response
export type NewsfeedDeleteBanResponse = 1;

/**
 * newsfeed.deleteList
 */

export interface NewsfeedDeleteListParams {
  list_id: number;
}

// newsfeed.deleteList_response
export type NewsfeedDeleteListResponse = 1;

/**
 * newsfeed.get
 *
 * Returns data required to show newsfeed for the current user.
 */

export interface NewsfeedGetParams {
  /**
   * Filters to apply: 'post' — new wall posts, 'photo' — new photos, 'photo_tag' — new photo tags, 'wall_photo' — new wall photos, 'friend' — new friends
   *
   * objects.json#/definitions/newsfeed_filters
   */
  filters?: string;
  /**
   * '1' — to return news items from banned sources
   */
  return_banned?: 0 | 1;
  /**
   * Earliest timestamp (in Unix time) of a news item to return. By default, 24 hours ago.
   */
  start_time?: number;
  /**
   * Latest timestamp (in Unix time) of a news item to return. By default, the current time.
   */
  end_time?: number;
  /**
   * Maximum number of photos to return. By default, '5'.
   */
  max_photos?: number;
  /**
   * Sources to obtain news from, separated by commas. User IDs can be specified in formats '' or 'u' , where '' is the user's friend ID. Community IDs can be specified in formats '-' or 'g' , where '' is the community ID. If the parameter is not set, all of the user's friends and communities are returned, except for banned sources, which can be obtained with the [vk.com/dev/newsfeed.getBanned|newsfeed.getBanned] method.
   */
  source_ids?: string;
  /**
   * identifier required to get the next page of results. Value for this parameter is returned in 'next_from' field in a reply.
   */
  start_from?: string;
  /**
   * Number of news items to return (default 50, maximum 100). For auto feed, you can use the 'new_offset' parameter returned by this method.
   */
  count?: number;
  /**
   * Additional fields of [vk.com/dev/fields|profiles] and [vk.com/dev/fields_groups|communities] to return.
   *
   * objects.json#/definitions/base_user_group_fields
   */
  fields?: string;
  section?: string;
}

// newsfeed.get_response
export interface NewsfeedGetResponse {
  items?: NewsfeedNewsfeedItem[];
  profiles?: UsersUserFull[];
  groups?: GroupsGroupFull[];
  /**
   * New from value
   */
  next_from?: string;
}

/**
 * newsfeed.getBanned
 *
 * Returns a list of users and communities banned from the current user's newsfeed.
 */

export interface NewsfeedGetBannedParams {
  /**
   * '1' — return extra information about users and communities
   */
  extended?: 0 | 1;
  /**
   * Profile fields to return.
   *
   * objects.json#/definitions/users_fields
   */
  fields?: string;
  /**
   * Case for declension of user name and surname: 'nom' — nominative (default), 'gen' — genitive , 'dat' — dative, 'acc' — accusative , 'ins' — instrumental , 'abl' — prepositional
   */
  name_case?: 'nom' | 'gen' | 'dat' | 'acc' | 'ins' | 'abl';
}

// newsfeed.getBanned_response
export interface NewsfeedGetBannedResponse {
  groups?: number[];
  members?: number[];
}

// newsfeed.getBanned_extendedResponse
export interface NewsfeedGetBannedExtendedResponse {
  profiles?: UsersUserFull[];
  groups?: GroupsGroupFull[];
}

/**
 * newsfeed.getComments
 *
 * Returns a list of comments in the current user's newsfeed.
 */

export interface NewsfeedGetCommentsParams {
  /**
   * Number of comments to return. For auto feed, you can use the 'new_offset' parameter returned by this method.
   */
  count?: number;
  /**
   * Filters to apply: 'post' — new comments on wall posts, 'photo' — new comments on photos, 'video' — new comments on videos, 'topic' — new comments on discussions, 'note' — new comments on notes,
   *
   * objects.json#/definitions/newsfeed_comments_filters
   */
  filters?: string;
  /**
   * Object ID, comments on repost of which shall be returned, e.g. 'wall1_45486'. (If the parameter is set, the 'filters' parameter is optional.),
   */
  reposts?: string;
  /**
   * Earliest timestamp (in Unix time) of a comment to return. By default, 24 hours ago.
   */
  start_time?: number;
  /**
   * Latest timestamp (in Unix time) of a comment to return. By default, the current time.
   */
  end_time?: number;
  last_comments_count?: number;
  /**
   * Identificator needed to return the next page with results. Value for this parameter returns in 'next_from' field.
   */
  start_from?: string;
  /**
   * Additional fields of [vk.com/dev/fields|profiles] and [vk.com/dev/fields_groups|communities] to return.
   *
   * objects.json#/definitions/base_user_group_fields
   */
  fields?: string;
}

// newsfeed.getComments_response
export interface NewsfeedGetCommentsResponse {
  items: NewsfeedNewsfeedItem[];
  profiles: UsersUserFull[];
  groups: GroupsGroupFull[];
  /**
   * Next from value
   */
  next_from?: string;
}

/**
 * newsfeed.getLists
 *
 * Returns a list of newsfeeds followed by the current user.
 */

export interface NewsfeedGetListsParams {
  /**
   * numeric list identifiers.
   */
  list_ids?: string;
  /**
   * Return additional list info
   */
  extended?: 0 | 1;
}

// newsfeed.getLists_response
export interface NewsfeedGetListsResponse {
  /**
   * Total number
   */
  count: number;
  items: NewsfeedList[];
}

// newsfeed.getLists_extendedResponse
export interface NewsfeedGetListsExtendedResponse {
  /**
   * Total number
   */
  count: number;
  items: NewsfeedListFull[];
}

/**
 * newsfeed.getMentions
 *
 * Returns a list of posts on user walls in which the current user is mentioned.
 */

export interface NewsfeedGetMentionsParams {
  /**
   * Owner ID.
   */
  owner_id?: number;
  /**
   * Earliest timestamp (in Unix time) of a post to return. By default, 24 hours ago.
   */
  start_time?: number;
  /**
   * Latest timestamp (in Unix time) of a post to return. By default, the current time.
   */
  end_time?: number;
  /**
   * Offset needed to return a specific subset of posts.
   */
  offset?: number;
  /**
   * Number of posts to return.
   */
  count?: number;
}

// newsfeed.getMentions_response
export interface NewsfeedGetMentionsResponse {
  /**
   * Total number
   */
  count: number;
  items: WallWallpostToId[];
}

/**
 * newsfeed.getRecommended
 *
 * , Returns a list of newsfeeds recommended to the current user.
 */

export interface NewsfeedGetRecommendedParams {
  /**
   * Earliest timestamp (in Unix time) of a news item to return. By default, 24 hours ago.
   */
  start_time?: number;
  /**
   * Latest timestamp (in Unix time) of a news item to return. By default, the current time.
   */
  end_time?: number;
  /**
   * Maximum number of photos to return. By default, '5'.
   */
  max_photos?: number;
  /**
   * 'new_from' value obtained in previous call.
   */
  start_from?: string;
  /**
   * Number of news items to return.
   */
  count?: number;
  /**
   * Additional fields of [vk.com/dev/fields|profiles] and [vk.com/dev/fields_groups|communities] to return.
   *
   * objects.json#/definitions/base_user_group_fields
   */
  fields?: string;
}

// newsfeed.getRecommended_response
export interface NewsfeedGetRecommendedResponse {
  items?: NewsfeedNewsfeedItem[];
  profiles?: UsersUserFull[];
  groups?: GroupsGroupFull[];
  /**
   * Next from value
   */
  next_from?: string;
}

/**
 * newsfeed.getSuggestedSources
 *
 * Returns communities and users that current user is suggested to follow.
 */

export interface NewsfeedGetSuggestedSourcesParams {
  /**
   * offset required to choose a particular subset of communities or users.
   */
  offset?: number;
  /**
   * amount of communities or users to return.
   */
  count?: number;
  /**
   * shuffle the returned list or not.
   */
  shuffle?: 0 | 1;
  /**
   * list of extra fields to be returned. See available fields for [vk.com/dev/fields|users] and [vk.com/dev/fields_groups|communities].
   *
   * objects.json#/definitions/base_user_group_fields
   */
  fields?: string;
}

// newsfeed.getSuggestedSources_response
export interface NewsfeedGetSuggestedSourcesResponse {
  /**
   * Total number
   */
  count?: number;
  items?: UsersSubscriptionsItem[];
}

/**
 * newsfeed.ignoreItem
 *
 * Hides an item from the newsfeed.
 */

export interface NewsfeedIgnoreItemParams {
  /**
   * Item type. Possible values: *'wall' - post on the wall,, *'tag' - tag on a photo,, *'profilephoto' - profile photo,, *'video' - video,, *'audio' - audio.
   */
  type: string;
  /**
   * Item owner's identifier (user or community), "Note that community id must be negative. 'owner_id=1' - user , 'owner_id=-1' - community "
   */
  owner_id?: number;
  /**
   * Item identifier
   */
  item_id?: number;
}

// newsfeed.ignoreItem_response
export type NewsfeedIgnoreItemResponse = 1;

/**
 * newsfeed.saveList
 *
 * Creates and edits user newsfeed lists
 */

export interface NewsfeedSaveListParams {
  /**
   * numeric list identifier (if not sent, will be set automatically).
   */
  list_id?: number;
  /**
   * list name.
   */
  title: string;
  /**
   * users and communities identifiers to be added to the list. Community identifiers must be negative numbers.
   */
  source_ids?: string;
  /**
   * reposts display on and off ('1' is for off).
   */
  no_reposts?: 0 | 1;
}

// newsfeed.saveList_response
export type NewsfeedSaveListResponse = number;

/**
 * newsfeed.search
 *
 * Returns search results by statuses.
 */

export interface NewsfeedSearchParams {
  /**
   * Search query string (e.g., 'New Year').
   */
  q?: string;
  /**
   * '1' — to return additional information about the user or community that placed the post.
   */
  extended?: 0 | 1;
  /**
   * Number of posts to return.
   */
  count?: number;
  /**
   * Geographical latitude point (in degrees, -90 to 90) within which to search.
   */
  latitude?: number;
  /**
   * Geographical longitude point (in degrees, -180 to 180) within which to search.
   */
  longitude?: number;
  /**
   * Earliest timestamp (in Unix time) of a news item to return. By default, 24 hours ago.
   */
  start_time?: number;
  /**
   * Latest timestamp (in Unix time) of a news item to return. By default, the current time.
   */
  end_time?: number;
  start_from?: string;
  /**
   * Additional fields of [vk.com/dev/fields|profiles] and [vk.com/dev/fields_groups|communities] to return.
   *
   * objects.json#/definitions/base_user_group_fields
   */
  fields?: string;
}

// newsfeed.search_response
export interface NewsfeedSearchResponse {
  items?: WallWallpostFull[];
  suggested_queries?: string[];
  next_from?: string;
  /**
   * Filtered number
   */
  count?: number;
  /**
   * Total number
   */
  total_count?: number;
}

// newsfeed.search_extendedResponse
export interface NewsfeedSearchExtendedResponse {
  items?: WallWallpostFull[];
  profiles?: UsersUserFull[];
  groups?: GroupsGroupFull[];
  suggested_queries?: string[];
  next_from?: string;
  /**
   * Filtered number
   */
  count?: number;
  /**
   * Total number
   */
  total_count?: number;
}

/**
 * newsfeed.unignoreItem
 *
 * Returns a hidden item to the newsfeed.
 */

export interface NewsfeedUnignoreItemParams {
  /**
   * Item type. Possible values: *'wall' - post on the wall,, *'tag' - tag on a photo,, *'profilephoto' - profile photo,, *'video' - video,, *'audio' - audio.
   */
  type: string;
  /**
   * Item owner's identifier (user or community), "Note that community id must be negative. 'owner_id=1' - user , 'owner_id=-1' - community "
   */
  owner_id: number;
  /**
   * Item identifier
   */
  item_id: number;
  /**
   * Track code of unignored item
   */
  track_code?: string;
}

// newsfeed.unignoreItem_response
export type NewsfeedUnignoreItemResponse = 1;

/**
 * newsfeed.unsubscribe
 *
 * Unsubscribes the current user from specified newsfeeds.
 */

export interface NewsfeedUnsubscribeParams {
  /**
   * Type of object from which to unsubscribe: 'note' — note, 'photo' — photo, 'post' — post on user wall or community wall, 'topic' — topic, 'video' — video
   */
  type: 'note' | 'photo' | 'post' | 'topic' | 'video';
  /**
   * Object owner ID.
   */
  owner_id?: number;
  /**
   * Object ID.
   */
  item_id: number;
}

// newsfeed.unsubscribe_response
export type NewsfeedUnsubscribeResponse = 1;
