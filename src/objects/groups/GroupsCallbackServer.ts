/**
 * This is auto-generated file, don't modify this file manually
 */

// groups_callback_server status enumNames
export const GroupsCallbackServerStatusEnumNames = {
  UNCONFIGURED: 'unconfigured',
  FAILED: 'failed',
  WAIT: 'wait',
  OK: 'ok',
} as const;

// groups_callback_server
export interface GroupsCallbackServer {
  id: number;
  title: string;
  creator_id: number;
  url: string;
  secret_key: string;
  status: 'unconfigured' | 'failed' | 'wait' | 'ok';
}
