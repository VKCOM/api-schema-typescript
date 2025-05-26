/**
 * This is auto-generated file, don't modify this file manually
 */

// account_info
export interface AccountInfo {
  /**
   * Two factor authentication is enabled
   */
  '2fa_required'?: 0 | 1;
  /**
   * Information whether HTTPS-only is enabled
   */
  'https_required'?: 0 | 1;
  /**
   * Information whether user has been processed intro
   */
  'intro'?: number;
  /**
   * Language ID
   */
  'lang'?: number;
  /**
   * Information whether wall comments should be hidden
   */
  'no_wall_replies'?: 0 | 1;
  /**
   * Information whether only owners posts should be shown
   */
  'own_posts_default'?: 0 | 1;
}
