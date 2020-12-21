/**
 * This is auto-generated file, don't modify this file manually
 */

import { GroupsMemberRolePermission } from './GroupsMemberRolePermission';
import { GroupsMemberRoleStatus } from './GroupsMemberRoleStatus';

// groups_member_role
export interface GroupsMemberRole {
  /**
   * User ID
   */
  id: number;
  permissions?: GroupsMemberRolePermission[];
  role?: GroupsMemberRoleStatus;
}
