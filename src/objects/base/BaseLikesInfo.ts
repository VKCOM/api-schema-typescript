/**
 * This is auto-generated file, don't modify this file manually
 */

// base_likes_info
export interface BaseLikesInfo {
  /**
   * Information whether current user can like the post
   */
  can_like?: 0 | 1;
  /**
   * Information whether current user can repost
   */
  can_publish?: 0 | 1;
  /**
   * Whether user can like comment as author
   */
  can_like_as_author?: 0 | 1;
  /**
   * Whether current owner of the group can like the reply
   */
  can_like_by_group?: 0 | 1;
  /**
   * Likes number
   */
  count?: number;
  /**
   * Information whether current uer has liked the post
   */
  user_likes?: 0 | 1;
  /**
   * Information whether post author liked the reply
   */
  author_liked?: boolean;
  /**
   * Information whether group liked the reply
   */
  group_liked?: boolean;
  /**
   * Remove repost feature for post
   */
  repost_disabled?: boolean;
}
