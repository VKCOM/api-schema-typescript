/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseCommentsInfo } from '../base/BaseCommentsInfo';
import { BaseLikesInfo } from '../base/BaseLikesInfo';
import { NewsfeedNewsfeedItemType } from './NewsfeedNewsfeedItemType';

// newsfeed_item_topic
export interface NewsfeedItemTopic {
  type: NewsfeedNewsfeedItemType;
  /**
   * Item source ID
   */
  source_id: number;
  /**
   * Date when item has been added in Unixtime
   */
  date: number;
  comments?: BaseCommentsInfo;
  likes?: BaseLikesInfo;
  /**
   * Topic post ID
   */
  post_id: number;
  /**
   * Post text
   */
  text: string;
}
