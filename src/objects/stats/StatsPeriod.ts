/**
 * This is auto-generated file, don't modify this file manually
 */

import { StatsActivity } from './StatsActivity';
import { StatsReach } from './StatsReach';
import { StatsViews } from './StatsViews';

// stats_period
export interface StatsPeriod {
  activity?: StatsActivity;
  period_from?: number;
  period_to?: number;
  reach?: StatsReach;
  visitors?: StatsViews;
}
