/**
 * This is auto-generated file, don't modify this file manually
 */

// base_likes_info
export interface BaseLikesInfo {
  /**
   * Information whether current user can like the post
   */
  can_like: 0 | 1;
  /**
   * Information whether current user can repost
   */
  can_publish?: 0 | 1;
  /**
   * Likes number
   */
  count: number;
  /**
   * Information whether current uer has liked the post
   */
  user_likes: number;
}
