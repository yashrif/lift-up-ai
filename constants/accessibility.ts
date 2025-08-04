import { Feather, Ionicons } from "@expo/vector-icons";

import { AccessibilityDrawerProps } from "@/types/accessibility";

export const accessibilityOptions = ({
  biggerText,
  onToggleBiggerText,
  textSpacing,
  onToggleTextSpacing,
  textAlign,
  onToggleTextAlign,
  lineHeight,
  onToggleLineHeight,
}: AccessibilityDrawerProps) => [
  {
    id: "contrast",
    title: "Contrast+",
    icon: "contrast" as keyof typeof Ionicons.glyphMap,
    iconSet: "Ionicons" as const,
    isActive: false,
    onToggle: () => {},
  },
  {
    id: "highlightLinks",
    title: "Highlight Links",
    icon: "link-outline" as keyof typeof Ionicons.glyphMap,
    iconSet: "Ionicons" as const,
    isActive: false,
    onToggle: () => {},
  },
  {
    id: "biggerText",
    title: "Bigger Text",
    icon: "text-outline" as keyof typeof Ionicons.glyphMap,
    iconSet: "Ionicons" as const,
    isActive: biggerText,
    onToggle: onToggleBiggerText,
  },
  {
    id: "textSpacing",
    title: "Text Spacing",
    icon: (textSpacing === "tight"
      ? "contract-outline"
      : textSpacing === "normal"
      ? "reorder-four-outline"
      : textSpacing === "relaxed"
      ? "add-outline"
      : textSpacing === "loose"
      ? "expand-outline"
      : "apps-outline") as keyof typeof Ionicons.glyphMap,
    iconSet: "Ionicons" as const,
    isActive: textSpacing !== "normal",
    onToggle: onToggleTextSpacing,
  },
  {
    id: "pauseAnimations",
    title: "Pause Animations",
    icon: "pause-circle-outline" as keyof typeof Ionicons.glyphMap,
    iconSet: "Ionicons" as const,
    isActive: false,
    onToggle: () => {},
  },
  {
    id: "dyslexia",
    title: "Dyslexia",
    icon: "library-outline" as keyof typeof Ionicons.glyphMap,
    iconSet: "Ionicons" as const,
    isActive: false,
    onToggle: () => {},
  },
  {
    id: "cursor",
    title: "Cursor",
    icon: "navigate-outline" as keyof typeof Ionicons.glyphMap,
    iconSet: "Ionicons" as const,
    isActive: false,
    onToggle: () => {},
  },
  {
    id: "textAlign",
    title: "Text Align",
    icon: (textAlign === "center"
      ? "align-center"
      : textAlign === "right"
      ? "align-right"
      : "align-left") as keyof typeof Feather.glyphMap,
    iconSet: "Feather" as const,
    isActive: textAlign !== "left",
    onToggle: onToggleTextAlign,
  },
  {
    id: "lineHeight",
    title: "Line Height",
    icon: (lineHeight === "tight"
      ? "contract-outline"
      : lineHeight === "tighter"
      ? "remove-outline"
      : lineHeight === "normal"
      ? "resize-outline"
      : lineHeight === "wider"
      ? "add-outline"
      : "expand-outline") as keyof typeof Ionicons.glyphMap,
    iconSet: "Ionicons" as const,
    isActive: lineHeight !== "normal",
    onToggle: onToggleLineHeight,
  },
];
