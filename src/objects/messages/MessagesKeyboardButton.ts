/**
 * This is auto-generated file, don't modify this file manually
 */

import { MessagesKeyboardButtonActionCallback } from './MessagesKeyboardButtonActionCallback';
import { MessagesKeyboardButtonActionLocation } from './MessagesKeyboardButtonActionLocation';
import { MessagesKeyboardButtonActionOpenApp } from './MessagesKeyboardButtonActionOpenApp';
import { MessagesKeyboardButtonActionOpenLink } from './MessagesKeyboardButtonActionOpenLink';
import { MessagesKeyboardButtonActionOpenPhoto } from './MessagesKeyboardButtonActionOpenPhoto';
import { MessagesKeyboardButtonActionText } from './MessagesKeyboardButtonActionText';
import { MessagesKeyboardButtonActionVkpay } from './MessagesKeyboardButtonActionVkpay';

// messages_keyboard_button
export interface MessagesKeyboardButton {
  action?: MessagesKeyboardButtonActionLocation |
    MessagesKeyboardButtonActionOpenApp |
    MessagesKeyboardButtonActionOpenLink |
    MessagesKeyboardButtonActionOpenPhoto |
    MessagesKeyboardButtonActionText |
    MessagesKeyboardButtonActionCallback |
    MessagesKeyboardButtonActionVkpay;
  /**
   * Button color
   */
  color?: 'default' | 'positive' | 'negative' | 'primary';
}
