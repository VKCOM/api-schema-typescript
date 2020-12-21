/**
 * This is auto-generated file, don't modify this file manually
 */

import { GroupsGroupFullMemberStatus } from '../groups/GroupsGroupFullMemberStatus';

// events_event_attach
export interface EventsEventAttach {
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
   * event ID
   */
  id: number;
  /**
   * is favorite
   */
  is_favorite: boolean;
  /**
   * Current user's member status
   */
  member_status?: GroupsGroupFullMemberStatus;
  /**
   * text of attach
   */
  text: string;
  /**
   * event start time
   */
  time?: number;
}
