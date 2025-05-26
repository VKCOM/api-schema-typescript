/**
 * This is auto-generated file, don't modify this file manually
 */

import { DocsDocPreview } from './DocsDocPreview';

// docs_doc
export interface DocsDoc {
  /**
   * Document ID
   */
  id?: number;
  /**
   * Document owner ID
   */
  owner_id?: number;
  /**
   * Document title
   */
  title?: string;
  /**
   * File size in bites
   */
  size?: number;
  /**
   * File extension
   */
  ext?: string;
  /**
   * File URL
   */
  url?: string;
  /**
   * Date when file has been uploaded in Unixtime
   */
  date?: number;
  /**
   * Document type
   */
  type?: number;
  preview?: DocsDocPreview;
  is_licensed?: 0 | 1;
  /**
   * Access key for the document
   */
  access_key?: string;
  /**
   * Document tags
   */
  tags?: string[];
}
