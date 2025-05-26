/**
 * This is auto-generated file, don't modify this file manually
 */

import { StreamingStatsPoint } from './StreamingStatsPoint';

// streaming_stats
export interface StreamingStats {
  /**
   * Events type
   */
  event_type?: 'post' | 'comment' | 'share';
  /**
   * Statistics
   */
  stats?: StreamingStatsPoint[];
}
