import { TextStyle } from "react-native";

import {
  AccessibilitySettings,
  LineHeight,
  TextAlign,
  TextSpacing,
} from "@/types/accessibility";

export const applyAccessibilityStyles = (
  baseStyle: TextStyle,
  settings: AccessibilitySettings
): TextStyle => {
  const { biggerText, textSpacing, textAlign, lineHeight } = settings;

  // Line height values
  const lineHeightValues: Record<LineHeight, number> = {
    tight: 0.8,
    tighter: 0.9,
    normal: 1.0,
    wider: 1.3,
    widest: 1.6,
  };

  // Letter spacing values
  const letterSpacingValues: Record<TextSpacing, number> = {
    tight: -0.5,
    normal: 0,
    relaxed: 1,
    loose: 2,
    "extra-loose": 3,
  };

  // Text alignment mapping
  const textAlignMapping: Record<TextAlign, "left" | "center" | "right"> = {
    left: "left",
    center: "center",
    right: "right",
  };

  return {
    ...baseStyle,
    fontSize:
      biggerText && baseStyle.fontSize
        ? baseStyle.fontSize * 1.2
        : baseStyle.fontSize,

    // line height
    lineHeight:
      (baseStyle.lineHeight || (baseStyle.fontSize || 16) * 1.2) *
      lineHeightValues[lineHeight],

    // letter spacing
    letterSpacing:
      (baseStyle.letterSpacing || 0) + letterSpacingValues[textSpacing],

    // text alignment
    textAlign: textAlignMapping[textAlign],
  };
};

export const getFlexAlignment = (
  textAlign: TextAlign
): "flex-start" | "center" | "flex-end" => {
  switch (textAlign) {
    case "left":
      return "flex-start";
    case "center":
      return "center";
    case "right":
      return "flex-end";
    default:
      return "flex-start";
  }
};
