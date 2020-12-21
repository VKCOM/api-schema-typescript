/**
 * This is auto-generated file, don't modify this file manually
 */

import { PagesWikipage } from '../objects/pages/PagesWikipage';
import { PagesWikipageFull } from '../objects/pages/PagesWikipageFull';
import { PagesWikipageHistory } from '../objects/pages/PagesWikipageHistory';

/**
 * pages.clearCache
 *
 * Allows to clear the cache of particular 'external' pages which may be attached to VK posts.
 */

export interface PagesClearCacheParams {
  /**
   * Address of the page where you need to refesh the cached version
   */
  url: string;
}

// pages.clearCache_response
export type PagesClearCacheResponse = 1;

/**
 * pages.get
 *
 * Returns information about a wiki page.
 */

export interface PagesGetParams {
  /**
   * Page owner ID.
   */
  owner_id?: number;
  /**
   * Wiki page ID.
   */
  page_id?: number;
  /**
   * '1' — to return information about a global wiki page
   */
  global?: 0 | 1;
  /**
   * '1' — resulting wiki page is a preview for the attached link
   */
  site_preview?: 0 | 1;
  /**
   * Wiki page title.
   */
  title?: string;
  need_source?: 0 | 1;
  /**
   * '1' — to return the page as HTML,
   */
  need_html?: 0 | 1;
}

// pages.get_response
export type PagesGetResponse = PagesWikipageFull;

/**
 * pages.getHistory
 *
 * Returns a list of all previous versions of a wiki page.
 */

export interface PagesGetHistoryParams {
  /**
   * Wiki page ID.
   */
  page_id: number;
  /**
   * ID of the community that owns the wiki page.
   */
  group_id?: number;
  user_id?: number;
}

// pages.getHistory_response
export type PagesGetHistoryResponse = PagesWikipageHistory[];

/**
 * pages.getTitles
 *
 * Returns a list of wiki pages in a group.
 */

export interface PagesGetTitlesParams {
  /**
   * ID of the community that owns the wiki page.
   */
  group_id?: number;
}

// pages.getTitles_response
export type PagesGetTitlesResponse = PagesWikipage[];

/**
 * pages.getVersion
 *
 * Returns the text of one of the previous versions of a wiki page.
 */

export interface PagesGetVersionParams {
  version_id: number;
  /**
   * ID of the community that owns the wiki page.
   */
  group_id?: number;
  user_id?: number;
  /**
   * '1' — to return the page as HTML
   */
  need_html?: 0 | 1;
}

// pages.getVersion_response
export type PagesGetVersionResponse = PagesWikipageFull;

/**
 * pages.parseWiki
 *
 * Returns HTML representation of the wiki markup.
 */

export interface PagesParseWikiParams {
  /**
   * Text of the wiki page.
   */
  text: string;
  /**
   * ID of the group in the context of which this markup is interpreted.
   */
  group_id?: number;
}

// pages.parseWiki_response
export type PagesParseWikiResponse = string;

/**
 * pages.save
 *
 * Saves the text of a wiki page.
 */

export interface PagesSaveParams {
  /**
   * Text of the wiki page in wiki-format.
   */
  text?: string;
  /**
   * Wiki page ID. The 'title' parameter can be passed instead of 'pid'.
   */
  page_id?: number;
  /**
   * ID of the community that owns the wiki page.
   */
  group_id?: number;
  /**
   * User ID
   */
  user_id?: number;
  /**
   * Wiki page title.
   */
  title?: string;
}

// pages.save_response
export type PagesSaveResponse = number;

/**
 * pages.saveAccess
 *
 * Saves modified read and edit access settings for a wiki page.
 */

export interface PagesSaveAccessParams {
  /**
   * Wiki page ID.
   */
  page_id: number;
  /**
   * ID of the community that owns the wiki page.
   */
  group_id?: number;
  user_id?: number;
  /**
   * Who can view the wiki page: '1' — only community members, '2' — all users can view the page, '0' — only community managers
   */
  view?: 0 | 1 | 2;
  /**
   * Who can edit the wiki page: '1' — only community members, '2' — all users can edit the page, '0' — only community managers
   */
  edit?: 0 | 1 | 2;
}

// pages.saveAccess_response
export type PagesSaveAccessResponse = number;
