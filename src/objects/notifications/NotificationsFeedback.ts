/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseGeo } from '../base/BaseGeo';
import { BaseLikesInfo } from '../base/BaseLikesInfo';
import { WallWallpostAttachment } from '../wall/WallWallpostAttachment';

// notifications_feedback
export interface NotificationsFeedback {
  attachments?: WallWallpostAttachment[];
  /**
   * Reply author's ID
   */
  from_id?: number;
  geo?: BaseGeo;
  /**
   * Item ID
   */
  id?: number;
  likes?: BaseLikesInfo;
  /**
   * Reply text
   */
  text?: string;
  /**
   * Wall owner's ID
   */
  to_id?: number;
}
