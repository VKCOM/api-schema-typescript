/**
 * This is auto-generated file, don't modify this file manually
 */

import { AdsLookalikeRequestSaveAudienceLevel } from './AdsLookalikeRequestSaveAudienceLevel';

// ads_lookalike_request
export interface AdsLookalikeRequest {
  /**
   * Lookalike request ID
   */
  id?: number;
  /**
   * Lookalike request create time, as Unixtime
   */
  create_time?: number;
  /**
   * Lookalike request update time, as Unixtime
   */
  update_time?: number;
  /**
   * Time by which lookalike request would be deleted, as Unixtime
   */
  scheduled_delete_time?: number;
  /**
   * Lookalike request status
   */
  status?: 'search_in_progress' | 'search_failed' | 'search_done' | 'save_in_progress' | 'save_failed' | 'save_done';
  /**
   * Lookalike request source type
   */
  source_type?: 'retargeting_group';
  /**
   * Retargeting group id, which was used as lookalike seed
   */
  source_retargeting_group_id?: number;
  /**
   * Lookalike request seed name (retargeting group name)
   */
  source_name?: string;
  /**
   * Lookalike request seed audience size
   */
  audience_count?: number;
  save_audience_levels?: AdsLookalikeRequestSaveAudienceLevel[];
}
