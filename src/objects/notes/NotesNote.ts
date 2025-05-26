/**
 * This is auto-generated file, don't modify this file manually
 */

// notes_note
export interface NotesNote {
  read_comments?: number;
  /**
   * Information whether current user can comment the note
   */
  can_comment?: 0 | 1;
  /**
   * Comments number
   */
  comments?: number;
  /**
   * Date when the note has been created in Unixtime
   */
  date?: number;
  /**
   * Note ID
   */
  id?: number;
  /**
   * Note owner's ID
   */
  owner_id?: number;
  /**
   * Note text
   */
  text?: string;
  /**
   * Note text in wiki format
   */
  text_wiki?: string;
  /**
   * Note title
   */
  title?: string;
  /**
   * URL of the page with note preview
   */
  view_url?: string;
  privacy_view?: string[];
  privacy_comment?: string[];
}
