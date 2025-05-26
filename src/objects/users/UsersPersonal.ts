/**
 * This is auto-generated file, don't modify this file manually
 */

import { DatabaseLanguageFull } from '../database/DatabaseLanguageFull';

// users_personal
export interface UsersPersonal {
  /**
   * User's views on alcohol
   */
  alcohol?: number;
  /**
   * User's inspired by
   */
  inspired_by?: string;
  langs?: string[];
  /**
   * User's languages with full info
   */
  langs_full?: DatabaseLanguageFull[];
  /**
   * User's personal priority in life
   */
  life_main?: number;
  /**
   * User's personal priority in people
   */
  people_main?: number;
  /**
   * User's political views
   */
  political?: number;
  /**
   * User's religion
   */
  religion?: string;
  /**
   * User's religion id
   */
  religion_id?: number;
  /**
   * User's views on smoking
   */
  smoking?: number;
}
