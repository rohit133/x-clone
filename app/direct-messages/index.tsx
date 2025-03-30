import ChatMessageList from "@/components/chats/ChatMessageList";
import ChatInput from "@/components/chats/ChatInputs";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import * as ImagePicker from "expo-image-picker";
import ChatHeader from "@/components/chats/ChatHeader";
import { router } from "expo-router";

export default function DirectMessagesChatScreen() {
  const [message, setMessage] = useState("");
  type ChatMessageType = { id: string; text: string; sender: "user" | "bot" };
  const [chatMessages, setChatMessages] = useState<ChatMessageType[]>([]);
  const [selectedMedia, setSelectedMedia] = useState<{ uri: string } | null>(null);
  const [loadingResponse, setLoadingResponse] = useState(false);
  const displayMessages = chatMessages.length === 0 ? [{ id: "dummy", text: "", sender: "user" as "user" }] : chatMessages;



  const sendMessage = () => {
    if (!message.trim()) return;
    setChatMessages((prev) => prev.filter((msg) => msg.id !== "dummy"));
    // Add the user's message to the chat list.
    const userMessage: { id: string; text: string; sender: "user" | "bot" } = {
      id: Date.now().toString(),
      text: message,
      sender: "user",
    };
    setChatMessages((prev) => [...prev, userMessage]);
    setMessage("");

    // Simulate an echo reply after a 1-second delay.
    setLoadingResponse(true);
    setTimeout(() => {
      const echoMessage: { id: string; text: string; sender: "user" | "bot" } = {
        id: (Date.now() + 1).toString(),
        text: userMessage.text,
        sender: "bot",
      };
      setChatMessages((prev) => [...prev, echoMessage]);
      setLoadingResponse(false);
    }, 1000);
  };

  const handleImagePress = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setSelectedMedia({ uri: result.assets[0].uri });
    }
  };

  const removeSelectedImage = () => {
    setSelectedMedia(null);
  };

  return (
    <SafeAreaView style={styles.container}>
          <ChatHeader
              title="John Doe"
              onPressSettings={() => (router.push('/action'))}
              onPressBack={() => router.back()}
          />
          <ChatMessageList chatMessages={displayMessages} loadingResponse={loadingResponse} />

          <ChatInput
              message={message}
              onChangeMessage={setMessage}
              onSend={sendMessage}
              onImagePress={handleImagePress}
              selectedMedia={selectedMedia}
              onRemoveMedia={removeSelectedImage}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
});
