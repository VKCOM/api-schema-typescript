/**
 * This is auto-generated file, don't modify this file manually
 */

import { AppsApp } from '../apps/AppsApp';
import { GroupsGroup } from '../groups/GroupsGroup';
import { UsersUserMin } from '../users/UsersUserMin';
import { SearchHintSection } from './SearchHintSection';
import { SearchHintType } from './SearchHintType';

// search_hint
export interface SearchHint {
  app?: AppsApp;
  /**
   * Object description
   */
  description: string;
  /**
   * Information whether the object has been found globally
   */
  global?: 0 | 1;
  group?: GroupsGroup;
  profile?: UsersUserMin;
  section: SearchHintSection;
  type: SearchHintType;
}
