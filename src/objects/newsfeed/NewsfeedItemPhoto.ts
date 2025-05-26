/**
 * This is auto-generated file, don't modify this file manually
 */

import { NewsfeedItemPhotoPhotos } from './NewsfeedItemPhotoPhotos';
import { NewsfeedItemWallpostFeedback } from './NewsfeedItemWallpostFeedback';
import { NewsfeedNewsfeedItemType } from './NewsfeedNewsfeedItemType';

// newsfeed_item_photo
export interface NewsfeedItemPhoto {
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
  photos?: NewsfeedItemPhotoPhotos;
  /**
   * Post ID
   */
  post_id?: number;
}
