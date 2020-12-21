/**
 * This is auto-generated file, don't modify this file manually
 */

import { AdsAccessRolePublic } from './AdsAccessRolePublic';

// ads_user_specification
export interface AdsUserSpecification {
  user_id: number;
  role: AdsAccessRolePublic;
  grant_access_to_all_clients?: boolean;
  client_ids?: number[];
  view_budget?: boolean;
}
