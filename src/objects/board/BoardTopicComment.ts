/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseLikesInfo } from '../base/BaseLikesInfo';
import { WallCommentAttachment } from '../wall/WallCommentAttachment';

// board_topic_comment
export interface BoardTopicComment {
  attachments?: WallCommentAttachment[];
  /**
   * Date when the comment has been added in Unixtime
   */
  date?: number;
  /**
   * Author ID
   */
  from_id?: number;
  /**
   * Comment ID
   */
  id?: number;
  /**
   * Real position of the comment
   */
  real_offset?: number;
  /**
   * Comment text
   */
  text?: string;
  /**
   * Information whether current user can edit the comment
   */
  can_edit?: 0 | 1;
  likes?: BaseLikesInfo;
}
