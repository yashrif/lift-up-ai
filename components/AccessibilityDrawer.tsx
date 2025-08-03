import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface AccessibilityDrawerProps {
  visible: boolean;
  onClose: () => void;
  contrast: boolean;
  onToggleContrast: () => void;
  highlightLinks: boolean;
  onToggleHighlightLinks: () => void;
  biggerText: boolean;
  onToggleBiggerText: () => void;
  textSpacing: boolean;
  onToggleTextSpacing: () => void;
  pauseAnimations: boolean;
  onTogglePauseAnimations: () => void;
  dyslexia: boolean;
  onToggleDyslexia: () => void;
  cursor: boolean;
  onToggleCursor: () => void;
  textAlign: "left" | "center" | "right";
  onToggleTextAlign: () => void;
  lineHeight: boolean;
  onToggleLineHeight: () => void;
  onResetAll: () => void;
}

const AccessibilityDrawer: React.FC<AccessibilityDrawerProps> = ({
  visible,
  onClose,
  contrast,
  onToggleContrast,
  highlightLinks,
  onToggleHighlightLinks,
  biggerText,
  onToggleBiggerText,
  textSpacing,
  onToggleTextSpacing,
  pauseAnimations,
  onTogglePauseAnimations,
  dyslexia,
  onToggleDyslexia,
  cursor,
  onToggleCursor,
  textAlign,
  onToggleTextAlign,
  lineHeight,
  onToggleLineHeight,
  onResetAll,
}) => {
  const accessibilityOptions = [
    {
      id: 'contrast',
      title: 'Contrast+',
      icon: 'contrast' as keyof typeof Ionicons.glyphMap,
      isActive: contrast,
      onToggle: onToggleContrast,
    },
    {
      id: 'highlightLinks',
      title: 'Highlight Links',
      icon: 'link-outline' as keyof typeof Ionicons.glyphMap,
      isActive: highlightLinks,
      onToggle: onToggleHighlightLinks,
    },
    {
      id: 'biggerText',
      title: 'Bigger Text',
      icon: 'text-outline' as keyof typeof Ionicons.glyphMap,
      isActive: biggerText,
      onToggle: onToggleBiggerText,
    },
    {
      id: 'textSpacing',
      title: 'Text Spacing',
      icon: 'reorder-four-outline' as keyof typeof Ionicons.glyphMap,
      isActive: textSpacing,
      onToggle: onToggleTextSpacing,
    },
    {
      id: 'pauseAnimations',
      title: 'Pause Animations',
      icon: 'pause-circle-outline' as keyof typeof Ionicons.glyphMap,
      isActive: pauseAnimations,
      onToggle: onTogglePauseAnimations,
    },
    {
      id: 'dyslexia',
      title: 'Dyslexia',
      icon: 'library-outline' as keyof typeof Ionicons.glyphMap,
      isActive: dyslexia,
      onToggle: onToggleDyslexia,
    },
    {
      id: 'cursor',
      title: 'Cursor',
      icon: 'navigate-outline' as keyof typeof Ionicons.glyphMap,
      isActive: cursor,
      onToggle: onToggleCursor,
    },
    {
      id: 'textAlign',
      title: 'Text Align',
      icon: 'list-outline' as keyof typeof Ionicons.glyphMap,
      isActive: textAlign !== 'left',
      onToggle: onToggleTextAlign,
    },
    {
      id: 'lineHeight',
      title: 'Line Height',
      icon: 'resize-outline' as keyof typeof Ionicons.glyphMap,
      isActive: lineHeight,
      onToggle: onToggleLineHeight,
    },
  ];

  const renderAccessibilityOption = (option: typeof accessibilityOptions[0]) => (
    <TouchableOpacity
      key={option.id}
      style={[
        styles.optionCard,
        option.isActive && styles.optionCardActive
      ]}
      onPress={option.onToggle}
      activeOpacity={0.7}
    >
      <View style={[
        styles.iconContainer,
        option.isActive && styles.iconContainerActive
      ]}>
        <Ionicons
          name={option.icon}
          size={24}
          color={option.isActive ? Colors.light.surface : Colors.light.primary}
        />
      </View>
      <Text style={[
        styles.optionText,
        option.isActive && styles.optionTextActive
      ]}>
        {option.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.overlayTouch} onPress={onClose} />
        <View style={styles.drawerContainer}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Accessibility Menu</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color={Colors.light.text} />
            </TouchableOpacity>
          </View>

          {/* Options Grid */}
          <View style={styles.optionsGrid}>
            {accessibilityOptions.map(renderAccessibilityOption)}
          </View>

          {/* Reset Button */}
          <TouchableOpacity
            style={styles.resetButton}
            onPress={onResetAll}
            activeOpacity={0.7}
          >
            <Ionicons
              name="refresh"
              size={20}
              color={Colors.light.surface}
              style={styles.resetIcon}
            />
            <Text style={styles.resetButtonText}>Reset All Accessibility</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  overlayTouch: {
    flex: 1,
  },
  drawerContainer: {
    backgroundColor: "transparent",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingBottom: 40,
    maxHeight: "60%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 16,
    backgroundColor: Colors.light.surface,
    marginHorizontal: -20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.light.text,
  },
  closeButton: {
    padding: 4,
  },
  optionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: 16,
    gap: 8,
  },
  optionCard: {
    width: "30%",
    aspectRatio: 1,
    backgroundColor: Colors.light.surface,
    borderRadius: 16,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "transparent",
  },
  optionCardActive: {
    backgroundColor: Colors.light.primary,
    borderColor: Colors.light.primary,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.light.surfaceTransparent,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  iconContainerActive: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  optionText: {
    fontSize: 12,
    fontWeight: "500",
    color: Colors.light.text,
    textAlign: "center",
    lineHeight: 16,
  },
  optionTextActive: {
    color: Colors.light.surface,
  },
  resetButton: {
    backgroundColor: Colors.light.primary,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  resetIcon: {
    marginRight: 8,
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.light.surface,
  },
});

export default AccessibilityDrawer;
