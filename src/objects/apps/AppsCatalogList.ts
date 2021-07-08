/**
 * This is auto-generated file, don't modify this file manually
 */

import { UsersUserMin } from '../users/UsersUserMin';
import { AppsApp } from './AppsApp';

// apps_catalog_list
export interface AppsCatalogList {
  /**
   * Total number
   */
  count: number;
  items: AppsApp[];
  profiles?: UsersUserMin[];
}
