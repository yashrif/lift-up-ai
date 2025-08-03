/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * This color scheme is designed for the Lift Up AI application with a modern, professional look
 * featuring purple/blue gradients and clean UI elements.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#6366F1';
const tintColorDark = '#8B5CF6';

export const Colors = {
  light: {
    text: '#1F2937',
    background: '#FFFFFF',
    backgroundSecondary: '#F9FAFB',
    tint: tintColorLight,
    icon: '#6B7280',
    tabIconDefault: '#6B7280',
    tabIconSelected: tintColorLight,
    primary: '#6366F1',
    secondary: '#8B5CF6',
    accent: '#06B6D4',
    surface: '#FFFFFF',
    border: '#E5E7EB',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
  },
  dark: {
    text: '#F9FAFB',
    background: '#111827',
    backgroundSecondary: '#1F2937',
    tint: tintColorDark,
    icon: '#9CA3AF',
    tabIconDefault: '#9CA3AF',
    tabIconSelected: tintColorDark,
    primary: '#8B5CF6',
    secondary: '#6366F1',
    accent: '#06B6D4',
    surface: '#1F2937',
    border: '#374151',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
  },
};
