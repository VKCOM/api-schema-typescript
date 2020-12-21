/**
 * This is auto-generated file, don't modify this file manually
 */

import { PhotosPhoto } from './PhotosPhoto';

// photos_photo_album
export interface PhotosPhotoAlbum {
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
  thumb?: PhotosPhoto;
  /**
   * Photo album title
   */
  title: string;
  /**
   * Date when the album has been updated last time in Unixtime
   */
  updated: number;
}
