/**
 * This is auto-generated file, don't modify this file manually
 */

// orders_subscription
export interface OrdersSubscription {
  /**
   * Cancel reason
   */
  cancel_reason?: string;
  /**
   * Date of creation in Unixtime
   */
  create_time: number;
  /**
   * Subscription ID
   */
  id: number;
  /**
   * Subscription order item
   */
  item_id: string;
  /**
   * Date of next bill in Unixtime
   */
  next_bill_time?: number;
  /**
   * Pending cancel state
   */
  pending_cancel?: boolean;
  /**
   * Subscription period
   */
  period: number;
  /**
   * Date of last period start in Unixtime
   */
  period_start_time: number;
  /**
   * Subscription price
   */
  price: number;
  /**
   * Subscription status
   */
  status: string;
  /**
   * Is test subscription
   */
  test_mode?: boolean;
  /**
   * Date of trial expire in Unixtime
   */
  trial_expire_time?: number;
  /**
   * Date of last change in Unixtime
   */
  update_time: number;
}
