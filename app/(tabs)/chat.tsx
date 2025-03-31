import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { router } from "expo-router";
import ChatHeader from "@/components/chats/ChatHeader";
import ChatInput from "@/components/chats/ChatInputs";
import Colors from "@/constants/Colors";
import { useChat } from "@/hooks/useChat";
import * as ImagePicker from "expo-image-picker";
import ChatMessageList from "@/components/chats/ChatMessageList";

export default function ChatTab() {
  // Determine the current color scheme. Default to "light" if null.
  const colorScheme = useColorScheme() ?? "light";

  const {
    message,
    setMessage,
    chatMessages,
    loadingResponse,
    selectedMedia,
    setSelectedMedia,
    sendMessage,
  } = useChat();

  const handleImagePress = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
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
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: Colors[colorScheme].background },
      ]}
    >
      <ChatHeader
        title="Grok 3"
        onPressProfile={() => console.log("Profile pressed")}
        onPressSettings={() => console.log("Settings pressed")}
        onPressBack={() => router.back()}
      />
      <ChatMessageList
        chatMessages={chatMessages}
        loadingResponse={loadingResponse}
      />
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
  },
});
