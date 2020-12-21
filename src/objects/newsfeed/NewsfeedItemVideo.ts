/**
 * This is auto-generated file, don't modify this file manually
 */

import { NewsfeedItemVideoVideo } from './NewsfeedItemVideoVideo';
import { NewsfeedNewsfeedItemType } from './NewsfeedNewsfeedItemType';

// newsfeed_item_video
export interface NewsfeedItemVideo {
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
  video?: NewsfeedItemVideoVideo;
}
