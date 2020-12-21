/**
 * This is auto-generated file, don't modify this file manually
 */

// messages_chat_settings_acl
export interface MessagesChatSettingsAcl {
  /**
   * Can you change photo, description and name
   */
  can_change_info: boolean;
  /**
   * Can you change invite link for this chat
   */
  can_change_invite_link: boolean;
  /**
   * Can you pin/unpin message for this chat
   */
  can_change_pin: boolean;
  /**
   * Can you invite other peers in chat
   */
  can_invite: boolean;
  /**
   * Can you promote simple users to chat admins
   */
  can_promote_users: boolean;
  /**
   * Can you see invite link for this chat
   */
  can_see_invite_link: boolean;
  /**
   * Can you moderate (delete) other users' messages
   */
  can_moderate: boolean;
  /**
   * Can you copy chat
   */
  can_copy_chat: boolean;
  /**
   * Can you init group call in the chat
   */
  can_call: boolean;
  /**
   * Can you use mass mentions
   */
  can_use_mass_mentions: boolean;
  /**
   * Can you change chat service type
   */
  can_change_service_type?: boolean;
}
