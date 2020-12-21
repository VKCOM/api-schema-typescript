/**
 * This is auto-generated file, don't modify this file manually
 */

import { AccountNameRequestStatus } from './AccountNameRequestStatus';

// account_name_request
export interface AccountNameRequest {
  /**
   * First name in request
   */
  first_name?: string;
  /**
   * Request ID needed to cancel the request
   */
  id?: number;
  /**
   * Last name in request
   */
  last_name?: string;
  status?: AccountNameRequestStatus;
  /**
   * Text to display to user
   */
  lang?: string;
  /**
   * href for link in lang field
   */
  link_href?: string;
  /**
   * label to display for link in lang field
   */
  link_label?: string;
}
