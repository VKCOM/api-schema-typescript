/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseCommentsInfo } from '../base/BaseCommentsInfo';
import { BaseLikesInfo } from '../base/BaseLikesInfo';
import { BaseRepostsInfo } from '../base/BaseRepostsInfo';
import { WallGeo } from '../wall/WallGeo';
import { WallPostCopyright } from '../wall/WallPostCopyright';
import { WallPostSource } from '../wall/WallPostSource';
import { WallPostType } from '../wall/WallPostType';
import { WallViews } from '../wall/WallViews';
import { WallWallpostAttachment } from '../wall/WallWallpostAttachment';
import { WallWallpostDonut } from '../wall/WallWallpostDonut';
import { WallWallpostFull } from '../wall/WallWallpostFull';
import { NewsfeedItemWallpostFeedback } from './NewsfeedItemWallpostFeedback';

// newsfeed_comments_item_type_post topic_id enumNames
export const NewsfeedCommentsItemTypePostTopicIdEnumNames = {
  EMPTY_TOPIC: 0,
  ART: 1,
  IT: 7,
  GAMES: 12,
  MUSIC: 16,
  PHOTO: 19,
  SCIENCE_AND_TECH: 21,
  SPORT: 23,
  TRAVEL: 25,
  TV_AND_CINEMA: 26,
  HUMOR: 32,
  FASHION: 43,
} as const;

// newsfeed_comments_item_type_post
export interface NewsfeedCommentsItemTypePost {
  /**
   * Index of current carousel element
   */
  carousel_offset?: number;
  inner_type?: 'wall_wallpost';
  /**
   * Access key to private object
   */
  access_key?: string;
  is_deleted?: boolean;
  deleted_reason?: string;
  deleted_details?: string;
  donut_miniapp_url?: string;
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
  copy_history?: WallWallpostFull[];
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
  is_pinned?: 0 | 1;
  comments?: BaseCommentsInfo;
  /**
   * Information whether the post is marked as ads
   */
  marked_as_ads?: 0 | 1;
  /**
   * Topic ID. Allowed values can be obtained from newsfeed.getPostTopics method
   *
   * `0` — empty_topic
   * `1` — art
   * `7` — it
   * `12` — games
   * `16` — music
   * `19` — photo
   * `21` — science_and_tech
   * `23` — sport
   * `25` — travel
   * `26` — tv_and_cinema
   * `32` — humor
   * `43` — fashion
   */
  topic_id?: 0 | 1 | 7 | 12 | 16 | 19 | 21 | 23 | 25 | 26 | 32 | 43;
  /**
   * Preview length control parameter
   */
  short_text_rate?: number;
  /**
   * Hash for sharing
   */
  hash?: string;
  type?: WallPostType;
  feedback?: NewsfeedItemWallpostFeedback;
  to_id?: number;
  source_id?: number;
}
