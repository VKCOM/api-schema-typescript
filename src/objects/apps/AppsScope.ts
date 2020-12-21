/**
 * This is auto-generated file, don't modify this file manually
 */

// apps_scope name enum
export enum AppsScopeNameEnum {
  FRIENDS = 'friends',
  PHOTOS = 'photos',
  VIDEO = 'video',
  PAGES = 'pages',
  STATUS = 'status',
  NOTES = 'notes',
  WALL = 'wall',
  DOCS = 'docs',
  GROUPS = 'groups',
  STATS = 'stats',
  MARKET = 'market',
}

// apps_scope
export interface AppsScope {
  /**
   * Scope name
   */
  name: AppsScopeNameEnum;
  /**
   * Scope title
   */
  title?: string;
}
