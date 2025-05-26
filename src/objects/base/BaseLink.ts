/**
 * This is auto-generated file, don't modify this file manually
 */

import { LinkTargetObject } from '../link/LinkTargetObject';
import { PhotosPhoto } from '../photos/PhotosPhoto';
import { VideoVideoFull } from '../video/VideoVideoFull';
import { BaseLinkApplication } from './BaseLinkApplication';
import { BaseLinkButton } from './BaseLinkButton';
import { BaseLinkProduct } from './BaseLinkProduct';
import { BaseLinkRating } from './BaseLinkRating';

// base_link
export interface BaseLink {
  application?: BaseLinkApplication;
  button?: BaseLinkButton;
  /**
   * Link caption
   */
  caption?: string;
  /**
   * Link description
   */
  description?: string;
  /**
   * Link ID
   */
  id?: string;
  is_favorite?: boolean;
  photo?: PhotosPhoto;
  /**
   * String ID of the page with article preview
   */
  preview_page?: string;
  /**
   * URL of the page with article preview
   */
  preview_url?: string;
  rating?: BaseLinkRating;
  /**
   * Link title
   */
  title?: string;
  /**
   * Link URL
   */
  url?: string;
  target_object?: LinkTargetObject;
  /**
   * Information whether the current link is external
   */
  is_external?: boolean;
  /**
   * Video from link
   */
  video?: VideoVideoFull;
  text?: string;
  product?: BaseLinkProduct;
}
