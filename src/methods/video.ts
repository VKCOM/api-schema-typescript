/**
 * This is auto-generated file, don't modify this file manually
 */

import { GroupsGroupFull } from '../objects/groups/GroupsGroupFull';
import { UsersUser } from '../objects/users/UsersUser';
import { UsersUserFull } from '../objects/users/UsersUserFull';
import { VideoLiveCategory } from '../objects/video/VideoLiveCategory';
import { VideoSaveResult } from '../objects/video/VideoSaveResult';
import { VideoStreamInputParams } from '../objects/video/VideoStreamInputParams';
import { VideoVideoAlbum } from '../objects/video/VideoVideoAlbum';
import { VideoVideoAlbumFull } from '../objects/video/VideoVideoAlbumFull';
import { VideoVideoFull } from '../objects/video/VideoVideoFull';
import { VideoVideoImage } from '../objects/video/VideoVideoImage';
import { WallWallComment } from '../objects/wall/WallWallComment';

/**
 * video.add
 *
 * Adds a video to a user or community page.
 */

export interface VideoAddParams {
  /**
   * identifier of a user or community to add a video to. Use a negative value to designate a community ID.
   */
  target_id?: number;
  /**
   * Video ID.
   */
  video_id: number;
  /**
   * ID of the user or community that owns the video. Use a negative value to designate a community ID.
   */
  owner_id: number;
}

// video.add_response
export type VideoAddResponse = 1;

/**
 * video.addAlbum
 *
 * Creates an empty album for videos.
 */

export interface VideoAddAlbumParams {
  /**
   * Community ID (if the album will be created in a community).
   */
  group_id?: number;
  /**
   * Album title.
   */
  title?: string;
  /**
   * new access permissions for the album. Possible values: , *'0' - all users,, *'1' - friends only,, *'2' - friends and friends of friends,, *'3' - "only me".
   *
   * objects.json#/definitions/video_playlist_privacy_category
   */
  privacy?: string;
}

// video.addAlbum_response
export interface VideoAddAlbumResponse {
  /**
   * Created album ID
   */
  album_id?: number;
}

/**
 * video.addToAlbum
 */

export interface VideoAddToAlbumParams {
  target_id?: number;
  album_id?: number;
  album_ids?: string;
  owner_id: number;
  video_id: number;
}

// video.addToAlbum_response
export type VideoAddToAlbumResponse = 1;

// video.addToAlbum_multiResponse
export type VideoAddToAlbumMultiResponse = number[];

/**
 * video.createComment
 *
 * Adds a new comment on a video.
 */

export interface VideoCreateCommentParams {
  /**
   * ID of the user or community that owns the video.
   */
  owner_id?: number;
  /**
   * Video ID.
   */
  video_id: number;
  /**
   * New comment text.
   */
  message?: string;
  /**
   * List of objects attached to the comment, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' - Type of media attachment: 'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document, '<owner_id>' - ID of the media attachment owner. '<media_id>' - Media attachment ID. Example: "photo100172_166443618,photo66748_265827614"
   */
  attachments?: string;
  /**
   * '1' - to post the comment from a community name (only if 'owner_id'<0)
   */
  from_group?: 0 | 1;
  reply_to_comment?: number;
  sticker_id?: number;
  guid?: string;
  track_code?: string;
}

// video.createComment_response
export type VideoCreateCommentResponse = number;

/**
 * video.delete
 *
 * Deletes a video from a user or community page.
 */

export interface VideoDeleteParams {
  /**
   * Video ID.
   */
  video_id: number;
  /**
   * ID of the user or community that owns the video.
   */
  owner_id?: number;
  target_id?: number;
}

// video.delete_response
export type VideoDeleteResponse = 1;

/**
 * video.deleteAlbum
 *
 * Deletes a video album.
 */

export interface VideoDeleteAlbumParams {
  /**
   * Community ID (if the album is owned by a community).
   */
  group_id?: number;
  /**
   * Album ID.
   */
  album_id: number;
  owner_id?: number;
}

// video.deleteAlbum_response
export type VideoDeleteAlbumResponse = 1;

/**
 * video.deleteComment
 *
 * Deletes a comment on a video.
 */

export interface VideoDeleteCommentParams {
  /**
   * ID of the user or community that owns the video.
   */
  owner_id?: number;
  /**
   * ID of the comment to be deleted.
   */
  comment_id: number;
}

// video.deleteComment_response
export type VideoDeleteCommentResponse = 1;

/**
 * video.deleteThread
 *
 * Deletes a thread on a video.
 */

export interface VideoDeleteThreadParams {
  /**
   * ID of the user or community that owns the video.
   */
  owner_id: number;
  /**
   * ID of the main comment to be deleted as thread.
   */
  thread_id: number;
}

// video.deleteThread_response
export type VideoDeleteThreadResponse = 1;

/**
 * video.edit
 *
 * Edits information about a video on a user or community page.
 */

export interface VideoEditParams {
  /**
   * ID of the user or community that owns the video.
   */
  owner_id?: number;
  /**
   * Video ID.
   */
  video_id: number;
  /**
   * New video title.
   */
  name?: string;
  /**
   * New video description.
   */
  desc?: string;
  /**
   * Privacy settings in a [vk.com/dev/privacy_setting|special format]. Privacy setting is available for videos uploaded to own profile by user.
   */
  privacy_view?: string;
  /**
   * Privacy settings for comments in a [vk.com/dev/privacy_setting|special format].
   */
  privacy_comment?: string;
  /**
   * Disable comments for the group video.
   */
  no_comments?: 0 | 1;
  /**
   * '1' - to repeat the playback of the video, '0' - to play the video once,
   */
  repeat?: 0 | 1;
  ord_info?: string;
}

// video.edit_response
export interface VideoEditResponse {
  success?: 0 | 1;
  /**
   * Access key for access link
   */
  access_key?: string;
}

/**
 * video.editAlbum
 *
 * Edits the title of a video album.
 */

export interface VideoEditAlbumParams {
  /**
   * Community ID (if the album edited is owned by a community).
   */
  group_id?: number;
  /**
   * Album ID.
   */
  album_id: number;
  /**
   * New album title.
   */
  title?: string;
  /**
   * new access permissions for the album. Possible values: , *'0' - all users,, *'1' - friends only,, *'2' - friends and friends of friends,, *'3' - "only me".
   *
   * objects.json#/definitions/video_playlist_privacy_category
   */
  privacy?: string;
  owner_id?: number;
}

// video.editAlbum_response
export type VideoEditAlbumResponse = 1;

/**
 * video.editComment
 *
 * Edits the text of a comment on a video.
 */

export interface VideoEditCommentParams {
  /**
   * ID of the user or community that owns the video.
   */
  owner_id?: number;
  /**
   * Comment ID.
   */
  comment_id: number;
  /**
   * New comment text.
   */
  message?: string;
  /**
   * List of objects attached to the comment, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' - Type of media attachment: 'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document, '<owner_id>' - ID of the media attachment owner. '<media_id>' - Media attachment ID. Example: "photo100172_166443618,photo66748_265827614"
   */
  attachments?: string;
}

// video.editComment_response
export type VideoEditCommentResponse = 1;

/**
 * video.get
 *
 * Returns detailed information about videos.
 */

export interface VideoGetParams {
  /**
   * ID of the user or community that owns the video(s).
   */
  owner_id?: number;
  /**
   * Video IDs, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", Use a negative value to designate a community ID. Example: "-4363_136089719,13245770_137352259"
   */
  videos?: string;
  /**
   * ID of the album containing the video(s).
   */
  album_id?: number;
  /**
   * Number of videos to return.
   */
  count?: number;
  /**
   * Offset needed to return a specific subset of videos.
   */
  offset?: number;
  /**
   * '1' - to return an extended response with additional fields
   */
  extended?: 0 | 1;
  fields?: string;
  /**
   * Sort order: '0' - newest video first, '1' - oldest video first
   */
  sort_album?: 0 | 1;
}

// video.get_response
export interface VideoGetResponse {
  /**
   * Total number
   */
  count?: number;
  items?: VideoVideoFull[];
  profiles?: UsersUserFull[];
  groups?: GroupsGroupFull[];
  /**
   * Max attached short videos
   */
  max_attached_short_videos?: number;
}

/**
 * video.getAlbumById
 *
 * Returns video album info
 */

export interface VideoGetAlbumByIdParams {
  /**
   * identifier of a user or community to add a video to. Use a negative value to designate a community ID.
   */
  owner_id?: number;
  /**
   * Album ID.
   */
  album_id: number;
}

// video.getAlbumById_response
export type VideoGetAlbumByIdResponse = VideoVideoAlbumFull;

/**
 * video.getAlbums
 *
 * Returns a list of video albums owned by a user or community.
 */

export interface VideoGetAlbumsParams {
  /**
   * ID of the user or community that owns the video album(s).
   */
  owner_id?: number;
  /**
   * Offset needed to return a specific subset of video albums.
   */
  offset?: number;
  /**
   * Number of video albums to return.
   */
  count?: number;
  /**
   * '1' - to return additional information about album privacy settings for the current user
   */
  extended?: 0 | 1;
  need_system?: 0 | 1;
}

// video.getAlbums_response
export interface VideoGetAlbumsResponse {
  /**
   * Total number
   */
  count?: number;
  items?: VideoVideoAlbum[];
}

// video.getAlbums_extendedResponse
export interface VideoGetAlbumsExtendedResponse {
  /**
   * Total number
   */
  count?: number;
  items?: VideoVideoAlbumFull[];
}

/**
 * video.getAlbumsByVideo
 */

export interface VideoGetAlbumsByVideoParams {
  target_id?: number;
  owner_id: number;
  video_id: number;
  extended?: 0 | 1;
}

// video.getAlbumsByVideo_response
export type VideoGetAlbumsByVideoResponse = number[];

// video.getAlbumsByVideo_extendedResponse
export interface VideoGetAlbumsByVideoExtendedResponse {
  /**
   * Total number
   */
  count?: number;
  items?: VideoVideoAlbumFull[];
}

/**
 * video.getComments
 *
 * Returns a list of comments on a video.
 */

export interface VideoGetCommentsParams {
  /**
   * ID of the user or community that owns the video.
   */
  owner_id?: number;
  /**
   * Video ID.
   */
  video_id: number;
  /**
   * '1' - to return an additional 'likes' field
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
   * Sort order: 'asc' - oldest comment first, 'desc' - newest comment first
   */
  sort?: 'asc' | 'desc' | 'interest';
  extended?: 0 | 1;
  fields?: string;
  comment_id?: number;
  thread_items_count?: number;
}

// video.getComments_response
export interface VideoGetCommentsResponse {
  /**
   * Total number
   */
  count?: number;
  items?: WallWallComment[];
  /**
   * Count of replies of current level
   */
  current_level_count?: number;
  /**
   * Information whether current user can comment the post
   */
  can_post?: boolean;
  show_reply_button?: boolean;
  /**
   * Information whether groups can comment the post
   */
  groups_can_post?: boolean;
  real_offset?: number;
}

// video.getComments_extendedResponse
export interface VideoGetCommentsExtendedResponse {
  /**
   * Total number
   */
  count?: number;
  items?: WallWallComment[];
  profiles?: UsersUserFull[];
  groups?: GroupsGroupFull[];
  /**
   * Count of replies of current level
   */
  current_level_count?: number;
  /**
   * Information whether current user can comment the post
   */
  can_post?: boolean;
  show_reply_button?: boolean;
  /**
   * Information whether groups can comment the post
   */
  groups_can_post?: boolean;
  real_offset?: number;
}

/**
 * video.getLongPollServer
 */

export interface VideoGetLongPollServerParams {
  owner_id?: number;
  video_id: number;
}

// video.getLongPollServer_response
export interface VideoGetLongPollServerResponse {
  url?: string;
}

/**
 * video.getOembed
 *
 * Returns oEmbed player to video
 */

export interface VideoGetOembedParams {
  /**
   * Link to video
   */
  url: string;
  /**
   * Maximum width of player
   */
  maxwidth?: number;
  /**
   * Maximum width of player
   */
  maxheight?: number;
}

// video.getOembed_response
export interface VideoGetOembedResponse {
  /**
   * Version of oEmbed (always 1.0)
   */
  version?: string;
  /**
   * Type of embed content (always video)
   */
  type?: string;
  /**
   * Title of video
   */
  title?: string;
  /**
   * Author of video
   */
  author_name?: string;
  /**
   * HTML of player
   */
  html?: string;
  /**
   * Width of player
   */
  width?: number;
  /**
   * Height of player
   */
  height?: number;
  /**
   * Name of video provider
   */
  provider_name?: string;
  /**
   * Video provider url
   */
  provider_url?: string;
  /**
   * Video thumbnail url
   */
  thumbnail_url?: string;
  /**
   * Video thumbnail width
   */
  thumbnail_width?: number;
  /**
   * Video thumbnail height
   */
  thumbnail_height?: number;
}

/**
 * video.getThumbUploadUrl
 */

export interface VideoGetThumbUploadUrlParams {
  owner_id: number;
}

// video.getThumbUploadUrl_response
export interface VideoGetThumbUploadUrlResponse {
  /**
   * Url for thumb upload
   */
  upload_url?: string;
}

/**
 * video.liveGetCategories
 */

export interface VideoLiveGetCategoriesParams {}

// video.liveGetCategories_response
export type VideoLiveGetCategoriesResponse = VideoLiveCategory[];

/**
 * video.removeFromAlbum
 */

export interface VideoRemoveFromAlbumParams {
  target_id?: number;
  album_id?: number;
  album_ids?: string;
  owner_id: number;
  video_id: number;
}

// video.removeFromAlbum_response
export type VideoRemoveFromAlbumResponse = 1;

// video.removeFromAlbum_multiResponse
export type VideoRemoveFromAlbumMultiResponse = number[];

/**
 * video.reorderAlbums
 *
 * Reorders the album in the list of user video albums.
 */

export interface VideoReorderAlbumsParams {
  /**
   * ID of the user or community that owns the albums..
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

// video.reorderAlbums_response
export type VideoReorderAlbumsResponse = 1;

/**
 * video.reorderVideos
 *
 * Reorders the video in the video album.
 */

export interface VideoReorderVideosParams {
  /**
   * ID of the user or community that owns the album with videos.
   */
  target_id?: number;
  /**
   * ID of the video album.
   */
  album_id?: number;
  /**
   * ID of the user or community that owns the video.
   */
  owner_id: number;
  /**
   * ID of the video.
   */
  video_id: number;
  /**
   * ID of the user or community that owns the video before which the video in question shall be placed.
   */
  before_owner_id?: number;
  /**
   * ID of the video before which the video in question shall be placed.
   */
  before_video_id?: number;
  /**
   * ID of the user or community that owns the video after which the photo in question shall be placed.
   */
  after_owner_id?: number;
  /**
   * ID of the video after which the photo in question shall be placed.
   */
  after_video_id?: number;
}

// video.reorderVideos_response
export type VideoReorderVideosResponse = 1;

/**
 * video.report
 *
 * Reports (submits a complaint about) a video.
 */

export interface VideoReportParams {
  /**
   * ID of the user or community that owns the video.
   */
  owner_id: number;
  /**
   * Video ID.
   */
  video_id: number;
  /**
   * Reason for the complaint: '0' - spam, '1' - child pornography, '2' - extremism, '3' - violence, '4' - drug propaganda, '5' - adult material, '6' - insult, abuse
   */
  reason?: 0 | 1 | 2 | 4 | 5 | 6 | 8 | 9 | 10 | 11 | 12 | 13 | 15 | 27 | 41 | 42 | 43 | 101;
  /**
   * Comment describing the complaint.
   */
  comment?: string;
  /**
   * (If the video was found in search results.) Search query string.
   */
  search_query?: string;
}

// video.report_response
export type VideoReportResponse = 1;

/**
 * video.reportComment
 *
 * Reports (submits a complaint about) a comment on a video.
 */

export interface VideoReportCommentParams {
  /**
   * ID of the user or community that owns the video.
   */
  owner_id: number;
  /**
   * ID of the comment being reported.
   */
  comment_id: number;
  /**
   * Reason for the complaint: , 0 - spam , 1 - child pornography , 2 - extremism , 3 - violence , 4 - drug propaganda , 5 - adult material , 6 - insult, abuse
   */
  reason?: 0 | 1 | 2 | 4 | 5 | 6 | 8 | 9 | 10 | 11 | 12 | 13 | 15 | 27 | 41 | 42 | 43 | 101;
}

// video.reportComment_response
export type VideoReportCommentResponse = 1;

/**
 * video.restore
 *
 * Restores a previously deleted video.
 */

export interface VideoRestoreParams {
  /**
   * Video ID.
   */
  video_id: number;
  /**
   * ID of the user or community that owns the video.
   */
  owner_id?: number;
}

// video.restore_response
export type VideoRestoreResponse = 1;

/**
 * video.restoreComment
 *
 * Restores a previously deleted comment on a video.
 */

export interface VideoRestoreCommentParams {
  /**
   * ID of the user or community that owns the video.
   */
  owner_id?: number;
  /**
   * ID of the deleted comment.
   */
  comment_id: number;
}

// video.restoreComment_response
/**
 * Returns 1 if request has been processed successfully, 0 if the comment is not found
 */
export type VideoRestoreCommentResponse = 0 | 1;

/**
 * video.restoreThread
 *
 * Restores a deleted thread on a video.
 */

export interface VideoRestoreThreadParams {
  /**
   * ID of the user or community that owns the video.
   */
  owner_id: number;
  /**
   * ID of the main comment to be deleted as thread.
   */
  thread_id: number;
}

// video.restoreThread_response
export type VideoRestoreThreadResponse = 1;

/**
 * video.save
 *
 * Returns a server address (required for upload) and video data.
 */

export interface VideoSaveParams {
  /**
   * Name of the video.
   */
  name?: string;
  /**
   * Description of the video.
   */
  description?: string;
  /**
   * '1' - to designate the video as private (send it via a private message), the video will not appear on the user's video list and will not be available by ID for other users, '0' - not to designate the video as private
   */
  is_private?: 0 | 1;
  /**
   * '1' - to post the saved video on a user's wall, '0' - not to post the saved video on a user's wall
   */
  wallpost?: 0 | 1;
  /**
   * URL for embedding the video from an external website.
   */
  link?: string;
  /**
   * ID of the community in which the video will be saved. By default, the current user's page.
   */
  group_id?: number;
  /**
   * ID of the album to which the saved video will be added.
   */
  album_id?: number;
  privacy_view?: string;
  privacy_comment?: string;
  no_comments?: 0 | 1;
  /**
   * '1' - to repeat the playback of the video, '0' - to play the video once,
   */
  repeat?: 0 | 1;
  compression?: 0 | 1;
  ord_info?: string;
  auto_publish?: 0 | 1;
}

// video.save_response
export type VideoSaveResponse = VideoSaveResult;

/**
 * video.saveUploadedThumb
 */

export interface VideoSaveUploadedThumbParams {
  owner_id: number;
  thumb_json: string;
  thumb_size?: string;
  random_tag?: string;
  /**
   * Video ID.
   */
  video_id?: number;
  /**
   * If flag passed uploaded thumb will automatically set to passed video. Work only with video_id.
   */
  set_thumb?: 0 | 1;
}

// video.saveUploadedThumb_response
export interface VideoSaveUploadedThumbResponse {
  image?: VideoVideoImage[];
  /**
   * ID of uploaded thumb
   */
  photo_id?: number;
  /**
   * Owner ID of uploaded thumb
   */
  photo_owner_id?: number;
  /**
   * Hash of uploaded thumb
   */
  photo_hash?: string;
}

/**
 * video.search
 *
 * Returns a list of videos under the set search criterion.
 */

export interface VideoSearchParams {
  /**
   * Search query string (e.g., 'The Beatles').
   */
  q?: string;
  /**
   * Sort order: '1' - by duration, '2' - by relevance, '0' - by date added
   */
  sort?: 1 | 2 | 0;
  /**
   * If not null, only searches for high-definition videos.
   */
  hd?: number;
  /**
   * '1' - to disable the Safe Search filter, '0' - to enable the Safe Search filter
   */
  adult?: 0 | 1;
  live?: 0 | 1;
  /**
   * Filters to apply: 'youtube' - return YouTube videos only, 'vimeo' - return Vimeo videos only, 'vk' - return VK videos only, 'short' - return short videos only, 'long' - return long videos only
   */
  filters?: string;
  search_own?: 0 | 1;
  /**
   * Offset needed to return a specific subset of videos.
   */
  offset?: number;
  longer?: number;
  shorter?: number;
  /**
   * Number of videos to return.
   */
  count?: number;
  extended?: 0 | 1;
  owner_id?: number;
  fields?: string;
}

// video.search_response
export interface VideoSearchResponse {
  /**
   * Total number
   */
  count?: number;
  items?: VideoVideoFull[];
}

// video.search_extendedResponse
export interface VideoSearchExtendedResponse {
  /**
   * Total number
   */
  count?: number;
  items?: VideoVideoFull[];
  profiles?: UsersUser[];
  groups?: GroupsGroupFull[];
}

/**
 * video.startStreaming
 */

export interface VideoStartStreamingParams {
  video_id?: number;
  name?: string;
  description?: string;
  wallpost?: 0 | 1;
  group_id?: number;
  privacy_view?: string;
  privacy_comment?: string;
  no_comments?: 0 | 1;
  category_id?: number;
  publish?: 0 | 1;
}

// video.startStreaming_response
export interface VideoStartStreamingResponse {
  /**
   * Owner ID of created video object
   */
  owner_id?: number;
  /**
   * Video ID of created video object
   */
  video_id?: number;
  /**
   * Video title
   */
  name?: string;
  /**
   * Video description
   */
  description?: string;
  /**
   * Video access key
   */
  access_key?: string;
  stream?: VideoStreamInputParams;
  post_id?: number;
}

/**
 * video.stopStreaming
 */

export interface VideoStopStreamingParams {
  group_id?: number;
  video_id?: number;
}

// video.stopStreaming_response
export interface VideoStopStreamingResponse {
  unique_viewers?: number;
}

/**
 * video.unpinComment
 *
 * Unpin comment of a video.
 */

export interface VideoUnpinCommentParams {
  /**
   * ID of the user or community that owns the video.
   */
  owner_id: number;
  comment_id: number;
}

// video.unpinComment_response
export type VideoUnpinCommentResponse = 1;
