/**
 * This is auto-generated file, don't modify this file manually
 */

// account_info
export interface AccountInfo {
  'wishlists_ae_promo_banner_show'?: 0 | 1;
  /**
   * Two factor authentication is enabled
   */
  '2fa_required'?: 0 | 1;
  /**
   * Country code
   */
  'country'?: string;
  /**
   * Information whether HTTPS-only is enabled
   */
  'https_required'?: 0 | 1;
  /**
   * Information whether user has been processed intro
   */
  'intro'?: 0 | 1;
  'show_vk_apps_intro'?: boolean;
  /**
   * Ads slot id for MyTarget
   */
  'mini_apps_ads_slot_id'?: number;
  'qr_promotion'?: number;
  'link_redirects'?: {};
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
  'subscriptions'?: {};
}
