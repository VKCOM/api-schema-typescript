/**
 * This is auto-generated file, don't modify this file manually
 */

import { WallWallComment } from '../wall/WallWallComment';

// comment_thread
export interface CommentThread {
  /**
   * Information whether current user can comment the post
   */
  can_post?: boolean;
  /**
   * Comments number
   */
  count: number;
  /**
   * Information whether groups can comment the post
   */
  groups_can_post?: boolean;
  items?: WallWallComment[];
  /**
   * Information whether recommended to display reply button
   */
  show_reply_button?: boolean;
}
