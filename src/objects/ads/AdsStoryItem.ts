/**
 * This is auto-generated file, don't modify this file manually
 */

import { AdsStoryItemLink } from './AdsStoryItemLink';
import { AdsStoryItemStats } from './AdsStoryItemStats';

// ads_story_item
export interface AdsStoryItem {
  /**
   * Story id
   */
  id?: number;
  /**
   * Owner id
   */
  owner_id?: number;
  /**
   * Story raw id
   */
  raw_id?: string;
  /**
   * Date
   */
  date?: string;
  /**
   * Time
   */
  time?: number;
  /**
   * Type
   */
  type?: string;
  /**
   * Is unread
   */
  unread?: boolean;
  /**
   * Can like
   */
  canLike?: boolean;
  /**
   * Can comment
   */
  can_comment?: boolean;
  /**
   * Can share
   */
  can_share?: boolean;
  /**
   * Can remove
   */
  can_remove?: boolean;
  /**
   * Can manage
   */
  can_manage?: boolean;
  /**
   * Can ask
   */
  can_ask?: boolean;
  /**
   * Can ask anonymous
   */
  can_ask_anonymous?: boolean;
  /**
   * Is profile question
   */
  isProfileQuestion?: boolean;
  stats?: AdsStoryItemStats;
  link?: AdsStoryItemLink;
  /**
   * Photo url
   */
  photo_url?: string;
  /**
   * Preview url
   */
  preview_url?: string;
  /**
   * Track code
   */
  track_code?: string;
  /**
   * Is part of narrative
   */
  isPartOfNarrative?: boolean;
  /**
   * Is ads
   */
  isAds?: boolean;
  /**
   * Video url
   */
  video_url?: string;
  /**
   * First frame
   */
  first_frame?: string;
  /**
   * Small preview
   */
  small_preview?: string;
  /**
   * Is liked
   */
  isLiked?: boolean;
}
