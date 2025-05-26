/**
 * This is auto-generated file, don't modify this file manually
 */

import { AdsOrdClientType } from './AdsOrdClientType';
import { AdsOrdSubagent } from './AdsOrdSubagent';

// ads_ord_data
export interface AdsOrdData {
  client_type?: AdsOrdClientType;
  client_name?: string;
  inn?: string;
  phone?: string;
  agency_phone?: string;
  subagent?: AdsOrdSubagent;
  contract_number?: string;
  contract_date?: string;
  contract_type?: string;
  contract_object?: string;
  with_vat?: boolean;
}
