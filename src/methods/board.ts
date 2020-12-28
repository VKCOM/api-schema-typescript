/**
 * This is auto-generated file, don't modify this file manually
 */

import { BoardDefaultOrder } from '../objects/board/BoardDefaultOrder';
import { BoardTopic } from '../objects/board/BoardTopic';
import { BoardTopicComment } from '../objects/board/BoardTopicComment';
import { BoardTopicPoll } from '../objects/board/BoardTopicPoll';
import { GroupsGroup } from '../objects/groups/GroupsGroup';
import { UsersUser } from '../objects/users/UsersUser';
import { UsersUserMin } from '../objects/users/UsersUserMin';

/**
 * board.addTopic
 *
 * Creates a new topic on a community's discussion board.
 */

export interface BoardAddTopicParams {
  /**
   * ID of the community that owns the discussion board.
   */
  group_id: number;
  /**
   * Topic title.
   */
  title: string;
  /**
   * Text of the topic.
   */
  text?: string;
  /**
   * For a community: '1' — to post the topic as by the community, '0' — to post the topic as by the user (default)
   */
  from_group?: 0 | 1;
  /**
   * List of media objects attached to the topic, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media object: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — ID of the media owner. '<media_id>' — Media ID. Example: "photo100172_166443618,photo66748_265827614", , "NOTE: If you try to attach more than one reference, an error will be thrown.",
   */
  attachments?: string;
}

// board.addTopic_response
export type BoardAddTopicResponse = number;

/**
 * board.closeTopic
 *
 * Closes a topic on a community's discussion board so that comments cannot be posted.
 */

export interface BoardCloseTopicParams {
  /**
   * ID of the community that owns the discussion board.
   */
  group_id: number;
  /**
   * Topic ID.
   */
  topic_id: number;
}

// board.closeTopic_response
export type BoardCloseTopicResponse = 1;

/**
 * board.createComment
 *
 * Adds a comment on a topic on a community's discussion board.
 */

export interface BoardCreateCommentParams {
  /**
   * ID of the community that owns the discussion board.
   */
  group_id: number;
  /**
   * ID of the topic to be commented on.
   */
  topic_id: number;
  /**
   * (Required if 'attachments' is not set.) Text of the comment.
   */
  message?: string;
  /**
   * (Required if 'text' is not set.) List of media objects attached to the comment, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media object: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — ID of the media owner. '<media_id>' — Media ID.
   */
  attachments?: string;
  /**
   * '1' — to post the comment as by the community, '0' — to post the comment as by the user (default)
   */
  from_group?: 0 | 1;
  /**
   * Sticker ID.
   */
  sticker_id?: number;
  /**
   * Unique identifier to avoid repeated comments.
   */
  guid?: string;
}

// board.createComment_response
export type BoardCreateCommentResponse = number;

/**
 * board.deleteComment
 *
 * Deletes a comment on a topic on a community's discussion board.
 */

export interface BoardDeleteCommentParams {
  /**
   * ID of the community that owns the discussion board.
   */
  group_id: number;
  /**
   * Topic ID.
   */
  topic_id: number;
  /**
   * Comment ID.
   */
  comment_id: number;
}

// board.deleteComment_response
export type BoardDeleteCommentResponse = 1;

/**
 * board.deleteTopic
 *
 * Deletes a topic from a community's discussion board.
 */

export interface BoardDeleteTopicParams {
  /**
   * ID of the community that owns the discussion board.
   */
  group_id: number;
  /**
   * Topic ID.
   */
  topic_id: number;
}

// board.deleteTopic_response
export type BoardDeleteTopicResponse = 1;

/**
 * board.editComment
 *
 * Edits a comment on a topic on a community's discussion board.
 */

export interface BoardEditCommentParams {
  /**
   * ID of the community that owns the discussion board.
   */
  group_id: number;
  /**
   * Topic ID.
   */
  topic_id: number;
  /**
   * ID of the comment on the topic.
   */
  comment_id: number;
  /**
   * (Required if 'attachments' is not set). New comment text.
   */
  message?: string;
  /**
   * (Required if 'message' is not set.) List of media objects attached to the comment, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media object: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — ID of the media owner. '<media_id>' — Media ID. Example: "photo100172_166443618,photo66748_265827614"
   */
  attachments?: string;
}

// board.editComment_response
export type BoardEditCommentResponse = 1;

/**
 * board.editTopic
 *
 * Edits the title of a topic on a community's discussion board.
 */

export interface BoardEditTopicParams {
  /**
   * ID of the community that owns the discussion board.
   */
  group_id: number;
  /**
   * Topic ID.
   */
  topic_id: number;
  /**
   * New title of the topic.
   */
  title: string;
}

// board.editTopic_response
export type BoardEditTopicResponse = 1;

/**
 * board.fixTopic
 *
 * Pins a topic (fixes its place) to the top of a community's discussion board.
 */

export interface BoardFixTopicParams {
  /**
   * ID of the community that owns the discussion board.
   */
  group_id: number;
  /**
   * Topic ID.
   */
  topic_id: number;
}

// board.fixTopic_response
export type BoardFixTopicResponse = 1;

/**
 * board.getComments
 *
 * Returns a list of comments on a topic on a community's discussion board.
 */

export interface BoardGetCommentsParams {
  /**
   * ID of the community that owns the discussion board.
   */
  group_id: number;
  /**
   * Topic ID.
   */
  topic_id: number;
  /**
   * '1' — to return the 'likes' field, '0' — not to return the 'likes' field (default)
   */
  need_likes?: 0 | 1;
  start_comment_id?: number;
  /**
   * Offset needed to return a specific subset of comments.
   */
  offset?: number;
  /**
   * Number of comments to return.
   */
  count?: number;
  /**
   * '1' — to return information about users who posted comments, '0' — to return no additional fields (default)
   */
  extended?: 0 | 1;
  /**
   * Sort order: 'asc' — by creation date in chronological order, 'desc' — by creation date in reverse chronological order,
   */
  sort?: 'asc' | 'desc';
}

// board.getComments_response
export interface BoardGetCommentsResponse {
  /**
   * Total number
   */
  count: number;
  items: BoardTopicComment[];
  poll?: BoardTopicPoll;
}

// board.getComments_extendedResponse
export interface BoardGetCommentsExtendedResponse {
  /**
   * Total number
   */
  count: number;
  items: BoardTopicComment[];
  poll?: BoardTopicPoll;
  profiles: UsersUser[];
  groups: GroupsGroup[];
}

/**
 * board.getTopics
 *
 * Returns a list of topics on a community's discussion board.
 */

export interface BoardGetTopicsParams {
  /**
   * ID of the community that owns the discussion board.
   */
  group_id: number;
  /**
   * IDs of topics to be returned (100 maximum). By default, all topics are returned. If this parameter is set, the 'order', 'offset', and 'count' parameters are ignored.
   */
  topic_ids?: string;
  /**
   * Sort order: '1' — by date updated in reverse chronological order. '2' — by date created in reverse chronological order. '-1' — by date updated in chronological order. '-2' — by date created in chronological order. If no sort order is specified, topics are returned in the order specified by the group administrator. Pinned topics are returned first, regardless of the sorting.
   */
  order?: 1 | 2 | -1 | -2 | 0;
  /**
   * Offset needed to return a specific subset of topics.
   */
  offset?: number;
  /**
   * Number of topics to return.
   */
  count?: number;
  /**
   * '1' — to return information about users who created topics or who posted there last, '0' — to return no additional fields (default)
   */
  extended?: 0 | 1;
  /**
   * '1' — to return the first comment in each topic,, '2' — to return the last comment in each topic,, '0' — to return no comments. By default: '0'.
   */
  preview?: 1 | 2 | 0;
  /**
   * Number of characters after which to truncate the previewed comment. To preview the full comment, specify '0'.
   */
  preview_length?: number;
}

// board.getTopics_response
export interface BoardGetTopicsResponse {
  /**
   * Total number
   */
  count: number;
  items: BoardTopic[];
  default_order: BoardDefaultOrder;
  /**
   * Information whether current user can add topic
   */
  can_add_topics: 0 | 1;
}

// board.getTopics_extendedResponse
export interface BoardGetTopicsExtendedResponse {
  /**
   * Total number
   */
  count: number;
  items: BoardTopic[];
  default_order: BoardDefaultOrder;
  /**
   * Information whether current user can add topic
   */
  can_add_topics: 0 | 1;
  profiles: UsersUserMin[];
}

/**
 * board.openTopic
 *
 * Re-opens a previously closed topic on a community's discussion board.
 */

export interface BoardOpenTopicParams {
  /**
   * ID of the community that owns the discussion board.
   */
  group_id: number;
  /**
   * Topic ID.
   */
  topic_id: number;
}

// board.openTopic_response
export type BoardOpenTopicResponse = 1;

/**
 * board.restoreComment
 *
 * Restores a comment deleted from a topic on a community's discussion board.
 */

export interface BoardRestoreCommentParams {
  /**
   * ID of the community that owns the discussion board.
   */
  group_id: number;
  /**
   * Topic ID.
   */
  topic_id: number;
  /**
   * Comment ID.
   */
  comment_id: number;
}

// board.restoreComment_response
export type BoardRestoreCommentResponse = 1;

/**
 * board.unfixTopic
 *
 * Unpins a pinned topic from the top of a community's discussion board.
 */

export interface BoardUnfixTopicParams {
  /**
   * ID of the community that owns the discussion board.
   */
  group_id: number;
  /**
   * Topic ID.
   */
  topic_id: number;
}

// board.unfixTopic_response
export type BoardUnfixTopicResponse = 1;
