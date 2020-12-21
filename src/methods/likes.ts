/**
 * This is auto-generated file, don't modify this file manually
 */

import { UsersUserMin } from '../objects/users/UsersUserMin';

/**
 * likes.add
 *
 * Adds the specified object to the 'Likes' list of the current user.
 */

export interface LikesAddParams {
  /**
   * Object type: 'post' — post on user or community wall, 'comment' — comment on a wall post, 'photo' — photo, 'audio' — audio, 'video' — video, 'note' — note, 'photo_comment' — comment on the photo, 'video_comment' — comment on the video, 'topic_comment' — comment in the discussion, 'sitepage' — page of the site where the [vk.com/dev/Like|Like widget] is installed
   */
  type: string;
  /**
   * ID of the user or community that owns the object.
   */
  owner_id?: number;
  /**
   * Object ID.
   */
  item_id: number;
  /**
   * Access key required for an object owned by a private entity.
   */
  access_key?: string;
}

// likes.add_response
export interface LikesAddResponse {
  /**
   * Total likes number
   */
  likes: number;
}

/**
 * likes.delete
 *
 * Deletes the specified object from the 'Likes' list of the current user.
 */

export interface LikesDeleteParams {
  /**
   * Object type: 'post' — post on user or community wall, 'comment' — comment on a wall post, 'photo' — photo, 'audio' — audio, 'video' — video, 'note' — note, 'photo_comment' — comment on the photo, 'video_comment' — comment on the video, 'topic_comment' — comment in the discussion, 'sitepage' — page of the site where the [vk.com/dev/Like|Like widget] is installed
   */
  type: string;
  /**
   * ID of the user or community that owns the object.
   */
  owner_id?: number;
  /**
   * Object ID.
   */
  item_id: number;
  /**
   * Access key required for an object owned by a private entity.
   */
  access_key?: string;
}

// likes.delete_response
export interface LikesDeleteResponse {
  /**
   * Total likes number
   */
  likes: number;
}

/**
 * likes.getList
 *
 * Returns a list of IDs of users who added the specified object to their 'Likes' list.
 */

export interface LikesGetListParams {
  /**
   * , Object type: 'post' — post on user or community wall, 'comment' — comment on a wall post, 'photo' — photo, 'audio' — audio, 'video' — video, 'note' — note, 'photo_comment' — comment on the photo, 'video_comment' — comment on the video, 'topic_comment' — comment in the discussion, 'sitepage' — page of the site where the [vk.com/dev/Like|Like widget] is installed
   */
  type: string;
  /**
   * ID of the user, community, or application that owns the object. If the 'type' parameter is set as 'sitepage', the application ID is passed as 'owner_id'. Use negative value for a community id. If the 'type' parameter is not set, the 'owner_id' is assumed to be either the current user or the same application ID as if the 'type' parameter was set to 'sitepage'.
   */
  owner_id?: number;
  /**
   * Object ID. If 'type' is set as 'sitepage', 'item_id' can include the 'page_id' parameter value used during initialization of the [vk.com/dev/Like|Like widget].
   */
  item_id?: number;
  /**
   * URL of the page where the [vk.com/dev/Like|Like widget] is installed. Used instead of the 'item_id' parameter.
   */
  page_url?: string;
  /**
   * Filters to apply: 'likes' — returns information about all users who liked the object (default), 'copies' — returns information only about users who told their friends about the object
   */
  filter?: 'likes' | 'copies';
  /**
   * Specifies which users are returned: '1' — to return only the current user's friends, '0' — to return all users (default)
   */
  friends_only?: 0 | 1 | 2 | 3;
  /**
   * Specifies whether extended information will be returned. '1' — to return extended information about users and communities from the 'Likes' list, '0' — to return no additional information (default)
   */
  extended?: 0 | 1;
  /**
   * Offset needed to select a specific subset of users.
   */
  offset?: number;
  /**
   * Number of user IDs to return (maximum '1000'). Default is '100' if 'friends_only' is set to '0', otherwise, the default is '10' if 'friends_only' is set to '1'.
   */
  count?: number;
  skip_own?: 0 | 1;
}

// likes.getList_response
export interface LikesGetListResponse {
  /**
   * Total number
   */
  count: number;
  items: number[];
}

// likes.getList_extendedResponse
export interface LikesGetListExtendedResponse {
  /**
   * Total number
   */
  count: number;
  items: UsersUserMin[];
}

/**
 * likes.isLiked
 *
 * Checks for the object in the 'Likes' list of the specified user.
 */

export interface LikesIsLikedParams {
  /**
   * User ID.
   */
  user_id?: number;
  /**
   * Object type: 'post' — post on user or community wall, 'comment' — comment on a wall post, 'photo' — photo, 'audio' — audio, 'video' — video, 'note' — note, 'photo_comment' — comment on the photo, 'video_comment' — comment on the video, 'topic_comment' — comment in the discussion
   */
  type: string;
  /**
   * ID of the user or community that owns the object.
   */
  owner_id?: number;
  /**
   * Object ID.
   */
  item_id: number;
}

// likes.isLiked_response
export interface LikesIsLikedResponse {
  /**
   * Information whether user liked the object
   */
  liked: 0 | 1;
  /**
   * Information whether user reposted the object
   */
  copied: 0 | 1;
}
