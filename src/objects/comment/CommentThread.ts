/**
 * This is auto-generated file, don't modify this file manually
 */

import { WallWallComment } from '../wall/WallWallComment';

// comment_thread
export interface CommentThread {
  /**
   * Comments number
   */
  count?: number;
  items?: WallWallComment[];
  /**
   * Information whether current user can comment the post
   */
  can_post?: boolean;
  /**
   * Information whether recommended to display reply button
   */
  show_reply_button?: boolean;
  /**
   * Information whether groups can comment the post
   */
  groups_can_post?: boolean;
  /**
   * Information whether author commented the thread
   */
  author_replied?: boolean;
}
