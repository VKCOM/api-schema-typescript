/**
 * This is auto-generated file, don't modify this file manually
 */

import { WallWallpostDonutPlaceholder } from './WallWallpostDonutPlaceholder';

// wall_wallpost_donut edit_mode enum
export enum WallWallpostDonutEditModeEnum {
  ALL = 'all',
  DURATION = 'duration',
}

// wall_wallpost_donut
export interface WallWallpostDonut {
  /**
   * Post only for dons
   */
  is_donut: boolean;
  /**
   * Value of this field need to pass in wall.post/edit in donut_paid_duration
   */
  paid_duration?: number;
  /**
   * If placeholder was respond, text and all attachments will be hidden
   */
  placeholder?: WallWallpostDonutPlaceholder;
  /**
   * Says whether group admin can post free copy of this donut post
   */
  can_publish_free_copy?: boolean;
  /**
   * Says what user can edit in post about donut properties
   */
  edit_mode?: WallWallpostDonutEditModeEnum;
}
