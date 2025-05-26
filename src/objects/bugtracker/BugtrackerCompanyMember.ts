/**
 * This is auto-generated file, don't modify this file manually
 */

import { BugtrackerCompanyMemberProduct } from './BugtrackerCompanyMemberProduct';

// bugtracker_company_member
export interface BugtrackerCompanyMember {
  user_id?: number;
  company_id?: number;
  role?: number;
  role_name?: string;
  ts?: number;
  groups_count?: number;
  products_count?: number;
  reporter_url?: string;
  groups?: number[];
  products?: BugtrackerCompanyMemberProduct[];
}
