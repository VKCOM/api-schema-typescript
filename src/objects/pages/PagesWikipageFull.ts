/**
 * This is auto-generated file, don't modify this file manually
 */

import { PagesPrivacySettings } from './PagesPrivacySettings';

// pages_wikipage_full
export interface PagesWikipageFull {
  /**
   * Date when the page has been created in Unixtime
   */
  created?: number;
  /**
   * Page creator ID
   */
  creator_id?: number;
  /**
   * Information whether current user can edit the page
   */
  current_user_can_edit?: 0 | 1;
  /**
   * Information whether current user can edit the page access settings
   */
  current_user_can_edit_access?: 0 | 1;
  /**
   * Date when the page has been edited in Unixtime
   */
  edited?: number;
  /**
   * Last editor ID
   */
  editor_id?: number;
  /**
   * Community ID
   */
  group_id?: number;
  /**
   * Page content, HTML
   */
  html?: string;
  /**
   * Page ID
   */
  id?: number;
  /**
   * Page content, wiki
   */
  source?: string;
  /**
   * Page title
   */
  title?: string;
  /**
   * URL of the page preview
   */
  view_url?: string;
  /**
   * Views number
   */
  views?: number;
  /**
   * Edit settings of the page
   */
  who_can_edit?: PagesPrivacySettings;
  /**
   * View settings of the page
   */
  who_can_view?: PagesPrivacySettings;
  /**
   * URL
   */
  url?: string;
  /**
   * Parent
   */
  parent?: string;
  /**
   * Parent2
   */
  parent2?: string;
  /**
   * Owner ID
   */
  owner_id?: number;
}
