/**
 * This is auto-generated file, don't modify this file manually
 */

import { AppWidgetsPhoto } from '../objects/appWidgets/AppWidgetsPhoto';
import { AppWidgetsPhotos } from '../objects/appWidgets/AppWidgetsPhotos';

/**
 * appWidgets.getAppImageUploadServer
 *
 * Returns a URL for uploading a photo to the community collection for community app widgets
 */

export interface AppWidgetsGetAppImageUploadServerParams {
  image_type: '160x160' | '160x240' | '24x24' | '50x50' | '510x128';
}

// appWidgets.getAppImageUploadServer_response
export interface AppWidgetsGetAppImageUploadServerResponse {
  /**
   * To upload an image, generate POST-request to upload_url with a file in photo field. Then call appWidgets.saveAppImage method
   */
  upload_url?: string;
}

/**
 * appWidgets.getAppImages
 *
 * Returns an app collection of images for community app widgets
 */

export interface AppWidgetsGetAppImagesParams {
  /**
   * Offset needed to return a specific subset of images.
   */
  offset?: number;
  /**
   * Maximum count of results.
   */
  count?: number;
  image_type?: '160x160' | '160x240' | '24x24' | '50x50' | '510x128';
}

// appWidgets.getAppImages_response
export type AppWidgetsGetAppImagesResponse = AppWidgetsPhotos;

/**
 * appWidgets.getGroupImageUploadServer
 *
 * Returns a URL for uploading a photo to the community collection for community app widgets
 */

export interface AppWidgetsGetGroupImageUploadServerParams {
  image_type: '160x160' | '160x240' | '24x24' | '50x50' | '510x128';
}

// appWidgets.getGroupImageUploadServer_response
export interface AppWidgetsGetGroupImageUploadServerResponse {
  /**
   * To upload an image, generate POST-request to upload_url with a file in photo field. Then call appWidgets.saveAppImage method
   */
  upload_url?: string;
}

/**
 * appWidgets.getGroupImages
 *
 * Returns a community collection of images for community app widgets
 */

export interface AppWidgetsGetGroupImagesParams {
  /**
   * Offset needed to return a specific subset of images.
   */
  offset?: number;
  /**
   * Maximum count of results.
   */
  count?: number;
  image_type?: '160x160' | '160x240' | '24x24' | '50x50' | '510x128';
}

// appWidgets.getGroupImages_response
export type AppWidgetsGetGroupImagesResponse = AppWidgetsPhotos;

/**
 * appWidgets.getImagesById
 *
 * Returns an image for community app widgets by its ID
 */

export interface AppWidgetsGetImagesByIdParams {
  /**
   * List of images IDs
   */
  images: string[];
}

// appWidgets.getImagesById_response
export type AppWidgetsGetImagesByIdResponse = AppWidgetsPhoto[];

/**
 * appWidgets.saveAppImage
 *
 * Allows to save image into app collection for community app widgets
 */

export interface AppWidgetsSaveAppImageParams {
  /**
   * Parameter returned when photo is uploaded to server
   */
  hash: string;
  /**
   * Parameter returned when photo is uploaded to server
   */
  image: string;
}

// appWidgets.saveAppImage_response
export type AppWidgetsSaveAppImageResponse = AppWidgetsPhoto;

/**
 * appWidgets.saveGroupImage
 *
 * Allows to save image into community collection for community app widgets
 */

export interface AppWidgetsSaveGroupImageParams {
  /**
   * Parameter returned when photo is uploaded to server
   */
  hash: string;
  /**
   * Parameter returned when photo is uploaded to server
   */
  image: string;
}

// appWidgets.saveGroupImage_response
export type AppWidgetsSaveGroupImageResponse = AppWidgetsPhoto;

/**
 * appWidgets.update
 *
 * Allows to update community app widget
 */

export interface AppWidgetsUpdateParams {
  code: string;
  type: 'compact_list' | 'cover_list' | 'donation' | 'list' | 'match' | 'matches' | 'table' | 'text' | 'tiles';
}

// appWidgets.update_response
export type AppWidgetsUpdateResponse = 1;
