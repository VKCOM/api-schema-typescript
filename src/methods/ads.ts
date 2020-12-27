/**
 * This is auto-generated file, don't modify this file manually
 */

import { AdsAccount } from '../objects/ads/AdsAccount';
import { AdsAd } from '../objects/ads/AdsAd';
import { AdsAdLayout } from '../objects/ads/AdsAdLayout';
import { AdsCampaign } from '../objects/ads/AdsCampaign';
import { AdsCategory } from '../objects/ads/AdsCategory';
import { AdsClient } from '../objects/ads/AdsClient';
import { AdsDemoStats } from '../objects/ads/AdsDemoStats';
import { AdsFloodStats } from '../objects/ads/AdsFloodStats';
import { AdsLinkStatus } from '../objects/ads/AdsLinkStatus';
import { AdsLookalikeRequest } from '../objects/ads/AdsLookalikeRequest';
import { AdsMusician } from '../objects/ads/AdsMusician';
import { AdsPromotedPostReach } from '../objects/ads/AdsPromotedPostReach';
import { AdsRejectReason } from '../objects/ads/AdsRejectReason';
import { AdsStats } from '../objects/ads/AdsStats';
import { AdsTargetGroup } from '../objects/ads/AdsTargetGroup';
import { AdsTargSettings } from '../objects/ads/AdsTargSettings';
import { AdsTargStats } from '../objects/ads/AdsTargStats';
import { AdsTargSuggestions } from '../objects/ads/AdsTargSuggestions';
import { AdsTargSuggestionsCities } from '../objects/ads/AdsTargSuggestionsCities';
import { AdsTargSuggestionsRegions } from '../objects/ads/AdsTargSuggestionsRegions';
import { AdsTargSuggestionsSchools } from '../objects/ads/AdsTargSuggestionsSchools';
import { AdsUpdateOfficeUsersResult } from '../objects/ads/AdsUpdateOfficeUsersResult';
import { AdsUsers } from '../objects/ads/AdsUsers';

/**
 * ads.addOfficeUsers
 *
 * Adds managers and/or supervisors to advertising account.
 */

export interface AdsAddOfficeUsersParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  /**
   * Serialized JSON array of objects that describe added managers. Description of 'user_specification' objects see below.
   *
   * objects.json#/definitions/ads_user_specification_cutted
   */
  data: string;
}

// ads.addOfficeUsers_response
export type AdsAddOfficeUsersResponse = boolean;

/**
 * ads.checkLink
 *
 * Allows to check the ad link.
 */

export interface AdsCheckLinkParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  /**
   * Object type: *'community' — community,, *'post' — community post,, *'application' — VK application,, *'video' — video,, *'site' — external site.
   */
  link_type: 'community' | 'post' | 'application' | 'video' | 'site';
  /**
   * Object URL.
   */
  link_url: string;
  /**
   * Campaign ID
   */
  campaign_id?: number;
}

// ads.checkLink_response
export type AdsCheckLinkResponse = AdsLinkStatus;

/**
 * ads.createAds
 *
 * Creates ads.
 */

export interface AdsCreateAdsParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  /**
   * Serialized JSON array of objects that describe created ads. Description of 'ad_specification' objects see below.
   */
  data: string;
}

// ads.createAds_response
export type AdsCreateAdsResponse = number[];

/**
 * ads.createCampaigns
 *
 * Creates advertising campaigns.
 */

export interface AdsCreateCampaignsParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  /**
   * Serialized JSON array of objects that describe created campaigns. Description of 'campaign_specification' objects see below.
   */
  data: string;
}

// ads.createCampaigns_response
export type AdsCreateCampaignsResponse = number[];

/**
 * ads.createClients
 *
 * Creates clients of an advertising agency.
 */

export interface AdsCreateClientsParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  /**
   * Serialized JSON array of objects that describe created campaigns. Description of 'client_specification' objects see below.
   */
  data: string;
}

// ads.createClients_response
export type AdsCreateClientsResponse = number[];

/**
 * ads.createTargetGroup
 *
 * Creates a group to re-target ads for users who visited advertiser's site (viewed information about the product, registered, etc.).
 */

export interface AdsCreateTargetGroupParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  /**
   * 'Only for advertising agencies.', ID of the client with the advertising account where the group will be created.
   */
  client_id?: number;
  /**
   * Name of the target group — a string up to 64 characters long.
   */
  name: string;
  /**
   * 'For groups with auditory created with pixel code only.', , Number of days after that users will be automatically removed from the group.
   */
  lifetime: number;
  target_pixel_id?: number;
  target_pixel_rules?: string;
}

// ads.createTargetGroup_response
export interface AdsCreateTargetGroupResponse {
  /**
   * Group ID
   */
  id?: number;
  /**
   * Pixel code
   */
  pixel?: string;
}

/**
 * ads.deleteAds
 *
 * Archives ads.
 */

export interface AdsDeleteAdsParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  /**
   * Serialized JSON array with ad IDs.
   */
  ids: string;
}

// ads.deleteAds_response
export type AdsDeleteAdsResponse = number[];

/**
 * ads.deleteCampaigns
 *
 * Archives advertising campaigns.
 */

export interface AdsDeleteCampaignsParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  /**
   * Serialized JSON array with IDs of deleted campaigns.
   */
  ids: string;
}

// ads.deleteCampaigns_response
export type AdsDeleteCampaignsResponse = number;

/**
 * ads.deleteClients
 *
 * Archives clients of an advertising agency.
 */

export interface AdsDeleteClientsParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  /**
   * Serialized JSON array with IDs of deleted clients.
   */
  ids: string;
}

// ads.deleteClients_response
export type AdsDeleteClientsResponse = number;

/**
 * ads.deleteTargetGroup
 *
 * Deletes a retarget group.
 */

export interface AdsDeleteTargetGroupParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  /**
   * 'Only for advertising agencies.' , ID of the client with the advertising account where the group will be created.
   */
  client_id?: number;
  /**
   * Group ID.
   */
  target_group_id: number;
}

// ads.deleteTargetGroup_response
export type AdsDeleteTargetGroupResponse = 1;

/**
 * ads.getAccounts
 *
 * Returns a list of advertising accounts.
 */

export interface AdsGetAccountsParams {}

// ads.getAccounts_response
export type AdsGetAccountsResponse = AdsAccount[];

/**
 * ads.getAds
 *
 * Returns number of ads.
 */

export interface AdsGetAdsParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  /**
   * Filter by ads. Serialized JSON array with ad IDs. If the parameter is null, all ads will be shown.
   */
  ad_ids?: string;
  /**
   * Filter by advertising campaigns. Serialized JSON array with campaign IDs. If the parameter is null, ads of all campaigns will be shown.
   */
  campaign_ids?: string;
  /**
   * 'Available and required for advertising agencies.' ID of the client ads are retrieved from.
   */
  client_id?: number;
  /**
   * Flag that specifies whether archived ads shall be shown: *0 — show only active ads,, *1 — show all ads.
   */
  include_deleted?: 0 | 1;
  /**
   * Flag that specifies whether to show only archived ads: *0 — show all ads,, *1 — show only archived ads. Available when include_deleted flag is *1
   */
  only_deleted?: 0 | 1;
  /**
   * Limit of number of returned ads. Used only if ad_ids parameter is null, and 'campaign_ids' parameter contains ID of only one campaign.
   */
  limit?: number;
  /**
   * Offset. Used in the same cases as 'limit' parameter.
   */
  offset?: number;
}

// ads.getAds_response
export type AdsGetAdsResponse = AdsAd[];

/**
 * ads.getAdsLayout
 *
 * Returns descriptions of ad layouts.
 */

export interface AdsGetAdsLayoutParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  /**
   * Filter by ads. Serialized JSON array with ad IDs. If the parameter is null, all ads will be shown.
   */
  ad_ids?: string;
  /**
   * Filter by advertising campaigns. Serialized JSON array with campaign IDs. If the parameter is null, ads of all campaigns will be shown.
   */
  campaign_ids?: string;
  /**
   * 'For advertising agencies.' ID of the client ads are retrieved from.
   */
  client_id?: number;
  /**
   * Flag that specifies whether archived ads shall be shown. *0 — show only active ads,, *1 — show all ads.
   */
  include_deleted?: 0 | 1;
  /**
   * Limit of number of returned ads. Used only if 'ad_ids' parameter is null, and 'campaign_ids' parameter contains ID of only one campaign.
   */
  limit?: number;
  /**
   * Offset. Used in the same cases as 'limit' parameter.
   */
  offset?: number;
}

// ads.getAdsLayout_response
export type AdsGetAdsLayoutResponse = AdsAdLayout[];

/**
 * ads.getAdsTargeting
 *
 * Returns ad targeting parameters.
 */

export interface AdsGetAdsTargetingParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  /**
   * Filter by ads. Serialized JSON array with ad IDs. If the parameter is null, all ads will be shown.
   */
  ad_ids?: string;
  /**
   * Filter by advertising campaigns. Serialized JSON array with campaign IDs. If the parameter is null, ads of all campaigns will be shown.
   */
  campaign_ids?: string;
  /**
   * 'For advertising agencies.' ID of the client ads are retrieved from.
   */
  client_id?: number;
  /**
   * flag that specifies whether archived ads shall be shown: *0 — show only active ads,, *1 — show all ads.
   */
  include_deleted?: 0 | 1;
  /**
   * Limit of number of returned ads. Used only if 'ad_ids' parameter is null, and 'campaign_ids' parameter contains ID of only one campaign.
   */
  limit?: number;
  /**
   * Offset needed to return a specific subset of results.
   */
  offset?: number;
}

// ads.getAdsTargeting_response
export type AdsGetAdsTargetingResponse = AdsTargSettings[];

/**
 * ads.getBudget
 *
 * Returns current budget of the advertising account.
 */

export interface AdsGetBudgetParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
}

// ads.getBudget_response
export type AdsGetBudgetResponse = number;

/**
 * ads.getCampaigns
 *
 * Returns a list of campaigns in an advertising account.
 */

export interface AdsGetCampaignsParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  /**
   * 'For advertising agencies'. ID of the client advertising campaigns are retrieved from.
   */
  client_id?: number;
  /**
   * Flag that specifies whether archived ads shall be shown. *0 — show only active campaigns,, *1 — show all campaigns.
   */
  include_deleted?: 0 | 1;
  /**
   * Filter of advertising campaigns to show. Serialized JSON array with campaign IDs. Only campaigns that exist in 'campaign_ids' and belong to the specified advertising account will be shown. If the parameter is null, all campaigns will be shown.
   */
  campaign_ids?: string;
  fields?: string;
}

// ads.getCampaigns_response
export type AdsGetCampaignsResponse = AdsCampaign[];

/**
 * ads.getCategories
 *
 * Returns a list of possible ad categories.
 */

export interface AdsGetCategoriesParams {
  /**
   * Language. The full list of supported languages is [vk.com/dev/api_requests|here].
   */
  lang?: string;
}

// ads.getCategories_response
export interface AdsGetCategoriesResponse {
  /**
   * Old categories
   */
  v1?: AdsCategory[];
  /**
   * Actual categories
   */
  v2?: AdsCategory[];
}

/**
 * ads.getClients
 *
 * Returns a list of advertising agency's clients.
 */

export interface AdsGetClientsParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
}

// ads.getClients_response
export type AdsGetClientsResponse = AdsClient[];

/**
 * ads.getDemographics
 *
 * Returns demographics for ads or campaigns.
 */

export interface AdsGetDemographicsParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  /**
   * Type of requested objects listed in 'ids' parameter: *ad — ads,, *campaign — campaigns.
   */
  ids_type: 'ad' | 'campaign';
  /**
   * IDs requested ads or campaigns, separated with a comma, depending on the value set in 'ids_type'. Maximum 2000 objects.
   */
  ids: string;
  /**
   * Data grouping by dates: *day — statistics by days,, *month — statistics by months,, *overall — overall statistics. 'date_from' and 'date_to' parameters set temporary limits.
   */
  period: 'day' | 'month' | 'overall';
  /**
   * Date to show statistics from. For different value of 'period' different date format is used: *day: YYYY-MM-DD, example: 2011-09-27 — September 27, 2011, **0 — day it was created on,, *month: YYYY-MM, example: 2011-09 — September 2011, **0 — month it was created in,, *overall: 0.
   */
  date_from: string;
  /**
   * Date to show statistics to. For different value of 'period' different date format is used: *day: YYYY-MM-DD, example: 2011-09-27 — September 27, 2011, **0 — current day,, *month: YYYY-MM, example: 2011-09 — September 2011, **0 — current month,, *overall: 0.
   */
  date_to: string;
}

// ads.getDemographics_response
export type AdsGetDemographicsResponse = AdsDemoStats[];

/**
 * ads.getFloodStats
 *
 * Returns information about current state of a counter — number of remaining runs of methods and time to the next counter nulling in seconds.
 */

export interface AdsGetFloodStatsParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
}

// ads.getFloodStats_response
export type AdsGetFloodStatsResponse = AdsFloodStats;

/**
 * ads.getLookalikeRequests
 */

export interface AdsGetLookalikeRequestsParams {
  account_id: number;
  client_id?: number;
  requests_ids?: string;
  offset?: number;
  limit?: number;
  sort_by?: string;
}

// ads.getLookalikeRequests_response
export interface AdsGetLookalikeRequestsResponse {
  /**
   * Total count of found lookalike requests
   */
  count: number;
  /**
   * found lookalike requests
   */
  items: AdsLookalikeRequest[];
}

/**
 * ads.getMusicians
 */

export interface AdsGetMusiciansParams {
  artist_name: string;
}

// ads.getMusicians_response
export interface AdsGetMusiciansResponse {
  /**
   * Musicians
   */
  items: AdsMusician[];
}

/**
 * ads.getOfficeUsers
 *
 * Returns a list of managers and supervisors of advertising account.
 */

export interface AdsGetOfficeUsersParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
}

// ads.getOfficeUsers_response
export type AdsGetOfficeUsersResponse = AdsUsers[];

/**
 * ads.getPostsReach
 *
 * Returns detailed statistics of promoted posts reach from campaigns and ads.
 */

export interface AdsGetPostsReachParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  /**
   * Type of requested objects listed in 'ids' parameter: *ad — ads,, *campaign — campaigns.
   */
  ids_type: 'ad' | 'campaign';
  /**
   * IDs requested ads or campaigns, separated with a comma, depending on the value set in 'ids_type'. Maximum 100 objects.
   */
  ids: string;
}

// ads.getPostsReach_response
export type AdsGetPostsReachResponse = AdsPromotedPostReach[];

/**
 * ads.getRejectionReason
 *
 * Returns a reason of ad rejection for pre-moderation.
 */

export interface AdsGetRejectionReasonParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  /**
   * Ad ID.
   */
  ad_id: number;
}

// ads.getRejectionReason_response
export type AdsGetRejectionReasonResponse = AdsRejectReason;

/**
 * ads.getStatistics
 *
 * Returns statistics of performance indicators for ads, campaigns, clients or the whole account.
 */

export interface AdsGetStatisticsParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  /**
   * Type of requested objects listed in 'ids' parameter: *ad — ads,, *campaign — campaigns,, *client — clients,, *office — account.
   */
  ids_type: 'ad' | 'campaign' | 'client' | 'office';
  /**
   * IDs requested ads, campaigns, clients or account, separated with a comma, depending on the value set in 'ids_type'. Maximum 2000 objects.
   */
  ids: string;
  /**
   * Data grouping by dates: *day — statistics by days,, *month — statistics by months,, *overall — overall statistics. 'date_from' and 'date_to' parameters set temporary limits.
   */
  period: 'day' | 'month' | 'overall';
  /**
   * Date to show statistics from. For different value of 'period' different date format is used: *day: YYYY-MM-DD, example: 2011-09-27 — September 27, 2011, **0 — day it was created on,, *month: YYYY-MM, example: 2011-09 — September 2011, **0 — month it was created in,, *overall: 0.
   */
  date_from: string;
  /**
   * Date to show statistics to. For different value of 'period' different date format is used: *day: YYYY-MM-DD, example: 2011-09-27 — September 27, 2011, **0 — current day,, *month: YYYY-MM, example: 2011-09 — September 2011, **0 — current month,, *overall: 0.
   */
  date_to: string;
  /**
   * Additional fields to add to statistics
   */
  stats_fields?: string;
}

// ads.getStatistics_response
export type AdsGetStatisticsResponse = AdsStats[];

/**
 * ads.getSuggestions
 *
 * Returns a set of auto-suggestions for various targeting parameters.
 */

export interface AdsGetSuggestionsParams {
  /**
   * Section, suggestions are retrieved in. Available values: *countries — request of a list of countries. If q is not set or blank, a short list of countries is shown. Otherwise, a full list of countries is shown. *regions — requested list of regions. 'country' parameter is required. *cities — requested list of cities. 'country' parameter is required. *districts — requested list of districts. 'cities' parameter is required. *stations — requested list of subway stations. 'cities' parameter is required. *streets — requested list of streets. 'cities' parameter is required. *schools — requested list of educational organizations. 'cities' parameter is required. *interests — requested list of interests. *positions — requested list of positions (professions). *group_types — requested list of group types. *religions — requested list of religious commitments. *browsers — requested list of browsers and mobile devices.
   */
  section: 'countries' |
  'regions' |
  'cities' |
  'districts' |
  'stations' |
  'streets' |
  'schools' |
  'interests' |
  'positions' |
  'group_types' |
  'religions' |
  'browsers';
  /**
   * Objects IDs separated by commas. If the parameter is passed, 'q, country, cities' should not be passed.
   */
  ids?: string;
  /**
   * Filter-line of the request (for countries, regions, cities, streets, schools, interests, positions).
   */
  q?: string;
  /**
   * ID of the country objects are searched in.
   */
  country?: number;
  /**
   * IDs of cities where objects are searched in, separated with a comma.
   */
  cities?: string;
  /**
   * Language of the returned string values. Supported languages: *ru — Russian,, *ua — Ukrainian,, *en — English.
   */
  lang?: 'ru' | 'ua' | 'en';
}

// ads.getSuggestions_response
export type AdsGetSuggestionsResponse = AdsTargSuggestions[];

// ads.getSuggestions_regionsResponse
export type AdsGetSuggestionsRegionsResponse = AdsTargSuggestionsRegions[];

// ads.getSuggestions_citiesResponse
export type AdsGetSuggestionsCitiesResponse = AdsTargSuggestionsCities[];

// ads.getSuggestions_schoolsResponse
export type AdsGetSuggestionsSchoolsResponse = AdsTargSuggestionsSchools[];

/**
 * ads.getTargetGroups
 *
 * Returns a list of target groups.
 */

export interface AdsGetTargetGroupsParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  /**
   * 'Only for advertising agencies.', ID of the client with the advertising account where the group will be created.
   */
  client_id?: number;
  /**
   * '1' — to return pixel code.
   */
  extended?: 0 | 1;
}

// ads.getTargetGroups_response
export type AdsGetTargetGroupsResponse = AdsTargetGroup[];

/**
 * ads.getTargetingStats
 *
 * Returns the size of targeting audience, and also recommended values for CPC and CPM.
 */

export interface AdsGetTargetingStatsParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  client_id?: number;
  /**
   * Serialized JSON object that describes targeting parameters. Description of 'criteria' object see below.
   */
  criteria?: string;
  /**
   * ID of an ad which targeting parameters shall be analyzed.
   */
  ad_id?: number;
  /**
   * Ad format. Possible values: *'1' — image and text,, *'2' — big image,, *'3' — exclusive format,, *'4' — community, square image,, *'7' — special app format,, *'8' — special community format,, *'9' — post in community,, *'10' — app board.
   */
  ad_format?: 1 | 2 | 3 | 4 | 7 | 8 | 9 | 10;
  /**
   * Platforms to use for ad showing. Possible values: (for 'ad_format' = '1'), *'0' — VK and partner sites,, *'1' — VK only. (for 'ad_format' = '9'), *'all' — all platforms,, *'desktop' — desktop version,, *'mobile' — mobile version and apps.
   */
  ad_platform?: string;
  ad_platform_no_wall?: string;
  ad_platform_no_ad_network?: string;
  /**
   * URL for the advertised object.
   */
  link_url: string;
  /**
   * Domain of the advertised object.
   */
  link_domain?: string;
  /**
   * Additionally return recommended cpc and cpm to reach 5,10..95 percents of audience.
   */
  need_precise?: 0 | 1;
  /**
   * Impressions limit period in seconds, must be a multiple of 86400(day)
   */
  impressions_limit_period?: number;
}

// ads.getTargetingStats_response
export type AdsGetTargetingStatsResponse = AdsTargStats;

/**
 * ads.getUploadURL
 *
 * Returns URL to upload an ad photo to.
 */

export interface AdsGetUploadURLParams {
  /**
   * Ad format: *1 — image and text,, *2 — big image,, *3 — exclusive format,, *4 — community, square image,, *7 — special app format.
   */
  ad_format: 1 | 2 | 3 | 4 | 7;
  icon?: number;
}

// ads.getUploadURL_response
export type AdsGetUploadURLResponse = string;

/**
 * ads.getVideoUploadURL
 *
 * Returns URL to upload an ad video to.
 */

export interface AdsGetVideoUploadURLParams {}

// ads.getVideoUploadURL_response
export type AdsGetVideoUploadURLResponse = string;

/**
 * ads.importTargetContacts
 *
 * Imports a list of advertiser's contacts to count VK registered users against the target group.
 */

export interface AdsImportTargetContactsParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  /**
   * 'Only for advertising agencies.' , ID of the client with the advertising account where the group will be created.
   */
  client_id?: number;
  /**
   * Target group ID.
   */
  target_group_id: number;
  /**
   * List of phone numbers, emails or user IDs separated with a comma.
   */
  contacts: string;
}

// ads.importTargetContacts_response
export type AdsImportTargetContactsResponse = number;

/**
 * ads.removeOfficeUsers
 *
 * Removes managers and/or supervisors from advertising account.
 */

export interface AdsRemoveOfficeUsersParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  /**
   * Serialized JSON array with IDs of deleted managers.
   */
  ids: string;
}

// ads.removeOfficeUsers_response
export type AdsRemoveOfficeUsersResponse = boolean;

/**
 * ads.updateAds
 *
 * Edits ads.
 */

export interface AdsUpdateAdsParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  /**
   * Serialized JSON array of objects that describe changes in ads. Description of 'ad_edit_specification' objects see below.
   */
  data: string;
}

// ads.updateAds_response
export type AdsUpdateAdsResponse = number[];

/**
 * ads.updateCampaigns
 *
 * Edits advertising campaigns.
 */

export interface AdsUpdateCampaignsParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  /**
   * Serialized JSON array of objects that describe changes in campaigns. Description of 'campaign_mod' objects see below.
   */
  data: string;
}

// ads.updateCampaigns_response
export type AdsUpdateCampaignsResponse = number;

/**
 * ads.updateClients
 *
 * Edits clients of an advertising agency.
 */

export interface AdsUpdateClientsParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  /**
   * Serialized JSON array of objects that describe changes in clients. Description of 'client_mod' objects see below.
   */
  data: string;
}

// ads.updateClients_response
export type AdsUpdateClientsResponse = number;

/**
 * ads.updateOfficeUsers
 *
 * Adds managers and/or supervisors to advertising account.
 */

export interface AdsUpdateOfficeUsersParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  /**
   * Serialized JSON array of objects that describe added managers. Description of 'user_specification' objects see below.
   *
   * objects.json#/definitions/ads_user_specification
   */
  data: string;
}

// ads.updateOfficeUsers_response
export type AdsUpdateOfficeUsersResponse = AdsUpdateOfficeUsersResult[];

/**
 * ads.updateTargetGroup
 *
 * Edits a retarget group.
 */

export interface AdsUpdateTargetGroupParams {
  /**
   * Advertising account ID.
   */
  account_id: number;
  /**
   * 'Only for advertising agencies.' , ID of the client with the advertising account where the group will be created.
   */
  client_id?: number;
  /**
   * Group ID.
   */
  target_group_id: number;
  /**
   * New name of the target group — a string up to 64 characters long.
   */
  name: string;
  /**
   * Domain of the site where user accounting code will be placed.
   */
  domain?: string;
  /**
   * 'Only for the groups that get audience from sites with user accounting code.', Time in days when users added to a retarget group will be automatically excluded from it. '0' - automatic exclusion is off.
   */
  lifetime: number;
  target_pixel_id?: number;
  target_pixel_rules?: string;
}

// ads.updateTargetGroup_response
export type AdsUpdateTargetGroupResponse = 1;
