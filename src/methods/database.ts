/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseCountry } from '../objects/base/BaseCountry';
import { BaseObject } from '../objects/base/BaseObject';
import { DatabaseCity } from '../objects/database/DatabaseCity';
import { DatabaseFaculty } from '../objects/database/DatabaseFaculty';
import { DatabaseRegion } from '../objects/database/DatabaseRegion';
import { DatabaseSchool } from '../objects/database/DatabaseSchool';
import { DatabaseStation } from '../objects/database/DatabaseStation';
import { DatabaseUniversity } from '../objects/database/DatabaseUniversity';

/**
 * database.getChairs
 *
 * Returns list of chairs on a specified faculty.
 */

export interface DatabaseGetChairsParams {
  /**
   * id of the faculty to get chairs from
   */
  faculty_id: number;
  /**
   * offset required to get a certain subset of chairs
   */
  offset?: number;
  /**
   * amount of chairs to get
   */
  count?: number;
}

// database.getChairs_response
export interface DatabaseGetChairsResponse {
  /**
   * Total number
   */
  count?: number;
  items?: BaseObject[];
}

/**
 * database.getCities
 *
 * Returns a list of cities.
 */

export interface DatabaseGetCitiesParams {
  /**
   * Country ID.
   */
  country_id: number;
  /**
   * Region ID.
   */
  region_id?: number;
  /**
   * Search query.
   */
  q?: string;
  /**
   * '1' — to return all cities in the country, '0' — to return major cities in the country (default),
   */
  need_all?: 0 | 1;
  /**
   * Offset needed to return a specific subset of cities.
   */
  offset?: number;
  /**
   * Number of cities to return.
   */
  count?: number;
}

// database.getCities_response
export interface DatabaseGetCitiesResponse {
  /**
   * Total number
   */
  count?: number;
  items?: DatabaseCity[];
}

/**
 * database.getCitiesById
 *
 * Returns information about cities by their IDs.
 */

export interface DatabaseGetCitiesByIdParams {
  /**
   * City IDs.
   */
  city_ids?: number[];
}

// database.getCitiesById_response
export type DatabaseGetCitiesByIdResponse = BaseObject[];

/**
 * database.getCountries
 *
 * Returns a list of countries.
 */

export interface DatabaseGetCountriesParams {
  /**
   * '1' — to return a full list of all countries, '0' — to return a list of countries near the current user's country (default).
   */
  need_all?: 0 | 1;
  /**
   * Country codes in [vk.com/dev/country_codes|ISO 3166-1 alpha-2] standard.
   */
  code?: string;
  /**
   * Offset needed to return a specific subset of countries.
   */
  offset?: number;
  /**
   * Number of countries to return.
   */
  count?: number;
}

// database.getCountries_response
export interface DatabaseGetCountriesResponse {
  /**
   * Total number
   */
  count?: number;
  items?: BaseCountry[];
}

/**
 * database.getCountriesById
 *
 * Returns information about countries by their IDs.
 */

export interface DatabaseGetCountriesByIdParams {
  /**
   * Country IDs.
   */
  country_ids?: number[];
}

// database.getCountriesById_response
export type DatabaseGetCountriesByIdResponse = BaseCountry[];

/**
 * database.getFaculties
 *
 * Returns a list of faculties (i.e., university departments).
 */

export interface DatabaseGetFacultiesParams {
  /**
   * University ID.
   */
  university_id: number;
  /**
   * Offset needed to return a specific subset of faculties.
   */
  offset?: number;
  /**
   * Number of faculties to return.
   */
  count?: number;
}

// database.getFaculties_response
export interface DatabaseGetFacultiesResponse {
  /**
   * Total number
   */
  count?: number;
  items?: DatabaseFaculty[];
}

/**
 * database.getMetroStations
 *
 * Get metro stations by city
 */

export interface DatabaseGetMetroStationsParams {
  city_id: number;
  offset?: number;
  count?: number;
  extended?: 0 | 1;
}

// database.getMetroStations_response
export interface DatabaseGetMetroStationsResponse {
  /**
   * Total number
   */
  count?: number;
  items?: DatabaseStation[];
}

/**
 * database.getMetroStationsById
 *
 * Get metro station by his id
 */

export interface DatabaseGetMetroStationsByIdParams {
  station_ids?: number[];
}

// database.getMetroStationsById_response
export type DatabaseGetMetroStationsByIdResponse = DatabaseStation[];

/**
 * database.getRegions
 *
 * Returns a list of regions.
 */

export interface DatabaseGetRegionsParams {
  /**
   * Country ID, received in [vk.com/dev/database.getCountries|database.getCountries] method.
   */
  country_id: number;
  /**
   * Search query.
   */
  q?: string;
  /**
   * Offset needed to return specific subset of regions.
   */
  offset?: number;
  /**
   * Number of regions to return.
   */
  count?: number;
}

// database.getRegions_response
export interface DatabaseGetRegionsResponse {
  /**
   * Total number
   */
  count?: number;
  items?: DatabaseRegion[];
}

/**
 * database.getSchoolClasses
 *
 * Returns a list of school classes specified for the country.
 */

export interface DatabaseGetSchoolClassesParams {
  /**
   * Country ID.
   */
  country_id?: number;
}

// database.getSchoolClasses_response
export type DatabaseGetSchoolClassesResponse = Array<string | number>[][];

/**
 * database.getSchools
 *
 * Returns a list of schools.
 */

export interface DatabaseGetSchoolsParams {
  /**
   * Search query.
   */
  q?: string;
  /**
   * City ID.
   */
  city_id: number;
  /**
   * Offset needed to return a specific subset of schools.
   */
  offset?: number;
  /**
   * Number of schools to return.
   */
  count?: number;
}

// database.getSchools_response
export interface DatabaseGetSchoolsResponse {
  /**
   * Total number
   */
  count?: number;
  items?: DatabaseSchool[];
}

/**
 * database.getUniversities
 *
 * Returns a list of higher education institutions.
 */

export interface DatabaseGetUniversitiesParams {
  /**
   * Search query.
   */
  q?: string;
  /**
   * Country ID.
   */
  country_id?: number;
  /**
   * City ID.
   */
  city_id?: number;
  /**
   * Offset needed to return a specific subset of universities.
   */
  offset?: number;
  /**
   * Number of universities to return.
   */
  count?: number;
}

// database.getUniversities_response
export interface DatabaseGetUniversitiesResponse {
  /**
   * Total number
   */
  count?: number;
  items?: DatabaseUniversity[];
}
