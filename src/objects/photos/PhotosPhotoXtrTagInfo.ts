/**
 * This is auto-generated file, don't modify this file manually
 */

import { PhotosPhotoSizes } from './PhotosPhotoSizes';

// photos_photo_xtr_tag_info
export interface PhotosPhotoXtrTagInfo {
  /**
   * Access key for the photo
   */
  access_key?: string;
  /**
   * Album ID
   */
  album_id?: number;
  /**
   * Date when uploaded
   */
  date?: number;
  /**
   * Original photo height
   */
  height?: number;
  /**
   * Photo ID
   */
  id?: number;
  /**
   * Latitude
   */
  lat?: number;
  /**
   * Longitude
   */
  long?: number;
  /**
   * Photo owner's ID
   */
  owner_id?: number;
  /**
   * URL of image with 1280 px width
   */
  photo_1280?: string;
  /**
   * URL of image with 130 px width
   */
  photo_130?: string;
  /**
   * URL of image with 2560 px width
   */
  photo_2560?: string;
  /**
   * URL of image with 604 px width
   */
  photo_604?: string;
  /**
   * URL of image with 75 px width
   */
  photo_75?: string;
  /**
   * URL of image with 807 px width
   */
  photo_807?: string;
  /**
   * ID of the tag creator
   */
  placer_id?: number;
  /**
   * Post ID
   */
  post_id?: number;
  sizes?: PhotosPhotoSizes[];
  /**
   * Date when tag has been added in Unixtime
   */
  tag_created?: number;
  /**
   * Tag ID
   */
  tag_id?: number;
  /**
   * Photo caption
   */
  text?: string;
  /**
   * ID of the user who have uploaded the photo
   */
  user_id?: number;
  /**
   * Original photo width
   */
  width?: number;
  /**
   * Whether photo has attached tag links
   */
  has_tags?: boolean;
}
