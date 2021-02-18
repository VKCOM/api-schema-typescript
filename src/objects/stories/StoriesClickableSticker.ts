/**
 * This is auto-generated file, don't modify this file manually
 */

import { AppsAppMin } from '../apps/AppsAppMin';
import { AudioAudio } from '../audio/AudioAudio';
import { BaseLink } from '../base/BaseLink';
import { MarketMarketItem } from '../market/MarketMarketItem';
import { PollsPoll } from '../polls/PollsPoll';
import { StoriesClickableArea } from './StoriesClickableArea';

// stories_clickable_sticker style enumNames
export const StoriesClickableStickerStyleEnumNames = {
  TRANSPARENT: 'transparent',
  BLUE_GRADIENT: 'blue_gradient',
  RED_GRADIENT: 'red_gradient',
  UNDERLINE: 'underline',
  BLUE: 'blue',
  GREEN: 'green',
  WHITE: 'white',
  QUESTION_REPLY: 'question_reply',
  LIGHT: 'light',
  IMPRESSIVE: 'impressive',
} as const;

// stories_clickable_sticker type enumNames
export const StoriesClickableStickerTypeEnumNames = {
  HASHTAG: 'hashtag',
  MENTION: 'mention',
  LINK: 'link',
  QUESTION: 'question',
  PLACE: 'place',
  MARKET_ITEM: 'market_item',
  MUSIC: 'music',
  STORY_REPLY: 'story_reply',
  OWNER: 'owner',
  POST: 'post',
  POLL: 'poll',
  STICKER: 'sticker',
  APP: 'app',
  SITUATIONAL_THEME: 'situational_theme',
} as const;

// stories_clickable_sticker subtype enumNames
export const StoriesClickableStickerSubtypeEnumNames = {
  MARKET_ITEM: 'market_item',
  ALIEXPRESS_PRODUCT: 'aliexpress_product',
} as const;

// stories_clickable_sticker
export interface StoriesClickableSticker {
  clickable_area: StoriesClickableArea[];
  /**
   * Clickable sticker ID
   */
  id: number;
  hashtag?: string;
  link_object?: BaseLink;
  mention?: string;
  tooltip_text?: string;
  owner_id?: number;
  story_id?: number;
  question?: string;
  question_button?: string;
  place_id?: number;
  market_item?: MarketMarketItem;
  audio?: AudioAudio;
  audio_start_time?: number;
  style?: 'transparent' |
  'blue_gradient' |
  'red_gradient' |
  'underline' |
  'blue' |
  'green' |
  'white' |
  'question_reply' |
  'light' |
  'impressive';
  type: 'hashtag' |
  'mention' |
  'link' |
  'question' |
  'place' |
  'market_item' |
  'music' |
  'story_reply' |
  'owner' |
  'post' |
  'poll' |
  'sticker' |
  'app' |
  'situational_theme';
  subtype?: 'market_item' | 'aliexpress_product';
  post_owner_id?: number;
  post_id?: number;
  poll?: PollsPoll;
  /**
   * Color, hex format
   */
  color?: string;
  /**
   * Sticker ID
   */
  sticker_id?: number;
  /**
   * Sticker pack ID
   */
  sticker_pack_id?: number;
  app?: AppsAppMin;
  /**
   * Additional context for app sticker
   */
  app_context?: string;
  /**
   * Whether current user has unread interaction with this app
   */
  has_new_interactions?: boolean;
  /**
   * Whether current user allowed broadcast notify from this app
   */
  is_broadcast_notify_allowed?: boolean;
  situational_theme_id?: number;
  situational_app_url?: string;
}
