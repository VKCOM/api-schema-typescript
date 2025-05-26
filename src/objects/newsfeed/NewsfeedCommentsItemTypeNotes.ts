/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseLikes } from '../base/BaseLikes';
import { NewsfeedCommentsBase } from './NewsfeedCommentsBase';
import { NewsfeedNewsfeedItemType } from './NewsfeedNewsfeedItemType';

// newsfeed_comments_item_type_notes
export interface NewsfeedCommentsItemTypeNotes {
  type?: NewsfeedNewsfeedItemType;
  source_id?: number;
  date?: number;
  post_id?: number;
  text?: string;
  comments?: NewsfeedCommentsBase;
  likes?: BaseLikes;
}
