import React from "react";
import { View, TextInput, Image, StyleSheet } from "react-native";

interface ComposeInputProps {
  tweetContent: string;
  setTweetContent: (text: string) => void;
  userProfileImage: string;
}

const ComposeInput: React.FC<ComposeInputProps> = ({
  tweetContent,
  setTweetContent,
  userProfileImage,
}) => {
  return (
    <View style={styles.composeContainer}>
      <Image source={{ uri: userProfileImage }} style={styles.avatar} />
      <TextInput
        style={styles.input}
        placeholder="What's happening?"
        placeholderTextColor="#888"
        multiline
        value={tweetContent}
        onChangeText={setTweetContent}
      />
    </View>
  );
};

export default ComposeInput;

const styles = StyleSheet.create({
  composeContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  input: {
    flex: 1,
    color: "#000",
    fontSize: 16,
    lineHeight: 22,
    paddingTop: 8,
  },
});
