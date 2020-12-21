/**
 * This is auto-generated file, don't modify this file manually
 */

import { AppsAppLeaderboardType } from './AppsAppLeaderboardType';
import { AppsAppType } from './AppsAppType';

// apps_app
export interface AppsApp {
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
  /**
   * Application author's URL
   */
  author_url?: string;
  /**
   * URL of the app banner with 1120 px in width
   */
  banner_1120?: string;
  /**
   * URL of the app banner with 560 px in width
   */
  banner_560?: string;
  /**
   * URL of the app icon with 16 px in width
   */
  icon_16?: string;
  /**
   * Is new flag
   */
  is_new?: 0 | 1;
  /**
   * Is push enabled
   */
  push_enabled?: 0 | 1;
  /**
   * Screen orientation
   */
  screen_orientation?: number;
  friends?: number[];
  /**
   * Catalog position
   */
  catalog_position?: number;
  /**
   * Application description
   */
  description?: string;
  /**
   * Genre name
   */
  genre?: string;
  /**
   * Genre ID
   */
  genre_id?: number;
  /**
   * Information whether the application is multilanguage
   */
  international?: boolean;
  /**
   * Information whether application is in mobile catalog
   */
  is_in_catalog?: number;
  leaderboard_type?: AppsAppLeaderboardType;
  /**
   * Members number
   */
  members_count?: number;
  /**
   * Application ID in store
   */
  platform_id?: string;
  /**
   * Date when the application has been published in Unixtime
   */
  published_date?: number;
  /**
   * Screen name
   */
  screen_name?: string;
  /**
   * Application section name
   */
  section?: string;
}
