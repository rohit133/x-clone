import React from "react";
import Colors from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme,} from "react-native";

type ChatHeaderProps = {
  title: string;
  onPressBack: () => void;
  onPressSettings: () => void;
  onPressProfile?: () => void; // Optional property
};

export default function ChatHeader({ title, onPressBack, onPressSettings,}: ChatHeaderProps) {
  const colorScheme = useColorScheme() ?? "light";
  const themeColors = Colors[colorScheme];
  return (
    <View
      style={[styles.header, {
        backgroundColor: themeColors.background,
        borderBottomColor: colorScheme === "dark" ? "#333" : "#ccc",
      },
      ]}>
      <TouchableOpacity onPress={onPressBack} style={styles.sideButton}>
        <Feather name="arrow-left" size={24} color={themeColors.text} />
      </TouchableOpacity>

      <Text style={[styles.headerTitle, { color: themeColors.text }]}>
        {title}
      </Text>

      <TouchableOpacity onPress={onPressSettings} style={styles.sideButton}>
        <Feather name="settings" size={24} color={themeColors.text} />
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
    borderBottomWidth: 0.5,
  },
  sideButton: {
    width: 40,
    alignItems: "center",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
});
