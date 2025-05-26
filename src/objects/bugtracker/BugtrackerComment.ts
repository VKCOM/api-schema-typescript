/**
 * This is auto-generated file, don't modify this file manually
 */

import { BugtrackerAttachment } from './BugtrackerAttachment';
import { BugtrackerCommentAuthor } from './BugtrackerCommentAuthor';

// bugtracker_comment
export interface BugtrackerComment {
  bugreport_id?: number;
  comment_id?: number;
  created?: number;
  text?: string;
  meta_text?: string;
  from_id?: number;
  author_name?: string;
  author_photo?: string;
  can_edit?: boolean;
  can_remove?: boolean;
  is_hidden?: boolean;
  attachments?: BugtrackerAttachment[];
  is_unread?: boolean;
  author?: BugtrackerCommentAuthor;
  is_attachments_hidden?: boolean;
}
