/**
 * This is auto-generated file, don't modify this file manually
 */

// board_topic
export interface BoardTopic {
  /**
   * Comments number
   */
  comments?: number;
  /**
   * Date when the topic has been created in Unixtime
   */
  created?: number;
  /**
   * Creator ID
   */
  created_by?: number;
  /**
   * Topic ID
   */
  id?: number;
  /**
   * Information whether the topic is closed
   */
  is_closed?: 0 | 1;
  /**
   * Information whether the topic is fixed
   */
  is_fixed?: 0 | 1;
  /**
   * Topic title
   */
  title?: string;
  /**
   * Date when the topic has been updated in Unixtime
   */
  updated?: number;
  /**
   * ID of user who updated the topic
   */
  updated_by?: number;
}
