/**
 * This is auto-generated file, don't modify this file manually
 */

import { CallsEndState } from './CallsEndState';

// calls_call
export interface CallsCall {
  /**
   * Call duration
   */
  duration?: number;
  /**
   * Caller initiator
   */
  initiator_id: number;
  /**
   * Caller receiver
   */
  receiver_id: number;
  state: CallsEndState;
  /**
   * Timestamp for call
   */
  time: number;
  /**
   * Was this call initiated as video call
   */
  video?: boolean;
}
