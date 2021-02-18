/**
 * This is auto-generated file, don't modify this file manually
 */

// apps_scope name enumNames
export const AppsScopeNameEnumNames = {
  FRIENDS: 'friends',
  PHOTOS: 'photos',
  VIDEO: 'video',
  PAGES: 'pages',
  STATUS: 'status',
  NOTES: 'notes',
  WALL: 'wall',
  DOCS: 'docs',
  GROUPS: 'groups',
  STATS: 'stats',
  MARKET: 'market',
} as const;

// apps_scope
export interface AppsScope {
  /**
   * Scope name
   */
  name: 'friends' | 'photos' | 'video' | 'pages' | 'status' | 'notes' | 'wall' | 'docs' | 'groups' | 'stats' | 'market';
  /**
   * Scope title
   */
  title?: string;
}
