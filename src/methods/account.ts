/**
 * This is auto-generated file, don't modify this file manually
 */

import { AccountAccountCounters } from '../objects/account/AccountAccountCounters';
import { AccountInfo } from '../objects/account/AccountInfo';
import { AccountNameRequest } from '../objects/account/AccountNameRequest';
import { AccountOffer } from '../objects/account/AccountOffer';
import { AccountPushSettings } from '../objects/account/AccountPushSettings';
import { AccountUserSettings } from '../objects/account/AccountUserSettings';
import { GroupsGroup } from '../objects/groups/GroupsGroup';
import { UsersUserMin } from '../objects/users/UsersUserMin';

/**
 * account.ban
 */

export interface AccountBanParams {
  owner_id?: number;
}

// account.ban_response
export type AccountBanResponse = 1;

/**
 * account.changePassword
 *
 * Changes a user password after access is successfully restored with the [vk.com/dev/auth.restore|auth.restore] method.
 */

export interface AccountChangePasswordParams {
  /**
   * Session id received after the [vk.com/dev/auth.restore|auth.restore] method is executed. (If the password is changed right after the access was restored)
   */
  restore_sid?: string;
  /**
   * Hash received after a successful OAuth authorization with a code got by SMS. (If the password is changed right after the access was restored)
   */
  change_password_hash?: string;
  /**
   * Current user password.
   */
  old_password?: string;
  /**
   * New password that will be set as a current
   */
  new_password: string;
}

// account.changePassword_response
export interface AccountChangePasswordResponse {
  /**
   * New token
   */
  token: string;
  /**
   * New secret
   */
  secret?: string;
}

/**
 * account.getActiveOffers
 *
 * Returns a list of active ads (offers) which executed by the user will bring him/her respective number of votes to his balance in the application.
 */

export interface AccountGetActiveOffersParams {
  offset?: number;
  /**
   * Number of results to return.
   */
  count?: number;
}

// account.getActiveOffers_response
export interface AccountGetActiveOffersResponse {
  /**
   * Total number
   */
  count: number;
  items: AccountOffer[];
}

/**
 * account.getAppPermissions
 *
 * Gets settings of the user in this application.
 */

export interface AccountGetAppPermissionsParams {
  /**
   * User ID whose settings information shall be got. By default: current user.
   */
  user_id: number;
}

// account.getAppPermissions_response
export type AccountGetAppPermissionsResponse = number;

/**
 * account.getBanned
 *
 * Returns a user's blacklist.
 */

export interface AccountGetBannedParams {
  /**
   * Offset needed to return a specific subset of results.
   */
  offset?: number;
  /**
   * Number of results to return.
   */
  count?: number;
}

// account.getBanned_response
export interface AccountGetBannedResponse {
  /**
   * Total number
   */
  count: number;
  items: number[];
  profiles?: UsersUserMin[];
  groups?: GroupsGroup[];
}

/**
 * account.getCounters
 *
 * Returns non-null values of user counters.
 */

export interface AccountGetCountersParams {
  /**
   * Counters to be returned.
   */
  filter?: string[];
}

// account.getCounters_response
export type AccountGetCountersResponse = AccountAccountCounters;

/**
 * account.getInfo
 *
 * Returns current account info.
 */

export interface AccountGetInfoParams {
  /**
   * Fields to return. Possible values: *'country' — user country,, *'https_required' — is "HTTPS only" option enabled,, *'own_posts_default' — is "Show my posts only" option is enabled,, *'no_wall_replies' — are wall replies disabled or not,, *'intro' — is intro passed by user or not,, *'lang' — user language. By default: all.
   */
  fields?: string[];
}

// account.getInfo_response
export type AccountGetInfoResponse = AccountInfo;

/**
 * account.getProfileInfo
 *
 * Returns the current account info.
 */

export interface AccountGetProfileInfoParams {}

// account.getProfileInfo_response
export type AccountGetProfileInfoResponse = AccountUserSettings;

/**
 * account.getPushSettings
 *
 * Gets settings of push notifications.
 */

export interface AccountGetPushSettingsParams {
  /**
   * Unique device ID.
   */
  device_id?: string;
}

// account.getPushSettings_response
export type AccountGetPushSettingsResponse = AccountPushSettings;

/**
 * account.registerDevice
 *
 * Subscribes an iOS/Android/Windows Phone-based device to receive push notifications
 */

export interface AccountRegisterDeviceParams {
  /**
   * Device token used to send notifications. (for mpns, the token shall be URL for sending of notifications)
   */
  token: string;
  /**
   * String name of device model.
   */
  device_model?: string;
  /**
   * Device year.
   */
  device_year?: number;
  /**
   * Unique device ID.
   */
  device_id: string;
  /**
   * String version of device operating system.
   */
  system_version?: string;
  /**
   * Push settings in a [vk.com/dev/push_settings|special format].
   */
  settings?: string;
  sandbox?: 0 | 1;
}

// account.registerDevice_response
export type AccountRegisterDeviceResponse = 1;

/**
 * account.saveProfileInfo
 *
 * Edits current profile info.
 */

export interface AccountSaveProfileInfoParams {
  /**
   * User first name.
   */
  first_name?: string;
  /**
   * User last name.
   */
  last_name?: string;
  /**
   * User maiden name (female only)
   */
  maiden_name?: string;
  /**
   * User screen name.
   */
  screen_name?: string;
  /**
   * ID of the name change request to be canceled. If this parameter is sent, all the others are ignored.
   */
  cancel_request_id?: number;
  /**
   * User sex. Possible values: , * '1' – female,, * '2' – male.
   */
  sex?: 0 | 1 | 2;
  /**
   * User relationship status. Possible values: , * '1' – single,, * '2' – in a relationship,, * '3' – engaged,, * '4' – married,, * '5' – it's complicated,, * '6' – actively searching,, * '7' – in love,, * '0' – not specified.
   */
  relation?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 0;
  /**
   * ID of the relationship partner.
   */
  relation_partner_id?: number;
  /**
   * User birth date, format: DD.MM.YYYY.
   */
  bdate?: string;
  /**
   * Birth date visibility. Returned values: , * '1' – show birth date,, * '2' – show only month and day,, * '0' – hide birth date.
   */
  bdate_visibility?: 1 | 2 | 0;
  /**
   * User home town.
   */
  home_town?: string;
  /**
   * User country.
   */
  country_id?: number;
  /**
   * User city.
   */
  city_id?: number;
  /**
   * Status text.
   */
  status?: string;
}

// account.saveProfileInfo_response
export interface AccountSaveProfileInfoResponse {
  /**
   * 1 if changes has been processed
   */
  changed?: 0 | 1;
  name_request?: AccountNameRequest;
}

/**
 * account.setInfo
 *
 * Allows to edit the current account info.
 */

export interface AccountSetInfoParams {
  /**
   * Setting name.
   */
  name?: string;
  /**
   * Setting value.
   */
  value?: string;
}

// account.setInfo_response
export type AccountSetInfoResponse = 1;

/**
 * account.setNameInMenu
 *
 * Sets an application screen name (up to 17 characters), that is shown to the user in the left menu.
 */

export interface AccountSetNameInMenuParams {
  /**
   * User ID.
   */
  user_id: number;
  /**
   * Application screen name.
   */
  name?: string;
}

// account.setNameInMenu_response
export type AccountSetNameInMenuResponse = 1;

/**
 * account.setOffline
 *
 * Marks a current user as offline.
 */

export interface AccountSetOfflineParams {}

// account.setOffline_response
export type AccountSetOfflineResponse = 1;

/**
 * account.setOnline
 *
 * Marks the current user as online for 15 minutes.
 */

export interface AccountSetOnlineParams {
  /**
   * '1' if videocalls are available for current device.
   */
  voip?: 0 | 1;
}

// account.setOnline_response
export type AccountSetOnlineResponse = 1;

/**
 * account.setPushSettings
 *
 * Change push settings.
 */

export interface AccountSetPushSettingsParams {
  /**
   * Unique device ID.
   */
  device_id: string;
  /**
   * Push settings in a [vk.com/dev/push_settings|special format].
   */
  settings?: string;
  /**
   * Notification key.
   */
  key?: string;
  /**
   * New value for the key in a [vk.com/dev/push_settings|special format].
   */
  value?: string[];
}

// account.setPushSettings_response
export type AccountSetPushSettingsResponse = 1;

/**
 * account.setSilenceMode
 *
 * Mutes push notifications for the set period of time.
 */

export interface AccountSetSilenceModeParams {
  /**
   * Unique device ID.
   */
  device_id?: string;
  /**
   * Time in seconds for what notifications should be disabled. '-1' to disable forever.
   */
  time?: number;
  /**
   * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'Chat ID', e.g. '2000000001'. For community: '- Community ID', e.g. '-12345'. "
   */
  peer_id?: number;
  /**
   * '1' — to enable sound in this dialog, '0' — to disable sound. Only if 'peer_id' contains user or community ID.
   */
  sound?: number;
}

// account.setSilenceMode_response
export type AccountSetSilenceModeResponse = 1;

/**
 * account.unban
 */

export interface AccountUnbanParams {
  owner_id?: number;
}

// account.unban_response
export type AccountUnbanResponse = 1;

/**
 * account.unregisterDevice
 *
 * Unsubscribes a device from push notifications.
 */

export interface AccountUnregisterDeviceParams {
  /**
   * Unique device ID.
   */
  device_id?: string;
  sandbox?: 0 | 1;
}

// account.unregisterDevice_response
export type AccountUnregisterDeviceResponse = 1;
