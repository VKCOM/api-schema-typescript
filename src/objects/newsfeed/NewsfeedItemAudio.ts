/**
 * This is auto-generated file, don't modify this file manually
 */

import { NewsfeedItemAudioAudio } from './NewsfeedItemAudioAudio';
import { NewsfeedItemWallpostFeedback } from './NewsfeedItemWallpostFeedback';
import { NewsfeedNewsfeedItemType } from './NewsfeedNewsfeedItemType';

// newsfeed_item_audio
export interface NewsfeedItemAudio {
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
  audio?: NewsfeedItemAudioAudio;
  /**
   * Post ID
   */
  post_id?: number;
}
