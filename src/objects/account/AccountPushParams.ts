/**
 * This is auto-generated file, don't modify this file manually
 */

import { AccountPushParamsMode } from './AccountPushParamsMode';
import { AccountPushParamsOnoff } from './AccountPushParamsOnoff';
import { AccountPushParamsSettings } from './AccountPushParamsSettings';

// account_push_params
export interface AccountPushParams {
  msg?: AccountPushParamsMode[];
  chat?: AccountPushParamsMode[];
  like?: AccountPushParamsSettings[];
  repost?: AccountPushParamsSettings[];
  comment?: AccountPushParamsSettings[];
  mention?: AccountPushParamsSettings[];
  reply?: AccountPushParamsOnoff[];
  new_post?: AccountPushParamsOnoff[];
  wall_post?: AccountPushParamsOnoff[];
  wall_publish?: AccountPushParamsOnoff[];
  friend?: AccountPushParamsOnoff[];
  friend_found?: AccountPushParamsOnoff[];
  friend_accepted?: AccountPushParamsOnoff[];
  group_invite?: AccountPushParamsOnoff[];
  group_accepted?: AccountPushParamsOnoff[];
  birthday?: AccountPushParamsOnoff[];
  event_soon?: AccountPushParamsOnoff[];
  app_request?: AccountPushParamsOnoff[];
  sdk_open?: AccountPushParamsOnoff[];
}
