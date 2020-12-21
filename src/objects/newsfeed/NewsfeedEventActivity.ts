/**
 * This is auto-generated file, don't modify this file manually
 */

import { GroupsGroupFullMemberStatus } from '../groups/GroupsGroupFullMemberStatus';

// newsfeed_event_activity
export interface NewsfeedEventActivity {
  /**
   * address of event
   */
  address?: string;
  /**
   * text of attach
   */
  button_text: string;
  /**
   * array of friends ids
   */
  friends: number[];
  /**
   * Current user's member status
   */
  member_status: GroupsGroupFullMemberStatus;
  /**
   * text of attach
   */
  text: string;
  /**
   * event start time
   */
  time?: number;
}
