/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseRequestParam } from './BaseRequestParam';

// base_error
export interface BaseError {
  inner_type?: 'base_error';
  /**
   * Error code
   */
  error_code?: number;
  /**
   * Error subcode
   */
  error_subcode?: number;
  /**
   * Error message
   */
  error_msg?: string;
  /**
   * Localized error message
   */
  error_text?: string;
  request_params?: BaseRequestParam[];
}
