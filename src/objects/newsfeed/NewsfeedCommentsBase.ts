/**
 * This is auto-generated file, don't modify this file manually
 */

import { WallWallComment } from '../wall/WallWallComment';
import { WallWallpostCommentsDonut } from '../wall/WallWallpostCommentsDonut';

// newsfeed_comments_base
export interface NewsfeedCommentsBase {
  /**
   * Information whether current user can comment the post
   */
  can_post?: 0 | 1;
  can_open?: 0 | 1;
  can_close?: 0 | 1;
  /**
   * Information whether current user can view the comments
   */
  can_view?: 0 | 1;
  /**
   * Comments number
   */
  count?: number;
  /**
   * Information whether groups can comment the post
   */
  groups_can_post?: boolean;
  donut?: WallWallpostCommentsDonut;
  list?: WallWallComment[];
}
