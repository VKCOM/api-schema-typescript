/**
 * This is auto-generated file, don't modify this file manually
 */

import { NewsfeedItemPhotoTagPhotoTags } from './NewsfeedItemPhotoTagPhotoTags';
import { NewsfeedItemWallpostFeedback } from './NewsfeedItemWallpostFeedback';
import { NewsfeedNewsfeedItemType } from './NewsfeedNewsfeedItemType';

// newsfeed_item_photo_tag
export interface NewsfeedItemPhotoTag {
  /**
   * Index of current carousel element
   */
  carousel_offset?: number;
  type?: NewsfeedNewsfeedItemType;
  /**
   * Item source ID
   */
  source_id?: number;
  /**
   * Date when item has been added in Unixtime
   */
  date?: number;
  /**
   * Preview length control parameter
   */
  short_text_rate?: number;
  feedback?: NewsfeedItemWallpostFeedback;
  photo_tags?: NewsfeedItemPhotoTagPhotoTags;
  /**
   * Post ID
   */
  post_id?: number;
}
