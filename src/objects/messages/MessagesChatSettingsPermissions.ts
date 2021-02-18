/**
 * This is auto-generated file, don't modify this file manually
 */

// messages_chat_settings_permissions invite enumNames
export const MessagesChatSettingsPermissionsInviteEnumNames = {
  OWNER: 'owner',
  OWNER_AND_ADMINS: 'owner_and_admins',
  ALL: 'all',
} as const;

// messages_chat_settings_permissions change_info enumNames
export const MessagesChatSettingsPermissionsChangeInfoEnumNames = {
  OWNER: 'owner',
  OWNER_AND_ADMINS: 'owner_and_admins',
  ALL: 'all',
} as const;

// messages_chat_settings_permissions change_pin enumNames
export const MessagesChatSettingsPermissionsChangePinEnumNames = {
  OWNER: 'owner',
  OWNER_AND_ADMINS: 'owner_and_admins',
  ALL: 'all',
} as const;

// messages_chat_settings_permissions use_mass_mentions enumNames
export const MessagesChatSettingsPermissionsUseMassMentionsEnumNames = {
  OWNER: 'owner',
  OWNER_AND_ADMINS: 'owner_and_admins',
  ALL: 'all',
} as const;

// messages_chat_settings_permissions see_invite_link enumNames
export const MessagesChatSettingsPermissionsSeeInviteLinkEnumNames = {
  OWNER: 'owner',
  OWNER_AND_ADMINS: 'owner_and_admins',
  ALL: 'all',
} as const;

// messages_chat_settings_permissions call enumNames
export const MessagesChatSettingsPermissionsCallEnumNames = {
  OWNER: 'owner',
  OWNER_AND_ADMINS: 'owner_and_admins',
  ALL: 'all',
} as const;

// messages_chat_settings_permissions change_admins enumNames
export const MessagesChatSettingsPermissionsChangeAdminsEnumNames = {
  OWNER: 'owner',
  OWNER_AND_ADMINS: 'owner_and_admins',
} as const;

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
