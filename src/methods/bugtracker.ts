/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseUploadServer } from '../objects/base/BaseUploadServer';
import { BugtrackerAddCompanyGroupsMembersError } from '../objects/bugtracker/BugtrackerAddCompanyGroupsMembersError';
import { BugtrackerBugreport } from '../objects/bugtracker/BugtrackerBugreport';
import { BugtrackerBugreportSubscribeState } from '../objects/bugtracker/BugtrackerBugreportSubscribeState';
import { BugtrackerComment } from '../objects/bugtracker/BugtrackerComment';
import { BugtrackerCompanyMember } from '../objects/bugtracker/BugtrackerCompanyMember';
import { UsersUserFull } from '../objects/users/UsersUserFull';

/**
 * bugtracker.addCompanyGroupsMembers
 */

export interface BugtrackerAddCompanyGroupsMembersParams {
  company_id: number;
  user_ids: string;
  company_group_ids: string;
}

// bugtracker.addCompanyGroupsMembers_response
export interface BugtrackerAddCompanyGroupsMembersResponse {
  errors?: BugtrackerAddCompanyGroupsMembersError[];
}

/**
 * bugtracker.addCompanyMembers
 */

export interface BugtrackerAddCompanyMembersParams {
  user_ids: string;
  company_id: number;
}

// bugtracker.addCompanyMembers_response
export interface BugtrackerAddCompanyMembersResponse {
  errors?: string[];
}

/**
 * bugtracker.changeBugreportStatus
 */

export interface BugtrackerChangeBugreportStatusParams {
  bugreport_id: number;
  status?: number;
  comment?: string;
  from_statuses?: string;
  not_in_statuses?: string;
}

// bugtracker.changeBugreportStatus_response
export type BugtrackerChangeBugreportStatusResponse = 0 | 1;

/**
 * bugtracker.createComment
 *
 * Creates the comment to bugreport
 */

export interface BugtrackerCreateCommentParams {
  bugreport_id: number;
  text?: string;
  hidden?: 0 | 1;
  hidden_attachments?: 0 | 1;
  force?: 0 | 1;
}

// bugtracker.createComment_response
export interface BugtrackerCreateCommentResponse {
  comment?: BugtrackerComment;
  comment_flood?: boolean;
  subscribe_state?: BugtrackerBugreportSubscribeState;
}

/**
 * bugtracker.getBugreportById
 *
 * Returns extended bugreport data
 */

export interface BugtrackerGetBugreportByIdParams {
  bugreport_id: number;
  extended?: 0 | 1;
  /**
   * objects.json#/definitions/base_user_group_fields
   */
  fields?: string;
}

// bugtracker.getBugreportById_response
export interface BugtrackerGetBugreportByIdResponse {
  bugreport?: BugtrackerBugreport;
  profiles?: UsersUserFull[];
}

/**
 * bugtracker.getCompanyGroupMembers
 */

export interface BugtrackerGetCompanyGroupMembersParams {
  company_id: number;
  company_group_id: number;
  count?: number;
  offset?: number;
  filter_name?: string;
  extended?: 0 | 1;
  /**
   * objects.json#/definitions/base_user_group_fields
   */
  fields?: string;
}

// bugtracker.getCompanyGroupMembers_response
export interface BugtrackerGetCompanyGroupMembersResponse {
  user_ids?: number[];
  profiles?: UsersUserFull[];
}

/**
 * bugtracker.getCompanyMembers
 */

export interface BugtrackerGetCompanyMembersParams {
  company_id: number;
  count?: number;
  offset?: number;
  filter_name?: string;
  filter_role?: 0 | 1;
  filter_not_group?: number;
  filter_member_ids?: string;
  extended?: 0 | 1;
  /**
   * objects.json#/definitions/base_user_group_fields
   */
  fields?: string;
  extra?: 0 | 1;
}

// bugtracker.getCompanyMembers_response
export interface BugtrackerGetCompanyMembersResponse {
  company_members?: BugtrackerCompanyMember[];
  count?: number;
  profiles?: UsersUserFull[];
}

/**
 * bugtracker.getDownloadVersionUrl
 */

export interface BugtrackerGetDownloadVersionUrlParams {
  product_id: number;
  version_id: number;
  ttl?: number;
}

// bugtracker.getDownloadVersionUrl_response
export interface BugtrackerGetDownloadVersionUrlResponse {
  url?: string;
  app_title?: string;
  bundle_name?: string;
  build_id?: number;
  build_name?: string;
  build_title?: string;
}

/**
 * bugtracker.getProductBuildUploadServer
 */

export interface BugtrackerGetProductBuildUploadServerParams {
  product_id: number;
}

// bugtracker.getProductBuildUploadServer_response
export type BugtrackerGetProductBuildUploadServerResponse = BaseUploadServer;

/**
 * bugtracker.removeCompanyGroupMember
 */

export interface BugtrackerRemoveCompanyGroupMemberParams {
  company_id: number;
  user_id: number;
  company_group_id: number;
}

// bugtracker.removeCompanyGroupMember_response
export type BugtrackerRemoveCompanyGroupMemberResponse = 1;

/**
 * bugtracker.removeCompanyMember
 */

export interface BugtrackerRemoveCompanyMemberParams {
  user_id: number;
  company_id: number;
}

// bugtracker.removeCompanyMember_response
export type BugtrackerRemoveCompanyMemberResponse = 1;

/**
 * bugtracker.saveProductVersion
 */

export interface BugtrackerSaveProductVersionParams {
  product_id?: number;
  version_id?: number;
  title: string;
  release_notes?: string;
  visible?: 0 | 1;
  set_rft?: 0 | 1;
}

// bugtracker.saveProductVersion_response
export type BugtrackerSaveProductVersionResponse = 1;

/**
 * bugtracker.setCompanyMemberRole
 */

export interface BugtrackerSetCompanyMemberRoleParams {
  user_id: number;
  company_id: number;
  role: 0 | 1;
}

// bugtracker.setCompanyMemberRole_response
export type BugtrackerSetCompanyMemberRoleResponse = 1;

/**
 * bugtracker.setProductIsOver
 */

export interface BugtrackerSetProductIsOverParams {
  product_id: number;
  is_over?: 0 | 1;
}

// bugtracker.setProductIsOver_response
export type BugtrackerSetProductIsOverResponse = 1;
