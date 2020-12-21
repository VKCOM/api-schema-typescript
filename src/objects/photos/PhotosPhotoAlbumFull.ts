/**
 * This is auto-generated file, don't modify this file manually
 */

import { PhotosPhotoSizes } from './PhotosPhotoSizes';

// photos_photo_album_full
export interface PhotosPhotoAlbumFull {
  /**
   * Information whether current user can upload photo to the album
   */
  can_upload?: 0 | 1;
  /**
   * Information whether album comments are disabled
   */
  comments_disabled?: 0 | 1;
  /**
   * Date when the album has been created in Unixtime
   */
  created: number;
  /**
   * Photo album description
   */
  description?: string;
  /**
   * Photo album ID
   */
  id: number;
  /**
   * Album owner's ID
   */
  owner_id: number;
  /**
   * Photos number
   */
  size: number;
  sizes?: PhotosPhotoSizes[];
  /**
   * Thumb photo ID
   */
  thumb_id?: number;
  /**
   * Information whether the album thumb is last photo
   */
  thumb_is_last?: 0 | 1;
  /**
   * URL of the thumb image
   */
  thumb_src?: string;
  /**
   * Photo album title
   */
  title: string;
  /**
   * Date when the album has been updated last time in Unixtime
   */
  updated: number;
  /**
   * Information whether only community administrators can upload photos
   */
  upload_by_admins_only?: 0 | 1;
}
