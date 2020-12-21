/**
 * This is auto-generated file, don't modify this file manually
 */

import { AccountPushConversations } from './AccountPushConversations';
import { AccountPushParams } from './AccountPushParams';

// account_push_settings
export interface AccountPushSettings {
  /**
   * Information whether notifications are disabled
   */
  disabled?: 0 | 1;
  /**
   * Time until that notifications are disabled in Unixtime
   */
  disabled_until?: number;
  settings?: AccountPushParams;
  conversations?: AccountPushConversations;
}
