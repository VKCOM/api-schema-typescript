/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseImage } from '../objects/base/BaseImage';
import { BaseUploadServer } from '../objects/base/BaseUploadServer';
import { GroupsGroupFull } from '../objects/groups/GroupsGroupFull';
import { PhotosPhoto } from '../objects/photos/PhotosPhoto';
import { PhotosPhotoAlbumFull } from '../objects/photos/PhotosPhotoAlbumFull';
import { PhotosPhotoFull } from '../objects/photos/PhotosPhotoFull';
import { PhotosPhotoFullXtrRealOffset } from '../objects/photos/PhotosPhotoFullXtrRealOffset';
import { PhotosPhotoTag } from '../objects/photos/PhotosPhotoTag';
import { PhotosPhotoUpload } from '../objects/photos/PhotosPhotoUpload';
import { PhotosPhotoXtrRealOffset } from '../objects/photos/PhotosPhotoXtrRealOffset';
import { PhotosPhotoXtrTagInfo } from '../objects/photos/PhotosPhotoXtrTagInfo';
import { UsersUserFull } from '../objects/users/UsersUserFull';
import { WallWallComment } from '../objects/wall/WallWallComment';

/**
 * photos.confirmTag
 *
 * Confirms a tag on a photo.
 */

export interface PhotosConfirmTagParams {
  /**
   * ID of the user or community that owns the photo.
   */
  owner_id?: number;
  /**
   * Photo ID.
   */
  photo_id: string;
  /**
   * Tag ID.
   */
  tag_id: number;
}

// photos.confirmTag_response
export type PhotosConfirmTagResponse = 1;

/**
 * photos.copy
 *
 * Allows to copy a photo to the "Saved photos" album
 */

export interface PhotosCopyParams {
  /**
   * photo's owner ID
   */
  owner_id: number;
  /**
   * photo ID
   */
  photo_id: number;
  /**
   * for private photos
   */
  access_key?: string;
}

// photos.copy_response
export type PhotosCopyResponse = number;

/**
 * photos.createAlbum
 *
 * Creates an empty photo album.
 */

export interface PhotosCreateAlbumParams {
  /**
   * Album title.
   */
  title: string;
  /**
   * ID of the community in which the album will be created.
   */
  group_id?: number;
  /**
   * Album description.
   */
  description?: string;
  privacy_view?: string;
  privacy_comment?: string;
  upload_by_admins_only?: 0 | 1;
  comments_disabled?: 0 | 1;
}

// photos.createAlbum_response
export type PhotosCreateAlbumResponse = PhotosPhotoAlbumFull;

/**
 * photos.createComment
 *
 * Adds a new comment on the photo.
 */

export interface PhotosCreateCommentParams {
  /**
   * ID of the user or community that owns the photo.
   */
  owner_id?: number;
  /**
   * Photo ID.
   */
  photo_id: number;
  /**
   * Comment text.
   */
  message?: string;
  /**
   * (Required if 'message' is not set.) List of objects attached to the post, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — Media attachment owner ID. '<media_id>' — Media attachment ID. Example: "photo100172_166443618,photo66748_265827614"
   */
  attachments?: string;
  /**
   * '1' — to post a comment from the community
   */
  from_group?: 0 | 1;
  reply_to_comment?: number;
  sticker_id?: number;
  access_key?: string;
  guid?: string;
}

// photos.createComment_response
export type PhotosCreateCommentResponse = number;

/**
 * photos.delete
 *
 * Deletes a photo.
 */

export interface PhotosDeleteParams {
  /**
   * ID of the user or community that owns the photo.
   */
  owner_id?: number;
  /**
   * Photo ID.
   */
  photo_id: number;
}

// photos.delete_response
export type PhotosDeleteResponse = 1;

/**
 * photos.deleteAlbum
 *
 * Deletes a photo album belonging to the current user.
 */

export interface PhotosDeleteAlbumParams {
  /**
   * Album ID.
   */
  album_id: number;
  /**
   * ID of the community that owns the album.
   */
  group_id?: number;
}

// photos.deleteAlbum_response
export type PhotosDeleteAlbumResponse = 1;

/**
 * photos.deleteComment
 *
 * Deletes a comment on the photo.
 */

export interface PhotosDeleteCommentParams {
  /**
   * ID of the user or community that owns the photo.
   */
  owner_id?: number;
  /**
   * Comment ID.
   */
  comment_id: number;
}

// photos.deleteComment_response
export type PhotosDeleteCommentResponse = 0 | 1;

/**
 * photos.edit
 *
 * Edits the caption of a photo.
 */

export interface PhotosEditParams {
  /**
   * ID of the user or community that owns the photo.
   */
  owner_id?: number;
  /**
   * Photo ID.
   */
  photo_id: number;
  /**
   * New caption for the photo. If this parameter is not set, it is considered to be equal to an empty string.
   */
  caption?: string;
  latitude?: number;
  longitude?: number;
  place_str?: string;
  foursquare_id?: string;
  delete_place?: 0 | 1;
}

// photos.edit_response
export type PhotosEditResponse = 1;

/**
 * photos.editAlbum
 *
 * Edits information about a photo album.
 */

export interface PhotosEditAlbumParams {
  /**
   * ID of the photo album to be edited.
   */
  album_id: number;
  /**
   * New album title.
   */
  title?: string;
  /**
   * New album description.
   */
  description?: string;
  /**
   * ID of the user or community that owns the album.
   */
  owner_id?: number;
  privacy_view?: string;
  privacy_comment?: string;
  upload_by_admins_only?: 0 | 1;
  comments_disabled?: 0 | 1;
}

// photos.editAlbum_response
export type PhotosEditAlbumResponse = 1;

/**
 * photos.editComment
 *
 * Edits a comment on a photo.
 */

export interface PhotosEditCommentParams {
  /**
   * ID of the user or community that owns the photo.
   */
  owner_id?: number;
  /**
   * Comment ID.
   */
  comment_id: number;
  /**
   * New text of the comment.
   */
  message?: string;
  /**
   * (Required if 'message' is not set.) List of objects attached to the post, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — Media attachment owner ID. '<media_id>' — Media attachment ID. Example: "photo100172_166443618,photo66748_265827614"
   */
  attachments?: string;
}

// photos.editComment_response
export type PhotosEditCommentResponse = 1;

/**
 * photos.get
 *
 * Returns a list of a user's or community's photos.
 */

export interface PhotosGetParams {
  /**
   * ID of the user or community that owns the photos. Use a negative value to designate a community ID.
   */
  owner_id?: number;
  /**
   * Photo album ID. To return information about photos from service albums, use the following string values: 'profile, wall, saved'.
   */
  album_id?: string;
  /**
   * Photo IDs.
   */
  photo_ids?: string;
  /**
   * Sort order: '1' — reverse chronological, '0' — chronological
   */
  rev?: 0 | 1;
  /**
   * '1' — to return additional 'likes', 'comments', and 'tags' fields, '0' — (default)
   */
  extended?: 0 | 1;
  /**
   * Type of feed obtained in 'feed' field of the method.
   */
  feed_type?: string;
  /**
   * unixtime, that can be obtained with [vk.com/dev/newsfeed.get|newsfeed.get] method in date field to get all photos uploaded by the user on a specific day, or photos the user has been tagged on. Also, 'uid' parameter of the user the event happened with shall be specified.
   */
  feed?: number;
  /**
   * '1' — to return photo sizes in a [vk.com/dev/photo_sizes|special format]
   */
  photo_sizes?: 0 | 1;
  offset?: number;
  count?: number;
}

// photos.get_response
export interface PhotosGetResponse {
  /**
   * Total number
   */
  count: number;
  items: PhotosPhoto[];
}

// photos.get_extendedResponse
export interface PhotosGetExtendedResponse {
  /**
   * Total number
   */
  count: number;
  items: PhotosPhotoFull[];
}

/**
 * photos.getAlbums
 *
 * Returns a list of a user's or community's photo albums.
 */

export interface PhotosGetAlbumsParams {
  /**
   * ID of the user or community that owns the albums.
   */
  owner_id?: number;
  /**
   * Album IDs.
   */
  album_ids?: string;
  /**
   * Offset needed to return a specific subset of albums.
   */
  offset?: number;
  /**
   * Number of albums to return.
   */
  count?: number;
  /**
   * '1' — to return system albums with negative IDs
   */
  need_system?: 0 | 1;
  /**
   * '1' — to return an additional 'thumb_src' field, '0' — (default)
   */
  need_covers?: 0 | 1;
  /**
   * '1' — to return photo sizes in a
   */
  photo_sizes?: 0 | 1;
}

// photos.getAlbums_response
export interface PhotosGetAlbumsResponse {
  /**
   * Total number
   */
  count: number;
  items: PhotosPhotoAlbumFull[];
}

/**
 * photos.getAlbumsCount
 *
 * Returns the number of photo albums belonging to a user or community.
 */

export interface PhotosGetAlbumsCountParams {
  /**
   * User ID.
   */
  user_id?: number;
  /**
   * Community ID.
   */
  group_id?: number;
}

// photos.getAlbumsCount_response
export type PhotosGetAlbumsCountResponse = number;

/**
 * photos.getAll
 *
 * Returns a list of photos belonging to a user or community, in reverse chronological order.
 */

export interface PhotosGetAllParams {
  /**
   * ID of a user or community that owns the photos. Use a negative value to designate a community ID.
   */
  owner_id?: number;
  /**
   * '1' — to return detailed information about photos
   */
  extended?: 0 | 1;
  /**
   * Offset needed to return a specific subset of photos. By default, '0'.
   */
  offset?: number;
  /**
   * Number of photos to return.
   */
  count?: number;
  /**
   * '1' - to return image sizes in [vk.com/dev/photo_sizes|special format].
   */
  photo_sizes?: 0 | 1;
  /**
   * '1' - to return photos only from standard albums, '0' - to return all photos including those in service albums, e.g., 'My wall photos' (default)
   */
  no_service_albums?: 0 | 1;
  /**
   * '1' - to show information about photos being hidden from the block above the wall.
   */
  need_hidden?: 0 | 1;
  /**
   * '1' - not to return photos being hidden from the block above the wall. Works only with owner_id>0, no_service_albums is ignored.
   */
  skip_hidden?: 0 | 1;
}

// photos.getAll_response
export interface PhotosGetAllResponse {
  /**
   * Total number
   */
  count?: number;
  items?: PhotosPhotoXtrRealOffset[];
  /**
   * Information whether next page is presented
   */
  more?: 0 | 1;
}

// photos.getAll_extendedResponse
export interface PhotosGetAllExtendedResponse {
  /**
   * Total number
   */
  count?: number;
  items?: PhotosPhotoFullXtrRealOffset[];
  /**
   * Information whether next page is presented
   */
  more?: 0 | 1;
}

/**
 * photos.getAllComments
 *
 * Returns a list of comments on a specific photo album or all albums of the user sorted in reverse chronological order.
 */

export interface PhotosGetAllCommentsParams {
  /**
   * ID of the user or community that owns the album(s).
   */
  owner_id?: number;
  /**
   * Album ID. If the parameter is not set, comments on all of the user's albums will be returned.
   */
  album_id?: number;
  /**
   * '1' — to return an additional 'likes' field, '0' — (default)
   */
  need_likes?: 0 | 1;
  /**
   * Offset needed to return a specific subset of comments. By default, '0'.
   */
  offset?: number;
  /**
   * Number of comments to return. By default, '20'. Maximum value, '100'.
   */
  count?: number;
}

// photos.getAllComments_response
export interface PhotosGetAllCommentsResponse {
  /**
   * Total number
   */
  count?: number;
  items?: WallWallComment[];
}

/**
 * photos.getById
 *
 * Returns information about photos by their IDs.
 */

export interface PhotosGetByIdParams {
  /**
   * IDs separated with a comma, that are IDs of users who posted photos and IDs of photos themselves with an underscore character between such IDs. To get information about a photo in the group album, you shall specify group ID instead of user ID. Example: "1_129207899,6492_135055734, , -20629724_271945303"
   */
  photos: string;
  /**
   * '1' — to return additional fields, '0' — (default)
   */
  extended?: 0 | 1;
  /**
   * '1' — to return photo sizes in a
   */
  photo_sizes?: 0 | 1;
}

// photos.getById_response
export type PhotosGetByIdResponse = PhotosPhoto[];

// photos.getById_extendedResponse
export type PhotosGetByIdExtendedResponse = PhotosPhotoFull[];

/**
 * photos.getChatUploadServer
 *
 * Returns an upload link for chat cover pictures.
 */

export interface PhotosGetChatUploadServerParams {
  /**
   * ID of the chat for which you want to upload a cover photo.
   */
  chat_id: number;
  crop_x?: number;
  crop_y?: number;
  /**
   * Width (in pixels) of the photo after cropping.
   */
  crop_width?: number;
}

// photos.getChatUploadServer_response
export type PhotosGetChatUploadServerResponse = BaseUploadServer;

/**
 * photos.getComments
 *
 * Returns a list of comments on a photo.
 */

export interface PhotosGetCommentsParams {
  /**
   * ID of the user or community that owns the photo.
   */
  owner_id?: number;
  /**
   * Photo ID.
   */
  photo_id: number;
  /**
   * '1' — to return an additional 'likes' field, '0' — (default)
   */
  need_likes?: 0 | 1;
  start_comment_id?: number;
  /**
   * Offset needed to return a specific subset of comments. By default, '0'.
   */
  offset?: number;
  /**
   * Number of comments to return.
   */
  count?: number;
  /**
   * Sort order: 'asc' — old first, 'desc' — new first
   */
  sort?: 'asc' | 'desc';
  access_key?: string;
  extended?: 0 | 1;
  /**
   * objects.json#/definitions/users_fields
   */
  fields?: string;
}

// photos.getComments_response
export interface PhotosGetCommentsResponse {
  /**
   * Total number
   */
  count?: number;
  /**
   * Real offset of the comments
   */
  real_offset?: number;
  items?: WallWallComment[];
}

// photos.getComments_extendedResponse
export interface PhotosGetCommentsExtendedResponse {
  /**
   * Total number
   */
  count: number;
  /**
   * Real offset of the comments
   */
  real_offset?: number;
  items: WallWallComment[];
  profiles: UsersUserFull[];
  groups: GroupsGroupFull[];
}

/**
 * photos.getMarketAlbumUploadServer
 *
 * Returns the server address for market album photo upload.
 */

export interface PhotosGetMarketAlbumUploadServerParams {
  /**
   * Community ID.
   */
  group_id: number;
}

// photos.getMarketAlbumUploadServer_response
export type PhotosGetMarketAlbumUploadServerResponse = BaseUploadServer;

/**
 * photos.getMarketUploadServer
 *
 * Returns the server address for market photo upload.
 */

export interface PhotosGetMarketUploadServerParams {
  /**
   * Community ID.
   */
  group_id: number;
  /**
   * '1' if you want to upload the main item photo.
   */
  main_photo?: 0 | 1;
  /**
   * X coordinate of the crop left upper corner.
   */
  crop_x?: number;
  /**
   * Y coordinate of the crop left upper corner.
   */
  crop_y?: number;
  /**
   * Width of the cropped photo in px.
   */
  crop_width?: number;
}

// photos.getMarketUploadServer_response
export type PhotosGetMarketUploadServerResponse = BaseUploadServer;

/**
 * photos.getMessagesUploadServer
 *
 * Returns the server address for photo upload in a private message for a user.
 */

export interface PhotosGetMessagesUploadServerParams {
  /**
   * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'Chat ID', e.g. '2000000001'. For community: '- Community ID', e.g. '-12345'. "
   */
  peer_id?: number;
}

// photos.getMessagesUploadServer_response
export type PhotosGetMessagesUploadServerResponse = PhotosPhotoUpload;

/**
 * photos.getNewTags
 *
 * Returns a list of photos with tags that have not been viewed.
 */

export interface PhotosGetNewTagsParams {
  /**
   * Offset needed to return a specific subset of photos.
   */
  offset?: number;
  /**
   * Number of photos to return.
   */
  count?: number;
}

// photos.getNewTags_response
export interface PhotosGetNewTagsResponse {
  /**
   * Total number
   */
  count: number;
  items: PhotosPhotoXtrTagInfo[];
}

/**
 * photos.getOwnerCoverPhotoUploadServer
 *
 * Returns the server address for owner cover upload.
 */

export interface PhotosGetOwnerCoverPhotoUploadServerParams {
  /**
   * ID of community that owns the album (if the photo will be uploaded to a community album).
   */
  group_id: number;
  /**
   * X coordinate of the left-upper corner
   */
  crop_x?: number;
  /**
   * Y coordinate of the left-upper corner
   */
  crop_y?: number;
  /**
   * X coordinate of the right-bottom corner
   */
  crop_x2?: number;
  /**
   * Y coordinate of the right-bottom corner
   */
  crop_y2?: number;
}

// photos.getOwnerCoverPhotoUploadServer_response
export type PhotosGetOwnerCoverPhotoUploadServerResponse = BaseUploadServer;

/**
 * photos.getOwnerPhotoUploadServer
 *
 * Returns an upload server address for a profile or community photo.
 */

export interface PhotosGetOwnerPhotoUploadServerParams {
  /**
   * identifier of a community or current user. "Note that community id must be negative. 'owner_id=1' - user, 'owner_id=-1' - community, "
   */
  owner_id?: number;
}

// photos.getOwnerPhotoUploadServer_response
export type PhotosGetOwnerPhotoUploadServerResponse = BaseUploadServer;

/**
 * photos.getTags
 *
 * Returns a list of tags on a photo.
 */

export interface PhotosGetTagsParams {
  /**
   * ID of the user or community that owns the photo.
   */
  owner_id?: number;
  /**
   * Photo ID.
   */
  photo_id: number;
  access_key?: string;
}

// photos.getTags_response
export type PhotosGetTagsResponse = PhotosPhotoTag[];

/**
 * photos.getUploadServer
 *
 * Returns the server address for photo upload.
 */

export interface PhotosGetUploadServerParams {
  /**
   * ID of community that owns the album (if the photo will be uploaded to a community album).
   */
  group_id?: number;
  album_id?: number;
}

// photos.getUploadServer_response
export type PhotosGetUploadServerResponse = PhotosPhotoUpload;

/**
 * photos.getUserPhotos
 *
 * Returns a list of photos in which a user is tagged.
 */

export interface PhotosGetUserPhotosParams {
  /**
   * User ID.
   */
  user_id?: number;
  /**
   * Offset needed to return a specific subset of photos. By default, '0'.
   */
  offset?: number;
  /**
   * Number of photos to return. Maximum value is 1000.
   */
  count?: number;
  /**
   * '1' — to return an additional 'likes' field, '0' — (default)
   */
  extended?: 0 | 1;
  /**
   * Sort order: '1' — by date the tag was added in ascending order, '0' — by date the tag was added in descending order
   */
  sort?: string;
}

// photos.getUserPhotos_response
export interface PhotosGetUserPhotosResponse {
  /**
   * Total number
   */
  count: number;
  items: PhotosPhoto[];
}

// photos.getUserPhotos_extendedResponse
export interface PhotosGetUserPhotosExtendedResponse {
  /**
   * Total number
   */
  count: number;
  items: PhotosPhotoFull[];
}

/**
 * photos.getWallUploadServer
 *
 * Returns the server address for photo upload onto a user's wall.
 */

export interface PhotosGetWallUploadServerParams {
  /**
   * ID of community to whose wall the photo will be uploaded.
   */
  group_id?: number;
}

// photos.getWallUploadServer_response
export type PhotosGetWallUploadServerResponse = PhotosPhotoUpload;

/**
 * photos.makeCover
 *
 * Makes a photo into an album cover.
 */

export interface PhotosMakeCoverParams {
  /**
   * ID of the user or community that owns the photo.
   */
  owner_id?: number;
  /**
   * Photo ID.
   */
  photo_id: number;
  /**
   * Album ID.
   */
  album_id?: number;
}

// photos.makeCover_response
export type PhotosMakeCoverResponse = 1;

/**
 * photos.move
 *
 * Moves a photo from one album to another.
 */

export interface PhotosMoveParams {
  /**
   * ID of the user or community that owns the photo.
   */
  owner_id?: number;
  /**
   * ID of the album to which the photo will be moved.
   */
  target_album_id: number;
  /**
   * Photo ID.
   */
  photo_id: number;
}

// photos.move_response
export type PhotosMoveResponse = 1;

/**
 * photos.putTag
 *
 * Adds a tag on the photo.
 */

export interface PhotosPutTagParams {
  /**
   * ID of the user or community that owns the photo.
   */
  owner_id?: number;
  /**
   * Photo ID.
   */
  photo_id: number;
  /**
   * ID of the user to be tagged.
   */
  user_id: number;
  /**
   * Upper left-corner coordinate of the tagged area (as a percentage of the photo's width).
   */
  x?: number;
  /**
   * Upper left-corner coordinate of the tagged area (as a percentage of the photo's height).
   */
  y?: number;
  /**
   * Lower right-corner coordinate of the tagged area (as a percentage of the photo's width).
   */
  x2?: number;
  /**
   * Lower right-corner coordinate of the tagged area (as a percentage of the photo's height).
   */
  y2?: number;
}

// photos.putTag_response
export type PhotosPutTagResponse = number;

/**
 * photos.removeTag
 *
 * Removes a tag from a photo.
 */

export interface PhotosRemoveTagParams {
  /**
   * ID of the user or community that owns the photo.
   */
  owner_id?: number;
  /**
   * Photo ID.
   */
  photo_id: number;
  /**
   * Tag ID.
   */
  tag_id: number;
}

// photos.removeTag_response
export type PhotosRemoveTagResponse = 1;

/**
 * photos.reorderAlbums
 *
 * Reorders the album in the list of user albums.
 */

export interface PhotosReorderAlbumsParams {
  /**
   * ID of the user or community that owns the album.
   */
  owner_id?: number;
  /**
   * Album ID.
   */
  album_id: number;
  /**
   * ID of the album before which the album in question shall be placed.
   */
  before?: number;
  /**
   * ID of the album after which the album in question shall be placed.
   */
  after?: number;
}

// photos.reorderAlbums_response
export type PhotosReorderAlbumsResponse = 1;

/**
 * photos.reorderPhotos
 *
 * Reorders the photo in the list of photos of the user album.
 */

export interface PhotosReorderPhotosParams {
  /**
   * ID of the user or community that owns the photo.
   */
  owner_id?: number;
  /**
   * Photo ID.
   */
  photo_id: number;
  /**
   * ID of the photo before which the photo in question shall be placed.
   */
  before?: number;
  /**
   * ID of the photo after which the photo in question shall be placed.
   */
  after?: number;
}

// photos.reorderPhotos_response
export type PhotosReorderPhotosResponse = 1;

/**
 * photos.report
 *
 * Reports (submits a complaint about) a photo.
 */

export interface PhotosReportParams {
  /**
   * ID of the user or community that owns the photo.
   */
  owner_id: number;
  /**
   * Photo ID.
   */
  photo_id: number;
  /**
   * Reason for the complaint: '0' - spam, '1' - child pornography, '2' - extremism, '3' - violence, '4' - drug propaganda, '5' - adult material, '6' - insult, abuse
   */
  reason?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

// photos.report_response
export type PhotosReportResponse = 1;

/**
 * photos.reportComment
 *
 * Reports (submits a complaint about) a comment on a photo.
 */

export interface PhotosReportCommentParams {
  /**
   * ID of the user or community that owns the photo.
   */
  owner_id: number;
  /**
   * ID of the comment being reported.
   */
  comment_id: number;
  /**
   * Reason for the complaint: '0' - spam, '1' - child pornography, '2' - extremism, '3' - violence, '4' - drug propaganda, '5' - adult material, '6' - insult, abuse
   */
  reason?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

// photos.reportComment_response
export type PhotosReportCommentResponse = 1;

/**
 * photos.restore
 *
 * Restores a deleted photo.
 */

export interface PhotosRestoreParams {
  /**
   * ID of the user or community that owns the photo.
   */
  owner_id?: number;
  /**
   * Photo ID.
   */
  photo_id: number;
}

// photos.restore_response
export type PhotosRestoreResponse = 1;

/**
 * photos.restoreComment
 *
 * Restores a deleted comment on a photo.
 */

export interface PhotosRestoreCommentParams {
  /**
   * ID of the user or community that owns the photo.
   */
  owner_id?: number;
  /**
   * ID of the deleted comment.
   */
  comment_id: number;
}

// photos.restoreComment_response
export type PhotosRestoreCommentResponse = 0 | 1;

/**
 * photos.save
 *
 * Saves photos after successful uploading.
 */

export interface PhotosSaveParams {
  /**
   * ID of the album to save photos to.
   */
  album_id?: number;
  /**
   * ID of the community to save photos to.
   */
  group_id?: number;
  /**
   * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
   */
  server?: number;
  /**
   * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
   */
  photos_list?: string;
  /**
   * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
   */
  hash?: string;
  /**
   * Geographical latitude, in degrees (from '-90' to '90').
   */
  latitude?: number;
  /**
   * Geographical longitude, in degrees (from '-180' to '180').
   */
  longitude?: number;
  /**
   * Text describing the photo. 2048 digits max.
   */
  caption?: string;
}

// photos.save_response
export type PhotosSaveResponse = PhotosPhoto[];

/**
 * photos.saveMarketAlbumPhoto
 *
 * Saves market album photos after successful uploading.
 */

export interface PhotosSaveMarketAlbumPhotoParams {
  /**
   * Community ID.
   */
  group_id: number;
  /**
   * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
   */
  photo: string;
  /**
   * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
   */
  server: number;
  /**
   * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
   */
  hash: string;
}

// photos.saveMarketAlbumPhoto_response
export type PhotosSaveMarketAlbumPhotoResponse = PhotosPhoto[];

/**
 * photos.saveMarketPhoto
 *
 * Saves market photos after successful uploading.
 */

export interface PhotosSaveMarketPhotoParams {
  /**
   * Community ID.
   */
  group_id?: number;
  /**
   * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
   */
  photo: string;
  /**
   * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
   */
  server: number;
  /**
   * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
   */
  hash: string;
  /**
   * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
   */
  crop_data?: string;
  /**
   * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
   */
  crop_hash?: string;
}

// photos.saveMarketPhoto_response
export type PhotosSaveMarketPhotoResponse = PhotosPhoto[];

/**
 * photos.saveMessagesPhoto
 *
 * Saves a photo after being successfully uploaded. URL obtained with [vk.com/dev/photos.getMessagesUploadServer|photos.getMessagesUploadServer] method.
 */

export interface PhotosSaveMessagesPhotoParams {
  /**
   * Parameter returned when the photo is [vk.com/dev/upload_files|uploaded to the server].
   */
  photo: string;
  server?: number;
  hash?: string;
}

// photos.saveMessagesPhoto_response
export type PhotosSaveMessagesPhotoResponse = PhotosPhoto[];

/**
 * photos.saveOwnerCoverPhoto
 *
 * Saves cover photo after successful uploading.
 */

export interface PhotosSaveOwnerCoverPhotoParams {
  /**
   * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
   */
  hash: string;
  /**
   * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
   */
  photo: string;
}

// photos.saveOwnerCoverPhoto_response
export interface PhotosSaveOwnerCoverPhotoResponse {
  images?: BaseImage[];
}

/**
 * photos.saveOwnerPhoto
 *
 * Saves a profile or community photo. Upload URL can be got with the [vk.com/dev/photos.getOwnerPhotoUploadServer|photos.getOwnerPhotoUploadServer] method.
 */

export interface PhotosSaveOwnerPhotoParams {
  /**
   * parameter returned after [vk.com/dev/upload_files|photo upload].
   */
  server?: string;
  /**
   * parameter returned after [vk.com/dev/upload_files|photo upload].
   */
  hash?: string;
  /**
   * parameter returned after [vk.com/dev/upload_files|photo upload].
   */
  photo?: string;
}

// photos.saveOwnerPhoto_response
export interface PhotosSaveOwnerPhotoResponse {
  /**
   * Photo hash
   */
  photo_hash: string;
  /**
   * Uploaded image url
   */
  photo_src: string;
  /**
   * Uploaded image url
   */
  photo_src_big?: string;
  /**
   * Uploaded image url
   */
  photo_src_small?: string;
  /**
   * Returns 1 if profile photo is saved
   */
  saved?: number;
  /**
   * Created post ID
   */
  post_id?: number;
}

/**
 * photos.saveWallPhoto
 *
 * Saves a photo to a user's or community's wall after being uploaded.
 */

export interface PhotosSaveWallPhotoParams {
  /**
   * ID of the user on whose wall the photo will be saved.
   */
  user_id?: number;
  /**
   * ID of community on whose wall the photo will be saved.
   */
  group_id?: number;
  /**
   * Parameter returned when the the photo is [vk.com/dev/upload_files|uploaded to the server].
   */
  photo: string;
  server?: number;
  hash?: string;
  /**
   * Geographical latitude, in degrees (from '-90' to '90').
   */
  latitude?: number;
  /**
   * Geographical longitude, in degrees (from '-180' to '180').
   */
  longitude?: number;
  /**
   * Text describing the photo. 2048 digits max.
   */
  caption?: string;
}

// photos.saveWallPhoto_response
export type PhotosSaveWallPhotoResponse = PhotosPhoto[];

/**
 * photos.search
 *
 * Returns a list of photos.
 */

export interface PhotosSearchParams {
  /**
   * Search query string.
   */
  q?: string;
  /**
   * Geographical latitude, in degrees (from '-90' to '90').
   */
  lat?: number;
  /**
   * Geographical longitude, in degrees (from '-180' to '180').
   */
  long?: number;
  start_time?: number;
  end_time?: number;
  /**
   * Sort order:
   */
  sort?: number;
  /**
   * Offset needed to return a specific subset of photos.
   */
  offset?: number;
  /**
   * Number of photos to return.
   */
  count?: number;
  /**
   * Radius of search in meters (works very approximately). Available values: '10', '100', '800', '6000', '50000'.
   */
  radius?: number;
}

// photos.search_response
export interface PhotosSearchResponse {
  /**
   * Total number
   */
  count?: number;
  items?: PhotosPhoto[];
}
