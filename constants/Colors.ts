/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * This color scheme is designed for the Lift Up AI application with a modern, professional look
 * featuring purple/blue gradients and clean UI elements.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#7B2CBF';
const tintColorDark = '#9d4edd';

export const Colors = {
  light: {
    text: '#333333',
    textSecondary: '#666666',
    background: '#f7e1fa',
    backgroundGradientStart: '#F7E1FA',
    backgroundGradientMid: '#F2E4E4',
    backgroundGradientEnd: '#F7E1FA',
    backgroundSecondary: '#FFFFFF',
    tint: tintColorLight,
    icon: '#6B7280',
    tabIconDefault: '#6B7280',
    tabIconSelected: tintColorLight,
    primary: '#7B2CBF',
    secondary: '#9d4edd',
    accent: '#06B6D4',
    surface: '#FFFFFF',
    surfaceTransparent: '#7B2CBF1A',
    border: '#E5E7EB',
    borderDark: '#000000',
    buttonGradientStart: '#FFE066',
    buttonGradientEnd: '#9D4EDD',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
  },
  dark: {
    text: '#F9FAFB',
    textSecondary: '#D1D5DB',
    background: '#111827',
    backgroundGradientStart: '#1F2937',
    backgroundGradientMid: '#374151',
    backgroundGradientEnd: '#1F2937',
    backgroundSecondary: '#1F2937',
    tint: tintColorDark,
    icon: '#9CA3AF',
    tabIconDefault: '#9CA3AF',
    tabIconSelected: tintColorDark,
    primary: '#9d4edd',
    secondary: '#7B2CBF',
    accent: '#06B6D4',
    surface: '#1F2937',
    surfaceTransparent: '#9D4EDD33',
    border: '#374151',
    borderDark: '#6B7280',
    buttonGradientStart: '#FFE066CC',
    buttonGradientEnd: '#9D4EDDE6',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
  },
};
