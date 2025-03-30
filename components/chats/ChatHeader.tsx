import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

type ChatHeaderProps = {
  title: string;
  onPressBack: () => void;
  onPressSettings: () => void;
  onPressProfile?: () => void; // Added onPressProfile as an optional property
};
export default function ChatHeader({
  title,
  onPressBack,
  onPressSettings,
}: ChatHeaderProps) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPressBack} style={styles.sideButton}>
        <Feather name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.headerTitle}>{title}</Text>

      <TouchableOpacity onPress={onPressSettings} style={styles.sideButton}>
        <Feather name="settings" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    backgroundColor: "#1C1C1E",
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
  },
  sideButton: {
    width: 40,
    alignItems: "center",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
