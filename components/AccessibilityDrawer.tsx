import { Feather, Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { accessibilityOptions } from "@/constants/accessibility";
import { colors } from "@/constants/colors";
import {
  AccessibilityDrawerProps,
  AccessibilityOption,
} from "@/types/accessibility";

const AccessibilityDrawer: React.FC<AccessibilityDrawerProps> = (props) => {
  const { visible, onClose, onResetAll } = props;

  const renderAccessibilityOption = (option: AccessibilityOption) => (
    <TouchableOpacity
      key={option.id}
      style={[styles.optionCard, option.isActive && styles.optionCardActive]}
      onPress={option.onToggle}
      activeOpacity={0.7}
    >
      <View
        style={[
          styles.iconContainer,
          option.isActive && styles.iconContainerActive,
        ]}
      >
        {option.iconSet === "Ionicons" ? (
          <Ionicons
            name={option.icon as keyof typeof Ionicons.glyphMap}
            size={24}
            color={option.isActive ? colors.light.surface : ""}
          />
        ) : (
          <Feather
            name={option.icon as keyof typeof Feather.glyphMap}
            size={24}
            color={option.isActive ? colors.light.surface : ""}
          />
        )}
      </View>
      <Text
        style={[styles.optionText, option.isActive && styles.optionTextActive]}
      >
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
        <BlurView intensity={120} tint="light" style={styles.drawerContainer}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Accessibility Menu</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={16} color={colors.light.text} />
            </TouchableOpacity>
          </View>

          <View style={styles.separator} />

          {/* Options Grid */}
          <View style={styles.optionsGrid}>
            {accessibilityOptions(props).map(renderAccessibilityOption)}
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
              color={colors.light.surface}
              style={styles.resetIcon}
            />
            <Text style={styles.resetButtonText}>Reset All Accessibility</Text>
          </TouchableOpacity>
        </BlurView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  overlayTouch: {
    flex: 1,
  },
  drawerContainer: {
    backgroundColor: "#BF19FC99",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingBottom: 80,
    maxHeight: "63%",
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 16,
    marginHorizontal: -20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,

    borderTopColor: "white",
    borderTopWidth: 2,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.light.text,
  },
  closeButton: {
    padding: 4,
    borderRadius: 9999,
    borderWidth: 2,
  },
  separator: {
    height: 2,
    width: "100%",
    backgroundColor: "white",
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
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 16,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  optionCardActive: {
    backgroundColor: colors.light.primary,
    borderColor: colors.light.primary,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
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
    color: colors.light.text,
    textAlign: "center",
    lineHeight: 16,
  },
  optionTextActive: {
    color: colors.light.surface,
  },
  resetButton: {
    backgroundColor: colors.light.secondary,
    borderRadius: 24,
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
    color: colors.light.surface,
  },
});

export default AccessibilityDrawer;
