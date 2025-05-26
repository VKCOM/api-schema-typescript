/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseLinkButtonAction } from './BaseLinkButtonAction';
import { BaseLinkButtonStyle } from './BaseLinkButtonStyle';

// base_link_button
export interface BaseLinkButton {
  /**
   * Button action
   */
  action?: BaseLinkButtonAction;
  /**
   * Button title
   */
  title?: string;
  /**
   * Target block id
   */
  block_id?: string;
  /**
   * Target section id
   */
  section_id?: string;
  /**
   * artist id
   */
  artist_id?: string;
  /**
   * curator id
   */
  curator_id?: number;
  /**
   * Video album id
   */
  album_id?: number;
  /**
   * Owner id
   */
  owner_id?: number;
  /**
   * Button icon name, e.g. 'phone' or 'gift'
   */
  icon?: string;
  style?: BaseLinkButtonStyle;
  audio_id?: number;
  hashtag?: string;
}
