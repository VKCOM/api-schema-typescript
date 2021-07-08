/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseUploadServer } from '../objects/base/BaseUploadServer';
import { DocsDoc } from '../objects/docs/DocsDoc';
import { DocsDocAttachmentType } from '../objects/docs/DocsDocAttachmentType';
import { DocsDocTypes } from '../objects/docs/DocsDocTypes';
import { MessagesAudioMessage } from '../objects/messages/MessagesAudioMessage';
import { MessagesGraffiti } from '../objects/messages/MessagesGraffiti';

/**
 * docs.add
 *
 * Copies a document to a user's or community's document list.
 */

export interface DocsAddParams {
  /**
   * ID of the user or community that owns the document. Use a negative value to designate a community ID.
   */
  owner_id: number;
  /**
   * Document ID.
   */
  doc_id: number;
  /**
   * Access key. This parameter is required if 'access_key' was returned with the document's data.
   */
  access_key?: string;
}

// docs.add_response
export type DocsAddResponse = number;

/**
 * docs.delete
 *
 * Deletes a user or community document.
 */

export interface DocsDeleteParams {
  /**
   * ID of the user or community that owns the document. Use a negative value to designate a community ID.
   */
  owner_id: number;
  /**
   * Document ID.
   */
  doc_id: number;
}

// docs.delete_response
export type DocsDeleteResponse = 1;

/**
 * docs.edit
 *
 * Edits a document.
 */

export interface DocsEditParams {
  /**
   * User ID or community ID. Use a negative value to designate a community ID.
   */
  owner_id: number;
  /**
   * Document ID.
   */
  doc_id: number;
  /**
   * Document title.
   */
  title: string;
  /**
   * Document tags.
   */
  tags?: string;
}

// docs.edit_response
export type DocsEditResponse = 1;

/**
 * docs.get
 *
 * Returns detailed information about user or community documents.
 */

export interface DocsGetParams {
  /**
   * Number of documents to return. By default, all documents.
   */
  count?: number;
  /**
   * Offset needed to return a specific subset of documents.
   */
  offset?: number;
  type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  /**
   * ID of the user or community that owns the documents. Use a negative value to designate a community ID.
   */
  owner_id?: number;
  return_tags?: 0 | 1;
}

// docs.get_response
export interface DocsGetResponse {
  /**
   * Total number
   */
  count: number;
  items: DocsDoc[];
}

/**
 * docs.getById
 *
 * Returns information about documents by their IDs.
 */

export interface DocsGetByIdParams {
  /**
   * Document IDs. Example: , "66748_91488,66748_91455",
   */
  docs: string;
  return_tags?: 0 | 1;
}

// docs.getById_response
export type DocsGetByIdResponse = DocsDoc[];

/**
 * docs.getMessagesUploadServer
 *
 * Returns the server address for document upload.
 */

export interface DocsGetMessagesUploadServerParams {
  /**
   * Document type.
   */
  type?: 'audio_message' | 'doc' | 'graffiti';
  /**
   * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'Chat ID', e.g. '2000000001'. For community: '- Community ID', e.g. '-12345'. "
   */
  peer_id?: number;
}

// docs.getMessagesUploadServer_response
export type DocsGetMessagesUploadServerResponse = BaseUploadServer;

/**
 * docs.getTypes
 *
 * Returns documents types available for current user.
 */

export interface DocsGetTypesParams {
  /**
   * ID of the user or community that owns the documents. Use a negative value to designate a community ID.
   */
  owner_id: number;
}

// docs.getTypes_response
export interface DocsGetTypesResponse {
  /**
   * Total number
   */
  count?: number;
  items?: DocsDocTypes[];
}

/**
 * docs.getUploadServer
 *
 * Returns the server address for document upload.
 */

export interface DocsGetUploadServerParams {
  /**
   * Community ID (if the document will be uploaded to the community).
   */
  group_id?: number;
}

// docs.getUploadServer_response
export type DocsGetUploadServerResponse = BaseUploadServer;

/**
 * docs.getWallUploadServer
 *
 * Returns the server address for document upload onto a user's or community's wall.
 */

export interface DocsGetWallUploadServerParams {
  /**
   * Community ID (if the document will be uploaded to the community).
   */
  group_id?: number;
}

// docs.getWallUploadServer_response
export type DocsGetWallUploadServerResponse = BaseUploadServer;

/**
 * docs.save
 *
 * Saves a document after [vk.com/dev/upload_files_2|uploading it to a server].
 */

export interface DocsSaveParams {
  /**
   * This parameter is returned when the file is [vk.com/dev/upload_files_2|uploaded to the server].
   */
  file: string;
  /**
   * Document title.
   */
  title?: string;
  /**
   * Document tags.
   */
  tags?: string;
  return_tags?: 0 | 1;
}

// docs.save_response
export interface DocsSaveResponse {
  type?: DocsDocAttachmentType;
  audio_message?: MessagesAudioMessage;
  doc?: DocsDoc;
  graffiti?: MessagesGraffiti;
}

/**
 * docs.search
 *
 * Returns a list of documents matching the search criteria.
 */

export interface DocsSearchParams {
  /**
   * Search query string.
   */
  q: string;
  search_own?: 0 | 1;
  /**
   * Number of results to return.
   */
  count?: number;
  /**
   * Offset needed to return a specific subset of results.
   */
  offset?: number;
  return_tags?: 0 | 1;
}

// docs.search_response
export interface DocsSearchResponse {
  /**
   * Total number
   */
  count: number;
  items: DocsDoc[];
}
