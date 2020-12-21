/**
 * This is auto-generated file, don't modify this file manually
 */

import { AudioAudio } from '../audio/AudioAudio';
import { BaseLink } from '../base/BaseLink';
import { DocsDoc } from '../docs/DocsDoc';
import { EventsEventAttach } from '../events/EventsEventAttach';
import { GroupsGroupAttach } from '../groups/GroupsGroupAttach';
import { MarketMarketAlbum } from '../market/MarketMarketAlbum';
import { MarketMarketItem } from '../market/MarketMarketItem';
import { PagesWikipageFull } from '../pages/PagesWikipageFull';
import { PhotosPhoto } from '../photos/PhotosPhoto';
import { PhotosPhotoAlbum } from '../photos/PhotosPhotoAlbum';
import { PollsPoll } from '../polls/PollsPoll';
import { VideoVideo } from '../video/VideoVideo';
import { WallAppPost } from './WallAppPost';
import { WallAttachedNote } from './WallAttachedNote';
import { WallGraffiti } from './WallGraffiti';
import { WallPostedPhoto } from './WallPostedPhoto';
import { WallWallpostAttachmentType } from './WallWallpostAttachmentType';

// wall_wallpost_attachment
export interface WallWallpostAttachment {
  /**
   * Access key for the audio
   */
  access_key?: string;
  album?: PhotosPhotoAlbum;
  app?: WallAppPost;
  audio?: AudioAudio;
  doc?: DocsDoc;
  event?: EventsEventAttach;
  group?: GroupsGroupAttach;
  graffiti?: WallGraffiti;
  link?: BaseLink;
  market?: MarketMarketItem;
  market_album?: MarketMarketAlbum;
  note?: WallAttachedNote;
  page?: PagesWikipageFull;
  photo?: PhotosPhoto;
  photos_list?: string[];
  poll?: PollsPoll;
  posted_photo?: WallPostedPhoto;
  type: WallWallpostAttachmentType;
  video?: VideoVideo;
}
