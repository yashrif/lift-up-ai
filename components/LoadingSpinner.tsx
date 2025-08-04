import React, { useEffect, useRef } from "react";
import { ActivityIndicator, Animated, StyleSheet, Text } from "react-native";

import { colors } from "@/constants/colors";
import { LoadingSpinnerProps } from "@/types/common";

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message = "Loading...",
  size = "large",
  color = colors.light.primary,
  style,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.container, style, { opacity: fadeAnim }]}>
      <ActivityIndicator size={size} color={color} />
      {message && <Text style={styles.loadingText}>{message}</Text>}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    padding: 20,
  },
  loadingText: {
    fontSize: 16,
    color: colors.light.textSecondary,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default LoadingSpinner;
