import { Feather, Ionicons } from "@expo/vector-icons";

export type AccessibilityOption = {
  id: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap | keyof typeof Feather.glyphMap;
  iconSet: "Ionicons" | "Feather";
  isActive: boolean;
  onToggle: () => void;
};

export type AccessibilityDrawerProps = {
  visible: boolean;
  onClose: () => void;
  biggerText: boolean;
  onToggleBiggerText: () => void;
  textSpacing: "tight" | "normal" | "relaxed" | "loose" | "extra-loose";
  onToggleTextSpacing: () => void;
  textAlign: "left" | "center" | "right";
  onToggleTextAlign: () => void;
  lineHeight: "tight" | "tighter" | "normal" | "wider" | "widest";
  onToggleLineHeight: () => void;
  onResetAll: () => void;
};
