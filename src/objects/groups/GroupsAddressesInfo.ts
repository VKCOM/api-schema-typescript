/**
 * This is auto-generated file, don't modify this file manually
 */

import { GroupsAddress } from './GroupsAddress';

// groups_addresses_info
export interface GroupsAddressesInfo {
  /**
   * Information whether addresses is enabled
   */
  is_enabled?: boolean;
  /**
   * Main address id for group
   */
  main_address_id?: number;
  /**
   * Main address
   */
  main_address?: GroupsAddress;
  /**
   * Count of addresses
   */
  count?: number;
}
