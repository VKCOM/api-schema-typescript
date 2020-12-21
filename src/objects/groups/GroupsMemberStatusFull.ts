/**
 * This is auto-generated file, don't modify this file manually
 */

// groups_member_status_full
export interface GroupsMemberStatusFull {
  /**
   * Information whether user can be invited
   */
  can_invite?: 0 | 1;
  /**
   * Information whether user's invite to the group can be recalled
   */
  can_recall?: 0 | 1;
  /**
   * Information whether user has been invited to the group
   */
  invitation?: 0 | 1;
  /**
   * Information whether user is a member of the group
   */
  member: 0 | 1;
  /**
   * Information whether user has send request to the group
   */
  request?: 0 | 1;
  /**
   * User ID
   */
  user_id: number;
}
