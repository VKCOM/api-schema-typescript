/**
 * This is auto-generated file, don't modify this file manually
 */

import { PhotosPhoto } from '../photos/PhotosPhoto';

// market_market_album
export interface MarketMarketAlbum {
  /**
   * Items number
   */
  count: number;
  /**
   * Market album ID
   */
  id: number;
  /**
   * Market album owner's ID
   */
  owner_id: number;
  photo?: PhotosPhoto;
  /**
   * Market album title
   */
  title: string;
  /**
   * Date when album has been updated last time in Unixtime
   */
  updated_time: number;
}
