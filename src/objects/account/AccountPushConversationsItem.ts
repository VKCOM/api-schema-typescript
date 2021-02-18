/**
 * This is auto-generated file, don't modify this file manually
 */

// account_push_conversations_item
export interface AccountPushConversationsItem {
  /**
   * Time until that notifications are disabled in seconds
   */
  disabled_until: number;
  /**
   * Peer ID
   */
  peer_id: number;
  /**
   * Information whether the sound are enabled
   */
  sound: 0 | 1;
  /**
   * Information whether the mentions are disabled
   */
  disabled_mentions?: 0 | 1;
  /**
   * Information whether the mass mentions (like '@all', '@online') are disabled. Can be affected by 'disabled_mentions'
   */
  disabled_mass_mentions?: 0 | 1;
}
