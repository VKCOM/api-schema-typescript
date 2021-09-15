/**
 * This is auto-generated file, don't modify this file manually
 */

// orders_order
export interface OrdersOrder {
  /**
   * Amount
   */
  amount: string;
  /**
   * App order ID
   */
  app_order_id: string;
  /**
   * Cancel transaction ID
   */
  cancel_transaction_id?: string;
  /**
   * Date of creation in Unixtime
   */
  date: string;
  /**
   * Order ID
   */
  id: string;
  /**
   * Order item
   */
  item: string;
  /**
   * Receiver ID
   */
  receiver_id: string;
  /**
   * Order status
   */
  status: 'created' | 'charged' | 'refunded' | 'chargeable' | 'cancelled' | 'declined';
  /**
   * Transaction ID
   */
  transaction_id?: string;
  /**
   * User ID
   */
  user_id: string;
}
