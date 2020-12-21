/**
 * This is auto-generated file, don't modify this file manually
 */

import { GroupsLongPollEvents } from './GroupsLongPollEvents';

// groups_long_poll_settings
export interface GroupsLongPollSettings {
  /**
   * API version used for the events
   */
  api_version?: string;
  events: GroupsLongPollEvents;
  /**
   * Shows whether Long Poll is enabled
   */
  is_enabled: boolean;
}
