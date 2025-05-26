/**
 * This is auto-generated file, don't modify this file manually
 */

import { LeadFormsForm } from '../objects/leadForms/LeadFormsForm';
import { LeadFormsLead } from '../objects/leadForms/LeadFormsLead';

/**
 * leadForms.create
 */

export interface LeadFormsCreateParams {
  group_id: number;
  name: string;
  title: string;
  description: string;
  questions: string;
  policy_link_url: string;
  photo?: string;
  confirmation?: string;
  site_link_url?: string;
  active?: 0 | 1;
  once_per_user?: 0 | 1;
  pixel_code?: string;
  notify_admins?: string;
  notify_emails?: string;
}

// leadForms.create_response
export interface LeadFormsCreateResponse {
  form_id?: number;
  url?: string;
}

/**
 * leadForms.delete
 */

export interface LeadFormsDeleteParams {
  group_id: number;
  form_id: number;
}

// leadForms.delete_response
export interface LeadFormsDeleteResponse {
  form_id?: number;
}

/**
 * leadForms.get
 */

export interface LeadFormsGetParams {
  group_id: number;
  form_id: number;
}

// leadForms.get_response
export type LeadFormsGetResponse = LeadFormsForm;

/**
 * leadForms.getLeads
 */

export interface LeadFormsGetLeadsParams {
  group_id: number;
  form_id: number;
  limit?: number;
  next_page_token?: string;
}

// leadForms.getLeads_response
export interface LeadFormsGetLeadsResponse {
  leads?: LeadFormsLead[];
  next_page_token?: string;
}

/**
 * leadForms.getUploadURL
 */

export interface LeadFormsGetUploadURLParams {}

// leadForms.getUploadURL_response
export type LeadFormsGetUploadURLResponse = string;

/**
 * leadForms.list
 */

export interface LeadFormsListParams {
  group_id: number;
}

// leadForms.list_response
export type LeadFormsListResponse = LeadFormsForm[];

/**
 * leadForms.update
 */

export interface LeadFormsUpdateParams {
  group_id: number;
  form_id: number;
  name: string;
  title: string;
  description: string;
  questions: string;
  policy_link_url: string;
  photo?: string;
  confirmation?: string;
  site_link_url?: string;
  active?: 0 | 1;
  once_per_user?: 0 | 1;
  pixel_code?: string;
  notify_admins?: string;
  notify_emails?: string;
}

// leadForms.update_response
export interface LeadFormsUpdateResponse {
  form_id?: number;
  url?: string;
}
