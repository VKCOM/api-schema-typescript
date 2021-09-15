/**
 * This is auto-generated file, don't modify this file manually
 */

import { VideoLiveInfo } from '../video/VideoLiveInfo';
import { GroupsGroupAdminLevel } from './GroupsGroupAdminLevel';
import { GroupsGroupIsClosed } from './GroupsGroupIsClosed';
import { GroupsGroupType } from './GroupsGroupType';
import { GroupsPhotoSize } from './GroupsPhotoSize';

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
  /**
   * URL of square photo of the community with 200 pixels in width original
   */
  photo_200_orig?: string;
  /**
   * URL of square photo of the community with 400 pixels in width
   */
  photo_400?: string;
  /**
   * URL of square photo of the community with 400 pixels in width original
   */
  photo_400_orig?: string;
  /**
   * URL of square photo of the community with max pixels in width
   */
  photo_max?: string;
  /**
   * URL of square photo of the community with max pixels in width original
   */
  photo_max_orig?: string;
  /**
   * Established date
   */
  est_date?: string;
  /**
   * Public date label
   */
  public_date_label?: string;
  photo_max_size?: GroupsPhotoSize;
  is_video_live_notifications_blocked?: 0 | 1;
  video_live?: VideoLiveInfo;
}
