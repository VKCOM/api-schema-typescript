/**
 * This is auto-generated file, don't modify this file manually
 */

// owner_state state enumNames
export const OwnerStateStateEnumNames = {
  BANNED: 1,
  ADULT: 2,
  HIDDEN: 3,
  DELETED: 4,
  BLACKLISTED: 5,
} as const;

// owner_state
export interface OwnerState {
  /**
   * `1` — banned
   * `2` — adult
   * `3` — hidden
   * `4` — deleted
   * `5` — blacklisted
   */
  state?: 1 | 2 | 3 | 4 | 5;
  /**
   * wiki text to describe user state
   */
  description?: string;
}
