/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseLikesInfo } from '../base/BaseLikesInfo';
import { CommentThread } from '../comment/CommentThread';
import { WallCommentAttachment } from './WallCommentAttachment';
import { WallWallCommentDonut } from './WallWallCommentDonut';

// wall_wall_comment
export interface WallWallComment {
  attachments?: WallCommentAttachment[];
  /**
   * Date when the comment has been added in Unixtime
   */
  date: number;
  donut?: WallWallCommentDonut;
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
   * Real position of the comment
   */
  real_offset?: number;
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
  thread?: CommentThread;
  post_id?: number;
  owner_id?: number;
  parents_stack?: number[];
  deleted?: boolean;
}
