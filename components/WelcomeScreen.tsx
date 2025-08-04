import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useMemo, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors } from "@/constants/colors";
import { welcomeTexts } from "@/constants/welcome";
import { useAccessibilitySettings } from "@/hooks/useAccessibilitySettings";
import {
  applyAccessibilityStyles,
  getFlexAlignment,
} from "@/utils/accessibilityUtils";
import AccessibilityDrawer from "./AccessibilityDrawer";
import { Logo } from "./Icons";
import LoadingSpinner from "./LoadingSpinner";

const WelcomeScreen = () => {
  const insets = useSafeAreaInsets();

  // accessibility settings
  const {
    biggerText,
    textSpacing,
    textAlign,
    lineHeight,
    toggleBiggerText,
    toggleTextSpacing,
    toggleTextAlign,
    toggleLineHeight,
    resetAll,
    isLoaded,
  } = useAccessibilitySettings();

  // state management
  const [isAccessibilityDrawerVisible, setIsAccessibilityDrawerVisible] =
    useState(false);

  const textAlignProperty = useMemo(
    () => getFlexAlignment(textAlign),
    [textAlign]
  );

  // dynamic styles
  const getTextStyles = (baseStyle: any) => {
    return applyAccessibilityStyles(baseStyle, {
      biggerText,
      textSpacing,
      textAlign,
      lineHeight,
    });
  };

  if (!isLoaded) {
    return (
      <View style={[styles.container, { paddingTop: insets.top + 10 }]}>
        <LoadingSpinner message="Loading accessibility settings..." />
      </View>
    );
  }

  return (
    <>
      <View style={[styles.topBar, { marginTop: insets.top + 10 }]}>
        <TouchableOpacity onPress={() => setIsAccessibilityDrawerVisible(true)}>
          <View style={styles.accessibilityButton}>
            <View style={styles.accessibilityIconContainer}>
              <Ionicons name="accessibility" style={styles.accessibilityIcon} />
            </View>
            {!isAccessibilityDrawerVisible && (
              <Text style={styles.accessibilityText}>
                {welcomeTexts.accessibility}
              </Text>
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.languageButton}>
            <Image
              source={require("../assets/images/us-flag.png")}
              style={styles.languageIcon}
              resizeMode="contain"
            />
            <Text style={styles.languageText}>{welcomeTexts.language}</Text>
            <Ionicons name="chevron-down" size={20} color="#000000" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        {/* Main Content */}
        <View
          style={[
            styles.content,
            {
              alignItems:
                textAlign === "left"
                  ? "flex-start"
                  : textAlign === "center"
                  ? "center"
                  : "flex-end",
            },
          ]}
        >
          {/* Logo Section */}
          <View
            style={[
              styles.logoContainer,
              {
                alignItems: textAlignProperty,
              },
            ]}
          >
            <Logo style={styles.logo} />
            <Text style={getTextStyles(styles.appName)}>
              {welcomeTexts.appName}
            </Text>
          </View>

          {/* Welcome Text */}
          <View
            style={[
              styles.welcomeTextContainer,
              {
                alignItems: textAlignProperty,
              },
            ]}
          >
            <Text style={getTextStyles(styles.welcomeText)}>
              {welcomeTexts.welcomeTo}
            </Text>
            <Text style={getTextStyles(styles.welcomeTextAppName)}>
              {welcomeTexts.appName}
            </Text>
          </View>
          <Text style={getTextStyles(styles.subtitle)}>
            {welcomeTexts.subtitle}
          </Text>
        </View>

        {/* Button Section */}
        <View style={styles.buttonContainer}>
          <LinearGradient
            colors={["#ffe066", "#9d4edd"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.getStartedButton}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}
            >
              <Text style={styles.getStartedText}>
                {welcomeTexts.getStarted}
              </Text>
              <Ionicons name="chevron-forward" size={24} color="#ffffff" />
            </View>
          </LinearGradient>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>{welcomeTexts.login}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Accessibility Drawer */}
      <AccessibilityDrawer
        visible={isAccessibilityDrawerVisible}
        onClose={() => setIsAccessibilityDrawerVisible(false)}
        biggerText={biggerText}
        onToggleBiggerText={toggleBiggerText}
        textSpacing={textSpacing}
        onToggleTextSpacing={toggleTextSpacing}
        textAlign={textAlign}
        onToggleTextAlign={toggleTextAlign}
        lineHeight={lineHeight}
        onToggleLineHeight={toggleLineHeight}
        onResetAll={resetAll}
      />
    </>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accessibilityButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "white",
    borderRadius: 20,
  },
  accessibilityIconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 24,
    width: 24,
    borderColor: colors.light.borderDark,
    borderWidth: 1.5,
    borderRadius: 9999,
  },
  accessibilityIcon: {
    fontSize: 16,
  },
  accessibilityText: {
    color: colors.light.text,
    fontSize: 16,
    fontWeight: "500",
  },
  languageButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "transparent",
    borderRadius: 20,
  },
  languageIcon: {
    width: 20,
    height: 20,
  },
  languageText: {
    color: colors.light.primary,
    fontSize: 16,
    fontWeight: "500",
  },

  bottomContainer: {
    flexDirection: "column",
    gap: 32,
    backgroundColor: "transparent",
  },
  content: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 12,
  },
  logoContainer: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    marginBottom: 24,
  },
  logo: {
    width: 48,
    height: 48,
  },
  appName: {
    fontSize: 36,
    fontWeight: "bold",
    color: colors.light.primary,
    letterSpacing: 0.5,
    lineHeight: 42,
  },
  welcomeTextContainer: {
    marginBottom: 12,
    flexDirection: "column",
    gap: 6,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "600",
    color: colors.light.text,
    lineHeight: 38,
    letterSpacing: 0.5,
  },
  welcomeTextAppName: {
    fontSize: 32,
    fontWeight: "600",
    color: colors.light.secondary,
    lineHeight: 38,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    color: colors.light.textSecondary,
    lineHeight: 24,
    letterSpacing: 0.3,
  },
  buttonContainer: {
    marginBottom: 40,
    paddingHorizontal: 12,
  },
  getStartedButton: {
    paddingVertical: 16,
    borderRadius: 30,
    marginBottom: 15,
    alignItems: "center",
    // shadowColor: "#7B2CBF",
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 0.3,
    // shadowRadius: 6,
    // elevation: 5,
  },
  getStartedText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  loginButton: {
    paddingVertical: 16,
    borderRadius: 30,
    backgroundColor: colors.light.surface,
    alignItems: "center",
  },
  loginText: {
    fontSize: 18,
    fontWeight: "600",
  },
});

export default WelcomeScreen;
