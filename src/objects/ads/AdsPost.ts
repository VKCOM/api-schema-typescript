/**
 * This is auto-generated file, don't modify this file manually
 */

import { WallPostCopyright } from '../wall/WallPostCopyright';
import { WallWallpostAttachment } from '../wall/WallWallpostAttachment';
import { AdsPostComments } from './AdsPostComments';
import { AdsPostDonut } from './AdsPostDonut';
import { AdsPostEasyPromote } from './AdsPostEasyPromote';
import { AdsPostLikes } from './AdsPostLikes';
import { AdsPostOwner } from './AdsPostOwner';
import { AdsPostReposts } from './AdsPostReposts';
import { AdsPostViews } from './AdsPostViews';

// ads_post
export interface AdsPost {
  /**
   * Post id
   */
  id?: number;
  /**
   * From id
   */
  from_id?: number;
  /**
   * Owner id
   */
  owner_id?: number;
  /**
   * Date
   */
  date?: number;
  /**
   * Edited date
   */
  edited?: number;
  /**
   * Is pinned
   */
  is_pinned?: number;
  /**
   * Marked as ads
   */
  marked_as_ads?: number;
  ads_easy_promote?: AdsPostEasyPromote;
  donut?: AdsPostDonut;
  comments?: AdsPostComments;
  copyright?: WallPostCopyright;
  /**
   * Short text rate
   */
  short_text_rate?: number;
  /**
   * Type
   */
  type?: string;
  /**
   * Is favorite
   */
  is_favorite?: boolean;
  likes?: AdsPostLikes;
  views?: AdsPostViews;
  /**
   * Post type
   */
  post_type?: string;
  reposts?: AdsPostReposts;
  /**
   * Text
   */
  text?: string;
  /**
   * Is promoted post stealth
   */
  is_promoted_post_stealth?: boolean;
  /**
   * Hash
   */
  hash?: string;
  owner?: AdsPostOwner;
  attachments?: WallWallpostAttachment[];
  /**
   * Created by
   */
  created_by?: number;
  /**
   * Carousel offset
   */
  carousel_offset?: number;
  /**
   * Can edit
   */
  can_edit?: number;
  /**
   * Can delete
   */
  can_delete?: number;
  /**
   * Can pin
   */
  can_pin?: number;
}
