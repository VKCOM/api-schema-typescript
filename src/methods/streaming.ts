/**
 * This is auto-generated file, don't modify this file manually
 */

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
 * streaming.setSettings
 */

export interface StreamingSetSettingsParams {
  monthly_tier?: 'tier_1' | 'tier_2' | 'tier_3' | 'tier_4' | 'tier_5' | 'tier_6' | 'unlimited';
}

// streaming.setSettings_response
export type StreamingSetSettingsResponse = 1;
