/**
 * This is auto-generated file, don't modify this file manually
 */

// wall_attached_note
export interface WallAttachedNote {
  /**
   * Comments number
   */
  comments: number;
  /**
   * Date when the note has been created in Unixtime
   */
  date: number;
  /**
   * Note ID
   */
  id: number;
  /**
   * Note owner's ID
   */
  owner_id: number;
  /**
   * Read comments number
   */
  read_comments: number;
  /**
   * Note title
   */
  title: string;
  /**
   * Note text
   */
  text?: string;
  privacy_view?: string[];
  privacy_comment?: string[];
  can_comment?: number;
  /**
   * Note wiki text
   */
  text_wiki?: string;
  /**
   * URL of the page with note preview
   */
  view_url: string;
}
