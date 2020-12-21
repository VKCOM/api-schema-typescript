/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseUserGroupFields } from '../objects/base/BaseUserGroupFields';
import { GroupsGroup } from '../objects/groups/GroupsGroup';
import { GroupsGroupFull } from '../objects/groups/GroupsGroupFull';
import { UsersUser } from '../objects/users/UsersUser';
import { UsersUserFull } from '../objects/users/UsersUserFull';
import { WallWallComment } from '../objects/wall/WallWallComment';
import { WallWallpostFull } from '../objects/wall/WallWallpostFull';

/**
 * wall.checkCopyrightLink
 */

export interface WallCheckCopyrightLinkParams {
  link: string;
}

// wall.checkCopyrightLink_response
export type WallCheckCopyrightLinkResponse = 0 | 1;

/**
 * wall.closeComments
 */

export interface WallCloseCommentsParams {
  owner_id: number;
  post_id: number;
}

// wall.closeComments_response
export type WallCloseCommentsResponse = 0 | 1;

/**
 * wall.createComment
 *
 * Adds a comment to a post on a user wall or community wall.
 */

export interface WallCreateCommentParams {
  /**
   * User ID or community ID. Use a negative value to designate a community ID.
   */
  owner_id?: number;
  /**
   * Post ID.
   */
  post_id: number;
  /**
   * Group ID.
   */
  from_group?: number;
  /**
   * (Required if 'attachments' is not set.) Text of the comment.
   */
  message?: string;
  /**
   * ID of comment to reply.
   */
  reply_to_comment?: number;
  /**
   * (Required if 'message' is not set.) List of media objects attached to the comment, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media ojbect: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — ID of the media owner. '<media_id>' — Media ID. For example: "photo100172_166443618,photo66748_265827614"
   */
  attachments?: string[];
  /**
   * Sticker ID.
   */
  sticker_id?: number;
  /**
   * Unique identifier to avoid repeated comments.
   */
  guid?: string;
}

// wall.createComment_response
export interface WallCreateCommentResponse {
  /**
   * Created comment ID
   */
  comment_id: number;
}

/**
 * wall.delete
 *
 * Deletes a post from a user wall or community wall.
 */

export interface WallDeleteParams {
  /**
   * User ID or community ID. Use a negative value to designate a community ID.
   */
  owner_id?: number;
  /**
   * ID of the post to be deleted.
   */
  post_id?: number;
}

// wall.delete_response
export type WallDeleteResponse = 1;

/**
 * wall.deleteComment
 *
 * Deletes a comment on a post on a user wall or community wall.
 */

export interface WallDeleteCommentParams {
  /**
   * User ID or community ID. Use a negative value to designate a community ID.
   */
  owner_id?: number;
  /**
   * Comment ID.
   */
  comment_id: number;
}

// wall.deleteComment_response
export type WallDeleteCommentResponse = 1;

/**
 * wall.edit
 *
 * Edits a post on a user wall or community wall.
 */

export interface WallEditParams {
  /**
   * User ID or community ID. Use a negative value to designate a community ID.
   */
  owner_id?: number;
  post_id: number;
  friends_only?: 0 | 1;
  /**
   * (Required if 'attachments' is not set.) Text of the post.
   */
  message?: string;
  /**
   * (Required if 'message' is not set.) List of objects attached to the post, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — ID of the media application owner. '<media_id>' — Media application ID. Example: "photo100172_166443618,photo66748_265827614", May contain a link to an external page to include in the post. Example: "photo66748_265827614,http://habrahabr.ru", "NOTE: If more than one link is being attached, an error is thrown."
   */
  attachments?: string[];
  services?: string;
  signed?: 0 | 1;
  publish_date?: number;
  lat?: number;
  long?: number;
  place_id?: number;
  mark_as_ads?: 0 | 1;
  close_comments?: 0 | 1;
  donut_paid_duration?: number;
  poster_bkg_id?: number;
  poster_bkg_owner_id?: number;
  poster_bkg_access_hash?: string;
  copyright?: string;
}

// wall.edit_response
export interface WallEditResponse {
  /**
   * Edited post ID
   */
  post_id: number;
}

/**
 * wall.editAdsStealth
 *
 * Allows to edit hidden post.
 */

export interface WallEditAdsStealthParams {
  /**
   * User ID or community ID. Use a negative value to designate a community ID.
   */
  owner_id?: number;
  /**
   * Post ID. Used for publishing of scheduled and suggested posts.
   */
  post_id: number;
  /**
   * (Required if 'attachments' is not set.) Text of the post.
   */
  message?: string;
  /**
   * (Required if 'message' is not set.) List of objects attached to the post, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, 'page' — wiki-page, 'note' — note, 'poll' — poll, 'album' — photo album, '<owner_id>' — ID of the media application owner. '<media_id>' — Media application ID. Example: "photo100172_166443618,photo66748_265827614", May contain a link to an external page to include in the post. Example: "photo66748_265827614,http://habrahabr.ru", "NOTE: If more than one link is being attached, an error will be thrown."
   */
  attachments?: string[];
  /**
   * Only for posts in communities with 'from_group' set to '1': '1' — post will be signed with the name of the posting user, '0' — post will not be signed (default)
   */
  signed?: 0 | 1;
  /**
   * Geographical latitude of a check-in, in degrees (from -90 to 90).
   */
  lat?: number;
  /**
   * Geographical longitude of a check-in, in degrees (from -180 to 180).
   */
  long?: number;
  /**
   * ID of the location where the user was tagged.
   */
  place_id?: number;
  /**
   * Link button ID
   */
  link_button?: string;
  /**
   * Link title
   */
  link_title?: string;
  /**
   * Link image url
   */
  link_image?: string;
  /**
   * Link video ID in format "<owner_id>_<media_id>"
   */
  link_video?: string;
}

// wall.editAdsStealth_response
export type WallEditAdsStealthResponse = 1;

/**
 * wall.editComment
 *
 * Edits a comment on a user wall or community wall.
 */

export interface WallEditCommentParams {
  /**
   * User ID or community ID. Use a negative value to designate a community ID.
   */
  owner_id?: number;
  /**
   * Comment ID.
   */
  comment_id: number;
  /**
   * New comment text.
   */
  message?: string;
  /**
   * List of objects attached to the comment, in the following format: , "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — ID of the media attachment owner. '<media_id>' — Media attachment ID. For example: "photo100172_166443618,photo66748_265827614"
   */
  attachments?: string[];
}

// wall.editComment_response
export type WallEditCommentResponse = 1;

/**
 * wall.get
 *
 * Returns a list of posts on a user wall or community wall.
 */

export interface WallGetParams {
  /**
   * ID of the user or community that owns the wall. By default, current user ID. Use a negative value to designate a community ID.
   */
  owner_id?: number;
  /**
   * User or community short address.
   */
  domain?: string;
  /**
   * Offset needed to return a specific subset of posts.
   */
  offset?: number;
  /**
   * Number of posts to return (maximum 100).
   */
  count?: number;
  /**
   * Filter to apply: 'owner' — posts by the wall owner, 'others' — posts by someone else, 'all' — posts by the wall owner and others (default), 'postponed' — timed posts (only available for calls with an 'access_token'), 'suggests' — suggested posts on a community wall
   */
  filter?: 'owner' | 'others' | 'all' | 'postponed' | 'suggests';
  /**
   * '1' — to return 'wall', 'profiles', and 'groups' fields, '0' — to return no additional fields (default)
   */
  extended?: 0 | 1;
  fields?: BaseUserGroupFields[];
}

// wall.get_response
export interface WallGetResponse {
  /**
   * Total number
   */
  count: number;
  items: WallWallpostFull[];
}

// wall.get_extendedResponse
export interface WallGetExtendedResponse {
  /**
   * Total number
   */
  count: number;
  items: WallWallpostFull[];
  profiles: UsersUserFull[];
  groups: GroupsGroupFull[];
}

/**
 * wall.getById
 *
 * Returns a list of posts from user or community walls by their IDs.
 */

export interface WallGetByIdParams {
  /**
   * User or community IDs and post IDs, separated by underscores. Use a negative value to designate a community ID. Example: "93388_21539,93388_20904,2943_4276,-1_1"
   */
  posts: string[];
  /**
   * '1' — to return user and community objects needed to display posts, '0' — no additional fields are returned (default)
   */
  extended?: 0 | 1;
  /**
   * Sets the number of parent elements to include in the array 'copy_history' that is returned if the post is a repost from another wall.
   */
  copy_history_depth?: number;
  fields?: BaseUserGroupFields[];
}

// wall.getById_response
export type WallGetByIdResponse = WallWallpostFull[];

// wall.getById_extendedResponse
export interface WallGetByIdExtendedResponse {
  items: WallWallpostFull[];
  profiles: UsersUserFull[];
  groups: GroupsGroupFull[];
}

/**
 * wall.getComment
 *
 * Returns a comment on a post on a user wall or community wall.
 */

export interface WallGetCommentParams {
  /**
   * User ID or community ID. Use a negative value to designate a community ID.
   */
  owner_id?: number;
  /**
   * Comment ID.
   */
  comment_id: number;
  extended?: 0 | 1;
  fields?: BaseUserGroupFields[];
}

// wall.getComment_response
export interface WallGetCommentResponse {
  items: WallWallComment[];
}

// wall.getComment_extendedResponse
export interface WallGetCommentExtendedResponse {
  items: WallWallComment[];
  profiles: UsersUser[];
  groups: GroupsGroup[];
}

/**
 * wall.getComments
 *
 * Returns a list of comments on a post on a user wall or community wall.
 */

export interface WallGetCommentsParams {
  /**
   * User ID or community ID. Use a negative value to designate a community ID.
   */
  owner_id?: number;
  /**
   * Post ID.
   */
  post_id?: number;
  /**
   * '1' — to return the 'likes' field, '0' — not to return the 'likes' field (default)
   */
  need_likes?: 0 | 1;
  start_comment_id?: number;
  /**
   * Offset needed to return a specific subset of comments.
   */
  offset?: number;
  /**
   * Number of comments to return (maximum 100).
   */
  count?: number;
  /**
   * Sort order: 'asc' — chronological, 'desc' — reverse chronological
   */
  sort?: 'asc' | 'desc';
  /**
   * Number of characters at which to truncate comments when previewed. By default, '90'. Specify '0' if you do not want to truncate comments.
   */
  preview_length?: number;
  extended?: 0 | 1;
  fields?: BaseUserGroupFields[];
  /**
   * Comment ID.
   */
  comment_id?: number;
  /**
   * Count items in threads.
   */
  thread_items_count?: number;
}

// wall.getComments_response
export interface WallGetCommentsResponse {
  /**
   * Total number
   */
  count: number;
  items: WallWallComment[];
  /**
   * Information whether current user can comment the post
   */
  can_post?: boolean;
  /**
   * Information whether groups can comment the post
   */
  groups_can_post?: boolean;
  /**
   * Count of replies of current level
   */
  current_level_count?: number;
}

// wall.getComments_extendedResponse
export interface WallGetCommentsExtendedResponse {
  /**
   * Total number
   */
  count: number;
  items: WallWallComment[];
  show_reply_button?: boolean;
  /**
   * Information whether current user can comment the post
   */
  can_post?: boolean;
  /**
   * Information whether groups can comment the post
   */
  groups_can_post?: boolean;
  /**
   * Count of replies of current level
   */
  current_level_count?: number;
  profiles: UsersUser[];
  groups: GroupsGroup[];
}

/**
 * wall.getReposts
 *
 * Returns information about reposts of a post on user wall or community wall.
 */

export interface WallGetRepostsParams {
  /**
   * User ID or community ID. By default, current user ID. Use a negative value to designate a community ID.
   */
  owner_id?: number;
  /**
   * Post ID.
   */
  post_id?: number;
  /**
   * Offset needed to return a specific subset of reposts.
   */
  offset?: number;
  /**
   * Number of reposts to return.
   */
  count?: number;
}

// wall.getReposts_response
export interface WallGetRepostsResponse {
  items: WallWallpostFull[];
  profiles: UsersUser[];
  groups: GroupsGroup[];
}

/**
 * wall.openComments
 */

export interface WallOpenCommentsParams {
  owner_id: number;
  post_id: number;
}

// wall.openComments_response
export type WallOpenCommentsResponse = 0 | 1;

/**
 * wall.pin
 *
 * Pins the post on wall.
 */

export interface WallPinParams {
  /**
   * ID of the user or community that owns the wall. By default, current user ID. Use a negative value to designate a community ID.
   */
  owner_id?: number;
  /**
   * Post ID.
   */
  post_id: number;
}

// wall.pin_response
export type WallPinResponse = 1;

/**
 * wall.post
 *
 * Adds a new post on a user wall or community wall. Can also be used to publish suggested or scheduled posts.
 */

export interface WallPostParams {
  /**
   * User ID or community ID. Use a negative value to designate a community ID.
   */
  owner_id?: number;
  /**
   * '1' — post will be available to friends only, '0' — post will be available to all users (default)
   */
  friends_only?: 0 | 1;
  /**
   * For a community: '1' — post will be published by the community, '0' — post will be published by the user (default)
   */
  from_group?: 0 | 1;
  /**
   * (Required if 'attachments' is not set.) Text of the post.
   */
  message?: string;
  /**
   * (Required if 'message' is not set.) List of objects attached to the post, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, 'page' — wiki-page, 'note' — note, 'poll' — poll, 'album' — photo album, '<owner_id>' — ID of the media application owner. '<media_id>' — Media application ID. Example: "photo100172_166443618,photo66748_265827614", May contain a link to an external page to include in the post. Example: "photo66748_265827614,http://habrahabr.ru", "NOTE: If more than one link is being attached, an error will be thrown."
   */
  attachments?: string[];
  /**
   * List of services or websites the update will be exported to, if the user has so requested. Sample values: 'twitter', 'facebook'.
   */
  services?: string;
  /**
   * Only for posts in communities with 'from_group' set to '1': '1' — post will be signed with the name of the posting user, '0' — post will not be signed (default)
   */
  signed?: 0 | 1;
  /**
   * Publication date (in Unix time). If used, posting will be delayed until the set time.
   */
  publish_date?: number;
  /**
   * Geographical latitude of a check-in, in degrees (from -90 to 90).
   */
  lat?: number;
  /**
   * Geographical longitude of a check-in, in degrees (from -180 to 180).
   */
  long?: number;
  /**
   * ID of the location where the user was tagged.
   */
  place_id?: number;
  /**
   * Post ID. Used for publishing of scheduled and suggested posts.
   */
  post_id?: number;
  guid?: string;
  mark_as_ads?: 0 | 1;
  close_comments?: 0 | 1;
  donut_paid_duration?: number;
  mute_notifications?: 0 | 1;
  copyright?: string;
}

// wall.post_response
export interface WallPostResponse {
  /**
   * Created post ID
   */
  post_id: number;
}

/**
 * wall.postAdsStealth
 *
 * Allows to create hidden post which will not be shown on the community's wall and can be used for creating an ad with type "Community post".
 */

export interface WallPostAdsStealthParams {
  /**
   * User ID or community ID. Use a negative value to designate a community ID.
   */
  owner_id: number;
  /**
   * (Required if 'attachments' is not set.) Text of the post.
   */
  message?: string;
  /**
   * (Required if 'message' is not set.) List of objects attached to the post, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, 'page' — wiki-page, 'note' — note, 'poll' — poll, 'album' — photo album, '<owner_id>' — ID of the media application owner. '<media_id>' — Media application ID. Example: "photo100172_166443618,photo66748_265827614", May contain a link to an external page to include in the post. Example: "photo66748_265827614,http://habrahabr.ru", "NOTE: If more than one link is being attached, an error will be thrown."
   */
  attachments?: string[];
  /**
   * Only for posts in communities with 'from_group' set to '1': '1' — post will be signed with the name of the posting user, '0' — post will not be signed (default)
   */
  signed?: 0 | 1;
  /**
   * Geographical latitude of a check-in, in degrees (from -90 to 90).
   */
  lat?: number;
  /**
   * Geographical longitude of a check-in, in degrees (from -180 to 180).
   */
  long?: number;
  /**
   * ID of the location where the user was tagged.
   */
  place_id?: number;
  /**
   * Unique identifier to avoid duplication the same post.
   */
  guid?: string;
  /**
   * Link button ID
   */
  link_button?: string;
  /**
   * Link title
   */
  link_title?: string;
  /**
   * Link image url
   */
  link_image?: string;
  /**
   * Link video ID in format "<owner_id>_<media_id>"
   */
  link_video?: string;
}

// wall.postAdsStealth_response
export interface WallPostAdsStealthResponse {
  /**
   * Created post ID
   */
  post_id: number;
}

/**
 * wall.reportComment
 *
 * Reports (submits a complaint about) a comment on a post on a user wall or community wall.
 */

export interface WallReportCommentParams {
  /**
   * ID of the user or community that owns the wall.
   */
  owner_id: number;
  /**
   * Comment ID.
   */
  comment_id: number;
  /**
   * Reason for the complaint: '0' – spam, '1' – child pornography, '2' – extremism, '3' – violence, '4' – drug propaganda, '5' – adult material, '6' – insult, abuse
   */
  reason?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

// wall.reportComment_response
export type WallReportCommentResponse = 1;

/**
 * wall.reportPost
 *
 * Reports (submits a complaint about) a post on a user wall or community wall.
 */

export interface WallReportPostParams {
  /**
   * ID of the user or community that owns the wall.
   */
  owner_id: number;
  /**
   * Post ID.
   */
  post_id: number;
  /**
   * Reason for the complaint: '0' – spam, '1' – child pornography, '2' – extremism, '3' – violence, '4' – drug propaganda, '5' – adult material, '6' – insult, abuse
   */
  reason?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

// wall.reportPost_response
export type WallReportPostResponse = 1;

/**
 * wall.repost
 *
 * Reposts (copies) an object to a user wall or community wall.
 */

export interface WallRepostParams {
  /**
   * ID of the object to be reposted on the wall. Example: "wall66748_3675"
   */
  object: string;
  /**
   * Comment to be added along with the reposted object.
   */
  message?: string;
  /**
   * Target community ID when reposting to a community.
   */
  group_id?: number;
  mark_as_ads?: 0 | 1;
  mute_notifications?: 0 | 1;
}

// wall.repost_response
export interface WallRepostResponse {
  success: number;
  /**
   * Created post ID
   */
  post_id: number;
  /**
   * Reposts number
   */
  reposts_count: number;
  /**
   * Reposts to wall number
   */
  wall_repost_count?: number;
  /**
   * Reposts to mail number
   */
  mail_repost_count?: number;
  /**
   * Reposts number
   */
  likes_count: number;
}

/**
 * wall.restore
 *
 * Restores a post deleted from a user wall or community wall.
 */

export interface WallRestoreParams {
  /**
   * User ID or community ID from whose wall the post was deleted. Use a negative value to designate a community ID.
   */
  owner_id?: number;
  /**
   * ID of the post to be restored.
   */
  post_id?: number;
}

// wall.restore_response
export type WallRestoreResponse = 1;

/**
 * wall.restoreComment
 *
 * Restores a comment deleted from a user wall or community wall.
 */

export interface WallRestoreCommentParams {
  /**
   * User ID or community ID. Use a negative value to designate a community ID.
   */
  owner_id?: number;
  /**
   * Comment ID.
   */
  comment_id: number;
}

// wall.restoreComment_response
export type WallRestoreCommentResponse = 1;

/**
 * wall.search
 *
 * Allows to search posts on user or community walls.
 */

export interface WallSearchParams {
  /**
   * user or community id. "Remember that for a community 'owner_id' must be negative."
   */
  owner_id?: number;
  /**
   * user or community screen name.
   */
  domain?: string;
  /**
   * search query string.
   */
  query?: string;
  /**
   * '1' – returns only page owner's posts.
   */
  owners_only?: 0 | 1;
  /**
   * count of posts to return.
   */
  count?: number;
  /**
   * Offset needed to return a specific subset of posts.
   */
  offset?: number;
  /**
   * show extended post info.
   */
  extended?: 0 | 1;
  fields?: BaseUserGroupFields[];
}

// wall.search_response
export interface WallSearchResponse {
  /**
   * Total number
   */
  count: number;
  items: WallWallpostFull[];
}

// wall.search_extendedResponse
export interface WallSearchExtendedResponse {
  /**
   * Total number
   */
  count: number;
  items: WallWallpostFull[];
  profiles: UsersUserFull[];
  groups: GroupsGroupFull[];
}

/**
 * wall.unpin
 *
 * Unpins the post on wall.
 */

export interface WallUnpinParams {
  /**
   * ID of the user or community that owns the wall. By default, current user ID. Use a negative value to designate a community ID.
   */
  owner_id?: number;
  /**
   * Post ID.
   */
  post_id: number;
}

// wall.unpin_response
export type WallUnpinResponse = 1;
