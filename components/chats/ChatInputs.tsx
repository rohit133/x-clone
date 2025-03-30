// ChatInput.tsx
import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Image, Text } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

const DARK_BG = "#1C1C1E";
const CARD_BG = "#2C2C2E";

type ChatInputProps = {
  message: string;
  onChangeMessage: (text: string) => void;
  onSend: () => void;
  onImagePress: () => void;
  selectedMedia?: any;
  onRemoveMedia: () => void;
};

export default function ChatInput({
  message,
  onChangeMessage,
  onSend,
  onImagePress,
  selectedMedia,
  onRemoveMedia,
}: ChatInputProps) {
  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity onPress={() => console.log("Voice input pressed")}>
        <Ionicons name="mic-outline" size={22} color="#fff" />
      </TouchableOpacity>
      
      <View style={styles.innerInputContainer}>
        {selectedMedia && selectedMedia.uri && (
          <View style={styles.thumbnailContainer}>
            <Image source={{ uri: selectedMedia.uri }} style={styles.thumbnail} />
            <TouchableOpacity style={styles.removeIcon} onPress={onRemoveMedia}>
              <Text style={styles.removeIconText}>×</Text>
            </TouchableOpacity>
          </View>
        )}
        <TextInput
          style={styles.textInput}
          placeholder="Ask anything"
          placeholderTextColor="#888"
          value={message}
          onChangeText={onChangeMessage}
          underlineColorAndroid="transparent"
        />
      </View>

      <View style={styles.rightIcons}>
        {/*
        <TouchableOpacity onPress={() => console.log("Attach pressed")}>
          <Feather name="paperclip" size={22} color="#fff" style={styles.iconSpacing} />
        </TouchableOpacity>
        */}
        <TouchableOpacity onPress={onImagePress}>
          <Feather name="image" size={22} color="#fff" style={styles.iconSpacing} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onSend}>
          <Ionicons name="send" size={22} color="#fff" style={styles.iconSpacing} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    gap: 6,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderTopWidth: 0.5,
  },
  innerInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: CARD_BG,
    borderRadius: 20,
    paddingHorizontal: 10,
    minHeight: 50,
    height: "auto",
  },
  textInput: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    paddingVertical: 0,
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
  },
  // Increase horizontal spacing between buttons
  iconSpacing: {
    marginLeft: 20,
  },
  thumbnailContainer: {
    position: "relative",
    marginRight: 8,
  },
  thumbnail: {
    width: 50,
    height: 100,
    borderRadius: 4,
  },
  removeIcon: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "rgba(0,0,0,0.7)",
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  removeIconText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
});
