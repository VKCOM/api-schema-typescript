/**
 * This is auto-generated file, don't modify this file manually
 */

import { PrettyCardsPrettyCard } from '../objects/prettyCards/PrettyCardsPrettyCard';

/**
 * prettyCards.create
 */

export interface PrettyCardsCreateParams {
  owner_id: number;
  photo: string;
  title: string;
  link: string;
  price?: string;
  price_old?: string;
  button?: string;
}

// prettyCards.create_response
export interface PrettyCardsCreateResponse {
  /**
   * Owner ID of created pretty card
   */
  owner_id: number;
  /**
   * Card ID of created pretty card
   */
  card_id: string;
}

/**
 * prettyCards.delete
 */

export interface PrettyCardsDeleteParams {
  owner_id: number;
  card_id: number;
}

// prettyCards.delete_response
export interface PrettyCardsDeleteResponse {
  /**
   * Owner ID of deleted pretty card
   */
  owner_id: number;
  /**
   * Card ID of deleted pretty card
   */
  card_id: string;
  /**
   * Error reason if error happened
   */
  error?: string;
}

/**
 * prettyCards.edit
 */

export interface PrettyCardsEditParams {
  owner_id: number;
  card_id: number;
  photo?: string;
  title?: string;
  link?: string;
  price?: string;
  price_old?: string;
  button?: string;
}

// prettyCards.edit_response
export interface PrettyCardsEditResponse {
  /**
   * Owner ID of edited pretty card
   */
  owner_id: number;
  /**
   * Card ID of edited pretty card
   */
  card_id: string;
}

/**
 * prettyCards.get
 */

export interface PrettyCardsGetParams {
  owner_id: number;
  offset?: number;
  count?: number;
}

// prettyCards.get_response
export interface PrettyCardsGetResponse {
  /**
   * Total number
   */
  count: number;
  items: PrettyCardsPrettyCard[];
}

/**
 * prettyCards.getById
 */

export interface PrettyCardsGetByIdParams {
  owner_id: number;
  card_ids: number[];
}

// prettyCards.getById_response
export type PrettyCardsGetByIdResponse = PrettyCardsPrettyCard[];

/**
 * prettyCards.getUploadURL
 */

export interface PrettyCardsGetUploadURLParams {}

// prettyCards.getUploadURL_response
export type PrettyCardsGetUploadURLResponse = string;
