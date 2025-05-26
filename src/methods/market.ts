/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseUploadServer } from '../objects/base/BaseUploadServer';
import { GroupsGroupFull } from '../objects/groups/GroupsGroupFull';
import { MarketGlobalSearchFilters } from '../objects/market/MarketGlobalSearchFilters';
import { MarketMarketAlbum } from '../objects/market/MarketMarketAlbum';
import { MarketMarketCategoryTree } from '../objects/market/MarketMarketCategoryTree';
import { MarketMarketItem } from '../objects/market/MarketMarketItem';
import { MarketMarketItemBasicWithGroup } from '../objects/market/MarketMarketItemBasicWithGroup';
import { MarketMarketItemFull } from '../objects/market/MarketMarketItemFull';
import { MarketOrder } from '../objects/market/MarketOrder';
import { MarketOrderItem } from '../objects/market/MarketOrderItem';
import { MarketProperty } from '../objects/market/MarketProperty';
import { MarketServicesViewType } from '../objects/market/MarketServicesViewType';
import { MarketUploadPhotoData } from '../objects/market/MarketUploadPhotoData';
import { PhotosPhoto } from '../objects/photos/PhotosPhoto';
import { UsersUserFull } from '../objects/users/UsersUserFull';
import { WallWallComment } from '../objects/wall/WallWallComment';

/**
 * market.add
 *
 * Ads a new item to the market.
 */

export interface MarketAddParams {
  /**
   * ID of an item owner community.
   */
  owner_id: number;
  /**
   * Item name.
   */
  name: string;
  /**
   * Item description.
   */
  description: string;
  /**
   * Item category ID.
   */
  category_id: number;
  /**
   * Item price.
   */
  price?: number;
  old_price?: number;
  /**
   * Item status ('1' - deleted, '0' - not deleted).
   */
  deleted?: 0 | 1;
  /**
   * Cover photo ID.
   */
  main_photo_id?: number;
  /**
   * IDs of additional photos.
   */
  photo_ids?: string;
  /**
   * IDs of additional videos.
   */
  video_ids?: string;
  /**
   * Url for button in market item.
   */
  url?: string;
  /**
   * IDs of properties variants.
   */
  variant_ids?: string;
  /**
   * Is main in their group.
   */
  is_main_variant?: 0 | 1;
  dimension_width?: number;
  dimension_height?: number;
  dimension_length?: number;
  weight?: number;
  sku?: string;
  stock_amount?: number;
}

// market.add_response
export interface MarketAddResponse {
  /**
   * Item ID
   */
  market_item_id?: number;
}

/**
 * market.addAlbum
 *
 * Creates new collection of items
 */

export interface MarketAddAlbumParams {
  /**
   * ID of an item owner community.
   */
  owner_id: number;
  /**
   * Collection title.
   */
  title: string;
  /**
   * Cover photo ID.
   */
  photo_id?: number;
  /**
   * Set as main ('1' - set, '0' - no).
   */
  main_album?: 0 | 1;
  /**
   * Set as hidden
   */
  is_hidden?: 0 | 1;
}

// market.addAlbum_response
export interface MarketAddAlbumResponse {
  /**
   * Album ID
   */
  market_album_id?: number;
  /**
   * Albums count
   */
  albums_count?: number;
}

/**
 * market.addProperty
 *
 * Adds property
 */

export interface MarketAddPropertyParams {
  /**
   * Group id.
   */
  group_id: number;
  /**
   * Property name.
   */
  title: string;
}

// market.addProperty_response
export interface MarketAddPropertyResponse {
  property_id?: number;
}

/**
 * market.addPropertyVariant
 *
 * Adds property variant
 */

export interface MarketAddPropertyVariantParams {
  /**
   * Group id.
   */
  group_id: number;
  /**
   * Property id.
   */
  property_id: number;
  /**
   * Variant name.
   */
  title: string;
}

// market.addPropertyVariant_response
export interface MarketAddPropertyVariantResponse {
  variant_id?: number;
}

/**
 * market.addToAlbum
 *
 * Adds an item to one or multiple collections.
 */

export interface MarketAddToAlbumParams {
  /**
   * ID of an item owner community.
   */
  owner_id: number;
  item_ids: string;
  /**
   * Collections IDs to add item to.
   */
  album_ids: string;
}

// market.addToAlbum_baseResponse
export type MarketAddToAlbumBaseResponse = 1;

/**
 * market.createComment
 *
 * Creates a new comment for an item.
 */

export interface MarketCreateCommentParams {
  /**
   * ID of an item owner community.
   */
  owner_id: number;
  /**
   * Item ID.
   */
  item_id: number;
  /**
   * Comment text (required if 'attachments' parameter is not specified)
   */
  message?: string;
  /**
   * Comma-separated list of objects attached to a comment. The field is submitted the following way: , "'<owner_id>_<media_id>,<owner_id>_<media_id>'", , '' - media attachment type: "'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document", , '<owner_id>' - media owner id, '<media_id>' - media attachment id, , For example: "photo100172_166443618,photo66748_265827614",
   */
  attachments?: string;
  /**
   * '1' - comment will be published on behalf of a community, '0' - on behalf of a user (by default).
   */
  from_group?: 0 | 1;
  /**
   * ID of a comment to reply with current comment to.
   */
  reply_to_comment?: number;
  /**
   * Sticker ID.
   */
  sticker_id?: number;
  /**
   * Random value to avoid resending one comment.
   */
  guid?: string;
}

// market.createComment_response
export type MarketCreateCommentResponse = number;

/**
 * market.delete
 *
 * Deletes an item.
 */

export interface MarketDeleteParams {
  /**
   * ID of an item owner community.
   */
  owner_id: number;
  /**
   * Item ID.
   */
  item_id: number;
}

// market.delete_response
export type MarketDeleteResponse = 1;

/**
 * market.deleteAlbum
 *
 * Deletes a collection of items.
 */

export interface MarketDeleteAlbumParams {
  /**
   * ID of an collection owner community.
   */
  owner_id: number;
  /**
   * Collection ID.
   */
  album_id: number;
}

// market.deleteAlbum_response
export type MarketDeleteAlbumResponse = 1;

/**
 * market.deleteComment
 *
 * Deletes an item's comment
 */

export interface MarketDeleteCommentParams {
  /**
   * identifier of an item owner community, "Note that community id in the 'owner_id' parameter should be negative number. For example 'owner_id'=-1 matches the [vk.com/apiclub|VK API] community "
   */
  owner_id: number;
  /**
   * comment id
   */
  comment_id: number;
}

// market.deleteComment_response
/**
 * Returns 1 if request has been processed successfully (0 if the comment is not found)
 */
export type MarketDeleteCommentResponse = 0 | 1;

/**
 * market.deleteProperty
 */

export interface MarketDeletePropertyParams {
  /**
   * Group id.
   */
  group_id: number;
  /**
   * Property id.
   */
  property_id: number;
}

// market.deleteProperty_response
export type MarketDeletePropertyResponse = 1;

/**
 * market.deletePropertyVariant
 */

export interface MarketDeletePropertyVariantParams {
  /**
   * Group id.
   */
  group_id: number;
  /**
   * Variant id.
   */
  variant_id: number;
}

// market.deletePropertyVariant_response
export type MarketDeletePropertyVariantResponse = 1;

/**
 * market.edit
 *
 * Edits an item.
 */

export interface MarketEditParams {
  /**
   * ID of an item owner community.
   */
  owner_id: number;
  /**
   * Item ID.
   */
  item_id: number;
  /**
   * Item name.
   */
  name?: string;
  /**
   * Item description.
   */
  description?: string;
  /**
   * Item category ID.
   */
  category_id?: number;
  /**
   * Item price.
   */
  price?: number;
  old_price?: number;
  /**
   * Item status ('1' - deleted, '0' - not deleted).
   */
  deleted?: 0 | 1;
  /**
   * Cover photo ID.
   */
  main_photo_id?: number;
  /**
   * IDs of additional photos.
   */
  photo_ids?: string;
  /**
   * IDs of additional videos.
   */
  video_ids?: string;
  /**
   * Url for button in market item.
   */
  url?: string;
  /**
   * IDs of properties variants.
   */
  variant_ids?: string;
  /**
   * Is main in their group.
   */
  is_main_variant?: 0 | 1;
  dimension_width?: number;
  dimension_height?: number;
  dimension_length?: number;
  weight?: number;
  sku?: string;
  stock_amount?: number;
}

// market.edit_response
export type MarketEditResponse = 1;

/**
 * market.editAlbum
 *
 * Edits a collection of items
 */

export interface MarketEditAlbumParams {
  /**
   * ID of an collection owner community.
   */
  owner_id: number;
  /**
   * Collection ID.
   */
  album_id: number;
  /**
   * Collection title.
   */
  title: string;
  /**
   * Cover photo id
   */
  photo_id?: number;
  /**
   * Set as main ('1' - set, '0' - no).
   */
  main_album?: 0 | 1;
  /**
   * Set as hidden
   */
  is_hidden?: 0 | 1;
}

// market.editAlbum_response
export type MarketEditAlbumResponse = 1;

/**
 * market.editComment
 *
 * Chages item comment's text
 */

export interface MarketEditCommentParams {
  /**
   * ID of an item owner community.
   */
  owner_id: number;
  /**
   * Comment ID.
   */
  comment_id: number;
  /**
   * New comment text (required if 'attachments' are not specified), , 2048 symbols maximum.
   */
  message?: string;
  /**
   * Comma-separated list of objects attached to a comment. The field is submitted the following way: , "'<owner_id>_<media_id>,<owner_id>_<media_id>'", , '' - media attachment type: "'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document", , '<owner_id>' - media owner id, '<media_id>' - media attachment id, , For example: "photo100172_166443618,photo66748_265827614",
   */
  attachments?: string;
}

// market.editComment_response
export type MarketEditCommentResponse = 1;

/**
 * market.editOrder
 *
 * Edit order
 */

export interface MarketEditOrderParams {
  user_id: number;
  order_id: number;
  merchant_comment?: string;
  status?: number;
  track_number?: string;
  payment_status?: 'not_paid' | 'paid' | 'returned';
  delivery_price?: number;
  width?: number;
  length?: number;
  height?: number;
  weight?: number;
  comment_for_user?: string;
  receipt_link?: string;
}

// market.editOrder_response
export type MarketEditOrderResponse = 1;

/**
 * market.editProperty
 *
 * Adds property
 */

export interface MarketEditPropertyParams {
  /**
   * Group id.
   */
  group_id: number;
  /**
   * Property id.
   */
  property_id: number;
  /**
   * Property name
   */
  title: string;
}

// market.editProperty_response
export type MarketEditPropertyResponse = 1;

/**
 * market.editPropertyVariant
 *
 * Edit property variant name
 */

export interface MarketEditPropertyVariantParams {
  /**
   * Group id.
   */
  group_id: number;
  /**
   * Variant id.
   */
  variant_id: number;
  /**
   * Variant name.
   */
  title: string;
}

// market.editPropertyVariant_response
export type MarketEditPropertyVariantResponse = 1;

/**
 * market.filterCategories
 *
 * Returns a filter list of market categories.
 */

export interface MarketFilterCategoriesParams {
  /**
   * Category_id filter categories
   */
  category_id?: number;
  /**
   * Query filter categories
   */
  query?: string;
  /**
   * Number of results to return.
   */
  count?: number;
}

// market.filterCategories_response
export interface MarketFilterCategoriesResponse {
  items?: MarketMarketCategoryTree[];
}

/**
 * market.get
 *
 * Returns items list for a community.
 */

export interface MarketGetParams {
  /**
   * ID of an item owner community, "Note that community id in the 'owner_id' parameter should be negative number. For example 'owner_id'=-1 matches the [vk.com/apiclub|VK API] community "
   */
  owner_id: number;
  album_id?: number;
  /**
   * Number of items to return.
   */
  count?: number;
  /**
   * Offset needed to return a specific subset of results.
   */
  offset?: number;
  /**
   * '1' - method will return additional fields: 'likes, can_comment, car_repost, photos'. These parameters are not returned by default.
   */
  extended?: 0 | 1;
  /**
   * Items update date from (format: yyyy-mm-dd)
   */
  date_from?: string;
  /**
   * Items update date to (format: yyyy-mm-dd)
   */
  date_to?: string;
  /**
   * Add variants to response if exist
   */
  need_variants?: 0 | 1;
  /**
   * Add disabled items to response
   */
  with_disabled?: 0 | 1;
  fields?: string;
}

// market.get_response
export interface MarketGetResponse {
  /**
   * Total number
   */
  count?: number;
  items?: MarketMarketItem[];
  variants?: MarketMarketItem[];
}

// market.get_extendedResponse
export interface MarketGetExtendedResponse {
  /**
   * Total number
   */
  count?: number;
  items?: MarketMarketItemFull[];
  variants?: MarketMarketItemFull[];
}

/**
 * market.getAlbumById
 *
 * Returns items album's data
 */

export interface MarketGetAlbumByIdParams {
  /**
   * identifier of an album owner community, "Note that community id in the 'owner_id' parameter should be negative number. For example 'owner_id'=-1 matches the [vk.com/apiclub|VK API] community "
   */
  owner_id: number;
  /**
   * collections identifiers to obtain data from
   */
  album_ids: string;
}

// market.getAlbumById_response
export interface MarketGetAlbumByIdResponse {
  /**
   * Total number
   */
  count?: number;
  items?: MarketMarketAlbum[];
}

/**
 * market.getAlbums
 *
 * Returns community's market collections list.
 */

export interface MarketGetAlbumsParams {
  /**
   * ID of an items owner community.
   */
  owner_id: number;
  /**
   * Offset needed to return a specific subset of results.
   */
  offset?: number;
  /**
   * Number of items to return.
   */
  count?: number;
}

// market.getAlbums_response
export interface MarketGetAlbumsResponse {
  /**
   * Total number
   */
  count?: number;
  items?: MarketMarketAlbum[];
}

/**
 * market.getById
 *
 * Returns information about market items by their ids.
 */

export interface MarketGetByIdParams {
  /**
   * Comma-separated ids list: {user id}_{item id}. If an item belongs to a community -{community id} is used. " 'Videos' value example: , '-4363_136089719,13245770_137352259'"
   */
  item_ids: string;
  /**
   * '1' - to return additional fields: 'likes, can_comment, car_repost, photos'. By default: '0'.
   */
  extended?: 0 | 1;
}

// market.getById_response
export interface MarketGetByIdResponse {
  /**
   * Total number
   */
  count?: number;
  items?: MarketMarketItem[];
}

// market.getById_extendedResponse
export interface MarketGetByIdExtendedResponse {
  /**
   * Total number
   */
  count?: number;
  items?: MarketMarketItemFull[];
}

/**
 * market.getCategories
 *
 * Returns a list of market categories.
 */

export interface MarketGetCategoriesParams {
  /**
   * Group Id.
   */
  group_id?: number;
  album_id?: number;
}

// market.getCategories_response
export interface MarketGetCategoriesResponse {
  items?: MarketMarketCategoryTree[];
}

/**
 * market.getComments
 *
 * Returns comments list for an item.
 */

export interface MarketGetCommentsParams {
  /**
   * ID of an item owner community
   */
  owner_id: number;
  /**
   * Item ID.
   */
  item_id: number;
  /**
   * '1' - to return likes info.
   */
  need_likes?: 0 | 1;
  /**
   * ID of a comment to start a list from (details below).
   */
  start_comment_id?: number;
  offset?: number;
  /**
   * Number of results to return.
   */
  count?: number;
  /**
   * Sort order ('asc' - from old to new, 'desc' - from new to old)
   */
  sort?: 'asc' | 'desc';
  /**
   * '1' - comments will be returned as numbered objects, in addition lists of 'profiles' and 'groups' objects will be returned.
   */
  extended?: 0 | 1;
  /**
   * List of additional profile fields to return. See the [vk.com/dev/fields|details]
   *
   * objects.json#/definitions/users_fields
   */
  fields?: string;
}

// market.getComments_response
export interface MarketGetCommentsResponse {
  /**
   * Total number
   */
  count?: number;
  items?: WallWallComment[];
  /**
   * List of users, available only if extended=true exists in query params
   */
  profiles?: UsersUserFull[];
  /**
   * List of groups, available only if extended=true exists in query params
   */
  groups?: GroupsGroupFull[];
}

/**
 * market.getFavesForAttach
 */

export interface MarketGetFavesForAttachParams {
  /**
   * Group which represents content
   */
  current_group_id?: number;
  public_only?: 0 | 1;
  /**
   * Offset needed to return a specific subset of users.
   */
  offset?: number;
  /**
   * Number of users to return.
   */
  count?: number;
}

// market.getFavesForAttach_response
export interface MarketGetFavesForAttachResponse {
  market_items?: MarketMarketItem[];
  /**
   * Offset for using in next query
   */
  next_from?: number;
}

/**
 * market.getGroupOrders
 *
 * Get market orders
 */

export interface MarketGetGroupOrdersParams {
  /**
   * ID or groups domain
   */
  group_id?: number | string;
  offset?: number;
  count?: number;
}

// market.getGroupOrders_response
export interface MarketGetGroupOrdersResponse {
  /**
   * Total number
   */
  count?: number;
  items?: MarketOrder[];
}

/**
 * market.getOrderById
 *
 * Get order
 */

export interface MarketGetOrderByIdParams {
  user_id?: number;
  order_id: number;
  extended?: 0 | 1;
}

// market.getOrderById_response
export interface MarketGetOrderByIdResponse {
  order?: MarketOrder;
}

/**
 * market.getOrderItems
 *
 * Get market items in the order
 */

export interface MarketGetOrderItemsParams {
  user_id?: number;
  order_id: number;
  offset?: number;
  count?: number;
}

// market.getOrderItems_response
export interface MarketGetOrderItemsResponse {
  /**
   * Total number
   */
  count?: number;
  items?: MarketOrderItem[];
}

/**
 * market.getOrders
 */

export interface MarketGetOrdersParams {
  offset?: number;
  count?: number;
  extended?: 0 | 1;
  /**
   * Orders status updated date from (format: yyyy-mm-dd)
   */
  date_from?: string;
  /**
   * Orders status updated date to (format: yyyy-mm-dd)
   */
  date_to?: string;
}

// market.getOrders_response
export interface MarketGetOrdersResponse {
  /**
   * Total number
   */
  count?: number;
  items?: MarketOrder[];
}

// market.getOrders_extendedResponse
export interface MarketGetOrdersExtendedResponse {
  /**
   * Total number
   */
  count?: number;
  items?: MarketOrder[];
  groups?: GroupsGroupFull[];
}

/**
 * market.getProductPhotoUploadServer
 *
 * Returns the server address for market photo upload.
 */

export interface MarketGetProductPhotoUploadServerParams {
  /**
   * Community ID.
   */
  group_id: number;
  bulk?: 0 | 1;
}

// market.getProductPhotoUploadServer_response
export type MarketGetProductPhotoUploadServerResponse = BaseUploadServer;

/**
 * market.getProperties
 *
 * Get properties
 */

export interface MarketGetPropertiesParams {
  group_id: number;
}

// market.getProperties_response
export interface MarketGetPropertiesResponse {
  items?: MarketProperty[];
  count?: number;
}

/**
 * market.groupItems
 */

export interface MarketGroupItemsParams {
  /**
   * Group id.
   */
  group_id: number;
  /**
   * Item ids.
   */
  item_ids: string;
  /**
   * Items group id.
   */
  item_group_id?: number;
}

// market.groupItems_response
export interface MarketGroupItemsResponse {
  item_group_id?: number;
}

/**
 * market.removeFromAlbum
 *
 * Removes an item from one or multiple collections.
 */

export interface MarketRemoveFromAlbumParams {
  /**
   * ID of an item owner community.
   */
  owner_id: number;
  /**
   * Item ID.
   */
  item_id: number;
  /**
   * Collections IDs to remove item from.
   */
  album_ids: string;
}

// market.removeFromAlbum_response
export type MarketRemoveFromAlbumResponse = 1;

/**
 * market.reorderAlbums
 *
 * Reorders the collections list.
 */

export interface MarketReorderAlbumsParams {
  /**
   * ID of an item owner community.
   */
  owner_id: number;
  /**
   * Collection ID.
   */
  album_id: number;
  /**
   * ID of a collection to place current collection before it.
   */
  before?: number;
  /**
   * ID of a collection to place current collection after it.
   */
  after?: number;
}

// market.reorderAlbums_response
export type MarketReorderAlbumsResponse = 1;

/**
 * market.reorderItems
 *
 * Changes item place in a collection.
 */

export interface MarketReorderItemsParams {
  /**
   * ID of an item owner community.
   */
  owner_id: number;
  /**
   * ID of a collection to reorder items in. Set 0 to reorder full items list.
   */
  album_id?: number;
  /**
   * Item ID.
   */
  item_id: number;
  /**
   * ID of an item to place current item before it.
   */
  before?: number;
  /**
   * ID of an item to place current item after it.
   */
  after?: number;
}

// market.reorderItems_response
export type MarketReorderItemsResponse = 1;

/**
 * market.report
 *
 * Sends a complaint to the item.
 */

export interface MarketReportParams {
  /**
   * ID of an item owner community.
   */
  owner_id: number;
  /**
   * Item ID.
   */
  item_id: number;
  /**
   * Complaint reason. Possible values: *'0' - spam,, *'1' - child porn,, *'2' - extremism,, *'3' - violence,, *'4' - drugs propaganda,, *'5' - adult materials,, *'6' - insult.
   */
  reason?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

// market.report_response
export type MarketReportResponse = 1;

/**
 * market.reportComment
 *
 * Sends a complaint to the item's comment.
 */

export interface MarketReportCommentParams {
  /**
   * ID of an item owner community.
   */
  owner_id: number;
  /**
   * Comment ID.
   */
  comment_id: number;
  /**
   * Complaint reason. Possible values: *'0' - spam,, *'1' - child porn,, *'2' - extremism,, *'3' - violence,, *'4' - drugs propaganda,, *'5' - adult materials,, *'6' - insult.
   */
  reason: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

// market.reportComment_response
export type MarketReportCommentResponse = 1;

/**
 * market.restore
 *
 * Restores recently deleted item
 */

export interface MarketRestoreParams {
  /**
   * ID of an item owner community.
   */
  owner_id: number;
  /**
   * Deleted item ID.
   */
  item_id: number;
}

// market.restore_response
export type MarketRestoreResponse = 1;

/**
 * market.restoreComment
 *
 * Restores a recently deleted comment
 */

export interface MarketRestoreCommentParams {
  /**
   * identifier of an item owner community, "Note that community id in the 'owner_id' parameter should be negative number. For example 'owner_id'=-1 matches the [vk.com/apiclub|VK API] community "
   */
  owner_id: number;
  /**
   * deleted comment id
   */
  comment_id: number;
}

// market.restoreComment_response
/**
 * Returns 1 if request has been processed successfully (0 if the comment is not found)
 */
export type MarketRestoreCommentResponse = 0 | 1;

/**
 * market.saveProductPhoto
 *
 * Save market photo after upload.
 */

export interface MarketSaveProductPhotoParams {
  /**
   * Upload response
   */
  upload_response: string;
}

// market.saveProductPhoto_response
export interface MarketSaveProductPhotoResponse {
  /**
   * Photo ID
   */
  photo_id?: number;
  photo?: PhotosPhoto;
}

/**
 * market.saveProductPhotoBulk
 *
 * Bulk save market photo after upload.
 */

export interface MarketSaveProductPhotoBulkParams {
  /**
   * Upload response
   */
  upload_response: string;
}

// market.saveProductPhotoBulk_response
export type MarketSaveProductPhotoBulkResponse = MarketUploadPhotoData[];

/**
 * market.search
 *
 * Searches market items in a community's catalog
 */

export interface MarketSearchParams {
  /**
   * ID of an items owner community.
   */
  owner_id: number;
  album_id?: number;
  /**
   * Search query, for example "pink slippers".
   */
  q?: string;
  /**
   * Minimum item price value.
   */
  price_from?: number;
  /**
   * Maximum item price value.
   */
  price_to?: number;
  sort?: 0 | 1 | 2 | 3;
  /**
   * '0' - do not use reverse order, '1' - use reverse order
   */
  rev?: 0 | 1;
  /**
   * Offset needed to return a specific subset of results.
   */
  offset?: number;
  /**
   * Number of items to return.
   */
  count?: number;
  /**
   * '1' - to return additional fields: 'likes, can_comment, car_repost, photos'. By default: '0'.
   */
  extended?: 0 | 1;
  status?: string;
  /**
   * Add variants to response if exist
   */
  need_variants?: 0 | 1;
}

// market.search_response
export interface MarketSearchResponse {
  /**
   * Total number
   */
  count?: number;
  view_type?: MarketServicesViewType;
  items?: MarketMarketItem[];
  variants?: MarketMarketItem[];
  groups?: GroupsGroupFull[];
  filters?: MarketGlobalSearchFilters;
}

// market.search_extendedResponse
export interface MarketSearchExtendedResponse {
  /**
   * Total number
   */
  count?: number;
  view_type?: MarketServicesViewType;
  items?: MarketMarketItemFull[];
  variants?: MarketMarketItemFull[];
}

/**
 * market.searchItems
 */

export interface MarketSearchItemsParams {
  q: string;
  offset?: number;
  count?: number;
  category_id?: number;
  price_from?: number;
  price_to?: number;
  sort_by?: 1 | 2 | 3;
  sort_direction?: 0 | 1;
  country?: number;
  city?: number;
}

// market.searchItems_response
export interface MarketSearchItemsResponse {
  /**
   * Total number
   */
  count?: number;
  view_type?: MarketServicesViewType;
  items?: MarketMarketItem[];
  variants?: MarketMarketItem[];
  groups?: GroupsGroupFull[];
  filters?: MarketGlobalSearchFilters;
}

/**
 * market.searchItemsBasic
 */

export interface MarketSearchItemsBasicParams {
  q: string;
  offset?: number;
  count?: number;
  category_id?: number;
  price_from?: number;
  price_to?: number;
  sort_by?: 1 | 2 | 3;
  sort_direction?: 0 | 1;
  country?: number;
  city?: number;
  only_my_groups?: 0 | 1;
}

// market.searchItemsBasic_response
export interface MarketSearchItemsBasicResponse {
  /**
   * Current chunk size
   */
  count?: number;
  /**
   * Total size
   */
  total?: number;
  /**
   * Next chunk present
   */
  has_more?: boolean;
  items?: MarketMarketItemBasicWithGroup[];
}

/**
 * market.ungroupItems
 */

export interface MarketUngroupItemsParams {
  /**
   * Group id.
   */
  group_id: number;
  /**
   * Items group id.
   */
  item_group_id: number;
}

// market.ungroupItems_response
export type MarketUngroupItemsResponse = 1;
