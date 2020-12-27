/**
 * This is auto-generated file, don't modify this file manually
 */

import { WidgetsWidgetComment } from '../objects/widgets/WidgetsWidgetComment';
import { WidgetsWidgetPage } from '../objects/widgets/WidgetsWidgetPage';

/**
 * widgets.getComments
 *
 * Gets a list of comments for the page added through the [vk.com/dev/Comments|Comments widget].
 */

export interface WidgetsGetCommentsParams {
  widget_api_id?: number;
  url?: string;
  page_id?: string;
  order?: string;
  /**
   * objects.json#/definitions/users_fields
   */
  fields?: string;
  offset?: number;
  count?: number;
}

// widgets.getComments_response
export interface WidgetsGetCommentsResponse {
  /**
   * Total number
   */
  count: number;
  posts: WidgetsWidgetComment[];
}

/**
 * widgets.getPages
 *
 * Gets a list of application/site pages where the [vk.com/dev/Comments|Comments widget] or [vk.com/dev/Like|Like widget] is installed.
 */

export interface WidgetsGetPagesParams {
  widget_api_id?: number;
  order?: string;
  period?: string;
  offset?: number;
  count?: number;
}

// widgets.getPages_response
export interface WidgetsGetPagesResponse {
  /**
   * Total number
   */
  count: number;
  pages: WidgetsWidgetPage[];
}
