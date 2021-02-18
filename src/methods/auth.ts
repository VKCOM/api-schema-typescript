/**
 * This is auto-generated file, don't modify this file manually
 */

/**
 * auth.restore
 *
 * Allows to restore account access using a code received via SMS. " This method is only available for apps with [vk.com/dev/auth_direct|Direct authorization] access. "
 */

export interface AuthRestoreParams {
  /**
   * User phone number.
   */
  phone: string;
  /**
   * User last name.
   */
  last_name: string;
}

// auth.restore_response success enumNames
export const AuthRestoreResponseSuccessEnumNames = {
  OK: 1,
} as const;

// auth.restore_response
export interface AuthRestoreResponse {
  /**
   * 1 if success
   *
   * `1` — ok
   */
  success?: 1;
  /**
   * Parameter needed to grant access by code
   */
  sid?: string;
}
