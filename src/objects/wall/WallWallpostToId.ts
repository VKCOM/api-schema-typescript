/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseCommentsInfo } from '../base/BaseCommentsInfo';
import { BaseLikesInfo } from '../base/BaseLikesInfo';
import { BaseRepostsInfo } from '../base/BaseRepostsInfo';
import { WallGeo } from './WallGeo';
import { WallPostSource } from './WallPostSource';
import { WallPostType } from './WallPostType';
import { WallWallpostAttachment } from './WallWallpostAttachment';

// wall_wallpost_to_id
export interface WallWallpostToId {
  attachments?: WallWallpostAttachment[];
  comments?: BaseCommentsInfo;
  /**
   * ID of the source post owner
   */
  copy_owner_id?: number;
  /**
   * ID of the source post
   */
  copy_post_id?: number;
  /**
   * Date of publishing in Unixtime
   */
  date?: number;
  /**
   * Post author ID
   */
  from_id?: number;
  geo?: WallGeo;
  /**
   * Post ID
   */
  id?: number;
  /**
   * Information whether the post in favorites list
   */
  is_favorite?: boolean;
  likes?: BaseLikesInfo;
  /**
   * wall post ID (if comment)
   */
  post_id?: number;
  post_source?: WallPostSource;
  post_type?: WallPostType;
  reposts?: BaseRepostsInfo;
  /**
   * Post signer ID
   */
  signer_id?: number;
  /**
   * Post text
   */
  text?: string;
  /**
   * Wall owner's ID
   */
  to_id?: number;
}
