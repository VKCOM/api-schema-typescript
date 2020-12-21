/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseLikesInfo } from '../base/BaseLikesInfo';
import { BaseRepostsInfo } from '../base/BaseRepostsInfo';
import { WallGeo } from './WallGeo';
import { WallPostCopyright } from './WallPostCopyright';
import { WallPostSource } from './WallPostSource';
import { WallPostType } from './WallPostType';
import { WallViews } from './WallViews';
import { WallWallpostAttachment } from './WallWallpostAttachment';

// wall_wallpost
export interface WallWallpost {
  /**
   * Access key to private object
   */
  access_key?: string;
  attachments?: WallWallpostAttachment[];
  /**
   * Information about the source of the post
   */
  copyright?: WallPostCopyright;
  /**
   * Date of publishing in Unixtime
   */
  date?: number;
  /**
   * Date of editing in Unixtime
   */
  edited?: number;
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
   * Is post archived, only for post owners
   */
  is_archived?: boolean;
  /**
   * Information whether the post in favorites list
   */
  is_favorite?: boolean;
  /**
   * Count of likes
   */
  likes?: BaseLikesInfo;
  /**
   * Wall owner's ID
   */
  owner_id?: number;
  poster?: {};
  /**
   * If post type 'reply', contains original post ID
   */
  post_id?: number;
  /**
   * If post type 'reply', contains original parent IDs stack
   */
  parents_stack?: number[];
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
   * Count of views
   */
  views?: WallViews;
}
