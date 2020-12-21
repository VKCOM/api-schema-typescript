/**
 * This is auto-generated file, don't modify this file manually
 */

import { PollsAnswer } from '../polls/PollsAnswer';

// board_topic_poll
export interface BoardTopicPoll {
  /**
   * Poll owner's ID
   */
  owner_id: number;
  /**
   * Poll ID
   */
  poll_id: number;
  /**
   * Date when poll has been created in Unixtime
   */
  created: number;
  /**
   * Information whether the poll is closed
   */
  is_closed?: 0 | 1;
  /**
   * Poll question
   */
  question: string;
  /**
   * Votes number
   */
  votes: number;
  /**
   * Current user's answer ID
   */
  answer_id: number;
  answers: PollsAnswer[];
}
