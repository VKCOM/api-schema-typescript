/**
 * This is auto-generated file, don't modify this file manually
 */

// bugtracker_bugreport status_auto_update_reason enumNames
export const BugtrackerBugreportStatusAutoUpdateReasonEnumNames = {
  NEED_CORRECTION_LONG_TIME: 1,
  READY_FOR_TESTING_LONG_TIME: 2,
} as const;

// bugtracker_bugreport
export interface BugtrackerBugreport {
  id?: number;
  original_id?: number;
  clones_count?: number;
  title?: string;
  owner_id?: number;
  created?: number;
  updated?: number;
  description?: string;
  state_actual?: string;
  state_supposed?: string;
  phone?: string;
  comments_count?: number;
  can_remove?: boolean;
  can_change_status?: boolean;
  can_bookmark?: boolean;
  is_bookmarked?: boolean;
  can_edit?: boolean;
  can_export_to_trackers?: boolean;
  can_export_to_csv?: boolean;
  can_add_moder_comment?: boolean;
  can_add_hidden_comment?: boolean;
  can_view_history?: boolean;
  is_deleted?: boolean;
  can_restore?: boolean;
  is_vulnerability?: boolean;
  is_severity_by_moderator?: boolean;
  hidden_docs?: boolean;
  is_confidential?: boolean;
  private_comment?: string;
  can_change_product?: boolean;
  company_id?: number;
  tournament_score?: number;
  moderator_user_id?: number;
  moderated?: number;
  screen_reader?: number;
  status_auto_update_ts?: number;
  /**
   * `1` — need_correction_long_time
   * `2` — ready_for_testing_long_time
   */
  status_auto_update_reason?: 1 | 2;
  product_has_wishes?: boolean;
}
