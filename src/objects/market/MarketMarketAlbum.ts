/**
 * This is auto-generated file, don't modify this file manually
 */

import { PhotosPhoto } from '../photos/PhotosPhoto';

// market_market_album
export interface MarketMarketAlbum {
  /**
   * Market album ID
   */
  id: number;
  /**
   * Market album owner's ID
   */
  owner_id: number;
  /**
   * Market album title
   */
  title: string;
  /**
   * Items number
   */
  count: number;
  photo?: PhotosPhoto;
  /**
   * Date when album has been updated last time in Unixtime
   */
  updated_time: number;
}
