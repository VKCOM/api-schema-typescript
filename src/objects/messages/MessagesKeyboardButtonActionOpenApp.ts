/**
 * This is auto-generated file, don't modify this file manually
 */

// messages_keyboard_button_action_open_app
export interface MessagesKeyboardButtonActionOpenApp {
  /**
   * Fragment value in app link like vk.com/app{app_id}_-654321#hash
   */
  app_id?: number;
  /**
   * Fragment value in app link like vk.com/app123456_-654321#{hash}
   */
  hash?: string;
  /**
   * Label for button
   */
  label?: string;
  /**
   * Fragment value in app link like vk.com/app123456_{owner_id}#hash
   */
  owner_id?: number;
  /**
   * Additional data sent along with message for developer convenience
   */
  payload?: string;
  type?: 'open_app';
}
