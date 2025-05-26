/**
 * This is auto-generated file, don't modify this file manually
 */

import { NewsfeedItemPromoButtonAction } from './NewsfeedItemPromoButtonAction';
import { NewsfeedItemPromoButtonImage } from './NewsfeedItemPromoButtonImage';
import { NewsfeedItemWallpostFeedback } from './NewsfeedItemWallpostFeedback';
import { NewsfeedNewsfeedItemType } from './NewsfeedNewsfeedItemType';

// newsfeed_item_promo_button
export interface NewsfeedItemPromoButton {
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
  text?: string;
  title?: string;
  action?: NewsfeedItemPromoButtonAction;
  images?: NewsfeedItemPromoButtonImage[];
}
