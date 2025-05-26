/**
 * This is auto-generated file, don't modify this file manually
 */

import { AdsTargetGroupTargetPixelRule } from './AdsTargetGroupTargetPixelRule';

// ads_target_group
export interface AdsTargetGroup {
  /**
   * Group ID
   */
  id?: number;
  /**
   * Group name
   */
  name?: string;
  /**
   * Is audience
   */
  is_audience?: boolean;
  /**
   * Is shared
   */
  is_shared?: boolean;
  /**
   * File source
   */
  file_source?: boolean;
  /**
   * API source
   */
  api_source?: boolean;
  /**
   * File source
   */
  lookalike_source?: boolean;
  /**
   * Audience
   */
  audience_count?: number;
  /**
   * Site domain
   */
  domain?: string;
  /**
   * Number of days for user to be in group
   */
  lifetime?: number;
  /**
   * Pixel code
   */
  pixel?: string;
  /**
   * Target Pixel id
   */
  target_pixel_id?: number;
  /**
   * Target Pixel rules
   */
  target_pixel_rules?: AdsTargetGroupTargetPixelRule[];
  /**
   * Last updated
   */
  last_updated?: number;
}
