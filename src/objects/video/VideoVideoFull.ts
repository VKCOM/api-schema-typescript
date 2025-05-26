/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseLikes } from '../base/BaseLikes';
import { BaseRepostsInfo } from '../base/BaseRepostsInfo';
import { VideoEpisode } from './VideoEpisode';
import { VideoLiveSettings } from './VideoLiveSettings';
import { VideoVideoFiles } from './VideoVideoFiles';
import { VideoVideoImage } from './VideoVideoImage';

// video_video_full
export interface VideoVideoFull {
  response_type?: 'min' | 'full';
  /**
   * Video access key
   */
  access_key?: string;
  /**
   * Date when the video has been added in Unixtime
   */
  adding_date?: number;
  /**
   * Information whether current user can comment the video
   */
  can_comment?: 0 | 1;
  /**
   * Information whether current user can edit the video
   */
  can_edit?: 0 | 1;
  /**
   * Information whether current user can delete the video
   */
  can_delete?: 0 | 1;
  /**
   * Information whether current user can like the video
   */
  can_like?: 0 | 1;
  /**
   * Information whether current user can repost the video
   */
  can_repost?: number;
  /**
   * Information whether current user can subscribe to author of the video
   */
  can_subscribe?: 0 | 1;
  /**
   * Information whether current user can promote the video
   */
  can_be_promoted?: 0 | 1;
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
   * Information whether current user can edit the video privacy
   */
  can_edit_privacy?: 0 | 1;
  /**
   * 1 if video is private
   */
  is_private?: 0 | 1;
  /**
   * Number of comments
   */
  comments?: number;
  /**
   * Date when video has been uploaded in Unixtime
   */
  date?: number;
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
   * Video width
   */
  width?: number;
  /**
   * Video height
   */
  height?: number;
  /**
   * Video ID
   */
  id?: number;
  /**
   * Video owner ID
   */
  owner_id?: number;
  /**
   * Id of the user who uploaded the video if it was uploaded to a group by member
   */
  user_id?: number;
  /**
   * Video title
   */
  title?: string;
  /**
   * Whether video is added to bookmarks
   */
  is_favorite?: boolean;
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
  type?: 'interactive' | 'video' | 'music_video' | 'movie' | 'live' | 'short_video' | 'story' | 'video_message';
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
  likes?: BaseLikes;
  reposts?: BaseRepostsInfo;
  files?: VideoVideoFiles;
  trailer?: VideoVideoFiles;
  /**
   * List of video episodes with timecodes
   */
  episodes?: VideoEpisode[];
  /**
   * Settings for live stream
   */
  live_settings?: VideoLiveSettings;
}
