/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseCountry } from '../base/BaseCountry';
import { DatabaseCityById } from '../database/DatabaseCityById';
import { DatabaseStation } from '../database/DatabaseStation';
import { GroupsAddressTimetable } from './GroupsAddressTimetable';
import { GroupsAddressWorkInfoStatus } from './GroupsAddressWorkInfoStatus';

// groups_address
export interface GroupsAddress {
  /**
   * Additional address to the place (6 floor, left door)
   */
  additional_address?: string;
  /**
   * String address to the place (Nevsky, 28)
   */
  address?: string;
  /**
   * City id of address
   */
  city_id?: number;
  /**
   * City for address
   */
  city?: DatabaseCityById;
  /**
   * Metro for address
   */
  metro_station?: DatabaseStation;
  /**
   * Country for address
   */
  country?: BaseCountry;
  /**
   * Distance from the point
   */
  distance?: number;
  /**
   * Address id
   */
  id?: number;
  /**
   * Address latitude
   */
  latitude?: number;
  /**
   * Address longitude
   */
  longitude?: number;
  /**
   * Metro id of address
   */
  metro_station_id?: number;
  /**
   * Address phone
   */
  phone?: string;
  /**
   * Time offset int minutes from utc time
   */
  time_offset?: number;
  /**
   * Week timetable for the address
   */
  timetable?: GroupsAddressTimetable;
  /**
   * Title of the place (Zinger, etc)
   */
  title?: string;
  /**
   * Status of information about timetable
   */
  work_info_status?: GroupsAddressWorkInfoStatus;
  place_id?: number;
}
