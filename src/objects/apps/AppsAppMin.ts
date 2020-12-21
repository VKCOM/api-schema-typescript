/**
 * This is auto-generated file, don't modify this file manually
 */

import { AppsAppType } from './AppsAppType';

// apps_app_min
export interface AppsAppMin {
  type: AppsAppType;
  /**
   * Application ID
   */
  id: number;
  /**
   * Application title
   */
  title: string;
  /**
   * Application author's ID
   */
  author_owner_id?: number;
  /**
   * Is application installed
   */
  is_installed?: boolean;
  /**
   * URL of the app icon with 139 px in width
   */
  icon_139?: string;
  /**
   * URL of the app icon with 150 px in width
   */
  icon_150?: string;
  /**
   * URL of the app icon with 278 px in width
   */
  icon_278?: string;
  /**
   * URL of the app icon with 576 px in width
   */
  icon_576?: string;
  /**
   * Hex color code without hash sign
   */
  background_loader_color?: string;
  /**
   * SVG data
   */
  loader_icon?: string;
  /**
   * URL of the app icon with 75 px in width
   */
  icon_75?: string;
}
