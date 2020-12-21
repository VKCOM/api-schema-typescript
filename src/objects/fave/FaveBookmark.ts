/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseLink } from '../base/BaseLink';
import { MarketMarketItem } from '../market/MarketMarketItem';
import { VideoVideo } from '../video/VideoVideo';
import { WallWallpostFull } from '../wall/WallWallpostFull';
import { FaveBookmarkType } from './FaveBookmarkType';
import { FaveTag } from './FaveTag';

// fave_bookmark
export interface FaveBookmark {
  /**
   * Timestamp, when this item was bookmarked
   */
  added_date: number;
  link?: BaseLink;
  post?: WallWallpostFull;
  product?: MarketMarketItem;
  /**
   * Has user seen this item
   */
  seen: boolean;
  tags: FaveTag[];
  /**
   * Item type
   */
  type: FaveBookmarkType;
  video?: VideoVideo;
}
