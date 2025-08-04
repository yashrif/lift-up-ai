import WelcomeScreen from "@/components/WelcomeScreen";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const StartScreen = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#f7e1fa", "#f2e4e4", "#f2e4e4", "#f7e1fa"]}
      locations={[0, 0.15, 0.7, 1]}
      start={{ x: 0.5, y: 1 }}
      end={{ x: 0.5, y: 0 }}
    >
      <SafeAreaView style={styles.safeArea}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.light.background}
        />
        <WelcomeScreen />
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
});

export default StartScreen;
