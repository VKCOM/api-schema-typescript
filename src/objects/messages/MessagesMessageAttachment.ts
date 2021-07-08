/**
 * This is auto-generated file, don't modify this file manually
 */

import { AudioAudio } from '../audio/AudioAudio';
import { BaseLink } from '../base/BaseLink';
import { BaseStickerNew } from '../base/BaseStickerNew';
import { BaseStickerOld } from '../base/BaseStickerOld';
import { CallsCall } from '../calls/CallsCall';
import { DocsDoc } from '../docs/DocsDoc';
import { GiftsLayout } from '../gifts/GiftsLayout';
import { MarketMarketAlbum } from '../market/MarketMarketAlbum';
import { MarketMarketItem } from '../market/MarketMarketItem';
import { PhotosPhoto } from '../photos/PhotosPhoto';
import { PollsPoll } from '../polls/PollsPoll';
import { StoriesStory } from '../stories/StoriesStory';
import { VideoVideo } from '../video/VideoVideo';
import { WallWallComment } from '../wall/WallWallComment';
import { WallWallpostFull } from '../wall/WallWallpostFull';
import { MessagesAudioMessage } from './MessagesAudioMessage';
import { MessagesGraffiti } from './MessagesGraffiti';
import { MessagesMessageAttachmentType } from './MessagesMessageAttachmentType';

// messages_message_attachment
export interface MessagesMessageAttachment {
  audio?: AudioAudio;
  audio_message?: MessagesAudioMessage;
  call?: CallsCall;
  doc?: DocsDoc;
  gift?: GiftsLayout;
  graffiti?: MessagesGraffiti;
  link?: BaseLink;
  market?: MarketMarketItem;
  market_market_album?: MarketMarketAlbum;
  photo?: PhotosPhoto;
  sticker?: BaseStickerOld | BaseStickerNew;
  story?: StoriesStory;
  type: MessagesMessageAttachmentType;
  video?: VideoVideo;
  wall?: WallWallpostFull;
  wall_reply?: WallWallComment;
  poll?: PollsPoll;
}
