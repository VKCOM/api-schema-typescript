/**
 * This is auto-generated file, don't modify this file manually
 */

import { WidgetsCommentRepliesItem } from './WidgetsCommentRepliesItem';

// widgets_comment_replies
export interface WidgetsCommentReplies {
  /**
   * Information whether current user can comment the post
   */
  can_post?: 0 | 1;
  /**
   * Comments number
   */
  count?: number;
  replies?: WidgetsCommentRepliesItem[];
}
