/**
 * This is auto-generated file, don't modify this file manually
 */

import { AdsAdCostType } from './AdsAdCostType';
import { AdsClipItem } from './AdsClipItem';
import { AdsPost } from './AdsPost';
import { AdsStories } from './AdsStories';

// ads_ad_layout
export interface AdsAdLayout {
  /**
   * Ad format
   */
  ad_format?: number;
  /**
   * Campaign ID
   */
  campaign_id?: number;
  cost_type?: AdsAdCostType;
  /**
   * Ad description
   */
  description?: string;
  /**
   * Ad ID
   */
  id?: number;
  /**
   * Image URL
   */
  image_src?: string;
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
  link_url?: string;
  /**
   * Type of advertised object
   */
  link_type?: number;
  /**
   * link to preview an ad as it is shown on the website
   */
  preview_link?: string;
  /**
   * Ad title
   */
  title?: string;
  /**
   * Information whether the ad is a video
   */
  video?: 0 | 1;
  /**
   * Social
   */
  social?: boolean;
  /**
   * Okved
   */
  okved?: string;
  /**
   * Age restriction
   */
  age_restriction?: number;
  /**
   * Goal type
   */
  goal_type?: number;
  /**
   * Link title
   */
  link_title?: string;
  /**
   * Link button
   */
  link_button?: string;
  /**
   * Repeat video
   */
  repeat_video?: number;
  /**
   * Video source 240p
   */
  video_src_240?: string;
  /**
   * Video source 360p
   */
  video_src_360?: string;
  /**
   * Video source 480p
   */
  video_src_480?: string;
  /**
   * Video source 720p
   */
  video_src_720?: string;
  /**
   * Video source 1080p
   */
  video_src_1080?: string;
  /**
   * Video source 1440p
   */
  video_src_1440?: string;
  /**
   * Video source 2160p
   */
  video_src_2160?: string;
  /**
   * Video image source
   */
  video_image_src?: string;
  /**
   * Video image source 2x
   */
  video_image_src_2x?: string;
  /**
   * Video duration
   */
  video_duration?: number;
  /**
   * Icon source
   */
  icon_src?: string;
  /**
   * Icon source 2x
   */
  icon_src_2x?: string;
  post?: AdsPost;
  stories_data?: AdsStories;
  clips_list?: AdsClipItem[];
}
