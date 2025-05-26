/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseLink } from '../base/BaseLink';
import { MarketMarketItemFull } from '../market/MarketMarketItemFull';
import { VideoVideoFull } from '../video/VideoVideoFull';
import { WallWallpostFull } from '../wall/WallWallpostFull';
import { FaveBookmarkType } from './FaveBookmarkType';
import { FaveTag } from './FaveTag';

// fave_bookmark
export interface FaveBookmark {
  /**
   * Timestamp, when this item was bookmarked
   */
  added_date?: number;
  link?: BaseLink;
  post?: WallWallpostFull;
  product?: MarketMarketItemFull;
  /**
   * Has user seen this item
   */
  seen?: boolean;
  tags?: FaveTag[];
  /**
   * Item type
   */
  type?: FaveBookmarkType;
  video?: VideoVideoFull;
}
