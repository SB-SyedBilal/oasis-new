/**
 * Oasis Academy Theme Colors
 * This file centralizes the application's color scheme for consistent branding
 */

// Primary Colors
export const PRIMARY_TEXT = '#37393F';  // Dark gray for text
export const PRIMARY_GREEN = '#18A000'; // Bright green for buttons and accents

// Derived/Secondary Colors
export const PRIMARY_GREEN_HOVER = '#148800'; // Darker green for hover states
export const PRIMARY_GREEN_LIGHT = '#e6f7e6'; // Light green for backgrounds

// Common UI Colors
export const WHITE = '#FFFFFF';
export const BLACK = '#000000';
export const ERROR = '#DC2626'; // Red for error messages
export const SUCCESS = '#16A34A'; // Green for success messages
export const WARNING = '#F59E0B'; // Amber for warnings
export const INFO = '#3B82F6';    // Blue for info messages

// Background Colors
export const BG_LIGHT = '#F9FAFB';
export const BG_DARK = '#2A2A2A';

// Export as a theme object for easier imports
export const theme = {
  colors: {
    primary: {
      text: PRIMARY_TEXT,
      green: PRIMARY_GREEN,
      greenHover: PRIMARY_GREEN_HOVER,
      greenLight: PRIMARY_GREEN_LIGHT
    },
    ui: {
      white: WHITE,
      black: BLACK,
      error: ERROR,
      success: SUCCESS,
      warning: WARNING,
      info: INFO
    },
    background: {
      light: BG_LIGHT,
      dark: BG_DARK
    }
  }
};

export default theme;
