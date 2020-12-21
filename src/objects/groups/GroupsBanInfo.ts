/**
 * This is auto-generated file, don't modify this file manually
 */

import { GroupsBanInfoReason } from './GroupsBanInfoReason';

// groups_ban_info
export interface GroupsBanInfo {
  /**
   * Administrator ID
   */
  admin_id?: number;
  /**
   * Comment for a ban
   */
  comment?: string;
  /**
   * Show comment for user
   */
  comment_visible?: boolean;
  is_closed?: boolean;
  /**
   * Date when user has been added to blacklist in Unixtime
   */
  date?: number;
  /**
   * Date when user will be removed from blacklist in Unixtime
   */
  end_date?: number;
  reason?: GroupsBanInfoReason;
}
