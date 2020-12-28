/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseUploadServer } from '../objects/base/BaseUploadServer';
import { PollsBackground } from '../objects/polls/PollsBackground';
import { PollsPoll } from '../objects/polls/PollsPoll';
import { PollsVoters } from '../objects/polls/PollsVoters';

/**
 * polls.addVote
 *
 * Adds the current user's vote to the selected answer in the poll.
 */

export interface PollsAddVoteParams {
  /**
   * ID of the user or community that owns the poll. Use a negative value to designate a community ID.
   */
  owner_id?: number;
  /**
   * Poll ID.
   */
  poll_id: number;
  answer_ids: string;
  is_board?: 0 | 1;
}

// polls.addVote_response
export type PollsAddVoteResponse = 0 | 1;

/**
 * polls.create
 *
 * Creates polls that can be attached to the users' or communities' posts.
 */

export interface PollsCreateParams {
  /**
   * question text
   */
  question?: string;
  /**
   * '1' – anonymous poll, participants list is hidden,, '0' – public poll, participants list is available,, Default value is '0'.
   */
  is_anonymous?: 0 | 1;
  is_multiple?: 0 | 1;
  end_date?: number;
  /**
   * If a poll will be added to a communty it is required to send a negative group identifier. Current user by default.
   */
  owner_id?: number;
  /**
   * available answers list, for example: " ["yes","no","maybe"]", There can be from 1 to 10 answers.
   */
  add_answers?: string;
  photo_id?: number;
  background_id?: 1 | 2 | 3 | 4 | 6 | 8 | 9;
  disable_unvote?: 0 | 1;
}

// polls.create_response
export type PollsCreateResponse = PollsPoll;

/**
 * polls.deleteVote
 *
 * Deletes the current user's vote from the selected answer in the poll.
 */

export interface PollsDeleteVoteParams {
  /**
   * ID of the user or community that owns the poll. Use a negative value to designate a community ID.
   */
  owner_id?: number;
  /**
   * Poll ID.
   */
  poll_id: number;
  /**
   * Answer ID.
   */
  answer_id: number;
  is_board?: 0 | 1;
}

// polls.deleteVote_response
export type PollsDeleteVoteResponse = 0 | 1;

/**
 * polls.edit
 *
 * Edits created polls
 */

export interface PollsEditParams {
  /**
   * poll owner id
   */
  owner_id?: number;
  /**
   * edited poll's id
   */
  poll_id: number;
  /**
   * new question text
   */
  question?: string;
  /**
   * answers list, for example: , "["yes","no","maybe"]"
   */
  add_answers?: string;
  /**
   * object containing answers that need to be edited,, key – answer id, value – new answer text. Example: {"382967099":"option1", "382967103":"option2"}"
   */
  edit_answers?: string;
  /**
   * list of answer ids to be deleted. For example: "[382967099, 382967103]"
   */
  delete_answers?: string;
  end_date?: number;
  photo_id?: number;
  background_id?: 0 | 1 | 2 | 3 | 4 | 6 | 8 | 9;
}

// polls.edit_response
export type PollsEditResponse = 1;

/**
 * polls.getBackgrounds
 */

export interface PollsGetBackgroundsParams {}

// polls.getBackgrounds_response
export type PollsGetBackgroundsResponse = PollsBackground[];

/**
 * polls.getById
 *
 * Returns detailed information about a poll by its ID.
 */

export interface PollsGetByIdParams {
  /**
   * ID of the user or community that owns the poll. Use a negative value to designate a community ID.
   */
  owner_id?: number;
  /**
   * '1' – poll is in a board, '0' – poll is on a wall. '0' by default.
   */
  is_board?: 0 | 1;
  /**
   * Poll ID.
   */
  poll_id: number;
  extended?: 0 | 1;
  friends_count?: number;
  fields?: string;
  name_case?: 'abl' | 'acc' | 'dat' | 'gen' | 'ins' | 'nom';
}

// polls.getById_response
export type PollsGetByIdResponse = PollsPoll;

/**
 * polls.getPhotoUploadServer
 */

export interface PollsGetPhotoUploadServerParams {
  owner_id?: number;
}

// polls.getPhotoUploadServer_response
export type PollsGetPhotoUploadServerResponse = BaseUploadServer;

/**
 * polls.getVoters
 *
 * Returns a list of IDs of users who selected specific answers in the poll.
 */

export interface PollsGetVotersParams {
  /**
   * ID of the user or community that owns the poll. Use a negative value to designate a community ID.
   */
  owner_id?: number;
  /**
   * Poll ID.
   */
  poll_id: number;
  /**
   * Answer IDs.
   */
  answer_ids: string;
  is_board?: 0 | 1;
  /**
   * '1' — to return only current user's friends, '0' — to return all users (default),
   */
  friends_only?: 0 | 1;
  /**
   * Offset needed to return a specific subset of voters. '0' — (default)
   */
  offset?: number;
  /**
   * Number of user IDs to return (if the 'friends_only' parameter is not set, maximum '1000', otherwise '10'). '100' — (default)
   */
  count?: number;
  /**
   * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate (birthdate)', 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online', 'counters'.
   *
   * objects.json#/definitions/users_fields
   */
  fields?: string;
  /**
   * Case for declension of user name and surname: , 'nom' — nominative (default) , 'gen' — genitive , 'dat' — dative , 'acc' — accusative , 'ins' — instrumental , 'abl' — prepositional
   */
  name_case?: 'nom' | 'gen' | 'dat' | 'acc' | 'ins' | 'abl';
}

// polls.getVoters_response
export type PollsGetVotersResponse = PollsVoters[];

/**
 * polls.savePhoto
 */

export interface PollsSavePhotoParams {
  photo: string;
  hash: string;
}

// polls.savePhoto_response
export type PollsSavePhotoResponse = PollsBackground;
