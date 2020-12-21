/**
 * This is auto-generated file, don't modify this file manually
 */

import { StatusStatus } from '../objects/status/StatusStatus';

/**
 * status.get
 *
 * Returns data required to show the status of a user or community.
 */

export interface StatusGetParams {
  /**
   * User ID or community ID. Use a negative value to designate a community ID.
   */
  user_id?: number;
  group_id?: number;
}

// status.get_response
export type StatusGetResponse = StatusStatus;

/**
 * status.set
 *
 * Sets a new status for the current user.
 */

export interface StatusSetParams {
  /**
   * Text of the new status.
   */
  text?: string;
  /**
   * Identifier of a community to set a status in. If left blank the status is set to current user.
   */
  group_id?: number;
}

// status.set_response
export type StatusSetResponse = 1;
