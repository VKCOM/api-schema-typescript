/**
 * This is auto-generated file, don't modify this file manually
 */

// photos_photo_tag
export interface PhotosPhotoTag {
  /**
   * Date when tag has been added in Unixtime
   */
  date?: number;
  /**
   * Tag ID
   */
  id?: number;
  /**
   * ID of the tag creator
   */
  placer_id?: number;
  /**
   * Tag description
   */
  tagged_name?: string;
  /**
   * Tagged description.
   */
  description?: string;
  /**
   * Tagged user ID
   */
  user_id?: number;
  /**
   * Information whether the tag is reviewed
   */
  viewed?: 0 | 1;
  /**
   * Coordinate X of the left upper corner
   */
  x?: number;
  /**
   * Coordinate X of the right lower corner
   */
  x2?: number;
  /**
   * Coordinate Y of the left upper corner
   */
  y?: number;
  /**
   * Coordinate Y of the right lower corner
   */
  y2?: number;
}
