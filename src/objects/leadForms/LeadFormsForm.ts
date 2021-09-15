/**
 * This is auto-generated file, don't modify this file manually
 */

import { LeadFormsQuestionItem } from './LeadFormsQuestionItem';

// leadForms_form
export interface LeadFormsForm {
  form_id: number;
  group_id: number;
  photo?: string;
  name?: string;
  title?: string;
  description?: string;
  confirmation?: string;
  site_link_url?: string;
  policy_link_url?: string;
  questions?: LeadFormsQuestionItem[];
  active?: 0 | 1;
  leads_count: number;
  pixel_code?: string;
  once_per_user?: number;
  notify_admins?: string;
  notify_emails?: string;
  url: string;
}
