// components/TweetComposer.tsx
import React from "react";
import { View, Image, StyleSheet, ActivityIndicator, TouchableOpacity, Text } from "react-native";
import ComposeInput from "@/components/composer/ComposeInput";
import Colors from "@/constants/Colors";

interface TweetComposerProps {
  tweetContent: string;
  setTweetContent: (text: string) => void;
  userProfileImage: string;
  selectedMedia: any;
  isPosting: boolean;
  removeSelectedMedia: () => void;
}

export default function TweetComposer({
  tweetContent,
  setTweetContent,
  userProfileImage,
  selectedMedia,
  isPosting,
  removeSelectedMedia,
}: TweetComposerProps) {
  return (
    <View style={styles.container}>
      <ComposeInput
        tweetContent={tweetContent}
        setTweetContent={setTweetContent}
        userProfileImage={userProfileImage}
      />
      {selectedMedia && selectedMedia.uri && (
        <View style={styles.imagePreviewContainer}>
          <Image
            source={{ uri: selectedMedia.uri }}
            style={styles.mediaPreview}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.removeButton} onPress={removeSelectedMedia}>
            <Text style={styles.removeButtonText}>×</Text>
          </TouchableOpacity>
        </View>
      )}
      {isPosting && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={Colors.light.tint} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  imagePreviewContainer: {
    marginTop: 10,
    position: "relative",
  },
  mediaPreview: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginTop: 10,
  },
  removeButton: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  removeButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loaderContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
