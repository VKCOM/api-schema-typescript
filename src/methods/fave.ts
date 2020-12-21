/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseUserGroupFields } from '../objects/base/BaseUserGroupFields';
import { FaveBookmark } from '../objects/fave/FaveBookmark';
import { FavePage } from '../objects/fave/FavePage';
import { FaveTag } from '../objects/fave/FaveTag';
import { GroupsGroup } from '../objects/groups/GroupsGroup';
import { UsersUserFull } from '../objects/users/UsersUserFull';

/**
 * fave.addArticle
 */

export interface FaveAddArticleParams {
  url: string;
}

// fave.addArticle_response
export type FaveAddArticleResponse = 1;

/**
 * fave.addLink
 *
 * Adds a link to user faves.
 */

export interface FaveAddLinkParams {
  /**
   * Link URL.
   */
  link: string;
}

// fave.addLink_response
export type FaveAddLinkResponse = 1;

/**
 * fave.addPage
 */

export interface FaveAddPageParams {
  user_id?: number;
  group_id?: number;
}

// fave.addPage_response
export type FaveAddPageResponse = 1;

/**
 * fave.addPost
 */

export interface FaveAddPostParams {
  owner_id: number;
  id: number;
  access_key?: string;
}

// fave.addPost_response
export type FaveAddPostResponse = 1;

/**
 * fave.addProduct
 */

export interface FaveAddProductParams {
  owner_id: number;
  id: number;
  access_key?: string;
}

// fave.addProduct_response
export type FaveAddProductResponse = 1;

/**
 * fave.addTag
 */

export interface FaveAddTagParams {
  name?: string;
  position?: 'back' | 'front';
}

// fave.addTag_response
export type FaveAddTagResponse = FaveTag;

/**
 * fave.addVideo
 */

export interface FaveAddVideoParams {
  owner_id: number;
  id: number;
  access_key?: string;
}

// fave.addVideo_response
export type FaveAddVideoResponse = 1;

/**
 * fave.editTag
 */

export interface FaveEditTagParams {
  id: number;
  name: string;
}

// fave.editTag_response
export type FaveEditTagResponse = 1;

/**
 * fave.get
 */

export interface FaveGetParams {
  /**
   * '1' — to return additional 'wall', 'profiles', and 'groups' fields. By default: '0'.
   */
  extended?: 0 | 1;
  item_type?: 'article' | 'clip' | 'link' | 'narrative' | 'page' | 'podcast' | 'post' | 'product' | 'video';
  /**
   * Tag ID.
   */
  tag_id?: number;
  /**
   * Offset needed to return a specific subset of users.
   */
  offset?: number;
  /**
   * Number of users to return.
   */
  count?: number;
  fields?: string;
  is_from_snackbar?: 0 | 1;
}

// fave.get_response
export interface FaveGetResponse {
  /**
   * Total number
   */
  count?: number;
  items?: FaveBookmark[];
}

// fave.get_extendedResponse
export interface FaveGetExtendedResponse {
  /**
   * Total number
   */
  count?: number;
  items?: FaveBookmark[];
  profiles?: UsersUserFull[];
  groups?: GroupsGroup[];
}

/**
 * fave.getPages
 */

export interface FaveGetPagesParams {
  offset?: number;
  count?: number;
  type?: 'groups' | 'hints' | 'users';
  fields?: BaseUserGroupFields[];
  tag_id?: number;
}

// fave.getPages_response
export interface FaveGetPagesResponse {
  count?: number;
  items?: FavePage[];
}

/**
 * fave.getTags
 */

export interface FaveGetTagsParams {}

// fave.getTags_response
export interface FaveGetTagsResponse {
  count?: number;
  items?: FaveTag[];
}

/**
 * fave.markSeen
 */

export interface FaveMarkSeenParams {}

// fave.markSeen_response
export type FaveMarkSeenResponse = 0 | 1;

/**
 * fave.removeArticle
 */

export interface FaveRemoveArticleParams {
  owner_id: number;
  article_id: number;
}

// fave.removeArticle_response
export type FaveRemoveArticleResponse = 0 | 1;

/**
 * fave.removeLink
 *
 * Removes link from the user's faves.
 */

export interface FaveRemoveLinkParams {
  /**
   * Link ID (can be obtained by [vk.com/dev/faves.getLinks|faves.getLinks] method).
   */
  link_id?: string;
  /**
   * Link URL
   */
  link?: string;
}

// fave.removeLink_response
export type FaveRemoveLinkResponse = 1;

/**
 * fave.removePage
 */

export interface FaveRemovePageParams {
  user_id?: number;
  group_id?: number;
}

// fave.removePage_response
export type FaveRemovePageResponse = 1;

/**
 * fave.removePost
 */

export interface FaveRemovePostParams {
  owner_id: number;
  id: number;
}

// fave.removePost_response
export type FaveRemovePostResponse = 1;

/**
 * fave.removeProduct
 */

export interface FaveRemoveProductParams {
  owner_id: number;
  id: number;
}

// fave.removeProduct_response
export type FaveRemoveProductResponse = 1;

/**
 * fave.removeTag
 */

export interface FaveRemoveTagParams {
  id: number;
}

// fave.removeTag_response
export type FaveRemoveTagResponse = 1;

/**
 * fave.removeVideo
 */

export interface FaveRemoveVideoParams {
  owner_id: number;
  id: number;
}

// fave.removeVideo_response
export type FaveRemoveVideoResponse = 1;

/**
 * fave.reorderTags
 */

export interface FaveReorderTagsParams {
  ids: number[];
}

// fave.reorderTags_response
export type FaveReorderTagsResponse = 1;

/**
 * fave.setPageTags
 */

export interface FaveSetPageTagsParams {
  user_id?: number;
  group_id?: number;
  tag_ids?: number[];
}

// fave.setPageTags_response
export type FaveSetPageTagsResponse = 1;

/**
 * fave.setTags
 */

export interface FaveSetTagsParams {
  item_type?: 'article' | 'clip' | 'link' | 'narrative' | 'page' | 'podcast' | 'post' | 'product' | 'video';
  item_owner_id?: number;
  item_id?: number;
  tag_ids?: number[];
  link_id?: string;
  link_url?: string;
}

// fave.setTags_response
export type FaveSetTagsResponse = 1;

/**
 * fave.trackPageInteraction
 */

export interface FaveTrackPageInteractionParams {
  user_id?: number;
  group_id?: number;
}

// fave.trackPageInteraction_response
export type FaveTrackPageInteractionResponse = 1;
