/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseCommentsInfo } from '../base/BaseCommentsInfo';
import { BaseLikesInfo } from '../base/BaseLikesInfo';
import { BaseRepostsInfo } from '../base/BaseRepostsInfo';
import { BoardTopic } from '../board/BoardTopic';
import { MediaRestriction } from '../media/MediaRestriction';
import { PhotosImage } from '../photos/PhotosImage';
import { PhotosPhoto } from '../photos/PhotosPhoto';
import { PhotosPhotoSizes } from '../photos/PhotosPhotoSizes';
import { VideoVideo } from '../video/VideoVideo';
import { VideoVideoImage } from '../video/VideoVideoImage';
import { WallGeo } from '../wall/WallGeo';
import { WallPostSource } from '../wall/WallPostSource';
import { WallPostType } from '../wall/WallPostType';
import { WallWallpost } from '../wall/WallWallpost';
import { WallWallpostAttachment } from '../wall/WallWallpostAttachment';

// video_video type enumNames
export const VideoVideoTypeEnumNames = {
  VIDEO: 'video',
  MUSIC_VIDEO: 'music_video',
  MOVIE: 'movie',
} as const;

// video_video live_status enumNames
export const VideoVideoLiveStatusEnumNames = {
  WAITING: 'waiting',
  STARTED: 'started',
  FINISHED: 'finished',
  FAILED: 'failed',
  UPCOMING: 'upcoming',
} as const;

// notifications_notification_parent
export interface NotificationsNotificationParent {
  attachments?: WallWallpostAttachment[];
  comments?: BaseCommentsInfo;
  /**
   * ID of the source post owner
   */
  copy_owner_id?: number;
  /**
   * ID of the source post
   */
  copy_post_id?: number;
  /**
   * Date of publishing in Unixtime
   */
  date: number;
  /**
   * Post author ID
   */
  from_id?: number;
  geo?: WallGeo;
  /**
   * Post ID
   */
  id: number;
  /**
   * Information whether the post in favorites list
   */
  is_favorite?: boolean;
  likes?: BaseLikesInfo;
  /**
   * wall post ID (if comment)
   */
  post_id?: number;
  post_source?: WallPostSource;
  post_type?: WallPostType;
  reposts?: BaseRepostsInfo;
  /**
   * Post signer ID
   */
  signer_id?: number;
  /**
   * Post text
   */
  text?: string;
  /**
   * Wall owner's ID
   */
  to_id?: number;
  /**
   * Access key for the photo
   */
  access_key?: string;
  /**
   * Album ID
   */
  album_id: number;
  /**
   * Original photo height
   */
  height?: number;
  images?: PhotosImage[];
  /**
   * Latitude
   */
  lat?: number;
  /**
   * Longitude
   */
  long?: number;
  /**
   * Photo owner's ID
   */
  owner_id: number;
  /**
   * URL of image with 2560 px width
   */
  photo_256?: string;
  /**
   * Information whether current user can comment the photo
   */
  can_comment?: 0 | 1;
  place?: string;
  sizes?: PhotosPhotoSizes[];
  /**
   * ID of the user who have uploaded the photo
   */
  user_id?: number;
  /**
   * Original photo width
   */
  width?: number;
  /**
   * Whether photo has attached tag links
   */
  has_tags: boolean;
  restrictions?: MediaRestriction;
  /**
   * Date when the topic has been created in Unixtime
   */
  created?: number;
  /**
   * Creator ID
   */
  created_by?: number;
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
  /**
   * Date when the video has been added in Unixtime
   */
  adding_date?: number;
  /**
   * Information whether current user can edit the video
   */
  can_edit?: 0 | 1;
  /**
   * Information whether current user can like the video
   */
  can_like?: 0 | 1;
  /**
   * Information whether current user can repost the video
   */
  can_repost?: 0 | 1;
  /**
   * Information whether current user can subscribe to author of the video
   */
  can_subscribe?: 0 | 1;
  /**
   * Information whether current user can add the video to favourites
   */
  can_add_to_faves?: 0 | 1;
  /**
   * Information whether current user can add the video
   */
  can_add?: 0 | 1;
  /**
   * Information whether current user can attach action button to the video
   */
  can_attach_link?: 0 | 1;
  /**
   * 1 if video is private
   */
  is_private?: 0 | 1;
  /**
   * Video description
   */
  description?: string;
  /**
   * Video duration in seconds
   */
  duration?: number;
  image?: VideoVideoImage[];
  first_frame?: VideoVideoImage[];
  /**
   * Video embed URL
   */
  player?: string;
  /**
   * Returns if the video is processing
   */
  processing?: 1;
  /**
   * 1 if  video is being converted
   */
  converting?: 0 | 1;
  restriction?: MediaRestriction;
  /**
   * 1 if video is added to user's albums
   */
  added?: 0 | 1;
  /**
   * 1 if user is subscribed to author of the video
   */
  is_subscribed?: 0 | 1;
  track_code?: string;
  /**
   * Information whether the video is repeated
   */
  repeat?: 1;
  type?: 'video' | 'music_video' | 'movie';
  /**
   * Number of views
   */
  views?: number;
  /**
   * If video is external, number of views on vk
   */
  local_views?: number;
  /**
   * Restriction code
   */
  content_restricted?: number;
  /**
   * Restriction text
   */
  content_restricted_message?: string;
  /**
   * Live donations balance
   */
  balance?: number;
  /**
   * Live stream status
   */
  live_status?: 'waiting' | 'started' | 'finished' | 'failed' | 'upcoming';
  /**
   * 1 if the video is a live stream
   */
  live?: 1;
  /**
   * 1 if the video is an upcoming stream
   */
  upcoming?: 1;
  /**
   * Date in Unixtime when the live stream is scheduled to start by the author
   */
  live_start_time?: number;
  /**
   * Whether current user is subscribed to the upcoming live stream notification (if not subscribed to the author)
   */
  live_notify?: 0 | 1;
  /**
   * Number of spectators of the stream
   */
  spectators?: number;
  /**
   * External platform
   */
  platform?: string;
  photo?: PhotosPhoto;
  post?: WallWallpost;
  topic?: BoardTopic;
  video?: VideoVideo;
}
