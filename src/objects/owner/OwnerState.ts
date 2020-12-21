/**
 * This is auto-generated file, don't modify this file manually
 */

// owner_state state enum
export enum OwnerStateStateEnum {
  BANNED = 1,
  ADULT = 2,
  HIDDEN = 3,
  DELETED = 4,
}

// owner_state
export interface OwnerState {
  state?: OwnerStateStateEnum;
  /**
   * wiki text to describe user state
   */
  description?: string;
}
