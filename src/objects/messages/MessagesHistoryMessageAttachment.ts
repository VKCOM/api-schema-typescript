/**
 * This is auto-generated file, don't modify this file manually
 */

import { AudioAudio } from '../audio/AudioAudio';
import { DocsDoc } from '../docs/DocsDoc';
import { MarketMarketItem } from '../market/MarketMarketItem';
import { PhotosPhoto } from '../photos/PhotosPhoto';
import { MessagesAudioMessage } from './MessagesAudioMessage';
import { MessagesGraffiti } from './MessagesGraffiti';
import { MessagesHistoryMessageAttachmentType } from './MessagesHistoryMessageAttachmentType';

// messages_history_message_attachment
export interface MessagesHistoryMessageAttachment {
  audio?: AudioAudio;
  audio_message?: MessagesAudioMessage;
  doc?: DocsDoc;
  graffiti?: MessagesGraffiti;
  market?: MarketMarketItem;
  photo?: PhotosPhoto;
  type?: MessagesHistoryMessageAttachmentType;
}
