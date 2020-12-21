/**
 * This is auto-generated file, don't modify this file manually
 */

import { WallWallpostCommentsDonut } from '../wall/WallWallpostCommentsDonut';

// base_comments_info
export interface BaseCommentsInfo {
  /**
   * Information whether current user can comment the post
   */
  can_post?: 0 | 1;
  /**
   * Comments number
   */
  count?: number;
  /**
   * Information whether groups can comment the post
   */
  groups_can_post?: boolean;
  donut?: WallWallpostCommentsDonut;
}
