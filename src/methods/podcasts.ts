/**
 * This is auto-generated file, don't modify this file manually
 */

import { PodcastExternalData } from '../objects/podcast/PodcastExternalData';

/**
 * podcasts.searchPodcast
 */

export interface PodcastsSearchPodcastParams {
  search_string: string;
  offset?: number;
  count?: number;
}

// podcasts.searchPodcast_response
export interface PodcastsSearchPodcastResponse {
  podcasts?: PodcastExternalData[];
  /**
   * Total amount of found results
   */
  results_total?: number;
}
