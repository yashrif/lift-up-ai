import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AccessibilityDrawer from "./AccessibilityDrawer";

const WelcomeScreen = () => {
  // Accessibility state management
  const [isAccessibilityDrawerVisible, setIsAccessibilityDrawerVisible] = useState(false);
  const [contrast, setContrast] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [biggerText, setBiggerText] = useState(false);
  const [textSpacing, setTextSpacing] = useState(false);
  const [pauseAnimations, setPauseAnimations] = useState(false);
  const [dyslexia, setDyslexia] = useState(false);
  const [cursor, setCursor] = useState(false);
  const [textAlign, setTextAlign] = useState<"left" | "center" | "right">("left");
  const [lineHeight, setLineHeight] = useState(false);

  // Accessibility handlers
  const handleToggleContrast = () => setContrast(!contrast);
  const handleToggleHighlightLinks = () => setHighlightLinks(!highlightLinks);
  const handleToggleBiggerText = () => setBiggerText(!biggerText);
  const handleToggleTextSpacing = () => setTextSpacing(!textSpacing);
  const handleTogglePauseAnimations = () => setPauseAnimations(!pauseAnimations);
  const handleToggleDyslexia = () => setDyslexia(!dyslexia);
  const handleToggleCursor = () => setCursor(!cursor);
  const handleToggleTextAlign = () => {
    const alignments: ("left" | "center" | "right")[] = ["left", "center", "right"];
    const currentIndex = alignments.indexOf(textAlign);
    const nextIndex = (currentIndex + 1) % alignments.length;
    setTextAlign(alignments[nextIndex]);
  };
  const handleToggleLineHeight = () => setLineHeight(!lineHeight);
  const handleResetAll = () => {
    setContrast(false);
    setHighlightLinks(false);
    setBiggerText(false);
    setTextSpacing(false);
    setPauseAnimations(false);
    setDyslexia(false);
    setCursor(false);
    setTextAlign("left");
    setLineHeight(false);
  };

  // Get dynamic styles based on accessibility settings
  const getTextStyles = (baseStyle: any) => ({
    ...baseStyle,
    lineHeight: lineHeight ? baseStyle.lineHeight * 1.5 : baseStyle.lineHeight,
    letterSpacing: textSpacing ? (baseStyle.letterSpacing || 0) + 2 : baseStyle.letterSpacing,
    textAlign: textAlign,
    fontSize: biggerText ? baseStyle.fontSize * 1.2 : baseStyle.fontSize,
    color: contrast ? '#000000' : baseStyle.color,
  });

  const getContainerStyles = () => ({
    backgroundColor: contrast ? '#FFFFFF' : 'transparent',
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
        <View style={styles.content}>
          {/* Logo Section */}
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/us-flag.png")} // Replace with your actual asset
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={getTextStyles(styles.appName)}>LiftUP Ai</Text>
          </View>

          {/* Welcome Text */}
          <View style={styles.welcomeTextContainer}>
            <Text style={getTextStyles(styles.welcomeText)}>Welcome to</Text>
            <Text style={getTextStyles(styles.welcomeTextAppName)}>LiftUP Ai</Text>
          </View>
          <Text style={getTextStyles(styles.subtitle)}>Your Smart Learning Companion!</Text>
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
        contrast={contrast}
        onToggleContrast={handleToggleContrast}
        highlightLinks={highlightLinks}
        onToggleHighlightLinks={handleToggleHighlightLinks}
        biggerText={biggerText}
        onToggleBiggerText={handleToggleBiggerText}
        textSpacing={textSpacing}
        onToggleTextSpacing={handleToggleTextSpacing}
        pauseAnimations={pauseAnimations}
        onTogglePauseAnimations={handleTogglePauseAnimations}
        dyslexia={dyslexia}
        onToggleDyslexia={handleToggleDyslexia}
        cursor={cursor}
        onToggleCursor={handleToggleCursor}
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
    marginBottom: 15,
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
    textAlign: "left",
    lineHeight: 38,
    letterSpacing: 0.5,
  },
  welcomeTextAppName: {
    fontSize: 32,
    fontWeight: "600",
    color: Colors.light.secondary,
    textAlign: "left",
    lineHeight: 38,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.light.textSecondary,
    textAlign: "center",
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
