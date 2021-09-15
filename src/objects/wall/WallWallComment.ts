/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseLikesInfo } from '../base/BaseLikesInfo';
import { CommentThread } from '../comment/CommentThread';
import { WallCommentAttachment } from './WallCommentAttachment';
import { WallWallCommentDonut } from './WallWallCommentDonut';

// wall_wall_comment
export interface WallWallComment {
  /**
   * Comment ID
   */
  id: number;
  /**
   * Author ID
   */
  from_id: number;
  can_edit?: 0 | 1;
  post_id?: number;
  owner_id?: number;
  parents_stack?: number[];
  photo_id?: number;
  video_id?: number;
  /**
   * Date when the comment has been added in Unixtime
   */
  date: number;
  /**
   * Comment text
   */
  text: string;
  attachments?: WallCommentAttachment[];
  donut?: WallWallCommentDonut;
  likes?: BaseLikesInfo;
  /**
   * Real position of the comment
   */
  real_offset?: number;
  /**
   * Replied user ID
   */
  reply_to_user?: number;
  /**
   * Replied comment ID
   */
  reply_to_comment?: number;
  thread?: CommentThread;
  deleted?: boolean;
  /**
   * Photo ID
   */
  pid?: number;
}
