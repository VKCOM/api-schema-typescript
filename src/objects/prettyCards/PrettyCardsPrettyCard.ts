/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseImage } from '../base/BaseImage';

// prettyCards_prettyCard
export interface PrettyCardsPrettyCard {
  inner_type?: 'prettyCards_prettyCard';
  /**
   * Button key
   */
  button?: {} | string;
  /**
   * Button text in current language
   */
  button_text?: string;
  /**
   * Card ID (long int returned as string)
   */
  card_id?: string;
  images?: BaseImage[];
  /**
   * Link URL
   */
  link_url?: string;
  /**
   * Photo ID (format "<owner_id>_<media_id>")
   */
  photo?: string;
  /**
   * Price if set (decimal number returned as string)
   */
  price?: string;
  /**
   * Old price if set (decimal number returned as string)
   */
  price_old?: string;
  /**
   * Title
   */
  title?: string;
}
