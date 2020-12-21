/**
 * This is auto-generated file, don't modify this file manually
 */

import { AdswebGetAdCategoriesResponseCategoriesCategory } from '../objects/adsweb/AdswebGetAdCategoriesResponseCategoriesCategory';
import { AdswebGetAdUnitsResponseAdUnitsAdUnit } from '../objects/adsweb/AdswebGetAdUnitsResponseAdUnitsAdUnit';
import { AdswebGetFraudHistoryResponseEntriesEntry } from '../objects/adsweb/AdswebGetFraudHistoryResponseEntriesEntry';
import { AdswebGetSitesResponseSitesSite } from '../objects/adsweb/AdswebGetSitesResponseSitesSite';
import { AdswebGetStatisticsResponseItemsItem } from '../objects/adsweb/AdswebGetStatisticsResponseItemsItem';

/**
 * adsweb.getAdCategories
 */

export interface AdswebGetAdCategoriesParams {
  office_id: number;
}

// adsweb.getAdCategories_response
export interface AdswebGetAdCategoriesResponse {
  categories: AdswebGetAdCategoriesResponseCategoriesCategory[];
}

/**
 * adsweb.getAdUnitCode
 */

export interface AdswebGetAdUnitCodeParams {}

// adsweb.getAdUnitCode_response
export interface AdswebGetAdUnitCodeResponse {
  html: string;
}

/**
 * adsweb.getAdUnits
 */

export interface AdswebGetAdUnitsParams {
  office_id: number;
  sites_ids?: string;
  ad_units_ids?: string;
  fields?: string;
  limit?: number;
  offset?: number;
}

// adsweb.getAdUnits_response
export interface AdswebGetAdUnitsResponse {
  count: number;
  ad_units?: AdswebGetAdUnitsResponseAdUnitsAdUnit[];
}

/**
 * adsweb.getFraudHistory
 */

export interface AdswebGetFraudHistoryParams {
  office_id: number;
  sites_ids?: string;
  limit?: number;
  offset?: number;
}

// adsweb.getFraudHistory_response
export interface AdswebGetFraudHistoryResponse {
  count: number;
  entries?: AdswebGetFraudHistoryResponseEntriesEntry[];
}

/**
 * adsweb.getSites
 */

export interface AdswebGetSitesParams {
  office_id: number;
  sites_ids?: string;
  fields?: string;
  limit?: number;
  offset?: number;
}

// adsweb.getSites_response
export interface AdswebGetSitesResponse {
  count: number;
  sites?: AdswebGetSitesResponseSitesSite[];
}

/**
 * adsweb.getStatistics
 */

export interface AdswebGetStatisticsParams {
  office_id: number;
  ids_type: string;
  ids: string;
  period: string;
  date_from: string;
  date_to: string;
  fields?: string;
  limit?: number;
  page_id?: string;
}

// adsweb.getStatistics_response
export interface AdswebGetStatisticsResponse {
  next_page_id?: string;
  items: AdswebGetStatisticsResponseItemsItem[];
}
