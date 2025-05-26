/**
 * This is auto-generated file, don't modify this file manually
 */

import { CallsShortCredentials } from '../objects/calls/CallsShortCredentials';

/**
 * calls.forceFinish
 */

export interface CallsForceFinishParams {
  call_id: string;
}

// calls.forceFinish_response
export type CallsForceFinishResponse = 1;

/**
 * calls.start
 */

export interface CallsStartParams {
  group_id?: number;
}

// calls.start_response
export interface CallsStartResponse {
  /**
   * Call id
   */
  call_id?: string;
  /**
   * Join link
   */
  join_link?: string;
  /**
   * OK join link
   */
  ok_join_link?: string;
  /**
   * video id for link
   */
  broadcast_video_id?: string;
  /**
   * video id for streaming
   */
  broadcast_ov_id?: string;
  short_credentials?: CallsShortCredentials;
}
