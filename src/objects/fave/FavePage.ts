/**
 * This is auto-generated file, don't modify this file manually
 */

import { GroupsGroupFull } from '../groups/GroupsGroupFull';
import { UsersUserFull } from '../users/UsersUserFull';
import { FavePageType } from './FavePageType';
import { FaveTag } from './FaveTag';

// fave_page
export interface FavePage {
  /**
   * Some info about user or group
   */
  description: string;
  group?: GroupsGroupFull;
  tags: FaveTag[];
  /**
   * Item type
   */
  type: FavePageType;
  /**
   * Timestamp, when this page was bookmarked
   */
  updated_date?: number;
  user?: UsersUserFull;
}
