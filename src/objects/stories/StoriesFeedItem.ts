/**
 * This is auto-generated file, don't modify this file manually
 */

import { AppsAppMin } from '../apps/AppsAppMin';
import { StoriesPromoBlock } from './StoriesPromoBlock';
import { StoriesStory } from './StoriesStory';

// stories_feed_item type enumNames
export const StoriesFeedItemTypeEnumNames = {
  PROMO_STORIES: 'promo_stories',
  STORIES: 'stories',
  LIVE_ACTIVE: 'live_active',
  LIVE_FINISHED: 'live_finished',
  COMMUNITY_GROUPED_STORIES: 'community_grouped_stories',
  APP_GROUPED_STORIES: 'app_grouped_stories',
  BIRTHDAY: 'birthday',
} as const;

// stories_feed_item
export interface StoriesFeedItem {
  /**
   * Type of Feed Item
   */
  type: 'promo_stories' |
  'stories' |
  'live_active' |
  'live_finished' |
  'community_grouped_stories' |
  'app_grouped_stories' |
  'birthday';
  id?: string;
  /**
   * Author stories
   */
  stories?: StoriesStory[];
  /**
   * Grouped stories of various authors (for types community_grouped_stories/app_grouped_stories type)
   */
  grouped?: StoriesFeedItem[];
  /**
   * App, which stories has been grouped (for type app_grouped_stories)
   */
  app?: AppsAppMin;
  /**
   * Additional data for promo stories (for type promo_stories)
   */
  promo_data?: StoriesPromoBlock;
  birthday_user_id?: number;
}
