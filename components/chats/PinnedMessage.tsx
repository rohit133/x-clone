import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import Colors from "@/constants/Colors";

type PinnedMessageProps = {
  pinnedTitle: string;
  pinnedSubtitle: string;
};

export default function PinnedMessage({
  pinnedTitle,
  pinnedSubtitle,
}: PinnedMessageProps) {
  const colorScheme = useColorScheme() ?? "light";
  const themeColors = Colors[colorScheme];

  return (
    <View style={styles.container}>
      <Text style={[styles.pinnedTitle, { color: themeColors.text }]}>
        {pinnedTitle}
      </Text>
      <Text style={[styles.pinnedSubtitle, { color: themeColors.text }]}>
        {pinnedSubtitle}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  pinnedTitle: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 4,
  },
  pinnedSubtitle: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 12,
  },
});
