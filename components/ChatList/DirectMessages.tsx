import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View, StyleSheet, Alert, Image } from "react-native";

interface DirectMessagesProps {
  name: string;
  handle: string;
  date: string;
  message: string;
  avatarUrl?: string;
}

export default function DirectMessages({ name, handle, date, message, avatarUrl }: DirectMessagesProps) {
  return (
    // <Pressable onPress={() => Alert.alert("Message Selected", `You tapped on ${name}`)} style={styles.item}>
    <Pressable onPress={() =>(router.push('/direct-messages'))} style={styles.item}>

      <View style={styles.row}>
        {avatarUrl ? (
          <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        ) : (
          <View style={styles.placeholderAvatar}>
            <Text style={styles.placeholderText}>{name.charAt(0)}</Text>
          </View>
        )}
        <View style={styles.textContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
          <Text style={styles.handle}>{handle}</Text>
          <Text style={styles.message}>{message}</Text>
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
    backgroundColor: "#f0f0f0",
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
    backgroundColor: "#ccc",
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
    color: "gray",
  },
  handle: {
    color: "gray",
    fontSize: 14,
    marginVertical: 2,
  },
  message: {
    fontSize: 14,
    marginTop: 5,
  },
});
