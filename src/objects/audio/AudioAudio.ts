/**
 * This is auto-generated file, don't modify this file manually
 */

// audio_audio
export interface AudioAudio {
  /**
   * Access key for the audio
   */
  access_key?: string;
  /**
   * Artist name
   */
  artist?: string;
  /**
   * Audio ID
   */
  id?: number;
  /**
   * Audio owner's ID
   */
  owner_id?: number;
  /**
   * Title
   */
  title?: string;
  /**
   * URL of mp3 file
   */
  url?: string;
  /**
   * Duration in seconds
   */
  duration?: number;
  /**
   * Stream duration in seconds
   */
  stream_duration?: number;
  /**
   * Date when uploaded
   */
  date?: number;
  /**
   * Album ID
   */
  album_id?: number;
  /**
   * Performer name
   */
  performer?: string;
  /**
   * Примерный объем памяти занимаемый аудио на устройстве. Реализовано только для эпизодов подкастов
   */
  file_size?: number;
}
