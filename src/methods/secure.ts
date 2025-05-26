/**
 * This is auto-generated file, don't modify this file manually
 */

import { SecureGiveEventStickerItem } from '../objects/secure/SecureGiveEventStickerItem';
import { SecureLevel } from '../objects/secure/SecureLevel';
import { SecureSetCounterItem } from '../objects/secure/SecureSetCounterItem';
import { SecureSmsNotification } from '../objects/secure/SecureSmsNotification';
import { SecureTokenChecked } from '../objects/secure/SecureTokenChecked';
import { SecureTransaction } from '../objects/secure/SecureTransaction';

/**
 * secure.addAppEvent
 *
 * Adds user activity information to an application
 */

export interface SecureAddAppEventParams {
  /**
   * ID of a user to save the data
   */
  user_id?: number;
  /**
   * there are 2 default activities: , * 1 - level. Works similar to ,, * 2 - points, saves points amount, Any other value is for saving completed missions
   */
  activity_id: number;
  /**
   * depends on activity_id: * 1 - number, current level number,, * 2 - number, current user's points amount, , Any other value is ignored
   */
  value?: number;
}

// secure.addAppEvent_response
export type SecureAddAppEventResponse = 1;

/**
 * secure.checkToken
 *
 * Checks the user authentication in 'IFrame' and 'Flash' apps using the 'access_token' parameter.
 */

export interface SecureCheckTokenParams {
  /**
   * client 'access_token'
   */
  token?: string;
  /**
   * user 'ip address'. Note that user may access using the 'ipv6' address, in this case it is required to transmit the 'ipv6' address. If not transmitted, the address will not be checked.
   */
  ip?: string;
}

// secure.checkToken_response
export type SecureCheckTokenResponse = SecureTokenChecked;

/**
 * secure.getAppBalance
 *
 * Returns payment balance of the application in hundredth of a vote.
 */

export interface SecureGetAppBalanceParams {}

// secure.getAppBalance_response
export type SecureGetAppBalanceResponse = number;

/**
 * secure.getSMSHistory
 *
 * Shows a list of SMS notifications sent by the application using [vk.com/dev/secure.sendSMSNotification|secure.sendSMSNotification] method.
 */

export interface SecureGetSMSHistoryParams {
  user_id?: number;
  /**
   * filter by start date. It is set as UNIX-time.
   */
  date_from?: number;
  /**
   * filter by end date. It is set as UNIX-time.
   */
  date_to?: number;
  /**
   * number of returned posts. By default - 1000.
   */
  limit?: number;
}

// secure.getSMSHistory_response
export type SecureGetSMSHistoryResponse = SecureSmsNotification[];

/**
 * secure.getTransactionsHistory
 *
 * Shows history of votes transaction between users and the application.
 */

export interface SecureGetTransactionsHistoryParams {
  type?: number;
  uid_from?: number;
  uid_to?: number;
  date_from?: number;
  date_to?: number;
  limit?: number;
}

// secure.getTransactionsHistory_response
export type SecureGetTransactionsHistoryResponse = SecureTransaction[];

/**
 * secure.getUserLevel
 *
 * Returns one of the previously set game levels of one or more users in the application.
 */

export interface SecureGetUserLevelParams {
  user_ids: string;
}

// secure.getUserLevel_response
export type SecureGetUserLevelResponse = SecureLevel[];

/**
 * secure.giveEventSticker
 *
 * Opens the game achievement and gives the user a sticker
 */

export interface SecureGiveEventStickerParams {
  user_ids: string;
  achievement_id: number;
}

// secure.giveEventSticker_response
export type SecureGiveEventStickerResponse = SecureGiveEventStickerItem[];

/**
 * secure.sendNotification
 *
 * Sends notification to the user.
 */

export interface SecureSendNotificationParams {
  user_ids?: string;
  user_id?: number;
  /**
   * notification text which should be sent in 'UTF-8' encoding ('254' characters maximum).
   */
  message: string;
  notification_id?: number;
  promo_id?: number;
}

// secure.sendNotification_response
export type SecureSendNotificationResponse = number[];

/**
 * secure.sendSMSNotification
 *
 * Sends 'SMS' notification to a user's mobile device.
 */

export interface SecureSendSMSNotificationParams {
  /**
   * ID of the user to whom SMS notification is sent. The user shall allow the application to send him/her notifications (, +1).
   */
  user_id: number;
  /**
   * 'SMS' text to be sent in 'UTF-8' encoding. Only Latin letters and numbers are allowed. Maximum size is '160' characters.
   */
  message: string;
}

// secure.sendSMSNotification_response
export type SecureSendSMSNotificationResponse = 1;

/**
 * secure.setCounter
 *
 * Sets a counter which is shown to the user in bold in the left menu.
 */

export interface SecureSetCounterParams {
  counters?: string;
  user_id?: number;
  /**
   * counter value.
   */
  counter?: number;
  increment?: 0 | 1;
}

// secure.setCounter_responseInteger
export type SecureSetCounterResponseInteger = 0 | 1;

// secure.setCounter_responseArray
export type SecureSetCounterResponseArray = SecureSetCounterItem[];
