import React from "react";
import { View, Text, StyleSheet, Image, useColorScheme } from "react-native";
import TypingMessage from "../Ui/TypingMessage";
type ChatMessageProps = {
  message: string;
  sender: "user" | "bot";
  imageUri?: string;
  animate?: boolean;
};

export default function ChatMessage({
  message,
  sender,
  imageUri,
  animate,
}: ChatMessageProps) {
  const isUser = sender === "user";
  const colorScheme = useColorScheme() ?? "light";

  // Decide bubble width based on text length
  const bubbleWidthStyle = message.length > 40 ? styles.longBubble : styles.shortBubble;

  // Define background colors based on the current theme.
  // For dark mode, we use the original colors.
  // For light mode, we use alternative lighter backgrounds.
  const userBubbleBackground = colorScheme === "dark" ? "#2C2C2E" : "#E0F7FA";
  const botBubbleBackground = colorScheme === "dark" ? "#3A3A3C" : "#F0F0F0";

  const bubbleBackground = isUser ? userBubbleBackground : botBubbleBackground;
  // Text color is set based on the theme.
  const textColor = colorScheme === "dark" ? "#fff" : "#000";

  return (
    <View style={isUser ? styles.userMessageContainer : styles.botMessageContainer}>
      <View style={[styles.bubble, bubbleWidthStyle, { backgroundColor: bubbleBackground }]}>
        {imageUri && (
          <Image source={{ uri: imageUri }} style={styles.imagePreview} />
        )}
        {animate ? (
          <TypingMessage message={message} />
        ) : (
          <Text style={[styles.messageText, { color: textColor }]}>{message}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    padding: 12,
    borderRadius: 16,
  },
  shortBubble: {
    maxWidth: "60%",
  },
  longBubble: {
    maxWidth: "90%",
  },
  messageText: {
    fontSize: 16,
  },
  userMessageContainer: {
    alignSelf: "flex-end",
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  botMessageContainer: {
    alignSelf: "flex-start",
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  imagePreview: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
});
