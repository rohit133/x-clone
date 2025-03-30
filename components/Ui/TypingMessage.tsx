// TypingMessage.tsx
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

type TypingMessageProps = {
  message: string;
};

export default function TypingMessage({ message }: TypingMessageProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(message.slice(0, index + 1));
      index++;
      if (index === message.length) {
        clearInterval(interval);
      }
    }, 50); // Adjust typing speed here (50ms per character)
    return () => clearInterval(interval);
  }, [message]);

  return (
    <View>
      <Text style={styles.messageText}>{displayedText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  messageText: {
    fontSize: 16,
    color: "#fff",
  },
});
