/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseLikes } from '../base/BaseLikes';
import { BaseObjectCount } from '../base/BaseObjectCount';
import { BaseRepostsInfo } from '../base/BaseRepostsInfo';
import { PhotosImage } from './PhotosImage';
import { PhotosPhotoSizes } from './PhotosPhotoSizes';

// photos_photo
export interface PhotosPhoto {
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
  images?: PhotosImage[];
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
   * URL of image with 2560 px width
   */
  photo_256?: string;
  /**
   * Thumb Hash
   */
  thumb_hash?: string;
  /**
   * Information whether current user can comment the photo
   */
  can_comment?: 0 | 1;
  place?: string;
  /**
   * Post ID
   */
  post_id?: number;
  sizes?: PhotosPhotoSizes[];
  square_crop?: string;
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
  likes?: BaseLikes;
  comments?: BaseObjectCount;
  reposts?: BaseRepostsInfo;
  tags?: BaseObjectCount;
  /**
   * Returns if the photo is hidden above the wall
   */
  hidden?: 1;
  /**
   * Real position of the photo
   */
  real_offset?: number;
  /**
   * Sets vertical alignment of a photo
   */
  vertical_align?: 'top' | 'middle' | 'bottom';
}
