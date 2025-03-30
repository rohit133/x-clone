// components/ChatMessageList.tsx
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ChatMessage from "@/components/chats/ChatMessage";
import PinnedMessage from "@/components/chats/PinnedMessage";
import ThinkingIndicator from "@/components/Ui/ThinkingIndicator";
import { ChatMessageType } from "@/hooks/useChat";

type ChatMessageListProps = {
  chatMessages: ChatMessageType[];
  loadingResponse: boolean;
};

export default function ChatMessageList({
  chatMessages,
  loadingResponse,
}: ChatMessageListProps) {
  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContent,
        chatMessages.length === 0 && styles.centerContent,
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
