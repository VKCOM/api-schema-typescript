/**
 * This is auto-generated file, don't modify this file manually
 */

import { GiftsGiftPrivacy } from './GiftsGiftPrivacy';
import { GiftsLayout } from './GiftsLayout';

// gifts_gift
export interface GiftsGift {
  /**
   * Date when gist has been sent in Unixtime
   */
  date?: number;
  /**
   * Gift sender ID
   */
  from_id?: number;
  gift?: GiftsLayout;
  /**
   * Hash
   */
  gift_hash?: string;
  /**
   * Gift ID
   */
  id?: number;
  /**
   * Comment text
   */
  message?: string;
  privacy?: GiftsGiftPrivacy;
}
