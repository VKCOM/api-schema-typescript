/**
 * This is auto-generated file, don't modify this file manually
 */

import { OrdersAmount } from '../objects/orders/OrdersAmount';
import { OrdersOrder } from '../objects/orders/OrdersOrder';
import { OrdersSubscription } from '../objects/orders/OrdersSubscription';

/**
 * orders.cancelSubscription
 */

export interface OrdersCancelSubscriptionParams {
  user_id: number;
  subscription_id: number;
  pending_cancel?: 0 | 1;
}

// orders.cancelSubscription_response
export type OrdersCancelSubscriptionResponse = 0 | 1;

/**
 * orders.changeState
 *
 * Changes order status.
 */

export interface OrdersChangeStateParams {
  /**
   * order ID.
   */
  order_id: number;
  /**
   * action to be done with the order. Available actions: *cancel — to cancel unconfirmed order. *charge — to confirm unconfirmed order. Applies only if processing of [vk.com/dev/payments_status|order_change_state] notification failed. *refund — to cancel confirmed order.
   */
  action: 'cancel' | 'charge' | 'refund';
  /**
   * internal ID of the order in the application.
   */
  app_order_id?: number;
  /**
   * if this parameter is set to 1, this method returns a list of test mode orders. By default — 0.
   */
  test_mode?: 0 | 1;
}

// orders.changeState_response
export type OrdersChangeStateResponse = string;

/**
 * orders.get
 *
 * Returns a list of orders.
 */

export interface OrdersGetParams {
  offset?: number;
  /**
   * number of returned orders.
   */
  count?: number;
  /**
   * if this parameter is set to 1, this method returns a list of test mode orders. By default — 0.
   */
  test_mode?: 0 | 1;
}

// orders.get_response
export type OrdersGetResponse = OrdersOrder[];

/**
 * orders.getAmount
 */

export interface OrdersGetAmountParams {
  user_id: number;
  votes: string;
}

// orders.getAmount_response
export type OrdersGetAmountResponse = OrdersAmount;

/**
 * orders.getById
 *
 * Returns information about orders by their IDs.
 */

export interface OrdersGetByIdParams {
  /**
   * order ID.
   */
  order_id?: number;
  /**
   * order IDs (when information about several orders is requested).
   */
  order_ids?: string;
  /**
   * if this parameter is set to 1, this method returns a list of test mode orders. By default — 0.
   */
  test_mode?: 0 | 1;
}

// orders.getById_response
export type OrdersGetByIdResponse = OrdersOrder[];

/**
 * orders.getUserSubscriptionById
 */

export interface OrdersGetUserSubscriptionByIdParams {
  user_id: number;
  subscription_id: number;
}

// orders.getUserSubscriptionById_response
export type OrdersGetUserSubscriptionByIdResponse = OrdersSubscription;

/**
 * orders.getUserSubscriptions
 */

export interface OrdersGetUserSubscriptionsParams {
  user_id: number;
}

// orders.getUserSubscriptions_response
export interface OrdersGetUserSubscriptionsResponse {
  /**
   * Total number
   */
  count?: number;
  items?: OrdersSubscription[];
}

/**
 * orders.updateSubscription
 */

export interface OrdersUpdateSubscriptionParams {
  user_id: number;
  subscription_id: number;
  price: number;
}

// orders.updateSubscription_response
export type OrdersUpdateSubscriptionResponse = 0 | 1;
