/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseImage } from './BaseImage';
import { BaseOwnerCoverCropParams } from './BaseOwnerCoverCropParams';

// base_owner_cover
export interface BaseOwnerCover {
  /**
   * Information whether cover is enabled
   */
  enabled?: 0 | 1;
  images?: BaseImage[];
  crop_params?: BaseOwnerCoverCropParams;
  original_image?: BaseImage;
  photo_id?: number;
}
