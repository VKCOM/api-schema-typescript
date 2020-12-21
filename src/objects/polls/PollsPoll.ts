/**
 * This is auto-generated file, don't modify this file manually
 */

import { PollsAnswer } from './PollsAnswer';
import { PollsBackground } from './PollsBackground';
import { PollsFriend } from './PollsFriend';

// polls_poll
export interface PollsPoll {
  anonymous: boolean;
  friends?: PollsFriend[];
  /**
   * Information whether the poll with multiple choices
   */
  multiple: boolean;
  /**
   * Current user's answer ID
   */
  answer_id?: number;
  end_date: number;
  /**
   * Current user's answer IDs
   */
  answer_ids?: number[];
  closed: boolean;
  is_board: boolean;
  can_edit: boolean;
  can_vote: boolean;
  can_report: boolean;
  can_share: boolean;
  photo?: PollsBackground;
  answers: PollsAnswer[];
  /**
   * Date when poll has been created in Unixtime
   */
  created: number;
  /**
   * Poll ID
   */
  id: number;
  /**
   * Poll owner's ID
   */
  owner_id: number;
  /**
   * Poll author's ID
   */
  author_id?: number;
  /**
   * Poll question
   */
  question: string;
  background?: PollsBackground;
  /**
   * Votes number
   */
  votes: number;
  disable_unvote: boolean;
}
