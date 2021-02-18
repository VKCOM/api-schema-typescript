/**
 * This is auto-generated file, don't modify this file manually
 */

import { GroupsGroupFull } from '../objects/groups/GroupsGroupFull';
import { UsersUserMin } from '../objects/users/UsersUserMin';
import { VideoSaveResult } from '../objects/video/VideoSaveResult';
import { VideoVideo } from '../objects/video/VideoVideo';
import { VideoVideoAlbumFull } from '../objects/video/VideoVideoAlbumFull';
import { VideoVideoFull } from '../objects/video/VideoVideoFull';
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
   * new access permissions for the album. Possible values: , *'0' – all users,, *'1' – friends only,, *'2' – friends and friends of friends,, *'3' – "only me".
   */
  privacy?: string;
}

// video.addAlbum_response
export interface VideoAddAlbumResponse {
  /**
   * Created album ID
   */
  album_id: number;
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
   * List of objects attached to the comment, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — ID of the media attachment owner. '<media_id>' — Media attachment ID. Example: "photo100172_166443618,photo66748_265827614"
   */
  attachments?: string;
  /**
   * '1' — to post the comment from a community name (only if 'owner_id'<0)
   */
  from_group?: 0 | 1;
  reply_to_comment?: number;
  sticker_id?: number;
  guid?: string;
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
   * '1' — to repeat the playback of the video, '0' — to play the video once,
   */
  repeat?: 0 | 1;
}

// video.edit_response
export type VideoEditResponse = 1;

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
  title: string;
  /**
   * new access permissions for the album. Possible values: , *'0' – all users,, *'1' – friends only,, *'2' – friends and friends of friends,, *'3' – "only me".
   */
  privacy?: string;
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
   * List of objects attached to the comment, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — ID of the media attachment owner. '<media_id>' — Media attachment ID. Example: "photo100172_166443618,photo66748_265827614"
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
   * '1' — to return an extended response with additional fields
   */
  extended?: 0 | 1;
}

// video.get_response
export interface VideoGetResponse {
  /**
   * Total number
   */
  count: number;
  items: VideoVideoFull[];
}

// video.get_extendedResponse
export interface VideoGetExtendedResponse {
  /**
   * Total number
   */
  count: number;
  items: VideoVideoFull[];
  profiles?: UsersUserMin[];
  groups?: GroupsGroupFull[];
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
   * '1' — to return additional information about album privacy settings for the current user
   */
  extended?: 0 | 1;
  need_system?: 0 | 1;
}

// video.getAlbums_response
export interface VideoGetAlbumsResponse {
  /**
   * Total number
   */
  count: number;
  items: VideoVideoAlbumFull[];
}

// video.getAlbums_extendedResponse
export interface VideoGetAlbumsExtendedResponse {
  /**
   * Total number
   */
  count: number;
  items: VideoVideoAlbumFull[];
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
   * '1' — to return an additional 'likes' field
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
   * Sort order: 'asc' — oldest comment first, 'desc' — newest comment first
   */
  sort?: 'asc' | 'desc';
  extended?: 0 | 1;
  fields?: string;
}

// video.getComments_response
export interface VideoGetCommentsResponse {
  /**
   * Total number
   */
  count: number;
  items: WallWallComment[];
}

// video.getComments_extendedResponse
export interface VideoGetCommentsExtendedResponse {
  /**
   * Total number
   */
  count: number;
  items: WallWallComment[];
  profiles: UsersUserMin[];
  groups: GroupsGroupFull[];
}

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
   * Reason for the complaint: '0' – spam, '1' – child pornography, '2' – extremism, '3' – violence, '4' – drug propaganda, '5' – adult material, '6' – insult, abuse
   */
  reason?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
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
   * Reason for the complaint: , 0 – spam , 1 – child pornography , 2 – extremism , 3 – violence , 4 – drug propaganda , 5 – adult material , 6 – insult, abuse
   */
  reason?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
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
export type VideoRestoreCommentResponse = 0 | 1;

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
   * '1' — to designate the video as private (send it via a private message), the video will not appear on the user's video list and will not be available by ID for other users, '0' — not to designate the video as private
   */
  is_private?: 0 | 1;
  /**
   * '1' — to post the saved video on a user's wall, '0' — not to post the saved video on a user's wall
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
   * '1' — to repeat the playback of the video, '0' — to play the video once,
   */
  repeat?: 0 | 1;
  compression?: 0 | 1;
}

// video.save_response
export type VideoSaveResponse = VideoSaveResult;

/**
 * video.search
 *
 * Returns a list of videos under the set search criterion.
 */

export interface VideoSearchParams {
  /**
   * Search query string (e.g., 'The Beatles').
   */
  q: string;
  /**
   * Sort order: '1' — by duration, '2' — by relevance, '0' — by date added
   */
  sort?: 1 | 2 | 0;
  /**
   * If not null, only searches for high-definition videos.
   */
  hd?: number;
  /**
   * '1' — to disable the Safe Search filter, '0' — to enable the Safe Search filter
   */
  adult?: 0 | 1;
  /**
   * Filters to apply: 'youtube' — return YouTube videos only, 'vimeo' — return Vimeo videos only, 'short' — return short videos only, 'long' — return long videos only
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
}

// video.search_response
export interface VideoSearchResponse {
  /**
   * Total number
   */
  count: number;
  items: VideoVideo[];
}

// video.search_extendedResponse
export interface VideoSearchExtendedResponse {
  /**
   * Total number
   */
  count: number;
  items: VideoVideoFull[];
  profiles: UsersUserMin[];
  groups: GroupsGroupFull[];
}
