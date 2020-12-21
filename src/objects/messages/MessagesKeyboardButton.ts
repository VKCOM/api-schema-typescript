/**
 * This is auto-generated file, don't modify this file manually
 */

import { MessagesKeyboardButtonAction } from './MessagesKeyboardButtonAction';

// messages_keyboard_button color enum
export enum MessagesKeyboardButtonColorEnum {
  DEFAULT = 'default',
  POSITIVE = 'positive',
  NEGATIVE = 'negative',
  PRIMARY = 'primary',
}

// messages_keyboard_button
export interface MessagesKeyboardButton {
  action: MessagesKeyboardButtonAction;
  /**
   * Button color
   */
  color?: MessagesKeyboardButtonColorEnum;
}
