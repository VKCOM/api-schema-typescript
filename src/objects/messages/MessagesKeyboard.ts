/**
 * This is auto-generated file, don't modify this file manually
 */

import { MessagesKeyboardButton } from './MessagesKeyboardButton';

// messages_keyboard
export interface MessagesKeyboard {
  /**
   * Community or bot, which set this keyboard
   */
  author_id?: number;
  buttons: MessagesKeyboardButton[][];
  /**
   * Should this keyboard disappear on first use
   */
  one_time: boolean;
  inline?: boolean;
}
