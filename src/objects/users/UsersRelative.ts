/**
 * This is auto-generated file, don't modify this file manually
 */

// users_relative type enumNames
export const UsersRelativeTypeEnumNames = {
  PARENT: 'parent',
  CHILD: 'child',
  GRANDPARENT: 'grandparent',
  GRANDCHILD: 'grandchild',
  SIBLING: 'sibling',
} as const;

// users_relative
export interface UsersRelative {
  /**
   * Date of child birthday (format dd.mm.yyyy)
   */
  birth_date?: string;
  /**
   * Relative ID
   */
  id?: number;
  /**
   * Name of relative
   */
  name?: string;
  /**
   * Relative type
   */
  type: 'parent' | 'child' | 'grandparent' | 'grandchild' | 'sibling';
}
