import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const StartScreen = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[
        "rgba(247, 225, 250, 1)",
        "rgba(242, 228, 228, 1)",
        "rgba(242, 228, 228, 1)",
        "rgba(247, 225, 250, 1)",
      ]}
      locations={[0, 0.15, 0.7, 1]}
      start={{ x: 0.5, y: 1 }}
      end={{ x: 0.5, y: 0 }}
    >
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFE5EC" />

        <View style={styles.topBar}>
          <TouchableOpacity>
            <View style={styles.accessibilityButton}>
              <View style={styles.accessibilityIconContainer}>
                <Ionicons
                  name="accessibility"
                  style={styles.accessibilityIcon}
                />
              </View>
              <Text style={styles.accessibilityText}>Accessibility</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.languageButton}>
              <Image
                source={require("../../assets/images/us-flag.png")}
                style={styles.languageIcon}
                resizeMode="contain"
              />
              <Text style={styles.languageText}>English</Text>
              <Ionicons name="chevron-down" size={20} color="black" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomContainer}>
          {/* Main Content */}
          <View style={styles.content}>
            {/* Logo Section */}
            <View style={styles.logoContainer}>
              <Image
                source={require("../../assets/images/us-flag.png")} // Replace with your actual asset
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.appName}>LiftUP Ai</Text>
            </View>

            {/* Welcome Text */}
            <View style={styles.welcomeTextContainer}>
              <Text style={styles.welcomeText}>Welcome to</Text>
              <Text style={styles.welcomeTextAppName}>LiftUP Ai</Text>
            </View>
            <Text style={styles.subtitle}>Your Smart Learning Companion!</Text>
          </View>

          {/* Button Section */}
          <View style={styles.buttonContainer}>
            <LinearGradient
              colors={["rgba(255, 224, 102, 1)", "rgba(157, 78, 221, 1)"]}
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
                <Ionicons name="chevron-forward" size={24} color="white" />
              </View>
            </LinearGradient>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginText}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
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
    backgroundColor: "rgba(123, 44, 191, 0.1)",
    borderRadius: 20,
  },
  accessibilityIconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 24,
    width: 24,
    borderColor: "black",
    borderWidth: 1.5,
    borderRadius: 9999,
  },
  accessibilityIcon: {
    fontSize: 16,
  },
  accessibilityText: {
    color: "#7B2CBF",
    fontSize: 16,
    fontWeight: "500",
  },
  languageButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "rgba(123, 44, 191, 0.1)",
    borderRadius: 20,
  },
  languageIcon: {
    width: 20,
    height: 20,
  },
  languageText: {
    color: "#7B2CBF",
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
    color: "#7B2CBF",
    letterSpacing: 0.5,
  },
  welcomeTextContainer: {
    marginBottom: 12,
    flexDirection: "column",
    gap: 6,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "600",
    color: "#333",
    textAlign: "left",
  },
  welcomeTextAppName: {
    fontSize: 32,
    fontWeight: "600",
    color: "#9d4edd",
    textAlign: "left",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
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
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  loginButton: {
    paddingVertical: 16,
    borderRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
  },
  loginText: {
    fontSize: 18,
    fontWeight: "600",
  },
});

export default StartScreen;
