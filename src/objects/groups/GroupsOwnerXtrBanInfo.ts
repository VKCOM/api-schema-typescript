/**
 * This is auto-generated file, don't modify this file manually
 */

import { UsersUser } from '../users/UsersUser';
import { GroupsBanInfo } from './GroupsBanInfo';
import { GroupsGroup } from './GroupsGroup';
import { GroupsOwnerXtrBanInfoType } from './GroupsOwnerXtrBanInfoType';

// groups_owner_xtr_ban_info
export interface GroupsOwnerXtrBanInfo {
  ban_info?: GroupsBanInfo;
  /**
   * Information about group if type = group
   */
  group?: GroupsGroup;
  /**
   * Information about group if type = profile
   */
  profile?: UsersUser;
  type?: GroupsOwnerXtrBanInfoType;
}
