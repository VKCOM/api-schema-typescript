/**
 * This is auto-generated file, don't modify this file manually
 */

import { BaseGradientPoint } from '../base/BaseGradientPoint';
import { BaseImage } from '../base/BaseImage';

// polls_background type enum
export enum PollsBackgroundTypeEnum {
  GRADIENT = 'gradient',
  TILE = 'tile',
}

// polls_background
export interface PollsBackground {
  /**
   * Gradient angle with 0 on positive X axis
   */
  angle?: number;
  /**
   * Hex color code without #
   */
  color?: string;
  /**
   * Original height of pattern tile
   */
  height?: number;
  id?: number;
  name?: string;
  /**
   * Pattern tiles
   */
  images?: BaseImage[];
  /**
   * Gradient points
   */
  points?: BaseGradientPoint[];
  type?: PollsBackgroundTypeEnum;
  /**
   * Original with of pattern tile
   */
  width?: number;
}
