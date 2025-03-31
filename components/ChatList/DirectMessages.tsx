import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View, StyleSheet, Image, useColorScheme } from "react-native";
import Colors from "@/constants/Colors";

interface DirectMessagesProps {
  name: string;
  handle: string;
  date: string;
  message: string;
  avatarUrl?: string;
}

export default function DirectMessages({ name, handle, date, message, avatarUrl }: DirectMessagesProps) {
  const colorScheme = useColorScheme() ?? "light";
  const themeColors = Colors[colorScheme];

  // Adjust the card background and placeholder avatar color for dark/light themes
  const cardBackground = colorScheme === "dark" ? "#1C1C1E" : "#f0f0f0";
  const placeholderBackground = colorScheme === "dark" ? "#444" : "#ccc";

  return (
    <Pressable onPress={() => router.push('/direct-messages')} style={[styles.item, { backgroundColor: cardBackground }]}>
      <View style={styles.row}>
        {avatarUrl ? (
          <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        ) : (
          <View style={[styles.placeholderAvatar, { backgroundColor: placeholderBackground }]}>
            <Text style={styles.placeholderText}>{name.charAt(0)}</Text>
          </View>
        )}
        <View style={styles.textContainer}>
          <View style={styles.titleRow}>
            <Text style={[styles.name, { color: themeColors.text }]}>{name}</Text>
            <Text style={[styles.date, { color: Colors.secondary_text_color }]}>{date}</Text>
          </View>
          <Text style={[styles.handle, { color: Colors.secondary_text_color }]}>{handle}</Text>
          <Text style={[styles.message, { color: themeColors.text }]}>{message}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 3,
    borderRadius: 30,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  placeholderAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  date: {
    fontSize: 12,
  },
  handle: {
    fontSize: 14,
    marginVertical: 2,
  },
  message: {
    fontSize: 14,
    marginTop: 5,
  },
});
