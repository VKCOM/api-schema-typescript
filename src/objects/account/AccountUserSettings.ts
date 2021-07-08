/**
 * This is auto-generated file, don't modify this file manually
 */

import { AudioAudio } from '../audio/AudioAudio';
import { BaseCity } from '../base/BaseCity';
import { BaseCountry } from '../base/BaseCountry';
import { BaseSex } from '../base/BaseSex';
import { UsersPersonal } from '../users/UsersPersonal';
import { UsersUserConnections } from '../users/UsersUserConnections';
import { UsersUserMin } from '../users/UsersUserMin';
import { UsersUserRelation } from '../users/UsersUserRelation';
import { AccountNameRequest } from './AccountNameRequest';
import { AccountUserSettingsInterests } from './AccountUserSettingsInterests';

// account_user_settings
export interface AccountUserSettings {
  /**
   * Returns if a profile is deleted or blocked
   */
  deactivated?: string;
  /**
   * User first name
   */
  first_name: string;
  /**
   * Returns if a profile is hidden.
   */
  hidden?: number;
  /**
   * User ID
   */
  id: number;
  /**
   * User last name
   */
  last_name: string;
  can_access_closed?: boolean;
  is_closed?: boolean;
  connections?: UsersUserConnections;
  /**
   * User's date of birth
   */
  bdate?: string;
  /**
   * Information whether user's birthdate are hidden
   */
  bdate_visibility?: number;
  city?: BaseCity;
  country?: BaseCountry;
  /**
   * User's hometown
   */
  home_town: string;
  /**
   * User maiden name
   */
  maiden_name?: string;
  name_request?: AccountNameRequest;
  personal?: UsersPersonal;
  /**
   * User phone number with some hidden digits
   */
  phone?: string;
  /**
   * User relationship status
   */
  relation?: UsersUserRelation;
  relation_partner?: UsersUserMin;
  /**
   * Information whether relation status is pending
   */
  relation_pending?: 0 | 1;
  relation_requests?: UsersUserMin[];
  /**
   * Domain name of the user's page
   */
  screen_name?: string;
  /**
   * User sex
   */
  sex?: BaseSex;
  /**
   * User status
   */
  status: string;
  status_audio?: AudioAudio;
  interests?: AccountUserSettingsInterests;
  languages?: string[];
  /**
   * URL of square photo of the user with 200 pixels in width
   */
  photo_200?: string;
  /**
   * flag about service account
   */
  is_service_account?: boolean;
}
