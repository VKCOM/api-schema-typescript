/**
 * This is auto-generated file, don't modify this file manually
 */

// messages_chat_settings_permissions
export interface MessagesChatSettingsPermissions {
  /**
   * Who can invite users to chat
   */
  invite?: 'owner' | 'owner_and_admins' | 'all';
  /**
   * Who can change chat info
   */
  change_info?: 'owner' | 'owner_and_admins' | 'all';
  /**
   * Who can change pinned message
   */
  change_pin?: 'owner' | 'owner_and_admins' | 'all';
  /**
   * Who can use mass mentions
   */
  use_mass_mentions?: 'owner' | 'owner_and_admins' | 'all';
  /**
   * Who can see invite link
   */
  see_invite_link?: 'owner' | 'owner_and_admins' | 'all';
  /**
   * Who can make calls
   */
  call?: 'owner' | 'owner_and_admins' | 'all';
  /**
   * Who can change admins
   */
  change_admins?: 'owner' | 'owner_and_admins';
}
