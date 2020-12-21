/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseLikesInfo } from '../base/BaseLikesInfo';
import { CommentThread } from '../comment/CommentThread';
import { WallCommentAttachment } from '../wall/WallCommentAttachment';

// photos_comment_xtr_pid
export interface PhotosCommentXtrPid {
  attachments?: WallCommentAttachment[];
  /**
   * Date when the comment has been added in Unixtime
   */
  date: number;
  /**
   * Author ID
   */
  from_id: number;
  /**
   * Comment ID
   */
  id: number;
  likes?: BaseLikesInfo;
  /**
   * Photo ID
   */
  pid: number;
  /**
   * Replied comment ID
   */
  reply_to_comment?: number;
  /**
   * Replied user ID
   */
  reply_to_user?: number;
  /**
   * Comment text
   */
  text: string;
  parents_stack?: number[];
  thread?: CommentThread;
}
