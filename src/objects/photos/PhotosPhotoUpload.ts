/**
 * This is auto-generated file, don't modify this file manually
 */

// photos_photo_upload
export interface PhotosPhotoUpload {
  /**
   * Album ID
   */
  album_id: number;
  /**
   * URL to upload photo
   */
  upload_url: string;
  /**
   * Fallback URL if upload_url returned error
   */
  fallback_upload_url?: string;
  /**
   * User ID
   */
  user_id: number;
  /**
   * Group ID
   */
  group_id?: number;
}
