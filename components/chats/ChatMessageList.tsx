import React from "react";
import Colors from "@/constants/Colors";
import { ChatMessageType } from "@/hooks/useChat";
import ChatMessage from "@/components/chats/ChatMessage";
import PinnedMessage from "@/components/chats/PinnedMessage";
import ThinkingIndicator from "@/components/Ui/ThinkingIndicator";
import { ScrollView, StyleSheet, useColorScheme } from "react-native";

type ChatMessageListProps = {
  chatMessages: ChatMessageType[];
  loadingResponse: boolean;
};

export default function ChatMessageList({
  chatMessages,
  loadingResponse,
}: ChatMessageListProps) {
  const colorScheme = useColorScheme() ?? "light";
  const themeColors = Colors[colorScheme];

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContent,
        chatMessages.length === 0 && styles.centerContent,
        { backgroundColor: themeColors.background },
      ]}
    >
      {chatMessages.length === 0 ? (
        <PinnedMessage
          pinnedTitle="Grok 3 is here."
          pinnedSubtitle="Hi there, how can I help you?"
        />
      ) : (
        chatMessages.map((msg) => (
          <ChatMessage
            key={msg.id}
            message={msg.text}
            sender={msg.sender}
            imageUri={msg.imageUri}
            animate={msg.animate}
          />
        ))
      )}
      {loadingResponse && <ThinkingIndicator />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 80,
    paddingHorizontal: 16,
    flexGrow: 1,
  },
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
  },
});
