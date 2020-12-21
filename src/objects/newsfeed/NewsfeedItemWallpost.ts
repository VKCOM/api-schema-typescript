/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseCommentsInfo } from '../base/BaseCommentsInfo';
import { BaseGeo } from '../base/BaseGeo';
import { BaseLikesInfo } from '../base/BaseLikesInfo';
import { BaseRepostsInfo } from '../base/BaseRepostsInfo';
import { WallPostSource } from '../wall/WallPostSource';
import { WallViews } from '../wall/WallViews';
import { WallWallpost } from '../wall/WallWallpost';
import { WallWallpostAttachment } from '../wall/WallWallpostAttachment';
import { NewsfeedEventActivity } from './NewsfeedEventActivity';
import { NewsfeedItemWallpostFeedback } from './NewsfeedItemWallpostFeedback';
import { NewsfeedItemWallpostType } from './NewsfeedItemWallpostType';
import { NewsfeedNewsfeedItemType } from './NewsfeedNewsfeedItemType';

// newsfeed_item_wallpost
export interface NewsfeedItemWallpost {
  /**
   * Index of current carousel element
   */
  carousel_offset?: number;
  type: NewsfeedNewsfeedItemType;
  /**
   * Item source ID
   */
  source_id: number;
  /**
   * Date when item has been added in Unixtime
   */
  date: number;
  activity?: NewsfeedEventActivity;
  attachments?: WallWallpostAttachment[];
  comments?: BaseCommentsInfo;
  copy_history?: WallWallpost[];
  feedback?: NewsfeedItemWallpostFeedback;
  geo?: BaseGeo;
  /**
   * Information whether the post in favorites list
   */
  is_favorite?: boolean;
  likes?: BaseLikesInfo;
  /**
   * Information whether the post is marked as ads
   */
  marked_as_ads?: 0 | 1;
  /**
   * Post ID
   */
  post_id?: number;
  post_source?: WallPostSource;
  post_type?: NewsfeedItemWallpostType;
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
  /**
   * Preview length control parameter
   */
  short_text_rate?: number;
}
