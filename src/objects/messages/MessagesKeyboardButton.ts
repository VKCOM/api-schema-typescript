/**
 * This is auto-generated file, don't modify this file manually
 */

import { MessagesKeyboardButtonAction } from './MessagesKeyboardButtonAction';

// messages_keyboard_button color enumNames
export const MessagesKeyboardButtonColorEnumNames = {
  DEFAULT: 'default',
  POSITIVE: 'positive',
  NEGATIVE: 'negative',
  PRIMARY: 'primary',
} as const;

// messages_keyboard_button
export interface MessagesKeyboardButton {
  action: MessagesKeyboardButtonAction;
  /**
   * Button color
   */
  color?: 'default' | 'positive' | 'negative' | 'primary';
}
