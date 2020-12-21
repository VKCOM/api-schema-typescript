/**
 * This is auto-generated file, don't modify this file manually
 */

// messages_chat_settings_permissions invite enum
export enum MessagesChatSettingsPermissionsInviteEnum {
  OWNER = 'owner',
  OWNER_AND_ADMINS = 'owner_and_admins',
  ALL = 'all',
}

// messages_chat_settings_permissions change_info enum
export enum MessagesChatSettingsPermissionsChangeInfoEnum {
  OWNER = 'owner',
  OWNER_AND_ADMINS = 'owner_and_admins',
  ALL = 'all',
}

// messages_chat_settings_permissions change_pin enum
export enum MessagesChatSettingsPermissionsChangePinEnum {
  OWNER = 'owner',
  OWNER_AND_ADMINS = 'owner_and_admins',
  ALL = 'all',
}

// messages_chat_settings_permissions use_mass_mentions enum
export enum MessagesChatSettingsPermissionsUseMassMentionsEnum {
  OWNER = 'owner',
  OWNER_AND_ADMINS = 'owner_and_admins',
  ALL = 'all',
}

// messages_chat_settings_permissions see_invite_link enum
export enum MessagesChatSettingsPermissionsSeeInviteLinkEnum {
  OWNER = 'owner',
  OWNER_AND_ADMINS = 'owner_and_admins',
  ALL = 'all',
}

// messages_chat_settings_permissions call enum
export enum MessagesChatSettingsPermissionsCallEnum {
  OWNER = 'owner',
  OWNER_AND_ADMINS = 'owner_and_admins',
  ALL = 'all',
}

// messages_chat_settings_permissions change_admins enum
export enum MessagesChatSettingsPermissionsChangeAdminsEnum {
  OWNER = 'owner',
  OWNER_AND_ADMINS = 'owner_and_admins',
}

// messages_chat_settings_permissions
export interface MessagesChatSettingsPermissions {
  /**
   * Who can invite users to chat
   */
  invite?: MessagesChatSettingsPermissionsInviteEnum;
  /**
   * Who can change chat info
   */
  change_info?: MessagesChatSettingsPermissionsChangeInfoEnum;
  /**
   * Who can change pinned message
   */
  change_pin?: MessagesChatSettingsPermissionsChangePinEnum;
  /**
   * Who can use mass mentions
   */
  use_mass_mentions?: MessagesChatSettingsPermissionsUseMassMentionsEnum;
  /**
   * Who can see invite link
   */
  see_invite_link?: MessagesChatSettingsPermissionsSeeInviteLinkEnum;
  /**
   * Who can make calls
   */
  call?: MessagesChatSettingsPermissionsCallEnum;
  /**
   * Who can change admins
   */
  change_admins?: MessagesChatSettingsPermissionsChangeAdminsEnum;
}
