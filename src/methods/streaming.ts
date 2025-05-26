/**
 * This is auto-generated file, don't modify this file manually
 */

import { StreamingStats } from '../objects/streaming/StreamingStats';

/**
 * streaming.getServerUrl
 *
 * Allows to receive data for the connection to Streaming API.
 */

export interface StreamingGetServerUrlParams {}

// streaming.getServerUrl_response
export interface StreamingGetServerUrlResponse {
  /**
   * Server host
   */
  endpoint?: string;
  /**
   * Access key
   */
  key?: string;
}

/**
 * streaming.getStats
 */

export interface StreamingGetStatsParams {
  type?: 'prepared' | 'received';
  interval?: '1h' | '24h' | '5m';
  start_time?: number;
  end_time?: number;
}

// streaming.getStats_response
export type StreamingGetStatsResponse = StreamingStats[];

/**
 * streaming.getStem
 */

export interface StreamingGetStemParams {
  word: string;
}

// streaming.getStem_response
export interface StreamingGetStemResponse {
  /**
   * part of a word responsible for its lexical meaning
   */
  stem?: string;
}
