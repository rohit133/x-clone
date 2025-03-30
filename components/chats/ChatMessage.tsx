// ChatMessage.tsx
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
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

  // Decide bubble width based on text length
  const bubbleWidthStyle = message.length > 40 ? styles.longBubble : styles.shortBubble;

  return (
    <View
      style={
        isUser ? styles.userMessageContainer : styles.botMessageContainer
      }
    >
      <View
        style={[
          styles.bubble,
          bubbleWidthStyle,
          isUser ? styles.userBubble : styles.botBubble,
        ]}
      >
        {imageUri && (
          <Image source={{ uri: imageUri }} style={styles.imagePreview} />
        )}
        {animate ? (
          <TypingMessage message={message} />
        ) : (
          <Text style={styles.messageText}>{message}</Text>
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
  userBubble: {
    backgroundColor: "#2C2C2E",
    borderTopRightRadius: 0,
  },
  botBubble: {
    backgroundColor: "#3A3A3C",
    borderTopLeftRadius: 0,
  },
  messageText: {
    fontSize: 16,
    color: "#fff",
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
