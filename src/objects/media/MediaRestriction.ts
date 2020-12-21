/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseImage } from '../base/BaseImage';
import { VideoRestrictionButton } from '../video/VideoRestrictionButton';

// media_restriction
export interface MediaRestriction {
  text?: string;
  title: string;
  button?: VideoRestrictionButton;
  /**
   * Need show restriction always or not
   */
  always_shown?: 0 | 1;
  /**
   * Need blur current video or not
   */
  blur?: 0 | 1;
  /**
   * Can play video or not
   */
  can_play?: 0 | 1;
  /**
   * Can preview video or not
   */
  can_preview?: 0 | 1;
  card_icon?: BaseImage[];
  list_icon?: BaseImage[];
}
