/**
 * This is auto-generated file, don't modify this file manually
 */

import { UtilsDomainResolved } from '../objects/utils/UtilsDomainResolved';
import { UtilsLastShortenedLink } from '../objects/utils/UtilsLastShortenedLink';
import { UtilsLinkChecked } from '../objects/utils/UtilsLinkChecked';
import { UtilsLinkStats } from '../objects/utils/UtilsLinkStats';
import { UtilsLinkStatsExtended } from '../objects/utils/UtilsLinkStatsExtended';
import { UtilsShortLink } from '../objects/utils/UtilsShortLink';

/**
 * utils.checkLink
 *
 * Checks whether a link is blocked in VK.
 */

export interface UtilsCheckLinkParams {
  /**
   * Link to check (e.g., 'http://google.com').
   */
  url: string;
}

// utils.checkLink_response
export type UtilsCheckLinkResponse = UtilsLinkChecked;

/**
 * utils.deleteFromLastShortened
 *
 * Deletes shortened link from user's list.
 */

export interface UtilsDeleteFromLastShortenedParams {
  /**
   * Link key (characters after vk.cc/).
   */
  key: string;
}

// utils.deleteFromLastShortened_response
export type UtilsDeleteFromLastShortenedResponse = 1;

/**
 * utils.getLastShortenedLinks
 *
 * Returns a list of user's shortened links.
 */

export interface UtilsGetLastShortenedLinksParams {
  /**
   * Number of links to return.
   */
  count?: number;
  /**
   * Offset needed to return a specific subset of links.
   */
  offset?: number;
}

// utils.getLastShortenedLinks_response
export interface UtilsGetLastShortenedLinksResponse {
  /**
   * Total number of available results
   */
  count?: number;
  items?: UtilsLastShortenedLink[];
}

/**
 * utils.getLinkStats
 *
 * Returns stats data for shortened link.
 */

export interface UtilsGetLinkStatsParams {
  /**
   * Link key (characters after vk.cc/).
   */
  key: string;
  /**
   * Source of scope
   */
  source?: 'vk_cc' | 'vk_link';
  /**
   * Access key for private link stats.
   */
  access_key?: string;
  /**
   * Interval.
   */
  interval?: 'day' | 'forever' | 'hour' | 'month' | 'week';
  /**
   * Number of intervals to return.
   */
  intervals_count?: number;
  /**
   * 1 — to return extended stats data (sex, age, geo). 0 — to return views number only.
   */
  extended?: 0 | 1;
}

// utils.getLinkStats_response
export type UtilsGetLinkStatsResponse = UtilsLinkStats;

// utils.getLinkStats_extendedResponse
export type UtilsGetLinkStatsExtendedResponse = UtilsLinkStatsExtended;

/**
 * utils.getServerTime
 *
 * Returns the current time of the VK server.
 */

export interface UtilsGetServerTimeParams {}

// utils.getServerTime_response
export type UtilsGetServerTimeResponse = number;

/**
 * utils.getShortLink
 *
 * Allows to receive a link shortened via vk.cc.
 */

export interface UtilsGetShortLinkParams {
  /**
   * URL to be shortened.
   */
  url: string;
  /**
   * 1 — private stats, 0 — public stats.
   */
  private?: 0 | 1;
}

// utils.getShortLink_response
export type UtilsGetShortLinkResponse = UtilsShortLink;

/**
 * utils.resolveScreenName
 *
 * Detects a type of object (e.g., user, community, application) and its ID by screen name.
 */

export interface UtilsResolveScreenNameParams {
  /**
   * Screen name of the user, community (e.g., 'apiclub,' 'andrew', or 'rules_of_war'), or application.
   */
  screen_name: string;
}

// utils.resolveScreenName_response
export type UtilsResolveScreenNameResponse = UtilsDomainResolved;
