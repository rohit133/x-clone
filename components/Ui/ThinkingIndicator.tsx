import React, { useEffect, useRef } from "react";
import { View, Animated, StyleSheet, useColorScheme } from "react-native";
import Colors from "@/constants/Colors";

export default function ThinkingIndicator() {
  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateDot = (dot: Animated.Value, delay: number) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(dot, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
            delay,
          }),
          Animated.timing(dot, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    animateDot(dot1, 0);
    animateDot(dot2, 150);
    animateDot(dot3, 300);
  }, [dot1, dot2, dot3]);

  const colorScheme = useColorScheme() ?? "light";
  const themeColors = Colors[colorScheme];

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.dot, { opacity: dot1, backgroundColor: themeColors.text }]}
      />
      <Animated.View
        style={[styles.dot, { opacity: dot2, backgroundColor: themeColors.text }]}
      />
      <Animated.View
        style={[styles.dot, { opacity: dot3, backgroundColor: themeColors.text }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});
