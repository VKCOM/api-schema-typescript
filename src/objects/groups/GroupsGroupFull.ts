/**
 * This is auto-generated file, don't modify this file manually
 */

import { AudioAudio } from '../audio/AudioAudio';
import { BaseCropPhoto } from '../base/BaseCropPhoto';
import { BaseObject } from '../base/BaseObject';
import { BaseOwnerCover } from '../base/BaseOwnerCover';
import { VideoLiveInfo } from '../video/VideoLiveInfo';
import { GroupsAddressesInfo } from './GroupsAddressesInfo';
import { GroupsContactsItem } from './GroupsContactsItem';
import { GroupsCountersGroup } from './GroupsCountersGroup';
import { GroupsGroupAdminLevel } from './GroupsGroupAdminLevel';
import { GroupsGroupBanInfo } from './GroupsGroupBanInfo';
import { GroupsGroupFullAgeLimits } from './GroupsGroupFullAgeLimits';
import { GroupsGroupFullMemberStatus } from './GroupsGroupFullMemberStatus';
import { GroupsGroupFullSection } from './GroupsGroupFullSection';
import { GroupsGroupIsClosed } from './GroupsGroupIsClosed';
import { GroupsGroupType } from './GroupsGroupType';
import { GroupsLinksItem } from './GroupsLinksItem';
import { GroupsLiveCovers } from './GroupsLiveCovers';
import { GroupsMarketInfo } from './GroupsMarketInfo';
import { GroupsOnlineStatus } from './GroupsOnlineStatus';
import { GroupsPhotoSize } from './GroupsPhotoSize';

// groups_group_full wall enumNames
export const GroupsGroupFullWallEnumNames = {
  DISABLED: 0,
  OPEN: 1,
  LIMITED: 2,
  RESTRICTED: 3,
} as const;

// groups_group_full
export interface GroupsGroupFull {
  /**
   * Community ID
   */
  id?: number;
  /**
   * Community name
   */
  name?: string;
  /**
   * Domain of the community page
   */
  screen_name?: string;
  is_closed?: GroupsGroupIsClosed;
  type?: GroupsGroupType;
  /**
   * Information whether current user is administrator
   */
  is_admin?: 0 | 1;
  admin_level?: GroupsGroupAdminLevel;
  /**
   * Information whether current user is member
   */
  is_member?: 0 | 1;
  /**
   * Information whether current user is advertiser
   */
  is_advertiser?: 0 | 1;
  /**
   * Start date in Unixtime format
   */
  start_date?: number;
  /**
   * Finish date in Unixtime format
   */
  finish_date?: number;
  /**
   * Information whether community is verified
   */
  verified?: 0 | 1;
  /**
   * Information whether community is banned
   */
  deactivated?: string;
  /**
   * URL of square photo of the community with 50 pixels in width
   */
  photo_50?: string;
  /**
   * URL of square photo of the community with 100 pixels in width
   */
  photo_100?: string;
  /**
   * URL of square photo of the community with 200 pixels in width
   */
  photo_200?: string;
  /**
   * URL of square photo of the community with 200 pixels in width original
   */
  photo_200_orig?: string;
  /**
   * URL of square photo of the community with 400 pixels in width
   */
  photo_400?: string;
  /**
   * URL of square photo of the community with 400 pixels in width original
   */
  photo_400_orig?: string;
  /**
   * URL of square photo of the community with max pixels in width
   */
  photo_max?: string;
  /**
   * URL of square photo of the community with max pixels in width original
   */
  photo_max_orig?: string;
  /**
   * Established date
   */
  est_date?: string;
  /**
   * Public date label
   */
  public_date_label?: string;
  photo_max_size?: GroupsPhotoSize;
  is_video_live_notifications_blocked?: 0 | 1;
  video_live?: VideoLiveInfo;
  market?: GroupsMarketInfo;
  /**
   * Information whether community has installed market app
   */
  has_market_app?: boolean;
  using_vkpay_market_app?: boolean;
  /**
   * Current user's member status
   */
  member_status?: GroupsGroupFullMemberStatus;
  /**
   * Information whether community is adult
   */
  is_adult?: 0 | 1;
  /**
   * Information whether community is hidden from current user's newsfeed
   */
  is_hidden_from_feed?: 0 | 1;
  /**
   * Information whether community is in faves
   */
  is_favorite?: 0 | 1;
  /**
   * Information whether current user is subscribed
   */
  is_subscribed?: 0 | 1;
  city?: BaseObject;
  /**
   * Community description
   */
  description?: string;
  /**
   * Community's main wiki page title
   */
  wiki_page?: string;
  /**
   * Community members number
   */
  members_count?: number;
  /**
   * Info about number of users in group
   */
  members_count_text?: string;
  /**
   * The number of incoming requests to the community
   */
  requests_count?: number;
  /**
   * Community level live streams achievements
   */
  video_live_level?: number;
  /**
   * Number of community's live streams
   */
  video_live_count?: number;
  /**
   * Number of community's clips
   */
  clips_count?: number;
  counters?: GroupsCountersGroup;
  /**
   * Textlives number
   */
  textlives_count?: number;
  cover?: BaseOwnerCover;
  video_cover?: BaseOwnerCover;
  /**
   * Information whether current user can post on community's wall
   */
  can_post?: 0 | 1;
  can_suggest?: 0 | 1;
  /**
   * Information whether current user can upload story
   */
  can_upload_story?: 0 | 1;
  /**
   * Information whether current user can call to community
   */
  can_call_to_community?: boolean;
  /**
   * Information whether current user can upload doc
   */
  can_upload_doc?: 0 | 1;
  /**
   * Information whether current user can upload video
   */
  can_upload_video?: 0 | 1;
  /**
   * Information whether current user can upload clip
   */
  can_upload_clip?: 0 | 1;
  /**
   * Information whether current user can see all posts on community's wall
   */
  can_see_all_posts?: 0 | 1;
  /**
   * Information whether current user can create topic
   */
  can_create_topic?: 0 | 1;
  /**
   * Type of group, start date of event or category of public page
   */
  activity?: string;
  /**
   * Fixed post ID
   */
  fixed_post?: number;
  /**
   * Information whether community has photo
   */
  has_photo?: 0 | 1;
  /**
   * Данные о точках, по которым вырезаны профильная и миниатюрная фотографии сообщества
   */
  crop_photo?: BaseCropPhoto;
  /**
   * Community status
   */
  status?: string;
  status_audio?: AudioAudio;
  /**
   * Community's main photo album ID
   */
  main_album_id?: number;
  links?: GroupsLinksItem[];
  contacts?: GroupsContactsItem[];
  /**
   * Information about wall status in community
   *
   * `0` — disabled
   * `1` — open
   * `2` — limited
   * `3` — restricted
   */
  wall?: 0 | 1 | 2 | 3;
  /**
   * Community's website
   */
  site?: string;
  main_section?: GroupsGroupFullSection;
  secondary_section?: GroupsGroupFullSection;
  /**
   * Information whether the community has a "fire" pictogram.
   */
  trending?: 0 | 1;
  /**
   * Information whether current user can send a message to community
   */
  can_message?: 0 | 1;
  /**
   * Information whether community can send a message to current user
   */
  is_messages_blocked?: 0 | 1;
  /**
   * Information whether community can send notifications by phone number to current user
   */
  can_send_notify?: 0 | 1;
  /**
   * Status of replies in community messages
   */
  online_status?: GroupsOnlineStatus;
  /**
   * Inviter ID
   */
  invited_by?: number;
  /**
   * Information whether age limit
   */
  age_limits?: GroupsGroupFullAgeLimits;
  /**
   * User ban info
   */
  ban_info?: GroupsGroupBanInfo;
  has_group_channel?: boolean;
  /**
   * Info about addresses in groups
   */
  addresses?: GroupsAddressesInfo;
  /**
   * Information whether current user is subscribed to podcasts
   */
  is_subscribed_podcasts?: boolean;
  /**
   * Owner in whitelist or not
   */
  can_subscribe_podcasts?: boolean;
  /**
   * Can subscribe to wall
   */
  can_subscribe_posts?: boolean;
  /**
   * Live covers state
   */
  live_covers?: GroupsLiveCovers;
  stories_archive_count?: number;
  has_unseen_stories?: boolean;
  /**
   * Information about the status of video notifications for the current user.
   */
  video_notifications_status?: 'none' | 'all' | 'preferred';
  /**
   * Community videos number
   */
  videos_count?: number;
}
