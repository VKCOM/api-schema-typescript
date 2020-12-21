/**
 * This is auto-generated file, don't modify this file manually
 */

import { StorageValue } from '../objects/storage/StorageValue';

/**
 * storage.get
 *
 * Returns a value of variable with the name set by key parameter.
 */

export interface StorageGetParams {
  key?: string;
  keys?: string[];
  user_id?: number;
}

// storage.get_response
export type StorageGetResponse = StorageValue[];

/**
 * storage.getKeys
 *
 * Returns the names of all variables.
 */

export interface StorageGetKeysParams {
  /**
   * user id, whose variables names are returned if they were requested with a server method.
   */
  user_id?: number;
  offset?: number;
  /**
   * amount of variable names the info needs to be collected from.
   */
  count?: number;
}

// storage.getKeys_response
export type StorageGetKeysResponse = string[];

/**
 * storage.set
 *
 * Saves a value of variable with the name set by 'key' parameter.
 */

export interface StorageSetParams {
  key: string;
  value?: string;
  user_id?: number;
}

// storage.set_response
export type StorageSetResponse = 1;
