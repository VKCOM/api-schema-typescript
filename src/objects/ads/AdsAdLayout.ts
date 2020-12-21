/**
 * This is auto-generated file, don't modify this file manually
 */

import { AdsAdCostType } from './AdsAdCostType';

// ads_ad_layout
export interface AdsAdLayout {
  /**
   * Ad format
   */
  ad_format: number;
  /**
   * Campaign ID
   */
  campaign_id: number;
  cost_type: AdsAdCostType;
  /**
   * Ad description
   */
  description: string;
  /**
   * Ad ID
   */
  id: string;
  /**
   * Image URL
   */
  image_src: string;
  /**
   * URL of the preview image in double size
   */
  image_src_2x?: string;
  /**
   * Domain of advertised object
   */
  link_domain?: string;
  /**
   * URL of advertised object
   */
  link_url: string;
  /**
   * link to preview an ad as it is shown on the website
   */
  preview_link?: number | string;
  /**
   * Ad title
   */
  title: string;
  /**
   * Information whether the ad is a video
   */
  video?: 0 | 1;
}
