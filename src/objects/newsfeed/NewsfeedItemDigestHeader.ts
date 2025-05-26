/**
 * This is auto-generated file, don't modify this file manually
 */

import { NewsfeedItemDigestButton } from './NewsfeedItemDigestButton';

// newsfeed_item_digest_header
export interface NewsfeedItemDigestHeader {
  /**
   * Title of the header
   */
  title?: string;
  /**
   * Subtitle of the header, when title have two strings
   */
  subtitle?: string;
  /**
   * Optional field for red badge in Trends feed blocks
   */
  badge_text?: string;
  style?: 'singleline' | 'multiline';
  button?: NewsfeedItemDigestButton;
}
