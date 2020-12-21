/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseCommentsInfo } from '../base/BaseCommentsInfo';
import { BaseLikesInfo } from '../base/BaseLikesInfo';
import { BaseRepostsInfo } from '../base/BaseRepostsInfo';
import { WallGeo } from './WallGeo';
import { WallPostCopyright } from './WallPostCopyright';
import { WallPostSource } from './WallPostSource';
import { WallPostType } from './WallPostType';
import { WallViews } from './WallViews';
import { WallWallpost } from './WallWallpost';
import { WallWallpostAttachment } from './WallWallpostAttachment';
import { WallWallpostDonut } from './WallWallpostDonut';

// wall_wallpost_full
export interface WallWallpostFull {
  /**
   * Index of current carousel element
   */
  carousel_offset?: number;
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
  copy_history?: WallWallpost[];
  /**
   * Information whether current user can edit the post
   */
  can_edit?: 0 | 1;
  /**
   * Post creator ID (if post still can be edited)
   */
  created_by?: number;
  /**
   * Information whether current user can delete the post
   */
  can_delete?: 0 | 1;
  /**
   * Information whether current user can pin the post
   */
  can_pin?: 0 | 1;
  donut?: WallWallpostDonut;
  /**
   * Information whether the post is pinned
   */
  is_pinned?: number;
  comments?: BaseCommentsInfo;
  /**
   * Information whether the post is marked as ads
   */
  marked_as_ads?: 0 | 1;
  /**
   * Preview length control parameter
   */
  short_text_rate?: number;
}
