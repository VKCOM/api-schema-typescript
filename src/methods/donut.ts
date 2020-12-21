/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseUserGroupFields } from '../objects/base/BaseUserGroupFields';
import { DonutDonatorSubscriptionInfo } from '../objects/donut/DonutDonatorSubscriptionInfo';
import { GroupsGroupFull } from '../objects/groups/GroupsGroupFull';
import { GroupsUserXtrRole } from '../objects/groups/GroupsUserXtrRole';
import { UsersUserFull } from '../objects/users/UsersUserFull';

/**
 * donut.getFriends
 */

export interface DonutGetFriendsParams {
  owner_id: number;
  offset?: number;
  count?: number;
  fields?: string[];
}

// donut.getFriends_response
export interface DonutGetFriendsResponse {
  /**
   * Total members number
   */
  count: number;
  items: GroupsUserXtrRole[];
}

/**
 * donut.getSubscription
 */

export interface DonutGetSubscriptionParams {
  owner_id: number;
}

// donut.getSubscription_response
export type DonutGetSubscriptionResponse = DonutDonatorSubscriptionInfo;

/**
 * donut.getSubscriptions
 *
 * Returns a list of user's VK Donut subscriptions.
 */

export interface DonutGetSubscriptionsParams {
  fields?: BaseUserGroupFields[];
  offset?: number;
  count?: number;
}

// donut.getSubscriptions_response
export interface DonutGetSubscriptionsResponse {
  subscriptions: DonutDonatorSubscriptionInfo[];
  count?: number;
  profiles?: UsersUserFull[];
  groups?: GroupsGroupFull[];
}

/**
 * donut.isDon
 */

export interface DonutIsDonParams {
  owner_id: number;
}

// donut.isDon_response
export type DonutIsDonResponse = 0 | 1;
