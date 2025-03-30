import React from "react";
import { View, Text, StyleSheet } from "react-native";


type PinnedMessageProps = {
  pinnedTitle: string;
  pinnedSubtitle: string;
};

export default function PinnedMessage({ pinnedTitle, pinnedSubtitle,}: PinnedMessageProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.pinnedTitle}>{pinnedTitle}</Text>
      <Text style={styles.pinnedSubtitle}>{pinnedSubtitle}</Text>
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
    color: "#fff",
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 4,
  },
  pinnedSubtitle: {
    color: "#999",
    fontSize: 18,
    marginBottom: 12,
  },
});
