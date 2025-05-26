/**
 * This is auto-generated file, don't modify this file manually
 */

import { PhotosPhoto } from '../photos/PhotosPhoto';

// market_market_album type enumNames
export const MarketMarketAlbumTypeEnumNames = {
  MARKET: 0,
  MARKET_SERVICES: 1,
} as const;

// market_market_album
export interface MarketMarketAlbum {
  /**
   * Market album ID
   */
  id?: number;
  /**
   * Market album owner's ID
   */
  owner_id?: number;
  /**
   * Market album title
   */
  title?: string;
  /**
   * Items number
   */
  count?: number;
  /**
   * Is album main for owner
   */
  is_main?: boolean;
  /**
   * Is album hidden
   */
  is_hidden?: boolean;
  photo?: PhotosPhoto;
  /**
   * Date when album has been updated last time in Unixtime
   */
  updated_time?: number;
  /**
   * Type of album
   *
   * `0` — market
   * `1` — market_services
   */
  type?: 0 | 1;
  /**
   * Is album needed to be blurred (18+) or not
   */
  is_blur_enabled?: boolean;
}
