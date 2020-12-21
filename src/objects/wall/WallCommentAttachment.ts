/**
 * This is auto-generated file, don't modify this file manually
 */

import { AudioAudio } from '../audio/AudioAudio';
import { BaseLink } from '../base/BaseLink';
import { BaseSticker } from '../base/BaseSticker';
import { DocsDoc } from '../docs/DocsDoc';
import { MarketMarketAlbum } from '../market/MarketMarketAlbum';
import { MarketMarketItem } from '../market/MarketMarketItem';
import { PagesWikipageFull } from '../pages/PagesWikipageFull';
import { PhotosPhoto } from '../photos/PhotosPhoto';
import { VideoVideo } from '../video/VideoVideo';
import { WallAttachedNote } from './WallAttachedNote';
import { WallCommentAttachmentType } from './WallCommentAttachmentType';

// wall_comment_attachment
export interface WallCommentAttachment {
  audio?: AudioAudio;
  doc?: DocsDoc;
  link?: BaseLink;
  market?: MarketMarketItem;
  market_market_album?: MarketMarketAlbum;
  note?: WallAttachedNote;
  page?: PagesWikipageFull;
  photo?: PhotosPhoto;
  sticker?: BaseSticker;
  type: WallCommentAttachmentType;
  video?: VideoVideo;
}
