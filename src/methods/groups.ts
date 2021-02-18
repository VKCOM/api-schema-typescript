/**
 * This is auto-generated file, don't modify this file manually
 */

import { GroupsAddress } from '../objects/groups/GroupsAddress';
import { GroupsBannedItem } from '../objects/groups/GroupsBannedItem';
import { GroupsCallbackServer } from '../objects/groups/GroupsCallbackServer';
import { GroupsCallbackSettings } from '../objects/groups/GroupsCallbackSettings';
import { GroupsGroup } from '../objects/groups/GroupsGroup';
import { GroupsGroupAccess } from '../objects/groups/GroupsGroupAccess';
import { GroupsGroupAgeLimits } from '../objects/groups/GroupsGroupAgeLimits';
import { GroupsGroupAudio } from '../objects/groups/GroupsGroupAudio';
import { GroupsGroupCategory } from '../objects/groups/GroupsGroupCategory';
import { GroupsGroupCategoryFull } from '../objects/groups/GroupsGroupCategoryFull';
import { GroupsGroupDocs } from '../objects/groups/GroupsGroupDocs';
import { GroupsGroupFull } from '../objects/groups/GroupsGroupFull';
import { GroupsGroupFullMainSection } from '../objects/groups/GroupsGroupFullMainSection';
import { GroupsGroupLink } from '../objects/groups/GroupsGroupLink';
import { GroupsGroupPhotos } from '../objects/groups/GroupsGroupPhotos';
import { GroupsGroupPublicCategoryList } from '../objects/groups/GroupsGroupPublicCategoryList';
import { GroupsGroupSuggestedPrivacy } from '../objects/groups/GroupsGroupSuggestedPrivacy';
import { GroupsGroupTag } from '../objects/groups/GroupsGroupTag';
import { GroupsGroupTopics } from '../objects/groups/GroupsGroupTopics';
import { GroupsGroupVideo } from '../objects/groups/GroupsGroupVideo';
import { GroupsGroupWall } from '../objects/groups/GroupsGroupWall';
import { GroupsGroupWiki } from '../objects/groups/GroupsGroupWiki';
import { GroupsLongPollServer } from '../objects/groups/GroupsLongPollServer';
import { GroupsLongPollSettings } from '../objects/groups/GroupsLongPollSettings';
import { GroupsMemberRole } from '../objects/groups/GroupsMemberRole';
import { GroupsMemberStatus } from '../objects/groups/GroupsMemberStatus';
import { GroupsMemberStatusFull } from '../objects/groups/GroupsMemberStatusFull';
import { GroupsSectionsListItem } from '../objects/groups/GroupsSectionsListItem';
import { GroupsSettingsTwitter } from '../objects/groups/GroupsSettingsTwitter';
import { GroupsSubjectItem } from '../objects/groups/GroupsSubjectItem';
import { GroupsTokenPermissionSetting } from '../objects/groups/GroupsTokenPermissionSetting';
import { GroupsUserXtrRole } from '../objects/groups/GroupsUserXtrRole';
import { UsersUserFull } from '../objects/users/UsersUserFull';
import { UsersUserMin } from '../objects/users/UsersUserMin';

/**
 * groups.addAddress
 */

export interface GroupsAddAddressParams {
  group_id: number;
  title: string;
  address: string;
  additional_address?: string;
  country_id: number;
  city_id: number;
  metro_id?: number;
  latitude: number;
  longitude: number;
  phone?: string;
  work_info_status?: 'always_opened' | 'forever_closed' | 'no_information' | 'temporarily_closed' | 'timetable';
  timetable?: string;
  is_main_address?: 0 | 1;
}

// groups.addAddress_response
export type GroupsAddAddressResponse = GroupsAddress;

/**
 * groups.addCallbackServer
 */

export interface GroupsAddCallbackServerParams {
  group_id: number;
  url: string;
  title: string;
  secret_key?: string;
}

// groups.addCallbackServer_response
export interface GroupsAddCallbackServerResponse {
  server_id: number;
}

/**
 * groups.addLink
 *
 * Allows to add a link to the community.
 */

export interface GroupsAddLinkParams {
  /**
   * Community ID.
   */
  group_id: number;
  /**
   * Link URL.
   */
  link: string;
  /**
   * Description text for the link.
   */
  text?: string;
}

// groups.addLink_response
export type GroupsAddLinkResponse = GroupsGroupLink;

/**
 * groups.approveRequest
 *
 * Allows to approve join request to the community.
 */

export interface GroupsApproveRequestParams {
  /**
   * Community ID.
   */
  group_id: number;
  /**
   * User ID.
   */
  user_id: number;
}

// groups.approveRequest_response
export type GroupsApproveRequestResponse = 1;

/**
 * groups.ban
 */

export interface GroupsBanParams {
  group_id: number;
  owner_id?: number;
  end_date?: number;
  reason?: number;
  comment?: string;
  comment_visible?: 0 | 1;
}

// groups.ban_response
export type GroupsBanResponse = 1;

/**
 * groups.create
 *
 * Creates a new community.
 */

export interface GroupsCreateParams {
  /**
   * Community title.
   */
  title: string;
  /**
   * Community description (ignored for 'type' = 'public').
   */
  description?: string;
  /**
   * Community type. Possible values: *'group' – group,, *'event' – event,, *'public' – public page
   */
  type?: 'event' | 'group' | 'public';
  /**
   * Category ID (for 'type' = 'public' only).
   */
  public_category?: number;
  /**
   * Public page subtype. Possible values: *'1' – place or small business,, *'2' – company, organization or website,, *'3' – famous person or group of people,, *'4' – product or work of art.
   */
  subtype?: 1 | 2 | 3 | 4;
}

// groups.create_response
export type GroupsCreateResponse = GroupsGroup;

/**
 * groups.deleteAddress
 */

export interface GroupsDeleteAddressParams {
  group_id: number;
  address_id: number;
}

// groups.deleteAddress_response
export type GroupsDeleteAddressResponse = 1;

/**
 * groups.deleteCallbackServer
 */

export interface GroupsDeleteCallbackServerParams {
  group_id: number;
  server_id: number;
}

// groups.deleteCallbackServer_response
export type GroupsDeleteCallbackServerResponse = 1;

/**
 * groups.deleteLink
 *
 * Allows to delete a link from the community.
 */

export interface GroupsDeleteLinkParams {
  /**
   * Community ID.
   */
  group_id: number;
  /**
   * Link ID.
   */
  link_id: number;
}

// groups.deleteLink_response
export type GroupsDeleteLinkResponse = 1;

/**
 * groups.disableOnline
 */

export interface GroupsDisableOnlineParams {
  group_id: number;
}

// groups.disableOnline_response
export type GroupsDisableOnlineResponse = 1;

/**
 * groups.edit
 *
 * Edits a community.
 */

export interface GroupsEditParams {
  /**
   * Community ID.
   */
  group_id: number;
  /**
   * Community title.
   */
  title?: string;
  /**
   * Community description.
   */
  description?: string;
  /**
   * Community screen name.
   */
  screen_name?: string;
  /**
   * Community type. Possible values: *'0' – open,, *'1' – closed,, *'2' – private.
   */
  access?: number;
  /**
   * Website that will be displayed in the community information field.
   */
  website?: string;
  /**
   * Community subject. Possible values: , *'1' – auto/moto,, *'2' – activity holidays,, *'3' – business,, *'4' – pets,, *'5' – health,, *'6' – dating and communication, , *'7' – games,, *'8' – IT (computers and software),, *'9' – cinema,, *'10' – beauty and fashion,, *'11' – cooking,, *'12' – art and culture,, *'13' – literature,, *'14' – mobile services and internet,, *'15' – music,, *'16' – science and technology,, *'17' – real estate,, *'18' – news and media,, *'19' – security,, *'20' – education,, *'21' – home and renovations,, *'22' – politics,, *'23' – food,, *'24' – industry,, *'25' – travel,, *'26' – work,, *'27' – entertainment,, *'28' – religion,, *'29' – family,, *'30' – sports,, *'31' – insurance,, *'32' – television,, *'33' – goods and services,, *'34' – hobbies,, *'35' – finance,, *'36' – photo,, *'37' – esoterics,, *'38' – electronics and appliances,, *'39' – erotic,, *'40' – humor,, *'41' – society, humanities,, *'42' – design and graphics.
   */
  subject?: string;
  /**
   * Organizer email (for events).
   */
  email?: string;
  /**
   * Organizer phone number (for events).
   */
  phone?: string;
  /**
   * RSS feed address for import (available only to communities with special permission. Contact vk.com/support to get it.
   */
  rss?: string;
  /**
   * Event start date in Unixtime format.
   */
  event_start_date?: number;
  /**
   * Event finish date in Unixtime format.
   */
  event_finish_date?: number;
  /**
   * Organizer community ID (for events only).
   */
  event_group_id?: number;
  /**
   * Public page category ID.
   */
  public_category?: number;
  /**
   * Public page subcategory ID.
   */
  public_subcategory?: number;
  /**
   * Founding date of a company or organization owning the community in "dd.mm.YYYY" format.
   */
  public_date?: string;
  /**
   * Wall settings. Possible values: *'0' – disabled,, *'1' – open,, *'2' – limited (groups and events only),, *'3' – closed (groups and events only).
   */
  wall?: number;
  /**
   * Board topics settings. Possbile values: , *'0' – disabled,, *'1' – open,, *'2' – limited (for groups and events only).
   */
  topics?: number;
  /**
   * Photos settings. Possible values: *'0' – disabled,, *'1' – open,, *'2' – limited (for groups and events only).
   */
  photos?: number;
  /**
   * Video settings. Possible values: *'0' – disabled,, *'1' – open,, *'2' – limited (for groups and events only).
   */
  video?: number;
  /**
   * Audio settings. Possible values: *'0' – disabled,, *'1' – open,, *'2' – limited (for groups and events only).
   */
  audio?: number;
  /**
   * Links settings (for public pages only). Possible values: *'0' – disabled,, *'1' – enabled.
   */
  links?: 0 | 1;
  /**
   * Events settings (for public pages only). Possible values: *'0' – disabled,, *'1' – enabled.
   */
  events?: 0 | 1;
  /**
   * Places settings (for public pages only). Possible values: *'0' – disabled,, *'1' – enabled.
   */
  places?: 0 | 1;
  /**
   * Contacts settings (for public pages only). Possible values: *'0' – disabled,, *'1' – enabled.
   */
  contacts?: 0 | 1;
  /**
   * Documents settings. Possible values: *'0' – disabled,, *'1' – open,, *'2' – limited (for groups and events only).
   */
  docs?: number;
  /**
   * Wiki pages settings. Possible values: *'0' – disabled,, *'1' – open,, *'2' – limited (for groups and events only).
   */
  wiki?: number;
  /**
   * Community messages. Possible values: *'0' — disabled,, *'1' — enabled.
   */
  messages?: 0 | 1;
  articles?: 0 | 1;
  addresses?: 0 | 1;
  /**
   * Community age limits. Possible values: *'1' — no limits,, *'2' — 16+,, *'3' — 18+.
   */
  age_limits?: 1 | 2 | 3;
  /**
   * Market settings. Possible values: *'0' – disabled,, *'1' – enabled.
   */
  market?: 0 | 1;
  /**
   * market comments settings. Possible values: *'0' – disabled,, *'1' – enabled.
   */
  market_comments?: 0 | 1;
  /**
   * Market delivery countries.
   */
  market_country?: string;
  /**
   * Market delivery cities (if only one country is specified).
   */
  market_city?: string;
  /**
   * Market currency settings. Possbile values: , *'643' – Russian rubles,, *'980' – Ukrainian hryvnia,, *'398' – Kazakh tenge,, *'978' – Euro,, *'840' – US dollars
   */
  market_currency?: number;
  /**
   * Seller contact for market. Set '0' for community messages.
   */
  market_contact?: number;
  /**
   * ID of a wiki page with market description.
   */
  market_wiki?: number;
  /**
   * Obscene expressions filter in comments. Possible values: , *'0' – disabled,, *'1' – enabled.
   */
  obscene_filter?: 0 | 1;
  /**
   * Stopwords filter in comments. Possible values: , *'0' – disabled,, *'1' – enabled.
   */
  obscene_stopwords?: 0 | 1;
  /**
   * Keywords for stopwords filter.
   */
  obscene_words?: string;
  main_section?: number;
  secondary_section?: number;
  /**
   * Country of the community.
   */
  country?: number;
  /**
   * City of the community.
   */
  city?: number;
}

// groups.edit_response
export type GroupsEditResponse = 1;

/**
 * groups.editAddress
 */

export interface GroupsEditAddressParams {
  group_id: number;
  address_id: number;
  title?: string;
  address?: string;
  additional_address?: string;
  country_id?: number;
  city_id?: number;
  metro_id?: number;
  latitude?: number;
  longitude?: number;
  phone?: string;
  work_info_status?: 'always_opened' | 'forever_closed' | 'no_information' | 'temporarily_closed' | 'timetable';
  timetable?: string;
  is_main_address?: 0 | 1;
}

// groups.editAddress_response
export type GroupsEditAddressResponse = GroupsAddress;

/**
 * groups.editCallbackServer
 */

export interface GroupsEditCallbackServerParams {
  group_id: number;
  server_id: number;
  url: string;
  title: string;
  secret_key?: string;
}

// groups.editCallbackServer_response
export type GroupsEditCallbackServerResponse = 1;

/**
 * groups.editLink
 *
 * Allows to edit a link in the community.
 */

export interface GroupsEditLinkParams {
  /**
   * Community ID.
   */
  group_id: number;
  /**
   * Link ID.
   */
  link_id: number;
  /**
   * New description text for the link.
   */
  text?: string;
}

// groups.editLink_response
export type GroupsEditLinkResponse = 1;

/**
 * groups.editManager
 *
 * Allows to add, remove or edit the community manager.
 */

export interface GroupsEditManagerParams {
  /**
   * Community ID.
   */
  group_id: number;
  /**
   * User ID.
   */
  user_id: number;
  /**
   * Manager role. Possible values: *'moderator',, *'editor',, *'administrator',, *'advertiser'.
   */
  role?: string;
  /**
   * '1' — to show the manager in Contacts block of the community.
   */
  is_contact?: 0 | 1;
  /**
   * Position to show in Contacts block.
   */
  contact_position?: string;
  /**
   * Contact phone.
   */
  contact_phone?: string;
  /**
   * Contact e-mail.
   */
  contact_email?: string;
}

// groups.editManager_response
export type GroupsEditManagerResponse = 1;

/**
 * groups.enableOnline
 */

export interface GroupsEnableOnlineParams {
  group_id: number;
}

// groups.enableOnline_response
export type GroupsEnableOnlineResponse = 1;

/**
 * groups.get
 *
 * Returns a list of the communities to which a user belongs.
 */

export interface GroupsGetParams {
  /**
   * User ID.
   */
  user_id?: number;
  /**
   * '1' — to return complete information about a user's communities, '0' — to return a list of community IDs without any additional fields (default),
   */
  extended?: 0 | 1;
  /**
   * Types of communities to return: 'admin' — to return communities administered by the user , 'editor' — to return communities where the user is an administrator or editor, 'moder' — to return communities where the user is an administrator, editor, or moderator, 'groups' — to return only groups, 'publics' — to return only public pages, 'events' — to return only events
   *
   * objects.json#/definitions/groups_filter
   */
  filter?: string;
  /**
   * Profile fields to return.
   *
   * objects.json#/definitions/groups_fields
   */
  fields?: string;
  /**
   * Offset needed to return a specific subset of communities.
   */
  offset?: number;
  /**
   * Number of communities to return.
   */
  count?: number;
}

// groups.get_response
export interface GroupsGetResponse {
  /**
   * Total communities number
   */
  count: number;
  items: number[];
}

// groups.get_extendedResponse
export interface GroupsGetExtendedResponse {
  /**
   * Total communities number
   */
  count: number;
  items: GroupsGroupFull[];
}

/**
 * groups.getAddresses
 *
 * Returns a list of community addresses.
 */

export interface GroupsGetAddressesParams {
  /**
   * ID or screen name of the community.
   */
  group_id: number;
  address_ids?: string;
  /**
   * Latitude of  the user geo position.
   */
  latitude?: number;
  /**
   * Longitude of the user geo position.
   */
  longitude?: number;
  /**
   * Offset needed to return a specific subset of community addresses.
   */
  offset?: number;
  /**
   * Number of community addresses to return.
   */
  count?: number;
  /**
   * Address fields
   *
   * objects.json#/definitions/addresses_fields
   */
  fields?: string;
}

// groups.getAddresses_response
export interface GroupsGetAddressesResponse {
  /**
   * Total count of addresses
   */
  count: number;
  items: GroupsAddress[];
}

/**
 * groups.getBanned
 *
 * Returns a list of users on a community blacklist.
 */

export interface GroupsGetBannedParams {
  /**
   * Community ID.
   */
  group_id: number;
  /**
   * Offset needed to return a specific subset of users.
   */
  offset?: number;
  /**
   * Number of users to return.
   */
  count?: number;
  /**
   * objects.json#/definitions/base_user_group_fields
   */
  fields?: string;
  owner_id?: number;
}

// groups.getBanned_response
export interface GroupsGetBannedResponse {
  /**
   * Total users number
   */
  count: number;
  items: GroupsBannedItem[];
}

/**
 * groups.getById
 *
 * Returns information about communities by their IDs.
 */

export interface GroupsGetByIdParams {
  /**
   * IDs or screen names of communities.
   */
  group_ids?: string;
  /**
   * ID or screen name of the community.
   */
  group_id?: string;
  /**
   * Group fields to return.
   *
   * objects.json#/definitions/groups_fields
   */
  fields?: string;
}

// groups.getById_response
export type GroupsGetByIdResponse = GroupsGroupFull[];

/**
 * groups.getCallbackConfirmationCode
 *
 * Returns Callback API confirmation code for the community.
 */

export interface GroupsGetCallbackConfirmationCodeParams {
  /**
   * Community ID.
   */
  group_id: number;
}

// groups.getCallbackConfirmationCode_response
export interface GroupsGetCallbackConfirmationCodeResponse {
  /**
   * Confirmation code
   */
  code: string;
}

/**
 * groups.getCallbackServers
 */

export interface GroupsGetCallbackServersParams {
  group_id: number;
  server_ids?: string;
}

// groups.getCallbackServers_response
export interface GroupsGetCallbackServersResponse {
  count: number;
  items: GroupsCallbackServer[];
}

/**
 * groups.getCallbackSettings
 *
 * Returns [vk.com/dev/callback_api|Callback API] notifications settings.
 */

export interface GroupsGetCallbackSettingsParams {
  /**
   * Community ID.
   */
  group_id: number;
  /**
   * Server ID.
   */
  server_id?: number;
}

// groups.getCallbackSettings_response
export type GroupsGetCallbackSettingsResponse = GroupsCallbackSettings;

/**
 * groups.getCatalog
 *
 * Returns communities list for a catalog category.
 */

export interface GroupsGetCatalogParams {
  /**
   * Category id received from [vk.com/dev/groups.getCatalogInfo|groups.getCatalogInfo].
   */
  category_id?: number;
  /**
   * Subcategory id received from [vk.com/dev/groups.getCatalogInfo|groups.getCatalogInfo].
   */
  subcategory_id?: number;
}

// groups.getCatalog_response
export interface GroupsGetCatalogResponse {
  /**
   * Total communities number
   */
  count: number;
  items: GroupsGroup[];
}

/**
 * groups.getCatalogInfo
 *
 * Returns categories list for communities catalog
 */

export interface GroupsGetCatalogInfoParams {
  /**
   * 1 – to return communities count and three communities for preview. By default: 0.
   */
  extended?: 0 | 1;
  /**
   * 1 – to return subcategories info. By default: 0.
   */
  subcategories?: 0 | 1;
}

// groups.getCatalogInfo_response
export interface GroupsGetCatalogInfoResponse {
  /**
   * Information whether catalog is enabled for current user
   */
  enabled: number;
  categories?: GroupsGroupCategory[];
}

// groups.getCatalogInfo_extendedResponse
export interface GroupsGetCatalogInfoExtendedResponse {
  /**
   * Information whether catalog is enabled for current user
   */
  enabled: number;
  categories?: GroupsGroupCategoryFull[];
}

/**
 * groups.getInvitedUsers
 *
 * Returns invited users list of a community
 */

export interface GroupsGetInvitedUsersParams {
  /**
   * Group ID to return invited users for.
   */
  group_id: number;
  /**
   * Offset needed to return a specific subset of results.
   */
  offset?: number;
  /**
   * Number of results to return.
   */
  count?: number;
  /**
   * List of additional fields to be returned. Available values: 'sex, bdate, city, country, photo_50, photo_100, photo_200_orig, photo_200, photo_400_orig, photo_max, photo_max_orig, online, online_mobile, lists, domain, has_mobile, contacts, connections, site, education, universities, schools, can_post, can_see_all_posts, can_see_audio, can_write_private_message, status, last_seen, common_count, relation, relatives, counters'.
   *
   * objects.json#/definitions/users_fields
   */
  fields?: string;
  /**
   * Case for declension of user name and surname. Possible values: *'nom' — nominative (default),, *'gen' — genitive,, *'dat' — dative,, *'acc' — accusative, , *'ins' — instrumental,, *'abl' — prepositional.
   */
  name_case?: 'nom' | 'gen' | 'dat' | 'acc' | 'ins' | 'abl';
}

// groups.getInvitedUsers_response
export interface GroupsGetInvitedUsersResponse {
  /**
   * Total communities number
   */
  count: number;
  items: UsersUserFull[];
}

/**
 * groups.getInvites
 *
 * Returns a list of invitations to join communities and events.
 */

export interface GroupsGetInvitesParams {
  /**
   * Offset needed to return a specific subset of invitations.
   */
  offset?: number;
  /**
   * Number of invitations to return.
   */
  count?: number;
  /**
   * '1' — to return additional [vk.com/dev/fields_groups|fields] for communities..
   */
  extended?: 0 | 1;
}

// groups.getInvites_response
export interface GroupsGetInvitesResponse {
  /**
   * Total communities number
   */
  count: number;
  items: GroupsGroupFull[];
}

// groups.getInvites_extendedResponse
export interface GroupsGetInvitesExtendedResponse {
  /**
   * Total communities number
   */
  count: number;
  items: GroupsGroupFull[];
  profiles: UsersUserMin[];
  groups: GroupsGroupFull[];
}

/**
 * groups.getLongPollServer
 *
 * Returns the data needed to query a Long Poll server for events
 */

export interface GroupsGetLongPollServerParams {
  /**
   * Community ID
   */
  group_id: number;
}

// groups.getLongPollServer_response
export type GroupsGetLongPollServerResponse = GroupsLongPollServer;

/**
 * groups.getLongPollSettings
 *
 * Returns Long Poll notification settings
 */

export interface GroupsGetLongPollSettingsParams {
  /**
   * Community ID.
   */
  group_id: number;
}

// groups.getLongPollSettings_response
export type GroupsGetLongPollSettingsResponse = GroupsLongPollSettings;

/**
 * groups.getMembers
 *
 * Returns a list of community members.
 */

export interface GroupsGetMembersParams {
  /**
   * ID or screen name of the community.
   */
  group_id?: string;
  /**
   * Sort order. Available values: 'id_asc', 'id_desc', 'time_asc', 'time_desc'. 'time_asc' and 'time_desc' are availavle only if the method is called by the group's 'moderator'.
   */
  sort?: 'id_asc' | 'id_desc' | 'time_asc' | 'time_desc';
  /**
   * Offset needed to return a specific subset of community members.
   */
  offset?: number;
  /**
   * Number of community members to return.
   */
  count?: number;
  /**
   * List of additional fields to be returned. Available values: 'sex, bdate, city, country, photo_50, photo_100, photo_200_orig, photo_200, photo_400_orig, photo_max, photo_max_orig, online, online_mobile, lists, domain, has_mobile, contacts, connections, site, education, universities, schools, can_post, can_see_all_posts, can_see_audio, can_write_private_message, status, last_seen, common_count, relation, relatives, counters'.
   *
   * objects.json#/definitions/users_fields
   */
  fields?: string;
  /**
   * *'friends' – only friends in this community will be returned,, *'unsure' – only those who pressed 'I may attend' will be returned (if it's an event).
   */
  filter?: 'friends' | 'unsure' | 'managers' | 'donut';
}

// groups.getMembers_response
export interface GroupsGetMembersResponse {
  /**
   * Total members number
   */
  count: number;
  items: number[];
}

// groups.getMembers_fieldsResponse
export interface GroupsGetMembersFieldsResponse {
  /**
   * Total members number
   */
  count: number;
  items: GroupsUserXtrRole[];
}

// groups.getMembers_filterResponse
export interface GroupsGetMembersFilterResponse {
  /**
   * Total members number
   */
  count: number;
  items: GroupsMemberRole[];
}

/**
 * groups.getRequests
 *
 * Returns a list of requests to the community.
 */

export interface GroupsGetRequestsParams {
  /**
   * Community ID.
   */
  group_id: number;
  /**
   * Offset needed to return a specific subset of results.
   */
  offset?: number;
  /**
   * Number of results to return.
   */
  count?: number;
  /**
   * Profile fields to return.
   *
   * objects.json#/definitions/users_fields
   */
  fields?: string;
}

// groups.getRequests_response
export interface GroupsGetRequestsResponse {
  /**
   * Total communities number
   */
  count: number;
  items: number[];
}

// groups.getRequests_fieldsResponse
export interface GroupsGetRequestsFieldsResponse {
  /**
   * Total communities number
   */
  count: number;
  items: UsersUserFull[];
}

/**
 * groups.getSettings
 *
 * Returns community settings.
 */

export interface GroupsGetSettingsParams {
  /**
   * Community ID.
   */
  group_id: number;
}

// groups.getSettings_response
export interface GroupsGetSettingsResponse {
  /**
   * Community access settings
   */
  access?: GroupsGroupAccess;
  /**
   * Community's page domain
   */
  address?: string;
  /**
   * Audio settings
   */
  audio: GroupsGroupAudio;
  /**
   * Articles settings
   */
  articles: number;
  /**
   * Photo suggests setting
   */
  recognize_photo?: number;
  /**
   * City id of group
   */
  city_id: number;
  contacts?: 0 | 1;
  links?: 0 | 1;
  sections_list?: GroupsSectionsListItem[];
  main_section?: GroupsGroupFullMainSection;
  secondary_section?: number;
  age_limits?: GroupsGroupAgeLimits;
  /**
   * Country id of group
   */
  country_id: number;
  /**
   * Community description
   */
  description: string;
  /**
   * Docs settings
   */
  docs: GroupsGroupDocs;
  events?: 0 | 1;
  /**
   * Information whether the obscene filter is enabled
   */
  obscene_filter: 0 | 1;
  /**
   * Information whether the stop words filter is enabled
   */
  obscene_stopwords: 0 | 1;
  /**
   * The list of stop words
   */
  obscene_words: string[];
  event_group_id?: number;
  /**
   * Photos settings
   */
  photos: GroupsGroupPhotos;
  /**
   * Information about the group category
   */
  public_category?: number;
  public_category_list?: GroupsGroupPublicCategoryList[];
  public_date?: string;
  public_date_label?: string;
  /**
   * Information about the group subcategory
   */
  public_subcategory?: number;
  /**
   * URL of the RSS feed
   */
  rss?: string;
  /**
   * Start date
   */
  start_date?: number;
  /**
   * Finish date in Unix-time format
   */
  finish_date?: number;
  /**
   * Community subject ID
   */
  subject?: number;
  subject_list?: GroupsSubjectItem[];
  suggested_privacy?: GroupsGroupSuggestedPrivacy;
  /**
   * Community title
   */
  title: string;
  /**
   * Topics settings
   */
  topics: GroupsGroupTopics;
  twitter?: GroupsSettingsTwitter;
  /**
   * Video settings
   */
  video: GroupsGroupVideo;
  /**
   * Wall settings
   */
  wall: GroupsGroupWall;
  /**
   * Community website
   */
  website?: string;
  /**
   * Community phone
   */
  phone?: string;
  /**
   * Community email
   */
  email?: string;
  /**
   * Wiki settings
   */
  wiki: GroupsGroupWiki;
}

/**
 * groups.getTagList
 *
 * List of group's tags
 */

export interface GroupsGetTagListParams {
  group_id: number;
}

// groups.getTagList_response
export type GroupsGetTagListResponse = GroupsGroupTag[];

/**
 * groups.getTokenPermissions
 */

export interface GroupsGetTokenPermissionsParams {}

// groups.getTokenPermissions_response
export interface GroupsGetTokenPermissionsResponse {
  mask: number;
  permissions: GroupsTokenPermissionSetting[];
}

/**
 * groups.invite
 *
 * Allows to invite friends to the community.
 */

export interface GroupsInviteParams {
  /**
   * Community ID.
   */
  group_id: number;
  /**
   * User ID.
   */
  user_id: number;
}

// groups.invite_response
export type GroupsInviteResponse = 1;

/**
 * groups.isMember
 *
 * Returns information specifying whether a user is a member of a community.
 */

export interface GroupsIsMemberParams {
  /**
   * ID or screen name of the community.
   */
  group_id: string;
  /**
   * User ID.
   */
  user_id?: number;
  /**
   * User IDs.
   */
  user_ids?: string;
  /**
   * '1' — to return an extended response with additional fields. By default: '0'.
   */
  extended?: 0 | 1;
}

// groups.isMember_response
export type GroupsIsMemberResponse = 0 | 1;

// groups.isMember_userIdsResponse
export type GroupsIsMemberUserIdsResponse = GroupsMemberStatus[];

// groups.isMember_extendedResponse
export interface GroupsIsMemberExtendedResponse {
  /**
   * Information whether user is a member of the group
   */
  member: 0 | 1;
  /**
   * Information whether user has been invited to the group
   */
  invitation?: 0 | 1;
  /**
   * Information whether user can be invited
   */
  can_invite?: 0 | 1;
  /**
   * Information whether user's invite to the group can be recalled
   */
  can_recall?: 0 | 1;
  /**
   * Information whether user has sent request to the group
   */
  request?: 0 | 1;
}

// groups.isMember_userIds_Extended_Response
export type GroupsIsMemberUserIdsExtendedResponse = GroupsMemberStatusFull[];

/**
 * groups.join
 *
 * With this method you can join the group or public page, and also confirm your participation in an event.
 */

export interface GroupsJoinParams {
  /**
   * ID or screen name of the community.
   */
  group_id?: number;
  /**
   * Optional parameter which is taken into account when 'gid' belongs to the event: '1' — Perhaps I will attend, '0' — I will be there for sure (default), ,
   */
  not_sure?: string;
}

// groups.join_response
export type GroupsJoinResponse = 1;

/**
 * groups.leave
 *
 * With this method you can leave a group, public page, or event.
 */

export interface GroupsLeaveParams {
  /**
   * ID or screen name of the community.
   */
  group_id: number;
}

// groups.leave_response
export type GroupsLeaveResponse = 1;

/**
 * groups.removeUser
 *
 * Removes a user from the community.
 */

export interface GroupsRemoveUserParams {
  /**
   * Community ID.
   */
  group_id: number;
  /**
   * User ID.
   */
  user_id: number;
}

// groups.removeUser_response
export type GroupsRemoveUserResponse = 1;

/**
 * groups.reorderLink
 *
 * Allows to reorder links in the community.
 */

export interface GroupsReorderLinkParams {
  /**
   * Community ID.
   */
  group_id: number;
  /**
   * Link ID.
   */
  link_id: number;
  /**
   * ID of the link after which to place the link with 'link_id'.
   */
  after?: number;
}

// groups.reorderLink_response
export type GroupsReorderLinkResponse = 1;

/**
 * groups.search
 *
 * Returns a list of communities matching the search criteria.
 */

export interface GroupsSearchParams {
  /**
   * Search query string.
   */
  q: string;
  /**
   * Community type. Possible values: 'group, page, event.'
   */
  type?: 'group' | 'page' | 'event';
  /**
   * Country ID.
   */
  country_id?: number;
  /**
   * City ID. If this parameter is transmitted, country_id is ignored.
   */
  city_id?: number;
  /**
   * '1' — to return only upcoming events. Works with the 'type' = 'event' only.
   */
  future?: 0 | 1;
  /**
   * '1' — to return communities with enabled market only.
   */
  market?: 0 | 1;
  /**
   * Sort order. Possible values: *'0' — default sorting (similar the full version of the site),, *'1' — by growth speed,, *'2'— by the "day attendance/members number" ratio,, *'3' — by the "Likes number/members number" ratio,, *'4' — by the "comments number/members number" ratio,, *'5' — by the "boards entries number/members number" ratio.
   */
  sort?: 0 | 1 | 2 | 3 | 4 | 5;
  /**
   * Offset needed to return a specific subset of results.
   */
  offset?: number;
  /**
   * Number of communities to return. "Note that you can not receive more than first thousand of results, regardless of 'count' and 'offset' values."
   */
  count?: number;
}

// groups.search_response
export interface GroupsSearchResponse {
  /**
   * Total communities number
   */
  count: number;
  items: GroupsGroup[];
}

/**
 * groups.setCallbackSettings
 *
 * Allow to set notifications settings for group.
 */

export interface GroupsSetCallbackSettingsParams {
  /**
   * Community ID.
   */
  group_id: number;
  /**
   * Server ID.
   */
  server_id?: number;
  api_version?: string;
  /**
   * A new incoming message has been received ('0' — disabled, '1' — enabled).
   */
  message_new?: 0 | 1;
  /**
   * A new outcoming message has been received ('0' — disabled, '1' — enabled).
   */
  message_reply?: 0 | 1;
  /**
   * Allowed messages notifications ('0' — disabled, '1' — enabled).
   */
  message_allow?: 0 | 1;
  message_edit?: 0 | 1;
  /**
   * Denied messages notifications ('0' — disabled, '1' — enabled).
   */
  message_deny?: 0 | 1;
  message_typing_state?: 0 | 1;
  /**
   * New photos notifications ('0' — disabled, '1' — enabled).
   */
  photo_new?: 0 | 1;
  /**
   * New audios notifications ('0' — disabled, '1' — enabled).
   */
  audio_new?: 0 | 1;
  /**
   * New videos notifications ('0' — disabled, '1' — enabled).
   */
  video_new?: 0 | 1;
  /**
   * New wall replies notifications ('0' — disabled, '1' — enabled).
   */
  wall_reply_new?: 0 | 1;
  /**
   * Wall replies edited notifications ('0' — disabled, '1' — enabled).
   */
  wall_reply_edit?: 0 | 1;
  /**
   * A wall comment has been deleted ('0' — disabled, '1' — enabled).
   */
  wall_reply_delete?: 0 | 1;
  /**
   * A wall comment has been restored ('0' — disabled, '1' — enabled).
   */
  wall_reply_restore?: 0 | 1;
  /**
   * New wall posts notifications ('0' — disabled, '1' — enabled).
   */
  wall_post_new?: 0 | 1;
  /**
   * New wall posts notifications ('0' — disabled, '1' — enabled).
   */
  wall_repost?: 0 | 1;
  /**
   * New board posts notifications ('0' — disabled, '1' — enabled).
   */
  board_post_new?: 0 | 1;
  /**
   * Board posts edited notifications ('0' — disabled, '1' — enabled).
   */
  board_post_edit?: 0 | 1;
  /**
   * Board posts restored notifications ('0' — disabled, '1' — enabled).
   */
  board_post_restore?: 0 | 1;
  /**
   * Board posts deleted notifications ('0' — disabled, '1' — enabled).
   */
  board_post_delete?: 0 | 1;
  /**
   * New comment to photo notifications ('0' — disabled, '1' — enabled).
   */
  photo_comment_new?: 0 | 1;
  /**
   * A photo comment has been edited ('0' — disabled, '1' — enabled).
   */
  photo_comment_edit?: 0 | 1;
  /**
   * A photo comment has been deleted ('0' — disabled, '1' — enabled).
   */
  photo_comment_delete?: 0 | 1;
  /**
   * A photo comment has been restored ('0' — disabled, '1' — enabled).
   */
  photo_comment_restore?: 0 | 1;
  /**
   * New comment to video notifications ('0' — disabled, '1' — enabled).
   */
  video_comment_new?: 0 | 1;
  /**
   * A video comment has been edited ('0' — disabled, '1' — enabled).
   */
  video_comment_edit?: 0 | 1;
  /**
   * A video comment has been deleted ('0' — disabled, '1' — enabled).
   */
  video_comment_delete?: 0 | 1;
  /**
   * A video comment has been restored ('0' — disabled, '1' — enabled).
   */
  video_comment_restore?: 0 | 1;
  /**
   * New comment to market item notifications ('0' — disabled, '1' — enabled).
   */
  market_comment_new?: 0 | 1;
  /**
   * A market comment has been edited ('0' — disabled, '1' — enabled).
   */
  market_comment_edit?: 0 | 1;
  /**
   * A market comment has been deleted ('0' — disabled, '1' — enabled).
   */
  market_comment_delete?: 0 | 1;
  /**
   * A market comment has been restored ('0' — disabled, '1' — enabled).
   */
  market_comment_restore?: 0 | 1;
  market_order_new?: 0 | 1;
  market_order_edit?: 0 | 1;
  /**
   * A vote in a public poll has been added ('0' — disabled, '1' — enabled).
   */
  poll_vote_new?: 0 | 1;
  /**
   * Joined community notifications ('0' — disabled, '1' — enabled).
   */
  group_join?: 0 | 1;
  /**
   * Left community notifications ('0' — disabled, '1' — enabled).
   */
  group_leave?: 0 | 1;
  group_change_settings?: 0 | 1;
  group_change_photo?: 0 | 1;
  group_officers_edit?: 0 | 1;
  /**
   * User added to community blacklist
   */
  user_block?: 0 | 1;
  /**
   * User removed from community blacklist
   */
  user_unblock?: 0 | 1;
  /**
   * New form in lead forms
   */
  lead_forms_new?: 0 | 1;
  like_add?: 0 | 1;
  like_remove?: 0 | 1;
  message_event?: 0 | 1;
  donut_subscription_create?: 0 | 1;
  donut_subscription_prolonged?: 0 | 1;
  donut_subscription_cancelled?: 0 | 1;
  donut_subscription_price_changed?: 0 | 1;
  donut_subscription_expired?: 0 | 1;
  donut_money_withdraw?: 0 | 1;
  donut_money_withdraw_error?: 0 | 1;
}

// groups.setCallbackSettings_response
export type GroupsSetCallbackSettingsResponse = 1;

/**
 * groups.setLongPollSettings
 *
 * Sets Long Poll notification settings
 */

export interface GroupsSetLongPollSettingsParams {
  /**
   * Community ID.
   */
  group_id: number;
  /**
   * Sets whether Long Poll is enabled ('0' — disabled, '1' — enabled).
   */
  enabled?: 0 | 1;
  api_version?: string;
  /**
   * A new incoming message has been received ('0' — disabled, '1' — enabled).
   */
  message_new?: 0 | 1;
  /**
   * A new outcoming message has been received ('0' — disabled, '1' — enabled).
   */
  message_reply?: 0 | 1;
  /**
   * Allowed messages notifications ('0' — disabled, '1' — enabled).
   */
  message_allow?: 0 | 1;
  /**
   * Denied messages notifications ('0' — disabled, '1' — enabled).
   */
  message_deny?: 0 | 1;
  /**
   * A message has been edited ('0' — disabled, '1' — enabled).
   */
  message_edit?: 0 | 1;
  message_typing_state?: 0 | 1;
  /**
   * New photos notifications ('0' — disabled, '1' — enabled).
   */
  photo_new?: 0 | 1;
  /**
   * New audios notifications ('0' — disabled, '1' — enabled).
   */
  audio_new?: 0 | 1;
  /**
   * New videos notifications ('0' — disabled, '1' — enabled).
   */
  video_new?: 0 | 1;
  /**
   * New wall replies notifications ('0' — disabled, '1' — enabled).
   */
  wall_reply_new?: 0 | 1;
  /**
   * Wall replies edited notifications ('0' — disabled, '1' — enabled).
   */
  wall_reply_edit?: 0 | 1;
  /**
   * A wall comment has been deleted ('0' — disabled, '1' — enabled).
   */
  wall_reply_delete?: 0 | 1;
  /**
   * A wall comment has been restored ('0' — disabled, '1' — enabled).
   */
  wall_reply_restore?: 0 | 1;
  /**
   * New wall posts notifications ('0' — disabled, '1' — enabled).
   */
  wall_post_new?: 0 | 1;
  /**
   * New wall posts notifications ('0' — disabled, '1' — enabled).
   */
  wall_repost?: 0 | 1;
  /**
   * New board posts notifications ('0' — disabled, '1' — enabled).
   */
  board_post_new?: 0 | 1;
  /**
   * Board posts edited notifications ('0' — disabled, '1' — enabled).
   */
  board_post_edit?: 0 | 1;
  /**
   * Board posts restored notifications ('0' — disabled, '1' — enabled).
   */
  board_post_restore?: 0 | 1;
  /**
   * Board posts deleted notifications ('0' — disabled, '1' — enabled).
   */
  board_post_delete?: 0 | 1;
  /**
   * New comment to photo notifications ('0' — disabled, '1' — enabled).
   */
  photo_comment_new?: 0 | 1;
  /**
   * A photo comment has been edited ('0' — disabled, '1' — enabled).
   */
  photo_comment_edit?: 0 | 1;
  /**
   * A photo comment has been deleted ('0' — disabled, '1' — enabled).
   */
  photo_comment_delete?: 0 | 1;
  /**
   * A photo comment has been restored ('0' — disabled, '1' — enabled).
   */
  photo_comment_restore?: 0 | 1;
  /**
   * New comment to video notifications ('0' — disabled, '1' — enabled).
   */
  video_comment_new?: 0 | 1;
  /**
   * A video comment has been edited ('0' — disabled, '1' — enabled).
   */
  video_comment_edit?: 0 | 1;
  /**
   * A video comment has been deleted ('0' — disabled, '1' — enabled).
   */
  video_comment_delete?: 0 | 1;
  /**
   * A video comment has been restored ('0' — disabled, '1' — enabled).
   */
  video_comment_restore?: 0 | 1;
  /**
   * New comment to market item notifications ('0' — disabled, '1' — enabled).
   */
  market_comment_new?: 0 | 1;
  /**
   * A market comment has been edited ('0' — disabled, '1' — enabled).
   */
  market_comment_edit?: 0 | 1;
  /**
   * A market comment has been deleted ('0' — disabled, '1' — enabled).
   */
  market_comment_delete?: 0 | 1;
  /**
   * A market comment has been restored ('0' — disabled, '1' — enabled).
   */
  market_comment_restore?: 0 | 1;
  /**
   * A vote in a public poll has been added ('0' — disabled, '1' — enabled).
   */
  poll_vote_new?: 0 | 1;
  /**
   * Joined community notifications ('0' — disabled, '1' — enabled).
   */
  group_join?: 0 | 1;
  /**
   * Left community notifications ('0' — disabled, '1' — enabled).
   */
  group_leave?: 0 | 1;
  group_change_settings?: 0 | 1;
  group_change_photo?: 0 | 1;
  group_officers_edit?: 0 | 1;
  /**
   * User added to community blacklist
   */
  user_block?: 0 | 1;
  /**
   * User removed from community blacklist
   */
  user_unblock?: 0 | 1;
  like_add?: 0 | 1;
  like_remove?: 0 | 1;
  message_event?: 0 | 1;
  donut_subscription_create?: 0 | 1;
  donut_subscription_prolonged?: 0 | 1;
  donut_subscription_cancelled?: 0 | 1;
  donut_subscription_price_changed?: 0 | 1;
  donut_subscription_expired?: 0 | 1;
  donut_money_withdraw?: 0 | 1;
  donut_money_withdraw_error?: 0 | 1;
}

// groups.setLongPollSettings_response
export type GroupsSetLongPollSettingsResponse = 1;

/**
 * groups.setSettings
 */

export interface GroupsSetSettingsParams {
  group_id: number;
  messages?: 0 | 1;
  bots_capabilities?: 0 | 1;
  bots_start_button?: 0 | 1;
  bots_add_to_chat?: 0 | 1;
}

// groups.setSettings_response
export type GroupsSetSettingsResponse = 1;

/**
 * groups.setUserNote
 *
 * In order to save note about group participant
 */

export interface GroupsSetUserNoteParams {
  group_id: number;
  user_id: number;
  /**
   * Note body
   */
  note?: string;
}

// groups.setUserNote_response
export type GroupsSetUserNoteResponse = 0 | 1;

/**
 * groups.tagAdd
 *
 * Add new group's tag
 */

export interface GroupsTagAddParams {
  group_id: number;
  tag_name: string;
  tag_color?: '454647' |
  '45678f' |
  '4bb34b' |
  '5181b8' |
  '539b9c' |
  '5c9ce6' |
  '63b9ba' |
  '6bc76b' |
  '76787a' |
  '792ec0' |
  '7a6c4f' |
  '7ececf' |
  '9e8d6b' |
  'a162de' |
  'aaaeb3' |
  'bbaa84' |
  'e64646' |
  'ff5c5c' |
  'ffa000' |
  'ffc107';
}

// groups.tagAdd_response
export type GroupsTagAddResponse = 0 | 1;

/**
 * groups.tagBind
 *
 * Bind or unbind group's tag to user
 */

export interface GroupsTagBindParams {
  group_id: number;
  tag_id: number;
  user_id: number;
  /**
   * Describe the action
   */
  act: 'bind' | 'unbind';
}

// groups.tagBind_response
export type GroupsTagBindResponse = 0 | 1;

/**
 * groups.tagDelete
 *
 * Delete group's tag
 */

export interface GroupsTagDeleteParams {
  group_id: number;
  tag_id: number;
}

// groups.tagDelete_response
export type GroupsTagDeleteResponse = 0 | 1;

/**
 * groups.tagUpdate
 *
 * Update group's tag
 */

export interface GroupsTagUpdateParams {
  group_id: number;
  tag_id: number;
  tag_name: string;
}

// groups.tagUpdate_response
export type GroupsTagUpdateResponse = 0 | 1;

/**
 * groups.toggleMarket
 */

export interface GroupsToggleMarketParams {
  group_id: number;
  state: 'advanced' | 'basic' | 'none';
}

// groups.toggleMarket_response
export type GroupsToggleMarketResponse = 1;

/**
 * groups.unban
 */

export interface GroupsUnbanParams {
  group_id: number;
  owner_id?: number;
}

// groups.unban_response
export type GroupsUnbanResponse = 1;
