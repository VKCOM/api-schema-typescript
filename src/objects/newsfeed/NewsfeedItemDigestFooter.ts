/**
 * This is auto-generated file, don't modify this file manually
 */

import { NewsfeedItemDigestButton } from './NewsfeedItemDigestButton';

// newsfeed_item_digest_footer style enumNames
export const NewsfeedItemDigestFooterStyleEnumNames = {
  TEXT: 'text',
  BUTTON: 'button',
} as const;

// newsfeed_item_digest_footer
export interface NewsfeedItemDigestFooter {
  style: 'text' | 'button';
  /**
   * text for invite to enable smart feed
   */
  text: string;
  button?: NewsfeedItemDigestButton;
}
