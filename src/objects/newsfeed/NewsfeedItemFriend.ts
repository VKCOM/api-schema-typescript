/**
 * This is auto-generated file, don't modify this file manually
 */

import { NewsfeedItemFriendFriends } from './NewsfeedItemFriendFriends';
import { NewsfeedNewsfeedItemType } from './NewsfeedNewsfeedItemType';

// newsfeed_item_friend
export interface NewsfeedItemFriend {
  type: NewsfeedNewsfeedItemType;
  /**
   * Item source ID
   */
  source_id: number;
  /**
   * Date when item has been added in Unixtime
   */
  date: number;
  friends?: NewsfeedItemFriendFriends;
}
