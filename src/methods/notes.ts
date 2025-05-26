/**
 * This is auto-generated file, don't modify this file manually
 */

import { NotesNote } from '../objects/notes/NotesNote';
import { NotesNoteComment } from '../objects/notes/NotesNoteComment';

/**
 * notes.add
 *
 * Creates a new note for the current user.
 */

export interface NotesAddParams {
  /**
   * Note title.
   */
  title: string;
  /**
   * Note text.
   */
  text: string;
  privacy_view?: string;
  privacy_comment?: string;
}

// notes.add_response
export type NotesAddResponse = number;

/**
 * notes.createComment
 *
 * Adds a new comment on a note.
 */

export interface NotesCreateCommentParams {
  /**
   * Note ID.
   */
  note_id: number;
  /**
   * Note owner ID.
   */
  owner_id?: number;
  /**
   * ID of the user to whom the reply is addressed (if the comment is a reply to another comment).
   */
  reply_to?: number;
  /**
   * Comment text.
   */
  message: string;
  guid?: string;
}

// notes.createComment_response
export type NotesCreateCommentResponse = number;

/**
 * notes.delete
 *
 * Deletes a note of the current user.
 */

export interface NotesDeleteParams {
  /**
   * Note ID.
   */
  note_id: number;
}

// notes.delete_response
export type NotesDeleteResponse = 1;

/**
 * notes.deleteComment
 *
 * Deletes a comment on a note.
 */

export interface NotesDeleteCommentParams {
  /**
   * Comment ID.
   */
  comment_id: number;
  /**
   * Note owner ID.
   */
  owner_id?: number;
}

// notes.deleteComment_response
export type NotesDeleteCommentResponse = 1;

/**
 * notes.edit
 *
 * Edits a note of the current user.
 */

export interface NotesEditParams {
  /**
   * Note ID.
   */
  note_id: number;
  /**
   * Note title.
   */
  title: string;
  /**
   * Note text.
   */
  text: string;
  privacy_view?: string;
  privacy_comment?: string;
}

// notes.edit_response
export type NotesEditResponse = 1;

/**
 * notes.editComment
 *
 * Edits a comment on a note.
 */

export interface NotesEditCommentParams {
  /**
   * Comment ID.
   */
  comment_id: number;
  /**
   * Note owner ID.
   */
  owner_id?: number;
  /**
   * New comment text.
   */
  message: string;
}

// notes.editComment_response
export type NotesEditCommentResponse = 1;

/**
 * notes.get
 *
 * Returns a list of notes created by a user.
 */

export interface NotesGetParams {
  /**
   * Note IDs.
   */
  note_ids?: string;
  /**
   * Note owner ID.
   */
  user_id?: number;
  offset?: number;
  /**
   * Number of notes to return.
   */
  count?: number;
  sort?: 0 | 1;
}

// notes.get_response
export interface NotesGetResponse {
  /**
   * Total number
   */
  count?: number;
  items?: NotesNote[];
}

/**
 * notes.getById
 *
 * Returns a note by its ID.
 */

export interface NotesGetByIdParams {
  /**
   * Note ID.
   */
  note_id: number;
  /**
   * Note owner ID.
   */
  owner_id?: number;
  need_wiki?: 0 | 1;
}

// notes.getById_response
export type NotesGetByIdResponse = NotesNote;

/**
 * notes.getComments
 *
 * Returns a list of comments on a note.
 */

export interface NotesGetCommentsParams {
  /**
   * Note ID.
   */
  note_id: number;
  /**
   * Note owner ID.
   */
  owner_id?: number;
  sort?: 0 | 1;
  offset?: number;
  /**
   * Number of comments to return.
   */
  count?: number;
}

// notes.getComments_response
export interface NotesGetCommentsResponse {
  /**
   * Total number
   */
  count?: number;
  items?: NotesNoteComment[];
}

/**
 * notes.restoreComment
 *
 * Restores a deleted comment on a note.
 */

export interface NotesRestoreCommentParams {
  /**
   * Comment ID.
   */
  comment_id: number;
  /**
   * Note owner ID.
   */
  owner_id?: number;
}

// notes.restoreComment_response
export type NotesRestoreCommentResponse = 1;
