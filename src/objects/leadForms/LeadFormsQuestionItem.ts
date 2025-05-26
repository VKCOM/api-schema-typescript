/**
 * This is auto-generated file, don't modify this file manually
 */

import { LeadFormsQuestionItemOption } from './LeadFormsQuestionItemOption';

// leadForms_question_item
export interface LeadFormsQuestionItem {
  key?: string;
  type?: 'input' | 'textarea' | 'radio' | 'checkbox' | 'select';
  label?: string;
  /**
   * Опции выбора для типов radio, checkbox, select
   */
  options?: LeadFormsQuestionItemOption[];
}
