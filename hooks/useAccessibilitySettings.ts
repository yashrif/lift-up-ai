import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

import {
  AccessibilitySettings,
  LineHeight,
  TextAlign,
  TextSpacing,
} from "@/types/accessibility";

// Default settings
const DEFAULT_SETTINGS: AccessibilitySettings = {
  biggerText: false,
  textSpacing: "normal",
  textAlign: "left",
  lineHeight: "normal",
};

// Storage key
const STORAGE_KEY = "@accessibility_settings";

export { DEFAULT_SETTINGS, STORAGE_KEY };

export const useAccessibilitySettings = () => {
  const [settings, setSettings] =
    useState<AccessibilitySettings>(DEFAULT_SETTINGS);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load settings from AsyncStorage
  const loadSettings = useCallback(async () => {
    try {
      const storedSettings = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedSettings) {
        const parsedSettings = JSON.parse(storedSettings);
        const mergedSettings = { ...DEFAULT_SETTINGS, ...parsedSettings };
        setSettings(mergedSettings);
        console.log("Accessibility settings loaded:", mergedSettings);
      } else {
        console.log("No stored accessibility settings found, using defaults");
      }
    } catch (error) {
      console.warn("Failed to load accessibility settings:", error);
      setSettings(DEFAULT_SETTINGS);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save settings to AsyncStorage
  const saveSettings = useCallback(
    async (newSettings: AccessibilitySettings) => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newSettings));
        setSettings(newSettings);
        console.log("Accessibility settings saved:", newSettings);
      } catch (error) {
        console.warn("Failed to save accessibility settings:", error);
      }
    },
    []
  );

  // Update a specific setting
  const updateSetting = useCallback(
    <K extends keyof AccessibilitySettings>(
      key: K,
      value: AccessibilitySettings[K]
    ) => {
      const newSettings = { ...settings, [key]: value };
      saveSettings(newSettings);
    },
    [settings, saveSettings]
  );

  // Toggle boolean settings
  const toggleBiggerText = useCallback(() => {
    updateSetting("biggerText", !settings.biggerText);
  }, [settings.biggerText, updateSetting]);

  // Cycle through text spacing options
  const toggleTextSpacing = useCallback(() => {
    const spacings: TextSpacing[] = [
      "normal",
      "tight",
      "relaxed",
      "loose",
      "extra-loose",
    ];
    const currentIndex = spacings.indexOf(settings.textSpacing);
    const nextIndex = (currentIndex + 1) % spacings.length;
    updateSetting("textSpacing", spacings[nextIndex]);
  }, [settings.textSpacing, updateSetting]);

  // Cycle through text alignment options
  const toggleTextAlign = useCallback(() => {
    const alignments: TextAlign[] = ["left", "center", "right"];
    const currentIndex = alignments.indexOf(settings.textAlign);
    const nextIndex = (currentIndex + 1) % alignments.length;
    updateSetting("textAlign", alignments[nextIndex]);
  }, [settings.textAlign, updateSetting]);

  // Cycle through line height options
  const toggleLineHeight = useCallback(() => {
    const lineHeights: LineHeight[] = [
      "normal",
      "tight",
      "tighter",
      "wider",
      "widest",
    ];
    const currentIndex = lineHeights.indexOf(settings.lineHeight);
    const nextIndex = (currentIndex + 1) % lineHeights.length;
    updateSetting("lineHeight", lineHeights[nextIndex]);
  }, [settings.lineHeight, updateSetting]);

  // Reset all settings to default
  const resetAll = useCallback(() => {
    saveSettings(DEFAULT_SETTINGS);
  }, [saveSettings]);

  // Load settings on mount
  useEffect(() => {
    loadSettings();
  }, [loadSettings]);

  return {
    // Settings state
    settings,
    isLoaded,

    // Individual setting values for easier access
    biggerText: settings.biggerText,
    textSpacing: settings.textSpacing,
    textAlign: settings.textAlign,
    lineHeight: settings.lineHeight,

    // Actions
    toggleBiggerText,
    toggleTextSpacing,
    toggleTextAlign,
    toggleLineHeight,
    resetAll,
    updateSetting,
  };
};
