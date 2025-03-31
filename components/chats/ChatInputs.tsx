import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  useColorScheme,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

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
  const colorScheme = useColorScheme() ?? "light";
  const themeColors = Colors[colorScheme];
  const borderTopColor = colorScheme === "dark" ? "#333" : "#ccc";
  const cardBackground = colorScheme === "dark" ? "#2C2C2E" : "#f0f0f0";
  const iconColor = themeColors.text;
  const placeholderColor = "#888";

  return (
    <View style={[styles.inputContainer, { borderTopColor }]}>
      <TouchableOpacity onPress={() => console.log("Voice input pressed")}>
        <Ionicons name="mic-outline" size={22} color={iconColor} />
      </TouchableOpacity>

      <View style={[styles.innerInputContainer, { backgroundColor: cardBackground }]}>
        {selectedMedia && selectedMedia.uri && (
          <View style={styles.thumbnailContainer}>
            <Image source={{ uri: selectedMedia.uri }} style={styles.thumbnail} />
            <TouchableOpacity style={styles.removeIcon} onPress={onRemoveMedia}>
              <Text style={styles.removeIconText}>×</Text>
            </TouchableOpacity>
          </View>
        )}
        <TextInput
          style={[styles.textInput, { color: iconColor }]}
          placeholder="Ask anything"
          placeholderTextColor={placeholderColor}
          value={message}
          onChangeText={onChangeMessage}
          underlineColorAndroid="transparent"
        />
      </View>

      <View style={styles.rightIcons}>

        {/* Only uncomment it when adding the features for the Attachment */}
        {/*
        <TouchableOpacity onPress={() => console.log("Attach pressed")}>
          <Feather name="paperclip" size={22} color={iconColor} style={styles.iconSpacing} />
        </TouchableOpacity>
        */}
        
        <TouchableOpacity onPress={onImagePress}>
          <Feather name="image" size={22} color={iconColor} style={styles.iconSpacing} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onSend}>
          <Ionicons name="send" size={22} color={iconColor} style={styles.iconSpacing} />
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
    borderRadius: 20,
    paddingHorizontal: 10,
    minHeight: 50,
    height: "auto",
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
  },
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
