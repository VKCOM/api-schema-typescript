/**
 * This is auto-generated file, don't modify this file manually
 */

// account_offer link_type enumNames
export const AccountOfferLinkTypeEnumNames = {
  PROFILE: 'profile',
  GROUP: 'group',
  APP: 'app',
} as const;

// account_offer
export interface AccountOffer {
  /**
   * Offer description
   */
  description?: string;
  /**
   * Offer ID
   */
  id?: number;
  /**
   * URL of the preview image
   */
  img?: string;
  /**
   * Instruction how to process the offer
   */
  instruction?: string;
  /**
   * Instruction how to process the offer (HTML format)
   */
  instruction_html?: string;
  /**
   * Offer price
   */
  price?: number;
  /**
   * Offer short description
   */
  short_description?: string;
  /**
   * Offer tag
   */
  tag?: string;
  /**
   * Offer title
   */
  title?: string;
  /**
   * Currency amount
   */
  currency_amount?: number;
  /**
   * Link id
   */
  link_id?: number;
  /**
   * Link type
   */
  link_type?: 'profile' | 'group' | 'app';
}
