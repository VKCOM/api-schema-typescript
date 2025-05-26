/**
 * This is auto-generated file, don't modify this file manually
 */

import { PhotosPhoto } from '../photos/PhotosPhoto';
import { VideoVideoFull } from '../video/VideoVideoFull';
import { StoriesClickableStickers } from './StoriesClickableStickers';
import { StoriesReplies } from './StoriesReplies';
import { StoriesStoryLink } from './StoriesStoryLink';
import { StoriesStoryType } from './StoriesStoryType';

// stories_story
export interface StoriesStory {
  /**
   * Access key for private object.
   */
  access_key?: string;
  /**
   * Information whether current user can comment the story (0 - no, 1 - yes).
   */
  can_comment?: 0 | 1;
  /**
   * Information whether current user can reply to the story (0 - no, 1 - yes).
   */
  can_reply?: 0 | 1;
  /**
   * Information whether current user can see the story (0 - no, 1 - yes).
   */
  can_see?: 0 | 1;
  /**
   * Information whether current user can like the story.
   */
  can_like?: boolean;
  /**
   * Information whether current user can share the story (0 - no, 1 - yes).
   */
  can_share?: 0 | 1;
  /**
   * Information whether current user can hide the story (0 - no, 1 - yes).
   */
  can_hide?: 0 | 1;
  /**
   * Date when story has been added in Unixtime.
   */
  date?: number;
  /**
   * Story expiration time. Unixtime.
   */
  expires_at?: number;
  /**
   * Story ID.
   */
  id?: number;
  /**
   * Information whether the story is deleted (false - no, true - yes).
   */
  is_deleted?: boolean;
  /**
   * Information whether the story is expired (false - no, true - yes).
   */
  is_expired?: boolean;
  link?: StoriesStoryLink;
  /**
   * Story owner's ID.
   */
  owner_id?: number;
  parent_story?: StoriesStory;
  /**
   * Access key for private object.
   */
  parent_story_access_key?: string;
  /**
   * Parent story ID.
   */
  parent_story_id?: number;
  /**
   * Parent story owner's ID.
   */
  parent_story_owner_id?: number;
  photo?: PhotosPhoto;
  /**
   * url with blured preview image.
   */
  blurred_preview?: string;
  /**
   * Replies counters to current story.
   */
  replies?: StoriesReplies;
  /**
   * Information whether current user has seen the story or not (0 - no, 1 - yes).
   */
  seen?: 0 | 1;
  type?: StoriesStoryType;
  clickable_stickers?: StoriesClickableStickers;
  video?: VideoVideoFull;
  /**
   * Views number.
   */
  views?: number;
  /**
   * Information whether story has question sticker and current user can send question to the author
   */
  can_ask?: 0 | 1;
  /**
   * Information whether story has question sticker and current user can send anonymous question to the author
   */
  can_ask_anonymous?: 0 | 1;
  narratives_count?: number;
  first_narrative_title?: string;
  first_narrative_id?: number;
  can_use_in_narrative?: boolean;
}
