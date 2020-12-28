/**
 * This is auto-generated file, don't modify this file manually
 */

import { GroupsGroup } from '../objects/groups/GroupsGroup';
import { GroupsGroupFull } from '../objects/groups/GroupsGroupFull';
import { StoriesFeedItem } from '../objects/stories/StoriesFeedItem';
import { StoriesStory } from '../objects/stories/StoriesStory';
import { StoriesStoryStats } from '../objects/stories/StoriesStoryStats';
import { StoriesViewersItem } from '../objects/stories/StoriesViewersItem';
import { UsersUser } from '../objects/users/UsersUser';
import { UsersUserFull } from '../objects/users/UsersUserFull';

/**
 * stories.banOwner
 *
 * Allows to hide stories from chosen sources from current user's feed.
 */

export interface StoriesBanOwnerParams {
  /**
   * List of sources IDs
   */
  owners_ids: string;
}

// stories.banOwner_response
export type StoriesBanOwnerResponse = 1;

/**
 * stories.delete
 *
 * Allows to delete story.
 */

export interface StoriesDeleteParams {
  /**
   * Story owner's ID. Current user id is used by default.
   */
  owner_id?: number;
  /**
   * Story ID.
   */
  story_id?: number;
  stories?: string;
}

// stories.delete_response
export type StoriesDeleteResponse = 1;

/**
 * stories.get
 *
 * Returns stories available for current user.
 */

export interface StoriesGetParams {
  /**
   * Owner ID.
   */
  owner_id?: number;
  /**
   * '1' — to return additional fields for users and communities. Default value is 0.
   */
  extended?: 0 | 1;
  /**
   * objects.json#/definitions/base_user_group_fields
   */
  fields?: string;
}

// stories.get_response
export interface StoriesGetResponse {
  count: number;
  items: StoriesFeedItem[];
  profiles?: UsersUser[];
  groups?: GroupsGroup[];
  need_upload_screen?: boolean;
}

/**
 * stories.getBanned
 *
 * Returns list of sources hidden from current user's feed.
 */

export interface StoriesGetBannedParams {
  /**
   * '1' — to return additional fields for users and communities. Default value is 0.
   */
  extended?: 0 | 1;
  /**
   * Additional fields to return
   *
   * objects.json#/definitions/base_user_group_fields
   */
  fields?: string;
}

// stories.getBanned_response
export interface StoriesGetBannedResponse {
  /**
   * Stories count
   */
  count: number;
  items: number[];
}

// stories.getBanned_extendedResponse
export interface StoriesGetBannedExtendedResponse {
  /**
   * Stories count
   */
  count: number;
  items: number[];
  profiles: UsersUserFull[];
  groups: GroupsGroupFull[];
}

/**
 * stories.getById
 *
 * Returns story by its ID.
 */

export interface StoriesGetByIdParams {
  /**
   * Stories IDs separated by commas. Use format {owner_id}+'_'+{story_id}, for example, 12345_54331.
   */
  stories: string;
  /**
   * '1' — to return additional fields for users and communities. Default value is 0.
   */
  extended?: 0 | 1;
  /**
   * Additional fields to return
   *
   * objects.json#/definitions/base_user_group_fields
   */
  fields?: string;
}

// stories.getById_response
export interface StoriesGetByIdResponse {
  /**
   * Stories count
   */
  count: number;
  items: StoriesStory[];
}

// stories.getById_extendedResponse
export interface StoriesGetByIdExtendedResponse {
  /**
   * Stories count
   */
  count: number;
  items: StoriesStory[];
  profiles: UsersUserFull[];
  groups: GroupsGroupFull[];
}

/**
 * stories.getPhotoUploadServer
 *
 * Returns URL for uploading a story with photo.
 */

export interface StoriesGetPhotoUploadServerParams {
  /**
   * 1 — to add the story to friend's feed.
   */
  add_to_news?: 0 | 1;
  /**
   * List of users IDs who can see the story.
   */
  user_ids?: string;
  /**
   * ID of the story to reply with the current.
   */
  reply_to_story?: string;
  /**
   * Link text (for community's stories only).
   */
  link_text?: string;
  /**
   * Link URL. Internal links on https://vk.com only.
   */
  link_url?: string;
  /**
   * ID of the community to upload the story (should be verified or with the "fire" icon).
   */
  group_id?: number;
  clickable_stickers?: string;
}

// stories.getPhotoUploadServer_response
export interface StoriesGetPhotoUploadServerResponse {
  /**
   * Upload URL
   */
  upload_url: string;
  /**
   * Users ID who can to see story.
   */
  user_ids: number[];
}

/**
 * stories.getReplies
 *
 * Returns replies to the story.
 */

export interface StoriesGetRepliesParams {
  /**
   * Story owner ID.
   */
  owner_id: number;
  /**
   * Story ID.
   */
  story_id: number;
  /**
   * Access key for the private object.
   */
  access_key?: string;
  /**
   * '1' — to return additional fields for users and communities. Default value is 0.
   */
  extended?: 0 | 1;
  /**
   * Additional fields to return
   *
   * objects.json#/definitions/base_user_group_fields
   */
  fields?: string;
}

// stories.getReplies_response
export interface StoriesGetRepliesResponse {
  count: number;
  items: StoriesFeedItem[];
  profiles?: UsersUser[];
  groups?: GroupsGroup[];
  need_upload_screen?: boolean;
}

/**
 * stories.getStats
 *
 * Returns stories available for current user.
 */

export interface StoriesGetStatsParams {
  /**
   * Story owner ID.
   */
  owner_id: number;
  /**
   * Story ID.
   */
  story_id: number;
}

// stories.getStats_response
export type StoriesGetStatsResponse = StoriesStoryStats;

/**
 * stories.getVideoUploadServer
 *
 * Allows to receive URL for uploading story with video.
 */

export interface StoriesGetVideoUploadServerParams {
  /**
   * 1 — to add the story to friend's feed.
   */
  add_to_news?: 0 | 1;
  /**
   * List of users IDs who can see the story.
   */
  user_ids?: string;
  /**
   * ID of the story to reply with the current.
   */
  reply_to_story?: string;
  /**
   * Link text (for community's stories only).
   */
  link_text?: string;
  /**
   * Link URL. Internal links on https://vk.com only.
   */
  link_url?: string;
  /**
   * ID of the community to upload the story (should be verified or with the "fire" icon).
   */
  group_id?: number;
  clickable_stickers?: string;
}

// stories.getVideoUploadServer_response
export interface StoriesGetVideoUploadServerResponse {
  /**
   * Upload URL
   */
  upload_url: string;
  /**
   * Users ID who can to see story.
   */
  user_ids: number[];
}

/**
 * stories.getViewers
 *
 * Returns a list of story viewers.
 */

export interface StoriesGetViewersParams {
  /**
   * Story owner ID.
   */
  owner_id: number;
  /**
   * Story ID.
   */
  story_id: number;
  /**
   * Maximum number of results.
   */
  count?: number;
  /**
   * Offset needed to return a specific subset of results.
   */
  offset?: number;
  /**
   * '1' — to return detailed information about photos
   */
  extended?: 0 | 1;
}

// stories.getViewers_response
export interface StoriesGetViewersResponse {
  /**
   * Viewers count
   */
  count: number;
  items: StoriesViewersItem[];
  hidden_reason?: string;
}

// stories.getViewers_extendedResponse
export interface StoriesGetViewersExtendedResponse {
  /**
   * Viewers count
   */
  count: number;
  items: StoriesViewersItem[];
  hidden_reason?: string;
}

/**
 * stories.hideAllReplies
 *
 * Hides all replies in the last 24 hours from the user to current user's stories.
 */

export interface StoriesHideAllRepliesParams {
  /**
   * ID of the user whose replies should be hidden.
   */
  owner_id: number;
  group_id?: number;
}

// stories.hideAllReplies_response
export type StoriesHideAllRepliesResponse = 1;

/**
 * stories.hideReply
 *
 * Hides the reply to the current user's story.
 */

export interface StoriesHideReplyParams {
  /**
   * ID of the user whose replies should be hidden.
   */
  owner_id: number;
  /**
   * Story ID.
   */
  story_id: number;
}

// stories.hideReply_response
export type StoriesHideReplyResponse = 1;

/**
 * stories.save
 */

export interface StoriesSaveParams {
  upload_results: string;
}

// stories.save_response
export interface StoriesSaveResponse {
  count: number;
  items: StoriesStory[];
}

/**
 * stories.search
 */

export interface StoriesSearchParams {
  q?: string;
  place_id?: number;
  latitude?: number;
  longitude?: number;
  radius?: number;
  mentioned_id?: number;
  count?: number;
  extended?: 0 | 1;
  fields?: string;
}

// stories.search_response
export interface StoriesSearchResponse {
  count: number;
  items: StoriesFeedItem[];
  profiles?: UsersUser[];
  groups?: GroupsGroup[];
  need_upload_screen?: boolean;
}

/**
 * stories.sendInteraction
 */

export interface StoriesSendInteractionParams {
  access_key: string;
  message?: string;
  is_broadcast?: 0 | 1;
  is_anonymous?: 0 | 1;
  unseen_marker?: 0 | 1;
}

// stories.sendInteraction_response
export type StoriesSendInteractionResponse = 1;

/**
 * stories.unbanOwner
 *
 * Allows to show stories from hidden sources in current user's feed.
 */

export interface StoriesUnbanOwnerParams {
  /**
   * List of hidden sources to show stories from.
   */
  owners_ids: string;
}

// stories.unbanOwner_response
export type StoriesUnbanOwnerResponse = 1;
