/**
 * This is auto-generated file, don't modify this file manually
 */

import { GroupsGroupAdminLevel } from './GroupsGroupAdminLevel';
import { GroupsGroupIsClosed } from './GroupsGroupIsClosed';
import { GroupsGroupType } from './GroupsGroupType';

// groups_group
export interface GroupsGroup {
  /**
   * Community ID
   */
  id: number;
  /**
   * Community name
   */
  name: string;
  /**
   * Domain of the community page
   */
  screen_name: string;
  is_closed: GroupsGroupIsClosed;
  type?: GroupsGroupType;
  /**
   * Information whether current user is administrator
   */
  is_admin?: 0 | 1;
  admin_level?: GroupsGroupAdminLevel;
  /**
   * Information whether current user is member
   */
  is_member?: 0 | 1;
  /**
   * Information whether current user is advertiser
   */
  is_advertiser?: 0 | 1;
  /**
   * Start date in Unixtime format
   */
  start_date?: number;
  /**
   * Finish date in Unixtime format
   */
  finish_date?: number;
  /**
   * Information whether community is banned
   */
  deactivated?: string;
  /**
   * URL of square photo of the community with 50 pixels in width
   */
  photo_50?: string;
  /**
   * URL of square photo of the community with 100 pixels in width
   */
  photo_100?: string;
  /**
   * URL of square photo of the community with 200 pixels in width
   */
  photo_200?: string;
}
