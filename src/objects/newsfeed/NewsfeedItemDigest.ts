/**
 * This is auto-generated file, don't modify this file manually
 */

import { NewsfeedItemDigestFooter } from './NewsfeedItemDigestFooter';
import { NewsfeedItemDigestHeader } from './NewsfeedItemDigestHeader';
import { NewsfeedItemDigestItem } from './NewsfeedItemDigestItem';
import { NewsfeedNewsfeedItemType } from './NewsfeedNewsfeedItemType';

// newsfeed_item_digest
export interface NewsfeedItemDigest {
  type: NewsfeedNewsfeedItemType;
  /**
   * Item source ID
   */
  source_id: number;
  /**
   * Date when item has been added in Unixtime
   */
  date: number;
  /**
   * id of feed in digest
   */
  feed_id?: string;
  items?: NewsfeedItemDigestItem[];
  main_post_ids?: string[];
  /**
   * type of digest
   */
  template?: 'list' | 'grid' | 'single';
  header?: NewsfeedItemDigestHeader;
  footer?: NewsfeedItemDigestFooter;
  track_code?: string;
}
