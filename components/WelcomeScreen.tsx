import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useMemo, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AccessibilityDrawer from "./AccessibilityDrawer";
import { Logo } from "./Icons";

const WelcomeScreen = () => {
  // state management
  const [isAccessibilityDrawerVisible, setIsAccessibilityDrawerVisible] =
    useState(false);
  const [biggerText, setBiggerText] = useState(false);
  const [textSpacing, setTextSpacing] = useState<
    "tight" | "normal" | "relaxed" | "loose" | "extra-loose"
  >("normal");
  const [textAlign, setTextAlign] = useState<"left" | "center" | "right">(
    "left"
  );
  const [lineHeight, setLineHeight] = useState<
    "tight" | "tighter" | "normal" | "wider" | "widest"
  >("normal");
  const textAlignProperty = useMemo(
    () =>
      textAlign === "left"
        ? "flex-start"
        : textAlign === "center"
        ? "center"
        : "flex-end",
    [textAlign]
  );

  // handlers
  const handleToggleBiggerText = () => setBiggerText(!biggerText);
  const handleToggleTextSpacing = () => {
    const spacings: (
      | "tight"
      | "normal"
      | "relaxed"
      | "loose"
      | "extra-loose"
    )[] = ["normal", "tight", "relaxed", "loose", "extra-loose"];
    const currentIndex = spacings.indexOf(textSpacing);
    const nextIndex = (currentIndex + 1) % spacings.length;
    setTextSpacing(spacings[nextIndex]);
  };
  const handleToggleTextAlign = () => {
    const alignments: ("left" | "center" | "right")[] = [
      "left",
      "center",
      "right",
    ];
    const currentIndex = alignments.indexOf(textAlign);
    const nextIndex = (currentIndex + 1) % alignments.length;
    setTextAlign(alignments[nextIndex]);
  };
  const handleToggleLineHeight = () => {
    const lineHeights: ("tight" | "tighter" | "normal" | "wider" | "widest")[] =
      ["normal", "tight", "tighter", "wider", "widest"];
    const currentIndex = lineHeights.indexOf(lineHeight);
    const nextIndex = (currentIndex + 1) % lineHeights.length;
    setLineHeight(lineHeights[nextIndex]);
  };
  const handleResetAll = () => {
    setBiggerText(false);
    setTextSpacing("normal");
    setTextAlign("left");
    setLineHeight("normal");
  };

  // dynamic styles
  const getTextStyles = (baseStyle: any) => {
    const lineHeightMultipliers = {
      tight: 0.8,
      tighter: 0.9,
      normal: 1.0,
      wider: 1.3,
      widest: 1.6,
    };

    const letterSpacingValues = {
      tight: -0.5,
      normal: 0,
      relaxed: 1,
      loose: 2,
      "extra-loose": 3,
    };

    return {
      ...baseStyle,
      lineHeight:
        (baseStyle.lineHeight || baseStyle.fontSize * 1.2) *
        lineHeightMultipliers[lineHeight],
      letterSpacing:
        (baseStyle.letterSpacing || 0) + letterSpacingValues[textSpacing],
      textAlign: textAlign,
      fontSize: biggerText ? baseStyle.fontSize * 1.2 : baseStyle.fontSize,
    };
  };

  const getContainerStyles = () => ({
    backgroundColor: "transparent",
  });

  return (
    <>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => setIsAccessibilityDrawerVisible(true)}>
          <View style={styles.accessibilityButton}>
            <View style={styles.accessibilityIconContainer}>
              <Ionicons name="accessibility" style={styles.accessibilityIcon} />
            </View>
            <Text style={styles.accessibilityText}>Accessibility</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.languageButton}>
            <Image
              source={require("../assets/images/us-flag.png")}
              style={styles.languageIcon}
              resizeMode="contain"
            />
            <Text style={styles.languageText}>English</Text>
            <Ionicons name="chevron-down" size={20} color="#000000" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={[styles.bottomContainer, getContainerStyles()]}>
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
            <Text style={getTextStyles(styles.appName)}>LiftUP Ai</Text>
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
            <Text style={getTextStyles(styles.welcomeText)}>Welcome to</Text>
            <Text style={getTextStyles(styles.welcomeTextAppName)}>
              LiftUP Ai
            </Text>
          </View>
          <Text style={getTextStyles(styles.subtitle)}>
            Your Smart Learning Companion!
          </Text>
        </View>

        {/* Button Section */}
        <View style={styles.buttonContainer}>
          <LinearGradient
            colors={["#ffe066", "#9d4edd"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }} // 90deg → left to right
            style={styles.getStartedButton}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}
            >
              <Text style={styles.getStartedText}>Get Started</Text>
              <Ionicons name="chevron-forward" size={24} color="#ffffff" />
            </View>
          </LinearGradient>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Accessibility Drawer */}
      <AccessibilityDrawer
        visible={isAccessibilityDrawerVisible}
        onClose={() => setIsAccessibilityDrawerVisible(false)}
        biggerText={biggerText}
        onToggleBiggerText={handleToggleBiggerText}
        textSpacing={textSpacing}
        onToggleTextSpacing={handleToggleTextSpacing}
        textAlign={textAlign}
        onToggleTextAlign={handleToggleTextAlign}
        lineHeight={lineHeight}
        onToggleLineHeight={handleToggleLineHeight}
        onResetAll={handleResetAll}
      />
    </>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  accessibilityButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: Colors.light.surfaceTransparent,
    borderRadius: 20,
  },
  accessibilityIconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 24,
    width: 24,
    borderColor: Colors.light.borderDark,
    borderWidth: 1.5,
    borderRadius: 9999,
  },
  accessibilityIcon: {
    fontSize: 16,
  },
  accessibilityText: {
    color: Colors.light.primary,
    fontSize: 16,
    fontWeight: "500",
  },
  languageButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.light.surfaceTransparent,
    borderRadius: 20,
  },
  languageIcon: {
    width: 20,
    height: 20,
  },
  languageText: {
    color: Colors.light.primary,
    fontSize: 16,
    fontWeight: "500",
  },

  bottomContainer: {
    flexDirection: "column",
    gap: 32,
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
    color: Colors.light.primary,
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
    color: Colors.light.text,
    lineHeight: 38,
    letterSpacing: 0.5,
  },
  welcomeTextAppName: {
    fontSize: 32,
    fontWeight: "600",
    color: Colors.light.secondary,
    lineHeight: 38,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.light.textSecondary,
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
    backgroundColor: Colors.light.surface,
    alignItems: "center",
  },
  loginText: {
    fontSize: 18,
    fontWeight: "600",
  },
});

export default WelcomeScreen;
