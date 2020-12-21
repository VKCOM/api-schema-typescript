/**
 * This is auto-generated file, don't modify this file manually
 */

import { AudioAudio } from '../audio/AudioAudio';
import { BaseCity } from '../base/BaseCity';
import { BaseCountry } from '../base/BaseCountry';
import { BaseCropPhoto } from '../base/BaseCropPhoto';
import { BaseSex } from '../base/BaseSex';
import { OwnerState } from '../owner/OwnerState';
import { PhotosPhoto } from '../photos/PhotosPhoto';
import { UsersCareer } from '../users/UsersCareer';
import { UsersExports } from '../users/UsersExports';
import { UsersLastSeen } from '../users/UsersLastSeen';
import { UsersMilitary } from '../users/UsersMilitary';
import { UsersOccupation } from '../users/UsersOccupation';
import { UsersOnlineInfo } from '../users/UsersOnlineInfo';
import { UsersPersonal } from '../users/UsersPersonal';
import { UsersRelative } from '../users/UsersRelative';
import { UsersSchool } from '../users/UsersSchool';
import { UsersUniversity } from '../users/UsersUniversity';
import { UsersUserCounters } from '../users/UsersUserCounters';
import { UsersUserMin } from '../users/UsersUserMin';
import { UsersUserRelation } from '../users/UsersUserRelation';
import { UsersUserType } from '../users/UsersUserType';
import { VideoLiveInfo } from '../video/VideoLiveInfo';
import { FriendsFriendStatusStatus } from './FriendsFriendStatusStatus';
import { FriendsRequestsMutual } from './FriendsRequestsMutual';

// users_user_full wall_default enum
export enum UsersUserFullWallDefaultEnum {
  OWNER = 'owner',
  ALL = 'all',
}

// friends_user_xtr_lists
export interface FriendsUserXtrLists {
  /**
   * Returns if a profile is deleted or blocked
   */
  deactivated?: string;
  /**
   * User first name
   */
  first_name: string;
  /**
   * Returns if a profile is hidden.
   */
  hidden?: number;
  /**
   * User ID
   */
  id: number;
  /**
   * User last name
   */
  last_name: string;
  can_access_closed?: boolean;
  is_closed?: boolean;
  /**
   * User sex
   */
  sex?: BaseSex;
  /**
   * Domain name of the user's page
   */
  screen_name?: string;
  /**
   * URL of square photo of the user with 50 pixels in width
   */
  photo_50?: string;
  /**
   * URL of square photo of the user with 100 pixels in width
   */
  photo_100?: string;
  online_info?: UsersOnlineInfo;
  /**
   * Information whether the user is online
   */
  online?: 0 | 1;
  /**
   * Information whether the user is online in mobile site or application
   */
  online_mobile?: 0 | 1;
  /**
   * Application ID
   */
  online_app?: number;
  /**
   * Information whether the user is verified
   */
  verified?: 0 | 1;
  /**
   * Information whether the user has a "fire" pictogram.
   */
  trending?: 0 | 1;
  friend_status?: FriendsFriendStatusStatus;
  mutual?: FriendsRequestsMutual;
  /**
   * User's first name in nominative case
   */
  first_name_nom?: string;
  /**
   * User's first name in genitive case
   */
  first_name_gen?: string;
  /**
   * User's first name in dative case
   */
  first_name_dat?: string;
  /**
   * User's first name in accusative case
   */
  first_name_acc?: string;
  /**
   * User's first name in instrumental case
   */
  first_name_ins?: string;
  /**
   * User's first name in prepositional case
   */
  first_name_abl?: string;
  /**
   * User's last name in nominative case
   */
  last_name_nom?: string;
  /**
   * User's last name in genitive case
   */
  last_name_gen?: string;
  /**
   * User's last name in dative case
   */
  last_name_dat?: string;
  /**
   * User's last name in accusative case
   */
  last_name_acc?: string;
  /**
   * User's last name in instrumental case
   */
  last_name_ins?: string;
  /**
   * User's last name in prepositional case
   */
  last_name_abl?: string;
  /**
   * User nickname
   */
  nickname?: string;
  /**
   * User maiden name
   */
  maiden_name?: string;
  /**
   * User contact name
   */
  contact_name?: string;
  /**
   * Domain name of the user's page
   */
  domain?: string;
  /**
   * User's date of birth
   */
  bdate?: string;
  city?: BaseCity;
  country?: BaseCountry;
  /**
   * User's timezone
   */
  timezone?: number;
  owner_state?: OwnerState;
  /**
   * URL of square photo of the user with 200 pixels in width
   */
  photo_200?: string;
  /**
   * URL of square photo of the user with maximum width
   */
  photo_max?: string;
  /**
   * URL of user's photo with 200 pixels in width
   */
  photo_200_orig?: string;
  /**
   * URL of user's photo with 400 pixels in width
   */
  photo_400_orig?: string;
  /**
   * URL of user's photo of maximum size
   */
  photo_max_orig?: string;
  /**
   * ID of the user's main photo
   */
  photo_id?: string;
  /**
   * Information whether the user has main photo
   */
  has_photo?: 0 | 1;
  /**
   * Information whether the user specified his phone number
   */
  has_mobile?: 0 | 1;
  /**
   * Information whether the user is a friend of current user
   */
  is_friend?: 0 | 1;
  /**
   * Information whether current user can comment wall posts
   */
  wall_comments?: 0 | 1;
  /**
   * Information whether current user can post on the user's wall
   */
  can_post?: 0 | 1;
  /**
   * Information whether current user can see other users' audio on the wall
   */
  can_see_all_posts?: 0 | 1;
  /**
   * Information whether current user can see the user's audio
   */
  can_see_audio?: 0 | 1;
  type?: UsersUserType;
  email?: string;
  skype?: string;
  facebook?: string;
  facebook_name?: string;
  twitter?: string;
  livejournal?: string;
  instagram?: string;
  test?: 0 | 1;
  video_live?: VideoLiveInfo;
  is_video_live_notifications_blocked?: 0 | 1;
  is_service?: boolean;
  service_description?: string;
  photo_rec?: boolean | string;
  photo_medium?: boolean | string;
  photo_medium_rec?: boolean | string;
  photo?: string;
  photo_big?: string;
  photo_400?: string;
  photo_max_size?: PhotosPhoto;
  language?: string;
  stories_archive_count?: number;
  wall_default?: UsersUserFullWallDefaultEnum;
  /**
   * Information whether current user can call
   */
  can_call?: boolean;
  /**
   * Information whether current user can see the user's wishes
   */
  can_see_wishes?: boolean;
  /**
   * Information whether current user can see the user's gifts
   */
  can_see_gifts?: 0 | 1;
  interests?: string;
  books?: string;
  tv?: string;
  quotes?: string;
  about?: string;
  games?: string;
  movies?: string;
  activities?: string;
  music?: string;
  /**
   * Information whether current user can write private message
   */
  can_write_private_message?: 0 | 1;
  /**
   * Information whether current user can send a friend request
   */
  can_send_friend_request?: 0 | 1;
  /**
   * Information whether current user can be invited to the community
   */
  can_be_invited_group?: boolean;
  /**
   * User's mobile phone number
   */
  mobile_phone?: string;
  /**
   * User's additional phone number
   */
  home_phone?: string;
  /**
   * User's website
   */
  site?: string;
  status_audio?: AudioAudio;
  /**
   * User's status
   */
  status?: string;
  /**
   * User's status
   */
  activity?: string;
  last_seen?: UsersLastSeen;
  exports?: UsersExports;
  crop_photo?: BaseCropPhoto;
  /**
   * Number of user's followers
   */
  followers_count?: number;
  /**
   * User level in live streams achievements
   */
  video_live_level?: number;
  /**
   * Number of user's live streams
   */
  video_live_count?: number;
  /**
   * Number of user's clips
   */
  clips_count?: number;
  /**
   * Information whether current user is in the requested user's blacklist.
   */
  blacklisted?: 0 | 1;
  /**
   * Information whether the requested user is in current user's blacklist
   */
  blacklisted_by_me?: 0 | 1;
  /**
   * Information whether the requested user is in faves of current user
   */
  is_favorite?: 0 | 1;
  /**
   * Information whether the requested user is hidden from current user's newsfeed
   */
  is_hidden_from_feed?: 0 | 1;
  /**
   * Number of common friends with current user
   */
  common_count?: number;
  occupation?: UsersOccupation;
  career?: UsersCareer[];
  military?: UsersMilitary[];
  /**
   * University ID
   */
  university?: number;
  /**
   * University name
   */
  university_name?: string;
  university_group_id?: number;
  /**
   * Faculty ID
   */
  faculty?: number;
  /**
   * Faculty name
   */
  faculty_name?: string;
  /**
   * Graduation year
   */
  graduation?: number;
  /**
   * Education form
   */
  education_form?: string;
  /**
   * User's education status
   */
  education_status?: string;
  /**
   * User hometown
   */
  home_town?: string;
  /**
   * User relationship status
   */
  relation?: UsersUserRelation;
  relation_partner?: UsersUserMin;
  personal?: UsersPersonal;
  universities?: UsersUniversity[];
  schools?: UsersSchool[];
  relatives?: UsersRelative[];
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
  counters?: UsersUserCounters;
  access_key?: string;
  can_upload_doc?: 0 | 1;
  hash?: string;
  has_email?: boolean;
  lists?: number[];
}
