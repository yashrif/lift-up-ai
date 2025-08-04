import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export type TextSpacing =
  | "tight"
  | "normal"
  | "relaxed"
  | "loose"
  | "extra-loose";
export type TextAlign = "left" | "center" | "right";
export type LineHeight = "tight" | "tighter" | "normal" | "wider" | "widest";

export type AccessibilitySettings = {
  biggerText: boolean;
  textSpacing: TextSpacing;
  textAlign: TextAlign;
  lineHeight: LineHeight;
};

export type AccessibilityOption = {
  id: string;
  title: string;
  icon:
    | keyof typeof Ionicons.glyphMap
    | keyof typeof Feather.glyphMap
    | keyof typeof MaterialCommunityIcons.glyphMap;
  iconSet: "Ionicons" | "Feather" | "MaterialCommunityIcons";
  isActive: boolean;
  onToggle: () => void;
};

export type AccessibilityDrawerProps = {
  visible: boolean;
  onClose: () => void;
  biggerText: boolean;
  onToggleBiggerText: () => void;
  textSpacing: TextSpacing;
  onToggleTextSpacing: () => void;
  textAlign: TextAlign;
  onToggleTextAlign: () => void;
  lineHeight: LineHeight;
  onToggleLineHeight: () => void;
  onResetAll: () => void;
};
