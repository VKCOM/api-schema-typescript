/**
 * This is auto-generated file, don't modify this file manually
 */

import { AudioAudio } from '../audio/AudioAudio';
import { BaseLink } from '../base/BaseLink';
import { DocsDoc } from '../docs/DocsDoc';
import { PhotosPhoto } from '../photos/PhotosPhoto';
import { VideoVideo } from '../video/VideoVideo';
import { MessagesAudioMessage } from './MessagesAudioMessage';
import { MessagesGraffiti } from './MessagesGraffiti';
import { MessagesHistoryMessageAttachmentType } from './MessagesHistoryMessageAttachmentType';

// messages_history_message_attachment
export interface MessagesHistoryMessageAttachment {
  audio?: AudioAudio;
  audio_message?: MessagesAudioMessage;
  doc?: DocsDoc;
  graffiti?: MessagesGraffiti;
  link?: BaseLink;
  market?: BaseLink;
  photo?: PhotosPhoto;
  share?: BaseLink;
  type: MessagesHistoryMessageAttachmentType;
  video?: VideoVideo;
  wall?: BaseLink;
}
